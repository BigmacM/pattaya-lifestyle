# SEO Mandate - Pattaya Lifestyle House Management

## Overview
This document outlines the SEO requirements for the mypattaya.life website. All pages must implement these requirements to ensure optimal search engine visibility, local business discoverability, and Page 1 ranking for target keywords.

**Domain:** https://mypattaya.life
**Business Type:** HomeAndConstructionBusiness
**Target Market:** Absentee property owners in Pattaya, Thailand

---

## Structured Data Requirements

Every page must include appropriate JSON-LD structured data in `<script type="application/ld+json">` tags.

### Homepage: LocalBusiness + Service Schema

```json
{
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  "name": "Pattaya Lifestyle House Management",
  "description": "Trusted property management for absentee owners in Pattaya. House watching, villa care, and lifestyle concierge services. English speaking, police checked staff, fully insured.",
  "url": "https://mypattaya.life",
  "telephone": "+66 81 234 5678",
  "email": "info@mypattaya.life",
  "priceRange": "฿฿",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "123 Pratamnak Road",
    "addressLocality": "Pattaya",
    "addressRegion": "Chonburi",
    "postalCode": "20150",
    "addressCountry": "TH"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "12.9236",
    "longitude": "100.8825"
  },
  "areaServed": {
    "@type": "City",
    "name": "Pattaya"
  },
  "sameAs": [
    "https://facebook.com/pattayalifestyle",
    "https://instagram.com/pattayalifestyle",
    "https://line.me/R/ti/p/@pattayalifestyle"
  ]
}
```

### Service Schema (For Pricing Display in Search Results)

```json
{
  "@context": "https://schema.org/",
  "@type": "Service",
  "serviceType": "House Management",
  "provider": {
    "@type": "LocalBusiness",
    "name": "Pattaya Lifestyle House Management"
  },
  "areaServed": {
    "@type": "City",
    "name": "Pattaya"
  },
  "offers": {
    "@type": "Offer",
    "priceCurrency": "THB",
    "price": "1000",
    "description": "Basic House Watching Package - Monthly property inspection, key holding, bill coordination"
  }
}
```

### Contact Page: ContactPage Schema

```json
{
  "@context": "https://schema.org",
  "@type": "ContactPage",
  "name": "Contact Pattaya Lifestyle House Management",
  "description": "Get a free property assessment and personalized quote. English speaking staff available via phone, email, or LINE.",
  "mainEntity": {
    "@type": "LocalBusiness",
    "name": "Pattaya Lifestyle House Management",
    "telephone": "+66 81 234 5678",
    "email": "info@mypattaya.life"
  }
}
```

---

## Meta Tags Requirements

### Homepage
```html
<title>Pattaya Property Management | House Watching & Villa Care | English Speaking</title>
<meta name="description" content="Trusted home care for absentee owners in Pattaya. Monthly inspections, pool cleaning, and maid services from 1,000 THB/mo. English speaking. Police checked staff.">
```

### Services Page
```html
<title>House Watching Services Pattaya | Property Management Plans from 1,000 THB</title>
<meta name="description" content="Professional house watching and villa management for absentee owners. Key holding, vacant home inspections, bill payment, 24/7 emergency response. Get a free quote.">
```

### Contact Page
```html
<title>Contact Us | Free Property Assessment | Pattaya Property Management</title>
<meta name="description" content="Get a free property assessment and customized management quote. English speaking staff available via phone, email, or LINE. 24/7 emergency hotline.">
```

---

## Trust Modifiers (Use in UI Labels)

These should appear prominently in headers, badges, and feature lists:

- **"English Speaking"** - Language accessibility
- **"Police Checked"** - Staff security verification
- **"Fully Insured"** - Liability coverage
- **"Digital Reports"** - Transparency and documentation
- **"24/7 Emergency"** - Always available support
- **"Western Management"** - Quality standards

---

## Technical SEO Requirements

### Mobile-First Design
- Optimized for 4G speeds (common in Thailand)
- Button touch targets minimum **48x48px**
- WebP images, target file size <100KB
- No horizontal scrolling
- Readable font sizes without zoom

### Communication Integration
- **Floating LINE Chat Button** - Green (#00B900), bottom right, always visible
- **Click-to-Call** functionality on phone numbers
- **Emergency Hotline** prominently displayed in utility header
- Contact form with LINE ID option

### Performance
- Core Web Vitals optimization
- Lazy loading for images below the fold
- Proper image alt text with keywords
- WebP format for all images

### Crawlability
- Clean URL structure (silos)
- XML sitemap at /sitemap.xml
- robots.txt configured
- Strong internal linking between silos

---

## NAP Consistency

**Name:** Pattaya Lifestyle House Management
**Address:** 123 Pratamnak Road, Pattaya, Chonburi 20150, Thailand
**Phone:** +66 81 234 5678
**Emergency:** +66 81 999 8888
**Email:** info@mypattaya.life
**LINE:** @pattayalifestyle

This information must be:
- Displayed consistently on every page (utility header + footer)
- Marked up with LocalBusiness schema
- Matching across all online directories

---

## Primary Target Keywords

### High Intent (Use in H1s, H2s, first 100 words)
1. "Pattaya property management for absentee owners"
2. "House watching service Pattaya"
3. "Villa management companies Pattaya"
4. "Vacant home inspections Pattaya"

### Service-Specific
1. "Swimming pool cleaning Pattaya prices"
2. "Gardener Pattaya monthly rate"
3. "Deep cleaning service Pattaya"
4. "Move out cleaning Pattaya"

### Low Hanging Fruit (Low Competition)
1. "Key holding service Pattaya"
2. "Airing out house service Pattaya"
3. "Pattaya storm damage check"
4. "Mail collection service Pattaya"

---

## Competitor Benchmarks

### Reference Site A: Pearl Property
- Use for **content density** reference
- Note their use of "Pillar Pages" for authority

### Reference Site B: BaanCare
- Use for **utility** reference
- Replicate their header with Emergency Numbers and Line ID

### Reference Site C: Pattaya Realty
- Use for **trust building** reference
- Note their specific listing of "Managed Villages" to build local authority

---

## Areas Served (Local Authority Building)

List these prominently to establish local relevance:
- Pratamnak Hill
- Jomtien
- Na Jomtien
- Wongamat
- Central Pattaya
- East Pattaya
- Huay Yai
- Bang Saray
