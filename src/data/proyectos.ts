export interface Imagen {
  src: string;
  alt: string;
  orientacion: 'h' | 'v';
}

export interface SeccionGaleria {
  titulo: string;
  texto: string;
  imagenes: Imagen[];
}

export interface Proyecto {
  slug: string;
  ref: string;
  titulo: string;
  tipo: string;
  tagline: string;
  desafio: string;
  resultado: string;
  portada: Imagen;
  secciones: SeccionGaleria[];
}

export const proyectos: Proyecto[] = [
  {
    slug: 'amalita',
    ref: 'FIG. 01',
    titulo: 'Fundación Amalita',
    tipo: 'BRANDING',
    tagline: 'Sistema de identidad para institución cultural',
    desafio:
      'Construir el sistema de identidad visual completo para una institución cultural con múltiples puntos de contacto: publicaciones, señalética, entorno web, redes sociales y comunicación institucional. Cada pieza debía funcionar como parte de un sistema, no como decisión aislada.',
    resultado:
      'Una identidad que funciona en todos los medios sin perder coherencia. Desde el signo marcario hasta el fanzine, el sistema sostiene cada aplicación.',
    portada: {
      src: '/trabajo/caso amalita - portada.jpg',
      alt: 'Portada sistema de identidad Amalita',
      orientacion: 'h',
    },
    secciones: [
      {
        titulo: 'Sistema marcario',
        texto:
          'La identidad parte de un signo marcario con lógica modular. La paleta cromática y el sistema de iconos definen las reglas de aplicación para todos los puntos de contacto.',
        imagenes: [
          { src: '/trabajo/caso amalita - signo marcario.jpg', alt: 'Signo marcario', orientacion: 'h' },
          { src: '/trabajo/caso amalita - iconos.jpg', alt: 'Sistema de iconos', orientacion: 'h' },
        ],
      },
      {
        titulo: 'Comunicación gráfica',
        texto:
          'Afiches, folletos y material de difusión diseñados como sistema. Cada pieza respeta la grilla y las jerarquías tipográficas del manual.',
        imagenes: [
          { src: '/trabajo/caso amalita - afiches principales.jpg', alt: 'Afiches principales', orientacion: 'h' },
          { src: '/trabajo/caso amalita - afiches.jpg', alt: 'Sistema de afiches', orientacion: 'h' },
          { src: '/trabajo/caso amalita - afiches comparativos.jpg', alt: 'Afiches comparativos', orientacion: 'v' },
          { src: '/trabajo/caso amalita - afiche 2.jpg', alt: 'Afiche variante', orientacion: 'h' },
          { src: '/trabajo/caso amalita - afiches 2.jpg', alt: 'Afiches variante 2', orientacion: 'h' },
        ],
      },
      {
        titulo: 'Editorial',
        texto:
          'Publicaciones de alta complejidad: catálogo patrimonial, fanzine y postales. El sistema se adapta sin perder coherencia.',
        imagenes: [
          { src: '/trabajo/caso amalita - folletos.jpg', alt: 'Folletos institucionales', orientacion: 'h' },
          { src: '/trabajo/caso amalita - folletos 2.jpg', alt: 'Folletos variante', orientacion: 'h' },
          { src: '/trabajo/caso amalita - catalogo patrimonial.jpg', alt: 'Catálogo patrimonial', orientacion: 'v' },
          { src: '/trabajo/caso amalita - fanzine.jpg', alt: 'Fanzine editorial', orientacion: 'v' },
          { src: '/trabajo/caso amalita - postales.jpg', alt: 'Postales', orientacion: 'h' },
        ],
      },
      {
        titulo: 'Medios y publicidad',
        texto:
          'Banners, newsletter y piezas de comunicación. Las mismas reglas aplicadas a formatos distintos.',
        imagenes: [
          { src: '/trabajo/caso amalita - banners.jpg', alt: 'Sistema de banners', orientacion: 'h' },
          { src: '/trabajo/caso amalita - banners y publicidad.jpg', alt: 'Banners y publicidad', orientacion: 'h' },
          { src: '/trabajo/caso amalita - newsletter.jpg', alt: 'Newsletter', orientacion: 'v' },
        ],
      },
      {
        titulo: 'Entorno digital',
        texto:
          'Web y redes sociales operando bajo el mismo sistema visual. La identidad se mantiene en cada plataforma.',
        imagenes: [
          { src: '/trabajo/caso amalita - diseno web.jpg', alt: 'Diseño web', orientacion: 'h' },
          { src: '/trabajo/caso amalita - redes.jpg', alt: 'Redes sociales', orientacion: 'v' },
          { src: '/trabajo/caso amalita - redes transmedia.jpg', alt: 'Estrategia transmedia', orientacion: 'v' },
        ],
      },
      {
        titulo: 'Espacio físico',
        texto:
          'Señalética que integra el sistema gráfico al espacio. La identidad se extiende más allá de lo bidimensional.',
        imagenes: [
          { src: '/trabajo/caso amalita - senaletica.jpg', alt: 'Señalética', orientacion: 'h' },
        ],
      },
    ],
  },
  {
    slug: 'portal-chas',
    ref: 'FIG. 02',
    titulo: 'Portal Chas',
    tipo: 'BRANDING',
    tagline: 'Identidad y señalética para proyecto urbano',
    desafio:
      'Diseñar el sistema de identidad y señalética para Portal Chas, un proyecto de intervención urbana. El sistema debía funcionar en el espacio físico, la comunicación pública y el entorno digital con la misma lógica.',
    resultado:
      'Un sistema de identidad urbana que habita el espacio físico y digital con la misma lógica. La identidad se vuelve orientación.',
    portada: {
      src: '/trabajo/portal chas - portada.gif',
      alt: 'Portada Portal Chas',
      orientacion: 'h',
    },
    secciones: [
      {
        titulo: 'Marca',
        texto:
          'La identidad de Portal Chas nace del barrio. El signo y el sistema visual traducen la escala urbana a un lenguaje gráfico propio.',
        imagenes: [
          { src: '/trabajo/portal chas - marca.jpg', alt: 'Marca Portal Chas', orientacion: 'h' },
        ],
      },
      {
        titulo: 'Orientación y señalética',
        texto:
          'Pictogramas, nomenclador y mapas de recorrido diseñados como sistema de orientación integral. Cada pieza funciona sola y en conjunto.',
        imagenes: [
          { src: '/trabajo/portal chas - pictogramas.gif', alt: 'Sistema de pictogramas', orientacion: 'h' },
          { src: '/trabajo/portal chas - nomenclador.jpg', alt: 'Sistema nomenclador', orientacion: 'h' },
          { src: '/trabajo/portal chas - mapa de escalas.jpg', alt: 'Mapa de escalas', orientacion: 'h' },
          { src: '/trabajo/portal chas - mapa de mano.jpg', alt: 'Mapa de mano', orientacion: 'h' },
          { src: '/trabajo/portal chas - mapa recorrido.jpg', alt: 'Mapa de recorrido', orientacion: 'h' },
        ],
      },
      {
        titulo: 'Comunicación',
        texto:
          'Afiches y postales de comunicación pública. Alto impacto visual con la misma lógica del sistema.',
        imagenes: [
          { src: '/trabajo/portal chas - afiches principales.jpg', alt: 'Afiches principales', orientacion: 'v' },
          { src: '/trabajo/portal chas - afiches en contexto.jpg', alt: 'Afiches en contexto urbano', orientacion: 'h' },
          { src: '/trabajo/portal chas - postales.jpg', alt: 'Postales', orientacion: 'h' },
        ],
      },
      {
        titulo: 'Editorial y digital',
        texto:
          'Libro de cuentos del barrio y sitio web. El sistema se extiende a la narrativa editorial y la presencia digital.',
        imagenes: [
          { src: '/trabajo/portal chas - libro cuentos.jpg', alt: 'Libro de cuentos', orientacion: 'h' },
          { src: '/trabajo/portal chas - libro cuentos 2.gif', alt: 'Libro de cuentos interior', orientacion: 'h' },
          { src: '/trabajo/portal chas - sitio web.gif', alt: 'Sitio web', orientacion: 'h' },
        ],
      },
    ],
  },
  {
    slug: 'vidas-al-volante',
    ref: 'FIG. 03',
    titulo: 'Vidas al Volante',
    tipo: 'CAMPAÑA',
    tagline: 'Identidad visual para campaña de seguridad vial',
    desafio:
      'Diseñar el sistema visual de una campaña de seguridad vial que debía funcionar en múltiples medios simultáneamente: vía pública, redes sociales, web, piezas impresas y merchandise.',
    resultado:
      'Una campaña con identidad visual cohesiva que amplifica el mensaje en todos los puntos de contacto. El sistema sostiene la campaña completa.',
    portada: {
      src: '/trabajo/vidas al volante - portada.jpg',
      alt: 'Portada Vidas al Volante',
      orientacion: 'h',
    },
    secciones: [
      {
        titulo: 'Identidad de campaña',
        texto:
          'Un sistema visual propio para la campaña de seguridad vial. Afiches de alto impacto diseñados para vía pública en múltiples formatos.',
        imagenes: [
          { src: '/trabajo/vidas al volante - afiches principales.jpg', alt: 'Afiches principales', orientacion: 'h' },
          { src: '/trabajo/vidas al volante - afiches principales 2.jpg', alt: 'Afiches principales variante', orientacion: 'v' },
          { src: '/trabajo/vidas al volante - afiche secundario.jpg', alt: 'Afiche secundario', orientacion: 'h' },
        ],
      },
      {
        titulo: 'Material impreso',
        texto:
          'Folletos informativos y piezas de merchandising. El mensaje se amplifica en cada punto de contacto físico.',
        imagenes: [
          { src: '/trabajo/vidas al volante - folleto.jpg', alt: 'Folleto informativo', orientacion: 'h' },
          { src: '/trabajo/vidas al volante - llavero.jpg', alt: 'Llavero merchandise', orientacion: 'h' },
        ],
      },
      {
        titulo: 'Presencia digital',
        texto:
          'Instagram, anuncios y sitio web de campaña. La coherencia visual sostiene el mensaje en el entorno digital.',
        imagenes: [
          { src: '/trabajo/vidas al volante - anuncio ig.jpg', alt: 'Anuncio Instagram', orientacion: 'h' },
          { src: '/trabajo/vidas al volante - feed ig.jpg', alt: 'Feed de Instagram', orientacion: 'h' },
          { src: '/trabajo/vidas al volante - sitio web.jpg', alt: 'Sitio web de campaña', orientacion: 'h' },
        ],
      },
    ],
  },
  {
    slug: 'kala',
    ref: 'FIG. 04',
    titulo: 'Kala',
    tipo: 'PACKAGING',
    tagline: 'Diseño de packaging de producto',
    desafio:
      'Diseñar el packaging de Kala comunicando el posicionamiento del producto en el punto de venta. Cada decisión gráfica debía justificarse desde la estrategia: qué comunica la pieza, a quién, en qué contexto.',
    resultado:
      'Un packaging que comunica lo correcto en el momento correcto. Sin ruido visual, sin decisiones arbitrarias.',
    portada: {
      src: '/trabajo/diseno packaging - kala 1-01.jpg',
      alt: 'Packaging Kala',
      orientacion: 'h',
    },
    secciones: [
      {
        titulo: 'Packaging',
        texto:
          'Diseño gráfico de packaging con identidad propia. Cada decisión justificada desde la estrategia de comunicación en el punto de venta.',
        imagenes: [
          { src: '/trabajo/diseno packaging - kala 1-02.jpg', alt: 'Packaging Kala detalle', orientacion: 'h' },
          { src: '/trabajo/diseno packaging - kala 1-03.jpg', alt: 'Packaging Kala variante', orientacion: 'h' },
          { src: '/trabajo/diseno packaging - kala 1-04.jpg', alt: 'Packaging Kala aplicación', orientacion: 'h' },
          { src: '/trabajo/diseno packaging - kala 1-05.jpg', alt: 'Packaging Kala sistema', orientacion: 'h' },
          { src: '/trabajo/diseno packaging - kala 1-06.jpg', alt: 'Packaging Kala producción', orientacion: 'v' },
        ],
      },
    ],
  },
];

/** Helper to get a flat array of ALL images for the lightbox */
export function getTodasLasImagenes(proyecto: Proyecto): Imagen[] {
  const todas: Imagen[] = [proyecto.portada];
  for (const seccion of proyecto.secciones) {
    todas.push(...seccion.imagenes);
  }
  return todas;
}

export function getProyecto(slug: string): Proyecto | undefined {
  return proyectos.find((p) => p.slug === slug);
}

export function getProyectoAnterior(slug: string): Proyecto | undefined {
  const idx = proyectos.findIndex((p) => p.slug === slug);
  return idx > 0 ? proyectos[idx - 1] : undefined;
}

export function getSiguienteProyecto(slug: string): Proyecto | undefined {
  const idx = proyectos.findIndex((p) => p.slug === slug);
  return idx < proyectos.length - 1 ? proyectos[idx + 1] : undefined;
}
