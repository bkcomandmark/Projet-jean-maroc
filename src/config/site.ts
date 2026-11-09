// ─────────────────────────────────────────────────────────────
//  Réglages généraux du site — modifiez ici le nom, les numéros,
//  l'e-mail, etc. Tout le site se met à jour automatiquement.
// ─────────────────────────────────────────────────────────────

export const site = {
  name: 'Jean Rénovation',
  tagline: 'Rénovation & finitions aux standards européens',
  description:
    "Artisan rénovateur français installé à Martil. 30 ans d'expérience. Peinture, joints, carrelage, plomberie, salles de bain : des finitions irréprochables pour vos biens en location, de Tétouan à Tanger.",
  founder: 'Jean',
  experienceYears: 30,
  city: 'Martil',
  region: 'Tétouan – Tanger',
  country: 'Maroc',

  // ⚠️ NUMÉROS PROVISOIRES — à remplacer
  phoneMaroc: '+212 6 00 00 00 00',
  phoneFrance: '+33 6 00 00 00 00',
  // Numéro WhatsApp au format international, chiffres uniquement
  whatsapp: '212600000000',
  email: 'contact@jean-renovation.com',

  hours: 'Du lundi au samedi, 8 h – 19 h (heure du Maroc)',
  responseTime: 'Réponse sous 24 h',
};

export const zones = [
  { name: 'Martil', note: 'Base de Jean, intervention immédiate' },
  { name: 'Tétouan', note: 'Centre-ville, Médina, résidences récentes' },
  { name: "M'diq", note: 'Résidences balnéaires et marina' },
  { name: 'Cabo Negro', note: 'Villas et appartements de standing' },
  { name: 'Fnideq', note: 'Littoral nord jusqu’à Sebta' },
  { name: 'Tanger', note: 'Malabata, Achakar, centre, nouvelles résidences' },
];

export const nav = [
  { href: '/prestations/', label: 'Prestations' },
  { href: '/location-airbnb/', label: 'Location & Airbnb' },
  { href: '/proprietaires-a-distance/', label: 'Propriétaires à distance' },
  { href: '/a-propos/', label: 'Jean' },
  { href: '/blog/', label: 'Conseils' },
];

export const whatsappLink = (text = 'Bonjour Jean, je souhaite un devis pour mon logement.') =>
  `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(text)}`;

export const telLink = (phone: string) => `tel:${phone.replace(/[^+\d]/g, '')}`;

// Images Unsplash : on passe l'identifiant "photo-..." et la largeur voulue.
export const unsplash = (id: string, w = 1200, h?: number) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}${h ? `&h=${h}` : ''}&q=75`;
