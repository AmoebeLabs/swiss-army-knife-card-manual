---
template: main.html
title: How to create functional cards
description: How to create functional cards using your own look & feel is not very difficult. One example based on example 12 is shown here...
tags:
  - Design
---
<!-- GT/GL -->

##:sak-sak-logo: The next step: create functional cards!

!!! Warning "These pages is still a work in progress, so AS IS"


!!! Info "This example view requires one of the [Home Assistant Material 3 Themes][ham3-url]"

![AmoebeLabs Swiss Army Knife Custom Card Example 12 Light - Wide cards]
_Light example using [HA Material 3 theme d06 (Teal blue)][ham3-d06-url]_

<br>![AmoebeLabs Swiss Army Knife Custom Card Example 12 Dark - Wide cards]
_Dark example using [HA Material 3 theme d06 (Teal blue)][ham3-d06-url]_


##:sak-sak-logo: How to
The Hestia server statistics card is available as [tutorial \#2][Swiss Army Knife Tutorial 02].

In this tutorial you learn how to recreate that specific card and as a bonus you learn to make a SAK template that is used for the 4 sensors.

Furthermore, to show how you can create a full set of cards using a certain look & feel, I just created this example:

You see the following fixed-function cards:

Full length (aspectratio 6/1) cards:

- An AirVisual Card
- An Environment Card with battery/linkquality (Bath \#2)
- A Server Statistics Card (Hestia)

Half length (aspectratio 3/1) cards:

- A Power Usage Card (Kitchen)
- A Switch w/ Power Usage Card (Air)
- An Occupancy Card with battery/linkquality (Movement)
- A Fan Card (Fan)
- A Fire Detection Card with battery/linkquality (Fire 1st, same sensor as Movement)
- A Switch Card (Heater)

The animated version looks like this:
![AmoebeLabs Swiss Army Knife Custom Card Example 12 Cards]


Current implementation:

![AmoebeLabs Swiss Army Knife Functional Cards Overview 12 D06 Light Off]

![AmoebeLabs Swiss Army Knife Functional Cards Overview 12 D06 Light On]

And the dark variants with switches / alerts ON:

![AmoebeLabs Swiss Army Knife Functional Cards Overview 12 D06 Dark On]

And using a Purple Material 3 theme:

![AmoebeLabs Swiss Army Knife Functional Cards Overview 12 C11 Light On]

And an Olive Green Material 3 theme:

![AmoebeLabs Swiss Army Knife Functional Cards Overview 12 D07 Light On]

<!-- Image references -->

[AmoebeLabs Swiss Army Knife Custom Card Example 12]: ../assets/screenshots/sak-example-12.png
[AmoebeLabs Swiss Army Knife Custom Card Example 12 Light - Wide cards]: ../assets/screenshots/sak-example-12-m3-d06-light.png "Swiss Army Knife Example 12 - Wide cards, light theme"
[AmoebeLabs Swiss Army Knife Custom Card Example 12 Dark - Wide cards]: ../assets/screenshots/sak-example-12-m3-d06-dark.png "Swiss Army Knife Example 12 - Wide cards, dark theme"
[AmoebeLabs Swiss Army Knife Custom Card Example 12 Cards]: ../assets/screenshots/swiss-army-knife-example-12c-800x800.gif

[AmoebeLabs Swiss Army Knife Example 12 Alert Icons]: ../assets/screenshots/swiss-army-knife-example-12-alert-icons.png
[AmoebeLabs Swiss Army Knife Example 12 D06 Light]: ../assets/screenshots/swiss-army-knife-example-12d-d06-light.png
[AmoebeLabs Swiss Army Knife Example 12 D06 Dark On]: ../assets/screenshots/swiss-army-knife-example-12d-d06-dark-on.png
[AmoebeLabs Swiss Army Knife Example 12 D06 Dark Off]: ../assets/screenshots/swiss-army-knife-example-12d-d06-dark-off.png

[AmoebeLabs Swiss Army Knife Example 12 D07 Light]: ../assets/screenshots/swiss-army-knife-example-12d-d07-light.png
[AmoebeLabs Swiss Army Knife Example 12 C11 Light]: ../assets/screenshots/swiss-army-knife-example-12d-c11-light.png

[AmoebeLabs Swiss Army Knife Functional Cards Overview 12 D06 Light Off]: ../assets/screenshots/sak-functional-cards-12-overview-d06-light-off.png
[AmoebeLabs Swiss Army Knife Functional Cards Overview 12 D06 Light On]: ../assets/screenshots/sak-functional-cards-12-overview-d06-light-on.png
[AmoebeLabs Swiss Army Knife Functional Cards Overview 12 D07 Light On]: ../assets/screenshots/sak-functional-cards-12-overview-d07-light-on.png
[AmoebeLabs Swiss Army Knife Functional Cards Overview 12 C11 Light On]: ../assets/screenshots/sak-functional-cards-12-overview-c11-light-on.png
[AmoebeLabs Swiss Army Knife Functional Cards Overview 12 D06 Dark On]: ../assets/screenshots/sak-functional-cards-12-overview-d06-dark-on.png

[Swiss Army Knife Functional Card AirVisual D06 Light]: ../assets/screenshots/sak-functional-card-12-full-width-airvisual-theme-d06-light.png
[Swiss Army Knife Functional Card Binary Sensor Alert D06 Dark On]: ../assets/screenshots/sak-functional-card-12-third-width-binary-sensor-alert-theme-d06-dark-on.png
[Swiss Army Knife Functional Card Binary Sensor Alert D06 Light On]: ../assets/screenshots/sak-functional-card-12-third-width-binary-sensor-alert-theme-d06-light-on.png
[Swiss Army Knife Functional Card Binary Sensor Alert D06 Light Off]: ../assets/screenshots/sak-functional-card-12-third-width-binary-sensor-alert-theme-d06-light-off.png
[Swiss Army Knife Functional Card Switch D06 Light]: ../assets/screenshots/sak-functional-card-12-half-width-switch-theme-d06-light.png
[Swiss Army Knife Functional Card Power Outlet D06 Light]: ../assets/screenshots/sak-functional-card-12-half-width-power-outlet-theme-d06-light.png
[Swiss Army Knife Functional Card AQI Sensor D06 Light]: ../assets/screenshots/sak-functional-card-12-full-width-environment-sensor-theme-d06-light.png
[Swiss Army Knife Functional Card Binary Sensor D06 Light]: ../assets/screenshots/sak-functional-card-12-half-width-binary-sensor-theme-d06-light.png


<!--- Internal References... --->
[Swiss Army Knife Tutorial 02]: ../tutorials/10-step-tutorial-02-intro.md

<!--- External References... --->

[ham3-d06-url]: https://material3-themes-manual.amoebelabs.com/examples/material3-example-theme-d06-tealblue/
[ham3-url]: https://material3-themes-manual.amoebelabs.com/
[ham3-c12-url]: https://material3-themes-manual.amoebelabs.com/examples/material3-example-theme-c12-magenta/