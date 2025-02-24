# View transition API demo

Repo for Devoxx 2025 quicky

# Introduction

A termes animer des tranistion de page en quelques lignes de JS et quelques lignes de CSS

Mais commençons par un cas simple: Animé le déplacement d'un éléments

# Demo

## Cas simple

Cas sans animation => j'applique une classe pour faire changer de place mon élément
Si je veux mettre de l'animation il faut jouer avec les propriétes CSS d'animation

Mais en ajoutant `document.startViewTransition` (attention pas dispo partout) je dis a mon navigateur

- Prendre un screenshot de la page avant
- Prendre un screenshot de la page après
- Animer la transition entre les deux

On peut voir maintenant un crossfade

par défaut il anime avec l'opacité mais je peux lui indiqué quoi

On peut dire quoi animer avec

```css
.element {
  view-transition-name: element-id;
}
```

## Cas complexe

## Usage react router

avec usetransition
