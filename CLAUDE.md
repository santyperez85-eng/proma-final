# pro.ma Studio — Design System Context
## pro.ma Color System v2.0 — Umbral

Este archivo es el contexto de diseño de pro.ma Studio para Claude Code y cualquier IDE.
Cuando construyas interfaces, componentes o prototipos para pro.ma, usá siempre estos tokens.

---

## IDENTIDAD

**Estudio:** pro.ma Studio
**Nombre visual:** proma (sin punto en el wordmark)
**Posicionamiento:** Estudio de diseño con proceso. Para organizaciones que no pueden permitirse el desorden.
**Claim:** Human-Led. System-Driven. Intelligence-Enhanced.
**Concepto visual:** UMBRAL — el punto de transición entre el desorden operativo y el sistema gobernado
**Mercado:** Argentina y LATAM
**Contacto:** hola@pro.ma

### Etimología del nombre
- **pro** = proceso
- **ma** = manifiesto
- El punto no aparece en el wordmark — vive en el sistema de nomenclatura de unidades

### Credencial central
40 años de experiencia combinada (20 años cada socio) en industrias reguladas.
No decir explícitamente "farmacéutica" — decir "industrias reguladas" o "entornos regulados".
La experiencia en packaging regulado avala el posicionamiento en todos los ámbitos del diseño.

---

## WORDMARK

### Tipografía del wordmark
| Caracteres | Fuente | Rol semántico |
|------------|--------|---------------|
| p · r · o · a | Grantha Sangam MN Regular | Sistema, método, proceso |
| m | Playfair Display Italic | Lo humano, el criterio, la tensión |

La **m** en Playfair Display es el umbral tipográfico.
**Wordmark siempre monocromático** — sin color diferencial en ninguna letra.
El acento `#D4521A` NO aparece en el wordmark principal.

### Versión reducida
A 32px o menos usar solo **pm** — p en Grantha Sangam, m en Playfair Display Italic.

### Color del wordmark
- Modo oscuro: `#F2EDE4` sobre `#0A0A0F`
- Modo claro: `#2C2420` sobre `#FAF8F4`

### Sin punto en el wordmark
El punto fue eliminado del wordmark visual.
No usar punto entre "pro" y "ma" en ninguna aplicación del logo.

---

## SISTEMA DE NOMENCLATURA DE UNIDADES

El punto vive en las extensiones — no en el wordmark madre.

```
pro.pack   →  packaging gráfico, estructural, regulatorio
pro.brand  →  branding e identidad visual
pro.web    →  web y aplicaciones
pro.ops    →  DesignOps y mantenimiento
```

### Tipografía de las unidades
```
pro        →  Grantha Sangam MN Regular
.          →  separador en #D4521A  ← aquí vive el acento terracota
pack/brand →  IBM Plex Mono
```

**Las unidades no tienen logo propio.**
Su identidad es la lógica de nomenclatura. No crear isotipos separados.

---

## SERVICIOS

### Arquitectura de servicios (cómo presentarlos)

**Cómo entramos:**
Diagnóstico & Consultoría — primer paso antes de cualquier proyecto.
Auditamos, identificamos fricciones, definimos el camino. No asumimos, medimos.

**Qué hacemos:**
1. **Packaging** — gráfico, estructural, literaturas, compliance regulatorio
2. **Branding** — identidad, sistema visual, manual, señalética, stands
3. **Web & Aplicaciones** — sitios, plataformas, apps, UX/UI como método

**Cómo nos quedamos:**
Mantenimiento & Retainer — QA, versiones, control de cambios, evolución del sistema.

### Lo que NO aparece en el menú principal (vive adentro de los servicios)
- Señalética → dentro de Branding
- Diseño de stands → dentro de Branding
- Motion graphics → capacidad de producción integrada a proyectos, no servicio
- UX/UI → método de trabajo dentro de Web & Aplicaciones, no servicio separado
- Diseño estructural → dentro de Packaging

### Lo que NO decimos
- Que somos especialistas solo en farma
- Que ya tuvimos clientes (es un lanzamiento nuevo)
- Métricas de investigación de mercado como si fueran resultados propios
- Cupos operativos internos (200hs, etc.)
- "Magia", "inspiración", "feeling", "pasión"

---

## ARQUITECTURA DEL SITIO WEB

### Stack técnico
- **Astro** — generador de sitio estático, componentes `.astro`
- **CSS vanilla** con `tokens.css` — sin Tailwind, sin frameworks CSS
- **Google Fonts** — Plus Jakarta Sans, IBM Plex Mono, Playfair Display
- **Repo:** `https://github.com/santyperez85-eng/proma-final.git`

### Estructura de archivos
```
src/
├── layouts/
│   └── Base.astro              # Layout principal con nav, cursor, scroll reveal
├── pages/
│   ├── index.astro             # Home — 7 secciones
│   └── trabajo.astro           # Portfolio — 4 casos + hero + CTA
├── components/
│   ├── Hero.astro              # Sección 1 — Hero full viewport
│   ├── Problema.astro          # Sección 2 — El problema (scroll-linked reveal)
│   ├── Servicios.astro         # Sección 3 — Accordion interactivo
│   ├── Metodo.astro            # Sección 4 — PROMA-4 framework
│   ├── Estudio.astro           # Sección 5 — Quiénes somos
│   ├── TrabajoPreview.astro    # Sección 6 — Grid de 4 casos
│   ├── Contacto.astro          # Sección 7 — Formulario
│   ├── Footer.astro            # Footer con statement
│   ├── Cursor.astro            # Cursor custom dot+ring
│   └── ScrollReveal.astro      # Sistema de reveal + registration marks
├── styles/
│   ├── tokens.css              # Design tokens (colores, tipo, espaciado)
│   └── global.css              # Reset, container, section spacing
└── public/
    └── brand/
        ├── proma-favicon.svg
        ├── proma-wordmark-dark.svg
        └── proma-wordmark-light.svg
```

### Páginas
```
/          Home — 7 secciones
/trabajo   Portfolio — 4 casos iniciales
```

El formulario de contacto vive en el home (sección 7).
No hay página /servicios separada — los servicios viven en el home.

### Secciones del home
| # | Sección | Componente | Pregunta que responde | Modo |
|---|---|---|---|---|
| 1 | Nav + Hero | Base.astro + Hero.astro | ¿Qué es proma y para quién? | Oscuro |
| 2 | El problema | Problema.astro | ¿Por qué existe proma? | Oscuro |
| 3 | Servicios | Servicios.astro | ¿Qué hace proma? | Claro |
| 4 | Método PROMA-4 | Metodo.astro | ¿Cómo trabaja proma? | Claro |
| 5 | Estudio | Estudio.astro | ¿Quiénes son? | Oscuro |
| 6 | Trabajo (preview) | TrabajoPreview.astro | ¿Cómo se ve el criterio aplicado? | Oscuro |
| 7 | Contacto | Contacto.astro | ¿Cómo arrancamos? | Oscuro |

---

## REGLA MAESTRA DE MODOS

| Modo | Cuándo usar |
|------|-------------|
| **Oscuro** | Hero, problema, estudio, trabajo preview, contacto, footer |
| **Claro** | Servicios, método |

La alternancia no es decorativa — sigue la lógica del sistema:
oscuro para impacto y autoridad, claro para contenido técnico de lectura extendida.

---

## PALETA DE COLORES

### Primitivos (tokens.css)
```css
--proma-navy-900:  #0A0A0F;   /* near-black — fondo principal modo oscuro */
--proma-navy-800:  #111118;   /* surface elevada oscura */
--proma-navy-700:  #1A1A24;   /* bordes y superficies oscuras */
--proma-terra-500: #D4521A;   /* acento terracota principal */
--proma-terra-700: #B5420F;   /* acento hover/pressed */
--proma-cream-50:  #FAF8F4;   /* fondo principal modo claro */
--proma-cream-100: #F2EDE4;   /* texto principal modo oscuro */
--proma-cream-200: #EAE6DE;   /* bordes y superficies claras */
--proma-text-dark: #2C2420;   /* texto principal modo claro */
```

### Semánticos por modo
```css
/* Modo oscuro */
--color-bg:           var(--proma-navy-900);    /* #0A0A0F */
--color-surface:      var(--proma-navy-700);    /* #1A1A24 */
--color-accent:       var(--proma-terra-500);   /* #D4521A */
--color-accent-hover: var(--proma-terra-700);   /* #B5420F */
--color-text-primary: var(--proma-cream-100);   /* #F2EDE4 */
--color-text-accent:  var(--proma-terra-500);   /* #D4521A */
--color-border:       var(--proma-navy-700);    /* #1A1A24 */

/* Modo claro */
--color-bg:           var(--proma-cream-50);    /* #FAF8F4 */
--color-surface:      var(--proma-cream-200);   /* #EAE6DE */
--color-accent:       var(--proma-terra-500);   /* #D4521A */
--color-accent-hover: var(--proma-terra-700);   /* #B5420F */
--color-text-primary: var(--proma-text-dark);   /* #2C2420 */
--color-text-accent:  var(--proma-terra-500);   /* #D4521A */
--color-border:       var(--proma-cream-200);   /* #EAE6DE */
```

### Reglas de color
- Fondo oscuro → texto siempre `#F2EDE4`
- Fondo claro → texto siempre `#2C2420`
- Acento `#D4521A` funciona sobre ambos
- Modo oscuro activado via `data-mode="dark"` en el `<section>`
- Modo claro activado via `data-mode="light"` en el `<section>`
- Nav scroll: `rgba(10, 10, 15, 0.9)` con `backdrop-filter: blur(12px)`

### Colores de glow y gradientes (rgba — no tokenizados)
```css
/* Glow terracota ambiental — fondos oscuros */
rgba(212, 82, 26, 0.04) a rgba(212, 82, 26, 0.08)   /* radial-gradient */

/* Glow púrpura secundario — profundidad */
rgba(120, 80, 200, 0.03) a rgba(60, 40, 120, 0.02)   /* radial-gradient */
rgba(100, 60, 180, 0.04) a rgba(60, 40, 120, 0.02)   /* variante Estudio */

/* Text-shadow glow terracota — itálicas Playfair */
text-shadow: 0 0 30px rgba(212, 82, 26, 0.25), 0 0 60px rgba(212, 82, 26, 0.08);

/* Text-shadow glow cream — hero title */
text-shadow: 0 0 80px rgba(242, 237, 228, 0.06), 0 0 160px rgba(212, 82, 26, 0.04);

/* Text-shadow conclusion strong */
text-shadow: 0 0 40px rgba(212, 82, 26, 0.15), 0 0 80px rgba(212, 82, 26, 0.05);

/* Glassmorphism — cards de trabajo */
background: rgba(255, 255, 255, 0.03);
backdrop-filter: blur(2px);
border: 1px solid rgba(242, 237, 228, 0.04);

/* Bordes sutiles modo oscuro */
rgba(242, 237, 228, 0.04) a rgba(242, 237, 228, 0.08)   /* borders */
rgba(255, 255, 255, 0.05) a rgba(255, 255, 255, 0.06)   /* borders alternativos */
```

---

## TIPOGRAFÍA

### Familias
| Familia | Variable CSS | Rol |
|---------|-------------|-----|
| Grantha Sangam MN | `--font-wordmark` | Wordmark — p, r, o, a |
| Playfair Display Italic | `--font-wordmark-accent` | Wordmark m + acentos tipográficos en títulos |
| Plus Jakarta Sans | `--font-primary` | Títulos, cuerpo, UI, navegación, todo lo demás |
| IBM Plex Mono | `--font-mono` | Trazabilidad técnica, refs, sufijos de unidades, PROMA-4 |

### Uso extendido de Playfair Display Italic
Playfair Display Italic no es solo para el wordmark. Se usa como **acento tipográfico** dentro de títulos clave para crear tensión visual:
- Hero: "*es* el diseño."
- Problema conclusión: "Con proceso, *escala*."
- Estudio: "en el *límite* del diseño."
- TrabajoPreview: "Algunos *trabajos*"
- Contacto: "le cuesta el *desorden*"
- Trabajo page: "criterio *documentado*" / "necesita *proceso*"
- Footer: "permitirse el *desorden*"

Siempre en `color: var(--proma-terra-500)` con text-shadow glow terracota.

### Escala tipográfica — Plus Jakarta Sans
| Token | Size | Weight | Tracking | Line-height |
|-------|------|--------|----------|-------------|
| t1 | 36px | 700 | -0.04em | 1.15 |
| t2 | 28px | 600 | -0.02em | 1.2 |
| t3 | 22px | 600 | 0 | 1.3 |
| t4 | 18px | 500 | 0 | 1.4 |
| body | 14px | 400 | 0 | 1.6 |
| small | 12px | 400 | 0 | 1.5 |
| label-ui | 11px | 500 | +0.08em | 1 |

### Escala tipográfica — IBM Plex Mono
| Token | Size | Tracking |
|-------|------|----------|
| mono-lg | 15px | +0.06em |
| mono-md | 12px | +0.04em |
| mono-sm | 11px | +0.02em |

### Tipografía en uso real (tamaños dinámicos con clamp)
| Elemento | clamp() | Weight | Tracking |
|----------|---------|--------|----------|
| Hero title | `clamp(52px, 11.5vw, 155px)` | 700 | -0.05em |
| Problema lead | `clamp(28px, 4vw, 52px)` | 700 | -0.03em |
| Problema conclusion | `clamp(32px, 5vw, 64px)` | 700 | -0.04em |
| Servicios title | `clamp(40px, 6vw, 80px)` | 700 | -0.04em |
| Servicio nombre | `clamp(22px, 3vw, 36px)` | 600 | -0.02em |
| Metodo PROMA-4 | `clamp(48px, 7vw, 100px)` | 400 (mono) | +0.02em |
| Estudio title | `clamp(40px, 6vw, 84px)` | 700 | -0.04em |
| TrabajoPreview title | `clamp(40px, 6vw, 80px)` | 700 | -0.04em |
| Contacto title | `clamp(28px, 3.5vw, 44px)` | 700 | -0.03em |
| Trabajo page hero | `clamp(40px, 6vw, 80px)` | 700 | -0.04em |
| Caso titulo | `clamp(28px, 4vw, 48px)` | 700 | -0.03em |

### Clases CSS de tipografía
```css
.type-t1      /* Plus Jakarta Sans — título principal */
.type-t2      /* Plus Jakarta Sans — subtítulo */
.type-t3      /* Plus Jakarta Sans — heading */
.type-t4      /* Plus Jakarta Sans — subheading */
.type-body    /* Plus Jakarta Sans — cuerpo */
.type-small   /* Plus Jakarta Sans — texto pequeño */
.type-label   /* Plus Jakarta Sans — label uppercase */
.type-mono-lg /* IBM Plex Mono — mono grande */
.type-mono-md /* IBM Plex Mono — mono medio */
.type-mono-sm /* IBM Plex Mono — mono pequeño */
```

---

## ESPACIADO

### Base 4px
```css
--space-1: 4px;   --space-2: 8px;   --space-3: 12px;  --space-4: 16px;
--space-5: 20px;  --space-6: 24px;  --space-8: 32px;  --space-10: 40px;
--space-12: 48px; --space-16: 64px; --space-20: 80px;  --space-24: 96px;
```

### Layout
```css
.container { max-width: 1200px; margin: 0 auto; padding: 0 var(--space-6); }
.section { padding: 120px 0; }  /* 80px en mobile */
```

### Border radius
```css
--radius-sm: 3px; --radius-md: 6px; --radius-lg: 12px; --radius-pill: 999px;
```

---

## SISTEMA DE ANIMACIONES

### Easing principal
```css
cubic-bezier(0.16, 1, 0.3, 1)   /* elástico pero controlado — todo el sitio */
```

### Scroll reveal (ScrollReveal.astro)
Sistema global via `IntersectionObserver` con `threshold: 0.15`:
```css
.reveal          /* opacity: 0 → 1, translateY(32px) → 0 — 0.7s */
.reveal-muted    /* opacity: 0 → 0.6, translateY(32px) → 0 — para textos sutiles */
.reveal-line     /* scaleX(0) → scaleX(1) — para accent bars */
.reveal-stagger  /* delays: 0s, 0.08s, 0.16s, 0.24s, 0.32s, 0.4s para hijos */
```

Clase `.is-visible` agregada por el observer cuando el elemento entra en viewport.

### Scroll-linked text reveal (Problema.astro)
Animación continua vinculada a la posición de scroll — NO basada en IntersectionObserver:
```
.scroll-reveal-text   /* opacity mapea de 0.15 a 1 según posición en viewport */
```
- Start point: 85% del viewport (empieza a revelar)
- End point: 45% del viewport (completamente revelado)
- Bidireccional: scroll down revela, scroll up revierte
- Usa `requestAnimationFrame` para performance

### Hero animations (CSS puro, no observer)
```css
.hero-reveal    /* opacity: 0, translateY(50px) → revealed — 1s con delays */
.hero-word      /* opacity: 0, translateY(110%) → revealed — 1.2s con delays */
```
Stagger delays:
- Ref line: 0.2s
- Línea 1: 0.35s / word 0.4s
- Línea 2: 0.55s / word 0.65s
- Bottom left: 0.8s
- Bottom right: 0.9s
- Scroll hint: 1.5s

### Hover transitions
- Links: `color 0.3s ease`
- Cards: `transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)` — translateY(-4px)
- Servicios nombre: `color + translateX(8px) 0.4s`
- Pilar cards: `border-color + translateY(-4px) 0.4s`

### Ambient glow animation (Hero)
```css
@keyframes glowDrift {
  0% { transform: translate(0, 0) scale(1); }
  100% { transform: translate(40px, -30px) scale(1.05); }
}
/* 16s ease-in-out infinite alternate (terracota) */
/* 20s ease-in-out infinite alternate-reverse (púrpura) */
```

### Scroll indicator (Hero)
```css
@keyframes scrollDraw {
  0% { transform: scaleY(0); opacity: 0; }
  30% { transform: scaleY(1); opacity: 0.6; }
  60% { transform: scaleY(1); opacity: 0; }
  100% { transform: scaleY(0); opacity: 0; }
}
/* 2s ease-in-out infinite */
```

---

## CURSOR CUSTOM (Cursor.astro)

Solo desktop (`@media (hover: hover) and (pointer: fine)`).

| Elemento | Size | Propiedad |
|----------|------|-----------|
| Dot | 6px | `background: var(--proma-cream-100)` |
| Ring (default) | 40px | `border: 1px solid var(--proma-cream-100)` |
| Ring (hover) | 64px | `border-color: var(--proma-terra-500)`, `background: rgba(212, 82, 26, 0.08)` |

- `mix-blend-mode: difference` en el contenedor
- Dot sigue el mouse directamente
- Ring sigue con lerp: `ringX += (mouseX - ringX) * 0.15`
- Hover activado por `a, button, input, textarea, [data-cursor-hover]`
- Dot desaparece en hover (`scale(0)`)

---

## NAVEGACIÓN (Base.astro)

### Estructura
```
proma [logo]    01 Servicios · 02 Método · 03 Estudio · 04 Trabajo    [Agendá un diagnóstico]
```

### Comportamiento
- `position: fixed`, `z-index: 100`
- Transparente sobre hero → sólida al scrollear (`scrollY > 80`)
- Scrolled: `rgba(10, 10, 15, 0.9)` + `backdrop-filter: blur(12px)` + border bottom `rgba(255,255,255,0.05)`
- Índices numéricos en `--font-mono`, 9px, opacity 0.3

### Mobile (≤768px)
- Links ocultos → toggle hamburger (2 líneas, rotan a X)
- Menú desplegable vertical debajo del nav
- CTA oculto en mobile

---

## COMPONENTES — DETALLES DE IMPLEMENTACIÓN

### Hero.astro
- Full viewport `height: 100vh`
- Doble glow ambiental: terracota (top-right, 80vw) + púrpura (bottom-left, 70vw)
- Registration marks en 4 esquinas (`.reg-mark`)
- Título con `line-height: 0.92`, segunda línea indentada `clamp(40px, 8vw, 120px)`
- Bottom bar: descripción izquierda + CTAs derecha, separados por `border-top: 1px solid rgba(242, 237, 228, 0.08)`
- CTA primario: `.btn-cta`
- CTA secundario: `.link-arrow-long` con guion largo `———→`
- SCROLL indicator centrado abajo con línea animada

### Problema.astro
- Lead text: `opacity: 0.35`, clamp dramático
- Accent bar vertical: `width: 3px`, `background: var(--proma-terra-500)`
- Body texts con scroll-linked reveal (opacity 0.15 → 1)
- Conclusión muted/strong: pattern DSI — mismo tamaño, diferente opacidad
- Glow ambiental terracota (bottom-left) + púrpura (top-right)
- Conclusión strong con `text-shadow` glow

### Servicios.astro (modo claro)
- Accordion click-to-expand, uno a la vez
- Cada servicio: ref `01 →` (60px) + nombre + expand icon `+`/`×`
- Detail panel: `max-height: 0` → `max-height: 300px`
- Detail inner: `padding-left: calc(60px + var(--space-6))` — alineado al título
- Tags de capacidades: `border: 1px solid var(--proma-cream-200)`, 10px mono
- Hover: nombre terracota + translateX(8px)

### Metodo.astro (modo claro)
- Título PROMA-4 en IBM Plex Mono gigante con dash terracota
- Grid 4 columnas (2 en tablet, 1 en mobile)
- Pilar cards con `border: 1px solid var(--proma-cream-200)`
- Accent bar animada: `scaleX(0) → scaleX(1)` cuando visible/hover
- Hover: border terracota + translateY(-4px) + nombre terracota

### Estudio.astro
- Title con Playfair italic "*límite*" + glow
- Two columns: texto izquierda + texto + claim derecha
- Claim "Human-Led. System-Driven. Intelligence-Enhanced." en terracota
- Glow ambiental terracota (top-right) + púrpura (bottom-left)
- Claim con `border-top` + `margin-top: auto`

### TrabajoPreview.astro
- Title row: título izquierda + descripción derecha alineada abajo
- Grid 2×2 de cards con glassmorphism
- FIG labels: `FIG. 01`–`FIG. 04` en mono, opacity 0.15 → 0.4 hover
- Cards: hover translateY(-4px) + border terracota + overlay tipo badge
- Arrow `→` reveal en hover
- CTA: `Ver trabajo ———→` con guion largo

### Contacto.astro
- Grid 2 columnas: título sticky izquierda + form derecha
- Registration marks top corners
- Form inputs: `border-bottom: 1px solid rgba(242, 237, 228, 0.1)` → terracota on focus
- Form grid 2×2 (1 col en mobile) + textarea full width
- Glow ambiental terracota centrado

### Footer.astro
- Statement grande (DSI pattern): opacity 0.3
- Divider: `height: 1px`, `background: var(--proma-navy-700)`, reveal-line animation
- Grid 4 columnas: logo + links + claim + email
- Version tag `v1.0` en terracota, opacity 0.4
- Legal: `opacity: 0.2`

### Trabajo page (trabajo.astro)
- Hero propio: título + subtítulo + descripción
- 4 casos alternando dark/light
- Cada caso: header (ref + tipo badge + título) + grid 2col (imagen sticky + contenido)
- Contenido: desafío + decisiones (lista con accent bar items) + resultado
- CTA final: "¿Tu próximo proyecto necesita proceso?"

### ScrollReveal.astro
Contiene:
1. Estilos globales `.reveal`, `.reveal-muted`, `.reveal-line`, `.reveal-stagger`
2. Registration marks globales `.reg-mark` (`.reg-tl`, `.reg-tr`, `.reg-bl`, `.reg-br`)
3. Script: `IntersectionObserver` con `threshold: 0.15`, `rootMargin: '0px 0px -40px 0px'`

---

## RECURSOS GRÁFICOS DE IDENTIDAD

**Accent bar:** `border-left: 3px solid var(--proma-terra-500)` (Problema) o `height: 1px` scaleX animated (Método)

**Punto de unidades:** siempre en `#D4521A`
```html
<span class="font-wordmark">pro</span>
<span style="color:#D4521A">.</span>
<span class="font-mono">pack</span>
```

**Elementos de trazabilidad** — siempre IBM Plex Mono:
- Refs de sección: `REF · SERVICIOS`, `REF · QUIÉNES SOMOS`, `REF · PORTFOLIO`
- Marcadores numéricos: `01 →`, `02 →` en servicios y método
- FIG labels: `FIG. 01`, `FIG. 02` en cards de trabajo
- Version: `v1.0` en footer
- Tipo badges: `PACKAGING`, `BRANDING`, `WEB`

**Registration marks (.reg-mark):**
```css
width: 20px; height: 20px; opacity: 0.1;
/* Línea vertical + horizontal formando una cruz */
/* Color: var(--proma-cream-100) */
/* Posiciones: 24px desde cada esquina */
```
Usados en: Hero (4 esquinas), Contacto (top 2), Trabajo hero (top 2).

**Text glow en itálicas Playfair:**
```css
text-shadow: 0 0 30px rgba(212, 82, 26, 0.25), 0 0 60px rgba(212, 82, 26, 0.08);
```
Aplicado consistentemente a todas las palabras en Playfair italic terracota.

---

## ASSETS DE MARCA

Ubicación: `/public/brand/`

| Archivo | Uso |
|---------|-----|
| `proma-favicon.svg` | Favicon — `<link rel="icon">` en el head |
| `proma-wordmark-dark.svg` | Wordmark sobre fondos oscuros |
| `proma-wordmark-light.svg` | Wordmark sobre fondos claros |

Regla de uso del wordmark:
- Secciones modo oscuro → `proma-wordmark-light.svg` (texto claro sobre fondo oscuro)
- Secciones modo claro → `proma-wordmark-dark.svg` (texto oscuro sobre fondo claro)
- Nav → `proma-wordmark-light.svg` (siempre modo oscuro)
- Footer → `proma-wordmark-light.svg`

---

## COPY DEL SITIO

### NAV
```
proma    01 Servicios · 02 Método · 03 Estudio · 04 Trabajo    [Agendá un diagnóstico]
```

### HERO
```
REF · ESTUDIO DE DISEÑO · BUENOS AIRES · LATAM

El proceso
es el diseño.

Diseño con método para organizaciones
que no pueden permitirse el desorden.

[Agendá un diagnóstico]    Conocé el método ———→
```

### EL PROBLEMA
```
El diseño sin proceso tiene un costo medible.

│ Retrabajos que se repiten. Cambios sin registro.
│ Aprobaciones sin criterio. Entregas que vuelven.
│
│ No es un problema de talento.
│ Es un problema de sistema.
│
│ Lo sabemos porque venimos del entorno donde ese problema
│ tiene consecuencias reales: industrias reguladas,
│ donde cada error detiene una línea de producción,
│ frena un lanzamiento o falla una auditoría.
│
│ Cuarenta años combinados trabajando en ese límite
│ nos enseñaron una sola cosa:

Sin proceso, el diseño falla.
Con proceso, escala.
```

### SERVICIOS
```
REF · SERVICIOS
Cómo trabajamos

01 → Diagnóstico & Consultoría                    +
     LA ENTRADA
     Antes de diseñar, entendemos. No asumimos. Medimos.
     [Auditoría visual] [Análisis de procesos] [Roadmap]

02 → Packaging
03 → Branding
04 → Web & Aplicaciones
05 → Mantenimiento & Retainer
```

### MÉTODO
```
REF · FRAMEWORK
PROMA-4     El framework que gobierna cada proyecto.

01 ——————    02 ——————    03 ——————    04 ——————
Calidad      Documentación Proceso     Inteligencia
Criterios... Todo regis... Flujos...   IA como...
```

### ESTUDIO
```
REF · QUIÉNES SOMOS

Cuarenta años
en el límite
del diseño.

[col 1]                              [col 2]
No llegamos al diseño desde          proma es la aplicación de ese
la creatividad...                    conocimiento a todo el diseño...

                                     Human-Led. System-Driven.
                                     Intelligence-Enhanced.
```

### TRABAJO PREVIEW
```
REF · PORTFOLIO
Algunos trabajos              Diseño con criterio documentado.

[FIG. 01 card] [FIG. 02 card]
[FIG. 03 card] [FIG. 04 card]

Ver trabajo ———→
```

### CONTACTO
```
REF · DIAGNÓSTICO INICIAL

¿Cuánto le cuesta el             [Nombre] [Empresa]
desorden a tu organización?       [Industria] [Email]
                                  [Desafío]
El primer paso es un              [Agendá un diagnóstico →]
diagnóstico...
```

### FOOTER
```
Diseño con proceso para organizaciones
que no pueden permitirse el desorden.

————————————————————————————————————————

proma    Diagnóstico & Consultoría    Human-Led.         hola@pro.ma
         Packaging                    System-Driven.
         Branding                     Intelligence-Enhanced.
         Web & Aplicaciones
         Mantenimiento & Retainer

© 2026 pro.ma Studio · Buenos Aires · LATAM                    v1.0
```

### Página /trabajo — 4 casos
1. **FIG. 01** — Sistema de packaging regulatorio (PACKAGING)
2. **FIG. 02** — Identidad visual integral (BRANDING)
3. **FIG. 03** — Plataforma digital de producto (WEB)
4. **FIG. 04** — Manual de sistema gráfico (BRANDING)

Cada caso: desafío + decisiones (lista) + resultado.
Sin fechas, sin nombres de clientes inventados.

---

## INSTRUCCIONES PARA CLAUDE CODE

1. Usá siempre `tokens.css` — nunca hex directos, siempre variables semánticas
2. Determiná el modo según la sección (ver tabla de modos arriba)
3. Grantha Sangam MN + Playfair Display → exclusivo del wordmark y acentos tipográficos
4. Playfair Display Italic → usá como acento dentro de títulos (palabras clave en terracota con glow)
5. IBM Plex Mono → trazabilidad técnica, refs, sufijos de unidades, marcadores numéricos
6. Plus Jakarta Sans → todo lo demás
7. Acento `#D4521A` → CTAs, accent bars, punto de unidades, refs técnicas, itálicas de acento, text glow
8. Acento NO va en el wordmark principal — wordmark siempre monocromático
9. Unidades NO tienen logo propio
10. No inventar métricas ni clientes
11. No decir "farmacéutica" — decir "industrias reguladas"
12. Stack: Astro + CSS vanilla con tokens.css
13. Easing: `cubic-bezier(0.16, 1, 0.3, 1)` para todas las transiciones
14. Toda sección oscura debe tener al menos un glow ambiental (`radial-gradient` con terracota)
15. Registration marks en secciones clave (hero, contacto)
16. Scroll reveal `.reveal` en todos los bloques de contenido
17. Texto body en secciones oscuras: `opacity: 0.5` (o scroll-linked reveal en Problema)
18. Text glow (`text-shadow`) en todas las itálicas Playfair terracota
19. Fondos oscuros NUNCA planos — siempre con gradientes sutiles de profundidad
20. Hover states con transformaciones (translateX, translateY) además de cambio de color

---

## 10 PRINCIPIOS VISUALES — APLICAR SIEMPRE

**1 — Tipografía expresiva, no solo funcional**
Los títulos son el diseño. Escala dramática con `clamp()` — mínimo 52px, máximo 155px en hero.
Contrastes de escala: títulos enormes vs. cuerpo 14-15px.
Playfair Display italic como acento dentro de frases clave con text-shadow glow terracota.

**2 — Espacio generoso como decisión**
Padding vertical entre secciones: 120px desktop, 80px mobile.
El espacio comunica precisión, no vacío.

**3 — Luz ambiental como recurso visual**
Gradientes radiales sutiles como "luz" sobre fondos oscuros.
Doble layer: terracota (calidez) + púrpura (profundidad).
Opacidades: 0.03–0.08. Nunca visibles como elemento, solo como atmósfera.
Hero tiene glow animado con `glowDrift`.

**4 — Animaciones fluidas y con personalidad**
Scroll-triggered reveals en TODAS las secciones.
Scroll-linked text reveal en Problema (bidireccional, vinculado a posición).
Hero con staggered word reveals.
Cubic-bezier `(0.16, 1, 0.3, 1)` como easing universal.

**5 — Cursor custom como firma de interacción**
Dot (6px) + ring (40px→64px) con lerp. `mix-blend-mode: difference`.
Solo desktop. Ring expande y se colorea terracota en hover.

**6 — Navegación transparente → sólida**
Nav transparente sobre hero, transiciona a sólida con blur al scrollear.
`backdrop-filter: blur(12px)`. Sin dropdown. Sin hamburger en desktop.
Índices numéricos `01`–`04` en mono.

**7 — Datos y refs siempre en mono**
Cualquier número, referencia técnica, versión o métrica: IBM Plex Mono, color terracota.
Marcadores de sección `01 →`, FIG labels, REF tags.

**8 — Servicios como lista interactiva**
Accordion click-to-expand con hover reveal.
Nombre en display grande + detalle expandible + tags de capacidades.

**9 — Glassmorphism controlado para cards**
`rgba(255,255,255,0.03)` + `backdrop-filter: blur(2px)` + border sutil.
Solo en cards de trabajo. No en toda la interfaz.

**10 — Mobile: misma jerarquía, no versión reducida**
Títulos bajan con `clamp()` pero mantienen peso visual.
Animaciones se simplifican pero no desaparecen.
Grids colapsan a 1 columna. Sticky elements pasan a `static`.

---

## QUÉ EVITAR EXPLÍCITAMENTE

- Sitio plano, estático, tipo template corporativo
- Ilustraciones o iconografía decorativa
- Testimonios con fotos de perfil
- Contadores animados de métricas
- Secciones "¿por qué elegirnos?" con ícono + título + descripción
- Videos de fondo en el hero
- Chat widgets o pop-ups
- Fondos oscuros 100% planos sin profundidad ni glow
- Hover states solo con cambio de color — usar transformaciones
- Grid crosshair patterns (demasiado SaaS)
- Bordes redondeados en cards (usar esquinas rectas)
- Tono startup — mantener voz técnica y precisa

---

## REFERENCIAS VISUALES

### Referencias analizadas
- **designsystems.international** — austeridad técnica, tipografía como único elemento de identidad
- **raggededge.com** — copy como diseño, paleta terrosa
- **loloagency.com** — editorial limpio, espacio generoso
- **layertwo.design** — economía de elementos
- **linear.app / vercel.com** — negro profundo, tipografía técnica, transiciones lentas

### Patrones de layout implementados
- **Pattern A — Hero full viewport** con título dramático + CTAs en bottom bar
- **Pattern B — Accordion interactivo** para lista de servicios
- **Pattern C — Marcador técnico** `01 →` en mono como prefijo
- **Pattern D — Muted + strong** misma escala, diferente opacidad
- **Pattern E — CTA texto con flecha** `VER TRABAJO ———→`
- **Pattern F — Footer con statement** frase grande antes de los links
