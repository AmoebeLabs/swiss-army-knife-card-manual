---
template: overrides/main.html
---

[![SAK Example]][SAK Example]

  [SAK Example]: ../assets/screenshots/sak-example-8.png

##:sak-sak-logo: Visualization
Weather, Airvisual cards and one occupancy sensor card using Homekit alike cards with icon and card animations.

!!! Info "Cards 2, 3 and 5 share the same design, the others are different"

##:sak-sak-logo: Data sources
- [Met.no Weather integration](https://www.home-assistant.io/integrations/met/)
- [Airvisual integration](https://www.home-assistant.io/integrations/airvisual/)
- Aqara Occupancy sensor using zigbee2mqtt, ie the [MQTT integration](https://www.home-assistant.io/integrations/mqtt/)

##:sak-sak-logo: Configuration

#### Lovelace view
This example is in the `view-sake8.yaml` file in the `/lovelace/views` folder.

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