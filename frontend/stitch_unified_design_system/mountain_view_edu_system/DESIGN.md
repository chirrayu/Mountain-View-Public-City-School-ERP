---
name: Mountain View Edu-System
colors:
  surface: '#f4faff'
  surface-dim: '#cfdce4'
  surface-bright: '#f4faff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#e9f6fd'
  surface-container: '#e3f0f8'
  surface-container-high: '#ddeaf2'
  surface-container-highest: '#d7e4ec'
  on-surface: '#111d23'
  on-surface-variant: '#404752'
  inverse-surface: '#263238'
  inverse-on-surface: '#e6f3fb'
  outline: '#707783'
  outline-variant: '#c0c7d4'
  surface-tint: '#0060a8'
  primary: '#005ea4'
  on-primary: '#ffffff'
  primary-container: '#0077ce'
  on-primary-container: '#fdfcff'
  inverse-primary: '#a2c9ff'
  secondary: '#3e6a00'
  on-secondary: '#ffffff'
  secondary-container: '#b9f474'
  on-secondary-container: '#437000'
  tertiary: '#b7131a'
  on-tertiary: '#ffffff'
  tertiary-container: '#db322f'
  on-tertiary-container: '#fffbff'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#d3e4ff'
  primary-fixed-dim: '#a2c9ff'
  on-primary-fixed: '#001c38'
  on-primary-fixed-variant: '#004881'
  secondary-fixed: '#b9f474'
  secondary-fixed-dim: '#9ed75b'
  on-secondary-fixed: '#0f2000'
  on-secondary-fixed-variant: '#2e4f00'
  tertiary-fixed: '#ffdad6'
  tertiary-fixed-dim: '#ffb4ac'
  on-tertiary-fixed: '#410002'
  on-tertiary-fixed-variant: '#93000d'
  background: '#f4faff'
  on-background: '#111d23'
  surface-variant: '#d7e4ec'
typography:
  display:
    fontFamily: Plus Jakarta Sans
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
  headline-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  headline-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
  body-lg:
    fontFamily: Atkinson Hyperlegible Next
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Atkinson Hyperlegible Next
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-lg:
    fontFamily: Atkinson Hyperlegible Next
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
  label-sm:
    fontFamily: Atkinson Hyperlegible Next
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
  headline-lg-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 28px
    fontWeight: '700'
    lineHeight: 36px
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 4px
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 32px
  2xl: 48px
  3xl: 64px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 48px
---

## Brand & Style
The design system for Mountain View City Public School is built on a foundation of inclusivity, optimism, and institutional trust. It balances the vibrant, high-energy palette of the school's logo with a sophisticated **Corporate / Modern** execution to ensure readability and accessibility for a diverse community of students, parents, and educators.

The visual language emphasizes clarity and structure, utilizing a clean grid and generous whitespace to make complex educational data—such as schedules and grades—easy to digest. By pairing a professional "SaaS-like" layout with the school's signature primary colors, the system feels contemporary and forward-thinking while remaining firmly rooted in its community-oriented mission.

## Colors
The color palette is directly derived from the logo, modernized for digital accessibility (WCAG 2.1 AA compliance). 

- **Primary (Vibrant Blue):** Used for primary actions, links, and navigation headers. It conveys trust and stability.
- **Secondary (Green):** Representing growth and vitality, used for success states and academic progress indicators.
- **Tertiary (Red):** Used for alerts, critical notices, and sports/spirit-related highlights.
- **Indigo (Purple/Indigo):** Used as a deep accent for secondary branding and specialized curriculum areas.
- **Neutral:** A range of slate grays and off-whites provides the necessary structure and background for the vibrant brand colors to pop without overwhelming the user.

In **Dark Mode**, background surfaces transition to deep charcoal, while primary and secondary colors are adjusted for optimal luminosity to prevent eye strain.

## Typography
Accessibility is the priority. We use **Plus Jakarta Sans** for headlines to provide a friendly yet professional geometric appearance. For all body text and labels, we utilize **Atkinson Hyperlegible Next**, specifically designed to increase character recognition and improve readability for students with visual impairments or learning differences.

- **Scale:** Maintain a clear hierarchy by using weight (Bold/Semibold) for headings and Regular for long-form content.
- **Line Height:** Generous leading (1.5x) is applied to body text to prevent "crowding" of information.

## Layout & Spacing
The design system employs a **12-column fluid grid** for desktop and a **4-column grid** for mobile. A strict 8px (base 4px) spacing rhythm ensures vertical and horizontal consistency across all screens.

- **Margins:** Desktop views should maintain 48px outer margins to provide "breathing room" for educational content.
- **Gutters:** Fixed at 24px to prevent content from feeling cramped.
- **Density:** High-density layouts are permitted for administrative tables and gradebooks, but public-facing informational pages should favor `spacing.xl` (32px) between sections to ensure focus.

## Elevation & Depth
To maintain a clean, modern aesthetic, this design system uses **Tonal Layers** and **Ambient Shadows**.

- **Level 0 (Base):** The main canvas background.
- **Level 1 (Cards/Surface):** White (or dark charcoal) with a subtle 1px border (#E0E0E0) and no shadow.
- **Level 2 (Interactive):** Elements that are hoverable or active use a soft, low-opacity shadow (0px 4px 12px rgba(0,0,0,0.05)) to suggest lift.
- **Level 3 (Modals/Popovers):** Higher contrast shadows (0px 12px 24px rgba(0,0,0,0.15)) to isolate the element from the background.

Avoid heavy skeuomorphism. Depth is primarily signaled through subtle shifts in background color and thin, clean outlines.

## Shapes
We use a **Rounded** (0.5rem / 8px) shape language. This creates a balance between the formal structure of a school and the welcoming nature of an elementary/middle school environment.

- **Standard Elements:** 8px radius (Buttons, Inputs, Cards).
- **Large Elements:** 16px radius (Banners, Hero sections).
- **Status Pills:** Fully rounded (capsule) for quick visual scanning of "Enrolled," "Active," or "Completed" statuses.

## Components
Consistent component behavior ensures the system is easy for all users to navigate.

- **Buttons:**
    - *Primary:* Solid Vibrant Blue with white text.
    - *Secondary:* Ghost style with Blue border and text.
    - *State:* Hover states involve a 10% darkening of the fill; disabled states use a light gray with 40% opacity.
- **Cards:**
    - Cards feature an 8px corner radius and a thin 1px border.
    - Header areas in cards can use a light tint of the primary or secondary color to categorize content (e.g., Green for Science, Blue for Math).
- **Input Fields:**
    - Outlined style with labels always visible above the field.
    - Focus state uses a 2px Primary Blue border with a soft glow.
- **Tables:**
    - Clean, borderless rows with subtle horizontal dividers.
    - Zebra-striping (light gray) for data-heavy views like attendance or grade lists.
    - Header rows are sticky with a distinct background tint.
- **Chips:**
    - Used for grade levels (K-5, 6-8, 9-12) or subject tags. Use secondary/tertiary colors with 15% opacity backgrounds and 100% opacity text for high readability.