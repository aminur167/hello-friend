/**
 * Central brand & site configuration for North End Construction Ltd.
 * Import from here instead of hardcoding strings in components.
 */
export const siteConfig = {
  name: "North End Construction Ltd",
  shortName: "North End",
  tagline: "Building Rangpur's Skyline with Trust & Craftsmanship",
  description:
    "North End Construction Ltd — premium real estate development and construction services in Rangpur, Bangladesh. Apartments, commercial spaces, and land projects built to last.",
  locale: "en-BD",
  location: {
    city: "Rangpur",
    country: "Bangladesh",
    region: "Rangpur Division",
  },
  contact: {
    phone: "+880 000 000 0000",
    whatsapp: "+880 000 000 0000",
    email: "info@northendconstruction.com",
    address: "Rangpur, Bangladesh",
  },
  /**
   * Where new lead / booking notifications should go.
   * Replace with real values.
   *  - adminWhatsApp: international format WITHOUT '+' or spaces (used in wa.me links).
   */
  admin: {
    email: "admin@northendconstruction.com",
    whatsApp: "8801700000000",
  },
  social: {
    facebook: "https://facebook.com/",
    instagram: "",
    youtube: "",
    linkedin: "",
  },
  nav: {
    primary: [
      { label: "হোম", to: "/" },
      { label: "আমাদের সম্পর্কে", to: "/about" },
      { label: "চলমান প্রকল্প", to: "/projects/running" },
      { label: "সম্পন্ন প্রকল্প", to: "/projects/completed" },
      { label: "ফ্ল্যাট", to: "/services" },
      { label: "গ্যালারি", to: "/gallery" },
      { label: "যোগাযোগ", to: "/contact" },
    ],
    footerServices: [
      { label: "Residential Projects", to: "/services" },
      { label: "Commercial Projects", to: "/services" },
      { label: "Land Development", to: "/services" },
      { label: "Construction Consulting", to: "/services" },
    ],
    footerCompany: [
      { label: "About Us", to: "/about" },
      { label: "Ongoing Projects", to: "/projects/running" },
      { label: "Completed Projects", to: "/projects/completed" },
      { label: "Careers", to: "/careers" },
    ],
  },
  seo: {
    keywords: [
      "real estate Rangpur",
      "apartments Rangpur",
      "construction company Bangladesh",
      "North End Construction",
      "flats for sale Rangpur",
      "রংপুর ফ্ল্যাট",
      "রংপুর নির্মাণ কোম্পানি",
    ],
  },
} as const;

export type NavItem = { label: string; to: string };