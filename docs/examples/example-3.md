---
template: overrides/main.html
---

Visualization of some environment sensors.

[![SAK Example 3]][SAK Example 3]

  [SAK Example 3]: ../assets/screenshots/sak-example-3.png
  
##:sak-sak-logo: Visualization
The card is build using the following tools:

- A rectangle with a large top-right corner radius with a circle on top of that. The Neumorphic shadow filter 'morphs' them as looking as a single object
- State and unit of measurement
- The name of the entity
- A barchart showing the trend over de last 24 hours using a light to dark orange gradient setting as colorstop

##:sak-sak-logo: Data sources
- Aqara Zigbee sensors with temperature, humidity and pressure data using zigbee2mqtt, ie the [MQTT integration](https://www.home-assistant.io/integrations/mqtt/)

##:sak-sak-logo: Configuration

#### Lovelace view

This example is in the `view-sake3.yaml` file in the `/lovelace/views` folder.

!!! Info "This example uses decluttering and SAK templates for the card"
    Both SAK templates and Decluttering templates are used to display the cards. This view is therefore as compact and easy to read as possible and is a good example of re-use.

#### Decluttering templates

!!! Example "Excerpt of the header configuration..."
    - The `header_template` is used for displaying the header sak card
    ```yaml title="From: view-sake3.yaml" linenums="1" hl_lines="2"
    - type: custom:decluttering-card
      template: header_template
      variables:
        - content: 'Luchtdruk'
        - font_color: var(--secondary-text-color)
        - font_size: 3em
    ```

!!! Example "Excerpt of the cards configuration..."
    - The `sak_sensor_history_template_nm_tpl` is used for displaying the sensor cards
    ```yaml title="From: view-sake3.yaml" linenums="1" hl_lines="4 10 16"
    - type: horizontal-stack
      cards:
        - type: custom:decluttering-card
          template: sak_sensor_history_template_nm_tpl
          variables:
            - entity: sensor.livingroom_iaq_humidity
            - name: Woonkamer
            - icon: mdi:water-percent
        - type: custom:decluttering-card
          template: sak_sensor_history_template_nm_tpl
          variables:
            - entity: sensor.kitchen_iaq_humidity
            - name: Keuken
            - icon: mdi:water-percent
        - type: custom:decluttering-card
          template: sak_sensor_history_template_nm_tpl
          variables:
            - entity: sensor.hall_gf_iaq_humidity
            - name: Hal
            - icon: mdi:water-percent
    ```
??? Example "Excerpt of the `decluttering_templates.yaml` file..."
    ```yaml linenums="1"
    header_template:
      !include sak-header-template-mw.yaml

    sak_sensor_history_template_nm_tpl:
      !include sak-sensor-history-nm-tpl.yaml
    ```
    
#### SAK templates
The following templates are defined in the `/lovelace/sak_templates/sak-templates.yaml` file:

- The `header` is the template used for the header texts
- The `toolset_sensor_history` is used for the sensor cards.

##:sak-sak-logo: Interactions
- All tools support by default the "more-info" dialog once clicked.

##:sak-sak-logo: Remarks
!!! Success "This view is an excellent example of how to pass variables from a decluttering to a SAK template"

The `sak_sensor_history_template_nm_tpl` decluttering template and `toolset_sensor_history` SAK template show how these templates can work together in passing variables from one template to the other.
    
!!! Example "Excerpt of decluttering template for passing variables from a decluttering to a SAK template"
    The `variables` passed to the decluttering template are passed directly to the SAK template. In this case it is the color range for the barchart.
    ```yaml linenums="1" hl_lines="5-7 26"
    default:
      - cx: 50
      - cy: 50
      - decimals: 1
      - variables:
          - bar_color_min: var(--cs-orange-lighten-40)
          - bar_color_max: var(--cs-orange-darken-20)

    card:
      type: 'custom:dev-swiss-army-knife-card'
      entities: 
        - entity: '[[entity]]'
          name: '[[name]]'
          icon: '[[icon]]'
          decimals: '[[decimals]]'
        - entity: weather.zoefdehaas
      aspectratio: 1/1
      layout:
        styles:
          toolsets:
            filter: url(#nm-1)
        toolsets:
          - toolset: sensor-history
            template:
              name: toolset_sensor_history
              variables: '[[variables]]'
            position:
              cx: '[[cx]]'
              cy: '[[cy]]'
    ```

