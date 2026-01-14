# Marina Dimitrova Portfolio Website - Project Specification

## Project Overview

A static, single-page portfolio website for Marina Dimitrova, a young graphic designer and multimedia arts student. The website showcases her work in a clean, artistic style with Spanish language content.

**Designer:** Marina Dimitrova
**Tagline:** "Diseño que conecta. Multimedia y Artes digitales"
**Tech Stack:** HTML5, CSS3, Vanilla JavaScript (minimal)
**Language:** Spanish

---

## Design System

### Color Palette

**Primary Colors:**
- Beige/Cream Background: `#EDE5DD` (warm neutral base)
- Deep Red/Maroon: `#8B2F2F` / `#7A2828` (primary brand color)
- Bright Red Accent: `#D84545` / `#E63946` (for interactive elements)
- Black: `#1A1A1A` (for primary text)
- White: `#FFFFFF` (for contrast elements)

**Secondary Colors:**
- Dark Blue: `#1C3D5A` (for editorial illustrations)
- Gray tones: `#4A4A4A`, `#8A8A8A` (for secondary text)

### Typography

**Primary Font:** Serif display font (similar to Libre Caslon Display or Playfair Display)
- Used for: Headings, name, section titles
- Characteristics: Elegant, high contrast, editorial feel

**Secondary Font:** Serif body font (similar to EB Garamond or Lora)
- Used for: Body text, descriptions
- Characteristics: Readable, classical, refined

**Font Hierarchy:**
- H1 (Name): 72-96px, bold, letter-spacing: tight
- H2 (Section headers): 56-64px, bold
- H3 (Subsection titles): 32-40px, regular
- Body: 16-18px, regular, line-height: 1.6
- Buttons/CTAs: 18-20px, medium weight

### Design Elements

**Brush Stroke Graphics:**
- Red painted brush strokes (organic, hand-painted aesthetic)
- Used as decorative elements and frames
- Available images:
  - `pinceladas rojas.png` - Diagonal brush strokes
  - `circulo rojo.png` - Circular brush stroke frame
  - `head.png` - Horizontal brush stroke
  - `fondo.png` - Full background brush composition

**Visual Style:**
- Minimalist with artistic accents
- High contrast between text and background
- Generous white space
- Organic shapes (circles, brush strokes) contrasting with clean typography
- Photography: Mix of color and black & white

---

## Site Structure & Screens

### Screen 1: Hero/Landing Page
**File:** `Screenshot 2026-01-14 102323.png`

**Layout:**
- Full viewport height
- Centered content
- Background: Cream with red brush stroke decorations

**Content:**
```
MARINA
DIMITROVA

Diseño que conecta.
Multimedia y Artes digitales

[Explora mi trabajo] (Button)
```

**Elements:**
- Large serif typography for name (centered)
- Subtitle in smaller serif font
- Rounded border button (red outline)
- Decorative brush strokes in corners and edges
- Smooth scroll down interaction on button click

**Implementation Notes:**
- Background: Use `fondo.png` or recreate with `pinceladas rojas.png` and `circulo rojo.png`
- Button: Rounded corners (30-40px), red border (2-3px), transparent background
- Hover state: Fill background with red, white text

---

### Screen 2: About Me (Sobre Mí)
**File:** `Screenshot 2026-01-14 102350.png`

**Layout:**
- Horizontal split: 60% text (left), 40% image (right)
- Fixed navigation at top
- Beige background

**Navigation Bar:**
```
HOME    PROYECTOS    CONTACTO
```
- Right-aligned
- White text on dark red background
- Padding: 15px 40px
- Font size: 18-20px

**Content (Left Column):**
```
SOBRE MÍ

Soy Marina Dimitrova, diseñadora gráfica y estudiante de Artes Digitales y Multimedia. Mi trabajo nace del equilibrio entre lo conceptual y lo emocional, entre la narrativa visual y la estética simbólica.

Diseño para contar historias. Cada proyecto es una extensión de lo que observo, lo que siento y lo que quiero provocar. Me inspiran los silencios que hablan, los gestos que no necesitan palabras y los símbolos que perduran. Trabajo con sensibilidad editorial, explorando el poder de lo visual para conectar con las personas. Me interesa lo imperfecto, lo que deja huella, lo que construye identidad desde lo sutil.

Este portfolio es un mapa de mi universo creativo: ahí donde las formas dialogan con las ideas y cada trazo lleva intención.
```

**Image Section (Right Side):**
- Circular framed portrait (red brush stroke circle)
- Image: `fotomia.jpg` inside `circulo rojo.png` frame
- Below image: Two columns

**Software Column:**
```
SOFTWARE
[Ai icon] Adobe Illustrator
[Ps icon] Adobe Photoshop
[Id icon] Adobe InDesign
[Figma icon] Figma
```

**Languages Column:**
```
LANGUAGES
Español B2
Ingles B2
Búlgaro C1
```

**Implementation Notes:**
- Use CSS Grid or Flexbox for layout
- Image masking: Use `circulo rojo.png` as a CSS mask or overlay
- Software icons: `ai.png`, `ps.png`, `id.png`, `figma.png` (located in Materials/IMAGES)
- Icons size: 60-70px with labels below

---

### Screen 3: Projects Menu (Proyectos)
**File:** `Screenshot 2026-01-14 102410.png`

**Layout:**
- Full-screen overlay/modal style
- Centered vertical menu
- Dark red horizontal bars with white text

**Content:**
```
LOGOS
[spacing]
BRANDING Y PUBLICIDAD
[spacing]
EDITORIAL
[spacing]
FOTOGRAFÍA
```

**Elements:**
- Close button (X) in top-right corner (circular, dark red)
- Each category: Full-width dark red bar with white serif text
- Spacing between bars: ~80-100px
- Hover effect: Slight scale or brightness change

**Implementation Notes:**
- Modal overlay with `position: fixed`
- Background: Semi-transparent beige or solid beige
- Animated entrance (fade in + slide up)
- Categories are clickable links to project sections
- Close button returns to previous view

---

### Screen 4: Editorial Projects Gallery
**File:** `Screenshot 2026-01-14 102433.png`

**Layout:**
- Top navigation bar (same as Screen 2)
- Section title: "EDITORIAL" (large, left-aligned)
- Horizontal scrolling gallery of project cards
- Back arrow button (top-right, red circle)

**Project Cards:**
- Rounded square cards with thick red borders
- Image preview inside card
- Title below image in serif font
- Cards displayed: "REVISTA DE ARTE", "REVISTA DE FILOFOFÍA", "CARTEL DE SERIE"

**Images for Gallery:**
- `IMG1.jpg` - Black and white portrait (Revista de Arte)
- `IMG2.jpg` - Illustration with rock and red figure (Revista de Filofofía)
- `IMG3.jpg` - Blue illustration with two figures (Cartel de Serie)

**Implementation Notes:**
- Horizontal scroll container: `overflow-x: auto`, `display: flex`
- Card dimensions: 350-400px square
- Border radius: 30-40px
- Border: 8-10px solid dark red
- Hover: Slight lift effect (box-shadow + transform)
- Back button: Returns to projects menu
- Each card is clickable for detailed view (optional phase 2)

---

### Screen 5: Contact Page (Contacto)
**File:** `Screenshot 2026-01-14 102547.png`

**Layout:**
- Top navigation bar (same as Screen 2)
- Centered content
- Full brush stroke background decoration

**Content:**
```
CONTACTAME

Email: Aniramad05@gmail.com

LinkedIN: www.linkedin.com/in/marina-dimitrova-328b88291

Number: (+34) 656 694 180
```

**Elements:**
- Large serif heading
- Contact details in clean, readable serif font
- Background: Full page brush stroke decoration (use `fondo.png` or `pinceladas rojas.png`)
- Links should be clickable (mailto:, https://, tel:)

**Implementation Notes:**
- Text alignment: Center
- Font size: 20-24px for contact details
- Spacing: 40-50px between lines
- Email: `<a href="mailto:Aniramad05@gmail.com">`
- LinkedIn: `<a href="https://www.linkedin.com/in/marina-dimitrova-328b88291" target="_blank">`
- Phone: `<a href="tel:+34656694180">`
- Hover states: Underline or color change

---

## Navigation Flow

```
Landing (Hero)
    ↓ (Scroll or "Explora mi trabajo")
    ↓
About Me (Sobre Mí) ← → Contact
    ↓
Projects Menu (Modal)
    ↓
    ├─→ Logos (Gallery)
    ├─→ Branding (Gallery)
    ├─→ Editorial (Gallery)
    └─→ Fotografía (Gallery)
```

**Top Navigation (Persistent):**
- HOME → Scrolls to About Me section
- PROYECTOS → Opens Projects Menu modal
- CONTACTO → Scrolls to Contact section

---

## Technical Requirements

### HTML/CSS Architecture & Best Practices

**Methodology:** BEM (Block Element Modifier) naming convention
**Layout Strategy:** Mobile-first, CSS Grid + Flexbox hybrid
**CSS Organization:** Component-based modular architecture

### File Structure

```
marina-portfolio/
├─ index.html
├─ css/
│  ├─ base/
│  │  ├─ reset.css           # Modern CSS reset
│  │  ├─ variables.css       # CSS Custom Properties (design tokens)
│  │  └─ typography.css      # Font imports and typographic styles
│  ├─ layout/
│  │  ├─ grid.css            # Grid system and container
│  │  └─ sections.css        # Section-specific layouts
│  ├─ components/
│  │  ├─ navigation.css      # Header navigation bar
│  │  ├─ buttons.css         # Button styles and states
│  │  ├─ cards.css           # Project card components
│  │  └─ modal.css           # Modal/overlay components
│  ├─ utilities/
│  │  └─ helpers.css         # Utility classes
│  └─ style.css              # Main import file
├─ js/
│  ├─ modules/
│  │  ├─ scroll.js           # Smooth scroll functionality
│  │  ├─ modal.js            # Modal control
│  │  └─ navigation.js       # Nav highlighting
│  └─ main.js                # Main entry point
└─ images/
   ├─ backgrounds/
   │  ├─ fondo.png
   │  ├─ pinceladas-rojas.png
   │  └─ circulo-rojo.png
   ├─ profile/
   │  └─ fotomia.jpg
   ├─ projects/
   │  ├─ IMG1.jpg
   │  ├─ IMG2.jpg
   │  └─ IMG3.jpg
   └─ icons/
      ├─ ai.png
      ├─ ps.png
      ├─ id.png
      └─ figma.png
```

### HTML Structure with BEM

**Complete HTML Skeleton:**

```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Marina Dimitrova | Diseñadora Gráfica y Multimedia</title>

  <!-- Preconnect to Google Fonts -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>

  <!-- CSS -->
  <link rel="stylesheet" href="css/style.css">
</head>
<body>
  <!-- Skip to main content for accessibility -->
  <a href="#main-content" class="skip-link">Saltar al contenido principal</a>

  <!-- SECTION 1: HERO -->
  <section id="hero" class="hero" aria-labelledby="hero-title">
    <div class="hero__background">
      <img src="images/backgrounds/fondo.png" alt="" class="hero__bg-image" aria-hidden="true">
    </div>

    <div class="hero__content">
      <h1 id="hero-title" class="hero__title">
        Marina<br>Dimitrova
      </h1>
      <p class="hero__subtitle">
        Diseño que conecta.<br>
        Multimedia y Artes digitales
      </p>
      <a href="#about" class="btn btn--primary hero__cta" aria-label="Explorar mi trabajo">
        Explora mi trabajo
      </a>
    </div>
  </section>

  <!-- NAVIGATION (appears after hero) -->
  <header class="header" id="header">
    <nav class="nav" aria-label="Navegación principal">
      <ul class="nav__list">
        <li class="nav__item">
          <a href="#about" class="nav__link" data-section="about">Home</a>
        </li>
        <li class="nav__item">
          <a href="#projects-modal" class="nav__link" data-modal="projects">Proyectos</a>
        </li>
        <li class="nav__item">
          <a href="#contact" class="nav__link" data-section="contact">Contacto</a>
        </li>
      </ul>
    </nav>
  </header>

  <!-- MAIN CONTENT -->
  <main id="main-content">

    <!-- SECTION 2: ABOUT ME -->
    <section id="about" class="about" aria-labelledby="about-title">
      <div class="container">
        <div class="about__grid">

          <!-- Left Column: Text Content -->
          <div class="about__content">
            <h2 id="about-title" class="about__title">Sobre Mí</h2>

            <div class="about__text">
              <p>Soy Marina Dimitrova, diseñadora gráfica y estudiante de Artes Digitales y Multimedia. Mi trabajo nace del equilibrio entre lo conceptual y lo emocional, entre la narrativa visual y la estética simbólica.</p>

              <p>Diseño para contar historias. Cada proyecto es una extensión de lo que observo, lo que siento y lo que quiero provocar. Me inspiran los silencios que hablan, los gestos que no necesitan palabras y los símbolos que perduran. Trabajo con sensibilidad editorial, explorando el poder de lo visual para conectar con las personas. Me interesa lo imperfecto, lo que deja huella, lo que construye identidad desde lo sutil.</p>

              <p>Este portfolio es un mapa de mi universo creativo: ahí donde las formas dialogan con las ideas y cada trazo lleva intención.</p>
            </div>
          </div>

          <!-- Right Column: Profile & Skills -->
          <aside class="about__sidebar">
            <div class="profile">
              <div class="profile__image-wrapper">
                <img src="images/backgrounds/circulo-rojo.png" alt="" class="profile__frame" aria-hidden="true">
                <img src="images/profile/fotomia.jpg" alt="Marina Dimitrova" class="profile__photo">
              </div>

              <div class="skills">
                <!-- Software Skills -->
                <div class="skills__group">
                  <h3 class="skills__title">Software</h3>
                  <ul class="skills__list">
                    <li class="skills__item">
                      <img src="images/icons/ai.png" alt="" class="skills__icon" aria-hidden="true">
                      <span>Adobe Illustrator</span>
                    </li>
                    <li class="skills__item">
                      <img src="images/icons/ps.png" alt="" class="skills__icon" aria-hidden="true">
                      <span>Adobe Photoshop</span>
                    </li>
                    <li class="skills__item">
                      <img src="images/icons/id.png" alt="" class="skills__icon" aria-hidden="true">
                      <span>Adobe InDesign</span>
                    </li>
                    <li class="skills__item">
                      <img src="images/icons/figma.png" alt="" class="skills__icon" aria-hidden="true">
                      <span>Figma</span>
                    </li>
                  </ul>
                </div>

                <!-- Language Skills -->
                <div class="skills__group">
                  <h3 class="skills__title">Languages</h3>
                  <ul class="skills__list skills__list--text">
                    <li class="skills__item">Español B2</li>
                    <li class="skills__item">Ingles B2</li>
                    <li class="skills__item">Búlgaro C1</li>
                  </ul>
                </div>
              </div>
            </div>
          </aside>

        </div>
      </div>
    </section>

    <!-- SECTION 3: EDITORIAL GALLERY (hidden by default, shown when category selected) -->
    <section id="editorial" class="gallery gallery--editorial" aria-labelledby="editorial-title" hidden>
      <div class="container container--wide">
        <div class="gallery__header">
          <h2 id="editorial-title" class="gallery__title">Editorial</h2>
          <button class="btn-back" aria-label="Volver al menú de proyectos" data-back="projects">
            <svg aria-hidden="true" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M15 18L9 12L15 6" stroke="currentColor" stroke-width="2"/>
            </svg>
          </button>
        </div>

        <div class="gallery__scroll">
          <div class="gallery__grid">

            <article class="card">
              <div class="card__image-wrapper">
                <img src="images/projects/IMG1.jpg" alt="Revista de Arte" class="card__image" loading="lazy">
              </div>
              <h3 class="card__title">Revista de Arte</h3>
            </article>

            <article class="card">
              <div class="card__image-wrapper">
                <img src="images/projects/IMG2.jpg" alt="Revista de Filofofía" class="card__image" loading="lazy">
              </div>
              <h3 class="card__title">Revista de Filofofía</h3>
            </article>

            <article class="card">
              <div class="card__image-wrapper">
                <img src="images/projects/IMG3.jpg" alt="Cartel de Serie" class="card__image" loading="lazy">
              </div>
              <h3 class="card__title">Cartel de Serie</h3>
            </article>

          </div>
        </div>
      </div>
    </section>

    <!-- SECTION 4: CONTACT -->
    <section id="contact" class="contact" aria-labelledby="contact-title">
      <div class="contact__background">
        <img src="images/backgrounds/fondo.png" alt="" class="contact__bg-image" aria-hidden="true">
      </div>

      <div class="container">
        <div class="contact__content">
          <h2 id="contact-title" class="contact__title">Contactame</h2>

          <address class="contact__info">
            <div class="contact__item">
              <span class="contact__label">Email:</span>
              <a href="mailto:Aniramad05@gmail.com" class="contact__link">
                Aniramad05@gmail.com
              </a>
            </div>

            <div class="contact__item">
              <span class="contact__label">LinkedIn:</span>
              <a href="https://www.linkedin.com/in/marina-dimitrova-328b88291"
                 class="contact__link"
                 target="_blank"
                 rel="noopener noreferrer">
                www.linkedin.com/in/marina-dimitrova-328b88291
              </a>
            </div>

            <div class="contact__item">
              <span class="contact__label">Number:</span>
              <a href="tel:+34656694180" class="contact__link">
                (+34) 656 694 180
              </a>
            </div>
          </address>
        </div>
      </div>
    </section>

  </main>

  <!-- MODAL: PROJECTS MENU -->
  <div id="projects-modal" class="modal" role="dialog" aria-modal="true" aria-labelledby="modal-title" hidden>
    <div class="modal__overlay" data-close-modal></div>

    <div class="modal__content">
      <button class="modal__close" aria-label="Cerrar menú de proyectos" data-close-modal>
        <svg aria-hidden="true" width="32" height="32" viewBox="0 0 32 32">
          <path d="M24 8L8 24M8 8L24 24" stroke="currentColor" stroke-width="2"/>
        </svg>
      </button>

      <nav class="modal__nav" aria-label="Categorías de proyectos">
        <h2 id="modal-title" class="visually-hidden">Proyectos</h2>
        <ul class="modal__menu">
          <li class="modal__menu-item">
            <a href="#logos" class="modal__menu-link" data-category="logos">Logos</a>
          </li>
          <li class="modal__menu-item">
            <a href="#branding" class="modal__menu-link" data-category="branding">Branding y Publicidad</a>
          </li>
          <li class="modal__menu-item">
            <a href="#editorial" class="modal__menu-link" data-category="editorial">Editorial</a>
          </li>
          <li class="modal__menu-item">
            <a href="#fotografia" class="modal__menu-link" data-category="fotografia">Fotografía</a>
          </li>
        </ul>
      </nav>
    </div>
  </div>

  <!-- JavaScript -->
  <script src="js/main.js" defer></script>
</body>
</html>
```

### CSS Custom Properties (Design Tokens)

**File: `css/base/variables.css`**

```css
:root {
  /* Colors */
  --color-primary: #8B2F2F;
  --color-primary-dark: #7A2828;
  --color-accent: #E63946;
  --color-accent-hover: #D84545;

  --color-bg-cream: #EDE5DD;
  --color-bg-white: #FFFFFF;

  --color-text-primary: #1A1A1A;
  --color-text-secondary: #4A4A4A;
  --color-text-light: #8A8A8A;
  --color-text-inverse: #FFFFFF;

  /* Typography */
  --font-heading: 'Playfair Display', serif;
  --font-body: 'Lora', serif;

  --font-size-h1: clamp(48px, 8vw, 96px);
  --font-size-h2: clamp(40px, 6vw, 64px);
  --font-size-h3: clamp(28px, 4vw, 40px);
  --font-size-body: clamp(16px, 1.125vw, 18px);
  --font-size-small: clamp(14px, 1vw, 16px);

  --font-weight-regular: 400;
  --font-weight-medium: 500;
  --font-weight-bold: 700;

  --line-height-tight: 1.2;
  --line-height-normal: 1.5;
  --line-height-relaxed: 1.6;

  /* Spacing (8px base unit) */
  --space-xs: 8px;
  --space-sm: 16px;
  --space-md: 24px;
  --space-lg: 32px;
  --space-xl: 40px;
  --space-2xl: 48px;
  --space-3xl: 64px;
  --space-4xl: 80px;
  --space-5xl: 120px;

  /* Layout */
  --container-max-width: 1200px;
  --container-padding: var(--space-lg);
  --section-padding: var(--space-4xl);

  /* Border Radius */
  --radius-sm: 8px;
  --radius-md: 12px;
  --radius-lg: 30px;
  --radius-xl: 40px;
  --radius-full: 9999px;

  /* Shadows */
  --shadow-sm: 0 2px 8px rgba(0, 0, 0, 0.08);
  --shadow-md: 0 4px 16px rgba(0, 0, 0, 0.12);
  --shadow-lg: 0 10px 30px rgba(0, 0, 0, 0.15);
  --shadow-xl: 0 20px 60px rgba(0, 0, 0, 0.3);

  /* Transitions */
  --transition-fast: 150ms ease;
  --transition-base: 300ms ease;
  --transition-slow: 500ms ease;

  /* Z-index scale */
  --z-base: 1;
  --z-dropdown: 100;
  --z-sticky: 200;
  --z-fixed: 300;
  --z-modal-backdrop: 400;
  --z-modal: 500;
  --z-tooltip: 600;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  :root {
    --section-padding: var(--space-2xl);
    --container-padding: var(--space-md);
  }
}
```

### CSS Layout Patterns

**1. Hero Section - CSS Grid with Centered Content**

**File: `css/layout/sections.css`**

```css
.hero {
  position: relative;
  min-height: 100vh;
  display: grid;
  place-items: center;
  overflow: hidden;
  background-color: var(--color-bg-cream);
}

.hero__background {
  position: absolute;
  inset: 0;
  z-index: var(--z-base);
  pointer-events: none;
}

.hero__bg-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0.9;
}

.hero__content {
  position: relative;
  z-index: calc(var(--z-base) + 1);
  text-align: center;
  padding: var(--space-lg);
  max-width: 800px;
}

.hero__title {
  font-family: var(--font-heading);
  font-size: var(--font-size-h1);
  font-weight: var(--font-weight-bold);
  line-height: var(--line-height-tight);
  color: var(--color-text-primary);
  margin-bottom: var(--space-lg);
  letter-spacing: -0.02em;
}

.hero__subtitle {
  font-family: var(--font-body);
  font-size: var(--font-size-h3);
  font-weight: var(--font-weight-regular);
  line-height: var(--line-height-normal);
  color: var(--color-text-secondary);
  margin-bottom: var(--space-2xl);
}
```

**2. About Section - 60/40 Grid Split**

```css
.about {
  padding: var(--section-padding) 0;
  background-color: var(--color-bg-cream);
}

.about__grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space-4xl);
  align-items: start;
}

/* 60/40 split on larger screens */
@media (min-width: 1024px) {
  .about__grid {
    grid-template-columns: 60fr 40fr;
  }
}

/* Stack on mobile */
@media (max-width: 768px) {
  .about__grid {
    grid-template-columns: 1fr;
    gap: var(--space-2xl);
  }

  .about__sidebar {
    order: -1; /* Show profile first on mobile */
  }
}

.about__title {
  font-family: var(--font-heading);
  font-size: var(--font-size-h2);
  font-weight: var(--font-weight-bold);
  margin-bottom: var(--space-xl);
  color: var(--color-text-primary);
}

.about__text {
  font-family: var(--font-body);
  font-size: var(--font-size-body);
  line-height: var(--line-height-relaxed);
  color: var(--color-text-secondary);
}

.about__text p {
  margin-bottom: var(--space-md);
}

.about__text p:last-child {
  margin-bottom: 0;
}
```

**3. Skills Section - Flexbox for Icons**

```css
.skills {
  display: flex;
  flex-direction: column;
  gap: var(--space-2xl);
  margin-top: var(--space-xl);
}

.skills__group {
  /* Each skill group */
}

.skills__title {
  font-family: var(--font-heading);
  font-size: var(--font-size-h3);
  font-weight: var(--font-weight-bold);
  margin-bottom: var(--space-md);
  text-align: center;
  color: var(--color-text-primary);
}

.skills__list {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--space-md);
  list-style: none;
  padding: 0;
  margin: 0;
}

.skills__item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-xs);
  text-align: center;
}

.skills__icon {
  width: 64px;
  height: 64px;
  object-fit: contain;
}

.skills__list--text .skills__item {
  font-family: var(--font-body);
  font-size: var(--font-size-body);
  color: var(--color-text-secondary);
}
```

**4. Gallery - Horizontal Scroll with Flexbox**

```css
.gallery {
  padding: var(--section-padding) 0;
  background-color: var(--color-bg-cream);
}

.gallery__header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: var(--space-3xl);
}

.gallery__title {
  font-family: var(--font-heading);
  font-size: var(--font-size-h2);
  font-weight: var(--font-weight-bold);
  color: var(--color-text-primary);
}

.gallery__scroll {
  overflow-x: auto;
  overflow-y: hidden;
  -webkit-overflow-scrolling: touch;
  scroll-behavior: smooth;

  /* Hide scrollbar but keep functionality */
  scrollbar-width: thin;
  scrollbar-color: var(--color-primary) transparent;
}

.gallery__scroll::-webkit-scrollbar {
  height: 8px;
}

.gallery__scroll::-webkit-scrollbar-track {
  background: transparent;
}

.gallery__scroll::-webkit-scrollbar-thumb {
  background: var(--color-primary);
  border-radius: var(--radius-full);
}

.gallery__grid {
  display: flex;
  gap: var(--space-xl);
  padding-bottom: var(--space-md);

  /* Optional: Snap scrolling */
  scroll-snap-type: x mandatory;
}

.card {
  flex: 0 0 auto;
  width: min(380px, 85vw);
  scroll-snap-align: start;
}
```

**5. Modal - Fixed Overlay with Grid Centering**

```css
.modal {
  position: fixed;
  inset: 0;
  z-index: var(--z-modal);
  display: grid;
  place-items: center;
  padding: var(--space-lg);

  /* Animation */
  opacity: 0;
  visibility: hidden;
  transition: opacity var(--transition-base),
              visibility var(--transition-base);
}

.modal[hidden] {
  display: none;
}

.modal:not([hidden]) {
  opacity: 1;
  visibility: visible;
}

.modal__overlay {
  position: absolute;
  inset: 0;
  background-color: rgba(237, 229, 221, 0.95);
  z-index: var(--z-modal-backdrop);
  cursor: pointer;
}

.modal__content {
  position: relative;
  z-index: var(--z-modal);
  width: 100%;
  max-width: 900px;

  /* Animation */
  transform: translateY(20px);
  transition: transform var(--transition-base);
}

.modal:not([hidden]) .modal__content {
  transform: translateY(0);
}

.modal__close {
  position: absolute;
  top: var(--space-md);
  right: var(--space-md);
  width: 48px;
  height: 48px;
  display: grid;
  place-items: center;
  background-color: var(--color-primary);
  border: none;
  border-radius: 50%;
  color: var(--color-text-inverse);
  cursor: pointer;
  transition: background-color var(--transition-base);
}

.modal__close:hover,
.modal__close:focus {
  background-color: var(--color-primary-dark);
}

.modal__menu {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: var(--space-4xl);
}

.modal__menu-item {
  /* Decorated bar background */
  background-color: var(--color-primary);
  border-radius: var(--radius-sm);
  transition: transform var(--transition-base);
}

.modal__menu-item:hover {
  transform: scale(1.02);
}

.modal__menu-link {
  display: block;
  padding: var(--space-lg) var(--space-xl);
  font-family: var(--font-heading);
  font-size: var(--font-size-h3);
  font-weight: var(--font-weight-bold);
  color: var(--color-text-inverse);
  text-decoration: none;
  text-align: center;
  transition: letter-spacing var(--transition-base);
}

.modal__menu-link:hover {
  letter-spacing: 0.05em;
}
```

### Component Patterns

**File: `css/components/buttons.css`**

```css
.btn {
  display: inline-block;
  padding: var(--space-md) var(--space-2xl);
  font-family: var(--font-body);
  font-size: var(--font-size-body);
  font-weight: var(--font-weight-medium);
  text-decoration: none;
  text-align: center;
  border: 2px solid var(--color-primary);
  border-radius: var(--radius-xl);
  background-color: transparent;
  color: var(--color-primary);
  cursor: pointer;
  transition: background-color var(--transition-base),
              color var(--transition-base),
              transform var(--transition-fast);

  /* Accessibility */
  -webkit-tap-highlight-color: transparent;
}

.btn:hover,
.btn:focus {
  background-color: var(--color-primary);
  color: var(--color-text-inverse);
  transform: translateY(-2px);
}

.btn:active {
  transform: translateY(0);
}

.btn--primary {
  /* Default style already applied */
}

.btn-back {
  width: 56px;
  height: 56px;
  display: grid;
  place-items: center;
  background-color: var(--color-primary);
  border: none;
  border-radius: 50%;
  color: var(--color-text-inverse);
  cursor: pointer;
  transition: background-color var(--transition-base),
              transform var(--transition-fast);
}

.btn-back:hover,
.btn-back:focus {
  background-color: var(--color-primary-dark);
  transform: scale(1.1);
}
```

**File: `css/components/cards.css`**

```css
.card {
  background-color: var(--color-bg-white);
  border: 8px solid var(--color-primary);
  border-radius: var(--radius-xl);
  overflow: hidden;
  transition: transform var(--transition-base),
              box-shadow var(--transition-base);
}

.card:hover {
  transform: translateY(-8px);
  box-shadow: var(--shadow-lg);
}

.card__image-wrapper {
  position: relative;
  width: 100%;
  aspect-ratio: 1 / 1;
  overflow: hidden;
  background-color: var(--color-bg-cream);
}

.card__image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform var(--transition-slow);
}

.card:hover .card__image {
  transform: scale(1.05);
}

.card__title {
  padding: var(--space-lg);
  font-family: var(--font-heading);
  font-size: var(--font-size-h3);
  font-weight: var(--font-weight-bold);
  color: var(--color-text-primary);
  text-align: center;
}
```

**File: `css/components/navigation.css`**

```css
.header {
  position: sticky;
  top: 0;
  z-index: var(--z-sticky);
  background-color: var(--color-primary);
  box-shadow: var(--shadow-sm);

  /* Initially hidden, shown after scrolling past hero */
  transform: translateY(-100%);
  transition: transform var(--transition-base);
}

.header--visible {
  transform: translateY(0);
}

.nav {
  padding: var(--space-md) var(--container-padding);
}

.nav__list {
  display: flex;
  justify-content: flex-end;
  gap: var(--space-2xl);
  list-style: none;
  padding: 0;
  margin: 0;
}

.nav__link {
  font-family: var(--font-body);
  font-size: var(--font-size-body);
  font-weight: var(--font-weight-medium);
  color: var(--color-text-inverse);
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  padding: var(--space-xs) var(--space-sm);
  position: relative;
  transition: opacity var(--transition-fast);
}

.nav__link::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%) scaleX(0);
  width: 80%;
  height: 2px;
  background-color: var(--color-text-inverse);
  transition: transform var(--transition-base);
}

.nav__link:hover::after,
.nav__link--active::after {
  transform: translateX(-50%) scaleX(1);
}

.nav__link:hover {
  opacity: 0.8;
}

/* Mobile Navigation */
@media (max-width: 768px) {
  .nav__list {
    gap: var(--space-lg);
    font-size: var(--font-size-small);
  }
}
```

### Utility Classes

**File: `css/utilities/helpers.css`**

```css
/* Containers */
.container {
  width: 100%;
  max-width: var(--container-max-width);
  margin-inline: auto;
  padding-inline: var(--container-padding);
}

.container--wide {
  max-width: 1400px;
}

/* Accessibility */
.visually-hidden {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.skip-link {
  position: absolute;
  top: 0;
  left: 0;
  padding: var(--space-md) var(--space-lg);
  background-color: var(--color-primary);
  color: var(--color-text-inverse);
  text-decoration: none;
  transform: translateY(-100%);
  transition: transform var(--transition-base);
  z-index: 9999;
}

.skip-link:focus {
  transform: translateY(0);
}

/* Text utilities */
.text-center {
  text-align: center;
}

/* Display utilities */
[hidden] {
  display: none !important;
}

/* Reduce motion for accessibility */
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```

### Semantic HTML Best Practices Summary

1. **BEM Naming:** `block__element--modifier` for clarity and maintainability
2. **Semantic HTML5:** Proper use of `<section>`, `<article>`, `<nav>`, `<aside>`, `<address>`
3. **Accessibility:** ARIA labels, roles, keyboard navigation, skip links
4. **SEO:** Proper heading hierarchy, meta tags, semantic structure
5. **Performance:** Lazy loading, optimized images, defer scripts
6. **Responsive:** Mobile-first with fluid typography and spacing
7. **Maintainability:** Modular CSS, design tokens, component-based architecture

### CSS Requirements

**Responsive Design:**
- Mobile-first approach
- Breakpoints:
  - Mobile: < 768px (single column, stacked layout)
  - Tablet: 768px - 1024px (adjusted spacing)
  - Desktop: > 1024px (full layout as designed)

**Layout Techniques:**
- CSS Grid for page sections
- Flexbox for navigation and card layouts
- CSS Custom Properties for colors and spacing

**Animations:**
- Smooth scroll behavior
- Fade-in animations for sections (on scroll)
- Hover transitions (0.3s ease)
- Modal open/close animations

**Performance:**
- Optimized images (WebP with fallbacks)
- Lazy loading for gallery images
- Minimal CSS (no unused styles)

---

## Git Workflow & Development Process

This project follows a **feature-branch workflow** using GitHub for version control and HITL (Human-in-the-Loop) code review. Tasks from [DEVELOPMENT-PLAN.md](DEVELOPMENT-PLAN.md) are implemented iteratively with PR-based reviews.

### Workflow Overview

```
┌─────────────────────────────────────────────────────────────┐
│ ONE-TIME SETUP (P0-T0)                                      │
│ - Initialize git repository                                 │
│ - Create GitHub repository                                  │
│ - Configure branch protection                               │
│ - Create initial commit                                     │
└─────────────────────────────────────────────────────────────┘
                          ↓
┌─────────────────────────────────────────────────────────────┐
│ PER-TASK WORKFLOW (P0-T1 through P5-T4)                     │
│                                                              │
│  1. Pull latest main                                        │
│  2. Create feature branch                                   │
│  3. Implement task                                          │
│  4. Test & validate                                         │
│  5. Commit changes                                          │
│  6. Push branch                                             │
│  7. Create Pull Request (PR)                                │
│  8. HITL Review                                             │
│     ├─ Approved → Merge to main → Continue to next task    │
│     └─ Changes Requested → Fix issues → Update PR          │
│                                                              │
└─────────────────────────────────────────────────────────────┘
```

---

### Branch Naming Convention

**Format:** `P{phase}-T{task}-{short-description}`

**Examples:**
- `P0-T1-create-folder-structure`
- `P1-T2-implement-css-reset`
- `P2-T4-hero-section-styling`
- `P3-T5-modal-javascript`

**Rules:**
- Use lowercase with hyphens
- Keep description concise (3-5 words)
- Always include phase and task ID from DEVELOPMENT-PLAN.md

---

### Commit Message Convention

Follow **Conventional Commits** specification:

**Format:**
```
<type>(<scope>): <description>

[optional body]

[optional footer]
```

**Types:**
- `feat`: New feature or functionality
- `fix`: Bug fix
- `style`: CSS/styling changes (no functional changes)
- `refactor`: Code refactoring (no feature change)
- `docs`: Documentation updates
- `test`: Adding or updating tests
- `chore`: Build process, tooling, dependencies

**Scopes:**
- `hero`: Hero section
- `about`: About Me section
- `gallery`: Gallery sections
- `modal`: Modal components
- `nav`: Navigation
- `contact`: Contact section
- `css`: General CSS changes
- `js`: JavaScript functionality
- `assets`: Images and assets
- `a11y`: Accessibility improvements

**Examples:**
```bash
feat(hero): Add hero section HTML structure and layout

- Implement CSS Grid centering
- Add background image with brush strokes
- Add CTA button with hover effects
```

```bash
style(about): Implement 60/40 grid split for About section

- Create asymmetric column layout
- Add profile image with circular frame
- Style skills section with icon grid
```

```bash
fix(modal): Correct focus trap behavior on modal close

- Restore focus to trigger element
- Fix tab navigation within modal
```

---

### Initial Repository Setup (ONE-TIME)

**Task ID:** P0-T0 (Before all other tasks)

**Commands:**

```bash
# 1. Initialize Git repository
git init

# 2. Create initial commit with project documentation
git add CLAUDE.md DEVELOPMENT-PLAN.md README.md .gitignore
git commit -m "docs: Initial project setup and specifications"

# 3. Set main as default branch
git branch -M main

# 4. Create GitHub repository using GitHub CLI
gh repo create marina-portfolio --public --source=. --push

# 5. Configure branch protection rules
gh api repos/{owner}/marina-portfolio/branches/main/protection \
  --method PUT \
  --field required_pull_request_reviews[required_approving_review_count]=1 \
  --field enforce_admins=true \
  --field restrictions=null
```

**Note:** Replace `{owner}` with your GitHub username.

---

### Per-Task Workflow (Repeated for Each Task)

For each task in DEVELOPMENT-PLAN.md (P0-T1 through P5-T4), follow this process:

#### 1. Pull Latest Changes

```bash
# Ensure you're on main branch
git checkout main

# Pull latest changes
git pull origin main
```

#### 2. Create Feature Branch

```bash
# Create and switch to new branch
# Example for Phase 1, Task 2 (CSS Reset)
git checkout -b P1-T2-css-reset
```

#### 3. Implement Task

- Follow task acceptance criteria from DEVELOPMENT-PLAN.md
- Write clean, semantic code following patterns in this document
- Test functionality in browser
- Validate against task requirements

#### 4. Commit Changes

```bash
# Stage all changes
git add .

# Commit with conventional commit message
git commit -m "$(cat <<'EOF'
feat(css): Create CSS reset with modern normalization

- Add box-sizing border-box for all elements
- Remove default margins and padding
- Set consistent line-height and font smoothing
- Configure focus-visible styles

Implements P1-T2 acceptance criteria
Tested in Chrome, Firefox, Safari
EOF
)"
```

#### 5. Push Branch

```bash
# Push branch to remote
git push -u origin P1-T2-css-reset
```

#### 6. Create Pull Request

```bash
# Create PR using GitHub CLI with template
gh pr create \
  --title "feat(css): Create CSS reset (P1-T2)" \
  --body "$(cat <<'EOF'
## Task
**ID:** P1-T2
**Phase:** 1 - Foundation
**Effort:** S

## Summary
- Created modern CSS reset following best practices
- Normalized browser inconsistencies
- Set up base styles for all elements
- Added focus-visible accessibility styles

## Acceptance Criteria
- [x] File exists at `css/base/reset.css`
- [x] All reset rules are present
- [x] No syntax errors
- [x] Works across Chrome, Firefox, Safari

## Validation
```bash
# Validated CSS syntax
npx stylelint css/base/reset.css

# Visual inspection in DevTools
# Confirmed no unwanted margins/paddings on default elements
```

## Testing
- Tested on Chrome 120
- Tested on Firefox 121
- Tested on Safari 17
- No console errors
- All elements render consistently

## Related Files
- `css/base/reset.css` (created)

---
**HITL Review Requested** ✋
Ready for manual review and merge.
EOF
)" \
  --assignee @me
```

#### 7. HITL Review Process

**Reviewer Actions:**
1. Review code on GitHub PR page
2. Check acceptance criteria are met
3. Test functionality locally if needed
4. Leave comments or request changes if issues found
5. Approve PR when satisfied

**If Changes Requested:**

```bash
# Make requested changes in same branch
# (edit files as needed)

# Stage and commit fixes
git add .
git commit -m "fix(css): Address PR feedback - adjust line-height"

# Push updates (automatically updates PR)
git push
```

**If Approved:**

The reviewer merges the PR manually via GitHub UI:
- Use "Squash and merge" for clean history
- Delete branch after merge

#### 8. Cleanup and Continue

After PR is merged:

```bash
# Switch back to main
git checkout main

# Pull merged changes
git pull origin main

# Delete local branch (already deleted on remote)
git branch -d P1-T2-css-reset

# Continue to next task...
```

---

### Pull Request Template

Use this template for all PRs (embedded in PR creation command above):

```markdown
## Task
**ID:** P{phase}-T{task}
**Phase:** {phase number} - {phase name}
**Effort:** {S/M/L}

## Summary
{2-4 bullet points describing what was implemented}

## Acceptance Criteria
- [ ] {Criterion 1 from DEVELOPMENT-PLAN.md}
- [ ] {Criterion 2 from DEVELOPMENT-PLAN.md}
- [ ] {Criterion 3 from DEVELOPMENT-PLAN.md}

## Validation
```bash
{Commands run to validate the implementation}
```

## Testing
- Tested on {browser 1}
- Tested on {browser 2}
- Tested on {browser 3}
- {Any other testing notes}

## Related Files
- `{file/path}` ({created/modified})

---
**HITL Review Requested** ✋
Ready for manual review and merge.
```

---

### Branch Protection Rules

**Main Branch Protection:**
- ✅ Require pull request before merging
- ✅ Require 1 approval before merging
- ✅ Dismiss stale PR approvals when new commits pushed
- ✅ Require status checks to pass (if CI/CD configured)
- ✅ Enforce for administrators
- ❌ Allow force pushes (disabled)
- ❌ Allow deletions (disabled)

**Configuration via GitHub UI:**
1. Go to repository Settings
2. Navigate to Branches → Branch protection rules
3. Add rule for `main` branch
4. Enable settings above

---

### Handling PR Rejections & Iterations

**Scenario 1: Minor Changes Requested**
```bash
# Make changes in same branch
git add .
git commit -m "fix: Address review feedback"
git push
# PR automatically updates
```

**Scenario 2: Major Rework Needed**
```bash
# Consider rebasing for cleaner history
git add .
git commit --amend -m "feat(scope): Improved implementation based on review"
git push --force-with-lease
```

**Scenario 3: Multiple Review Cycles**
- Keep iterating on same branch
- Each push updates the PR
- Maintain conversation in PR comments
- Request re-review when ready

---

### Rollback Strategy

**If a merged PR causes issues:**

```bash
# Option 1: Revert the merge commit
git revert -m 1 <merge-commit-hash>
git push origin main

# Option 2: Fix forward (preferred)
# Create new branch with fix
git checkout -b hotfix-issue-description
# Make fixes
git add .
git commit -m "fix: Resolve issue from P1-T2"
# Create PR for the fix
gh pr create --title "fix: Resolve issue from P1-T2" --body "..."
```

---

### GitHub CLI Setup

**Install GitHub CLI:**

**Windows (PowerShell):**
```powershell
winget install --id GitHub.cli
```

**Mac:**
```bash
brew install gh
```

**Linux:**
```bash
curl -fsSL https://cli.github.com/packages/githubcli-archive-keyring.gpg | sudo gpg --dearmor -o /usr/share/keyrings/githubcli-archive-keyring.gpg
echo "deb [arch=$(dpkg --print-architecture) signed-by=/usr/share/keyrings/githubcli-archive-keyring.gpg] https://cli.github.com/packages stable main" | sudo tee /etc/apt/sources.list.d/github-cli.list > /dev/null
sudo apt update
sudo apt install gh
```

**Authenticate:**
```bash
gh auth login
# Follow prompts to authenticate with GitHub
```

---

### Best Practices

**DO:**
- ✅ Always pull latest main before creating new branch
- ✅ Keep branches small and focused (one task per branch)
- ✅ Write descriptive commit messages
- ✅ Test thoroughly before creating PR
- ✅ Link PR to task ID in DEVELOPMENT-PLAN.md
- ✅ Respond to review feedback promptly
- ✅ Delete branches after merging

**DON'T:**
- ❌ Work directly on main branch
- ❌ Combine multiple tasks in one PR
- ❌ Force push to main
- ❌ Skip testing before PR creation
- ❌ Merge your own PRs (HITL reviews required)
- ❌ Leave stale branches unmerged

---

### CI/CD Integration (Optional)

For automated validation, consider adding GitHub Actions:

**`.github/workflows/validate.yml`:**
```yaml
name: Validate PR

on:
  pull_request:
    branches: [ main ]

jobs:
  validate:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3

      - name: Validate HTML
        run: npx html-validate "*.html"

      - name: Lint CSS
        run: npx stylelint "css/**/*.css"

      - name: Lint JavaScript
        run: npx eslint "js/**/*.js"

      - name: Check accessibility
        run: npx pa11y-ci "*.html"
```

This ensures PRs are automatically validated before HITL review.

---

### Quick Reference Commands

**Start New Task:**
```bash
git checkout main && git pull && git checkout -b P{phase}-T{task}-{description}
```

**Commit Work:**
```bash
git add . && git commit -m "feat(scope): description"
```

**Create PR:**
```bash
git push -u origin $(git branch --show-current) && gh pr create
```

**Update PR After Feedback:**
```bash
git add . && git commit -m "fix: address review feedback" && git push
```

**After PR Merged:**
```bash
git checkout main && git pull && git branch -d {old-branch-name}
```

---

### HITL Review Checkpoints

As defined in DEVELOPMENT-PLAN.md, after completing each phase, perform a comprehensive HITL review:

**Phase Review Checklist:**
- [ ] All tasks in phase completed
- [ ] All PRs merged to main
- [ ] Visual comparison against design screenshots
- [ ] Cross-browser testing completed
- [ ] Accessibility validation passed
- [ ] No console errors
- [ ] Performance metrics acceptable
- [ ] Code quality meets standards

**Phase Gates:**
- **After Phase 0:** File structure and assets organized correctly
- **After Phase 1:** HTML skeleton and CSS foundation solid
- **After Phase 2:** All core sections visually complete
- **After Phase 3:** Full interactivity working smoothly
- **After Phase 4:** Production-ready with polish complete

Only proceed to next phase after HITL approval at each gate.

---

### JavaScript Architecture & Patterns

**Approach:** ES6 Modules, Event Delegation, Separation of Concerns
**No External Libraries:** Pure vanilla JavaScript

**File: `js/main.js`**

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

**File: `js/modules/scroll.js`**

```javascript
// Smooth scroll functionality
export function initSmoothScroll() {
  // Select all internal anchor links
  const links = document.querySelectorAll('a[href^="#"]');

  links.forEach(link => {
    link.addEventListener('click', (e) => {
      const href = link.getAttribute('href');

      // Skip if it's just "#" or modal trigger
      if (href === '#' || link.dataset.modal) return;

      e.preventDefault();

      const targetId = href.substring(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        const headerOffset = 80; // Account for sticky header
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
}

// Alternative: Use Intersection Observer for scroll animations
export function initScrollAnimations() {
  const observerOptions = {
    root: null,
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fade-in');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Observe all sections
  document.querySelectorAll('section').forEach(section => {
    observer.observe(section);
  });
}
```

**File: `js/modules/modal.js`**

```javascript
// Modal control with focus trap and accessibility
export function initModal() {
  const modal = document.getElementById('projects-modal');
  if (!modal) return;

  const openTriggers = document.querySelectorAll('[data-modal="projects"]');
  const closeTriggers = modal.querySelectorAll('[data-close-modal]');
  const focusableElements = 'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';

  let lastFocusedElement = null;

  // Open modal
  function openModal() {
    lastFocusedElement = document.activeElement;
    modal.removeAttribute('hidden');
    document.body.style.overflow = 'hidden'; // Prevent body scroll

    // Focus first focusable element
    const firstFocusable = modal.querySelector(focusableElements);
    if (firstFocusable) firstFocusable.focus();

    // Trap focus
    trapFocus(modal);
  }

  // Close modal
  function closeModal() {
    modal.setAttribute('hidden', '');
    document.body.style.overflow = ''; // Restore body scroll

    // Restore focus
    if (lastFocusedElement) {
      lastFocusedElement.focus();
    }
  }

  // Focus trap
  function trapFocus(element) {
    const focusables = Array.from(element.querySelectorAll(focusableElements));
    const firstFocusable = focusables[0];
    const lastFocusable = focusables[focusables.length - 1];

    function handleTabKey(e) {
      if (e.key !== 'Tab') return;

      if (e.shiftKey) {
        if (document.activeElement === firstFocusable) {
          e.preventDefault();
          lastFocusable.focus();
        }
      } else {
        if (document.activeElement === lastFocusable) {
          e.preventDefault();
          firstFocusable.focus();
        }
      }
    }

    element.addEventListener('keydown', handleTabKey);
  }

  // Event listeners
  openTriggers.forEach(trigger => {
    trigger.addEventListener('click', (e) => {
      e.preventDefault();
      openModal();
    });
  });

  closeTriggers.forEach(trigger => {
    trigger.addEventListener('click', closeModal);
  });

  // Close on ESC key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !modal.hasAttribute('hidden')) {
      closeModal();
    }
  });

  // Category navigation
  const categoryLinks = modal.querySelectorAll('[data-category]');
  categoryLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const category = link.dataset.category;
      closeModal();

      // Show corresponding gallery section
      const gallerySection = document.getElementById(category);
      if (gallerySection) {
        gallerySection.removeAttribute('hidden');
        gallerySection.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
}
```

**File: `js/modules/navigation.js`**

```javascript
// Navigation highlighting and visibility
export function initNavigation() {
  const header = document.getElementById('header');
  const navLinks = document.querySelectorAll('.nav__link');
  const sections = document.querySelectorAll('section[id]');

  // Show/hide header on scroll
  let lastScrollY = window.pageY;
  const heroHeight = document.querySelector('.hero')?.offsetHeight || 0;

  function handleScroll() {
    const currentScrollY = window.pageY;

    // Show header after scrolling past hero
    if (currentScrollY > heroHeight * 0.8) {
      header.classList.add('header--visible');
    } else {
      header.classList.remove('header--visible');
    }

    lastScrollY = currentScrollY;
  }

  // Highlight active section in navigation
  function highlightActiveSection() {
    const scrollY = window.pageYOffset;

    sections.forEach(section => {
      const sectionHeight = section.offsetHeight;
      const sectionTop = section.offsetTop - 100;
      const sectionId = section.getAttribute('id');

      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        navLinks.forEach(link => {
          link.classList.remove('nav__link--active');

          if (link.dataset.section === sectionId) {
            link.classList.add('nav__link--active');
          }
        });
      }
    });
  }

  // Throttle scroll events for performance
  let ticking = false;

  window.addEventListener('scroll', () => {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        handleScroll();
        highlightActiveSection();
        ticking = false;
      });

      ticking = true;
    }
  });

  // Initial call
  handleScroll();
  highlightActiveSection();
}

// Back button functionality for galleries
export function initBackButtons() {
  const backButtons = document.querySelectorAll('[data-back]');

  backButtons.forEach(button => {
    button.addEventListener('click', () => {
      const target = button.dataset.back;

      // Hide current gallery
      const currentGallery = button.closest('.gallery');
      if (currentGallery) {
        currentGallery.setAttribute('hidden', '');
      }

      // Show modal or scroll to target
      if (target === 'projects') {
        const modal = document.getElementById('projects-modal');
        if (modal) {
          modal.removeAttribute('hidden');
        }
      }
    });
  });
}
```

**Additional Utilities (Optional):**

**File: `js/modules/utils.js`**

```javascript
// Utility functions

// Debounce function for performance
export function debounce(func, wait = 300) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// Throttle function for scroll events
export function throttle(func, limit = 100) {
  let inThrottle;
  return function(...args) {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
}

// Check if element is in viewport
export function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

// Lazy load images
export function lazyLoadImages() {
  const images = document.querySelectorAll('img[loading="lazy"]');

  if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = img.dataset.src || img.src;
          img.classList.add('loaded');
          observer.unobserve(img);
        }
      });
    });

    images.forEach(img => imageObserver.observe(img));
  } else {
    // Fallback for browsers without IntersectionObserver
    images.forEach(img => {
      img.src = img.dataset.src || img.src;
    });
  }
}
```

### JavaScript Best Practices Summary

1. **ES6 Modules:** Organized code split into logical modules
2. **Event Delegation:** Efficient event handling for dynamic content
3. **Accessibility:** Focus management, keyboard navigation, ARIA support
4. **Performance:** RequestAnimationFrame for scroll, Intersection Observer for lazy loading
5. **Progressive Enhancement:** Fallbacks for older browsers
6. **No jQuery:** Clean vanilla JavaScript following modern standards
7. **Separation of Concerns:** Each module handles one specific functionality

### Accessibility

**WCAG 2.1 AA Compliance:**
- Color contrast ratio ≥ 4.5:1 (text)
- Keyboard navigation support
- Focus indicators on interactive elements
- ARIA labels for icon buttons
- Screen reader friendly structure
- Skip to main content link

**Semantic Markup:**
- Proper heading structure
- Descriptive link text
- Form labels (if applicable)

### Browser Support

**Target Browsers:**
- Chrome/Edge (last 2 versions)
- Firefox (last 2 versions)
- Safari (last 2 versions)
- Mobile Safari (iOS 14+)
- Mobile Chrome (Android 10+)

### Performance Targets

- First Contentful Paint: < 1.5s
- Largest Contentful Paint: < 2.5s
- Total page weight: < 3MB
- Images optimized: < 200KB each

---

## Assets Inventory

### Images (from Materials/IMAGES/)

**Backgrounds & Decorations:**
- `fondo.png` - Full background brush composition
- `pinceladas rojas.png` - Red diagonal brush strokes
- `circulo rojo.png` - Red circular brush frame
- `head.png` - Horizontal red brush stroke

**Profile:**
- `fotomia.jpg` - Professional portrait for About section

**Project Gallery:**
- `IMG1.jpg` - Black/white editorial photo (Revista de Arte)
- `IMG2.jpg` - Rock illustration (Revista de Filofofía)
- `IMG3.jpg` - Blue couple illustration (Cartel de Serie)

**Icons:**
- `ai.png` - Adobe Illustrator icon
- `ps.png` - Adobe Photoshop icon
- `id.png` - Adobe InDesign icon
- `figma.png` - Figma icon

### Typography (Google Fonts Recommendations)

**Heading Font Options:**
- Libre Caslon Display
- Playfair Display
- Bodoni Moda
- Cormorant Garamond

**Body Font Options:**
- EB Garamond
- Lora
- Crimson Text
- Libre Baskerville

---

## Development Phases

### Phase 1: Foundation (MVP)
- [ ] Set up project structure
- [ ] Implement HTML semantic structure
- [ ] Create CSS design system (colors, typography, spacing)
- [ ] Build Hero/Landing section
- [ ] Build About Me section with profile
- [ ] Implement top navigation bar
- [ ] Create Contact section

### Phase 2: Interactivity
- [ ] Implement smooth scroll navigation
- [ ] Create Projects Menu modal
- [ ] Add modal open/close functionality
- [ ] Build Editorial gallery section
- [ ] Implement horizontal scroll gallery
- [ ] Add navigation highlighting on scroll

### Phase 3: Enhancement
- [ ] Add scroll animations (fade-in, parallax)
- [ ] Implement keyboard navigation
- [ ] Add hover effects and micro-interactions
- [ ] Optimize images and performance
- [ ] Add loading states

### Phase 4: Polish & Testing
- [ ] Responsive design testing (mobile, tablet, desktop)
- [ ] Browser compatibility testing
- [ ] Accessibility audit and fixes
- [ ] Performance optimization
- [ ] SEO optimization (meta tags, Open Graph)

### Phase 5: Additional Galleries (Optional)
- [ ] Create Logos gallery
- [ ] Create Branding y Publicidad gallery
- [ ] Create Fotografía gallery
- [ ] Implement project detail modals/pages

---

## Design Guidelines

### Spacing System
- Base unit: 8px
- Margins/Padding scale: 8, 16, 24, 32, 40, 48, 64, 80, 120px
- Section padding: 80px (desktop), 40px (mobile)
- Container max-width: 1200px

### Border Radius
- Buttons: 30-40px (pill shape)
- Cards: 30-40px (rounded squares)
- Icons: 8-12px (subtle rounding)

### Shadows
- Cards hover: `0 10px 30px rgba(0, 0, 0, 0.15)`
- Modal: `0 20px 60px rgba(0, 0, 0, 0.3)`
- Subtle elements: `0 2px 8px rgba(0, 0, 0, 0.08)`

### Transitions
- Standard: `all 0.3s ease`
- Quick: `all 0.15s ease`
- Slow: `all 0.5s ease`

---

## Content Copy

### Hero Section
```
MARINA DIMITROVA
Diseño que conecta.
Multimedia y Artes digitales
[Button: Explora mi trabajo]
```

### About Me Section
```
SOBRE MÍ

Soy Marina Dimitrova, diseñadora gráfica y estudiante de Artes Digitales y Multimedia. Mi trabajo nace del equilibrio entre lo conceptual y lo emocional, entre la narrativa visual y la estética simbólica.

Diseño para contar historias. Cada proyecto es una extensión de lo que observo, lo que siento y lo que quiero provocar. Me inspiran los silencios que hablan, los gestos que no necesitan palabras y los símbolos que perduran. Trabajo con sensibilidad editorial, explorando el poder de lo visual para conectar con las personas. Me interesa lo imperfecto, lo que deja huella, lo que construye identidad desde lo sutil.

Este portfolio es un mapa de mi universo creativo: ahí donde las formas dialogan con las ideas y cada trazo lleva intención.

SOFTWARE:
- Adobe Illustrator
- Adobe Photoshop
- Adobe InDesign
- Figma

LANGUAGES:
- Español B2
- Ingles B2
- Búlgaro C1
```

### Projects Categories
```
LOGOS
BRANDING Y PUBLICIDAD
EDITORIAL
FOTOGRAFÍA
```

### Contact Section
```
CONTACTAME

Email: Aniramad05@gmail.com
LinkedIN: www.linkedin.com/in/marina-dimitrova-328b88291
Number: (+34) 656 694 180
```

---

## SEO & Meta Information

```html
<title>Marina Dimitrova | Diseñadora Gráfica y Multimedia</title>
<meta name="description" content="Portfolio de Marina Dimitrova - Diseñadora gráfica y estudiante de Artes Digitales y Multimedia. Diseño editorial, branding, logos y fotografía.">
<meta name="keywords" content="diseño gráfico, portfolio, multimedia, artes digitales, diseñadora, Madrid, España">
<meta name="author" content="Marina Dimitrova">

<!-- Open Graph -->
<meta property="og:title" content="Marina Dimitrova | Portfolio">
<meta property="og:description" content="Diseño que conecta. Multimedia y Artes digitales.">
<meta property="og:type" content="website">
<meta property="og:image" content="[URL to fotomia.jpg]">

<!-- Favicon -->
<link rel="icon" type="image/png" href="favicon.png">
```

---

## Notes for Developer

1. **Image Optimization:** All images from Materials/IMAGES/ should be optimized before deployment. Consider converting to WebP with fallbacks.

2. **Font Loading:** Use `font-display: swap` to prevent invisible text during font loading.

3. **Animations:** Use `prefers-reduced-motion` media query to respect user preferences.

4. **Lazy Loading:** Implement lazy loading for gallery images to improve initial page load.

5. **Modal Accessibility:** Trap focus within modal when open, restore focus on close.

6. **Mobile Navigation:** Consider hamburger menu for mobile screens to save space.

7. **Gallery Enhancement:** For future phases, consider implementing lightbox functionality for project detail views.

8. **Internationalization:** While current content is Spanish, structure allows for easy i18n implementation if needed.

9. **Analytics:** Consider adding Google Analytics or similar for tracking (with cookie consent).

10. **Hosting:** This static site can be hosted on GitHub Pages, Netlify, Vercel, or similar platforms for free.

---

## Success Criteria

**Functional:**
- ✓ All navigation links work correctly
- ✓ Smooth scroll behavior implemented
- ✓ Modal opens and closes properly
- ✓ Gallery scrolls horizontally
- ✓ All links (email, phone, LinkedIn) are clickable

**Visual:**
- ✓ Design matches provided screenshots
- ✓ Typography hierarchy is clear
- ✓ Color scheme is consistent
- ✓ Brush stroke decorations are properly placed
- ✓ Responsive on all screen sizes

**Technical:**
- ✓ Valid HTML5 markup
- ✓ Clean, maintainable CSS
- ✓ Minimal, efficient JavaScript
- ✓ Fast page load (<3s)
- ✓ No console errors

**Accessibility:**
- ✓ WCAG 2.1 AA compliant
- ✓ Keyboard navigable
- ✓ Screen reader friendly
- ✓ Proper color contrast

---

## Contact & Support

**Designer Contact:**
- Email: Aniramad05@gmail.com
- LinkedIn: [marina-dimitrova-328b88291](https://www.linkedin.com/in/marina-dimitrova-328b88291)
- Phone: (+34) 656 694 180

---

**Last Updated:** January 14, 2026
**Version:** 2.0 (with HTML/CSS/JS Architecture)
**Status:** Ready for Development

---

## Quick Start Guide for Developers

### Step 1: Project Setup
```bash
# Create project structure
mkdir marina-portfolio
cd marina-portfolio

# Create folder structure
mkdir -p css/{base,layout,components,utilities}
mkdir -p js/modules
mkdir -p images/{backgrounds,profile,projects,icons}

# Copy design assets from Materials folder
cp Materials/IMAGES/* images/
```

### Step 2: Implementation Order

1. **Start with Base Files:**
   - Create `css/base/reset.css` (use modern CSS reset)
   - Create `css/base/variables.css` (copy design tokens from this spec)
   - Create `css/base/typography.css` (import Google Fonts)

2. **Build HTML Structure:**
   - Use the complete HTML skeleton provided above
   - Follow BEM naming convention strictly
   - Ensure all accessibility attributes are included

3. **Implement Layout CSS:**
   - Hero section (CSS Grid centering)
   - About section (60/40 Grid split)
   - Gallery (Flexbox horizontal scroll)
   - Modal (Fixed overlay with Grid)

4. **Add Components:**
   - Navigation bar (sticky header)
   - Buttons (primary, back button)
   - Cards (project cards with hover effects)

5. **JavaScript Functionality:**
   - Set up ES6 modules
   - Implement smooth scroll
   - Add modal control with focus trap
   - Navigation highlighting on scroll

6. **Polish & Test:**
   - Responsive breakpoints
   - Cross-browser testing
   - Accessibility audit
   - Performance optimization

### Key Design Decisions

**Layout Approach:**
- **Hero:** CSS Grid with `place-items: center` for perfect centering
- **About:** CSS Grid with `60fr 40fr` for asymmetric columns
- **Skills:** CSS Grid `repeat(2, 1fr)` for icon layout
- **Gallery:** Flexbox with `overflow-x: auto` for horizontal scroll
- **Modal:** Fixed position with CSS Grid centering

**Why BEM?**
- Clear component boundaries
- Avoids CSS specificity conflicts
- Easy to maintain and scale
- Self-documenting class names

**Why CSS Custom Properties?**
- Easy theme modifications
- Dynamic responsive adjustments
- Single source of truth for design tokens
- Better maintainability

**Why Vanilla JavaScript?**
- No dependencies, faster load time
- Smaller bundle size
- Full control over functionality
- Modern browser support is excellent

### Common Pitfalls to Avoid

1. **Don't use absolute positioning for layout** - Use Grid/Flexbox instead
2. **Don't hardcode values** - Use CSS custom properties from variables.css
3. **Don't forget accessibility** - Always include ARIA labels and keyboard support
4. **Don't skip mobile-first** - Start with mobile styles, then enhance for desktop
5. **Don't use inline styles** - Keep all styling in CSS files
6. **Don't forget image optimization** - Convert to WebP, add lazy loading
7. **Don't skip semantic HTML** - Use proper HTML5 elements

### Testing Checklist

- [ ] Validates as HTML5
- [ ] All images have alt text
- [ ] Keyboard navigation works
- [ ] Screen reader friendly
- [ ] Works without JavaScript (progressive enhancement)
- [ ] Responsive on mobile (320px+)
- [ ] Works on tablet (768px-1024px)
- [ ] Looks perfect on desktop (1200px+)
- [ ] Fast load time (<3s)
- [ ] No console errors
- [ ] Color contrast passes WCAG AA
- [ ] Focus indicators visible

---

**Version History:**
- v2.0 (2026-01-14): Added comprehensive HTML/CSS/JS architecture with best practices
- v1.0 (2026-01-14): Initial design specification and asset documentation
