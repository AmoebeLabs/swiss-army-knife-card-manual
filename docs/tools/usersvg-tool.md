---
template: main.html
title: Advanced User SVG tool
description: The User SVG tool allows you to add external SVGs, JPGs and PNGs to your card. It is a great way to extend the card's visualization possibilities.
tags:
  - Tools
  - Tool
  - User SVG (svg)
  - User Image (jpg/png)
---

[usersvg-tool support]: https://github.com/amoebelabs/swiss-army-knife-card/releases/

[usersvg-partly-cloudy-day]: ../assets/screenshots/partly-cloudy-day.svg
[usersvg-partly-cloudy-day-rain]: ../assets/screenshots/partly-cloudy-day-rain.svg
[usersvg-ic-face-1]: ../assets/screenshots/ic-face-1.svg
[usersvg-ic-face-6]: ../assets/screenshots/ic-face-6.svg

# The User SVG tool
[:octicons-tag-24: 1.0.0][usersvg-tool support] ·
:octicons-package-dependents-24: Output ·

The User SVG tool makes it possible to add (external) SVGs, JPGs and PNGs ([:octicons-tag-24: 1.0.0-rc.3][github-releases]) to your card.

[:octicons-tag-24: 1.0.0-rc.3][github-releases]
It has also support for clipping and masking, so your external SVG/JPG/PNG will fit the area (from rectangle/square to round) it is displayed within.

| Weather | Weather | AirVisual | AirVisual|
|-----|-----|-----|-----|
|![usersvg-partly-cloudy-day] | ![usersvg-partly-cloudy-day-rain]| ![usersvg-ic-face-1] | ![usersvg-ic-face-6] |

An example using clipping and masking: A square image of a washing machine is now fit to the round circle. Furthermore, all images and svgs have an opacity mask.

![Swiss Army Knife Clip Mask example]

!!! Success "Inline SVG support is foreseen in the future"
  
##:sak-sak-logo: Basic usage

=== "Static file"
    ```yaml title="From: view-sake6" linenums="1" hl_lines="1"
    - type: 'usersvg'           # tooltype is 'usersvg'
      position:                 # Position on (100x100) canvas
        cx: 50                  # cx=50 is center position
        cy: 50                  # cy=50 is center position
        height: 100             # Image covers full heigth and...
        width: 100              # ...width of card.
      style: 'images'
      images:                   # A static image uses 'default':
        - default: /local/images/backgrounds/balls-background-1.svg
    ```
=== "Connected"
    This one is taken from example 1, the display of the 'face' used for AirVisual.
    ```yaml title="From: view-sake1" linenums="1" hl_lines="1 5"
    - type: 'usersvg'           # tooltype is 'usersvg'
      position:                 # Position on (100x100) canvas
        cx: 50                  # cx=50 is center position
        cy: 50                  # cy=50 is center position
      entity_index: 0           # connect to state of entity 0
      style: 'images'
      images:
        - face1: /local/images/ic-face-1.svg
        - face2: /local/images/ic-face-2.svg
        - face3: /local/images/ic-face-3.svg
        - face4: /local/images/ic-face-4.svg
        - face5: /local/images/ic-face-5.svg
        - face6: /local/images/ic-face-6.svg
      animations:               # Use animation to switch faces
        - state: '50'
          operator: <=
          image: face1
        - state: '100'
          operator: <=
          image: face2
        - state: '150'
          operator: <=
          image: face3
        - state: '200'
          operator: <=
          image: face4
        - state: '300'
          operator: <=
          image: face5
        - state: '9999'
          operator: <=
          image: face6
    ```

##:sak-sak-logo: Advanced usage
This example shows how to clip/mask an image or svg.

=== "Connected"
    ```yaml title="From: view-sake1" linenums="1" hl_lines="1 8-15 46-47"
    - type: 'usersvg'
      entity_index: 3
      position:
        cx: 50
        cy: 50
        height: 95
        width: 95
      clip_path:
        position:
          cx: 50
          cy: 50
          height: 90      # clip height and width to a bit
          width: 90       # smaller than image size (95/95)
          radius:         # Irrelevant, since mask will make
            all: 45       # a circle out of this image!
      style: 'images'
      images:
        - face1: /local/images/clip-test.jpg
        - face2: /local/images/airvisual/ic-face-2.svg
        - face3: /local/images/airvisual/ic-face-3.svg
        - face4: /local/images/airvisual/ic-face-4.svg
        - face5: /local/images/airvisual/ic-face-5.svg
        - face6: /local/images/airvisual/ic-face-6.svg
      animations:
        - state: '50'
          operator: <=
          image: face1
        - state: '100'
          operator: <=
          image: face2
        - state: '150'
          operator: <=
          image: face3
        - state: '200'
          operator: <=
          image: face4
        - state: '300'
          operator: <=
          image: face5
        - state: '9999'
          operator: <=
          image: face6
      styles:
        usersvg:
          stroke-width: 5em
        mask:
          fill: url(#sak-mask-radial-gradient)    
    ```

##:sak-sak-logo: Styling
As of :octicons-tag-24: 2.4.2, styling of external SVG is possible (again)

The User SVG tool has support for the following forms of styling:

| Method       | Support          | Description            |
| :----------- | :--------------: | :-------------------- |
| `classes`    | :material-check: | Using SAK or User defined class definitions  |
| `styles`     | :material-check: | Using inline SVG and CSS styles |

!!! Warning "For styling to work, the external SVG must be suitable to get styled"
    See: [Make pollen SVGs stylable](https://github.com/AmoebeLabs/swiss-army-knife-card/issues/199)

    Things that must be removed in the SVG to allow for external styling are:

    - Inline style definitions
    - Inline class definitions in the <defs> section of the SVG

    Things that do work are:

    - Usage of class definitions wich can be overridden externally
    - Usage of CSS variables which can be set externally

!!! Info "Safari has problems with certain styling"
    - CSS Filters don't work. Use SVG filters instead!
    - Also, chaining filters in Safari does NOT work. Use combined SVG filters instead.
    - For any other Safari problem where things work in Chrome: wait for the new SVG engine :smile:

The User SVG tool is composed of a single object: "usersvg" and this is the selector for styling:
```yaml linenums="1"hl_lines="6 9"
- type: 'usersvg'
  position:
    cx: 50
    cy: 50
  classes:
    usersvg:                # Usersvg selector
      <...>
  styles:
    usersvg:                # Usersvg selector
      <...>
```
Populair properties:

| Property       | Does what?            | Example                                                 |
| :-------------- | :-------------------- | :------------------------------------------------------ |
| opacity         | Makes image transparent | opacity: 0.5 (for 50% opacity) |

###:sak-sak-logo: Styling: Injected vs external SVGs
External SVGs can't be styled, so-called 'injected' SVGs can be styled.

The default behaviour of the User SVG tool is to 'inject' the external SVGs into the tool.

However, if the SVG contains local styling and class definitions, and the same SVG is used more than once in a card, you can run into styling problems (internal classes overwrite each other), and you have to force the SVGs to remain external images.

This can be done as follows:
```yaml
  options:
    svginjection: false     # true (default) for injection,
                            # false for keeping the external file
```    

--8<-- "docs/tools/default-haptics.md"

##:sak-sak-logo: Animations
The User SVG tool has support for the following forms of animations:

| Method       | Support          | Description            |
| :----------- | :--------------: | :-------------------- |
| `colorstops` | :material-close: | List of state values to set the color |
| `colorlists` | :material-close: | Using a colorlist definition |
| `animations` | :material-check: | Operator state based animations with class/style styling |

!!! Info "The use of animations require the tool to be connected to an entity"

##:sak-sak-logo: Detailed specification
The basic and advanced usage shows all the functionalities of the User SVG tool.

[Swiss Army Knife Clip Mask example]: ../assets/screenshots/sak-functional-card-12-tomorrow-pollen-all-aqi-theme-d06-light-good_high_very_low_none-clip-mask.png
[github-releases]: https://github.com/amoebelabs/swiss-army-knife-card/releases/
