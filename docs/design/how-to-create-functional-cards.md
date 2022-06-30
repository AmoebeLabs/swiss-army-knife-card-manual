---
template: main.html
title: How to create functional cards
description: How to create functional cards using your own look & feel is not very difficult. One example based on example 12 is shown here...
tags:
  - Design
---
<!-- GT/GL -->

##:sak-sak-logo: The next step: create functional cards!

In the end, we all want functional cards, no matter what look & feel we are using. We want something for binary and analog sensors, switches, power outlets, etc.

This section, and the next sections is all about creating such cards.

The steps I normally take to work from a certain look & feel to functional cards is as follows:

- Create some cards to establish that look & feel.
- Make a list of functional cards you like to have
- Sketch them
- Create them

Now depending on how you want to work you:

- create SAK toolset templates from the start, just as I show in one of th 10 Step Tutorials. This can save you a lot of time creating functional cards, as you can re-use parts from the beginning!
- Create all cards first, check the similar toolsets, and create SAK templates 

The same holds true about using CSS Classes:

- Create user CSS Classes from the start of your design
- Or experiment first with several cards, before creating those classes.

Either way: you will get your functional cards!

!!! Info "This section serves as an example of functional cards, not as a starting point to win a Red-Dot Award!"

##:sak-sak-logo: Step 1: Choose your look & feel

For these sections, I choose Example 12 as the basis for creating some example functional cards.

!!! Warning "These pages is still a work in progress, so AS IS"

!!! Info "This example view requires one of the [Home Assistant Material 3 Themes][ham3-url]"

![AmoebeLabs Swiss Army Knife Custom Card Example 12 Light - Wide cards]
_Light example using [HA Material 3 theme d06 (Teal blue)][ham3-d06-url]_

<br>![AmoebeLabs Swiss Army Knife Custom Card Example 12 Dark - Wide cards]
_Dark example using [HA Material 3 theme d06 (Teal blue)][ham3-d06-url]_


##:sak-sak-logo: Step 2: Make a list
I use a Mobile First approach. All cards should be readable and usable on my iPhone. So cards can't be very small!

In most cases that means for the card size:

- Full width cards, ie 1 card in a horizontal stack
- Half width cards, ie 2 cards in a horizontal stack
- Third width cards, ie 3 cards in a horizontal stack


###Full Width Cards

I created the following full width cards:

- 6/1 AirVisual Card
- 6/1 Environment Sensor Card (based on my Zigbee sensors)
- 6/1 Server Statistics Card

The Hestia server statistics card is available as [tutorial \#2][Swiss Army Knife Tutorial 02].

In that tutorial you learn how to recreate that specific card and as a bonus you learn to make a SAK template that is used for the 4 sensors!

[Swiss Army Knife Functional Cards 12 Full Width Overview D06 Light]: ../assets/screenshots/sak-functional-cards-12-full-width-overview-d06-light.png
![Swiss Army Knife Functional Cards 12 Full Width Overview D06 Light]
_Light example using [HA Material 3 theme d06 (Teal blue)][ham3-d06-url]_


[Swiss Army Knife Functional Cards 12 Full Width Overview D06 Dark]: ../assets/screenshots/sak-functional-cards-12-full-width-overview-d06-dark.png
![Swiss Army Knife Functional Cards 12 Full Width Overview D06 Dark]
_Dark example using [HA Material 3 theme d06 (Teal blue)][ham3-d06-url]_

###Half Width Cards

I created the following half width cards:

- 3/1 Analog Sensor Card
- 3/1 Power Outlet Card (Switch + Power usage)
- 3/1 Binary Sensor with Alert Card (Fire, Movement)
- 3/1 Switch Card (Fan, Heater)
- 4/1 Binary Sensor with Alert Card (Fire, Movement)
- 4/1 Switch Card (Fan, Heater)
- 4/1 Analog Sensor Card with Minimalistic use of the Segmented Arc
- 4/1 Analog Sensor Card with Minimalistic use of the Segmented Arc and 24 hour history bar as background.

The 4/1 cards contains less information, or things are combined (no explicit switch, but using part of card as the switch), and use a more minimalistic approach.

[Swiss Army Knife Functional Cards 12 Half Width Overview D06 Light Off]: ../assets/screenshots/sak-functional-cards-12-half-width-overview-d06-light-off.png
![Swiss Army Knife Functional Cards 12 Half Width Overview D06 Light Off]
_Light example with switches/alerts OFF using [HA Material 3 theme d06 (Teal blue)][ham3-d06-url]_

[Swiss Army Knife Functional Cards 12 Half Width Overview D06 Light On]: ../assets/screenshots/sak-functional-cards-12-half-width-overview-d06-light-on.png
![Swiss Army Knife Functional Cards 12 Half Width Overview D06 Light On]
_Light example with switches/alerts ON using [HA Material 3 theme d06 (Teal blue)][ham3-d06-url]_

[Swiss Army Knife Functional Cards 12 Half Width Overview D06 Dark Off]: ../assets/screenshots/sak-functional-cards-12-half-width-overview-d06-dark-off.png
![Swiss Army Knife Functional Cards 12 Half Width Overview D06 Dark Off]
_Dark example with switches/alerts OFF using [HA Material 3 theme d06 (Teal blue)][ham3-d06-url]_

[Swiss Army Knife Functional Cards 12 Half Width Overview D06 Dark On]: ../assets/screenshots/sak-functional-cards-12-half-width-overview-d06-dark-on.png
![Swiss Army Knife Functional Cards 12 Half Width Overview D06 Dark On]
_Dark example with switches/alerts ON using [HA Material 3 theme d06 (Teal blue)][ham3-d06-url]_

###Third Width Cards
[Swiss Army Knife Functional Cards 12 Third Width Overview D06 Light Off]: ../assets/screenshots/sak-functional-cards-12-third-width-overview-d06-light-off.png
![Swiss Army Knife Functional Cards 12 Third Width Overview D06 Light Off]
_Light example with switches/alerts OFF using [HA Material 3 theme d06 (Teal blue)][ham3-d06-url]_

[Swiss Army Knife Functional Cards 12 Third Width Overview D06 Light On]: ../assets/screenshots/sak-functional-cards-12-third-width-overview-d06-light-on.png
![Swiss Army Knife Functional Cards 12 Third Width Overview D06 Light On]
_Light example with switches/alerts ON using [HA Material 3 theme d06 (Teal blue)][ham3-d06-url]_

[Swiss Army Knife Functional Cards 12 Third Width Overview D06 Dark Off]: ../assets/screenshots/sak-functional-cards-12-third-width-overview-d06-dark-off.png
![Swiss Army Knife Functional Cards 12 Third Width Overview D06 Dark Off]
_Dark example with switches/alerts OFF using [HA Material 3 theme d06 (Teal blue)][ham3-d06-url]_

[Swiss Army Knife Functional Cards 12 Third Width Overview D06 Dark On]: ../assets/screenshots/sak-functional-cards-12-third-width-overview-d06-dark-on.png
![Swiss Army Knife Functional Cards 12 Third Width Overview D06 Dark On]
_Dark example with switches/alerts ON using [HA Material 3 theme d06 (Teal blue)][ham3-d06-url]_

##:sak-sak-logo: How to



The animated version looks like this:
![AmoebeLabs Swiss Army Knife Custom Card Example 12 Cards]

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