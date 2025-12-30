# Documentation des composants

## Composants réutilisables

### Hero
Composant d'en-tête avec gradient et CTA.

**Props :**
- `title: string` - Titre principal
- `subtitle: string` - Sous-titre
- `theme: 'blue' | 'green'` - Thème de couleur
- `phone?: string` - Numéro de téléphone (optionnel)
- `email?: string` - Email (optionnel)

**Exemple :**
```tsx
<Hero
  title="Blue Lodge"
  subtitle="Charmant 2 pièces à Saint-Malo"
  theme="blue"
  phone="+33 6 12 34 56 78"
  email="contact@bluelodge.fr"
/>
```

### Section
Wrapper de section avec animation au scroll.

**Props :**
- `children: ReactNode` - Contenu de la section
- `className?: string` - Classes CSS additionnelles
- `id?: string` - ID pour l'ancre

**Exemple :**
```tsx
<Section id="features" className="bg-gray-50">
  <h2>Équipements</h2>
</Section>
```

### FeatureCard
Carte d'équipement avec icône.

**Props :**
- `icon: LucideIcon` - Icône Lucide
- `title: string` - Titre de la carte
- `description: string` - Description
- `theme: 'blue' | 'green'` - Thème de couleur
- `delay?: number` - Délai d'animation (optionnel)

**Exemple :**
```tsx
<FeatureCard
  icon={Wifi}
  title="WiFi gratuit"
  description="Connexion internet incluse"
  theme="blue"
  delay={0.1}
/>
```

### ContactSection
Section de contact avec formulaire.

**Props :**
- `theme: 'blue' | 'green'` - Thème de couleur
- `phone?: string` - Numéro de téléphone (optionnel)
- `email?: string` - Email (optionnel)
- `address?: string` - Adresse (optionnel)

**Exemple :**
```tsx
<ContactSection
  theme="blue"
  phone="+33 6 12 34 56 78"
  email="contact@bluelodge.fr"
  address="Saint-Malo"
/>
```

### Navbar
Barre de navigation responsive.

**Props :**
- `theme?: 'blue' | 'green'` - Thème de couleur (optionnel)

**Exemple :**
```tsx
<Navbar theme="blue" />
```

## Thèmes de couleurs

### Blue Lodge
- Couleurs principales : `blue-lodge-*` (500, 600, 700)
- Utilisé pour : Blue Lodge page

### Green Lodge
- Couleurs principales : `green-lodge-*` (500, 600, 700)
- Utilisé pour : Green Lodge page

Les couleurs sont définies dans `tailwind.config.js`.

## Icônes

Le projet utilise `lucide-react` pour les icônes. Exemples :
- `Wifi`, `Car`, `Waves`, `Bed`, `Shower`, `Home`, etc.

## Animations

Les animations utilisent `framer-motion` :
- Apparition au scroll (`whileInView`)
- Hover effects (`whileHover`, `whileTap`)
- Transitions fluides

