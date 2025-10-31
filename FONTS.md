# Font Configuration Guide

## Current Fonts

### Headings (H1, H2, H3, H4, H5, H6)
- **Font**: Montserrat
- **Usage**: All headings, titles, and emphasized text
- **Weights**: 400, 500, 600, 700, 800

### Body Text (Paragraphs, Lists, Descriptions)
- **Font**: Libre Baskerville
- **Fallback**: Georgia
- **Usage**: All body text, descriptions, paragraphs, lists
- **Weights**: 400, 700 (plus italic variants)

### UI Elements (Buttons, Inputs)
- **Font**: Montserrat
- **Usage**: Buttons, form inputs, navigation, UI elements

---

## How to Change Fonts

### Option 1: Using Google Fonts (Recommended)

1. **Choose your fonts** from [Google Fonts](https://fonts.google.com/)

2. **Update `nuxt.config.ts`**:
   - Go to line 21
   - Replace the Google Fonts URL with your new fonts
   - Example format:
   ```typescript
   href: 'https://fonts.googleapis.com/css2?family=YOUR_HEADING_FONT:wght@400;500;600;700;800&family=YOUR_BODY_FONT:wght@400;700&display=swap'
   ```

3. **Update `tailwind.config.js`**:
   - Go to lines 21-27
   - Update the font family names:
   ```javascript
   fontFamily: {
     heading: ['Your Heading Font', 'system-ui', 'sans-serif'],
     body: ['Your Body Font', 'Georgia', 'serif'],
     sans: ['Your UI Font', 'system-ui', 'sans-serif'],
   }
   ```

### Option 2: Using Custom Fonts

1. **Add font files** to `assets/fonts/` directory

2. **Define fonts in `assets/css/main.css`**:
   ```css
   @font-face {
     font-family: 'YourFont';
     src: url('~/assets/fonts/YourFont-Regular.woff2') format('woff2');
     font-weight: 400;
     font-style: normal;
   }
   ```

3. **Update `tailwind.config.js`** with your custom font names

---

## Font Application Rules

The fonts are automatically applied through CSS layers in `assets/css/main.css`:

- **Headings** → `font-heading` (Montserrat)
- **Body text** → `font-body` (Libre Baskerville)
- **UI elements** → `font-sans` (Montserrat)

You can also manually apply fonts using Tailwind classes:
- `font-heading` - for headings
- `font-body` - for body text
- `font-sans` - for UI elements

---

## Files to Modify

1. **`nuxt.config.ts`** (lines 17-23) - Google Fonts link
2. **`tailwind.config.js`** (lines 21-27) - Font family definitions
3. **`assets/css/main.css`** (lines 5-28) - Font application rules

---

## Recommended Font Pairings

### Elegant & Modern
- Heading: Montserrat, Poppins, Raleway
- Body: Libre Baskerville, Merriweather, Lora

### Professional & Clean
- Heading: Open Sans, Lato, Roboto
- Body: Source Serif Pro, PT Serif, Crimson Text

### Creative & Bold
- Heading: Oswald, Bebas Neue, Anton
- Body: Open Sans, Lato, Roboto

---

## Notes

- The current setup uses free Google Fonts
- Flavium Sans and Vogue Sans are premium fonts (not free)
- Montserrat is used as a high-quality free alternative
- All fonts are loaded with `display=swap` for optimal performance
- Font weights are pre-loaded for faster rendering

