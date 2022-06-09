---
template: main.html
title: "Example 4: Different Environment cards"
description: The environment sensor cards show Aqara temperature, humidity and pressure sensors with 24 hours of history. The look and feel is a flat design.
tags:
  - Examples
---
#Example 4: More Environment sensor cards
![AmoebeLabs Swiss Army Knife Custom Card Example 4 - More sensors]
  
##:sak-sak-logo: Visualization
Once again a visualization of sensors values using two completely different card designs. The first row is a Neumorphic design, and the second implements a very simple and clean Flat design with a few colored blocks as the background of the card.

##:sak-sak-logo: Interactions
- All tools support by default the "more-info" dialog once clicked.

##:sak-sak-logo: Used Home Assistant Integrations
- Aqara Zigbee sensors with temperature, humidity and pressure data using zigbee2mqtt, ie the [MQTT integration](https://www.home-assistant.io/integrations/mqtt/)

##:sak-sak-logo: How to make it work in your own installation

####All cards

:material-checkbox-multiple-marked-outline: _Required Home Assistant Integrations_<br>
The visualization is build on `temperature`, `humidity` and `lux` entities. It does **not** depend on any specific integration.

:material-checkbox-multiple-marked-outline: _Required Home Assistant Entity Changes_<br>
You can replace the existing `temperature`, `humidity` and `lux` entities with any sensor entity. 

##:sak-sak-logo: View and Card Configuration

#### Lovelace view
| file | location | included from |
| ---- | -------- | ------------- |
| `view-sake4.yml` | `/lovelace/views` | `sak-examples-dashboard.yaml`|

**First row of cards**

The first row shows cards with a Neumorphic design with:

- Icon in the top-left corner
- Segmented Arc with humidity template colorstop and scale
- State with unit of measurement
- Name of the entity
- State historry over the last 24 hours

**Second row of cards**

The first row shows cards with a simple Flat design with:

- 4 rectangles forming the background of card
- State with unit of measurement
- A vertical line as a divider
- Icon of the entity
- Name of the entity
- State historry over the last 24 hours

#### Decluttering templates
!!! Example "The first row of cards uses a decluttering template..."
    - The `sak_arc180_sparklinebar24_template_tpl` is used for displaying these cards
    
    ```yaml title="From: view-sake4.yaml" linenums="1" hl_lines="4 12 20"
    - type: horizontal-stack
      cards:
        - type: custom:decluttering-card
          template: sak_arc180_sparklinebar24_template_tpl
          variables:
            - entity: studym_iaq_humidity
            - name: 11Ta Study Back
            - decimals: 0
            - scale_min: 0
            - scale_max: 100
        - type: custom:decluttering-card
          template: sak_arc180_sparklinebar24_template_tpl
          variables:
            - entity: hall_gf_iaq_humidity
            - name: 11Tb Hall
            - decimals: 0
            - scale_min: 0
            - scale_max: 100
        - type: custom:decluttering-card
          template: sak_arc180_sparklinebar24_template_tpl
          variables:
            - entity: bedroom_iaq_humidity
            - name: 11Tc Bedroom
            - decimals: 0
            - scale_min: 0
            - scale_max: 100
    ```

#### SAK templates
The following templates are defined in the `/lovelace/sak_templates/sak-templates.yaml` file:

- The `toolset_arc180_sparklinebar24` is the template used for the first row of cards

##:sak-sak-logo: Remarks
None.

<!-- Image references -->

[AmoebeLabs Swiss Army Knife Custom Card Example 4 - More sensors]: ../assets/screenshots/sak-example-4.png "Swiss Army Knife Example 4 - More sensors"
