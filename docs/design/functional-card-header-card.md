---
template: main.html
title: "Functional Cards: Header Card"
description: Example of functional card, Header card.
hide:hide:
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

| Description| Aspectratio| Target Size |
|-|-|-|
| A card that displays header text | 1/0.05 | Grid with 1 column |

| SAK Tool| Used for |
|-|-|
| Text | The content of the header|

##:sak-sak-logo: Interaction

| Part | Description|
|-|-|
| N/A | No interaction available |

##:sak-sak-logo: Usage (_Implemented_)
```yaml linenums="1"
- type: custom:decluttering-card
  template: sak_card_header_template
  variables:
    - sak_card_header_content: 'Livingroom'
    - sak_card_header_font_color: var(--secondary-text-color)
    - sak_card_header_font_size: 3e
```

In the future, SAK will support card templates, and usage would be (I hope) something like:


```yaml linenums="1"
- type: custom:swiss-army-knife-card
  template: sak_card_header
  variables:
    - sak_card_header_content: 'Livingroom'
    - sak_card_header_font_color: var(--secondary-text-color)
    - sak_card_header_font_size: 3e
```

##:sak-sak-logo: YAML Example Definition

??? Info "Full definition of decluttering template"
    ```yaml linenums="1"
    default:
      - sak_card_header_content: 'Your Header comes here'
      - sak_card_header_font_color: var(--primary-text-color)
      - sak_card_header_font_size: 3.5em
    card:
      type: 'custom:swiss-army-knife-card'

      aspectratio: 1/0.05
      disable_card: true
        
      layout:
        toolsets:
          # ==============================================================================
          - toolset: header
            position:
              cx: 2.5
              cy: 2.5
            tools:
              - type: text
                position:
                  cx: 50
                  cy: 50
                text: '[[sak_card_header_content]]'
                styles:
                  text:
                    fill: '[[sak_card_header_font_color]]'
                    letter-spacing: 0.1em
                    text-transform: uppercase
                    text-anchor: start
                    font-size: '[[sak_card_header_font_size]]'
    ```
<!-- Image references -->

<!--- Internal References... --->
[Swiss Army Knife Tutorial 02]: ../tutorials/10-step-tutorial-02-intro.md
[Swiss Army Knife Functional Card Sensor2]: functional-card-sensor2-card.md

<!--- External References... --->
[ham3-d06-url]: https://material3-themes-manual.amoebelabs.com/examples/material3-example-theme-d06-tealblue/
