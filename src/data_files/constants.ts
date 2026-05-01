import ogImageSrc from '@images/social.png';

export const SITE = {
  title: 'FULLREX',
  tagline: 'Extintores, Cámaras y Alarmas en Quito',
  description:
    'Venta, recarga y mantenimiento de extintores certificados INEN 731. Cámaras Hikvision y alarmas en Quito. Cotización gratis ☎ 0961661643',
  description_short:
    'Extintores, cámaras de seguridad y alarmas en Quito — FULLREX.',
  url: 'https://fullrex-quitumbe.com',
  author: 'FULLREX',
};

export const SEO = {
  title: SITE.title,
  description: SITE.description,
  structuredData: {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    inLanguage: 'es-EC',
    '@id': SITE.url,
    url: SITE.url,
    name: SITE.title,
    description: SITE.description,
    isPartOf: {
      '@type': 'WebSite',
      url: SITE.url,
      name: SITE.title,
      description: SITE.description,
    },
  },
};

export const OG = {
  locale: 'es_EC',
  type: 'website',
  url: SITE.url,
  title: 'Extintores y Cámaras en Quito | FULLREX — Recarga INEN 731',
  description:
    'Venta, recarga y mantenimiento de extintores certificados INEN 731. Cámaras Hikvision y alarmas en Quito. Cotización gratis ☎ 0961661643',
  image: ogImageSrc,
};

export const partnersData = [
  {
    icon: `<svg
      class="mx-auto h-auto w-32 py-3 sm:mx-0 lg:w-40 lg:py-5"
      viewBox="0 0 1033.583 318.543"
      xmlns="http://www.w3.org/2000/svg"
      >
      <title>Hikvision Logo - Ajustado</title>
      
      <!-- Contenedor con ajuste de posición y skew -->
      <g transform="translate(40, 230) skewX(-12)">
        <!-- Parte: HIK (Rojo Hikvision) -->
        <text 
          x="0" 
          y="0" 
          font-family="Arial Black, Arial, sans-serif" 
          font-weight="900" 
          font-size="210" 
          fill="#EE1C25" 
          style="letter-spacing: -8px;">HIK</text>
        
        <!-- Parte: VISION (Gris corporativo) - Se acerca más a HIK para ahorrar espacio -->
        <text 
          x="360" 
          y="0" 
          font-family="Arial Black, Arial, sans-serif" 
          font-weight="900" 
          font-size="210" 
          fill="#4D4D4F" 
          style="letter-spacing: -8px;">VISION</text>
      </g>

      <!-- Símbolo de Marca Registrada reubicado -->
      <text 
        x="955" 
        y="90" 
        font-family="Arial, sans-serif" 
        font-weight="bold"
        font-size="45" 
        fill="#4D4D4F">®</text>
    </svg>`,
    name: 'first',
    href: 'https://www.hikvision.com/es-la/',

  },
  {
    icon: `<svg
      class="mx-auto h-auto w-32 py-3 sm:mx-0 lg:w-40 lg:py-5"
      viewBox="0 0 1033.583 318.543"
      xmlns="http://www.w3.org/2000/svg"
      >
      <title>Dahua - Versión Compacta</title>
      
      <!-- Contenedor con inclinación y centrado ajustado -->
      <g transform="translate(100, 200) skewX(-15)">
        <text 
          font-family="Arial Black, sans-serif" 
          font-weight="900" 
          font-size="280" 
          style="letter-spacing: -15px;">
          <!-- La 'a' roja -->
          <tspan fill="#EE1C25">a</tspan>
          <!-- El resto pegado inmediatamente -->
          <tspan fill="#000000" dx="-20">lhua</tspan>
        </text>
      </g>

      <!-- Subtexto TECHNOLOGY alineado al bloque -->
      <text 
        x="520" 
        y="285" 
        text-anchor="middle"
        font-family="Arial, sans-serif" 
        font-weight="bold"
        font-size="45" 
        fill="#000000"
        style="letter-spacing: 3px;">TECHNOLOGY</text>
    </svg>`,
    name: 'first',
    href: 'https://www.dahuasecurity.com/es',

  },
  {
    icon: `<svg
      class="mx-auto h-auto w-32 py-3 sm:mx-0 lg:w-40 lg:py-5"
      viewBox="0 0 1033.583 318.543"
      xmlns="http://www.w3.org/2000/svg"
      >
      <title>EZVIZ Logo - Reconstrucción Vectorial</title>
      
      <!-- Icono de Pétalos (Izquierda) -->
      <g transform="translate(40, 30)">
        <!-- Pétalo Azul -->
        <ellipse cx="90" cy="80" rx="75" ry="60" fill="#56A9E1" transform="rotate(-15, 90, 80)" />
        <!-- Pétalo Verde -->
        <ellipse cx="210" cy="85" rx="75" ry="60" fill="#48BB2E" transform="rotate(15, 210, 85)" />
        <!-- Pétalo Magenta -->
        <ellipse cx="85" cy="205" rx="75" ry="60" fill="#E5007E" transform="rotate(15, 85, 205)" />
        <!-- Pétalo Naranja -->
        <ellipse cx="205" cy="215" rx="75" ry="60" fill="#F7941D" transform="rotate(-15, 205, 215)" />
        
        <!-- Anillos centrales negros -->
        <circle cx="150" cy="145" r="55" fill="none" stroke="black" stroke-width="8" opacity="0.8" />
        <circle cx="150" cy="145" r="35" fill="none" stroke="black" stroke-width="6" opacity="0.8" />
      </g>

      <!-- Texto "ezviz" (Derecha) -->
      <g transform="translate(340, 215)">
        <text 
          x="0" 
          y="0" 
          font-family="Arial Rounded MT Bold, Helvetica, sans-serif" 
          font-weight="bold" 
          font-size="220" 
          fill="#7E7E7E" 
          style="letter-spacing: -5px;">ezviz</text>
      </g>
    </svg>`,
    name: 'first',
    href: 'https://www.ezviz.com/la',

  },

  {
    icon: `<svg
      class="mx-auto h-auto w-32 py-3 sm:mx-0 lg:w-40 lg:py-5"
      viewBox="0 0 1033.583 318.543"
      xmlns="http://www.w3.org/2000/svg"
      >
      <title>IMOU Logo - Reconstrucción Vectorial</title>
      
      <g transform="translate(100, 75)" fill="#f39200">
        <!-- Letra 'i' (rectángulo redondeado) -->
        <rect x="0" y="85" width="45" height="155" rx="22" />

        <!-- Letra 'm' (dos arcos redondeados) -->
        <path d="M85,200 L85,90 C85,60 110,45 135,45 C160,45 185,60 185,90 L185,200 L230,200 L230,90 C230,60 255,45 280,45 C305,45 330,60 330,90 L330,200 L375,200 L375,90 C375,40 335,0 280,0 C245,0 215,20 200,45 C185,20 155,0 120,0 C65,0 25,40 25,90 L25,200 Z" transform="translate(55, 45)"/>

        <!-- Letra 'o' (círculo perfecto con hueco) -->
        <path d="M545,122.5 A77.5,77.5 0 1,1 390,122.5 A77.5,77.5 0 1,1 545,122.5 M467.5,85 A37.5,37.5 0 1,0 467.5,160 A37.5,37.5 0 1,0 467.5,85" transform="translate(40, 45)"/>

        <!-- Letra 'u' (la sonrisa y los dos cuadros) -->
        <g transform="translate(620, 45)">
            <!-- Los dos cuadros superiores -->
            <rect x="0" y="0" width="45" height="45" rx="8" />
            <rect x="155" y="0" width="45" height="45" rx="8" />
            <!-- La curva inferior (u) -->
            <path d="M0,65 L0,90 C0,145 45,190 100,190 C155,190 200,145 200,90 L200,65 L155,65 L155,90 C155,120 130,145 100,145 C70,145 45,120 45,90 L45,65 Z" />
        </g>
      </g>
    </svg>`,
    name: 'first',
    href: 'https://www.imou.com/es',

  },
];
