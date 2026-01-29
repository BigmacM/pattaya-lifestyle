# Pattaya Lifestyle Brand System

## Site Information

**Domain:** https://mypattaya.life
**Email:** info@mypattaya.life
**Emergency Hotline:** +66 81 999 8888
**LINE ID:** @pattayalifestyle

---

## Brand Voice & Messaging

**Tagline:** "Stay with me. Relax with us."

**Brand Essence:** Tropical Luxury Concierge - Elegant, clean, and sophisticated with warm tropical undertones. The design evokes the feeling of a high-end hotel concierge service combined with the relaxed beauty of tropical Thailand.

**Brand Voice:** Professional yet warm, luxurious but approachable, trustworthy and experienced.

**Core Differentiator:** Unlike generic real estate agencies that focus on sales, we focus purely on asset protection (House Watching, Maintenance) and lifestyle concierge services.

### Trust Triggers (Display Prominently)
- English Speaking Management
- Police Checked Staff
- Digital Inspection Reports
- Fully Insured
- 24/7 Emergency Response

---

## Site Architecture (Silo Strategy)

### Lobby: Homepage
Main entry point with all service silos visible.

### Silo A: Management (Core Product)
- House Watching Service
- Key Holding
- Mail Collection
- Vacant Home Inspections
- Bill Payment Coordination

### Silo B: Maintenance (Execution)
- Pool & Garden Care
- Deep Cleaning
- Handyman Services
- Monsoon/Storm Checks

### Silo C: Lifestyle (Differentiator)
- Private Chef
- BBQ Catering
- Linen Rental
- Concierge Services

---

## Color Palette

### Primary Colors - Deep Tropical Green
Represents nature, tranquility, and the lush tropical environment of Pattaya.

| Token | Hex | Usage |
|-------|-----|-------|
| `primary-50` | #f0fdf4 | Light backgrounds |
| `primary-100` | #dcfce7 | Hover states |
| `primary-500` | #22c55e | Accents |
| `primary-700` | #15803d | Primary buttons |
| `primary-800` | #166534 | Headers, footers |
| `primary-900` | #14532d | Dark sections |
| `primary-950` | #052e16 | Deepest backgrounds |

### Secondary Colors - Warm Gold/Amber
Represents luxury, warmth, and the beautiful Pattaya sunsets.

| Token | Hex | Usage |
|-------|-----|-------|
| `secondary-300` | #fcd34d | Highlights |
| `secondary-400` | #fbbf24 | Badges, offers |
| `secondary-500` | #f59e0b | CTA buttons |
| `secondary-600` | #d97706 | Hover states |

### Accent Colors - Ocean Blue
Represents the sea, clarity, and refreshing experiences.

| Token | Hex | Usage |
|-------|-----|-------|
| `ocean-400` | #38bdf8 | Links, icons |
| `ocean-500` | #0ea5e9 | Interactive elements |
| `ocean-600` | #0284c7 | Hover states |

### Neutral Colors - Sand/Cream Tones
Warm, inviting neutral palette for backgrounds and text areas.

| Token | Hex | Usage |
|-------|-----|-------|
| `sand-50` | #fdfdf9 | Page backgrounds |
| `sand-100` | #faf8f0 | Card backgrounds |
| `sand-200` | #f5f0e1 | Dividers |
| `sand-400` | #ddd2b0 | Borders |

---

## Typography

### Display Font - Playfair Display
- **Usage:** Headlines, section titles, hero text
- **Weight:** 400 (Regular), 700 (Bold)
- **Style:** Elegant serif with high contrast, conveys luxury and sophistication

### Body Font - Inter
- **Usage:** Body text, descriptions, navigation, buttons
- **Weight:** 400 (Regular), 500 (Medium), 600 (SemiBold)
- **Style:** Clean, modern sans-serif for excellent readability

### Type Scale
| Element | Size (Mobile) | Size (Desktop) | Font |
|---------|---------------|----------------|------|
| Hero Headline | 2.5rem (40px) | 4rem (64px) | Playfair Display |
| Section Title | 1.875rem (30px) | 2.5rem (40px) | Playfair Display |
| Card Title | 1.25rem (20px) | 1.5rem (24px) | Playfair Display |
| Body Large | 1.125rem (18px) | 1.25rem (20px) | Inter |
| Body | 1rem (16px) | 1rem (16px) | Inter |
| Caption | 0.875rem (14px) | 0.875rem (14px) | Inter |

---

## Layout Rules

### Asymmetric Design Philosophy
- **NO symmetrical grids** - Use organic, asymmetric layouts
- Create visual interest through varied column widths
- Stagger elements vertically for depth

### Section Transitions
- **Minimal Waves:** Only use wave dividers in the Hero section (bottom) and services page hero
- **Clean Transitions:** Most sections transition directly with solid background colors
- **Dark Section Pattern:** Experience/culinary sections use solid dark green (#14532d) backgrounds without wave dividers
- **Color Continuity:** When waves are used, colors must match the adjacent section backgrounds exactly

### Organic Shapes
- **Blob Backgrounds:** Organic blob shapes in hero and feature sections
- **Rounded Corners:** Use generous border-radius (16px for cards, 24px for images)

### Layout Principles
- Avoid overlapping elements that cause alignment issues
- Use consistent padding within sections (py-16 md:py-20 lg:py-24)
- Cards should have equal heights within grids using flexbox
- **Two-Column Stretch:** Use `items-stretch` on grids with `flex flex-col` on children to ensure columns fill equal height
- **Auto-rows:** Use `auto-rows-fr` for equal-height grid rows

### Shadows
- **Soft Shadows:** Large, diffuse shadows for neomorphism feel
- `shadow-soft`: Subtle card elevation
- `shadow-soft-lg`: Featured elements
- `shadow-glow`: Special highlights (gold accent)

### Spacing
- Use consistent whitespace throughout
- Section padding: `py-16 md:py-20 lg:py-24` (64px - 80px - 96px)
- Card padding: 20px-24px (p-5 to p-6)
- Grid gaps: 24px (gap-6) for cards, 32px (gap-8) for larger elements
- Header margins: mb-12 for section headers

---

## Mobile First Design

### Responsive Breakpoints
| Breakpoint | Min Width | Usage |
|------------|-----------|-------|
| `sm` | 640px | Small tablets |
| `md` | 768px | Tablets |
| `lg` | 1024px | Laptops |
| `xl` | 1280px | Desktops |
| `2xl` | 1536px | Large screens |

### Mobile Navigation
- Hamburger menu with slide-out drawer
- Sticky bottom navigation for quick access
- Touch-friendly tap targets (44px minimum)

---

## Component Patterns

### Cards
- Rounded corners (16px)
- Soft shadow elevation
- Hover: slight scale (1.02) + shadow increase
- Border: subtle 1px border for definition

### Buttons
- **Primary:** Green background, white text
- **Secondary:** Gold background, dark text
- **Ghost:** Transparent with border
- Padding: 12px 24px
- Border radius: 8px
- Hover: darken + subtle lift

### Badges
- Pill shape (full rounded)
- Gold background for offers/discounts
- Small, attention-grabbing

### Pricing Cards
- Featured card: Gold border + glow shadow
- Clear price hierarchy
- CTA button at bottom

---

## Imagery Guidelines

### Photography Style
- High-quality, professional images
- Warm, golden-hour lighting preferred
- Lifestyle-focused showing luxury experiences
- Authentic Thai/tropical settings

### Image Treatment
- Slight overlay on hero images for text contrast
- Rounded corners matching card design
- Consistent aspect ratios per section
- Hover zoom effect (group-hover:scale-110) for interactive images

### Image Assets (/public/images/)

| Filename | Usage | Section |
|----------|-------|---------|
| `Hero-villa-lifestyle.webp` | Main hero background | Hero |
| `house-managment.webp` | Services header image | Services |
| `cleaning-service.webp` | Cleaning add-on card | Add-ons |
| `linen-laundry-card.webp` | Linen add-on card | Add-ons |
| `pool-garden-card.webp` | Pool & Garden add-on card | Add-ons |
| `catering-with-chef.webp` | Private Chef experience | Experience |
| `chef-seafood.webp` | BBQ Seafood experience | Experience |
| `house-promo-interior.webp` | Real Estate section (homepage) | Real Estate |
| `house-promo-selling.webp` | Real Estate section (services page) | Real Estate |
| `general-bg-patter-footer.webp` | Footer background pattern | Footer |

---

## Animation Guidelines

### Animation Classes (global.css)

| Class | Effect | Usage |
|-------|--------|-------|
| `.fade-up` | Fade in + translate up | Section content, cards on scroll |
| `.card-lift` | Lift + shadow on hover | Cards, interactive elements |
| `.parallax-slow` | Slow floating motion | Decorative background blobs |
| `.hover-glow` | Gold glow on hover | CTA buttons, secondary buttons |
| `.img-zoom` | Scale up on hover | Card images |
| `.animate-fade-in` | Simple fade in | Hero badge, initial elements |
| `.animate-slide-up` | Slide up + fade in | Hero text content |

### Micro-interactions
- **Hover:** Subtle scale (1.05-1.10) + shadow increase
- **Card Lift:** translateY(-4px) + enhanced shadow
- **Button Glow:** Gold box-shadow (0 0 20px rgba(251, 191, 36, 0.4))
- **Image Zoom:** Scale to 105-110% within overflow-hidden container

### Scroll Animations
- **Fade Up:** Elements fade in and translate up 30px
- **Staggered Delays:** Use nth-child or inline animation-delay (100ms increments)
- **Timing:** 0.6s ease-out for scroll reveals, 0.3s for hover effects

### Parallax Effects
- **Floating Blobs:** 8s infinite ease-in-out animation
- **Movement:** Subtle multi-directional floating (translateY + translateX)
- **Usage:** Decorative background elements in Hero and Experience sections

### Performance
- Use CSS animations over JavaScript
- Respect `prefers-reduced-motion` - disable all motion animations
- Keep animations subtle and purposeful
- Use `will-change` sparingly for frequently animated elements

---

## Conversion Components

### Utility Header
Top bar above main navigation displaying:
- Emergency Hotline with phone icon (red accent)
- Email address
- LINE chat button (green #00B900 pill)

### Floating LINE Chat Button
- Position: Fixed, bottom-right (bottom-6 right-6)
- Color: LINE Green (#00B900)
- Size: Minimum 48x48px touch target
- Behavior: Pulse animation to attract attention
- Shows "Chat on LINE" text on larger screens

### Trust Badges
Display in Hero section below CTA buttons:
- English Speaking
- Police Checked
- Fully Insured
- Digital Reports

### Fear/Aspiration Section
Homepage section addressing property owner concerns:
- Mold & Humidity Damage
- Termite Infestations
- Unauthorized Occupants
- Storm & Monsoon Damage

Each fear card shows the problem and our solution.

### Areas Served
Display managed neighborhoods to build local authority:
- Pratamnak Hill
- Jomtien
- Na Jomtien
- Wongamat
- Central Pattaya
- East Pattaya
- Huay Yai
- Bang Saray

---

## Mobile Optimization

### Touch Targets
- All buttons minimum 48x48px
- Adequate spacing between interactive elements
- Large tap areas for phone numbers and CTAs

### 4G Speed Optimization
- WebP images <100KB target
- Lazy loading for below-fold content
- Minimal JavaScript

### Thai Market Specifics
- LINE integration is essential (primary communication channel)
- Click-to-call functionality
- Thai Baht (฿) currency display
