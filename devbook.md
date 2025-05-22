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