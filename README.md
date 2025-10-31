# Iris Spaces - Premium Workspace Solutions

A modern, responsive website built with Nuxt 3, TailwindCSS, and GSAP for smooth animations and page transitions.

## 🚀 Features

- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Smooth Animations**: GSAP-powered scroll reveals and page transitions
- **Modern UI**: Clean design with TailwindCSS styling
- **Interactive Components**: Carousels, modals, and contact forms
- **SEO Optimized**: Proper meta tags and semantic HTML

## 🛠️ Tech Stack

- **Framework**: Nuxt 3
- **Styling**: TailwindCSS
- **Animations**: GSAP with ScrollTrigger
- **Language**: Vue 3 with Composition API
- **Build Tool**: Vite

## 📁 Project Structure

```
iris-spaces/
├── assets/
│   └── css/
│       └── main.css          # Global styles and utilities
├── components/
│   └── sections/             # Reusable section components
│       ├── ImageTextSection.vue
│       ├── CarouselSection.vue
│       ├── OverlappingImagesSection.vue
│       ├── GridSection.vue
│       ├── HeroSection.vue
│       ├── SquareGridSection.vue
│       └── ContactFormSection.vue
├── composables/
│   └── useScrollAnimations.js # GSAP scroll animation composable
├── layouts/
│   └── default.vue           # Main layout with header and footer
├── pages/
│   ├── index.vue            # Home page
│   ├── workspaces.vue       # Workspaces page
│   ├── research-consult.vue # Research & Consult page
│   └── contact.vue          # Contact page
├── plugins/
│   └── gsap.client.js       # GSAP plugin configuration
├── public/
│   └── images/              # Sample images (SVG placeholders)
└── app.vue                  # Root component with page transitions
```

## 🎨 Design System

### Color Palette
- **Primary/Accent**: `#560216` (Dark red)
- **Background**: `#FFFFFF` (White)
- **Text**: Neutral gray shades for readability

### Typography
- **Font Family**: Inter (system fallbacks)
- **Responsive Text**: Scales appropriately across devices

### Layout
- **Margins**: 20%-30% on desktop, responsive on mobile
- **Spacing**: Consistent padding and margins using TailwindCSS utilities
- **Grid System**: CSS Grid and Flexbox for layouts

## 🎭 Animations

### GSAP Scroll Animations
- **Fade In**: Elements fade in from bottom
- **Slide Left/Right**: Horizontal slide animations
- **Scale**: Elements scale up from center
- **Stagger**: Grid items animate with delay

### Page Transitions
- **Fade**: Smooth fade between pages
- **Duration**: 0.4s ease-in-out

## 📱 Responsive Breakpoints

- **xs**: 475px (Extra small devices)
- **sm**: 640px (Small devices)
- **md**: 768px (Medium devices)
- **lg**: 1024px (Large devices)
- **xl**: 1280px (Extra large devices)

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd iris-spaces
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:3000`

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## 📄 Pages Overview

### Home Page (`/`)
- **Section 1**: Two-column layout with image and text
- **Section 2**: Carousel showcasing featured workspaces
- **Section 3-6**: Alternating overlapping image sections
- **Section 7**: Grid of services with modal details
- **Section 8**: Full-width hero banner

### Workspaces Page (`/workspaces`)
- **Section 1**: Overlapping images section
- **Section 2**: Image and text layout
- **Section 3**: Grid of 8 workspace options
- **Section 4**: Full-width hero section

### Research & Consult Page (`/research-consult`)
- **Section 1**: Grid of 6 consultation services
- **Section 2**: Full-width hero section

### Contact Page (`/contact`)
- **Section 1**: Image and text introduction
- **Section 2**: Contact form with validation
- **Section 3**: Grid of contact information
- **Section 4**: Full-width hero section

## 🎯 Key Components

### ImageTextSection
Two-column layout with content on one side and image on the other. Supports left/right positioning.

### CarouselSection
Auto-sliding carousel with manual navigation. Shows 3 items at a time with center focus.

### OverlappingImagesSection
Two overlapping images with content. Creates depth and visual interest.

### GridSection
Responsive grid with modal functionality. Items animate with stagger effect.

### HeroSection
Full-width background image with centered content and call-to-action.

### ContactFormSection
Form with validation, loading states, and success messages.

## 🔧 Customization

### Colors
Update the primary color in `tailwind.config.js`:
```javascript
colors: {
  primary: '#560216', // Your brand color
}
```

### Animations
Modify animation settings in `composables/useScrollAnimations.js`:
```javascript
duration: 0.8,        // Animation duration
ease: "power2.out",  // Easing function
start: "top 80%",    // Trigger point
```

### Content
Update content in individual page files (`pages/*.vue`) and component props.

## 📝 Notes

- All images are currently SVG placeholders. Replace with actual images in `public/images/`
- Form submissions are simulated (no backend integration)
- GSAP animations only run on client-side
- Mobile-first responsive design approach

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

---

Built with ❤️ using Nuxt 3, TailwindCSS, and GSAP