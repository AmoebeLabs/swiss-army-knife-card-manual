---
template: main.html
title: "Functional Cards: Light Switch with slider Card"
description: "Example of functional card, Light card with slider"
hideno:
  toc
tags:
  - Design
  - Functional Card
  - Light Card
---
<!-- GT/GL -->

![Swiss Army Knife Functional Card Light with Slider D06 Light Off](../assets/screenshots/sak-functional-card-12-light-slider-theme-d06-light-off.png){width="300"}
![Swiss Army Knife Functional Card Light with Slider D06 Light On](../assets/screenshots/sak-functional-card-12-light-slider-theme-d06-light-on.png){width="300"}
<br>![Swiss Army Knife Functional Card Light with Slider D06 Dark Off](../assets/screenshots/sak-functional-card-12-light-slider-theme-d06-dark-off.png){width="300"}
![Swiss Army Knife Functional Card Light with Slider D06 Dark On](../assets/screenshots/sak-functional-card-12-light-slider-theme-d06-dark-on.png){width="300"}

This card uses the [Material 3 theme D06, TealBlue][ham3-d06-url]

| Description| Aspectratio| Target Size |
|-|-|-|
| A card that can control a light and includes a slider for brightness percentage| 3/1 | Grid with 2 columns |

| SAK Tool| Used for |
|-|-|
| Circle | The half circle, as the left part of the circle is cutoff by the card. Animated, state dependent|
| Icon | Entity Icon. Animated, state dependent|
| Switch | The Switch to toggle the light|
| Name | Name of Entity|
| State | Brightness Attribute (from slider)|
| Slider | Slider to control the brightness of the light|

##:sak-sak-logo: Interaction

| Part | Description|
|-|-|
| Left part | Toggles the light once tapped|
| Slider | Sets the brightness of the light|
| Other parts | All tools connected to an entity do show by default the "more-info" dialog once clicked |

##:sak-sak-logo: Usage (Not Yet Implemented)
If the below YAML example definition is encapsulated into a decluttering_template, its usage would be:

```yaml linenums="1"
- type: custom:decluttering-card
  template: sak_card_binary_sensor1
  variables:
    - ...
```

In the future, SAK will support card templates, and usage would be (I hope) something like:


```yaml linenums="1"
TBD
```

##:sak-sak-logo: YAML Example Definition

??? Info "Full definition of card"
    ```yaml linenums="1"
        TBD
    ```
<!-- Image references -->

<!--- Internal References... --->
[Swiss Army Knife Tutorial 02]: ../tutorials/10-step-tutorial-02-intro.md

<!--- External References... --->
[ham3-d06-url]: https://material3-themes-manual.amoebelabs.com/examples/material3-example-theme-d06-tealblue/
