---
template: main.html
---
<!-- GT/GL -->

The Swiss Army Knife has built-in support for SVG and CSS styling.

This support is aimed to re-use styles: SAK lets you define your own CSS classes, CSS Animations, and SVG Filters as a template and re-use them in any SAK card you make.

You are not limited to the SAK-defined classes, animations, and filters!

##:sak-sak-logo: Structure (sort of)
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