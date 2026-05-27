Merajah-Views 🚀

<p align="center">
  <img src="https://img.shields.io/badge/Node.js-v22+-3C873A?style=for-the-badge&logo=node.js&logoColor=white">
  <img src="https://img.shields.io/badge/Baileys-ESM-5865F2?style=for-the-badge">
  <img src="https://img.shields.io/badge/Platform-WhatsApp-25D366?style=for-the-badge&logo=whatsapp&logoColor=white">
  <img src="https://img.shields.io/badge/Maintained-Yes-00C853?style=for-the-badge">
</p><p align="center">
  <img src="https://readme-typing-svg.herokuapp.com?font=Fira+Code&size=24&pause=1000&color=00FF99&center=true&vCenter=true&width=700&lines=Simple+WhatsApp+Status+Viewer+Bot;Built+With+Baileys+%26+ESM;Fast+%E2%80%A2+Lightweight+%E2%80%A2+Modern">
</p><p align="center">
  Modern WhatsApp Status Viewer Bot built using <b>Baileys</b> with a clean ESM structure, lightweight performance, and automatic status interaction features.
</p>---

✨ Features

- 👀 Auto Read WhatsApp Status
- ❤️ Auto React Status
- 🔐 Pairing Code Login
- 📱 QR Code Login
- ⚡ Lightweight & Fast
- ♻️ Smart Auto Reconnect
- 🧠 Dynamic Config Reload
- 🛡️ Anti Infinite Loop
- 📂 Multi File Session
- 🎨 Clean Console Logging
- 🚀 ESM Modern Structure

---

⚙️ Configuration

Edit "config.json"

{
  "pairing": true,
  "number": "6281234567890",
  "reactStatus": false,
  "emojis": ["👍", "❤️", "🔥"]
}

Configuration Explanation

Parameter| Description
"pairing"| "true" = Pairing Code Login
"number"| WhatsApp number using country code
"reactStatus"| Enable auto reaction for statuses
"emojis"| Emoji list used for random reactions

---

📦 Installation

Clone Repository

git clone https://github.com/Dwi-Merajah/Merajah-Views.git
cd Merajah-Views

Install Dependencies

npm install

---

🚀 Running The Bot

Normal Mode

npm start

PM2 Mode

pm2 start index.js --name "Merajah-Views"

Useful PM2 Commands

pm2 logs Merajah-Views
pm2 restart Merajah-Views
pm2 stop Merajah-Views
pm2 save

---

📁 Project Structure

Merajah-Views/
├── session/
├── config.json
├── index.js
├── package.json
└── README.md

---

📝 Notes

- Recommended using Node.js v22+
- Supports VPS, Pterodactyl, and local hosting
- Session stored inside "/session"
- Bot only reads "status@broadcast"
- Config automatically reloads without restart

---

💖 Credits

- Merajah
- Baileys
- WhiskeySockets
- ItsLiaaa

---

<p align="center">
  Made with ❤️ by Merajah
</p>
