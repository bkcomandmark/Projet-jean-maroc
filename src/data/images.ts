// ─────────────────────────────────────────────────────────────
//  Banque d'images du site.
//  Photos de Jean dans /public/images/, photos d'illustration Unsplash
//  (licence Unsplash) hébergées sur le site dans /public/images/photos/.
//  Pour remplacer une photo : déposez le fichier dans /public/images/
//  puis remplacez `id` par son chemin, ex. '/images/jean-chantier.webp'.
// ─────────────────────────────────────────────────────────────

export type Img = { id: string; alt: string; credit?: string; /** cadrage CSS object-position */ pos?: string; /** version 800 px (srcset) */ small?: string };

export const images = {
  hero: { id: '/images/photos/hero.webp', small: '/images/photos/hero-800.webp', alt: 'Salon lumineux aux murs blancs dans un appartement haut de gamme', credit: 'Clay Banks' },
  painting: { id: '/images/jean-peinture.webp', alt: 'Jean peint un plafond au rouleau dans un appartement protégé', pos: 'center 25%' },
  joints: { id: '/images/photos/joints.webp', small: '/images/photos/joints-800.webp', alt: 'Jointoiement d’une crédence en carreaux blancs', credit: 'charlesdeluvio' },
  carrelage: { id: '/images/jean-carrelage.webp', alt: 'Jean pose un carrelage grand format dans une salle de bain', pos: 'center 30%' },
  plomberie: { id: '/images/jean-plomberie.webp', alt: 'Jean raccorde la plomberie d’un meuble vasque', pos: 'center 40%' },
  electricite: { id: '/images/jean-electricite.webp', alt: 'Jean installe un interrupteur dans un appartement rénové', pos: 'center 30%' },
  enduits: { id: '/images/photos/enduits.webp', small: '/images/photos/enduits-800.webp', alt: 'Application d’enduit à la spatule sur un mur intérieur', credit: 'Sasun Bughdaryan' },
  menuiserie: { id: '/images/photos/menuiserie.webp', small: '/images/photos/menuiserie-800.webp', alt: 'Ponçage de précision d’une pièce de menuiserie', credit: 'Paul Trienekens' },
  'salle-de-bain': { id: '/images/photos/salle-de-bain.webp', small: '/images/photos/salle-de-bain-800.webp', alt: 'Salle de bain moderne avec douche à l’italienne', credit: 'Lotus Design N Print' },
  etancheite: { id: '/images/photos/etancheite.webp', small: '/images/photos/etancheite-800.webp', alt: 'Toit-terrasse blanc prêt à recevoir une étanchéité', credit: 'Toa Heftiba' },
  facade: { id: '/images/photos/facade.webp', small: '/images/photos/facade-800.webp', alt: 'Façade méditerranéenne blanche aux volets bleus', credit: 'Margo Evardson' },
  'remise-en-etat': { id: '/images/photos/remise-en-etat.webp', small: '/images/photos/remise-en-etat-800.webp', alt: 'Pièce rénovée, lumineuse, prête à être louée', credit: 'Christian Lue' },
  airbnb: { id: '/images/photos/airbnb.webp', small: '/images/photos/airbnb-800.webp', alt: 'Chambre épurée façon hôtel avec linge de lit blanc', credit: 'Andrew Neel' },
  terrace: { id: '/images/photos/terrace.webp', small: '/images/photos/terrace-800.webp', alt: 'Terrasse blanche méditerranéenne avec vue sur la mer', credit: 'Philip Jahn' },
  tanger: { id: '/images/photos/tanger.webp', small: '/images/photos/tanger-800.webp', alt: 'Maisons blanches de Tanger au bord de la mer', credit: 'Louis Hansel' },
  tetouan: { id: '/images/photos/tetouan.webp', small: '/images/photos/tetouan-800.webp', alt: 'Maisons blanches de la médina de Tétouan', credit: 'Kamal Bilal' },
  tools: { id: '/images/photos/tools.webp', small: '/images/photos/tools-800.webp', alt: 'Niveau à bulle, outil de précision de l’artisan', credit: 'Louis Hansel' },
  'chantier-suivi': { id: '/images/photos/chantier-suivi.webp', small: '/images/photos/chantier-suivi-800.webp', alt: 'Cuisine en cours de rénovation, meubles protégés', credit: 'immo RENOVATION' },
  keys: { id: '/images/photos/keys.webp', small: '/images/photos/keys-800.webp', alt: 'Remise des clés d’un appartement rénové', credit: 'Jakub Żerdzicki' },
  'blog-1': { id: '/images/photos/blog-1.webp', small: '/images/photos/blog-1-800.webp', alt: 'Mur fissuré avant rénovation', credit: 'Krakograff Textures' },
  jean: { id: '/images/jean-portrait.webp', alt: 'Jean, artisan rénovateur à Martil, sur un chantier de peinture', pos: 'center 20%' },
  'jean-og': { id: '/images/jean-portrait.jpg', alt: 'Jean, artisan rénovateur à Martil' },
} satisfies Record<string, Img>;

export type ImageKey = keyof typeof images;

/** Construit l'URL d'une image (Unsplash ou fichier local). */
export function imgUrl(key: ImageKey | Img, w = 1200, h?: number): string {
  const img = typeof key === 'string' ? images[key] : key;
  if (img.id.startsWith('/') || img.id.startsWith('http')) return img.id;
  return `https://images.unsplash.com/${img.id}?auto=format&fit=crop&w=${w}${h ? `&h=${h}` : ''}&q=72`;
}

export function imgSrcset(key: ImageKey, widths = [480, 800, 1200, 1800], ratio?: number): string | undefined {
  const img: Img = images[key];
  if (img.id.startsWith('/')) return img.small ? `${img.small} 800w, ${img.id} 1600w` : undefined;
  return widths.map((w) => `${imgUrl(key, w, ratio ? Math.round(w * ratio) : undefined)} ${w}w`).join(', ');
}
