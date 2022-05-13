---
template: main.html
title: "Example 8: Homekit alike cards"
description: Visualization with Weather, Airvisual cards and one occupancy sensor card using Homekit alike cards with icon and card animations.
tags:
  - Examples
---
#Example 8: Homekit alike cards

![AmoebeLabs Swiss Army Knife Custom Card Example 8 - Homekit alike]

##:sak-sak-logo: Visualization
Weather, Airvisual cards and one occupancy sensor card using Homekit alike cards with icon and card animations.

!!! Info "Cards 2, 3 and 5 share the same design, the others are different"

##:sak-sak-logo: Used Home Assistant Integrations
- [Met.no Weather integration](https://www.home-assistant.io/integrations/met/)
- [Airvisual integration](https://www.home-assistant.io/integrations/airvisual/)
- Aqara Occupancy sensor using zigbee2mqtt, ie the [MQTT integration](https://www.home-assistant.io/integrations/mqtt/)

##:sak-sak-logo: How to make it work in your own installation

####Outside environment sensors

:material-checkbox-multiple-marked-outline: _Required Integrations_<br>
The visualization is build on the `Met.no` generated entities, so you need the [Met.no Weather integration](https://www.home-assistant.io/integrations/met/)

:material-checkbox-multiple-marked-outline: _Required Entity Changes_<br>
The `Met.no` integration creates the `weather.changeme` entity. Adapt the `changeme` part to your own installation!

!!! Info "Other weather integrations won't work, as they create different states and attributes"

####Airvisual sensors

:material-checkbox-multiple-marked-outline: _Required Integrations_<br>
The only integration you need are the `Airvisual` entities, so you need the [Airvisual integration](https://www.home-assistant.io/integrations/airvisual/)

####Movement/occupancy sensor

:material-checkbox-multiple-marked-outline: _Required Entity Changes_<br>
Last but not least: an `occupancy` sensor is used. If you don't have any `occupancy` sensor, replace it with any on/off sensor and the card should at least work!

##:sak-sak-logo: View and Card Configuration

#### Lovelace view
| file | location | included from |
| ---- | -------- | ------------- |
| `view-sake8.yml` | `/lovelace/views` | `sak-examples-dashboard.yaml`|

!!! Example "The 1st card on the 2nd row shows the use of some of the built-in CSS animations..."
    ```yaml linenums="1" hl_lines="2 16 33 41"
    # Background used for animations & state
    - type: rectex
      position:
        cx: 50
        cy: 50
        width: 100
        height: 100
        radius:
          top: 2
          bottom: 2
      entity_index: 0

      # Let background go to white with 70% opacity when movement detected
      # Use animation to 'flash' the background for a few seconds to get
      # the attention of the user, if anyone is watching ;-)
      animations:
        - state: 'on'
          styles:
            rectex:
              fill: 'white'
              opacity: 0.7
              animation: flash 2s ease-in-out both
        - state: 'off'
          styles:
            rectex:
              opacity: 0
              fill: none
      styles:
        rectex:
          opacity: 0
          fill: none

    - type: icon
      position:
        cx: 22.5
        cy: 22.5
        align: center
        icon_size: 30
      entity_index: 0
      # Define colors for the icon depending on the state
      animations:
        - state: 'on'
          styles:
            icon:
              fill: 'darkorange'
              color: 'darkorange'
              animation: jello 2s ease-in-out both
        - state: 'off'
          styles:
            icon:
              fill: var(--primary-text-color)
              color: var(--primary-text-color)
      styles:
        icon:
          fill: var(--primary-text-color)
          color: var(--primary-text-color)
    ```

#### Decluttering templates
None.

#### SAK templates
None.

##:sak-sak-logo: Interactions
- All tools support by default the "more-info" dialog once clicked.

##:sak-sak-logo: Remarks
!!! Info "Due to rendering differences for icons, Safari based systems show the icon animation, and other/Chrome based browsers not."
    This should be fixed in the future...

<!-- Image references -->

[AmoebeLabs Swiss Army Knife Custom Card Example 8 - Homekit alike]: ../assets/screenshots/sak-example-8.png "Swiss Army Knife Example 8 - Homekit alike"