# 📚 DevBook - Template Site Astro

## 🎯 Objectifs

Créer un template de site Astro réutilisable avec :
- Composants modulaires
- Layout global SEO-friendly  
- Pages types essentielles
- Fonctionnalités optionnelles

## 🛠️ Installation et Configuration

### 1. Initialisation du projet
```bash
npm create astro@latest
```

### 2. Installation de Tailwind CSS
```bash
npm install -D @astrojs/tailwind tailwindcss
```

### 3. Configuration de Tailwind
- Ajout de l'intégration dans `astro.config.mjs`:
```js
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [tailwind()]
});
```

- Création du fichier `tailwind.config.cjs`:
```js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

### 4. Configuration des styles
- Import de Tailwind dans `src/styles/global.css`:
```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

## 🧩 Composants réutilisables (src/components/)

### Header.astro
- Navbar responsive avec logo et menu
- Menu hamburger pour mobile
- Transitions fluides
- Support du mode sombre

### Footer.astro
- Liens de navigation
- Liens vers les réseaux sociaux
- Mentions légales
- Newsletter (optionnel)

### Hero.astro
- Section d'introduction avec texte
- Call-to-Action (CTA)
- Image ou illustration
- Animations au scroll

### Button.astro
- Bouton stylisé avec Tailwind
- Support des slots pour le contenu
- Variants (primary, secondary, outline)
- États (hover, focus, disabled)

### Card.astro
- Carte pour services ou témoignages
- Design moderne et responsive
- Support des images
- Animations au hover

### Section.astro
- Wrapper avec padding
- Grille responsive
- Options de background
- Espacement configurable

## 🧱 Layout global (src/layouts/BaseLayout.astro)

### Configuration SEO
- Balises meta essentielles
- Open Graph tags
- Twitter Cards
- Sitemap.xml

### Configuration de base
- `lang="fr"` pour le français
- Google Fonts via CDN
- Favicon personnalisé
- Chargement de global.css

### Structure
```astro
---
// BaseLayout.astro
---
<html lang="fr">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width" />
    <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
    <link href="https://fonts.googleapis.com/css2?family=..." rel="stylesheet">
    <slot name="head" />
  </head>
  <body>
    <Header />
    <slot />
    <Footer />
  </body>
</html>
```

## 📄 Pages types (src/pages/)

### index.astro
- Landing page avec Hero
- Sections de présentation
- Call-to-Action principal
- Témoignages ou services

### contact.astro
- Formulaire de contact
- Intégration Netlify Forms
- Validation des champs
- Message de confirmation

### mentions-legales.astro
- Mentions légales
- Politique de confidentialité
- Conditions d'utilisation
- Informations légales

### 404.astro
- Page d'erreur 404 stylisée
- Message d'erreur explicatif
- Lien de retour à l'accueil
- Design cohérent avec le site

## 🧱 Structure (pages et sections clés)

### Accueil
- Accroche claire (« Cabinet d'avocats en droit XXX à Toulouse »)
- Mise en avant des domaines d'expertise
- Bouton "Contact" ou "Prendre rendez-vous"

### Cabinet / À propos
- Présentation de l'avocat.e ou de l'équipe
- Philosophie du cabinet
- Parcours académique et professionnel

### Domaines d'intervention
- Liste des spécialités (Droit pénal, droit de la famille, droit des affaires, etc.)
- Courts descriptifs (150–300 mots par domaine)

### Honoraires
- Mention de la transparence / forfaits possibles
- Tarification à l'heure, au forfait, ou selon conventions

### Actualités / Blog (optionnel mais fréquent)
- Articles de vulgarisation ou d'actualité juridique

### Contact
- Formulaire (nom, email, message)
- Adresse, numéro, email
- Carte intégrée (Google Maps)

## 🎨 Design & Atmosphère

### Couleurs
- Tons sobres : blanc, gris anthracite, bleu foncé, bordeaux
- Effet haut de gamme : police serif ou semi-serif, peu de fioritures
- Touches dorées ou cuivre parfois pour évoquer la confiance/luxe

### Typographie
- Titres en majuscule serif ou semi-serif
- Corps en sans-serif sobre

### Éléments visuels
- Portrait(s) professionnel(s) en noir et blanc ou filtre désaturé
- Photos du cabinet, de la ville, ou de livres de droit (toujours élégantes, souvent avec flou ou profondeur de champ)
- Pas de vidéos, ou très rarement

## ✍️ Ton & Contenu rédactionnel

### Ton
- Sérieux, rassurant, accessible
- Vocabulaire juridique maîtrisé, mais vulgarisé
- Mots clés récurrents : « accompagnement », « écoute », « rigueur », « transparence », « efficacité »

### Accroches fréquentes
- « Vous accompagner avec rigueur et humanité »
- « Un cabinet à l'écoute de vos besoins »
- « Des solutions juridiques claires et efficaces »

## 📦 Bonus : sections différenciantes possibles

Modules optionnels à prévoir dans le template :

- ✅ Avis clients (testimonials avec photos ou initiales)
- ✅ Prise de rendez-vous en ligne (Calendly ou plugin équivalent)
- ✅ Bloc "Ils parlent de nous" avec logos presse/barreau
- ✅ Engagements (charte de qualité, confidentialité, délais)
- ✅ FAQ juridique (utile pour le SEO + rassurant)

## 🗂️ Structure du projet
/src
  /components
    Header.astro
    Footer.astro
    Button.astro
    Hero.astro
  /layouts
    BaseLayout.astro
  /pages
    index.astro
    contact.astro
    mentions-legales.astro
    404.astro
  /styles
    global.css
/public
  favicon.svg
  /images
astro.config.mjs
tailwind.config.cjs
package.json
tsconfig.json