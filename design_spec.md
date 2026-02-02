# SaaS Website Design Specification

## 1. Homepage Layout Structure

### **A. Navigation Bar (Sticky)**
*   **Left:** Product Logo (Icon + Wordmark) - Clean sans-serif.
*   **Center:** Main Navigation Links (Features, Product, Customers, Pricing).
*   **Right:** Primary Actions ("Log in" ghost button, "Start for free" solid button).

### **B. Hero Section (Above the fold)**
*   **Layout:** Centered content with maximum width.
*   **Elements:**
    *   **Badge:** Small "New" or "v2.0" pill badge, easy on eyes.
    *   **Headline:** Large, confident typography (H1). 60-80px range. Short and punchy.
    *   **Subheadline:** Greyed out, readable width (max-w-2xl). Explains the value prop.
    *   **CTA Group:** "Start building" (Primary) + "Read the docs" (Secondary) or "View Demo".
    *   **Visual:** Large, high-fidelity app screenshot or abstract interface representation. Floating "glass" elements or subtle shadow depth.

### **C. Social Proof / Trust Banner**
*   **Style:** Greyscale logos of companies, lowered opacity (40-60%).
*   **Heading:** Small uppercase label "TRUSTED BY ENGINEERING TEAMS AT".

### **D. Value Proposition / Feature Grid (Bento Grid Style)**
*   **Layout:** 2x2 or asymmetric grid.
*   **Cards:** 
    *   Subtle borders, white background, soft hover lift.
    *   Icon or small visual graphic per card.
    *   Concise copy.

### **E. Product Deep Dive (Alternating Layouts)**
*   **Layout:** Text on Left / Image on Right, then flipped.
*   **Content:** Focus on specific workflows (e.g., "Real-time collaboration", "Instant deployment").
*   **Visuals:** Zoomed-in UI parts, code snippets, or cursor interaction simulation.

### **F. Testimonial / Community**
*   **Style:** Single large quote from a reputable figure or a scrolling masonry of tweets/user cards.
*   **Elements:** Avatar, Name, Role, Company. Verifyable feedback.

### **G. CTA Section (Bottom)**
*   **Background:** Subtle gradient or off-white container.
*   **Headline:** "Ready to ship?"
*   **CTA:** Big button again.

### **H. Footer**
*   **Layout:** Multi-column.
*   **Columns:** Product, Resources, Company, Legal.
*   **Bottom:** Copyright, Status indicator (green dot "Systems Normal"), Social links.

---

## 2. Design System

### **A. Color Palette (Light Theme Only)**

**Neutrals (Foundation)**
*   `#FFFFFF` - Background / Cards
*   `#FAFAFA` - Secondary Background (Page sections)
*   `#F5F5F5` - Tertiary Background (Hover states)
*   `#E5E5E5` - Borders / Dividers
*   `#A3A3A3` - Secondary Text / Icons
*   `#525252` - Primary Body Text
*   `#171717` - Headings / Strong Text

**Primary Brand (Accent - e.g., Electric Blue or Obsidian)**
*   `#000000` - Primary Button Background (High contrast, premium feel)
*   `#333333` - Primary Button Hover
*   *Alternative (Blue):* `#2563EB` (Standard SaaS Blue) - *Recommendation: Stick to Monochrome + 1 Accent color if needed.*

**Functional**
*   `#EF4444` - Error / Destructive
*   `#22C55E` - Success / Status Good
*   `#EAB308` - Warning

### **B. Typography**

**Font Family**
*   **Primary:** `Inter`, `Geist Sans`, or `Plus Jakarta Sans`. (Clean, grotesque sans-serif).
*   **Monospace:** `JetBrains Mono` or `Fira Code` (For code snippets).

**Scale (Desktop)**
*   **Display:** 72px / 1.1 (Hero H1)
*   **H1:** 48px / 1.2
*   **H2:** 36px / 1.2
*   **H3:** 24px / 1.3
*   **Body Large:** 18px / 1.5
*   **Body:** 16px / 1.5
*   **Caption/Small:** 14px / 1.5

### **C. Spacing Rules (8pt Grid System)**

*   `xs`: 4px
*   `sm`: 8px
*   `md`: 16px (Standard component padding)
*   `lg`: 24px
*   `xl`: 32px
*   `2xl`: 48px (Section gaps)
*   `3xl`: 64px
*   `4xl`: 96px (Major section vertical spacing)

### **D. Button Styles**

**Primary Button**
*   Background: `#171717` (Black)
*   Text: `#FFFFFF` (White)
*   Radius: `6px` or `8px` (Slightly rounded, not full pill unless strictly modern style)
*   Padding: `12px 24px`
*   Font Weight: Medium (500)
*   Hover: Transform Y -1px, Shadow-lg.

**Secondary Button (Ghost/Outline)**
*   Background: Transparent
*   Border: `1px solid #E5E5E5` or None
*   Text: `#525252`
*   Hover: Background `#FAFAFA`, Text `#171717`

---

## 3. Reusable Section Component Specs

### **Hero Component**
*   **Props:** `title`, `subtitle`, `badgeText`, `primaryCtaText`, `secondaryCtaText`
*   **Container:** `max-w-7xl mx-auto px-6`
*   **Animation:** Fade-in up for text. Staggered reveal.

### **Features Grid Component**
*   **Props:** `features` (Array of objects: { icon, title, description })
*   **Grid:** CSS Grid `grid-cols-1 md:grid-cols-3`
*   **Card:** Flex column. Icon top left.

### **Product Showcase Component**
*   **Props:** `orientation` ('left' | 'right'), `imageSrc`, `badge`, `heading`, `text`
*   **Responsive:** Stack on mobile, side-by-side on desktop.

### **Trust Logo Component**
*   **Props:** `logos` (Array of SVGs)
*   **Styling:** Flexbox, `justify-center`, `gap-8`, `flex-wrap`. Greyscale filter applied globally to images.

### **Footer Component**
*   **Structure:** Grid layout `2fr 1fr 1fr 1fr`. First column is Brand/Logo + Socials. Last 3 are links.

---

## 4. Design Decisions

*   **Monochromatic Foundation:** Using black/white/grey allows the content and product screenshots to pop. It feels "engineered" rather than "marketed".
*   **Generous Whitespace:** Spacing (padding 96px+) between sections reduces cognitive load, making the product feel easy to use.
*   **Typography Hierarchy:** Large contrast between headings (weighted, dark) and body (lighter, smaller) creates distinct reading paths.
*   **Subtle Interactions:** Buttons lifting on hover, inputs focusing with a subtle ring—these build trust in the software quality without being flashy.
*   **Border-First Design:** Using 1px borders for cards instead of heavy shadows (Notion/Linear style) creates a flatter, more modern technical aesthetic.
