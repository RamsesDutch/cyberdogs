# Cyberdogs - Virtual Watchdogs for Your Website

Cyberdogs is an interactive, gamified cybersecurity-awareness widget for websites. Inspired by classic virtual pets, these cartoon-style watchdogs monitor user behavior, react to suspicious actions, and help promote security awareness through friendly interactions.

---

## Features

- Multilingual warning messages
- Lottie-animated tail-wagging dog
- Detects browser developer tools and reacts visually
- Optional barking sound effect
- Sends events using the Beacon API (privacy-conscious)
- Bonus phishing-awareness quiz for end-user education

---

## How It Works

Once embedded on a webpage, the Cyberdog:

- Detects if browser developer tools are opened
- Displays a warning message in the user's preferred language
- Switches to an "angry" dog image
- Optionally plays a bark sound
- Links users to a cybersecurity awareness quiz
- Sends a lightweight event to your backend for tracking (optional)

---

## Folder Structure

```
cyberdogs/
├── public/
│ ├── index.html
│ ├── style.css
│ ├── cyberdog.js
│ ├── dogs/
│ │ ├── watchdog1.svg
│ │ ├── watchdog-angry.svg
│ │ ├── bark.mp3
│ │ └── tail-wag.json
│ ├── kennel/
│ │ └── quiz.html
│ └── languages.json
└── README.md
```

---

## How to Use (Embed on Your Site)

1. Copy the entire `cyberdogs/` folder to your project (or host it separately).
2. Add this just before the closing `</body>` tag in your site:

```html
<link rel="stylesheet" href="/cyberdogs/style.css">
<div id="cyberdog-widget">
  <div id="lottie-dog"></div>
  <div id="message"></div>
  <a id="train-link" href="/cyberdogs/kennel/quiz.html">Train Me!</a>
</div>
<script src="https://cdnjs.cloudflare.com/ajax/libs/bodymovin/5.9.6/lottie.min.js"></script>
<script src="/cyberdogs/cyberdog.js"></script>
```

---

## Language Support

Out of the box, Cyberdogs supports:

- 🇬🇧 English

- 🇳🇱 Dutch

- 🇪🇸 Spanish

- 🇩🇪 German

- 🇫🇷 French

Add more in the languages.json or directly in cyberdog.js.

---

## Example Use Case

Put a “Beware of the Dog” sign on your site — but make it digital.

Visitors who try to open devtools or act shady will be:

Barked at 

Shown a warning message 

Redirected (if you want) to learn some cybersecurity basics 

---

## Optional: Level System (Coming Soon)

I'm planning a level-up system based on:

- XP and leveling system based on time and quiz engagement
- Site badge integration (e.g. "Protected by Cyberdog")
- Backend dashboard for event review and analytics

Stay tuned!

---

## Credits & License

Created by Ramses Dutch
Licensed under MIT. Free to use, remix, share. Do whatever you want with it!

---
