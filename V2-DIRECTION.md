# proma web v2 — Criterios de dirección editorial

Rama: `feature/proma-web-v2`
Estado: en desarrollo · no merge a main sin revisión

---

## Posición visual

La v2 explora una dirección editorial-técnica que toma el lenguaje de documentación
regulada como estética visual, no como certificación. El referente no es un dashboard
SaaS ni un portfolio de agencia. El referente es un documento de proceso bien impreso.

---

## 1 — Sistema de badges

Los badges son campos de estado del sistema documental de proma, no certificaciones
del servicio ni claims de calidad ante terceros.

**Vocabulario permitido:**
```
STATUS · DOCUMENTED
STATE · TRACEABLE
MODE · CONTROLLED
OUTPUT · SYSTEM READY
VERSION · v2.0
REF · SERVICE
VALIDATED FRAMEWORK
PROCESS · ACTIVE
FIELD · DEFINED
LOG · COMPLETE
```

**Regla de oro:** si el badge podría confundirse con un sello ISO o GMP real, no va.
El texto debe sonar a sistema interno, no a certificadora externa.

**Apariencia:** mono 10px · borde 1px sólido · sin border-radius o radius-sm (3px max)
No relleno de color sólido. Fondo: `rgba(212, 82, 26, 0.06)` máximo.
Aparecen como campos cargados/validados — sin flip ni bounce.

---

## 2 — Hero

El hero mantiene su fuerza tipográfica como centro visual.
"El proceso es el diseño." no se mueve. La escala dramática se preserva.

La fotografía Umbral Industrial entra como:
- Textura/máscara lateral (no cubre el texto principal)
- Capa de profundidad con `mix-blend-mode: overlay` o `multiply` a opacidad baja
- Detalle de esquina o franja lateral — nunca fondo pleno

Si en algún punto la fotografía compite con la lectura del título, la fotografía cede.

---

## 3 — Servicios

No cards con título + ícono + descripción. No pricing tiers. No feature lists tipo SaaS.

Formato: ficha técnica desplegable con estructura documental:
```
INPUT      ← qué recibe el servicio como insumo
CONTROL    ← qué criterios rigen el proceso
OUTPUT     ← qué entrega
STATE      ← en qué estado queda el sistema del cliente
```

Cada fila es un renglón editorial, no un card independiente.
La expansión muestra la ficha. El colapsado muestra solo el número y el nombre.
Tipografía del nombre: display grande con tracking negativo.
Tipografía de la ficha: mono para labels, sans para valores.

---

## 4 — Animaciones

Regla general: sobrias, documentales, con propósito. Evitar lo demostrativo.

**Permitido:**
- Líneas horizontales/verticales que se extienden (`scaleX` o `scaleY` desde 0)
- Dot matrix que se ordena: opacidad 0 → valor del token, con delay stagger
- Reveals documentales: máscara vertical (`clip-path` de arriba hacia abajo)
- Scroll-linked subtle: opacity mapeada a posición, bidireccional
- Before/after con línea de intervención: drag o scroll-linked
- Badges que aparecen: opacity 0 → 1 + micro translateY(4px), sin rebote

**Evitar:**
- Flip-in (rotateY, perspective transforms llamativos)
- Bounce o spring exagerado
- Particle systems
- Morphing de formas
- Cualquier animación que distrae del texto

**Easing universal:** `cubic-bezier(0.16, 1, 0.3, 1)` — sin excepción

---

## 5 — Dot matrix

El patrón dot matrix es ambiental, como los glows en v1. Nunca protagonista.

```
--dot-size:     1px
--dot-gap:      24px
--dot-opacity:  0.06   (default) / 0.12 (énfasis puntual)
```

Color: `var(--proma-cream-100)` sobre oscuro.
Se usa en: Hero (capa de fondo), secciones de transición, ficha técnica de servicios.

---

## 6 — Fotografía Umbral Industrial

Criterios de selección si/cuando se incorpora fotografía:
- Sin personas reconocibles
- Sin marcas de cliente
- Contexto: superficies de trabajo, instrumentos de medición, impresos técnicos,
  materiales de packaging en proceso, documentación impresa
- Tratamiento: alto contraste, blanco y negro o temperatura muy baja
- Integración: máscara, textura, capa — nunca imagen a sangre como fondo de texto

---

## Lo que no va en v2 (igual que en v1)

- Secciones "¿por qué elegirnos?"
- Testimonios con foto de perfil
- Contadores animados de métricas
- Videos de fondo
- Chat widgets
- Borders redondeados en fichas
- Íconos decorativos
- Tono startup

---

*Este documento es la guía de decisión para cada componente v2.
Si una elección visual no pasa estos filtros, no entra.*
