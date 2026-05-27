# Merajah-Views 🚀

<p align="center">
  <img src="https://img.shields.io/badge/Node.js-v22+-3C873A?style=for-the-badge&logo=node.js&logoColor=white" />
  <img src="https://img.shields.io/badge/Baileys-ESM-5865F2?style=for-the-badge" />
  <img src="https://img.shields.io/badge/Platform-WhatsApp-25D366?style=for-the-badge&logo=whatsapp&logoColor=white" />
  <img src="https://img.shields.io/badge/Maintained-Yes-00C853?style=for-the-badge" />
</p>

<p align="center">
  Lightweight WhatsApp Status Viewer Bot built using Baileys and ESM.
</p>

---

## ✨ Features

- 👀 Auto Read WhatsApp Status
- ❤️ Auto React Status
- 🔐 Pairing Code Login
- ⚡ Lightweight & Fast
- ♻️ Smart Auto Reconnect
- 📂 Multi Session Authentication
- 🎨 Clean Console Logging & Code

---

## ⚙️ Configuration

Edit `config.json`

```json
{
  "pairing": true,
  "number": "6281234567890",
  "reactStatus": false,
  "emojis": ["👍", "❤️", "🔥"]
}
```

### Configuration Explanation

| Parameter | Description |
| --- | --- |
| `pairing` | `true` = Login using Pairing Code |
| `number` | WhatsApp number using country code |
| `reactStatus` | Enable auto react status |
| `emojis` | Emoji list for random reactions |

---

## 📦 Installation

### Clone Repository

```bash
git clone https://github.com/Dwi-Merajah/Merajah-Views.git
cd Merajah-Views
```

### Install Dependencies

```bash
npm install
```

---

## 🚀 Running Bot

### Normal Mode

```bash
npm start
```

### PM2 Mode

```bash
pm2 start index.js --name "Merajah-Views"
```

### Useful PM2 Commands

```bash
pm2 logs Merajah-Views
pm2 restart Merajah-Views
pm2 stop Merajah-Views
pm2 save
```

---

## 📁 Project Structure

```bash
Merajah-Views/
├── session/
├── config.json
├── index.js
├── package.json
└── README.md
```

---

## 📝 Notes

- Recommended using Node.js v22+
- Supports VPS, Pterodactyl, and Local Hosting
- Session files stored inside `/session`
- Bot only listens to `status@broadcast`
- Lightweight and optimized for 24/7 usage

---

## 💖 Credits

- Merajah
- Baileys
- WhiskeySockets
- ItsLiaaa

---

<p align="center">
  Made with ❤️ by Merajah
</p>
