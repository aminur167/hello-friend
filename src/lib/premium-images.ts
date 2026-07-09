// Curated golden-hour luxury imagery from Unsplash (free, reliable CDN).
// Each URL uses ?auto=format&fit=crop&q=80 with an appropriate width.

const u = (id: string, w = 1600) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;

export const premiumImages = {
  // Warm golden-hour luxury interior — About section
  aboutInterior: u("photo-1600585154340-be6161a56a0c", 1200),
  // Engineer on site at sunset — Construction Quality
  construction: u("photo-1541888946425-d81bb19240f5", 1200),
  // Cinematic tower at twilight — Booking CTA background
  bookingHero: u("photo-1600607687939-ce8a6c25118c", 1800),

  // Blog covers (golden hour architecture + interiors + investment)
  blog: [
    u("photo-1560518883-ce09059eeffa", 900),   // keys & investment
    u("photo-1600566753190-17f0baa2a6c3", 900),// warm modern interior
    u("photo-1503387762-592deb58ef4e", 900),   // construction site
  ],

  // Portrait avatars for customer reviews (warm, editorial)
  reviewers: [
    u("photo-1544005313-94ddf0286df2", 240),   // woman professional
    u("photo-1500648767791-00dcc994a43e", 240),// man warm smile
    u("photo-1560250097-0b93528c311a", 240),   // man in suit
  ],
};