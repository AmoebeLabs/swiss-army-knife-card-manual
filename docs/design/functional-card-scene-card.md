---
template: main.html
title: "Functional Cards: Call Scene/Script Card"
description: Example of functional card, Call Scene/Script Card
hide:
  toc
tags:
  - Design
  - Functional Card
  - Scene/Script Card
---
<!-- GT/GL -->

![Swiss Army Knife Functional Card Scene D06 Light Off](../assets/screenshots/sak-functional-card-12-scene-theme-d06-light.png){width="200"}
<br>![Swiss Army Knife Functional Card Scene D06 Dark Off](../assets/screenshots/sak-functional-card-12-scene-theme-d06-dark.png){width="200"}

This card uses the [Material 3 theme D06, TealBlue][ham3-d06-url]

!!! info "Its a card, but it just demonstrates how to use the `scene` user action on a tool"

| Description| Aspectratio| Target Size |
|-|-|-|
| A card that shows an icon and text, and has a `scene` user action.| 3/1 | Grid with 3 columns |

| SAK Tool| Used for |
|-|-|
| Icon | Some fixed Icon|
| Text | Scene text|
| RectEx | A rectangle covering the whole card to act as a button to handle the activate scene action|

##:sak-sak-logo: Interaction

| Part | Description|
|-|-|
| Card | This card activates the scene for you|

##:sak-sak-logo: Usage (Not Yet Implemented)
If the below YAML example definition is encapsulated into a decluttering_template, its usage would be:

```yaml linenums="1"
- type: custom:decluttering-card
  template: sak_card_scene
  variables:
```

In the future, SAK will support card templates, and usage would be (I hope) something like:


```yaml linenums="1"
- type: custom:swiss-army-knife-card
  template: sak_card_scene
  variables:
```

##:sak-sak-logo: YAML Example Definition

??? Info "Full definition of card"
    ```yaml linenums="1"
    ```
<!-- Image references -->

<!--- Internal References... --->
[Swiss Army Knife Tutorial 02]: ../tutorials/10-step-tutorial-02-intro.md

<!--- External References... --->
[ham3-d06-url]: https://material3-themes-manual.amoebelabs.com/examples/material3-example-theme-d06-tealblue/
