---
template: overrides/main.html
---

The Swiss Army Knife card supports user interactions. These interactions are NOT card based, but tool based: in other words, every SAK Tool can be interactive.

As the tools are SVG based, the interaction depends on some typical SVG properties:

- In most cases only the foreground (color) of the SVG can be tapped. This means that - without doing something about it - it can be difficult to tap an `icon`. You need an extra background (rectangle) behind the icon to act as a tap area.
- Other settings, like transparancy, or a `fill: none` can also change the possibility to interact with the tool. A rectangle for instance with such a fill won't respond to tap actions.

For a visual explanation: see [Managing SVG Interaction With The Pointer Events Property](https://www.smashingmagazine.com/2018/05/svg-interaction-pointer-events-property/)

!!! Info "The SAK Icon Tool draws an invisible background behind the `icon` in order to respond to tap actions"
    It uses a rectangle without stroke, but with a fill color of `fill: rgba(0,0,0,0)`. This makes it visual invisible, but still respond to pointer/touch events.

!!! Tip "Use `fill: rgba(0,0,0,0)` for 'invisible' backgrounds for circles/rectangles that need interaction!"

##:sak-sak-logo: Current - entity based - support

###In General
The current method is through the `tap_action` definition in the `entities` list section of the card. Just like most Home Assistant cards.

```yaml linenums="1" hl_lines="7-12"
- type: 'custom:dev-swiss-army-knife-card'
  entities:
    - entity: light.livingroom_light_cupboard_light
      name: Boekenkast
      area: Woonkamer
      icon: mdi:book-open-outline
      tap_action:
        action: call-service
        service: light.toggle
        service_data:
          entity_id: light.livingroom_light_cupboard_light
        haptic: light
```

**Any** tool connected to this entity (`entity_index: 0` in this case) will perform this action once clicked.

If you want different actions, say a `toggle` for the circle (button), and `more-info` for tapping the perentage state/attribute, you have to be a bit creative and define the **same** entity once more, but with a different `tap_action`:
```yaml linenums="1" hl_lines="7-12 20-22"
- type: 'custom:dev-swiss-army-knife-card'
  entities:
    - entity: light.livingroom_light_cupboard_light
      name: Boekenkast
      area: Woonkamer
      icon: mdi:book-open-outline
      tap_action:
        action: call-service
        service: light.toggle
        service_data:
          entity_id: light.livingroom_light_cupboard_light
        haptic: light

    - entity: light.livingroom_light_cupboard_light
      name: Boekenkast
      area: Woonkamer
      icon: mdi:book-open-outline
      attribute: brightness
      unit_of_measurement: "%"
      tap_action:
        action: more-info
        haptic: success
```

###The Slider
The slider is the only tool having its own `slider_action` section. This was needed to support dragging and other settings.
=== "Light example"
    ```yaml linenums="1"
    slider_action:
      update_interval: 200
      service: light.turn_on
      parameter: brightness_pct
    ```
=== "Thermostat example" 
    ```yaml linenums="1"
    slider_action:
      # Set interval to 0 to disable updates while dragging.
      # new temperature setpoint is sent to boiler on release
      # of the slider
      update_interval: 0
      service: climate.set_temperature
      # Override entity_id. Otherwise entity_index is used...
      entity_id: climate.calenta
      parameter: temperature
    ```

##:sak-sak-logo: Future - per tool - support

=== "Light example"
    Example with a light entity and three tools on a card.
    As actions are defined PER tool, we can define a single entity and use that for every tool, but still have different actions for each tool / entity combination!
    ```yaml linenums="1"
    tools:
      # ------------------------------------------------------------
      - type: circle
        entity_index: 0
        #
        # Circle is used as button to switch light on/off
        #
        user_actions:
          tap_action:
            haptic: light
            actions:
              - action: call-service
                service: light.toggle

      # ------------------------------------------------------------
      - type: slider
        entity_index: 0
        #
        # Slider is used to set brightness percentage
        #
        user_actions:
          drag_action:
            update_interval: 200
            haptic: selection
            actions:
              - action: call-service
                service: light.turn_on
                parameter: brightness_pct
          tap_action:
            haptic: light
            actions:
              - action: call-service
                service: light.turn_on
                parameter: brightness_pct

      # ------------------------------------------------------------
      - type: name
        entity_index: 0
        #
        # Tapping name will show the more-info popup dialog
        #
        user_actions:
          tap_action:
            haptic: medium
            actions:
              - action: more-info
    ```
=== "Thermostat example"
    Example with a thermostat entity setpoint: a slider
    ```yaml linenums="1"
    tools:
      # ------------------------------------------------------------
      - type: slider
        entity_index: 1
        #
        # Slider only specifies tap_action in this case. Dragging
        # does not imply any action.
        #
        user_actions:
          tap_action:
            haptic: light
            actions:
              - action: call-service
                service: climate.set_temperature
                parameter: temperature
                service_data:
                  # Override entity_id. Otherwise entity_index is used...
                  entity_id: climate.calenta
    ```

