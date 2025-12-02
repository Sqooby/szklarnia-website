# Szklane Wspomnienia - Greenhouse Photography Website

A refined, botanical-inspired website for greenhouse and botanical photography.

## Design Inspiration

Based on research of top greenhouse and photography portfolio websites, this design combines:

- **Refined botanical aesthetics** inspired by nature and greenhouse architecture
- **Editorial sophistication** from top photography portfolio sites
- **Glass-like transparency effects** that mirror greenhouse materials
- **Organic animations** that feel natural and gentle

## Key Features

- Elegant typography using Cormorant Garamond and Lato
- Warm, botanical color palette (cream, forest green, terracotta)
- Smooth parallax scrolling effects
- Animated portfolio grid with hover states
- Responsive design for all devices
- Interactive contact form
- Botanical decorative elements that respond to mouse movement

## How to Run

Simply open `index.html` in your web browser. No build process required.

## Customization

### Adding Your Photos

Replace the placeholder backgrounds in the portfolio items by adding `background-image` properties in `styles.css`:

```css
.portfolio-item:nth-child(1) .portfolio-image {
    background-image: url('path/to/your/photo.jpg');
    background-size: cover;
    background-position: center;
}
```

### Updating Contact Information

Edit the contact details in `index.html` (lines with email, phone, Instagram).

### Colors

All colors are defined as CSS variables at the top of `styles.css` for easy customization.

## Browser Support

Works in all modern browsers. Some animations require JavaScript enabled.

## Credits

Design and development inspired by research of top greenhouse and photography websites including:
- Hartley Botanic (luxury greenhouse design)
- Photography portfolio examples from Pixpa, Format, and Awwwards
- Botanical and nature photography portfolios

---

**Szklane Wspomnienia** - Where light meets glass, and nature meets architecture.
