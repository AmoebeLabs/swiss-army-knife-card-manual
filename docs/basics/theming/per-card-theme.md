---
template: main.html
description: The Swiss Army Knife custom card has built-in support for Theming, color swatches and color palettes. This support is aimed to re-use colors with support for light and dark modes.
tags:
  - Theming
  - Styling
---
<!-- GT/GL -->
:octicons-tag-24: 2.4.5 · :octicons-tools-24: Experimental

##:sak-sak-logo: Card configuration

Using a specific Home Assistant theme for your Swiss Army Knife custom card is nothing more than specifying the name of the theme that is in the list of Home Assistant themes:

```yaml linenums="1" hl_lines="4"
  - type: 'custom:swiss-army-knife-card'
    entities:
      <list of entities>
    theme: M3-D04-Magenta
```
!!! Info "You can only select themes that are known to Home Assistant"

!!! Warning "Loading a specific theme per card does cost resources"
    Every theme needs RAM memory. If you only need a few colors, consider using a color swatch!

##:sak-sak-logo: Example views
The examples show the Magenta Material 3 theme applied to a single card between the other cards which use the Teal Blue Material 3 theme that is loaded by Home Assistant.

#### Example in light mode and alert 'off':

![Swiss Army Knife Theme Example D06 D04 Light Off]( ../../assets/screenshots/sak-theming-per-card-d06-d04-light-off.png){width="600"}
<br>
#### Example in light mode and alert 'on':
![Swiss Army Knife Theme Example D06 D04 Light On]( ../../assets/screenshots/sak-theming-per-card-d06-d04-light-on.png){width="600"}

#### Example in dark mode and alert 'off':
![Swiss Army Knife Theme Example D06 D04 Dark Off]( ../../assets/screenshots/sak-theming-per-card-d06-d04-dark-off.png){width="600"}
<br>
#### Example in dark mode and alert 'on':
![Swiss Army Knife Theme Example D06 D04 Dark On]( ../../assets/screenshots/sak-theming-per-card-d06-d04-dark-on.png){width="600"}
