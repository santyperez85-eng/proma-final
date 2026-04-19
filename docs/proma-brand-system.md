# proma — Sistema de Marca v2.0
## Documento transferible · Umbral

> Este documento es autónomo. No requiere acceso al código fuente para ser usado.
> Válido para onboarding de diseñadores, proveedores, imprentas, agencias externas y otros modelos de IA.

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
No decir "farmacéutica" — decir "industrias reguladas" o "entornos regulados".

---

## WORDMARK

```
p  r  o  m  a
─────────────
Grantha  Playfair  Grantha
Sangam   Display   Sangam
MN Reg   Italic    MN Reg
```

La **m** en Playfair Display Italic es el umbral tipográfico — lo humano dentro del sistema.

### Reglas del wordmark
- **Siempre monocromático** — sin color diferencial en ninguna letra
- El acento `#D4521A` NO aparece en el wordmark principal
- Sin punto entre "pro" y "ma" — en ninguna aplicación del logo

### Color del wordmark por modo
| Modo | Texto | Fondo |
|------|-------|-------|
| Oscuro | `#F2EDE4` | `#0A0A0F` |
| Claro | `#2C2420` | `#FAF8F4` |

### Versión reducida
A 32px o menos: solo **pm** — p en Grantha Sangam MN, m en Playfair Display Italic.
Usar para: favicon, avatar, aplicaciones pequeñas.

### Assets de marca
```
/brand/proma-wordmark-light.svg   → sobre fondos oscuros
/brand/proma-wordmark-dark.svg    → sobre fondos claros
/brand/proma-favicon.svg          → favicon
```

---

## SISTEMA DE NOMENCLATURA DE UNIDADES

El punto vive en las extensiones del estudio, no en el wordmark madre.

```
pro.pack   →  packaging gráfico, estructural, regulatorio
pro.brand  →  branding e identidad visual
pro.web    →  web y aplicaciones
pro.ops    →  DesignOps y mantenimiento
```

### Tipografía de las unidades
```
pro        →  Grantha Sangam MN Regular
.          →  color #D4521A  ← aquí vive el acento terracota
pack       →  IBM Plex Mono
```

**Las unidades NO tienen logo propio.** Su identidad es la lógica de nomenclatura.

---

## PALETA DE COLORES

### Primitivos

| Token | Hex | Rol |
|-------|-----|-----|
| navy-900 | `#0A0A0F` | Near-black — fondo principal modo oscuro |
| navy-800 | `#111118` | Surface elevada oscura |
| navy-700 | `#1A1A24` | Bordes y superficies oscuras |
| terra-500 | `#D4521A` | Acento terracota principal |
| terra-700 | `#B5420F` | Acento hover/pressed |
| cream-50 | `#FAF8F4` | Fondo principal modo claro |
| cream-100 | `#F2EDE4` | Texto principal sobre oscuro |
| cream-200 | `#EAE6DE` | Bordes y superficies claras |
| text-dark | `#2C2420` | Texto principal sobre claro |

### Semánticos por modo

**Modo oscuro** (`data-mode="dark"`)
| Rol | Token | Hex |
|-----|-------|-----|
| Fondo | navy-900 | `#0A0A0F` |
| Surface | navy-700 | `#1A1A24` |
| Acento | terra-500 | `#D4521A` |
| Acento hover | terra-700 | `#B5420F` |
| Texto principal | cream-100 | `#F2EDE4` |
| Borde | navy-700 | `#1A1A24` |

**Modo claro** (`data-mode="light"`)
| Rol | Token | Hex |
|-----|-------|-----|
| Fondo | cream-50 | `#FAF8F4` |
| Surface | cream-200 | `#EAE6DE` |
| Acento | terra-500 | `#D4521A` |
| Acento hover | terra-700 | `#B5420F` |
| Texto principal | text-dark | `#2C2420` |
| Borde | cream-200 | `#EAE6DE` |

### Reglas de color
- Fondo oscuro → texto siempre `#F2EDE4`
- Fondo claro → texto siempre `#2C2420`
- Acento `#D4521A` funciona sobre ambos modos
- **La elección de modo es una decisión de diseño, no del usuario**

### Valores rgba (no tokenizados — para uso directo)

```css
/* Glow ambiental terracota — fondos oscuros */
rgba(212, 82, 26, 0.05)   /* suave */
rgba(212, 82, 26, 0.08)   /* intenso */

/* Glow púrpura secundario — profundidad */
rgba(120, 80, 200, 0.03)

/* Text-shadow — itálicas Playfair en terracota */
0 0 30px rgba(212, 82, 26, 0.25), 0 0 60px rgba(212, 82, 26, 0.08)

/* Bordes sutiles en fondos oscuros */
rgba(242, 237, 228, 0.06)   /* sutil */
rgba(242, 237, 228, 0.10)   /* medio */

/* Glassmorphism — cards de portfolio */
background: rgba(255, 255, 255, 0.03)
border: 1px solid rgba(242, 237, 228, 0.04)

/* Nav scrolled */
rgba(10, 10, 15, 0.9)
```

---

## TIPOGRAFÍA

### Familias

| Familia | Rol | Notas |
|---------|-----|-------|
| Grantha Sangam MN | Wordmark (p, r, o, a) | Sistema macOS/iOS. Fallback: Georgia |
| Playfair Display Italic | Wordmark (m) + acentos en títulos | El umbral tipográfico |
| Plus Jakarta Sans | Todo el sistema (títulos, cuerpo, UI) | Google Fonts |
| IBM Plex Mono | Trazabilidad técnica, refs, marcadores | Google Fonts |

### Uso de Playfair Display Italic
No es solo para el wordmark. Se usa como **acento tipográfico** dentro de frases clave:
- Siempre en `color: #D4521A` (terracota)
- Siempre con text-shadow glow: `0 0 30px rgba(212, 82, 26, 0.25), 0 0 60px rgba(212, 82, 26, 0.08)`
- Ejemplos: "*es* el diseño", "Con proceso, *escala*", "en el *límite* del diseño", "Sin compromiso. Con *criterio*."

### Uso de IBM Plex Mono
Para cualquier referencia técnica, número de versión, marcador de sección:
- REF tags: `REF · SERVICIOS`, `REF · QUIÉNES SOMOS`
- Marcadores numéricos: `01 →`, `02 →`, `FIG. 01`
- Versiones: `v1.0`, `v2.0`
- Labels de tipo: `PACKAGING`, `BRANDING`, `WEB`

### Escala tipográfica — Plus Jakarta Sans

| Clase | Tamaño | Peso | Tracking | Line-height |
|-------|--------|------|----------|-------------|
| t1 | 36px | 700 | -0.04em | 1.15 |
| t2 | 28px | 600 | -0.02em | 1.2 |
| t3 | 22px | 600 | 0 | 1.3 |
| t4 | 18px | 500 | 0 | 1.4 |
| body | 14px | 400 | 0 | 1.6 |
| small | 12px | 400 | 0 | 1.5 |
| label-ui | 11px | 500 | +0.08em | 1 (uppercase) |

### Escala tipográfica — IBM Plex Mono

| Clase | Tamaño | Tracking |
|-------|--------|----------|
| mono-lg | 15px | +0.06em |
| mono-md | 12px | +0.04em |
| mono-sm | 11px | +0.02em |

### Tamaños dinámicos (sitio web — clamp)

| Elemento | Tamaño | Peso |
|----------|--------|------|
| Hero title | `clamp(52px, 11.5vw, 155px)` | 700 |
| Títulos de sección | `clamp(40px, 6vw, 80px)` | 700 |
| PROMA-4 display | `clamp(48px, 7vw, 100px)` | 400 (mono) |
| Problema lead | `clamp(28px, 4vw, 52px)` | 700 |
| Contacto title | `clamp(28px, 3.5vw, 44px)` | 700 |
| Servicios nombre | `clamp(22px, 3vw, 36px)` | 600 |

---

## MODO: LÓGICA DE USO

| Modo | Señal | Aplicar cuando |
|------|-------|----------------|
| **Oscuro** | Impacto · Autoridad · Presentación | Hero, presentaciones, pitch decks, portadas, brand decks, secciones de impacto |
| **Claro** | Lectura · Proceso · Documentación | Informes, manuales, emails, documentación técnica, contenido de lectura extendida |

**En el sitio web:**
- Oscuro: Hero, El Problema, Estudio, Trabajo, Contacto, Footer, `/servicios`, `/trabajo/[slug]`
- Claro: Servicios accordion (home), Método PROMA-4

---

## ESPACIADO

Base 4px. Escala:
`4 · 8 · 12 · 16 · 20 · 24 · 32 · 40 · 48 · 64 · 80 · 96`

- Container: max-width 1200px, padding lateral 24px
- Secciones: 120px desktop / 80px mobile
- Border radius: 3px (sm) · 6px (md) · 12px (lg) · 999px (pill)
- Cards de trabajo y elementos de diseño: **sin border radius (esquinas rectas)**

---

## RECURSOS GRÁFICOS DE IDENTIDAD

### Accent bar
```css
/* Vertical — Problema, servicios */
border-left: 3px solid #D4521A

/* Horizontal animada — Método */
height: 1px; background: #D4521A; transform: scaleX(0 → 1)
```

### Punto del sistema de unidades
```html
<span style="font-family: 'Grantha Sangam MN'">pro</span>
<span style="color: #D4521A">.</span>
<span style="font-family: 'IBM Plex Mono'">pack</span>
```

### Registration marks
Cruces finas de 20px en esquinas de secciones clave. Color: `#F2EDE4`, opacity: 0.1.
Se usan en: Hero (4 esquinas), Contacto (2 superiores), `/trabajo` hero (2 superiores).

### CTA con flecha larga
```
Ver trabajo ———→
Agendá un diagnóstico ———→
```
El guión largo `———→` es parte del sistema gráfico — no usar `→` solo.

---

## ANIMACIONES — PRINCIPIOS

- **Easing universal:** `cubic-bezier(0.16, 1, 0.3, 1)` — elástico pero controlado
- **Scroll reveal:** opacity 0→1 + translateY(32px→0), 0.7s, threshold 0.15
- **Hover transforms:** siempre translateX u Y además del cambio de color
- **Fondos oscuros:** nunca planos — siempre radial-gradient terracota (atmospheric glow)
- **Texto body oscuro:** opacity 0.5 base, aumenta con interacción o scroll

---

## SERVICIOS — ARQUITECTURA

### Estructura de entrada y salida

```
[CÓMO ENTRAMOS]
01 → Diagnóstico & Consultoría   — La entrada. Antes de cualquier proyecto.

[QUÉ HACEMOS]
02 → Packaging                   — Gráfico · Estructural · Regulatorio
03 → Branding                    — Identidad · Sistema · Aplicaciones
04 → Web & Aplicaciones          — Sitios · Plataformas · UX/UI

[CÓMO NOS QUEDAMOS]
05 → Mantenimiento & Retainer    — El sistema vivo
```

### Lo que NO va en el menú principal
- Señalética → dentro de Branding
- Diseño de stands → dentro de Branding
- Motion graphics → capacidad de producción, no servicio
- UX/UI → método dentro de Web & Aplicaciones
- Diseño estructural → dentro de Packaging

---

## VOZ Y TONO

### Lo que decimos
- Proceso, sistema, criterio, documentación, registro
- Industrias reguladas, entornos regulados
- 40 años de experiencia combinada
- Diseño que funciona sin que estemos presentes

### Lo que NO decimos
- "Farmacéutica" (decir "industrias reguladas")
- Métricas de mercado como si fueran resultados propios
- Cupos operativos internos
- "Magia", "inspiración", "feeling", "pasión"
- Testimonios con fotos de perfil
- Contadores animados de métricas
- "¿Por qué elegirnos?" con ícono + descripción

### Registro de voz
Técnico y preciso. No startup. No corporativo genérico.
El copy se comporta como el diseño: sin ornamentación innecesaria.

---

## 10 PRINCIPIOS VISUALES

1. **Tipografía expresiva** — Los títulos son el diseño. Escala dramática. Playfair italic como acento con glow.
2. **Espacio generoso** — 120px entre secciones. El espacio comunica precisión.
3. **Luz ambiental** — Glow radial en oscuro: terracota (calidez) + púrpura (profundidad). Nunca visible como elemento.
4. **Animaciones con personalidad** — Scroll-triggered reveals en toda sección. Easing universal.
5. **Cursor custom** — Dot 6px + ring 40px. Solo desktop. Ring → 64px en hover, color terracota.
6. **Nav transparente → sólida** — Transiciona con blur al scrollear (backdrop-filter: blur(12px)).
7. **Datos en mono** — Cualquier número, ref o versión: IBM Plex Mono, terracota.
8. **Servicios como lista interactiva** — Accordion expandible, no grilla de cards.
9. **Glassmorphism controlado** — Solo en cards de portfolio. No en toda la interfaz.
10. **Mobile: misma jerarquía** — Títulos bajan con clamp pero mantienen peso visual.

---

## LO QUE HAY QUE EVITAR EXPLÍCITAMENTE

- Sitio plano, estático, tipo template corporativo
- Ilustraciones o iconografía decorativa
- Videos de fondo en el hero
- Chat widgets o pop-ups
- Fondos oscuros 100% planos sin profundidad
- Hover states solo con cambio de color (usar transformaciones)
- Bordes redondeados en cards (esquinas rectas)
- Grid crosshair patterns (demasiado SaaS)
- Tono startup

---

## REFERENCIAS VISUALES

| Referencia | Qué se tomó |
|------------|-------------|
| designsystems.international | Austeridad técnica, tipografía como identidad |
| raggededge.com | Copy como diseño, paleta terrosa |
| loloagency.com | Editorial limpio, espacio generoso |
| layertwo.design | Economía de elementos |
| linear.app / vercel.com | Negro profundo, tipografía técnica, transiciones lentas |

---

## VERSIÓN

```
proma-brand-system v2.0
Fecha: 2026-04-03
Estado: Producción
```
