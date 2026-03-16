# LegalHaven

Texas-based student-led organization dedicated to ensuring every person has access to the legal help they need.

## Deploy

### GitHub Pages
1. Push this repo to GitHub
2. Go to **Settings → Pages**
3. Set source to `main` branch, `/ (root)`
4. Your site will be live at `https://yourusername.github.io/legalhaven`

### Netlify
Drag and drop this folder at [app.netlify.com](https://app.netlify.com)

### Vercel
Run `npx vercel` in this folder

## File Structure
```
legalhaven/
├── index.html
├── assets/
│   ├── css/styles.css
│   └── js/main.js
├── .gitignore
└── README.md
```

## Connect the Contact Form
Replace the `setTimeout` in `assets/js/main.js` with Formspree, EmailJS, or Netlify Forms.
