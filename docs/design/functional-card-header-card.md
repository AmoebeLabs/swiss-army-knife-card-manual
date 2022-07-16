---
template: main.html
title: "Functional Cards: Header Card"
description: Example of functional card, Header card.
hideno:
  toc
tags:
  - Design
  - Functional Card
  - Header Card
---
<!-- GT/GL -->
##:sak-sak-logo: Visualization

![Swiss Army Knife Functional Header D06 Light](../assets/screenshots/sak-functional-card-12-header-theme-d06-light.png){width="600"}
<br>![Swiss Army Knife Functional Header D06 Dark](../assets/screenshots/sak-functional-card-12-header-theme-d06-dark.png){width="600"}

This card uses the [Material 3 theme D06, TealBlue][ham3-d06-url]
    
| Description| Aspect Ratio| Target Size |
|-|-|-|
| A card that displays header text | 1/0.05 | Grid with 1 column |

| SAK Tool| Used for |
|-|-|
| Text | The content of the header|

##:sak-sak-logo: Interaction

| Part | Description|
|-|-|
| N/A | No interaction available |

##:sak-sak-logo: Usage
[:octicons-tag-24: 1.0.0-rc.3][github-releases]

!!! warning "Replace example entities with your entities!"

```yaml linenums="1"
- type: custom:swiss-army-knife-card
  disable_card: true
  layout:
    template:
      name: sak_layout_fce_header
      variables:
        - sak_layout_header_content: 'Livingroom'
        - sak_layout_header_font_color: var(--secondary-text-color)
        - sak_layout_header_font_size: 5em

########################################################################

- type: custom:swiss-army-knife-card
  disable_card: true
  layout:
    template:
      name: sak_layout_fce_header
      variables:
        - sak_layout_header_content: 'All those beautiful lights'
        - sak_layout_header_font_color: var(--theme-sys-color-tertiary)
        - sak_layout_header_font_size: 3em    
        - sak_layout_header_font_text_transform: none
```

| Data | Default| Required | Description |
|-|-|-|-|
| entities |  | :material-check: | The single entity on the card |
| sak_layout_header_content | 'Your Header comes here' | :material-check: | The header content |
| sak_layout_header_font_color | var(--primary-text-color) | :material-close: | The text color |
| sak_layout_header_font_size | 3.5em | :material-close: | Font size in em preferably |
| sak_layout_header_font_transform | uppercase| :material-close: | The text transform. Can be `capitalize`, `uppercase`, `lowercase`, `none`, `full-width`and `full-size-kana` |
| sak_layout_header_aspectratio | 1/0.05 | :material-close: | The aspectratio of the card. Depending on the selected font size, this one must be altered |
| sak_layout_header_position_cy | 2.5 |  :material-close: | The y position of the header text. Default is centered for default aspectratio. You can change this if required |

##:sak-sak-logo: YAML Template Definition
[:octicons-tag-24: 1.0.0-rc.3][github-releases]
    ```yaml linenums="1"
    sak_layout_fce_header:
      template:
        type: layout
        defaults: 
          - sak_layout_header_content: 'Your Header comes here'
          - sak_layout_header_font_color: var(--primary-text-color)
          - sak_layout_header_font_size: 3.5em
          - sak_layout_header_font_text_transform: uppercase
          - sak_layout_header_aspectratio: 1/0.05
          - sak_layout_header_position_cy: '2.5'

      layout:
        aspectratio: '[[sak_layout_header_aspectratio]]'
        toolsets:
          # ==============================================================================
          - toolset: header
            position:
              cx: 2.5
              cy: '[[sak_layout_header_position_cy]]'
            tools:
              - type: text
                position:
                  cx: 50
                  cy: 50
                text: '[[sak_layout_header_content]]'
                styles:
                  text:
                    fill: '[[sak_layout_header_font_color]]'
                    letter-spacing: 0.1em
                    text-transform: '[[sak_layout_header_font_text_transform]]'
                    text-anchor: start
                    font-size: '[[sak_layout_header_font_size]]'

    ```
<!-- Image references -->

<!--- Internal References... --->
[Swiss Army Knife Tutorial 02]: ../tutorials/10-step-tutorial-02-intro.md
[Swiss Army Knife Functional Card Sensor2]: functional-card-sensor2-card.md

<!--- External References... --->
[ham3-d06-url]: https://material3-themes-manual.amoebelabs.com/examples/material3-example-theme-d06-tealblue/
[github-releases]: https://github.com/amoebelabs/swiss-army-knife-card/releases/
