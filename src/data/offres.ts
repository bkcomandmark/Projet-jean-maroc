export type Offre = {
  slug: string;
  name: string;
  tagline: string;
  forWho: string;
  includes: string[];
  highlight?: boolean;
};

// Formules pour propriétaires de logements en location (courte ou longue durée).
// Aucun prix affiché : tout est sur devis personnalisé.
export const offres: Offre[] = [
  {
    slug: 'check-up',
    name: 'Check-up Location',
    tagline: 'Le contrôle technique de votre logement',
    forWho: 'Pour savoir précisément ce qui ne va pas, avant que vos voyageurs ne le remarquent.',
    includes: [
      'Visite complète du logement, pièce par pièce',
      'Rapport photo détaillé envoyé sur WhatsApp ou par e-mail',
      'Liste priorisée : urgent / conseillé / optionnel',
      'Devis clair pour chaque intervention',
    ],
  },
  {
    slug: 'avant-saison',
    name: 'Remise à neuf Avant-Saison',
    tagline: 'Prêt à louer pour l’été',
    forWho: 'Pour redonner un coup de neuf à votre bien avant la haute saison, sans vous déplacer.',
    includes: [
      'Rafraîchissement peinture des pièces qui en ont besoin',
      'Réfection des joints de douche, baignoire, cuisine',
      'Réparation robinetterie, chasses d’eau, évacuations',
      'Réglage portes, placards, prises et luminaires',
      'Photos avant / après pour votre annonce',
    ],
    highlight: true,
  },
  {
    slug: 'entre-deux-locations',
    name: 'Suivi Entre-deux-Locations',
    tagline: 'Votre logement toujours impeccable',
    forWho: 'Pour les propriétaires et conciergeries qui veulent un artisan de confiance disponible toute l’année.',
    includes: [
      'Interventions rapides sur les petites dégradations',
      'Passage régulier de contrôle (fréquence à définir)',
      'Priorité d’intervention en cas de problème',
      'Compte rendu photo après chaque passage',
    ],
  },
  {
    slug: 'renovation-valorisation',
    name: 'Rénovation Valorisation',
    tagline: 'Augmentez la valeur et les revenus de votre bien',
    forWho: 'Pour transformer un logement fatigué en bien premium, qui se loue plus cher et plus souvent.',
    includes: [
      'Étude des travaux qui valorisent le plus votre bien',
      'Rénovation de salle de bain, cuisine, sols, peinture',
      'Coordination et supervision de toutes les équipes',
      'Suivi photo et vidéo à chaque étape',
      'Logement livré propre, prêt à photographier',
    ],
  },
];
