import makeWASocket, {
  useMultiFileAuthState,
  fetchLatestBaileysVersion,
  DisconnectReason,
  Browsers,
  jidNormalizedUser
} from "@itsliaaa/baileys"
import pino from "pino"
import chalk from "chalk"
import fs from "fs"
import { Boom } from "@hapi/boom"

const configPath = "./config.json"
let config = JSON.parse(fs.readFileSync(configPath, "utf-8"))

const logs = {
  info: text => console.log(chalk.blueBright("[ INFO ]"), chalk.white(text)),
  success: text => console.log(chalk.greenBright("[ SUCCESS ]"), chalk.white(text)),
  error: text => console.log(chalk.redBright("[ ERROR ]"), chalk.white(text)),
  warn: text => console.log(chalk.yellowBright("[ WARNING ]"), chalk.white(text)),
  log: text => console.log(chalk.magentaBright("[ LOG ]"), chalk.white(text))
}

async function start() {
  const sessionFolder = "./session"
  const { state, saveCreds } = await useMultiFileAuthState(sessionFolder)
  const { version } = await fetchLatestBaileysVersion()

  const sock = makeWASocket({
    version,
    logger: pino({ level: "silent" }),
    auth: state,
    printQRInTerminal: !config.pairing,
    defaultQueryTimeoutMs: undefined,
    keepAliveIntervalMs: 30000,
    browser: Browsers.macOS("Chrome"),
    shouldSyncHistoryMessage: () => true,
    syncFullHistory: true,
    generateHighQualityLinkPreview: true
  })

  if (config.pairing && !sock.authState.creds.registered) {
    setTimeout(async () => {
      try {
        logs.info("Login Menggunakan Pairing Code, meminta kode...")
        const phoneNumber = config.number.replace(/[^0-9]/g, "")
        const code = await sock.requestPairingCode(phoneNumber)
        const formattedCode = `${code.slice(0, 4)}-${code.slice(4)}`
        logs.success(`Pairing Code : ${formattedCode}`)
      } catch (err) {
        logs.error(`Gagal meminta pairing code: ${err.message}`)
      }
    }, 4000)
  }

  sock.ev.on("connection.update", async (update) => {
    const { connection, lastDisconnect } = update
    if (connection === "connecting") logs.info("Connecting to WhatsApp...")
    if (connection === "open") logs.success(`Connected : ${sock.user?.id?.split(":")[0]}`)

    if (connection === "close") {
      const reason = new Boom(lastDisconnect?.error)?.output?.statusCode
      if (reason === DisconnectReason.badSession || reason === DisconnectReason.loggedOut) {
        if (fs.existsSync(sessionFolder)) fs.rmSync(sessionFolder, { recursive: true, force: true })
        if (reason === DisconnectReason.loggedOut) process.exit()
      }
      setTimeout(start, 5000)
    }
  })

  sock.ev.on("messages.upsert", async ({ messages }) => {
    const msg = messages[0]
    if (!msg.message) return

    if (msg.key.remoteJid === "status@broadcast" && !msg.key.fromMe) {
      const senderJid = msg.key.remoteJidAlt || msg.key.participantAlt || msg.key.participant || "Tidak diketahui"
      const cleanSender = senderJid.split("@")[0]
      const senderName = msg.pushName || "Teman"

      config = JSON.parse(fs.readFileSync(configPath, "utf-8"))
      await sock.readMessages([msg.key])
      logs.info(`Melihat status dari: ${senderName} (${cleanSender})`)
      if (config.reactStatus && config.emojis && config.emojis.length > 0) {
        const myself = jidNormalizedUser(sock.user.id)    
        const listEmoji = config.emojis
        const randomEmoji = listEmoji[Math.floor(Math.random() * listEmoji.length)]
        
        await sock.sendMessage(
          msg.key.remoteJid,
          { react: { key: msg.key, text: randomEmoji } },
          { statusJidList: [senderJid, myself] }
        )
        logs.success(`Berhasil memberikan react "${randomEmoji}" ke status ${senderName}`)
      }
    }
  })

  sock.ev.on("creds.update", saveCreds)
  return sock
}

start()
