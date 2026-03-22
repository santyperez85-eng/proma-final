export interface Imagen {
  src: string;
  alt: string;
  destacada?: boolean;
}

export interface Proyecto {
  slug: string;
  ref: string;
  titulo: string;
  tipo: string;
  tagline: string;
  desafio: string;
  decisiones: string[];
  resultado: string;
  imagenes: Imagen[];
}

export const proyectos: Proyecto[] = [
  {
    slug: 'amalita',
    ref: 'FIG. 01',
    titulo: 'Fundación Amalita',
    tipo: 'BRANDING',
    tagline: 'Sistema de identidad para institución cultural',
    desafio: 'Construir el sistema de identidad visual completo para una institución cultural con múltiples puntos de contacto: publicaciones, señalética, entorno web, redes sociales y comunicación institucional. Cada pieza debía funcionar como parte de un sistema, no como decisión aislada.',
    decisiones: [
      'Sistema de identidad modular con grilla aplicable a todos los formatos',
      'Tipografía con jerarquías documentadas para publicaciones y señalética',
      'Paleta cromática con reglas de uso por medio y contexto',
      'Adaptaciones para entorno digital: web, redes, newsletter',
      'Señalética que integra el sistema visual al espacio físico',
      'Catálogo patrimonial como pieza editorial de alta complejidad',
    ],
    resultado: 'Una identidad que funciona en todos los medios sin perder coherencia. Desde el signo marcario hasta el fanzine, el sistema sostiene.',
    imagenes: [
      { src: '/trabajo/caso amalita - portada.jpg', alt: 'Portada del sistema de identidad', destacada: true },
      { src: '/trabajo/caso amalita 1.jpg', alt: 'Sistema de identidad Amalita' },
      { src: '/trabajo/caso amalita - signo marcario.jpg', alt: 'Signo marcario' },
      { src: '/trabajo/caso amalita - paleta de colores.jpg', alt: 'Paleta de colores' },
      { src: '/trabajo/caso amalita - paleta de color 1.jpg', alt: 'Paleta de color variante' },
      { src: '/trabajo/caso amalita - afiches principales.jpg', alt: 'Afiches principales' },
      { src: '/trabajo/caso amalita - afiches.jpg', alt: 'Sistema de afiches' },
      { src: '/trabajo/caso amalita - afiches comparativos.jpg', alt: 'Afiches comparativos' },
      { src: '/trabajo/caso amalita - afiche 2.jpg', alt: 'Afiche variante' },
      { src: '/trabajo/caso amalita - afiches 2.jpg', alt: 'Afiches variante 2' },
      { src: '/trabajo/caso amalita - banners.jpg', alt: 'Sistema de banners' },
      { src: '/trabajo/caso amalita - banners y publicidad.jpg', alt: 'Banners y publicidad' },
      { src: '/trabajo/caso amalita - folletos.jpg', alt: 'Folletos institucionales' },
      { src: '/trabajo/caso amalita - folletos 2.jpg', alt: 'Folletos variante' },
      { src: '/trabajo/caso amalita - catalogo patrimonial.jpg', alt: 'Catálogo patrimonial' },
      { src: '/trabajo/caso amalita - fanzine.jpg', alt: 'Fanzine editorial' },
      { src: '/trabajo/caso amalita - iconos.jpg', alt: 'Sistema de iconos' },
      { src: '/trabajo/caso amalita - postales.jpg', alt: 'Postales' },
      { src: '/trabajo/caso amalita - newsletter.jpg', alt: 'Newsletter' },
      { src: '/trabajo/caso amalita - diseño web.jpg', alt: 'Diseño web' },
      { src: '/trabajo/caso amalita - redes.jpg', alt: 'Redes sociales' },
      { src: '/trabajo/caso amalita - redes transmedia.jpg', alt: 'Estrategia transmedia' },
      { src: '/trabajo/caso amalita - señaletica.jpg', alt: 'Señalética' },
      { src: '/trabajo/caso amalita - sobre la coleccion.jpg', alt: 'Sobre la colección' },
    ],
  },
  {
    slug: 'portal-chas',
    ref: 'FIG. 02',
    titulo: 'Portal Chas',
    tipo: 'BRANDING',
    tagline: 'Identidad y señalética para proyecto urbano',
    desafio: 'Diseñar el sistema de identidad y señalética para Portal Chas, un proyecto de intervención urbana en Chacarita. El sistema debía funcionar en el espacio físico, la comunicación pública y el entorno digital con la misma lógica.',
    decisiones: [
      'Concepto visual que integra la identidad del barrio y su historia',
      'Sistema de pictogramas propio para orientación urbana',
      'Nomenclador coherente con el espacio y la escala del proyecto',
      'Mapas de recorrido como pieza funcional y de comunicación',
      'Piezas editoriales: libro de cuentos del barrio',
      'Afiches de comunicación pública de alto impacto',
      'Sitio web como extensión digital del proyecto urbano',
    ],
    resultado: 'Un sistema de identidad urbana que habita el espacio físico y digital con la misma lógica. La identidad se vuelve orientación.',
    imagenes: [
      { src: '/trabajo/portal chas - portada.gif', alt: 'Portada Portal Chas', destacada: true },
      { src: '/trabajo/portal chas - marca.jpg', alt: 'Marca Portal Chas' },
      { src: '/trabajo/portal chas - concepto.jpg', alt: 'Concepto visual' },
      { src: '/trabajo/portal chas - pictogramas.gif', alt: 'Sistema de pictogramas' },
      { src: '/trabajo/portal chas - nomenclador.jpg', alt: 'Sistema nomenclador' },
      { src: '/trabajo/portal chas - mapa de escalas.jpg', alt: 'Mapa de escalas' },
      { src: '/trabajo/portal chas - mapa de mano.jpg', alt: 'Mapa de mano' },
      { src: '/trabajo/portal chas - mapa recorrido.jpg', alt: 'Mapa de recorrido' },
      { src: '/trabajo/portal chas - afiches principales.jpg', alt: 'Afiches principales' },
      { src: '/trabajo/portal chas - afiches en contexto.jpg', alt: 'Afiches en contexto urbano' },
      { src: '/trabajo/portal chas - postales.jpg', alt: 'Postales' },
      { src: '/trabajo/portal chas - libro cuentos.jpg', alt: 'Libro de cuentos' },
      { src: '/trabajo/portal chas - libro cuentos 2.gif', alt: 'Libro de cuentos interior' },
      { src: '/trabajo/portal chas - sitio web.gif', alt: 'Sitio web' },
    ],
  },
  {
    slug: 'vidas-al-volante',
    ref: 'FIG. 03',
    titulo: 'Vidas al Volante',
    tipo: 'CAMPAÑA',
    tagline: 'Identidad visual para campaña de seguridad vial',
    desafio: 'Diseñar el sistema visual de una campaña de seguridad vial que debía funcionar en múltiples medios simultáneamente: vía pública, redes sociales, web, piezas impresas y merchandise. La coherencia visual era crítica para el impacto del mensaje.',
    decisiones: [
      'Sistema visual con identidad propia: paleta, tipografía y lenguaje gráfico',
      'Afiches de alto impacto para vía pública en múltiples formatos',
      'Adaptaciones para feed y stories de Instagram manteniendo coherencia',
      'Folleto informativo con arquitectura de lectura graduada',
      'Sitio web de campaña alineado al sistema visual',
      'Piezas de merchandising como extensión física del mensaje',
    ],
    resultado: 'Una campaña con identidad visual cohesiva que amplifica el mensaje en todos los puntos de contacto. El sistema sostiene la campaña completa.',
    imagenes: [
      { src: '/trabajo/vidas al volante - portada.jpg', alt: 'Portada Vidas al Volante', destacada: true },
      { src: '/trabajo/vidas al volante - sobre el proyecto.jpg', alt: 'Sobre el proyecto' },
      { src: '/trabajo/vidas al volante - estilo.jpg', alt: 'Sistema de estilo visual' },
      { src: '/trabajo/vidas al volante - paleta.jpg', alt: 'Paleta de colores' },
      { src: '/trabajo/vidas al volante - afiches principales.jpg', alt: 'Afiches principales' },
      { src: '/trabajo/vidas al volante - afiches principales 2.jpg', alt: 'Afiches principales variante' },
      { src: '/trabajo/vidas al volante - afiche secundario.jpg', alt: 'Afiche secundario' },
      { src: '/trabajo/vidas al volante - folleto.jpg', alt: 'Folleto informativo' },
      { src: '/trabajo/vidas al volante - anuncio ig.jpg', alt: 'Anuncio Instagram' },
      { src: '/trabajo/vidas al volante - feed ig.jpg', alt: 'Feed de Instagram' },
      { src: '/trabajo/vidas al volante - sitio web.jpg', alt: 'Sitio web de campaña' },
      { src: '/trabajo/vidas al volante - llavero.jpg', alt: 'Llavero merchandise' },
    ],
  },
  {
    slug: 'kala',
    ref: 'FIG. 04',
    titulo: 'Kala',
    tipo: 'PACKAGING',
    tagline: 'Diseño de packaging de producto',
    desafio: 'Diseñar el packaging de Kala comunicando el posicionamiento del producto en el punto de venta. Cada decisión gráfica debía justificarse desde la estrategia: qué comunica la pieza, a quién, en qué contexto.',
    decisiones: [
      'Diseño gráfico con identidad visual propia del producto',
      'Sistema cromático y tipográfico alineado al posicionamiento',
      'Jerarquía de información pensada para el punto de venta',
      'Especificaciones técnicas completas para producción',
    ],
    resultado: 'Un packaging que comunica lo correcto en el momento correcto. Sin ruido visual, sin decisiones arbitrarias.',
    imagenes: [
      { src: '/trabajo/diseño packaging - kala.jpg', alt: 'Packaging Kala', destacada: true },
    ],
  },
];

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
