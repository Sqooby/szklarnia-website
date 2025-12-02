# Getting Started with Szklane Wspomnienia Website

## Quick Start

1. **Open the website**: Simply double-click `index.html` or open it in your web browser
2. **View in browser**: The site works locally without any server needed

## What's Included

### Pages & Sections
- **Hero Section**: Features your logo with elegant animation
- **About Section**: Brand story with a featured photo
- **Portfolio**: 6 beautiful photos from your collection
- **Services**: Three main service offerings
- **Contact Form**: Interactive contact form with validation
- **Footer**: Brand footer with decorative elements

### Your Photos in the Site
- Hero: Your logo animates in at the top
- About: `KasiaMichał (3).jpg` - featured couple photo
- Portfolio:
  - `KasiaMichał (1).jpg` - Large hero image
  - `beautiful-couple-spend-time-summer-park.jpg` - Nature shot
  - `KasiaMichał (2).jpg` - Romantic moment
  - `people-by-river-delicious-healthy-summer-picnic-grass-fruits-blancet.jpg` - Picnic scene
  - `KasiaMichał (4).jpg` - Wide romantic moment
  - `couple-christmas.jpg` - Christmas themed

## Customization Guide

### Adding More Photos to Portfolio

1. Add more portfolio items by copying this code structure in `index.html`:

```html
<div class="portfolio-item" data-category="your-category">
    <div class="portfolio-image" style="background-image: url('public/your-photo.jpg');">
        <div class="portfolio-overlay">
            <span class="portfolio-category">Category Name</span>
            <h3 class="portfolio-title">Photo Title</h3>
        </div>
    </div>
</div>
```

### Changing Colors

All colors are defined as CSS variables at the top of `styles.css`:

```css
--color-cream: #E8DFD5;
--color-forest: #4A5D4F;
--color-terracotta: #C17B5F;
```

### Updating Contact Information

Edit these lines in `index.html`:
- Email: Search for `kontakt@szklanewspomnienia.pl`
- Phone: Search for `+48 123 456 789`
- Instagram: Search for `@szklanewspomnienia`

### Typography

The site uses:
- **Cormorant Garamond** for elegant display text (titles)
- **Lato** for body text

These are loaded from Google Fonts, no installation needed.

## Features

### Interactive Elements
- ✨ Smooth scroll navigation
- 🎨 Parallax hero section with floating glass panes
- 🖱️ Hover effects on portfolio items
- 📱 Fully responsive design
- 🌿 Botanical decorations that respond to mouse movement
- ⚡ Optimized animations with CSS

### Browser Support
Works on all modern browsers:
- Chrome/Edge (recommended)
- Firefox
- Safari
- Mobile browsers

## Design Inspiration

This website combines:
- Refined botanical aesthetics inspired by greenhouse photography
- Editorial sophistication from top photography portfolios
- Organic animations that feel natural
- Warm, inviting color palette matching your brand

## Need Help?

The site is built with vanilla HTML, CSS, and JavaScript - no frameworks needed. All code is well-commented and easy to customize.

---

**Enjoy your new website! 🌿✨**
