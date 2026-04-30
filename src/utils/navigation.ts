// An array of links for navigation bar
const navBarLinks = [
  { name: 'Inicio', url: '/' },
  { name: 'Servicios', url: '/services' },
  { name: 'Productos', url: '/products' },
  { name: 'Contacto', url: '/contact' },
];

// An array of links for footer
const footerLinks = [
  {
    section: 'Servicios',
    links: [
      { name: 'Extintores', url: '/services' },
      { name: 'Cámaras de Seguridad', url: '/products' },
      { name: 'Sistemas de Alarma', url: '/services' },
    ],
  },
  {
    section: 'Empresa',
    links: [
      { name: 'Sobre Nosotros', url: '/contact' },
      { name: 'Contáctanos', url: '/contact' },
      { name: 'Ubicación', url: '/contact' },
    ],
  },
];

// An object of links for social icons
const socialLinks = {
  facebook: 'https://www.facebook.com/fullrex',
  x: 'https://twitter.com/fullrex',
  instagram: 'https://instagram.com/fullrex',
  whatsapp: 'https://wa.me/593961661643',
};

export default {
  navBarLinks,
  footerLinks,
  socialLinks,
};