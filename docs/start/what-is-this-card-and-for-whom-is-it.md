---
template: main.html
title: What is this card and for whom is it?
description: "The versatile Swiss Army Knife custom card for Home Assistant is not your standard custom card: It allows you to design your unique visualization!"
tags:
  - Introduction
---
<!-- GT/GL -->
# What is this card, and for whom is it?

##:sak-sak-logo: What is this custom card?

Well, if you look at some of the examples below (more are in the [examples][examples] section), you literally _see_ what kind of card this is: it is a versatile custom card that can be used to create unique visualizations!

To create your [unique design][how-to-design-your-card], the Swiss Army Knife custom card has several [tools][tools-and-toolsets] for you to use which can be [styled][css-styling] and [animated][css-animations] in different ways.

#### YAML to define Tools, Toolsets, CSS styling and Animations

The [designs][how-to-design-your-card] are fully defined in YAML, and with the available [17 basic, advanced, and Home Assistant-specific SVG-based tools](https://swiss-army-knife-card-manual.amoebelabs.com/basics/tools-and-toolsets/) you can implement your visualization.
![Swiss Army Knife Toolset and Tool Placement]

Things like [templates][template-overview] make re-use between designs possible. On top of that, several CSS [styling](https://swiss-army-knife-card-manual.amoebelabs.com/basics/styling/styles/) and [built-in animation](https://swiss-army-knife-card-manual.amoebelabs.com/basics/animations/css-animations/) options are available. 
You can even define [your own](https://swiss-army-knife-card-manual.amoebelabs.com/basics/styling/classes/#using-your-own-tool-classes) CSS classes and animations, and use them in your designs.

#### User interactions and haptic feedback
You can define [user interactions](https://swiss-army-knife-card-manual.amoebelabs.com/basics/user-interactions/) per tool to call the 'more info' dialog or to control lights or switches. You can even define more than 1 action per tap action.
[Haptic feedback][haptic-feedback] can complement the click/tap action if your mobile phone supports that.

#### Material 3 themes to have nice light/dark themes
If you want to make the most of this card's styling, use one of the [Material 3 themes for Home Assistant][ha-m3-themes-url]. This gives you fully compatible [light and dark themes][ha-m3-examples-url]!

![ha-m3-combined-url]

Swiss Army Knife card examples [11][Example 11] and [12][Example 12] use these [Home Assistant Material 3 themes][ha-m3-themes-url] to implement cards that adapt to theme colors and to theme modes (dark/light).

###:sak-sak-logo: Overview of all the examples

|  |  |
| ----- | ----- |
| **[Example 1 - Airvisual and Weather forecast][Example 1]:** [![AmoebeLabs Swiss Army Knife Custom Card Example 1 - AirVisual and Weather forecast]][Example 1]  | **[Example 6 - Weather on SVG background][Example 6]:** [![AmoebeLabs Swiss Army Knife Custom Card Example 6 - Weather on SVG background]][Example 6] |
| **[Example 3 - Sensors][Example 3]:** [![AmoebeLabs Swiss Army Knife Custom Card Example 3 - Sensors]][Example 3] | **[Example 7 - Servers][Example 7]:** [![AmoebeLabs Swiss Army Knife Custom Card Example 7 - Servers]][Example 7] |
| **[Example 9 - High Contrast][Example 9]:** [![AmoebeLabs Swiss Army Knife Custom Card Example 9 - Hight Contrast]][Example 9]   | **[Example 10 - Colorful mix][Example 10]:** [![AmoebeLabs Swiss Army Knife Custom Card Example 10 - Colorful mix]][Example 10] |
| **[Example 11 - Boiler and Electricity][Example 11]:** [![AmoebeLabs Swiss Army Knife Custom Card Example 11 - Boiler and electricity]][Example 11] | **[Example 12 - Wide cards][Example 12]:** [![AmoebeLabs Swiss Army Knife Custom Card Example 12 - Wide cards]][Example 12] |

##:sak-sak-logo: And for whom is it meant?
It is not a standard card. It has no fixed design, nor fixed functionality. It doesn't do _anything_ out-of-the-box!

This card needs [YOU][how-to-design-your-card]. It needs some time to _learn_ this card, _understand_ its possibilities, and create a _design_. If that is what you want, this is your card. Let your creativity flow and enjoy the results!

If that is not your thing, you should look either at a different card, adapt one of the examples from my installation, or even better: use one of the examples made by me or someone else in the community!

And don't feel intimidated by the word "design". Most of my designs look like this: A simple sketch on my iPad that is later implemented in a YAML view using trial-and-error!

![Swiss Army Knife Design Sketch Example]

You don't have to design your card if some design suits you of course!

And if that card is put into a decluttering template for instance, you only have to define the entities for that card and some settings. In this way, a custom-designed card can be used as a fixed-layout card!

[Example 3][Example 3] for instance is made that way. The view contains these definitions:
```yaml title="From: view-sake3.yml" linenums="1"
  - type: horizontal-stack
    cards:
      - type: custom:decluttering-card
        template: sak_sensor_history_template_nm_tpl
        variables:
          - entity: sensor.livingroom_iaq_temperature
          - name: Woonkamer
          - icon: mdi:thermometer
      - type: custom:decluttering-card
        template: sak_sensor_history_template_nm_tpl
        variables:
          - entity: sensor.kitchen_iaq_temperature
          - name: Keuken
          - icon: mdi:thermometer
      - type: custom:decluttering-card
        template: sak_sensor_history_template_nm_tpl
        variables:
          - entity: sensor.hall_gf_iaq_temperature
          - name: Hal
          - icon: mdi:thermometer
```

The electricity card in [example 11][Example 11] and the several cards used in [example 12][Example 12] could also be used in this way! 

Either way, enjoy this card!

##:sak-sak-logo: Where to go from here?
Because of the numerous possibilities of this custom card, you might wonder where to start.

The answer is: it _depends!_

=== "It is a bit new to me!"
    If this is all a bit new, take a look at the [10 Step Tutorials][Swiss Army Knife 10 step tutorials] (I just started making them, so there aren't a lot of them yet). 
    
    They will show you the basics, and some more advanced YAML configurations, and show you step-by-step how to make certain visualizations.
    
    If you understand them, take a more in-depth look at the 12 examples.
=== "I like decluttering templates, button-card, etc. I'll take the deep dive!"
    Well, head over to the installation, and install the Examples Dashboard. Then integrate them using your own entities, and start learning from those examples!
    
    The examples use different strategies:
    - A lot of copy/paste YAML
    - Swiss Army Knife Templates
    - Decluttering Templates


<!--- Image references --->

[AmoebeLabs Swiss Army Knife Custom Card Example 1 - AirVisual and Weather forecast]: ../assets/screenshots/sak-example-1b.png "Swiss Army Knife Example 1 - AirVisual and Weather forecast"
[AmoebeLabs Swiss Army Knife Custom Card Example 2 - Lights]: ../assets/screenshots/sak-example-2.png "Swiss Army Knife Example 2 - Lights"
[AmoebeLabs Swiss Army Knife Custom Card Example 3 - Sensors]: ../assets/screenshots/sak-example-3.png "Swiss Army Knife Example 3 - Sensors"
[AmoebeLabs Swiss Army Knife Custom Card Example 4 - More sensors]: ../assets/screenshots/sak-example-4.png "Swiss Army Knife Example 4 - More sensors"
[AmoebeLabs Swiss Army Knife Custom Card Example 5 - Car dashboard alike]: ../assets/screenshots/sak-example-5.png "Swiss Army Knife Example 5 - Car dashboard alike"
[AmoebeLabs Swiss Army Knife Custom Card Example 6 - Weather on SVG background]: ../assets/screenshots/sak-example-6.png "Swiss Army Knife Example 6 - Weather on SVG background"
[AmoebeLabs Swiss Army Knife Custom Card Example 7 - Servers]: ../assets/screenshots/sak-example-7.png "Swiss Army Knife Example 7 - Servers"
[AmoebeLabs Swiss Army Knife Custom Card Example 8 - Homekit alike]: ../assets/screenshots/sak-example-8.png "Swiss Army Knife Example 8 - Homekit alike"
[AmoebeLabs Swiss Army Knife Custom Card Example 9 - Hight Contrast]: ../assets/screenshots/sak-example-9.png "Swiss Army Knife Example 9 - Hight Contrast"
[AmoebeLabs Swiss Army Knife Custom Card Example 10 - Colorful mix]: ../assets/screenshots/sak-example-10.png "Swiss Army Knife Example 10 - Colorful mix"
[AmoebeLabs Swiss Army Knife Custom Card Example 11 - Boiler and electricity]: ../assets/screenshots/sak-example-11-m3-c11-dark.png "Swiss Army Knife Example 11 - Boiler and electricity, dark theme"
[AmoebeLabs Swiss Army Knife Custom Card Example 12 - Wide cards]: ../assets/screenshots/sak-example-12-m3-d06-dark.png "Swiss Army Knife Example 12 - Wide cards, dark theme"

[Swiss Army Knife Toolset and Tool Placement]: ../assets/screenshots/sak-card-toolset-tool-placement-bluegrey.png
[Swiss Army Knife Design Sketch Example]: ../assets/screenshots/sak-design-sketch-procreate.png

<!-- Internal References -->
[examples]: ../examples/introduction.md
[Example 1]: ../examples/example-1.md
[Example 2]: ../examples/example-2.md
[Example 3]: ../examples/example-3.md
[Example 4]: ../examples/example-4.md
[Example 5]: ../examples/example-5.md
[Example 6]: ../examples/example-6.md
[Example 7]: ../examples/example-7.md
[Example 8]: ../examples/example-8.md
[Example 9]: ../examples/example-9.md
[Example 10]: ../examples/example-10.md
[Example 11]: ../examples/example-11.md
[Example 12]: ../examples/example-12.md

[tools-and-toolsets]: ../basics/tools-and-toolsets.md
[how-to-design-your-card]: ../design/how-to-design-your-card.md
[css-styling]: ../basics/styling/classes.md
[css-animations]: ../basics/animations/css-animations.md
[template-overview]: ../basics/templates/overview.md
[haptic-feedback]: ../basics/haptics.md
[Swiss Army Knife 10 step tutorials]: ../tutorials/10-step-tutorial-introduction.md


<!-- External References -->

[affinity-website-url]: https://affinity.serif.com/en-gb/
[ha-m3-themes-url]: https://material3-themes-manual.amoebelabs.com/
[ha-m3-examples-url]: https://material3-themes-manual.amoebelabs.com/examples/introduction/
[ha-m3-combined-url]: https://material3-themes-manual.amoebelabs.com/assets/screenshots/m3-example-d06-combined2.1.png
