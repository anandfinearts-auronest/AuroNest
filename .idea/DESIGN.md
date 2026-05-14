---
name: Organic Minimalist Elegance
colors:
  surface: '#fcf8fa'
  surface-dim: '#dcd9db'
  surface-bright: '#fcf8fa'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f6f3f4'
  surface-container: '#f0edee'
  surface-container-high: '#eae7e9'
  surface-container-highest: '#e5e2e3'
  on-surface: '#1b1b1d'
  on-surface-variant: '#45464c'
  inverse-surface: '#303031'
  inverse-on-surface: '#f3f0f1'
  outline: '#76777d'
  outline-variant: '#c6c6cd'
  surface-tint: '#575e70'
  primary: '#000000'
  on-primary: '#ffffff'
  primary-container: '#141b2b'
  on-primary-container: '#7d8497'
  inverse-primary: '#c0c6db'
  secondary: '#006a63'
  on-secondary: '#ffffff'
  secondary-container: '#99efe5'
  on-secondary-container: '#006f67'
  tertiary: '#000000'
  on-tertiary: '#ffffff'
  tertiary-container: '#261906'
  on-tertiary-container: '#968065'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#dce2f7'
  primary-fixed-dim: '#c0c6db'
  on-primary-fixed: '#141b2b'
  on-primary-fixed-variant: '#404758'
  secondary-fixed: '#9cf2e8'
  secondary-fixed-dim: '#80d5cb'
  on-secondary-fixed: '#00201d'
  on-secondary-fixed-variant: '#00504a'
  tertiary-fixed: '#f9debf'
  tertiary-fixed-dim: '#dcc2a4'
  on-tertiary-fixed: '#261906'
  on-tertiary-fixed-variant: '#55442d'
  background: '#fcf8fa'
  on-background: '#1b1b1d'
  surface-variant: '#e5e2e3'
typography:
  display-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 36px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 30px
    fontWeight: '600'
    lineHeight: '1.3'
  headline-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.4'
  body-lg:
    fontFamily: DM Sans
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: DM Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  body-sm:
    fontFamily: DM Sans
    fontSize: 14px
    fontWeight: '400'
    lineHeight: '1.5'
  label-caps:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '600'
    lineHeight: '1'
    letterSpacing: 0.05em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  unit: 8px
  container-max: 1280px
  gutter: 24px
  margin-desktop: 64px
  margin-mobile: 20px
  stack-sm: 12px
  stack-md: 24px
  stack-lg: 48px
  section-padding: 80px
---

## Brand & Style

The design system is built on the philosophy of "Accessible Luxury." It balances the high-end editorial feel of premium lifestyle brands with the clarity and efficiency required for a modern FMCG experience. The aesthetic is **Modern Minimalist**, characterized by generous whitespace, a sophisticated muted palette, and a focus on tactile digital elements that mimic high-quality packaging.

The system caters to two distinct audiences:
1.  **D2C Retail:** An immersive, sensory-driven experience focusing on lifestyle benefits and product purity.
2.  **Wholesale Partners:** A high-utility, professional interface that emphasizes bulk ordering, logistics, and reliability while maintaining the brand's premium identity.

The emotional response should be one of "calm confidence"—a fresh, organized, and trustworthy environment that elevates daily essentials into lifestyle statements.

## Colors

The color strategy uses **Dark Navy (#111827)** as the anchor for authority and premium positioning, primarily used for typography and primary buttons. **Teal (#0F766E)** acts as a fresh, lifestyle-oriented secondary color, often associated with sustainability and wellness markers.

**Tan/Sand (#D4A373)** is the accent used sparingly for "call-to-attention" elements like promotional badges, organic highlights, or unique brand moments. The **Off-white (#F8FAFC)** background is critical; it is never pure white, providing a softer, more sophisticated canvas that reduces eye strain and makes product photography pop.

For wholesale sections, use the Primary Dark Navy more prominently in headers and navigation to establish a more "functional" and "institutional" atmosphere compared to the more airy D2C layouts.

## Typography

This design system utilizes **Plus Jakarta Sans** (a modern alternative to Satoshi/Poppins) for headings to provide a clean, geometric, yet friendly personality. **DM Sans** is the primary body face, chosen for its understated elegance and high readability in long-form product descriptions. 

- **Hierarchy:** Use `display-lg` for hero sections and lifestyle editorial content. 
- **Wholesale UI:** In the wholesale dashboard, prioritize `body-sm` and `label-caps` for data-heavy tables and SKU lists to maintain clarity and density without sacrificing the brand aesthetic.
- **Letter Spacing:** Headlines use slight negative tracking to feel "tighter" and more custom-designed. Labels use increased tracking for better legibility at small sizes.

## Layout & Spacing

The layout follows a **Fixed-Fluid Hybrid** model. Content is contained within a 1280px max-width wrapper on desktop to ensure readability, while the background and lifestyle imagery may bleed to the edges of the viewport.

- **Rhythm:** An 8px base grid is used. Generous whitespace is a core brand pillar; use `section-padding` (80px) between major homepage sections to create a "breathable" luxury feel.
- **Grid:** 12-column grid for desktop, 2-column for mobile.
- **D2C vs Wholesale:** D2C layouts should favor single-column or alternating 50/50 "storytelling" blocks. Wholesale views should utilize the full 12-column grid to display multi-column tables and filter sidebars efficiently.

## Elevation & Depth

Visual hierarchy in this design system is achieved through **Ambient Shadows** and **Tonal Layers**. We avoid harsh lines in favor of soft, diffused depth.

- **Surface Strategy:** The base level is the Off-white background. Cards and containers use a pure white surface (#FFFFFF) to stand out.
- **Shadows:** Shadows are highly diffused with a low opacity (e.g., `box-shadow: 0 10px 30px rgba(17, 24, 39, 0.05)`). This creates a sense of "resting" on the page rather than "floating" far above it.
- **Interactions:** Upon hover, cards should subtly lift (increase shadow spread) and scale (1.02x) to provide tactile feedback.
- **Wholesale Exception:** Use low-contrast outlines (1px solid #E2E8F0) for data tables and form groups in the wholesale section to provide structure without adding visual "weight" from shadows.

## Shapes

The shape language is consistently **Rounded**, reflecting the approachable and modern nature of the brand.

- **Standard Radius:** 0.5rem (8px) is the default for buttons, input fields, and small UI components.
- **Large Radius:** 1rem (16px) is used for product cards and main containers to soften the overall interface.
- **Imagery:** Product photography should always feature slightly rounded corners to match the UI elements. Avoid sharp 90-degree angles in all interactive components.
- **Buttons:** Primary CTA buttons may use a slightly more pronounced radius (up to 12px) to feel more "clickable" and organic.

## Components

### Buttons
- **Primary:** Solid Dark Navy (#111827) with White text. High-contrast, bold, and authoritative.
- **Secondary:** Outlined Teal (#0F766E) or solid Tan (#D4A373) for promotional secondary actions.
- **Wholesale CTA:** Use Secondary Teal for "Add to Bulk Order" to distinguish from individual retail "Buy Now" actions.

### Cards
- **Product Card:** Pure white background, 16px corner radius, soft ambient shadow. Product image should be centered with a subtle #F1F5F9 background tint within the card.
- **Wholesale Card:** Minimalist, data-first layout. Includes SKU number and "In Stock" badges using the Status Success color.

### Input Fields & Forms
- **Style:** 1px border (#E2E8F0), 8px radius. On focus, the border shifts to Teal (#0F766E) with a soft Teal outer glow.
- **Labels:** Use `label-caps` for field headers to maintain a professional, organized look.

### Chips & Badges
- **Status:** Use semi-transparent backgrounds with high-saturation text (e.g., Light Teal background with Dark Teal text) for "New Arrival" or "In Stock."
- **Wholesale Tiers:** Use the Tan (#D4A373) accent color for badges indicating "Wholesale Exclusive" or "Bulk Pricing Available."

### Navigation
- **D2C:** Minimalist centered logo, transparent background that turns Off-white on scroll.
- **Wholesale:** Persistent sidebar or top-bar with a "Partner Portal" indicator. Use more condensed typography for the navigation links.
