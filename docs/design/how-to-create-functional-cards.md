---
template: main.html
title: How to create functional cards
description: How to create functional cards using your own look & feel is not very difficult. One example based on example 12 is shown here...
tags:
  - Design
---
<!-- GT/GL -->

##:sak-sak-logo: The next step: create functional cards!

!!! Important "This page is still a work in progress!"


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


And YES, you can have Alert icons too if you want :smile:

![AmoebeLabs Swiss Army Knife Example 12 Alert Icons]

The first alert is defined as follows:
```yaml linenums="1"
- type: icon
  position:
    cx: 50
    cy: 50
    align: center
    icon_size: 25
  entity_index: 0                 # Use state from 0
  icon: mdi:alert-circle          # Use alert circle icon
  animations:
    - state: 'on'                 # If ON
      styles:
        icon:
          fill: red               # Set icon to red color
    - state: 'off'                # If OFF
      styles:
        icon:
          display: none           # Hide icon
  styles:
    icon:
      fill: grey                  # Default grey color
```

<!-- Image references -->

[AmoebeLabs Swiss Army Knife Custom Card Example 12]: ../assets/screenshots/sak-example-12.png
[AmoebeLabs Swiss Army Knife Custom Card Example 12 Light - Wide cards]: ../assets/screenshots/sak-example-12-m3-d06-light.png "Swiss Army Knife Example 12 - Wide cards, light theme"
[AmoebeLabs Swiss Army Knife Custom Card Example 12 Dark - Wide cards]: ../assets/screenshots/sak-example-12-m3-d06-dark.png "Swiss Army Knife Example 12 - Wide cards, dark theme"
[AmoebeLabs Swiss Army Knife Custom Card Example 12 Cards]: ../assets/screenshots/swiss-army-knife-example-12c-800x800.gif

[AmoebeLabs Swiss Army Knife Example 12 Alert Icons]: ../assets/screenshots/swiss-army-knife-example-12-alert-icons.png

<!--- Internal References... --->
[Swiss Army Knife Tutorial 02]: ../tutorials/10-step-tutorial-02-intro.md

<!--- External References... --->

[ham3-d06-url]: https://material3-themes-manual.amoebelabs.com/examples/material3-example-theme-d06-tealblue/
[ham3-url]: https://material3-themes-manual.amoebelabs.com/
[ham3-c12-url]: https://material3-themes-manual.amoebelabs.com/examples/material3-example-theme-c12-magenta/