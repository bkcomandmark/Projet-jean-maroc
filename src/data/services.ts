import type { ImageKey } from './images';

export type Service = {
  slug: string;
  title: string;
  /** Titre SEO (balise <title>) */
  seoTitle: string;
  metaDescription: string;
  short: string;
  hook: string;
  intro: string;
  icon: string;
  image: ImageKey;
  includes: string[];
  difference: { title: string; text: string }[];
  faq: { q: string; a: string }[];
};

export const services: Service[] = [
  {
    slug: 'peinture',
    title: 'Peinture intérieure & extérieure',
    seoTitle: 'Peintre à Martil, Tétouan et Tanger — finitions soignées',
    metaDescription:
      'Peinture intérieure et extérieure à Martil, Tétouan, Tanger. Préparation des supports, enduits, deux couches minimum, finition lisse et uniforme aux standards européens.',
    short: 'Murs, plafonds, boiseries et façades. Une peinture tendue, sans traces ni reprises.',
    hook: 'Une belle peinture, c’est 70 % de préparation.',
    intro:
      "Au Maroc, beaucoup de peintures sont appliquées directement sur des murs mal préparés : fissures visibles, coulures, traces de rouleau, angles baveux. Jean applique la méthode française : rebouchage, ponçage, impression, puis deux couches croisées. Le résultat est un mur lisse, uniforme, qui tient dans le temps — même avec l'humidité de la côte.",
    icon: 'brush',
    image: 'painting',
    includes: [
      'Protection complète des sols, meubles et menuiseries',
      'Rebouchage des fissures et trous, ponçage des supports',
      'Sous-couche d’impression adaptée (plâtre, ciment, ancienne peinture)',
      'Deux couches minimum, application croisée',
      'Rechampis nets : angles, plinthes, encadrements',
      'Peintures anti-humidité et anti-moisissures pour pièces d’eau et bord de mer',
      'Nettoyage complet du chantier',
    ],
    difference: [
      { title: 'Des angles tirés au cordeau', text: 'Aucune bavure sur les plafonds, les prises ou les menuiseries.' },
      { title: 'Zéro trace de reprise', text: 'Le mur est fini d’un seul tenant, sans marques de rouleau visibles en lumière rasante.' },
      { title: 'Des produits qui tiennent', text: 'Choix de peintures lessivables, adaptées au passage intense des locataires.' },
    ],
    faq: [
      {
        q: 'Combien de temps faut-il pour repeindre un appartement ?',
        a: 'Pour un appartement de 2 à 3 pièces, comptez en général 4 à 7 jours, préparation des supports comprise. Le délai exact figure sur le devis.',
      },
      {
        q: 'Fournissez-vous la peinture ?',
        a: 'Oui, Jean peut fournir des peintures de qualité professionnelle sélectionnées pour leur tenue. Vous pouvez aussi choisir vos teintes, il vous conseille.',
      },
    ],
  },
  {
    slug: 'joints',
    title: 'Joints & finitions de carrelage',
    seoTitle: 'Réfection de joints de carrelage et silicone — Martil, Tétouan, Tanger',
    metaDescription:
      'Spécialiste des joints : réfection de joints de carrelage, joints silicone de douche et baignoire, joints époxy. Fini les joints noircis et les infiltrations.',
    short: 'Joints de carrelage, silicone de douche, joints époxy. La spécialité de Jean.',
    hook: 'Le joint, c’est le détail qui trahit un chantier bâclé.',
    intro:
      "Joints irréguliers, noircis, fissurés, silicone qui se décolle au bout de trois mois… C'est souvent le premier signe d'une rénovation bâclée, et la première chose que remarque un locataire exigeant. Ancien façadier, Jean a fait du joint sa spécialité : grattage, nettoyage, nouveau joint régulier et étanche, silicone net et parfaitement lissé.",
    icon: 'grid',
    image: 'joints',
    includes: [
      'Grattage et suppression des anciens joints abîmés',
      'Traitement anti-moisissures des supports',
      'Joints ciment ou joints époxy (ultra-résistants, idéals pour douches)',
      'Joints silicone sanitaires : douches, baignoires, éviers, plans de travail',
      'Joints de façade et de menuiseries extérieures',
      'Nettoyage du voile de ciment et lustrage final',
    ],
    difference: [
      { title: 'Des lignes parfaitement régulières', text: 'Même largeur, même profondeur, du premier au dernier carreau.' },
      { title: 'Un silicone invisible', text: 'Ligne fine, lissée, sans débordement — et surtout étanche.' },
      { title: 'Une salle de bain qui reste blanche', text: 'Produits anti-moisissures pour des joints qui ne noircissent pas.' },
    ],
    faq: [
      {
        q: 'Peut-on refaire les joints sans changer le carrelage ?',
        a: 'Oui, dans la grande majorité des cas. Refaire les joints redonne un aspect neuf à une salle de bain pour une fraction du prix d’une rénovation complète.',
      },
      {
        q: 'Qu’est-ce qu’un joint époxy ?',
        a: 'C’est un joint à base de résine, imperméable et quasiment insensible aux taches et aux moisissures. Idéal pour les douches à l’italienne et les logements en location.',
      },
    ],
  },
  {
    slug: 'carrelage',
    title: 'Pose de carrelage & faïence',
    seoTitle: 'Carreleur à Tétouan, Martil et Tanger — pose de carrelage et faïence',
    metaDescription:
      'Pose de carrelage, faïence, grands formats et zellige. Sols parfaitement plans, coupes nettes, calepinage soigné. Artisan français à Martil.',
    short: 'Sols et murs, grands formats, faïence, zellige. Des coupes nettes et un sol parfaitement plan.',
    hook: 'Un carrelage se juge à la règle, pas à l’œil.',
    intro:
      "Carreaux désaffleurants, coupes approximatives, sol qui sonne creux : la pose de carrelage ne pardonne pas l'à-peu-près. Jean prépare le support, réalise un calepinage (plan de pose) pour équilibrer les coupes, et vérifie la planéité à la règle à chaque étape.",
    icon: 'tiles',
    image: 'carrelage',
    includes: [
      'Dépose de l’ancien revêtement si nécessaire',
      'Ragréage et mise à niveau du support',
      'Calepinage : répartition équilibrée des coupes',
      'Pose collée double encollage pour les grands formats',
      'Faïence murale, crédences, plinthes assorties',
      'Coupes à l’eau nettes, profilés de finition aluminium ou inox',
    ],
    difference: [
      { title: 'Planéité contrôlée', text: 'Système de croisillons autonivelants, aucun carreau qui dépasse.' },
      { title: 'Zéro carreau creux', text: 'Double encollage pour éviter les casses et les décollements.' },
      { title: 'Coupes invisibles', text: 'Les coupes sont placées là où l’œil ne va pas.' },
    ],
    faq: [
      {
        q: 'Peut-on poser du carrelage sur l’ancien ?',
        a: 'Souvent oui, si l’ancien carrelage est sain et bien adhérent. Jean vérifie sur place et vous dit honnêtement ce qui est préférable.',
      },
    ],
  },
  {
    slug: 'plomberie',
    title: 'Plomberie & sanitaires',
    seoTitle: 'Plombier à Martil, Tétouan, Tanger — fuites, sanitaires, robinetterie',
    metaDescription:
      'Recherche et réparation de fuites, remplacement de sanitaires, robinetterie, chauffe-eau, évacuations. Travail propre et durable par un artisan français.',
    short: 'Fuites, robinetterie, WC suspendus, chauffe-eau, évacuations. Propre et durable.',
    hook: 'Une fuite cachée aujourd’hui, c’est un dégât des eaux demain.',
    intro:
      "Robinets qui gouttent, chasses d'eau qui coulent, évacuations lentes, odeurs : dans un logement en location, les petits soucis de plomberie se transforment vite en mauvais commentaires. Jean intervient pour réparer, remplacer et sécuriser vos installations, avec du matériel de qualité.",
    icon: 'drop',
    image: 'plomberie',
    includes: [
      'Recherche et réparation de fuites',
      'Remplacement de robinetterie, mitigeurs, colonnes de douche',
      'Pose de WC, WC suspendus, lavabos, vasques, éviers',
      'Installation et remplacement de chauffe-eau',
      'Débouchage et reprise des évacuations, siphons',
      'Raccordement lave-linge et lave-vaisselle',
    ],
    difference: [
      { title: 'Des raccords invisibles', text: 'Tuyauteries alignées, coffrages propres, rien qui dépasse.' },
      { title: 'Du matériel qui dure', text: 'Pas de robinetterie bas de gamme qui casse en une saison.' },
      { title: 'Un test systématique', text: 'Mise en eau et contrôle d’étanchéité avant de refermer.' },
    ],
    faq: [
      {
        q: 'Intervenez-vous en urgence ?',
        a: 'Jean fait son maximum pour intervenir rapidement sur Martil, Tétouan et M’diq. Contactez-le directement sur WhatsApp en cas de fuite.',
      },
    ],
  },
  {
    slug: 'salle-de-bain',
    title: 'Salle de bain clé en main',
    seoTitle: 'Rénovation de salle de bain à Tétouan, Martil et Tanger',
    metaDescription:
      'Rénovation complète de salle de bain : douche à l’italienne, étanchéité, carrelage, plomberie, meuble vasque, éclairage. Finitions aux standards européens.',
    short: 'Douche à l’italienne, étanchéité, carrelage, plomberie, éclairage. Un seul interlocuteur.',
    hook: 'La pièce qui fait (ou défait) vos avis Airbnb.',
    intro:
      "La salle de bain est la pièce la plus scrutée par les voyageurs, et celle où les malfaçons coûtent le plus cher : infiltrations chez le voisin, joints noirs, douche qui déborde. Jean prend en charge la rénovation de A à Z : démolition, étanchéité, plomberie, carrelage, joints, électricité, accessoires.",
    icon: 'bath',
    image: 'salle-de-bain',
    includes: [
      'Démolition et évacuation des gravats',
      'Système d’étanchéité sous carrelage (douches à l’italienne)',
      'Plomberie complète, WC suspendu, meuble vasque',
      'Carrelage et faïence, niches de douche',
      'Joints époxy et silicones sanitaires',
      'Éclairage, miroirs, accessoires, ventilation',
    ],
    difference: [
      { title: 'Étanchéité garantie', text: 'Natte ou membrane d’étanchéité sous le carrelage, comme en Europe.' },
      { title: 'Des pentes qui évacuent', text: 'L’eau va vers le siphon, pas vers le couloir.' },
      { title: 'Un rendu hôtelier', text: 'Le niveau de finition qu’attendent vos voyageurs.' },
    ],
    faq: [
      {
        q: 'Combien de temps dure la rénovation d’une salle de bain ?',
        a: 'Comptez généralement 1 à 3 semaines selon la surface et les travaux. Idéal à programmer hors saison pour vos logements en location.',
      },
    ],
  },
  {
    slug: 'enduits',
    title: 'Enduits & préparation des murs',
    seoTitle: 'Enduits, lissage et réparation de murs — Martil, Tétouan, Tanger',
    metaDescription:
      'Enduits de lissage, rebouchage de fissures, traitement de l’humidité, enduits décoratifs. Des murs parfaitement droits avant peinture.',
    short: 'Rebouchage, lissage, traitement des fissures et de l’humidité. Des murs parfaitement droits.',
    hook: 'Un mur droit, ça se voit. Un mur bosselé aussi.',
    intro:
      "Façadier de métier, Jean maîtrise tous les enduits : lissage intérieur, enduits de façade, enduits décoratifs à la chaux, tadelakt. Il traite les fissures et les remontées d'humidité à la source, pour que la peinture ne cloque pas trois mois plus tard.",
    icon: 'trowel',
    image: 'enduits',
    includes: [
      'Rebouchage et pontage des fissures',
      'Enduit de lissage pour murs et plafonds',
      'Traitement des murs humides et salpêtre',
      'Enduits à la chaux et enduits décoratifs',
      'Réparation des angles et arêtes abîmés',
    ],
    difference: [
      { title: 'Contrôle en lumière rasante', text: 'Le test des pros pour débusquer le moindre défaut.' },
      { title: 'Traitement à la source', text: 'On ne masque pas l’humidité, on la traite.' },
      { title: 'Savoir-faire de façadier', text: '30 ans de pratique des enduits les plus exigeants.' },
    ],
    faq: [],
  },
  {
    slug: 'facade',
    title: 'Façade & ravalement',
    seoTitle: 'Ravalement de façade et peinture extérieure — Tétouan, Martil, Tanger',
    metaDescription:
      'Ravalement de façade, enduits extérieurs, traitement des fissures, peinture de façade, nettoyage. Le métier d’origine de Jean, façadier depuis 30 ans.',
    short: 'Ravalement, enduits extérieurs, fissures, peinture. Le métier d’origine de Jean.',
    hook: 'La façade, c’est la première photo de votre annonce.',
    intro:
      "Le soleil, le sel et le vent de la côte méditerranéenne abîment vite les façades. Façadier pendant 30 ans en France, Jean diagnostique les fissures, traite les supports et applique des enduits et peintures adaptés au climat marin, pour une façade nette et durable.",
    icon: 'facade',
    image: 'facade',
    includes: [
      'Diagnostic de l’état de la façade',
      'Nettoyage haute pression, traitement anti-mousse',
      'Traitement des fissures et reprises d’enduit',
      'Peinture de façade et revêtements adaptés au climat marin',
      'Murets, clôtures, terrasses et garde-corps',
    ],
    difference: [
      { title: 'Le métier de Jean', text: '30 ans de façades en France : c’est sa spécialité d’origine.' },
      { title: 'Adapté au bord de mer', text: 'Produits résistants au sel, aux UV et à l’humidité.' },
      { title: 'Des finitions de près comme de loin', text: 'Encadrements nets, aucune coulure sur les menuiseries.' },
    ],
    faq: [],
  },
  {
    slug: 'etancheite',
    title: 'Étanchéité',
    seoTitle: 'Étanchéité de terrasse, toiture et salle de bain — Tétouan, Tanger',
    metaDescription:
      'Étanchéité de terrasses, toits-terrasses, balcons et douches. Fin des infiltrations et des dégâts des eaux dans vos logements.',
    short: 'Terrasses, toits-terrasses, balcons, douches. Fini les infiltrations.',
    hook: 'L’eau trouve toujours le chemin. Sauf si on lui ferme la porte.',
    intro:
      "Les infiltrations sont l'un des problèmes les plus fréquents dans la région, notamment sur les toits-terrasses et les douches mal réalisées. Jean identifie l'origine de la fuite et met en œuvre une étanchéité durable : résines, membranes, relevés et joints adaptés.",
    icon: 'shield',
    image: 'etancheite',
    includes: [
      'Recherche de l’origine des infiltrations',
      'Étanchéité liquide (résine) de terrasses et balcons',
      'Membranes d’étanchéité sous carrelage',
      'Traitement des relevés, seuils et évacuations',
      'Étanchéité des douches et pièces d’eau',
    ],
    difference: [
      { title: 'On traite la cause', text: 'Pas un simple coup de silicone sur la fissure.' },
      { title: 'Des systèmes complets', text: 'Primaire, armature, résine : les règles de l’art.' },
      { title: 'Contrôle à l’eau', text: 'Test de mise en eau avant la pose du revêtement.' },
    ],
    faq: [],
  },
  {
    slug: 'electricite',
    title: 'Électricité légère',
    seoTitle: 'Petits travaux d’électricité — prises, éclairage, luminaires — Martil',
    metaDescription:
      'Remplacement de prises et interrupteurs, pose de luminaires, spots LED, éclairage de salle de bain. Des installations propres et sécurisées.',
    short: 'Prises, interrupteurs, luminaires, spots LED. Propre, aligné, sécurisé.',
    hook: 'Une prise de travers, et c’est tout l’appartement qui fait « bricolé ».',
    intro:
      "Prises mal fixées, fils apparents, luminaires de travers : ce sont des détails qui font immédiatement baisser la perception de qualité d'un logement. Jean réalise vos petits travaux d'électricité avec soin et dans le respect des règles de sécurité.",
    icon: 'bolt',
    image: 'electricite',
    includes: [
      'Remplacement de prises, interrupteurs et plaques',
      'Pose de luminaires, appliques, suspensions',
      'Spots LED encastrés',
      'Éclairage de miroir et de salle de bain',
      'Ajout de prises USB, prises extérieures',
    ],
    difference: [
      { title: 'Tout est aligné', text: 'Prises et interrupteurs de niveau, à la même hauteur.' },
      { title: 'Rien ne dépasse', text: 'Aucun fil apparent, des goulottes propres si nécessaire.' },
      { title: 'La sécurité d’abord', text: 'Travail hors tension, matériel conforme.' },
    ],
    faq: [],
  },
  {
    slug: 'menuiserie',
    title: 'Petite menuiserie',
    seoTitle: 'Petite menuiserie — portes, placards, plinthes — Martil, Tétouan',
    metaDescription:
      'Ajustement et pose de portes, placards, étagères, plinthes, quincaillerie. Les finitions qui font la différence dans un logement en location.',
    short: 'Portes, placards, étagères, plinthes, quincaillerie. Tout ferme, tout est d’équerre.',
    hook: 'Une porte qui frotte, c’est un locataire qui s’agace.',
    intro:
      "Portes qui ferment mal, placards qui baillent, plinthes décollées, poignées branlantes… Jean règle, ajuste et pose les éléments de menuiserie intérieure pour que tout fonctionne parfaitement et que l'ensemble soit net.",
    icon: 'saw',
    image: 'menuiserie',
    includes: [
      'Réglage et rabotage de portes',
      'Pose de portes intérieures et blocs-portes',
      'Placards, étagères, rangements sur mesure simples',
      'Pose de plinthes, baguettes, quincaillerie',
      'Remplacement de serrures et poignées',
    ],
    difference: [
      { title: 'Ajustement millimétré', text: 'Jeux réguliers autour des portes, fermeture en douceur.' },
      { title: 'Finitions soignées', text: 'Joints acryliques et retouches peinture après pose.' },
      { title: 'Des fixations solides', text: 'Faites pour supporter le passage intensif des locataires.' },
    ],
    faq: [],
  },
  {
    slug: 'remise-en-etat',
    title: 'Remise en état complète',
    seoTitle: 'Remise en état d’appartement et de villa — Martil, Tétouan, Tanger',
    metaDescription:
      'Remise en état complète de logements : après locataire, avant mise en location ou avant vente. Peinture, joints, plomberie, électricité, nettoyage de fin de chantier.',
    short: 'Après locataire, avant saison, avant vente. Votre bien retrouve un aspect neuf.',
    hook: 'Votre bien mérite de ressembler à ses photos.',
    intro:
      "Usure, petites dégradations, réparations faites à la va-vite par le passé : de nombreux logements de la région ont besoin d'une vraie remise à niveau. Jean dresse la liste de tout ce qui doit être repris, vous propose un devis clair, puis remet le logement en état, pièce par pièce, jusqu'au nettoyage final.",
    icon: 'home',
    image: 'remise-en-etat',
    includes: [
      'Visite et état des lieux détaillé, avec photos',
      'Liste priorisée des travaux (indispensable / conseillé / optionnel)',
      'Peinture, joints, petites réparations, plomberie, électricité',
      'Remplacement d’éléments usés : robinetterie, poignées, luminaires',
      'Nettoyage de fin de chantier',
      'Reportage photo « après » utilisable pour votre annonce',
    ],
    difference: [
      { title: 'Un seul artisan pour tout', text: 'Pas de coordination de cinq corps de métier à distance.' },
      { title: 'Rien n’est oublié', text: 'Une liste de contrôle pièce par pièce, comme en France.' },
      { title: 'Prêt à louer', text: 'Vous récupérez un logement propre, fonctionnel et photogénique.' },
    ],
    faq: [],
  },
];

export const getService = (slug: string) => services.find((s) => s.slug === slug);
