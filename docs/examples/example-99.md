---
template: main.html
title: "Example 99: Material 3 converter/viewer"
description: This visualization is used to convert a Material 3 theme (if available) and to show the currently selected Material 3 theme.
tags:
  - Examples
---
#Example 99: Material 3 Theme converter and viewer

!!! Info "This view requires one of the [Home Assistant Material 3 Themes][ham3-url]"


The example uses the dynamic Material 3 D07, DarkOliveGreen theme.

![Material 3 Theme Palette example]
_The pallette_

<br>![Material 3 Theme Surface example]
_The surfaces_

<br>![Material 3 Theme Light mode example]
_The Light Mode_

<br>![Material 3 Theme Dark mode example]
_The Dark Mode_

##:sak-sak-logo: Visualization
This visualization shows the currently active Material 3 theme.

It mimics the display created by the Figma Material 3 builder plugin.

Check the [Material 3 themes manual][ham3-url] for more info.


##:sak-sak-logo: How to make it work in your own installation

####In general

##:sak-sak-logo: View and Card Configuration

#### Lovelace view

| file | location | included from |
| ---- | -------- | ------------- |
| `view-sake99-m3.yml` | `/lovelace/views` | `sak-examples-dashboard.yaml`|

#### Decluttering templates
TBD

#### SAK templates
TBD

| name | file |
| ---- | -------- |
| `tbd` | `tbd.yaml` |

<!-- Image references -->

[AmoebeLabs Swiss Army Knife Custom Card Example 12]: ../assets/screenshots/sak-example-12.png
[AmoebeLabs Swiss Army Knife Custom Card Example 12 Light - Wide cards]: ../assets/screenshots/sak-example-12-m3-d06-light.png "Swiss Army Knife Example 12 - Wide cards, light theme"
[AmoebeLabs Swiss Army Knife Custom Card Example 12 Dark - Wide cards]: ../assets/screenshots/sak-example-12-m3-d06-dark.png "Swiss Army Knife Example 12 - Wide cards, dark theme"

[Material 3 Theme Palette example]: https://material3-themes-manual.amoebelabs.com/assets/screenshots/m3-theme-d07-palettes.png
[Material 3 Theme Surface example]: https://material3-themes-manual.amoebelabs.com/assets/screenshots/m3-theme-d07-surfaces.png
[Material 3 Theme Light mode example]: https://material3-themes-manual.amoebelabs.com/assets/screenshots/m3-theme-d07-light.png
[Material 3 Theme Dark mode example]: https://material3-themes-manual.amoebelabs.com/assets/screenshots/m3-theme-d07-dark.png

<!--- Internal References... --->


<!--- External References... --->

[ham3-url]: https://material3-themes-manual.amoebelabs.com/
