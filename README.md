# InterviewReady UK 🎓
### Free AI Mock Interview Coach for UK Study Abroad

A completely free mock interview portal for students preparing for UK university admissions, student visa, and scholarship (Chevening/Commonwealth/Gates) interviews.

---

## ✨ Features

- **3 interview types** — University admission, UK student visa, scholarship
- **Voice + text answers** — Speak or type your responses
- **AI coaching** — Scored out of 10 with strengths, improvement areas, and ideal answer structure
- **Question variety** — 7 questions per category, 5 randomly selected each session
- **Try again** — Retry any question as many times as you want
- **Full results report** — Performance summary after every session
- **No login required** — No data stored, fully private
- **Mobile friendly** — Works on phones and tablets
- **Dark mode** — Automatically adapts to your system preference

---

## 🚀 Deploy to Vercel (5 minutes)

### Option 1: Drag and drop (easiest)
1. Go to [vercel.com](https://vercel.com) and sign up for free
2. Click **"Add New Project"** → **"Deploy from folder"**
3. Drag the entire `uk-interview-portal` folder
4. Click **Deploy** — done!

### Option 2: GitHub + Vercel (recommended)
1. Push this folder to a GitHub repository
2. Go to [vercel.com](https://vercel.com) → **"Add New Project"**
3. Import your GitHub repository
4. Click **Deploy** — Vercel auto-detects the static site

---

## 🔑 Adding Your Anthropic API Key

The app works in **demo mode** without an API key (with basic feedback). For full AI-powered coaching:

1. Get a free API key at [console.anthropic.com](https://console.anthropic.com)
2. Open `app.js` and find this line near the top:
   ```javascript
   const ANTHROPIC_API_KEY = 'YOUR_API_KEY_HERE';
   ```
3. Replace `YOUR_API_KEY_HERE` with your actual key

> ⚠️ **Security note for production**: Embedding an API key in client-side JavaScript is fine for personal/demo use, but anyone viewing your site's source code can see it. For a public site, set up a simple backend proxy (Vercel serverless function) to keep the key private.

### Setting up a Vercel serverless proxy (optional, recommended for public sites)

Create `/api/chat.js` in your project:

```javascript
export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end();
  
  const response = await fetch('https://api.anthropic.com/v1/messages', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': process.env.ANTHROPIC_API_KEY,
      'anthropic-version': '2023-06-01'
    },
    body: JSON.stringify(req.body)
  });
  
  const data = await response.json();
  res.json(data);
}
```

Then in `app.js`, change the fetch URL from:
```javascript
const res = await fetch('https://api.anthropic.com/v1/messages', {
```
to:
```javascript
const res = await fetch('/api/chat', {
```
And remove the `x-api-key` and `anthropic-dangerous-direct-browser-access` headers from the request.

Set your key in Vercel: **Project Settings → Environment Variables → Add `ANTHROPIC_API_KEY`**

---

## 📁 File Structure

```
uk-interview-portal/
├── index.html      — Main HTML structure
├── style.css       — All styling (light + dark mode)
├── app.js          — Interview logic + AI API calls
├── vercel.json     — Vercel deployment config
└── README.md       — This file
```

---

## 🛠 Customising

**Add more questions** — Edit the `QUESTIONS` object in `app.js`

**Change number of questions per session** — Find `pool.slice(0, 5)` in `app.js` and change `5`

**Add a new interview type** — Add a new key to `QUESTIONS`, `TYPE_LABELS`, and a new card in `index.html`

**Change the coach name** — Search for "Dr. Emma Clarke" in `index.html` and `app.js`

---

## 💙 Built for students

This project is free forever for students who can't afford paid platforms like FindUni.AI. If you find it useful, share it with others who need it.

---

*No data is stored. No accounts required. No tracking.*
