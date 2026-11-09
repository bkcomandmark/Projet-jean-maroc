// ─────────────────────────────────────────────────────────────
//  Banque d'images du site.
//  Photos provisoires Unsplash (libres de droits). Pour remplacer par
//  une photo réelle : déposez le fichier dans /public/images/ puis
//  remplacez `id` par le chemin, ex. '/images/jean-chantier.jpg'.
// ─────────────────────────────────────────────────────────────

export type Img = { id: string; alt: string; credit?: string; /** cadrage CSS object-position */ pos?: string };

export const images = {
  hero: { id: 'photo-1728649054288-61f332ee389b', alt: 'Salon lumineux aux murs blancs dans un appartement haut de gamme', credit: 'Clay Banks' },
  painting: { id: '/images/jean-peinture.webp', alt: 'Jean peint un plafond au rouleau dans un appartement protégé', pos: 'center 25%' },
  joints: { id: 'photo-1523413363574-c30aa1c2a516', alt: 'Jointoiement d’une crédence en carreaux blancs', credit: 'charlesdeluvio' },
  carrelage: { id: '/images/jean-carrelage.webp', alt: 'Jean pose un carrelage grand format dans une salle de bain', pos: 'center 30%' },
  plomberie: { id: '/images/jean-plomberie.webp', alt: 'Jean raccorde la plomberie d’un meuble vasque', pos: 'center 40%' },
  electricite: { id: '/images/jean-electricite.webp', alt: 'Jean installe un interrupteur dans un appartement rénové', pos: 'center 30%' },
  enduits: { id: 'photo-1768839725085-829e6ac7ac26', alt: 'Application d’enduit à la spatule sur un mur intérieur', credit: 'Sasun Bughdaryan' },
  menuiserie: { id: 'photo-1561297331-a9c00b9c2c44', alt: 'Ponçage de précision d’une pièce de menuiserie', credit: 'Paul Trienekens' },
  'salle-de-bain': { id: 'photo-1638799869566-b17fa794c4de', alt: 'Salle de bain moderne avec douche à l’italienne', credit: 'Lotus Design N Print' },
  etancheite: { id: 'photo-1527533983174-bc3a42ac16c1', alt: 'Toit-terrasse blanc prêt à recevoir une étanchéité', credit: 'Toa Heftiba' },
  facade: { id: 'photo-1779617442229-85757ebd3d12', alt: 'Façade méditerranéenne blanche aux volets bleus', credit: 'Margo Evardson' },
  'remise-en-etat': { id: 'photo-1757742690834-aa581b9f53b2', alt: 'Pièce rénovée, lumineuse, prête à être louée', credit: 'Christian Lue' },
  airbnb: { id: 'photo-1549638441-b787d2e11f14', alt: 'Chambre épurée façon hôtel avec linge de lit blanc', credit: 'Andrew Neel' },
  terrace: { id: 'photo-1604145195376-e2c8195adf29', alt: 'Terrasse blanche méditerranéenne avec vue sur la mer', credit: 'Philip Jahn' },
  tanger: { id: 'photo-1515386474292-47555758ef2e', alt: 'Maisons blanches de Tanger au bord de la mer', credit: 'Louis Hansel' },
  tetouan: { id: 'photo-1519741641280-af0bfbbb2a31', alt: 'Maisons blanches de la médina de Tétouan', credit: 'Kamal Bilal' },
  tools: { id: 'photo-1567361808976-260065224468', alt: 'Niveau à bulle, outil de précision de l’artisan', credit: 'Louis Hansel' },
  'chantier-suivi': { id: 'photo-1618832515490-e181c4794a45', alt: 'Cuisine en cours de rénovation, meubles protégés', credit: 'immo RENOVATION' },
  keys: { id: 'photo-1733244766159-f58f4184fd38', alt: 'Remise des clés d’un appartement rénové', credit: 'Jakub Żerdzicki' },
  'blog-1': { id: 'photo-1668079334321-e51822308968', alt: 'Mur fissuré avant rénovation', credit: 'Krakograff Textures' },
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

export function imgSrcset(key: ImageKey, widths = [480, 800, 1200, 1800], ratio?: number): string {
  return widths.map((w) => `${imgUrl(key, w, ratio ? Math.round(w * ratio) : undefined)} ${w}w`).join(', ');
}
