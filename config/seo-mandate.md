# SEO Mandate - Pattaya Lifestyle

## Overview
This document outlines the SEO requirements for the Pattaya Lifestyle website. All pages must implement these requirements to ensure optimal search engine visibility and local business discoverability.

---

## Structured Data Requirements

Every page must include appropriate JSON-LD structured data in a `<script type="application/ld+json">` tag.

### Homepage: LocalBusiness Schema

```json
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Pattaya Lifestyle",
  "description": "Premium property management, concierge services, and luxury lifestyle experiences in Pattaya, Thailand.",
  "url": "https://pattayalifestyle.com",
  "telephone": "+66 81 234 5678",
  "email": "info@pattayalifestyle.com",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Pattaya",
    "addressRegion": "Chonburi",
    "addressCountry": "TH"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "12.9236",
    "longitude": "100.8825"
  },
  "priceRange": "1,000 - 20,000 THB",
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "09:00",
      "closes": "18:00"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": "Saturday",
      "opens": "09:00",
      "closes": "16:00"
    }
  ],
  "sameAs": [
    "https://facebook.com/pattayalifestyle",
    "https://instagram.com/pattayalifestyle"
  ]
}
```

### Services Page: Service Schema

```json
{
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Property Management",
  "provider": {
    "@type": "LocalBusiness",
    "name": "Pattaya Lifestyle"
  },
  "areaServed": {
    "@type": "City",
    "name": "Pattaya"
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Property Management Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Basic Plan",
          "description": "Monthly property inspection, key holding, bill payment coordination"
        },
        "price": "1000",
        "priceCurrency": "THB"
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Premium Plan",
          "description": "Weekly property inspection, 24/7 emergency response, full maintenance coordination"
        },
        "price": "2000",
        "priceCurrency": "THB"
      }
    ]
  }
}
```

### Contact Page: ContactPage Schema

```json
{
  "@context": "https://schema.org",
  "@type": "ContactPage",
  "name": "Contact Pattaya Lifestyle",
  "description": "Get in touch with Pattaya Lifestyle for property management and concierge services in Pattaya, Thailand.",
  "mainEntity": {
    "@type": "LocalBusiness",
    "name": "Pattaya Lifestyle",
    "telephone": "+66 81 234 5678",
    "email": "info@pattayalifestyle.com"
  }
}
```

---

## Meta Tags Requirements

### Every Page Must Include:

1. **Title Tag** - Unique, descriptive, 50-60 characters
2. **Meta Description** - Compelling, 150-160 characters
3. **Canonical URL** - Self-referencing canonical
4. **Open Graph Tags** - For social sharing
5. **Twitter Card Tags** - For Twitter sharing

### Homepage Meta Tags
```html
<title>Pattaya Lifestyle | Premium Property Management & Concierge Services</title>
<meta name="description" content="Luxury property management, villa services, and exclusive experiences in Pattaya, Thailand. From house management to private chef services.">
```

### Services Page Meta Tags
```html
<title>Our Services | Pattaya Lifestyle - Property Management & Home Services</title>
<meta name="description" content="Explore our property management plans, cleaning services, pool & garden care, and premium add-ons starting from 1,000 THB/month.">
```

### Contact Page Meta Tags
```html
<title>Contact Us | Pattaya Lifestyle - Get in Touch</title>
<meta name="description" content="Contact Pattaya Lifestyle for property management inquiries. Located in Pattaya, Chonburi, Thailand. Call +66 81 234 5678.">
```

---

## Technical SEO Requirements

### Performance
- Core Web Vitals optimization
- Lazy loading for images below the fold
- Proper image alt text on all images
- WebP format with fallbacks

### Accessibility
- Semantic HTML structure
- ARIA labels where needed
- Keyboard navigation support
- Color contrast compliance (WCAG AA)

### Mobile
- Mobile-first responsive design
- Touch-friendly tap targets
- No horizontal scrolling
- Readable font sizes without zoom

### Crawlability
- Clean URL structure
- XML sitemap
- robots.txt configuration
- Internal linking structure

---

## NAP Consistency

**Name:** Pattaya Lifestyle
**Address:** Pattaya, Chonburi, Thailand
**Phone:** +66 81 234 5678

This information must be:
- Displayed consistently on every page (footer)
- Marked up with LocalBusiness schema
- Matching across all online directories

---

## Local SEO Focus Keywords

### Primary Keywords
- Pattaya property management
- Villa management Pattaya
- Pattaya concierge services
- House management Thailand

### Secondary Keywords
- Pool cleaning Pattaya
- Private chef Pattaya
- Villa rental services
- Property inspection Thailand
- Luxury services Pattaya

### Long-tail Keywords
- House management services in Pattaya
- Property management for foreign owners Thailand
- Villa maintenance services Chonburi
- Personal chef for villa Pattaya
