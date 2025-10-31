# Professional Animation System Documentation

## Overview

The Iris Spaces website features a comprehensive, professional animation system powered by GSAP (GreenSock Animation Platform) with smooth scroll reveals and page transitions.

---

## Features Implemented

### 1. **Automatic Section Reveal Animations**
- ✅ All `<section>` elements automatically fade up when scrolling into view
- ✅ Professional easing curves (`power3.out`) for smooth, elegant motion
- ✅ 60px upward movement with fade-in effect
- ✅ Triggers at 80% viewport visibility

### 2. **Heading Animations**
- ✅ All H1, H2, H3 elements automatically animate on scroll
- ✅ Subtle 30px slide-up with fade-in
- ✅ Faster animation (0.8s) for snappy feel

### 3. **Grid Item Stagger Animations**
- ✅ Automatic cascade effect for all grid layouts
- ✅ Items animate sequentially with 0.5s stagger
- ✅ Each item scales slightly (0.9 → 1.0) while fading in
- ✅ Professional "reveal from below" effect

### 4. **Page Transitions**
- ✅ Smooth fade + slide transitions between pages
- ✅ Page enter: Fades in from 30px below with slight scale
- ✅ Page leave: Fades out upward with slight scale
- ✅ Professional cubic-bezier easing

### 5. **Initial Page Load**
- ✅ Body fades in on first page load
- ✅ Smooth 0.6s fade from opacity 0 to 1

---

## Available Animation Classes

Add these classes to your HTML elements for specific animations:

### Scroll-Triggered Animations

| Class | Effect | Duration | When to Use |
|-------|--------|----------|-------------|
| `animate-fade-in` | Fade up from 50px below | 1s | General content blocks |
| `animate-slide-left` | Slide in from left (-80px) | 1s | Left-aligned content |
| `animate-slide-right` | Slide in from right (+80px) | 1s | Right-aligned content |
| `animate-scale` | Scale from 0.85 to 1.0 | 1s | Cards, images |
| `animate-zoom` | Zoom out from 1.2 to 1.0 | 1.2s | Hero images |
| `animate-stagger` | Cascade animation for children | 0.8s | Grid containers |

### Hover Effects

| Class | Effect | When to Use |
|-------|--------|-------------|
| `hover-lift` | Lifts up 8px with shadow | Cards, buttons |
| `hover-scale` | Scales to 1.05 | Images, icons |
| `transition-smooth` | Smooth 0.4s transition | Any interactive element |
| `transition-fast` | Fast 0.2s transition | Quick interactions |

---

## How Animations Work

### Automatic Animations (No Classes Needed)

The following elements animate automatically:

1. **All Sections** - Fade up when scrolling into view
2. **All Headings (H1, H2, H3)** - Slide up with fade
3. **All Grid Layouts** - Children cascade in
4. **Page Navigation** - Smooth transitions

### Manual Animation Classes

For fine-tuned control, add animation classes to specific elements:

```vue
<!-- Fade in animation -->
<div class="animate-fade-in">
  Content fades in from below
</div>

<!-- Slide from left -->
<div class="animate-slide-left">
  Content slides in from left
</div>

<!-- Staggered grid items -->
<div class="grid animate-stagger">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</div>

<!-- Hover effects -->
<div class="hover-lift">
  Card that lifts on hover
</div>
```

---

## Animation Timing & Easing

### Easing Curves Used

- **power3.out** - Primary easing for most animations (smooth deceleration)
- **power2.out** - Secondary easing for faster animations
- **back.out(2)** - Special bounce effect (not currently used)
- **cubic-bezier(0.4, 0, 0.2, 1)** - Page transitions

### Duration Guide

- **1.2s** - Slow, dramatic (zoom effects)
- **1.0s** - Standard (most scroll animations)
- **0.8s** - Medium (headings, grids)
- **0.6s** - Fast (page loads, stagger items)
- **0.4s** - Quick (page transitions)

---

## Trigger Points

All scroll animations trigger at:
- **Start**: `top 80%` or `top 85%` (when element is 80-85% down the viewport)
- **Once**: `true` (animations play only once, not on reverse scroll)

---

## Performance Notes

✅ **Optimized for Performance**
- Animations use GPU-accelerated properties (opacity, transform)
- One-time animations reduce computational overhead
- GSAP's optimized engine ensures smooth 60fps
- ScrollTrigger uses Intersection Observer API

✅ **Browser Compatibility**
- Works on all modern browsers (Chrome, Firefox, Safari, Edge)
- Graceful degradation on older browsers

---

## Customization Guide

### Change Animation Speed

Edit `composables/useScrollAnimations.js`:

```javascript
// Find the animation you want to change
gsap.from(element, {
  duration: 1,  // Change this value (in seconds)
  // ...
})
```

### Change Animation Distance

```javascript
gsap.from(element, {
  y: 60,  // Change vertical distance (pixels)
  x: 80,  // Change horizontal distance (pixels)
  // ...
})
```

### Change Trigger Point

```javascript
scrollTrigger: {
  start: "top 80%",  // Change this (e.g., "top 90%" for earlier trigger)
  // ...
}
```

### Disable Animations

Remove or comment out the animation initialization in `app.vue`:

```javascript
// onMounted(() => {
//   initScrollAnimations()
// })
```

---

## Advanced Features Available

The animation system includes these advanced features (not currently used but available):

1. **Parallax Scrolling** - `.hero-parallax` class
2. **Text Character Reveal** - `.text-reveal` class
3. **Image Hover Zoom** - `.image-hover` class

To use these, simply add the class to your elements!

---

## Troubleshooting

### Animations Not Working?

1. **Check GSAP is loaded**: Open browser console, type `window.gsap`
2. **Check ScrollTrigger**: Type `window.ScrollTrigger`
3. **Verify elements have animation classes**
4. **Scroll down to trigger** (animations trigger on scroll)

### Animations Too Fast/Slow?

Adjust `duration` values in `composables/useScrollAnimations.js`

### Want Different Easing?

GSAP easing options:
- `"power1.out"` to `"power4.out"` (increasing smoothness)
- `"elastic.out(1, 0.3)"` (bouncy)
- `"back.out(1.7)"` (slight overshoot)

---

## Files Modified

1. **`composables/useScrollAnimations.js`** - Main animation logic
2. **`app.vue`** - Page transitions & initialization
3. **`assets/css/main.css`** - Animation utility classes

---

## Best Practices

✅ **DO:**
- Use automatic section animations (no classes needed)
- Apply `animate-stagger` to grid containers
- Use `hover-lift` on cards and buttons
- Keep animation durations between 0.6s - 1.2s

❌ **DON'T:**
- Overuse animations (less is more)
- Use multiple animation classes on same element
- Animate layout properties (width, height) - use transform instead
- Make animations too fast (<0.3s) or too slow (>2s)

---

## Professional Animation Principles Applied

1. **Easing** - Natural deceleration (power3.out)
2. **Timing** - Consistent durations across similar elements
3. **Staging** - Staggered reveals draw attention sequentially
4. **Follow Through** - Smooth page transitions
5. **Performance** - GPU-accelerated, optimized animations

