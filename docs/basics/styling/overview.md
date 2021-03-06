---
template: main.html
description: The Swiss Army Knife custom card has built-in support for SVG and CSS styling. This support is aimed to re-use CSS classes, styles and animations.
tags:
  - Styling
---
<!-- GT/GL -->
#Overview of possible CSS and SVG styling

The Swiss Army Knife custom card has built-in support for SVG and CSS styling.

This support is aimed to re-use styles: SAK lets you define your own CSS classes, CSS Animations, and SVG Filters as a template and re-use them in any SAK card you make.

You are not limited to the SAK-defined classes, animations, and filters!

##:sak-sak-logo: Directory and File Structure (sort of)

Below you see the 'structure' of the definitions. The sak- files contain system definitions, not to be altered by the user. The user- files contain definitions that you as an enduser should use to define your own custom definitions.
```
.
├─ CSS keyframe animations
│  └─ template definition:
│     └─ sak_templates/sak-css-definitions.yaml
│     └─ sak_templates/user-css-definitions.yaml
│  └─ usage:
│     └─ through styles
│
├─ classes
│  └─ template definition:
│     └─ sak_templates/sak-css-definitions.yaml
│     └─ sak_templates/user-css-definitions.yaml
│  └─ usage:
│     └─ through class enabling
│
└─ styles/
│  └─ usage:
│     └─ default CSS styles
│     └─ default CSS animations
│     └─ SAK and user defined CSS keyframe animations

```