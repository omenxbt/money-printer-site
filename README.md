# $MOP Money Printer Website

A 1:1 replica of https://money-printer.netlify.app/

## Files Structure

```
money-printer-site/
├── index.html              # Main HTML file
├── index-fae6f586.css     # Tailwind + DaisyUI CSS (exact copy)
├── main.js                 # JavaScript for interactivity
├── assets/                 # Image assets
│   ├── mog-bags-252126f5.png
│   ├── mog-lockedin-048d658b.png
│   ├── mog-printer-1-04275e91.png
│   └── sol-logo-e5721ef7.png
└── README.md
```

## Features

- **Hero Section**: Full viewport height with emoji background pattern (💻🐱 and ☕🐱 alternating)
- **Navbar**: Fixed top navbar with logo, navigation links, and mobile hamburger menu
- **Tokenomics Section**: Gradient background (mint green to purple) with tokenomics info
- **Interactive Elements**: 
  - Contract address copy functionality
  - Smooth scrolling navigation
  - Mobile-responsive dropdown menu
  - Hover effects on buttons and images

## Setup

1. Serve the files using a local web server (the CSS uses absolute paths like `/assets/`)
2. For local development, you can use:
   ```bash
   python3 -m http.server 8000
   # or
   npx serve
   ```
3. Open `http://localhost:8000` in your browser

## Note

The CSS references `/assets/mopgrid-2d1b5463.png` for the hero background grid pattern. If this file doesn't exist, the emoji pattern overlay will still display. To add the grid pattern, place the `mopgrid-2d1b5463.png` file in the `assets/` directory.

## Responsive Breakpoints

- Mobile: ≤ 620px
- Tablet: ~768px  
- Desktop: ≥ 1024px

All styling matches the original site exactly using the provided CSS file.
