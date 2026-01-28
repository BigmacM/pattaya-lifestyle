# Pattaya Lifestyle Brand System

## Visual Identity

**Brand Essence:** Tropical Luxury Concierge - Elegant, clean, and sophisticated with warm tropical undertones. The design evokes the feeling of a high-end hotel concierge service combined with the relaxed beauty of tropical Thailand.

**Brand Voice:** Professional yet warm, luxurious but approachable, trustworthy and experienced.

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

### Organic Shapes
- **Wave Dividers:** SVG wave transitions between sections
- **Blob Backgrounds:** Organic blob shapes in hero and feature sections
- **Rounded Corners:** Use generous border-radius (16px-24px) on cards

### Overlapping Elements
- Cards and images slightly overlap their containers
- Create depth through layered elements
- Use negative margins strategically

### Shadows
- **Soft Shadows:** Large, diffuse shadows for neomorphism feel
- `shadow-soft`: Subtle card elevation
- `shadow-soft-lg`: Featured elements
- `shadow-glow`: Special highlights (gold accent)

### Spacing
- Use generous whitespace
- Section padding: 80px-120px vertical
- Card padding: 24px-32px
- Gap between elements: 16px-32px

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

---

## Animation Guidelines

### Micro-interactions
- **Hover:** Subtle scale + shadow
- **Button Press:** Scale down slightly
- **Page Load:** Staggered fade-in

### Scroll Animations
- Fade up on scroll into view
- Smooth, elegant timing (0.6s ease-out)

### Performance
- Use CSS animations over JavaScript
- Respect `prefers-reduced-motion`
- Keep animations subtle and purposeful
