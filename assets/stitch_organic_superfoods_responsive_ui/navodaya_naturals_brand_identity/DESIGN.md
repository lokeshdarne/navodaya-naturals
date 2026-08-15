---
name: Navodaya Naturals Brand Identity
colors:
  surface: '#fdf9ee'
  surface-dim: '#dddacf'
  surface-bright: '#fdf9ee'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f7f3e8'
  surface-container: '#f2eee3'
  surface-container-high: '#ece8dd'
  surface-container-highest: '#e6e2d8'
  on-surface: '#1c1c15'
  on-surface-variant: '#414845'
  inverse-surface: '#313129'
  inverse-on-surface: '#f4f1e6'
  outline: '#717975'
  outline-variant: '#c0c8c4'
  surface-tint: '#3f665a'
  primary: '#002920'
  on-primary: '#ffffff'
  primary-container: '#173f35'
  on-primary-container: '#82aa9d'
  inverse-primary: '#a6cfc1'
  secondary: '#4a6453'
  on-secondary: '#ffffff'
  secondary-container: '#c9e7d1'
  on-secondary-container: '#4e6957'
  tertiary: '#302000'
  on-tertiary: '#ffffff'
  tertiary-container: '#4b3400'
  on-tertiary-container: '#c19c57'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#c1ecdd'
  primary-fixed-dim: '#a6cfc1'
  on-primary-fixed: '#002019'
  on-primary-fixed-variant: '#274e43'
  secondary-fixed: '#ccead4'
  secondary-fixed-dim: '#b0ceb8'
  on-secondary-fixed: '#062013'
  on-secondary-fixed-variant: '#324c3c'
  tertiary-fixed: '#ffdea5'
  tertiary-fixed-dim: '#e9c178'
  on-tertiary-fixed: '#271900'
  on-tertiary-fixed-variant: '#5d4202'
  background: '#fdf9ee'
  on-background: '#1c1c15'
  surface-variant: '#e6e2d8'
  charcoal-text: '#252525'
  soft-white: '#FFFFFF'
typography:
  display-lg:
    fontFamily: EB Garamond
    fontSize: 48px
    fontWeight: '600'
    lineHeight: 56px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: EB Garamond
    fontSize: 32px
    fontWeight: '500'
    lineHeight: 40px
  headline-lg-mobile:
    fontFamily: EB Garamond
    fontSize: 28px
    fontWeight: '500'
    lineHeight: 34px
  title-md:
    fontFamily: Hanken Grotesk
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
    letterSpacing: 0.01em
  body-lg:
    fontFamily: Hanken Grotesk
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Hanken Grotesk
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-sm:
    fontFamily: Hanken Grotesk
    fontSize: 12px
    fontWeight: '700'
    lineHeight: 16px
    letterSpacing: 0.1em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  base: 8px
  gutter: 24px
  margin-desktop: 48px
  margin-mobile: 16px
  container-max: 1280px
  stack-sm: 12px
  stack-md: 24px
  stack-lg: 48px
  stack-xl: 80px
---

## Brand & Style

The design system embodies a "Pure by Nature" philosophy, catering to a premium, health-conscious audience that values artisanal quality and traditional botanical wisdom. The visual direction is a blend of **Minimalism** and **Modern Corporate**, utilizing heavy whitespace to evoke cleanliness and purity while grounding the experience in organic, tactile luxury.

The emotional response should be one of calm, trust, and sophisticated growth. By avoiding clinical whites in favor of warm, earth-derived tones, the UI mimics the experience of a high-end wellness apothecary—refined, professional, and deeply connected to the natural world.

## Colors

The color palette is rooted in a deep forest ecosystem, balanced by the warmth of natural light.

- **Primary (Deep Forest Green):** The anchor of the brand, used for high-impact headers, primary actions, and brand-defining moments.
- **Secondary (Sage Green):** A soft, mid-tone green used for secondary UI elements, backgrounds, and supporting containers to provide a tonal bridge between dark and light.
- **Tertiary (Muted Gold):** Reserved for accents, highlights, and specialized badges to inject a sense of "premium" heritage and artisanal quality.
- **Neutral (Warm Ivory):** The primary background color, providing a soft, paper-like warmth that feels more approachable than pure white.
- **Text (Charcoal):** Used for all primary body and heading content to ensure high legibility while maintaining a softer contrast than true black.

## Typography

The typographic strategy balances classical elegance with modern clarity. 

**EB Garamond** is the voice of the brand’s heritage. It is used for all display and headline levels, providing an editorial, premium feel that evokes quality and authenticity. 

**Hanken Grotesk** serves as the functional workhorse for body text, titles, and interface labels. Its contemporary, sharp letterforms provide a professional edge and ensure optimal readability across all digital platforms. Labels and taglines should utilize the uppercase styling and increased tracking of `label-sm` to mimic the aesthetics of high-end product packaging.

## Layout & Spacing

This design system employs a **Fixed Grid** model for desktop experiences to maintain a disciplined, architectural feel. 

- **Desktop:** A 12-column grid centered within a 1280px max-width container. 
- **Mobile:** A single-column layout with 16px margins, where cards and images typically span the full width to create a tactile, immersive feel.
- **Rhythm:** An 8px base unit governs all spacing. Generous vertical spacing (`stack-xl`) is encouraged between major sections to facilitate the minimalist aesthetic and allow botanical imagery to breathe.

## Elevation & Depth

Hierarchy is established through **Tonal Layers** rather than artificial shadows, keeping the design grounded and organic.

- **Surface Tiers:** Depth is created by placing **Soft White** or **Sage Green** containers atop the **Warm Ivory** background.
- **Outlines:** Use low-contrast 1px borders in a slightly darkened tint of the surface color to define boundaries for cards and inputs.
- **Ambient Shadows:** Reserved exclusively for high-priority interactive elements (e.g., primary "Add to Cart" buttons). These shadows must be highly diffused, low-opacity, and subtly tinted with the Primary Forest Green color to avoid a "grey" or "dirty" appearance on the warm background.

## Shapes

The shape language is **Soft**, reflecting the gentle curves found in nature while maintaining the structure of a premium brand. 

- **Soft (0.25rem):** Applied to standard interactive components like buttons, input fields, and chips.
- **Large (0.5rem):** Applied to product cards and feature imagery to soften the overall layout.
- **Full (Pill):** Used sparingly for specialized status tags or "Pure" certification badges.

## Components

- **Buttons:** Primary buttons feature a **Deep Forest Green** fill with **Soft White** text. Secondary buttons use a **Muted Gold** outline with Hanken Grotesk medium-weight text.
- **Input Fields:** Designed with a "Minimalist" approach—utilizing a bottom-only 1px border in Sage Green or a very light 4-sided outline. Placeholder text uses Hanken Grotesk.
- **Cards:** Product cards use the **Soft White** surface with a center-aligned typographic layout. High-quality botanical photography should be the focal point.
- **Chips/Badges:** Use these for product attributes (e.g., "Organic"). They feature a **Sage Green** background at 20% opacity with **Deep Forest Green** text in the `label-sm` style.
- **Dividers:** Use 1px horizontal rules in **Muted Gold** at 30% opacity to separate content blocks elegantly without creating harsh visual breaks.
- **Lists:** Use custom botanical icons (e.g., a small leaf or gold dot) as bullet points to reinforce the brand identity.