# Jean Rénovation — site vitrine

Site de Jean, artisan rénovateur français installé à Martil (Maroc).
Site statique [Astro](https://astro.build) : très rapide, bien référencé, sans base de données ni maintenance de plugins.

## Lancer le site en local

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # génère le site final dans dist/
```

## Modifier le contenu

| Je veux changer…                                   | Fichier                              |
| -------------------------------------------------- | ------------------------------------ |
| Nom, téléphones, WhatsApp, e-mail, zones           | `src/config/site.ts`                 |
| Les prestations (textes, listes, FAQ)              | `src/data/services.ts`               |
| Les formules Location / Airbnb                     | `src/data/offres.ts`                 |
| Les photos                                         | `src/data/images.ts`                 |
| La FAQ de l'accueil                                | `src/data/faq.ts`                    |
| Les pages                                          | `src/pages/*.astro`                  |
| Couleurs, typographies                             | `src/styles/global.css` (`:root`)    |

### Ajouter un article de blog

Créer un fichier `src/content/blog/mon-article.md` :

```md
---
title: "Titre de l'article (avec le mot-clé principal)"
description: "Résumé de 150 caractères environ, affiché dans Google."
date: 2026-12-01
image: salle-de-bain   # une clé de src/data/images.ts
category: Entretien
---

Texte en Markdown…
```

L'article apparaît automatiquement sur `/blog/`, dans le sitemap et le flux RSS.

### Remplacer une photo

1. Déposer le fichier dans `public/images/` (ex. `public/images/jean.jpg`, format JPG/WebP, ~1600 px de large).
2. Dans `src/data/images.ts`, remplacer l'`id` par `'/images/jean.jpg'`.

## Formulaire de devis

Le formulaire utilise **Netlify Forms** : à la mise en ligne sur Netlify, les demandes arrivent dans le tableau de bord Netlify
et peuvent être transférées par e-mail (Site settings → Forms → Form notifications).
Le visiteur peut aussi envoyer sa demande pré-remplie directement sur **WhatsApp**.

## Mise en ligne (Netlify)

1. Connecter le dépôt GitHub sur [app.netlify.com](https://app.netlify.com) → « Add new site » → « Import from Git ».
2. Les réglages sont lus depuis `netlify.toml` (build `npm run build`, dossier `dist`).
3. Dans *Environment variables*, définir `SITE_URL` avec l'adresse définitive (ex. `https://jean.mondomaine.com`).
4. Brancher le sous-domaine / domaine dans *Domain management*.

## À compléter avant le lancement

- [ ] Vrais numéros (Maroc + France) et e-mail dans `src/config/site.ts`
- [ ] Photo de Jean (`jean` dans `src/data/images.ts`)
- [ ] Mentions légales (`src/pages/mentions-legales.astro`) une fois l'auto-entreprise immatriculée
- [ ] `SITE_URL` définitive
- [ ] Fiche Google Business Profile « Jean Rénovation » à Martil (essentiel pour le référencement local)
