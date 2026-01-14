# Marina Dimitrova Portfolio - Development Plan

**Project:** Marina Dimitrova Portfolio Website
**Execution Model:** Coding Agent + Human-in-the-Loop (HITL) Review
**Target:** Static portfolio website (HTML/CSS/JavaScript)
**Reference:** See [CLAUDE.md](CLAUDE.md) for complete specifications

---

## Overview

This development plan breaks down the portfolio website creation into **5 phases** with **45+ atomic tasks**. Each task is designed to be executed by a coding agent and reviewed by a human developer at designated checkpoints.

### Execution Workflow

```
Phase Start
    ↓
Agent executes tasks sequentially
    ↓
Phase Complete
    ↓
HITL Review Checkpoint
    ↓
Human approves/requests changes
    ↓
Next Phase or Iteration
```

### Task Structure

Each task includes:
- **Task ID:** Unique identifier (e.g., P1-T1)
- **Description:** What needs to be coded
- **File Target:** Exact file path(s)
- **Dependencies:** Prerequisites
- **Acceptance Criteria:** Measurable success conditions
- **Validation:** How HITL reviewer validates
- **Effort:** Small (S), Medium (M), Large (L)

---

## Phase 0: Project Setup & Asset Organization

**Goal:** Create project structure and organize assets
**Duration:** ~30 minutes
**Dependencies:** Access to Materials folder

### Tasks

#### P0-T1: Create Project Folder Structure
**Status:** ✅ Completed (2026-01-14)
**PR:** #1
**Effort:** S
**File Targets:** Directory structure

**Description:**
Create the complete folder structure for the project following modern best practices.

**Implementation:**
```
marina-portfolio/
├── index.html
├── css/
│   ├── base/
│   ├── layout/
│   ├── components/
│   └── utilities/
├── js/
│   └── modules/
└── images/
    ├── backgrounds/
    ├── profile/
    ├── projects/
    └── icons/
```

**Acceptance Criteria:**
- [ ] All folders exist
- [ ] Folder structure matches specification
- [ ] No extra files or folders

**Validation (HITL):**
```bash
# Verify structure
tree marina-portfolio
# or on Windows:
dir /s /b marina-portfolio
```

---

#### P0-T2: Organize Image Assets
**Status:** ✅ Completed (2026-01-14)
**PR:** #2
**Effort:** S
**File Targets:** `images/*`
**Dependencies:** P0-T1

**Description:**
Copy and organize images from `Materials/IMAGES/` to appropriate subdirectories.

**Implementation:**
1. Copy background images:
   - `fondo.png` → `images/backgrounds/`
   - `pinceladas rojas.png` → `images/backgrounds/pinceladas-rojas.png`
   - `circulo rojo.png` → `images/backgrounds/circulo-rojo.png`
   - `head.png` → `images/backgrounds/`

2. Copy profile image:
   - `fotomia.jpg` → `images/profile/`

3. Copy project images:
   - `IMG1.jpg` → `images/projects/`
   - `IMG2.jpg` → `images/projects/`
   - `IMG3.jpg` → `images/projects/`

4. Copy icons:
   - `ai.png` → `images/icons/`
   - `ps.png` → `images/icons/`
   - `id.png` → `images/icons/`
   - `figma.png` → `images/icons/`

**Acceptance Criteria:**
- [ ] All 12 images copied to correct locations
- [ ] File names follow kebab-case convention (spaces replaced with hyphens)
- [ ] No duplicate files
- [ ] Image paths match HTML references in CLAUDE.md

**Validation (HITL):**
- Verify all images exist in correct folders
- Check file sizes (should be < 500KB each for web)
- Open each image to verify it's not corrupted

---

#### P0-T3: Create Package Metadata Files
**Effort:** S
**File Targets:** `README.md`, `.gitignore`

**Description:**
Create project documentation and version control configuration.

**Implementation:**

**File: `README.md`**
```markdown
# Marina Dimitrova Portfolio

Static portfolio website for Marina Dimitrova, graphic designer and multimedia artist.

## Tech Stack
- HTML5
- CSS3 (Grid, Flexbox, Custom Properties)
- Vanilla JavaScript (ES6 Modules)

## Structure
- `/css` - Modular CSS (BEM methodology)
- `/js` - JavaScript modules
- `/images` - Optimized assets

## Development
1. Open `index.html` in browser
2. Use Live Server for development

## Specifications
See [CLAUDE.md](CLAUDE.md) for complete technical specifications.
```

**File: `.gitignore`**
```
# OS
.DS_Store
Thumbs.db

# IDEs
.vscode/
.idea/
*.swp
*.swo

# Temp
*.tmp
*.log

# Build (if added later)
dist/
build/
```

**Acceptance Criteria:**
- [ ] README.md exists with project description
- [ ] .gitignore exists with standard exclusions
- [ ] Markdown is properly formatted

**Validation (HITL):**
- Read README to ensure clarity
- Check .gitignore covers common files

---

### Phase 0 Review Checkpoint

**HITL Validation:**
1. ✅ Folder structure matches specification
2. ✅ All 12 images are in correct locations
3. ✅ File naming is consistent (kebab-case)
4. ✅ README and .gitignore exist
5. ✅ No extra or missing files

**Approval Required:** Yes
**Next Phase:** Phase 1 (Foundation)

---

## Phase 1: Foundation - Base CSS & HTML Structure

**Goal:** Create base CSS files and HTML skeleton
**Duration:** ~2 hours
**Dependencies:** Phase 0 complete

### Tasks

#### P1-T1: Create CSS Reset
**Status:** ✅ Completed (2026-01-14)
**PR:** #3
**Effort:** S
**File Target:** `css/base/reset.css`
**Dependencies:** P0-T1

**Description:**
Implement modern CSS reset for consistent cross-browser styling.

**Implementation:**
Copy the following modern CSS reset:

```css
/* Modern CSS Reset */
*, *::before, *::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  scroll-behavior: smooth;
}

body {
  min-height: 100vh;
  text-rendering: optimizeSpeed;
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

img, picture, video, canvas, svg {
  display: block;
  max-width: 100%;
}

input, button, textarea, select {
  font: inherit;
}

p, h1, h2, h3, h4, h5, h6 {
  overflow-wrap: break-word;
}

ul, ol {
  list-style: none;
}

a {
  text-decoration: none;
  color: inherit;
}

button {
  cursor: pointer;
  border: none;
  background: none;
}
```

**Acceptance Criteria:**
- [ ] File exists at `css/base/reset.css`
- [ ] All reset rules are present
- [ ] No syntax errors
- [ ] File is properly commented

**Validation (HITL):**
- CSS validates at https://jigsaw.w3.org/css-validator/
- Check for proper formatting

---

#### P1-T2: Create CSS Custom Properties (Design Tokens)
**Status:** ✅ Completed (2026-01-14)
**PR:** #4
**Effort:** M
**File Target:** `css/base/variables.css`
**Dependencies:** P0-T1
**Reference:** CLAUDE.md lines 589-674

**Description:**
Define all CSS custom properties for colors, typography, spacing, etc.

**Implementation:**
Copy the complete CSS custom properties from CLAUDE.md (lines 589-674).

**Key Sections:**
- Colors (primary, accent, backgrounds, text)
- Typography (fonts, sizes, weights, line heights)
- Spacing (8px base unit system)
- Layout (container, section padding)
- Border radius, shadows, transitions
- Z-index scale

**Acceptance Criteria:**
- [ ] File exists at `css/base/variables.css`
- [ ] All color variables defined (8 colors)
- [ ] All typography variables defined (fonts, sizes, weights)
- [ ] Spacing scale complete (xs through 5xl)
- [ ] Responsive adjustments for mobile included
- [ ] Uses `clamp()` for fluid typography
- [ ] No syntax errors

**Validation (HITL):**
- CSS validates
- Check color values match design (#8B2F2F, #EDE5DD, etc.)
- Verify `clamp()` syntax is correct
- Test in browser DevTools (inspect :root)

---

#### P1-T3: Create Typography Styles
**Effort:** M
**File Target:** `css/base/typography.css`
**Dependencies:** P1-T2

**Description:**
Import Google Fonts and define typography styles.

**Implementation:**

```css
/* Google Fonts Import */
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&family=Lora:wght@400;500;700&display=swap');

/* Base Typography */
body {
  font-family: var(--font-body);
  font-size: var(--font-size-body);
  font-weight: var(--font-weight-regular);
  line-height: var(--line-height-normal);
  color: var(--color-text-primary);
}

/* Headings */
h1, h2, h3, h4, h5, h6 {
  font-family: var(--font-heading);
  font-weight: var(--font-weight-bold);
  line-height: var(--line-height-tight);
  color: var(--color-text-primary);
}

h1 {
  font-size: var(--font-size-h1);
  letter-spacing: -0.02em;
}

h2 {
  font-size: var(--font-size-h2);
}

h3 {
  font-size: var(--font-size-h3);
}

/* Paragraphs */
p {
  margin-bottom: var(--space-md);
}

p:last-child {
  margin-bottom: 0;
}

/* Links */
a {
  color: inherit;
  text-decoration: none;
  transition: opacity var(--transition-fast);
}

a:hover {
  opacity: 0.8;
}

/* Strong & Emphasis */
strong, b {
  font-weight: var(--font-weight-bold);
}

em, i {
  font-style: italic;
}
```

**Acceptance Criteria:**
- [ ] File exists at `css/base/typography.css`
- [ ] Google Fonts imported (Playfair Display, Lora)
- [ ] Body typography defined
- [ ] All heading levels styled (h1-h6)
- [ ] Paragraph and link styles defined
- [ ] Uses CSS custom properties from variables.css
- [ ] No syntax errors

**Validation (HITL):**
- Check fonts load in browser Network tab
- Verify font-family fallbacks exist
- Test `font-display: swap` for performance

---

#### P1-T4: Create Utility Helper Classes
**Effort:** S
**File Target:** `css/utilities/helpers.css`
**Dependencies:** P1-T2
**Reference:** CLAUDE.md lines 1200-1266

**Description:**
Create reusable utility classes for containers, accessibility, and common patterns.

**Implementation:**
Copy utility classes from CLAUDE.md lines 1200-1266, including:
- Container classes
- Accessibility helpers (visually-hidden, skip-link)
- Text utilities
- Display utilities
- Reduced motion media query

**Acceptance Criteria:**
- [ ] File exists at `css/utilities/helpers.css`
- [ ] Container classes defined (.container, .container--wide)
- [ ] Accessibility classes (.visually-hidden, .skip-link)
- [ ] Prefers-reduced-motion media query included
- [ ] No syntax errors

**Validation (HITL):**
- Test .visually-hidden with screen reader
- Verify .skip-link appears on Tab focus
- Check containers center correctly

---

#### P1-T5: Create Main CSS Import File
**Effort:** S
**File Target:** `css/style.css`
**Dependencies:** P1-T1, P1-T2, P1-T3, P1-T4

**Description:**
Create main CSS file that imports all other stylesheets in correct order.

**Implementation:**

```css
/* Marina Dimitrova Portfolio - Main Stylesheet */

/* 1. Base Styles */
@import 'base/reset.css';
@import 'base/variables.css';
@import 'base/typography.css';

/* 2. Layout */
@import 'layout/grid.css';
@import 'layout/sections.css';

/* 3. Components */
@import 'components/navigation.css';
@import 'components/buttons.css';
@import 'components/cards.css';
@import 'components/modal.css';

/* 4. Utilities */
@import 'utilities/helpers.css';

/* Note: Files will be created in subsequent phases */
```

**Acceptance Criteria:**
- [ ] File exists at `css/style.css`
- [ ] Imports in correct order (base → layout → components → utilities)
- [ ] All import paths are correct
- [ ] Commented for clarity
- [ ] No syntax errors

**Validation (HITL):**
- Link stylesheet in HTML and check browser console for 404 errors
- Verify cascade order is correct

---

#### P1-T6: Create HTML Skeleton Structure
**Effort:** L
**File Target:** `index.html`
**Dependencies:** P1-T5
**Reference:** CLAUDE.md lines 340-583

**Description:**
Create complete HTML structure with semantic markup, BEM classes, and ARIA attributes.

**Implementation:**
Copy the full HTML skeleton from CLAUDE.md lines 340-583.

**Key Requirements:**
- HTML5 doctype and lang="es"
- Meta tags (charset, viewport, description, Open Graph)
- Preconnect to Google Fonts
- Skip link for accessibility
- Semantic HTML5 elements (header, nav, main, section, aside, address)
- BEM naming convention throughout
- ARIA labels and roles
- Data attributes for JavaScript hooks
- All 5 sections: Hero, About, Editorial Gallery, Contact, Projects Modal

**Acceptance Criteria:**
- [ ] File exists at `index.html`
- [ ] Valid HTML5 structure
- [ ] Meta tags complete (SEO, Open Graph)
- [ ] All 5 sections present
- [ ] BEM naming consistent throughout
- [ ] ARIA attributes on interactive elements
- [ ] Skip link implemented
- [ ] All image paths match organized assets
- [ ] No broken links or missing references

**Validation (HITL):**
- HTML validates at https://validator.w3.org/
- Check heading hierarchy (h1 → h2 → h3)
- Verify BEM naming is consistent
- Test skip link functionality
- Verify all image src paths exist

---

### Phase 1 Review Checkpoint

**HITL Validation:**
1. ✅ All base CSS files created and valid
2. ✅ CSS custom properties defined correctly
3. ✅ Typography styles applied
4. ✅ HTML structure is semantic and valid
5. ✅ BEM naming convention followed
6. ✅ Accessibility attributes present
7. ✅ No console errors when opening index.html

**Visual Check:**
- Open index.html in browser
- Should see unstyled content with proper semantic structure
- Text should use correct fonts (Playfair Display, Lora)
- No missing images (404 errors)

**Approval Required:** Yes
**Next Phase:** Phase 2 (Core Sections)

---

## Phase 2: Core Sections - Layout & Components

**Goal:** Implement CSS for Hero, About, and Contact sections
**Duration:** ~3 hours
**Dependencies:** Phase 1 complete

### Tasks

#### P2-T1: Create Grid System
**Effort:** S
**File Target:** `css/layout/grid.css`
**Dependencies:** P1-T2

**Description:**
Define grid system and responsive breakpoints.

**Implementation:**

```css
/* Grid System */

/* Container */
.container {
  width: 100%;
  max-width: var(--container-max-width);
  margin-inline: auto;
  padding-inline: var(--container-padding);
}

.container--wide {
  max-width: 1400px;
}

/* Responsive Grid Utilities */
.grid {
  display: grid;
  gap: var(--space-lg);
}

.grid--2col {
  grid-template-columns: repeat(2, 1fr);
}

@media (max-width: 768px) {
  .grid--2col {
    grid-template-columns: 1fr;
  }
}

/* Flexbox Utilities */
.flex {
  display: flex;
  gap: var(--space-md);
}

.flex--center {
  justify-content: center;
  align-items: center;
}

.flex--between {
  justify-content: space-between;
  align-items: center;
}
```

**Acceptance Criteria:**
- [ ] File exists at `css/layout/grid.css`
- [ ] Container classes use CSS custom properties
- [ ] Responsive grid defined
- [ ] Flexbox utilities included
- [ ] No syntax errors

**Validation (HITL):**
- Test container max-width in browser (1200px on desktop)
- Verify responsive behavior at 768px breakpoint

---

#### P2-T2: Style Hero Section
**Effort:** L
**File Target:** `css/layout/sections.css`
**Dependencies:** P2-T1
**Reference:** CLAUDE.md lines 682-732

**Description:**
Implement Hero section styles with CSS Grid centering and background image.

**Implementation:**
Copy Hero section CSS from CLAUDE.md lines 682-732.

**Key Features:**
- Full viewport height (100vh)
- CSS Grid with place-items: center
- Absolute positioned background with decorative image
- Centered content with max-width
- Responsive typography
- CTA button styling reference

**Acceptance Criteria:**
- [ ] Hero takes full viewport height
- [ ] Content is perfectly centered
- [ ] Background image (fondo.png) visible and positioned correctly
- [ ] Text is readable and uses fluid typography
- [ ] Button appears (will be styled in P2-T5)
- [ ] Responsive on mobile (<768px)
- [ ] No syntax errors

**Validation (HITL):**
- Compare with design screenshot (Screenshot 2026-01-14 102323.png)
- Verify vertical and horizontal centering
- Test on different screen sizes (mobile, tablet, desktop)
- Check background image loads correctly

---

#### P2-T3: Style About Section
**Effort:** L
**File Target:** `css/layout/sections.css` (add to existing)
**Dependencies:** P2-T2
**Reference:** CLAUDE.md lines 734-843

**Description:**
Implement About section with 60/40 Grid split and profile image styling.

**Implementation:**
Add About section CSS to `sections.css` (append after Hero).

**Copy from CLAUDE.md:**
- Lines 737-790: About grid layout (60/40 split)
- Lines 795-843: Skills section flexbox layout

**Key Features:**
- CSS Grid with 60fr/40fr columns on desktop
- Stacks to single column on mobile (<768px)
- Profile image with circular red frame
- Skills grid (2 columns for icons)
- Responsive typography and spacing

**Acceptance Criteria:**
- [ ] 60/40 grid split on desktop (>1024px)
- [ ] Single column on mobile (<768px)
- [ ] Profile image displays correctly
- [ ] Circular red frame overlays profile photo
- [ ] Skills icons in 2-column grid
- [ ] Text is readable and well-spaced
- [ ] No syntax errors

**Validation (HITL):**
- Compare with design screenshot (Screenshot 2026-01-14 102350.png)
- Verify 60/40 split at 1024px+
- Test mobile stacking behavior
- Check profile image positioning
- Verify all 4 software icons and 3 languages display

---

#### P2-T4: Style Contact Section
**Effort:** M
**File Target:** `css/layout/sections.css` (add to existing)
**Dependencies:** P2-T3

**Description:**
Implement Contact section with centered layout and clickable links.

**Implementation:**

```css
/* Contact Section */
.contact {
  position: relative;
  min-height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: var(--section-padding) 0;
  background-color: var(--color-bg-cream);
}

.contact__background {
  position: absolute;
  inset: 0;
  z-index: var(--z-base);
  pointer-events: none;
}

.contact__bg-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0.9;
}

.contact__content {
  position: relative;
  z-index: calc(var(--z-base) + 1);
  text-align: center;
  max-width: 800px;
}

.contact__title {
  font-family: var(--font-heading);
  font-size: var(--font-size-h1);
  font-weight: var(--font-weight-bold);
  margin-bottom: var(--space-3xl);
  color: var(--color-text-primary);
}

.contact__info {
  font-style: normal;
  display: flex;
  flex-direction: column;
  gap: var(--space-xl);
}

.contact__item {
  display: flex;
  flex-direction: column;
  gap: var(--space-xs);
}

.contact__label {
  font-family: var(--font-body);
  font-size: var(--font-size-small);
  color: var(--color-text-secondary);
  text-transform: uppercase;
  letter-spacing: 0.1em;
}

.contact__link {
  font-family: var(--font-body);
  font-size: var(--font-size-h3);
  color: var(--color-text-primary);
  transition: color var(--transition-base);
  word-break: break-word;
}

.contact__link:hover {
  color: var(--color-primary);
  text-decoration: underline;
}

/* Mobile */
@media (max-width: 768px) {
  .contact__link {
    font-size: var(--font-size-body);
  }
}
```

**Acceptance Criteria:**
- [ ] Contact section centered vertically and horizontally
- [ ] Background image (fondo.png) visible
- [ ] Contact details clearly displayed
- [ ] Email, LinkedIn, and phone links are clickable
- [ ] Hover states work on links
- [ ] Responsive on mobile
- [ ] No syntax errors

**Validation (HITL):**
- Compare with design screenshot (Screenshot 2026-01-14 102547.png)
- Click email link (should open mailto:)
- Click LinkedIn link (should open in new tab)
- Click phone link (should open tel:)
- Test hover states

---

#### P2-T5: Create Button Component Styles
**Effort:** M
**File Target:** `css/components/buttons.css`
**Dependencies:** P1-T2
**Reference:** CLAUDE.md lines 1017-1075

**Description:**
Implement button component styles for primary CTA and back buttons.

**Implementation:**
Copy button CSS from CLAUDE.md lines 1017-1075.

**Components:**
- .btn (primary button)
- .btn--primary (variant)
- .btn-back (circular back button)

**Key Features:**
- Pill-shaped border (border-radius: 40px)
- Transparent background with red border
- Hover state: filled background, white text, lift effect
- Focus states for accessibility
- Circular back button with arrow icon

**Acceptance Criteria:**
- [ ] File exists at `css/components/buttons.css`
- [ ] Primary button styled correctly
- [ ] Hover effects work (background fill, lift)
- [ ] Focus states visible
- [ ] Back button is circular
- [ ] Uses CSS custom properties
- [ ] No syntax errors

**Validation (HITL):**
- Test button hover animation
- Verify lift effect (translateY)
- Check focus indicators (keyboard navigation)
- Compare with design screenshot button styles

---

#### P2-T6: Create Navigation Component Styles
**Effort:** M
**File Target:** `css/components/navigation.css`
**Dependencies:** P1-T2
**Reference:** CLAUDE.md lines 1123-1196

**Description:**
Implement sticky header navigation with show/hide on scroll behavior.

**Implementation:**
Copy navigation CSS from CLAUDE.md lines 1123-1196.

**Key Features:**
- Sticky position (top: 0)
- Dark red background
- Right-aligned nav links
- Initially hidden (translateY(-100%))
- Shows after scrolling past hero (via JavaScript class)
- Underline animation on hover
- Mobile responsive

**Acceptance Criteria:**
- [ ] File exists at `css/components/navigation.css`
- [ ] Header is sticky
- [ ] Navigation links right-aligned
- [ ] Initially hidden (transform: translateY(-100%))
- [ ] .header--visible class shows header
- [ ] Underline animation on hover
- [ ] Mobile responsive (<768px)
- [ ] No syntax errors

**Validation (HITL):**
- Verify header sticks to top on scroll
- Test hover animations (underline)
- Check mobile layout
- Verify visibility toggle class works

---

### Phase 2 Review Checkpoint

**HITL Validation:**
1. ✅ All section layouts implemented
2. ✅ Hero section matches design (centered, full height)
3. ✅ About section has 60/40 grid split
4. ✅ Contact section links are functional
5. ✅ Buttons styled with hover effects
6. ✅ Navigation styled correctly
7. ✅ Responsive on mobile, tablet, desktop
8. ✅ No CSS errors or broken layouts

**Visual Comparison:**
- Hero: Compare with Screenshot 2026-01-14 102323.png
- About: Compare with Screenshot 2026-01-14 102350.png
- Contact: Compare with Screenshot 2026-01-14 102547.png

**Functional Tests:**
- Click "Explora mi trabajo" button (should scroll, but smooth scroll not working yet)
- Test navigation links (non-functional until JS added)
- Verify all images load

**Approval Required:** Yes
**Next Phase:** Phase 3 (Interactivity)

---

## Phase 3: Interactivity - Modal, Gallery & JavaScript

**Goal:** Add modal, gallery, and JavaScript functionality
**Duration:** ~3 hours
**Dependencies:** Phase 2 complete

### Tasks

#### P3-T1: Create Modal Component Styles
**Effort:** M
**File Target:** `css/components/modal.css`
**Dependencies:** P1-T2
**Reference:** CLAUDE.md lines 907-1013

**Description:**
Implement projects modal overlay with animations and close button.

**Implementation:**
Copy modal CSS from CLAUDE.md lines 907-1013.

**Key Features:**
- Fixed full-screen overlay
- CSS Grid centering
- Semi-transparent beige background
- Fade-in animation
- Close button (circular, top-right)
- Menu items with hover scale effect
- Hidden by default (hidden attribute)

**Acceptance Criteria:**
- [ ] File exists at `css/components/modal.css`
- [ ] Modal covers full screen
- [ ] Content centered with Grid
- [ ] Fade-in animation defined
- [ ] Close button styled (circular, dark red)
- [ ] Menu items have hover effects
- [ ] Uses `[hidden]` attribute selector
- [ ] No syntax errors

**Validation (HITL):**
- Remove `hidden` attribute in HTML to view modal
- Verify modal covers full screen
- Test close button appearance
- Check menu item hover animations
- Re-add `hidden` attribute

---

#### P3-T2: Create Card Component Styles
**Effort:** M
**File Target:** `css/components/cards.css`
**Dependencies:** P1-T2
**Reference:** CLAUDE.md lines 1077-1121

**Description:**
Implement project card component with image and hover effects.

**Implementation:**
Copy card CSS from CLAUDE.md lines 1077-1121.

**Key Features:**
- Rounded square cards
- 8px thick red border
- 1:1 aspect ratio image wrapper
- Hover: lift effect + shadow
- Image zoom on hover
- Centered title below image

**Acceptance Criteria:**
- [ ] File exists at `css/components/cards.css`
- [ ] Card has rounded corners and red border
- [ ] Image maintains 1:1 aspect ratio
- [ ] Hover lift effect works (translateY)
- [ ] Image zooms on card hover (scale 1.05)
- [ ] Title styled correctly
- [ ] No syntax errors

**Validation (HITL):**
- Test card hover effects
- Verify image aspect ratio maintained
- Check shadow appears on hover
- Compare with design screenshot (Screenshot 2026-01-14 102433.png)

---

#### P3-T3: Create Gallery Section Styles
**Effort:** M
**File Target:** `css/layout/sections.css` (add to existing)
**Dependencies:** P3-T2
**Reference:** CLAUDE.md lines 845-905

**Description:**
Implement horizontal scrolling gallery for Editorial projects.

**Implementation:**
Add gallery CSS to `sections.css` (append after Contact).
Copy from CLAUDE.md lines 845-905.

**Key Features:**
- Horizontal scroll container
- Flexbox layout
- Custom scrollbar styling
- Scroll snap points
- Back button positioned top-right
- Gallery header with title

**Acceptance Criteria:**
- [ ] Gallery scrolls horizontally
- [ ] Scrollbar styled (thin, dark red thumb)
- [ ] Scroll snap points work
- [ ] Back button positioned top-right
- [ ] Cards display in horizontal row
- [ ] Responsive on mobile
- [ ] No syntax errors

**Validation (HITL):**
- Remove `hidden` attribute from #editorial section
- Verify horizontal scroll works
- Test scroll snap behavior
- Check scrollbar appearance
- Re-add `hidden` attribute

---

#### P3-T4: Create JavaScript Main Entry Point
**Effort:** S
**File Target:** `js/main.js`
**Dependencies:** P0-T1
**Reference:** CLAUDE.md lines 1310-1324

**Description:**
Create main JavaScript file that initializes all modules.

**Implementation:**
Copy from CLAUDE.md lines 1310-1324.

```javascript
// Main entry point - imports and initializes all modules
import { initSmoothScroll } from './modules/scroll.js';
import { initModal } from './modules/modal.js';
import { initNavigation } from './modules/navigation.js';

// Initialize app when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  initSmoothScroll();
  initModal();
  initNavigation();

  console.log('Marina Portfolio initialized ✨');
});
```

**Acceptance Criteria:**
- [ ] File exists at `js/main.js`
- [ ] Imports three module functions
- [ ] DOMContentLoaded event listener
- [ ] Calls all init functions
- [ ] Console log for confirmation
- [ ] No syntax errors

**Validation (HITL):**
- Check browser console for "Marina Portfolio initialized" message
- Verify no import errors (modules not created yet, so errors expected)

---

#### P3-T5: Create Smooth Scroll Module
**Effort:** M
**File Target:** `js/modules/scroll.js`
**Dependencies:** P3-T4
**Reference:** CLAUDE.md lines 1326-1382

**Description:**
Implement smooth scrolling functionality for internal anchor links.

**Implementation:**
Copy from CLAUDE.md lines 1326-1382.

**Key Features:**
- Handles all internal links (href^="#")
- Accounts for sticky header offset
- Smooth scroll behavior
- Skips modal triggers

**Acceptance Criteria:**
- [ ] File exists at `js/modules/scroll.js`
- [ ] Exports `initSmoothScroll` function
- [ ] Handles internal anchor links
- [ ] Calculates header offset (80px)
- [ ] Uses `window.scrollTo` with smooth behavior
- [ ] No syntax errors

**Validation (HITL):**
- Click "Explora mi trabajo" button → should scroll to About section
- Click navigation links → should scroll to sections
- Verify smooth animation
- Check header offset is correct

---

#### P3-T6: Create Modal Control Module
**Effort:** L
**File Target:** `js/modules/modal.js`
**Dependencies:** P3-T4
**Reference:** CLAUDE.md lines 1384-1484

**Description:**
Implement modal open/close functionality with focus trap and accessibility.

**Implementation:**
Copy from CLAUDE.md lines 1384-1484.

**Key Features:**
- Open modal on "PROYECTOS" click
- Close on X button, ESC key, or overlay click
- Focus trap within modal
- Prevents body scroll when open
- Restores focus on close
- Category navigation

**Acceptance Criteria:**
- [ ] File exists at `js/modules/modal.js`
- [ ] Exports `initModal` function
- [ ] Opens modal on PROYECTOS click
- [ ] Closes on X button, ESC, or overlay
- [ ] Traps focus within modal
- [ ] Prevents body scroll
- [ ] Restores focus on close
- [ ] No syntax errors

**Validation (HITL):**
- Click "PROYECTOS" → modal should open
- Click X button → modal should close
- Press ESC → modal should close
- Click overlay → modal should close
- Tab through modal → focus stays trapped
- Verify body doesn't scroll when modal open
- Click "EDITORIAL" → should close modal and show gallery

---

#### P3-T7: Create Navigation Module
**Effort:** M
**File Target:** `js/modules/navigation.js`
**Dependencies:** P3-T4
**Reference:** CLAUDE.md lines 1486-1577

**Description:**
Implement navigation visibility on scroll and active section highlighting.

**Implementation:**
Copy from CLAUDE.md lines 1486-1577 (includes both navigation and back button functionality).

**Key Features:**
- Shows header after scrolling past hero (80% of height)
- Highlights active section in navigation
- Uses requestAnimationFrame for performance
- Back button hides gallery and shows modal

**Acceptance Criteria:**
- [ ] File exists at `js/modules/navigation.js`
- [ ] Exports `initNavigation` function
- [ ] Header shows after scrolling past hero
- [ ] Active section highlighted in nav
- [ ] Uses requestAnimationFrame throttling
- [ ] Back button functionality included
- [ ] No syntax errors

**Validation (HITL):**
- Scroll down from hero → header should appear
- Scroll to different sections → nav link should highlight
- Click back button in gallery → should return to modal
- Check browser performance (no jank)

---

### Phase 3 Review Checkpoint

**HITL Validation:**
1. ✅ Modal opens and closes correctly
2. ✅ Modal animations smooth
3. ✅ Focus trap works (Tab key navigation)
4. ✅ Smooth scroll works on all links
5. ✅ Navigation appears on scroll
6. ✅ Active section highlighting works
7. ✅ Gallery scrolls horizontally
8. ✅ Back button returns to modal
9. ✅ No JavaScript console errors

**Functional Tests:**
- Click "Explora mi trabajo" → smooth scroll to About
- Click "PROYECTOS" → modal opens
- In modal, click "EDITORIAL" → modal closes, gallery appears
- In gallery, click back arrow → modal reopens
- Press ESC in modal → modal closes
- Scroll page → header appears/disappears correctly
- Tab through modal → focus stays inside

**Approval Required:** Yes
**Next Phase:** Phase 4 (Polish & Optimization)

---

## Phase 4: Polish - Responsive, Accessibility & Performance

**Goal:** Finalize responsive design, accessibility, and optimize performance
**Duration:** ~2 hours
**Dependencies:** Phase 3 complete

### Tasks

#### P4-T1: Implement Mobile Responsive Adjustments
**Effort:** M
**File Target:** Multiple CSS files
**Dependencies:** All Phase 2 & 3 tasks

**Description:**
Review and add responsive adjustments for mobile (<768px) and tablet (768-1024px).

**Implementation:**
Add/verify media queries in:
- `css/layout/sections.css`
- `css/components/navigation.css`
- `css/components/modal.css`
- `css/components/cards.css`

**Key Adjustments:**
- Hero: Reduce font sizes, adjust padding
- About: Stack grid to single column, profile first
- Navigation: Reduce spacing, smaller font
- Modal: Full-screen on mobile, smaller menu items
- Gallery: Adjust card width for mobile (85vw)
- Contact: Smaller font sizes

**Acceptance Criteria:**
- [ ] All sections responsive at 320px, 768px, 1024px
- [ ] Text readable on small screens
- [ ] No horizontal overflow
- [ ] Touch targets ≥ 44px (buttons, links)
- [ ] Images scale appropriately
- [ ] No syntax errors

**Validation (HITL):**
- Test on mobile device or DevTools responsive mode
- Check breakpoints: 320px, 375px, 768px, 1024px, 1440px
- Verify no horizontal scroll
- Test touch interactions on mobile

---

#### P4-T2: Add Profile Image Circular Frame Styling
**Effort:** M
**File Target:** `css/layout/sections.css` (add to About section)
**Dependencies:** P2-T3

**Description:**
Style profile image to appear inside circular red brush stroke frame.

**Implementation:**

```css
/* Profile Image with Circular Frame */
.profile__image-wrapper {
  position: relative;
  width: 300px;
  height: 300px;
  margin: 0 auto var(--space-xl);
}

.profile__frame {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: contain;
  z-index: 2;
  pointer-events: none;
}

.profile__photo {
  position: absolute;
  inset: 15%;
  width: 70%;
  height: 70%;
  object-fit: cover;
  border-radius: 50%;
  z-index: 1;
}

@media (max-width: 768px) {
  .profile__image-wrapper {
    width: 250px;
    height: 250px;
  }
}
```

**Acceptance Criteria:**
- [ ] Profile photo appears inside red circular frame
- [ ] Frame and photo are properly layered (frame on top)
- [ ] Photo is circular (border-radius: 50%)
- [ ] Responsive sizing on mobile
- [ ] No syntax errors

**Validation (HITL):**
- Compare with design screenshot (Screenshot 2026-01-14 102350.png)
- Verify red circle frame overlays photo correctly
- Check photo is centered within frame

---

#### P4-T3: Add Accessibility Enhancements
**Effort:** M
**File Target:** `index.html`, multiple CSS files
**Dependencies:** All previous tasks

**Description:**
Audit and enhance accessibility features.

**Implementation:**

**HTML Enhancements:**
1. Verify all images have alt text (decorative: alt="", meaningful: descriptive text)
2. Ensure form elements have labels (if any added later)
3. Check heading hierarchy (only one h1, proper nesting)
4. Verify ARIA labels on buttons and links
5. Check keyboard focus order is logical

**CSS Enhancements:**
1. Ensure focus indicators visible on all interactive elements:
```css
/* Add to components/buttons.css */
.btn:focus-visible {
  outline: 3px solid var(--color-primary);
  outline-offset: 4px;
}

/* Add to components/navigation.css */
.nav__link:focus-visible {
  outline: 2px solid var(--color-text-inverse);
  outline-offset: 4px;
}
```

2. Verify reduced motion media query respects user preferences

**Acceptance Criteria:**
- [ ] All images have appropriate alt text
- [ ] Heading hierarchy is correct (h1 > h2 > h3)
- [ ] All interactive elements have visible focus indicators
- [ ] Skip link works (Tab to activate)
- [ ] ARIA labels present and descriptive
- [ ] Color contrast ≥ 4.5:1 (test with tool)
- [ ] Keyboard navigation works throughout site

**Validation (HITL):**
- Use keyboard only (Tab, Enter, ESC) to navigate entire site
- Test skip link (Tab once from page load)
- Run WAVE accessibility tool (https://wave.webaim.org/)
- Check color contrast with https://webaim.org/resources/contrastchecker/
- Test with screen reader (VoiceOver, NVDA, or JAWS)

---

#### P4-T4: Optimize Images
**Effort:** M
**File Target:** `images/*`
**Dependencies:** P0-T2

**Description:**
Optimize all images for web performance.

**Implementation:**

1. **Compress Images:**
   - Use tool like TinyPNG, ImageOptim, or Squoosh
   - Target: < 200KB per image
   - Maintain visual quality

2. **Create WebP Versions:**
   - Convert all JPG/PNG to WebP format
   - Keep originals as fallbacks

3. **Update HTML with Picture Element:**
```html
<picture>
  <source srcset="images/profile/fotomia.webp" type="image/webp">
  <img src="images/profile/fotomia.jpg" alt="Marina Dimitrova" class="profile__photo">
</picture>
```

4. **Add Lazy Loading:**
   - Already present: `loading="lazy"` on gallery images
   - Verify it's applied

**Acceptance Criteria:**
- [ ] All images optimized (< 200KB each)
- [ ] WebP versions created for key images
- [ ] Picture element used for hero/about backgrounds
- [ ] Lazy loading on gallery images
- [ ] Images still look high quality
- [ ] Total page weight < 3MB

**Validation (HITL):**
- Check file sizes in file explorer
- Run Lighthouse performance audit
- Verify images load quickly
- Check Network tab in DevTools for image sizes

---

#### P4-T5: Add Meta Tags and Favicon
**Effort:** S
**File Target:** `index.html`
**Dependencies:** P1-T6

**Description:**
Complete SEO meta tags and add favicon.

**Implementation:**

1. **Create Favicon:**
   - Create simple favicon (16x16, 32x32, 180x180)
   - Save as `favicon.ico` and `apple-touch-icon.png`

2. **Update Meta Tags:**
```html
<!-- Already in HTML, verify/update: -->
<meta name="description" content="Portfolio de Marina Dimitrova - Diseñadora gráfica y estudiante de Artes Digitales y Multimedia. Diseño editorial, branding, logos y fotografía.">
<meta name="keywords" content="diseño gráfico, portfolio, multimedia, artes digitales, diseñadora, Madrid, España">
<meta name="author" content="Marina Dimitrova">

<!-- Add Open Graph -->
<meta property="og:title" content="Marina Dimitrova | Portfolio">
<meta property="og:description" content="Diseño que conecta. Multimedia y Artes digitales.">
<meta property="og:type" content="website">
<meta property="og:image" content="https://yourdomain.com/images/profile/fotomia.jpg">
<meta property="og:url" content="https://yourdomain.com">

<!-- Add Twitter Card -->
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="Marina Dimitrova | Portfolio">
<meta name="twitter:description" content="Diseño que conecta. Multimedia y Artes digitales.">
<meta name="twitter:image" content="https://yourdomain.com/images/profile/fotomia.jpg">

<!-- Favicon -->
<link rel="icon" type="image/x-icon" href="/favicon.ico">
<link rel="apple-touch-icon" href="/apple-touch-icon.png">
```

**Acceptance Criteria:**
- [ ] Favicon appears in browser tab
- [ ] Meta description present (150-160 chars)
- [ ] Open Graph tags complete
- [ ] Twitter Card tags present
- [ ] Title tag descriptive and < 60 chars

**Validation (HITL):**
- Check favicon appears in browser tab
- Test Open Graph with https://www.opengraph.xyz/
- Verify meta description in search results preview

---

#### P4-T6: Performance Optimization
**Effort:** M
**File Target:** Multiple files
**Dependencies:** All previous tasks

**Description:**
Optimize CSS and JavaScript for performance.

**Implementation:**

1. **CSS Optimizations:**
   - Remove unused CSS (audit with DevTools Coverage)
   - Minimize CSS custom property reflows
   - Use `will-change` sparingly on animated elements
   - Add `contain` property where applicable

2. **JavaScript Optimizations:**
   - Verify ES6 modules load efficiently
   - Check for memory leaks in event listeners
   - Ensure throttling/debouncing where needed (already in scroll handler)

3. **HTML Optimizations:**
   - Add `defer` to script tag (already present)
   - Preconnect to Google Fonts (already present)
   - Consider adding `fetchpriority="high"` to hero background image

4. **Add Performance Hints:**
```html
<!-- Add to head -->
<link rel="preload" href="css/style.css" as="style">
<link rel="preload" href="images/backgrounds/fondo.png" as="image">
<link rel="dns-prefetch" href="https://fonts.googleapis.com">
```

**Acceptance Criteria:**
- [ ] Lighthouse Performance score ≥ 90
- [ ] First Contentful Paint < 1.5s
- [ ] Largest Contentful Paint < 2.5s
- [ ] Time to Interactive < 3.5s
- [ ] No layout shifts (CLS near 0)
- [ ] No console warnings or errors

**Validation (HITL):**
- Run Lighthouse audit (Performance, Accessibility, Best Practices, SEO)
- Check Core Web Vitals
- Test on 3G throttled connection
- Verify no console errors

---

#### P4-T7: Cross-Browser Testing
**Effort:** M
**File Target:** N/A (testing only)
**Dependencies:** All previous tasks

**Description:**
Test website across multiple browsers and devices.

**Implementation:**

**Test Matrix:**

| Browser | Desktop | Mobile | Tablet |
|---------|---------|--------|--------|
| Chrome | ✓ | ✓ | ✓ |
| Firefox | ✓ | ✓ | ✓ |
| Safari | ✓ | ✓ (iOS) | ✓ (iPadOS) |
| Edge | ✓ | - | - |

**Test Checklist per Browser:**
- [ ] All sections display correctly
- [ ] Navigation works (smooth scroll, highlighting)
- [ ] Modal opens/closes
- [ ] Gallery scrolls horizontally
- [ ] Buttons and links functional
- [ ] Hover states work (desktop)
- [ ] Touch interactions work (mobile)
- [ ] Fonts load correctly
- [ ] Images load and display
- [ ] No console errors

**Acceptance Criteria:**
- [ ] Works on Chrome (last 2 versions)
- [ ] Works on Firefox (last 2 versions)
- [ ] Works on Safari (last 2 versions)
- [ ] Works on Edge (last 2 versions)
- [ ] Works on iOS Safari (iOS 14+)
- [ ] Works on Chrome Mobile (Android 10+)
- [ ] No major visual or functional bugs

**Validation (HITL):**
- Test on real devices if possible
- Use BrowserStack or similar for cross-browser testing
- Document any browser-specific issues
- Fix critical bugs before approval

---

### Phase 4 Review Checkpoint

**HITL Validation:**
1. ✅ Responsive on all screen sizes (320px - 2560px)
2. ✅ Accessibility audit passed (WAVE, axe DevTools)
3. ✅ Keyboard navigation works perfectly
4. ✅ Images optimized (< 200KB each, total < 3MB)
5. ✅ Lighthouse score ≥ 90 (all categories)
6. ✅ Cross-browser tested (Chrome, Firefox, Safari, Edge)
7. ✅ Meta tags and favicon present
8. ✅ No console errors or warnings

**Performance Metrics:**
- First Contentful Paint: < 1.5s ✓
- Largest Contentful Paint: < 2.5s ✓
- Total Blocking Time: < 300ms ✓
- Cumulative Layout Shift: < 0.1 ✓

**Accessibility Checks:**
- WCAG 2.1 AA compliant ✓
- Keyboard navigable ✓
- Screen reader friendly ✓
- Color contrast ≥ 4.5:1 ✓

**Approval Required:** Yes
**Next Phase:** Phase 5 (Optional - Additional Galleries)

---

## Phase 5: Optional - Additional Galleries

**Goal:** Create galleries for Logos, Branding, and Fotografía
**Duration:** ~2 hours
**Dependencies:** Phase 4 complete
**Status:** OPTIONAL (for future enhancement)

### Tasks

#### P5-T1: Create Logos Gallery Section
**Effort:** M
**File Target:** `index.html`, `css/layout/sections.css`
**Dependencies:** P3-T3

**Description:**
Duplicate Editorial gallery structure for Logos category.

**Implementation:**
1. In HTML: Duplicate `#editorial` section, rename to `#logos`
2. Update title to "Logos"
3. Replace project cards with logo project placeholders
4. In CSS: Ensure `.gallery` styles apply to new section

**Acceptance Criteria:**
- [ ] Logos gallery section created
- [ ] Modal link connects to gallery
- [ ] Back button returns to modal
- [ ] Horizontal scroll works
- [ ] Matches Editorial gallery functionality

**Validation (HITL):**
- Click "LOGOS" in modal → gallery appears
- Verify horizontal scroll
- Click back arrow → returns to modal

---

#### P5-T2: Create Branding Gallery Section
**Effort:** M
**File Target:** `index.html`, `css/layout/sections.css`
**Dependencies:** P5-T1

**Description:**
Duplicate Editorial gallery structure for Branding y Publicidad category.

**Implementation:**
Similar to P5-T1, create `#branding` section.

**Acceptance Criteria:**
- [ ] Branding gallery section created
- [ ] Modal link connects to gallery
- [ ] Back button returns to modal
- [ ] Horizontal scroll works

**Validation (HITL):**
- Test functionality same as P5-T1

---

#### P5-T3: Create Fotografía Gallery Section
**Effort:** M
**File Target:** `index.html`, `css/layout/sections.css`
**Dependencies:** P5-T2

**Description:**
Duplicate Editorial gallery structure for Fotografía category.

**Implementation:**
Similar to P5-T1, create `#fotografia` section.

**Acceptance Criteria:**
- [ ] Fotografía gallery section created
- [ ] Modal link connects to gallery
- [ ] Back button returns to modal
- [ ] Horizontal scroll works

**Validation (HITL):**
- Test functionality same as P5-T1

---

#### P5-T4: Add Gallery Navigation in JavaScript
**Effort:** S
**File Target:** `js/modules/navigation.js`
**Dependencies:** P5-T1, P5-T2, P5-T3

**Description:**
Update back button functionality to handle all four galleries.

**Implementation:**
Update `initBackButtons()` function to work with all gallery sections (#logos, #branding, #editorial, #fotografia).

**Acceptance Criteria:**
- [ ] Back button works in all galleries
- [ ] Each gallery shows/hides correctly
- [ ] Modal reopens when clicking back

**Validation (HITL):**
- Test each gallery's back button
- Verify no JavaScript errors

---

### Phase 5 Review Checkpoint (Optional)

**HITL Validation:**
1. ✅ All four galleries functional
2. ✅ Modal navigation complete
3. ✅ Back buttons work in all galleries
4. ✅ No visual or functional bugs

**Approval Required:** Yes (if Phase 5 completed)

---

## Final Delivery Checklist

Before considering the project complete, verify ALL items:

### Functionality
- [ ] All navigation links work (HOME, PROYECTOS, CONTACTO)
- [ ] Smooth scroll implemented and working
- [ ] Modal opens and closes correctly
- [ ] Gallery horizontal scroll works
- [ ] Back buttons return to modal
- [ ] All links clickable (email, LinkedIn, phone)
- [ ] Keyboard navigation works throughout

### Visual
- [ ] Design matches all 5 screenshots
- [ ] Typography hierarchy clear and correct
- [ ] Color scheme consistent (#8B2F2F, #EDE5DD, etc.)
- [ ] Brush stroke decorations positioned correctly
- [ ] Responsive on mobile (320px), tablet (768px), desktop (1200px+)

### Technical
- [ ] HTML5 validates (https://validator.w3.org/)
- [ ] CSS validates (https://jigsaw.w3.org/css-validator/)
- [ ] No JavaScript console errors
- [ ] Lighthouse score ≥ 90 (all categories)
- [ ] Page load time < 3s
- [ ] Total page weight < 3MB

### Accessibility
- [ ] WCAG 2.1 AA compliant
- [ ] Keyboard navigable
- [ ] Screen reader friendly
- [ ] Color contrast ≥ 4.5:1
- [ ] All images have alt text
- [ ] Focus indicators visible

### Performance
- [ ] Images optimized (< 200KB each)
- [ ] WebP format used where applicable
- [ ] Lazy loading on gallery images
- [ ] CSS/JS minified (for production)
- [ ] No unused CSS/JS

### Browser Compatibility
- [ ] Works on Chrome (latest)
- [ ] Works on Firefox (latest)
- [ ] Works on Safari (latest)
- [ ] Works on Edge (latest)
- [ ] Works on iOS Safari
- [ ] Works on Chrome Mobile

### SEO
- [ ] Meta tags complete
- [ ] Open Graph tags present
- [ ] Favicon exists
- [ ] Title tag optimized
- [ ] Meta description 150-160 chars

### Code Quality
- [ ] BEM naming convention followed
- [ ] CSS organized (base, layout, components, utilities)
- [ ] JavaScript modular (ES6 modules)
- [ ] Code commented where necessary
- [ ] No code duplication

---

## Deployment (Post-Development)

Once all phases are approved, deploy to a hosting platform:

### Recommended Platforms
- **Netlify** (drag & drop, auto-deploy from Git)
- **Vercel** (optimized for static sites)
- **GitHub Pages** (free, simple)
- **Cloudflare Pages** (fast CDN)

### Deployment Steps
1. Create production build (minify CSS/JS if needed)
2. Test locally one final time
3. Push to Git repository (optional)
4. Deploy to chosen platform
5. Test live site
6. Configure custom domain (if applicable)
7. Set up analytics (Google Analytics, Plausible, etc.)

---

## Agent Execution Notes

### For Coding Agent:
1. **Execute tasks sequentially** within each phase
2. **Do not skip tasks** even if they seem optional
3. **Copy code exactly** from CLAUDE.md references (line numbers provided)
4. **Test after each task** (if possible, validate HTML/CSS)
5. **Stop at review checkpoints** and wait for HITL approval
6. **Document any blockers** or deviations from plan

### For HITL Reviewer:
1. **Review after each phase**, not individual tasks
2. **Use validation steps** provided in each checkpoint
3. **Compare visual output** with design screenshots
4. **Test functionality** thoroughly
5. **Check code quality** (formatting, comments, conventions)
6. **Approve or request changes** before next phase
7. **Document feedback clearly** for agent iteration

---

## Success Criteria Summary

**Phase 0:** Project structure created, assets organized
**Phase 1:** HTML structure valid, base CSS complete
**Phase 2:** All sections styled and responsive
**Phase 3:** JavaScript interactive, modal/gallery functional
**Phase 4:** Optimized, accessible, cross-browser compatible
**Phase 5 (Optional):** Additional galleries implemented

**Final Deliverable:** Production-ready static website matching all design specifications from CLAUDE.md.

---

**Document Version:** 1.0
**Last Updated:** January 14, 2026
**Status:** Ready for Agent Execution
**Estimated Total Time:** ~12-15 hours (Phases 0-4)
