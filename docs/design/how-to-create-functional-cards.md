---
template: main.html
title: How to create functional cards
description: How to create functional cards using your own look & feel is not very difficult. One example based on example 12 is shown here...
tags:
  - Design
  - Functional Cards
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

The same holds true about using [CSS Classes][Swiss Army Knife CSS Classes]:

- Create user CSS Classes from the start of your design
- Or experiment first with several cards, before creating those classes.

Either way: you will get your functional cards!

!!! Info "This section serves as an example of functional cards, not as a starting point to win a Red-Dot Award!"

##:sak-sak-logo: Step 1: Choose your look & feel

For these sections, I choose [Example 12][Swiss Army Knife Example 12]: as the basis for creating some example functional cards.

!!! Warning "These pages is still a work in progress, so AS IS"

!!! Info "This example view requires one of the [Home Assistant Material 3 Themes][ham3-url]"

![AmoebeLabs Swiss Army Knife Custom Card Example 12 Light - Wide cards]
_Light example using [HA Material 3 theme d06 (Teal blue)][ham3-d06-url]_

<br>![AmoebeLabs Swiss Army Knife Custom Card Example 12 Dark - Wide cards]
_Dark example using [HA Material 3 theme d06 (Teal blue)][ham3-d06-url]_


##:sak-sak-logo: Step 2: Make a list
I use a Mobile First approach. All cards should be readable and usable on my iPhone. So cards can't be very small!

In most cases that means for the card size:

- Cards to fit a 1 column grid
- Cards to fit a 2 column grid
- Cards to fit a 3 column grid

4 column cards are too small on my mobile, hence I don't use or create them.

##:sak-sak-logo: Step 3: Sketch some cards
I made some rough sketches based on the [example 12 card][Swiss Army Knife Example 12]:, but also used some cards I made as the basis to create other variants and cards.

##:sak-sak-logo: Step 4: Create them
Last step is to create the cards you need.

As an example, I created a bunch of functional cards for inspiration and learning. Check the next page for that!

<!-- Image references -->

[AmoebeLabs Swiss Army Knife Custom Card Example 12]: ../assets/screenshots/sak-example-12.png
[AmoebeLabs Swiss Army Knife Custom Card Example 12 Light - Wide cards]: ../assets/screenshots/sak-example-12-m3-d06-light.png "Swiss Army Knife Example 12 - Wide cards, light theme"
[AmoebeLabs Swiss Army Knife Custom Card Example 12 Dark - Wide cards]: ../assets/screenshots/sak-example-12-m3-d06-dark.png "Swiss Army Knife Example 12 - Wide cards, dark theme"
[AmoebeLabs Swiss Army Knife Custom Card Example 12 Cards]: ../assets/screenshots/swiss-army-knife-example-12c-800x800.gif

<!--- Internal References... --->
[Swiss Army Knife Tutorial 02]: ../tutorials/10-step-tutorial-02-intro.md
[Swiss Army Knife Example 12]: ../examples/example-12.md
[Swiss Army Knife CSS Classes]: ../basics/styling/classes.md


<!--- External References... --->

[ham3-d06-url]: https://material3-themes-manual.amoebelabs.com/examples/material3-example-theme-d06-tealblue/
[ham3-url]: https://material3-themes-manual.amoebelabs.com/
[ham3-c12-url]: https://material3-themes-manual.amoebelabs.com/examples/material3-example-theme-c12-magenta/