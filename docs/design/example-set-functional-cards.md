---
template: main.html
title: Example set of functional cards
description: Example set of functional cards for inspiration and learning how to create and use certain functionality and tools
tags:
  - Design
  - Functional Cards
  - Example Set
---
<!-- GT/GL -->

##:sak-sak-logo: Example Functional Cards I made
I made a bunch of functional cards with two goals in mind:

- To show the possibilities of the Swiss Army Knife with small visual examples.
- As the YAML template definition and usage is included per card, you get see how to use these cards in a view, how these cards are made, how animations are done, styling and tool usage.

This should help you to create your own visualizations, or you can just _use_ these examples!

| Card | Description |
| ---- | ----------- |
| [AirVisual Card][functional-card-airvisual1-card] | Two ([\#1][functional-card-airvisual1-card] and [\#2][functional-card-airvisual2-card]) variants for displaying AirVisual data |
| [Battery Card][functional-card-battery-sensor2-card] | Card showing the battery state, including 24 hour history |
| [Binary Sensor Card][functional-card-binary-sensor1-card] | Card showing the on/of state of a Binary Sensor |
| [Binary Sensor Card with Alert][functional-card-binary-sensor-alert1-card] | Same as above, but now four ([\#1][functional-card-binary-sensor-alert1-card], [\#2][functional-card-binary-sensor-alert2-card], [\#3][functional-card-binary-sensor-alert3-card] and [\#4][functional-card-binary-sensor-alert4-card]) variations with an alert icon |
| [Environment Card][functional-card-environment-card] | Card showing inside environment data |
| [Header Card][functional-card-header-card] | Card that can display header text above other cards |
| [Input Boolean Card][functional-card-input-boolean-card] | Card that shows how to display and use the `input_boolean.toggle` service call |
| [Light Card][functional-card-light-card] | Card that can switch/toggle a Light switch |
| [Light Card with Slider][functional-card-light-slider-card] | Card that can also control the brightness of a light |
| [Navigate Card][functional-card-navigate-card] | Navigate to other Lovelace View. Shows how to use the navigate user action |
| [Person Card][functional-card-person-card] | Card showing the location status of a Person. Also shows the power of some JavaScript |
| [Power Outlet Card][functional-card-power-outlet1-card] | Four ([\#1][functional-card-power-outlet1-card], [\#2][functional-card-power-outlet2-card], [\#3][functional-card-power-outlet3-card] and [\#4][functional-card-power-outlet4-card]) variations of a card showing both status (on/off) and power usage |
| [Scene Card][functional-card-scene-card] | Card showing how to call a scene |
| [Sensor Card][functional-card-sensor1-card] | Four ([\#1][functional-card-sensor1-card], [\#2][functional-card-sensor2-card], [\#3][functional-card-sensor3-card] and [\#4][functional-card-sensor4-card]) variations of showing sensor data, without and with 24 hour history, icon or background animations and with or without secondary info. |
| [Server Statistics Card][functional-card-server-statistics-card] | Card showing the main server sensors like CPU, Memory, Disk, etc. |
| [Switch Card][functional-card-switch1-card] | Three ([\#1][functional-card-switch1-card], [\#2][functional-card-switch2-card] and [\#3][functional-card-switch3-card]) variations of a card controlling a switch |
| [Tomorrow Pollen Card][functional-card-tomorrow-pollen-card] | A card showing a single pollen status on a card |
| [Tomorrow Pollen All Card][functional-card-tomorrow-pollen-all-card] | A card showing all the three pollen statuses on a card |

!!! info "The YAML definition for all cards is included in the examples, so you can copy/use them and learn from them!"

### Overview of Tools used

Most tools are used in the example functional cards. Only 3 are not used.

| Used?            | Tool                                                  | Type        | Description |
|----------------- | ----------------------------------------------------- | ----------- | ----------- |
| :material-check: | badge                                                 | basic       | A badge. Not yet Documented! |
| :material-check: | [circle][swiss-army-knife-basic-tool-circle]          | basic       | A circle |
| :material-check: | [ellipse][swiss-army-knife-basic-tool-ellipse]        | basic       | An ellipse |
| :material-check: | [line][swiss-army-knife-basic-tool-line]              | basic       | A vertical, horizontal or oblique line |
| :material-check: | [rectangle][swiss-army-knife-basic-tool-rectangle]    | basic       | A rectangle with and w/o rounded corners |
| :material-check: | [rectex][swiss-army-knife-basic-tool-rectex]          | basic       | A more advanced rectangle with independent rounded corners |
| :material-close: | [regpoly][swiss-army-knife-basic-tool-regpoly]        | basic       | A regular poly using the Schläfli symbol math |
| :material-check: | [text][swiss-army-knife-basic-tool-text]              | basic       | A text display |
| :material-close: | [horseshoe][swiss-army-knife-advanced-tool-horseshoe] | advanced    | TBD |
| :material-check: | [segarc][swiss-army-knife-advanced-tool-segarc]       | advanced    | A segmented arc: shows progress data in an arc |
| :material-check: | [slider][swiss-army-knife-advanced-tool-slider]       | advanced    | Slider input tool. Used for brightness for example |
| :material-check: | [switch][swiss-army-knife-advanced-tool-switch]       | advanced    | A basic on/off switch |
| :material-check: | [usersvg][swiss-army-knife-advanced-tool-usersvg]     | advanced    | For fetching user defined, external SVG files |
| :material-close: | [area][swiss-army-knife-ha-tool-area]                 | HA specific | Represents an Entity Area |
| :material-check: | [icon][swiss-army-knife-ha-tool-icon]                 | HA specific | Represents an Entity Icon |
| :material-check: | [name][swiss-army-knife-ha-tool-name]                 | HA specific | Represents an Entity Name |
| :material-check: | [state][swiss-army-knife-ha-tool-state]               | HA specific | Represents an Entity State & Unit of Measurement |
| :material-check: | [bar][swiss-army-knife-ha-tool-bar]                   | HA specific | Represents an simple state history (horizontal or vertical bars)|

### Overview of Templates, Animations and Styling used

| Used?            | What                                                  | Type        | Description |
|----------------- | ----------------------------------------------------- | ----------- | ----------- |
| :material-check: | SAK Templates                                         | template    | Used in the Server Statistics card |
| :material-check: | JavaScript Snippets                                   | template    | Used in for instance the Person card, but also in the Light with slider card|
| :material-check: | User Interactions                                     | interaction | Tap and Drag actions, but also service usage for navigating, triggering scenes, etc.|
| :material-close: | CSS Classes                                           | styling | Not used in these cards. All inline styles|
| :material-check: | CSS Styles                                            | styling | In all cards|
| :material-check: | CSS Animations                                        | animations | Used in some of the cards that use blinking (battery)|
| :material-check: | Colorlists                                            | animations | Used in many cards with the segmented arc|
| :material-check: | Colorstop Animations                                  | animations | Used in many cards with the segmented arc|
| :material-check: | State Operator Animations                             | animations | Used in for instance the Person card|

##:sak-sak-logo: Example Screenshot

![AmoebeLabs Swiss Army Knife Functional Card Examples All Screenshot]

<!-- Image references -->
[AmoebeLabs Swiss Army Knife Functional Card Examples All Screenshot]: ../assets/screenshots/sak-functional-cards-all-screenshot.png
[AmoebeLabs Swiss Army Knife Custom Card Example 12]: ../assets/screenshots/sak-example-12.png
[AmoebeLabs Swiss Army Knife Custom Card Example 12 Light - Wide cards]: ../assets/screenshots/sak-example-12-m3-d06-light.png "Swiss Army Knife Example 12 - Wide cards, light theme"
[AmoebeLabs Swiss Army Knife Custom Card Example 12 Dark - Wide cards]: ../assets/screenshots/sak-example-12-m3-d06-dark.png "Swiss Army Knife Example 12 - Wide cards, dark theme"
[AmoebeLabs Swiss Army Knife Custom Card Example 12 Cards]: ../assets/screenshots/swiss-army-knife-example-12c-800x800.gif

<!--- Internal References... --->
[Swiss Army Knife Tutorial 02]: ../tutorials/10-step-tutorial-02-intro.md
[Swiss Army Knife Example 12]: ../examples/example-12.md
[Swiss Army Knife CSS Classes]: ../basics/styling/classes.md

[swiss-army-knife-basic-tool-circle]: ../tools/circle-tool.md "Swiss Army Knife - Circle Tool"
[swiss-army-knife-basic-tool-ellipse]: ../tools/ellipse-tool.md "Swiss Army Knife - Ellipse Tool"
[swiss-army-knife-basic-tool-line]: ../tools/line-tool.md "Swiss Army Knife - Line Tool"
[swiss-army-knife-basic-tool-rectangle]: ../tools/rectangle-tool.md "Swiss Army Knife - Rectangle Tool"
[swiss-army-knife-basic-tool-rectex]: ../tools/rectangle-ex-tool.md "Swiss Army Knife - Rectangle Ex Tool"
[swiss-army-knife-basic-tool-regpoly]: ../tools/regular-poly-tool.md "Swiss Army Knife - Regular Poly Tool"
[swiss-army-knife-basic-tool-text]: ../tools/text-tool.md "Swiss Army Knife - Text Tool"
[swiss-army-knife-advanced-tool-horseshoe]: ../tools/horseshoe-tool.md "Swiss Army Knife - Horse shoe Tool"
[swiss-army-knife-advanced-tool-segarc]: ../tools/segarc-tool.md "Swiss Army Knife - Segmented Arc Tool"
[swiss-army-knife-advanced-tool-slider]: ../tools/slider-tool.md "Swiss Army Knife - Slider Tool"
[swiss-army-knife-advanced-tool-switch]: ../tools/switch-tool.md "Swiss Army Knife - Switch Tool"
[swiss-army-knife-advanced-tool-usersvg]: ../tools/usersvg-tool.md "Swiss Army Knife - User SVG Tool"
[swiss-army-knife-ha-tool-area]: ../tools/entity-area-tool.md "Swiss Army Knife - Entity Area Tool"
[swiss-army-knife-ha-tool-icon]: ../tools/entity-icon-tool.md "Swiss Army Knife - Entity Icon Tool"
[swiss-army-knife-ha-tool-name]: ../tools/entity-name-tool.md "Swiss Army Knife - Entity Name Tool"
[swiss-army-knife-ha-tool-state]: ../tools/entity-state-tool.md "Swiss Army Knife - Entity State Tool"
[swiss-army-knife-ha-tool-bar]: ../tools/entity-barchart-tool.md "Swiss Army Knife - Entity History Bar Tool"

[functional-card-airvisual1-card]: functional-card-airvisual1-card.md
[functional-card-airvisual2-card]: functional-card-airvisual2-card.md
[functional-card-battery-sensor2-card]: functional-card-battery-sensor2-card.md
[functional-card-binary-sensor1-card]: functional-card-binary-sensor1-card.md
[functional-card-binary-sensor-alert1-card]: functional-card-binary-sensor-alert1-card.md
[functional-card-binary-sensor-alert2-card]: functional-card-binary-sensor-alert2-card.md
[functional-card-binary-sensor-alert3-card]: functional-card-binary-sensor-alert3-card.md
[functional-card-binary-sensor-alert4-card]: functional-card-binary-sensor-alert4-card.md
[functional-card-environment-card]: functional-card-environment-card.md
[functional-card-header-card]: functional-card-header-card.md
[functional-card-input-boolean-card]: functional-card-input-boolean-card.md
[functional-card-light-card]: functional-card-light-card.md
[functional-card-light-slider-card]: functional-card-light-slider-card.md
[functional-card-navigate-card]: functional-card-navigate-card.md
[functional-card-person-card]: functional-card-person-card.md
[functional-card-power-outlet1-card]: functional-card-power-outlet1-card.md
[functional-card-power-outlet2-card]: functional-card-power-outlet2-card.md
[functional-card-power-outlet3-card]: functional-card-power-outlet3-card.md
[functional-card-power-outlet4-card]: functional-card-power-outlet4-card.md
[functional-card-scene-card]: functional-card-scene-card.md
[functional-card-sensor1-card]: functional-card-sensor1-card.md
[functional-card-sensor2-card]: functional-card-sensor2-card.md
[functional-card-sensor3-card]: functional-card-sensor3-card.md
[functional-card-sensor4-card]: functional-card-sensor4-card.md
[functional-card-server-statistics-card]: functional-card-server-statistics-card.md
[functional-card-switch1-card]: functional-card-switch1-card.md
[functional-card-switch2-card]: functional-card-switch2-card.md
[functional-card-switch3-card]: functional-card-switch3-card.md
[functional-card-tomorrow-pollen-card]: functional-card-tomorrow-pollen-card.md
[functional-card-tomorrow-pollen-all-card]: functional-card-tomorrow-pollen-all-card.md

<!--- External References... --->

[ham3-d06-url]: https://material3-themes-manual.amoebelabs.com/examples/material3-example-theme-d06-tealblue/
[ham3-url]: https://material3-themes-manual.amoebelabs.com/
[ham3-c12-url]: https://material3-themes-manual.amoebelabs.com/examples/material3-example-theme-c12-magenta/