---
template: main.html
description: The Swiss Army Knife custom card has built-in support for Theming, color swatches and color palettes. This support is aimed to re-use colors with support for light and dark modes.
tags:
  - Theming
  - Styling
---
<!-- GT/GL -->
# Overview of Theming, Swatch and Palette support
:octicons-tag-24: 2.4.5 · :octicons-tools-24: Experimental

Version 2.4.5 adds support for theming and the use of palettes and swatches per card.

##:sak-sak-logo: What is What?

| What | Level | Description |
|-|-|-|
| Theme | Card | Uses a known theme in Home Assistant as the theme for the card |
| Palette | Card | A collection of swatches for a card |
| Swatch | N/A | A collection of colors for any mode, light mode and dark mode. The definition is identical to Home Assistant themes |


##:sak-sak-logo: Known problems
Currently, the Segmented Arc not always works nicely with a Color Swatch. In some cases, it fetches its colors directly from Lovelace to do color calculations, and does thereby 'skip' the colors defined at card level.


