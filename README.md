# FULLREX - Seguridad Industrial Quitumbe

<img width="1905" height="897" alt="image" src="https://github.com/user-attachments/assets/5717b1ee-f171-40e3-876f-913d3120b44c" />

**FULLREX** es una empresa líder en **seguridad industrial** ubicada en Quitumbe, sur de Quito, especializada en soluciones integrales de protección contra incendios, vigilancia y alarmas.

##  Acerca de FULLREX

Expertos en seguridad industrial con **tranquilidad total y cumplimiento legal**. Protegemos lo que más importa a través de equipos certificados y respaldo técnico especializado.

### Nuestra Misión
Brindar soluciones de seguridad que garanticen el cumplimiento de normativas **INEN 731**, protegiendo empresas e industrias en el sur de Quito.

##  Servicios Principales

### 1. Extintores y Prevención de Incendios
- Recarga y mantenimiento de extintores **PQS y CO2**
- Certificación **INEN 731** garantizada
- Evite multas de bomberos con nuestro servicio certificado
- Kits vehiculares con soporte y documentación

### 2. Cámaras de Seguridad
- Sistemas **CTV** con marcas líderes: **Hikvision, Dahua, Ezviz, Imou**
- Acceso remoto desde su celular
- Tecnología de detección de movimiento
- Alertas en tiempo real

### 3. Sistemas de Alarma y Detección
- Alarmas con detección de **humo**
- Mantenimiento electrónico especializado
- Respuesta inmediata y soporte **24/7**

### 4. Mantenimiento Preventivo
- Auditorías técnicas de seguridad
- Pruebas hidrostáticas y certificación
- "No espere a que falle, asegure su inversión"

##  Tecnologías Utilizadas

Este sitio web está construido con tecnologías modernas:

| Tecnología | Propósito |
|-------------|----------|
| **Astro 6.x** | Framework de generación estática rápido |
| **Tailwind CSS v4** | Framework CSS utility-first |
| **Preline UI** | Componentes interactivos |
| **TypeScript** | Tipado estático para mayor seguridad |

##  Estructura del Proyecto

```
src/
├── assets/                # Recursos estáticos
│   ├── scripts/          # Scripts JavaScript
│   └── styles/           # Estilos CSS con Tailwind
├── components/           # Componentes reutilizables
│   ├── sections/         # Secciones de la página web
│   │   ├── features/      # Características y beneficios
│   │   ├── landing/       # Sección hero y principal
│   │   ├── misc/          # Contacto, FAQ, autenticación
│   │   ├── navbar&footer/ # Navegación y pie de página
│   │   └── testimonials/  # Testimonios de clientes
│   └── ui/               # Componentes UI por funcionalidad
│       ├── blocks/        # Bloques reutilizables
│       ├── buttons/       # Botones personalizados
│       ├── cards/         # Tarjetas de productos
│       ├── forms/         # Formularios y entradas
│       ├── icons/         # Sistema de iconos
│       └── links/         # Enlaces y navegación
├── data_files/           # Datos en formato JSON/TypeScript
│   ├── constants.ts     # Configuración SEO y metadatos
│   ├── features.json   # Características de servicios
│   ├── faqs.json       # Preguntas frecuentes
│   └── pricing.json     # Planes y precios
├── images/               # Imágenes estáticas optimizadas
├── layouts/              # Plantillas de diseño
│   └── MainLayout.astro  # Diseño principal
├── pages/                # Páginas del sitio
│   ├── index.astro       # Página principal
│   ├── services.astro     # Servicios
│   ├── products.astro     # Catálogo de productos
│   ├── contact.astro      # Contacto
│   └── insights/         # Artículos y testimonios
└── utils/                # Funciones utilitarias
    └── navigation.ts   # Enlaces de navegación y footer
```

##  Instalación y Desarrollo

### Requisitos
- **Node.js** 18+
- **pnpm** (recomendado) o npm

### Pasos de Instalación

1. **Clonar el repositorio:**
```bash
git clone https://github.com/tu-usuario/fullrex-landing.git
cd fullrex-landing
```

2. **Instalar dependencias:**
```bash
pnpm install
```

3. **Iniciar servidor de desarrollo:**
```bash
pnpm dev
```

El sitio estará disponible en `http://localhost:4321`

##  Comandos Disponibles

| Comando | Descripción |
|---------|-------------|
| `pnpm dev` | Inicia servidor con recarga en caliente |
| `pnpm build` | Genera la versión de producción |
| `pnpm preview` | Previsualiza la versión de producción |
| `pnpm format:check` | Verifica el formato del código |
| `pnpm format:fix` | Corrige automáticamente el formato |

##  Optimización

### Rendimiento
- **Compresión HTML**: Minificación automática de archivos HTML
- **Imágenes optimizadas**: Uso de formatos **AVIF y WebP** con carga diferida
- **CSS minificado**: Estilos optimizados con Tailwind CSS v4
- **Preconexión**: Configuración para fuentes y recursos externos
- **SEO optimizado**: Metadatos completos, Open Graph y Twitter Cards en español

### SEO y Marketing
- Títulos optimizados: "FULLREX | Seguridad Industrial Quitumbe"
- Descripciones con palabras clave: "INEN 731", "Quitumbe", "Seguridad"
- URLs canónicas y mapa del sitio automático
- Datos estructurados **Schema.org** para rich snippets

##  Personalización

### Colores de Marca
Los colores se definen en `src/assets/styles/global.css`:

| Variable | Valor | Uso |
|----------|-------|-----|
| `--color-yellow-500` | `#faae1d` | Color principal de acento (amber) |
| `--color-brand-red` | `#dc2626` | Para el logotipo FULLREX |
| `--color-neutral-*` | Sistema de grises | Fondos y textos |

### Navegación y Pie de Página
Edite `src/utils/navigation.ts` para modificar:
- **Enlaces del menú superior**: Inicio | Servicios | Productos | FAQ | Contacto
- **Secciones del pie de página**: Servicios, Empresa
- **Enlaces a redes sociales**: Facebook, WhatsApp, Instagram

### Contenido
- **Servicios**: `src/pages/services.astro`
- **Productos**: `src/pages/products.astro`
- **Preguntas Frecuentes**: `src/data_files/faqs.json`
- **Planes**: `src/data_files/pricing.json`

##  Secciones de la Página

1. **Hero**: "VENTA, RECARGA Y MANTENIMIENTO PROFESIONAL" - Enfoque en Quitumbe
2. **Servicios**: Prevención de incendios, Vigilancia inteligente, Mantenimiento preventivo
3. **Ofrecemos**: 9 ítems (Recarga, Cámaras, Instalación, Detección, Tecnología, etc.)
4. **Precios**: 3 planes (Kit Vehicular, Hogar/Empresa Seguro, Mantenimiento Integral)
5. **Testimonios**: Opiniones reales de clientes industriales
6. **FAQ**: Preguntas sobre ubicación, marcas, kits vehiculares, mantenimiento
7. **Contacto**: "¿Listo para proteger lo que más importa?" - Formulario y datos

##  Información de Contacto

**FULLREX Seguridad Industrial**
- 📍 **Dirección**: Calle Curaca y S41, Quitumbe (Sur de Quito)
- 📞 **Teléfonos**: 0961661643 - 0997827958
- ✉ **Email**: contacto@fullrex-quitumbe.com
- 💬 **WhatsApp**: +593961661643

##  Despliegue

### Build de Producción
```bash
pnpm build
```
Genera archivos estáticos optimizados en el directorio `dist/`.

### Despliegue en Cloudflare Pages

Este proyecto está configurado para desplegarse en **Cloudflare Pages** con el adapter `@astrojs/cloudflare`.

#### Pasos de despliegue:

1. **Conectar repositorio a Cloudflare Pages**
   - Inicia sesión en [Cloudflare Dashboard](https://dash.cloudflare.com)
   - Ve a **Workers & Pages** > **Create application** > **Pages** > **Connect Git**

2. **Configurar proyecto:**
   - **Production branch**: `main`
   - **Build command**: `pnpm build`
   - **Build output directory**: `dist`

3. **Variables de entorno:**
   - Configura las siguientes variables en Cloudflare:
     - `NODE_VERSION`: `18`

#### Despliegue manual (CLI)
```bash
pnpm wrangler pages project create fullrex-landing
pnpm wrangler pages deploy dist
```

#### Configuración de Cloudflare en el proyecto
El adapter de Cloudflare está configurado en `astro.config.mjs`. Para personalizar opciones de Cloudflare, modifica la configuración del adapter.

##  Rendimiento

- ⚡ **Bundle total**: ~4.8MB (incluyendo imágenes optimizadas)
- 📦 **HTML minificado**: Compresión activada
- 🖼 **Imágenes**: Formatos AVIF/WebP con carga diferida
- 🔍 **SEO**: Puntuación optimizada para motores de búsqueda
- 📱 **Responsive**: Diseño adaptable a todos los dispositivos

##  Licencia

Este proyecto está bajo la **Licencia MIT**. Ver el archivo [LICENSE](LICENSE) para más detalles.

---

**Nota**: Este sitio web utiliza logotipos y marcas con propósitos demostrativos. En versiones personalizadas, reemplace por sus propias marcas registradas.

**FULLREX** - Líderes en Seguridad Industrial en el Sur de Quito 🔥
