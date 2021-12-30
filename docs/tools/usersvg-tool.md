---
template: overrides/main.html
---

[usersvg-tool support]: https://github.com/amoebelabs/swiss-army-knife/releases/tag/1.0.0

[usersvg-partly-cloudy-day]: ../assets/screenshots/partly-cloudy-day.svg
[usersvg-partly-cloudy-day-rain]: ../assets/screenshots/partly-cloudy-day-rain.svg
[usersvg-ic-face-1]: ../assets/screenshots/ic-face-1.svg
[usersvg-ic-face-6]: ../assets/screenshots/ic-face-6.svg

# The User SVG tool
[:octicons-tag-24: 1.0.0][usersvg-tool support] ·
:octicons-package-dependents-24: Output ·
:octicons-tools-24: WIP

The User SVG tool makes it possible to add (external) SVGs to your card.

| Weather | Weather | AirVisual | AirVisual|
|-----|-----|-----|-----|
|![usersvg-partly-cloudy-day] | ![usersvg-partly-cloudy-day-rain]| ![usersvg-ic-face-1] | ![usersvg-ic-face-6] |

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
    - type: 'usersvg'              # tooltype is 'usersvg'
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
    
##:sak-sak-logo: Styling
The User SVG tool has support for the following forms of styling:

| Method       | Support          | Description            |
| :----------- | :--------------: | :-------------------- |
| `classes`    | :material-check: | Using SAK or User defined class definitions  |
| `styles`     | :material-check: | Using inline SVG and CSS styles |

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
| TBD             | TBD                   | TBD |

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
The basic usage shows all the functionalities of the User SVG tool.
