---
template: overrides/main.html
---

Visualization of lights and interaction to switch lights on and off and to control brightness using a slider for the first row.

[![SAK Example 2]][SAK Example 2]

  [SAK Example 2]: ../assets/screenshots/sak-example-2.png
  
##:sak-sak-logo: Visualization
!!! Tip
    This visualization shows some non-card alike aspects of the Swiss Army Knife: the horizontal divider lines, and the texts "SCENES", "VERLICHTING (Lights)" and "WOONKAMER (Livingroom)" are all made with SAK.

The first lights row shows some cards with different experimental sliders and a `segmented arc` to display the brightness.
The other rows show a standard light card.

**The light switch** (all cards)

The light switch is made out of 3 circles and an icon:

- the 1st (bottom) circle is used to get the Neumorphic effect: a button that 'rises' out of the background. It also servers as the edge of the light button.
- the second circle is used to display the activation ring; orange if 'on' and light grey if 'off'.
- the third (top) circle is used to display the inset shadow effect as if the button is "pressed".
- last but not least: the light icon is displayed on top of all those circles.
    
**First card**

The first card shows a "more-info" button in the top left, the ligh button, the name of the light, and a slider with the actual percentage on the right side of the slider. The position of that value can be defined in the card.

**Second and third card**

The configurable position of the percentage is visible in the second and third card: apart from using a different styled slider, the percentage is shown in the circle where the `segmented arc` is also defined.

**The rest of the cards**

The other 4 - identical - cards show the light button, the area (Woonkamer = Livingroom), the name of the light, and if present: the brightness in the lower right corner.

!!! Info "Brightness is only displayed if the light is on"
    This is a change in Home Assistant some months ago.

##:sak-sak-logo: Data sources
- Ikea Tradfri Zigbee lights using zigbee2mqtt, ie the [MQTT integration](https://www.home-assistant.io/integrations/mqtt/)
- Dumb on/off lights using MQTT.

##:sak-sak-logo: Configuration

#### Lovelace view

This example is in the `view-sake2.yaml` file in the `/lovelace/views` folder.

!!! Info "This example uses decluttering templates for all cards except for the first row of lights!"
    Both SAK templates and Decluttering templates are used to display the cards.
    This view is therefore as compact and easy to read as possible and is a good example of re-use.

??? Example "Excerpt of the headers and dividers in this view..."

    ```yaml linenums="1"
    - type: custom:decluttering-card
      template: divider_template

    - type: custom:decluttering-card
      template: header_template
      variables:
        - content: 'Scenes'

    - type: custom:decluttering-card
      template: divider_template

    - type: custom:decluttering-card
      template: header_template
      variables:
        - content: 'Verlichting'

    - type: custom:decluttering-card
      template: header_template
      variables:
        - content: 'Woonkamer'
        - font_color: var(--secondary-text-color)
        - font_size: 3em
    ```
??? Example "And the excerpt of the lights on second and third row..."
    ```yaml linenums="1"
    - type: horizontal-stack
      cards:
        - type: custom:decluttering-card
          template: sak_light_button_template_nm_tpl
          variables:
            - entity: light.livingroom_light_gasheater_light
            - area: Woonkamer
            - name: Rode Lamp
            - icon: 'mdi:floor-lamp'

        - type: custom:decluttering-card
          template: sak_light_button_template_nm_tpl
          variables:
            - entity: light.livingroom_light_cupboard_light
            - area: Woonkamer
            - name: Boekenkast
            - icon: 'mdi:book-open-outline'
    ```


#### SAK templates
The following templates are defined in the `/lovelace/sak_templates/sak-templates.yaml` file:

- The `toolset_light_button_nm` is the template used for the standard lights (second and third row of cards).
- The `toolset_light_button_slider_nm` for the first card on the first row.
- The `toolset_light_button_slider3_nm` for the second card on the first row.
- The `toolset_light_button_slider2_nm` for the third card on the first row.

??? Example "Excerpt of the `sak-templates.yaml` file..."
    ```yaml linenums="1"
    toolset_light_button_nm:
      !include toolset-light-button-nm-template.yaml

    toolset_light_button_slider_nm:
      !include toolset-light-button-slider-nm-template.yaml

    toolset_light_button_slider2_nm:
      !include toolset-light-button-slider2-nm-template.yaml

    toolset_light_button_slider3_nm:
      !include toolset-light-button-slider3-nm-template.yaml
    ```

#### Decluttering templates
Decluttering templates are used extensively in this view except for the cards on the first row.

The following templates are defined in `/lovelace/decluttering_templates/decluttering_templates.yaml` file:

- The `header_template` is used for displaying the header sak card
- The `divider_template` is used for displaying the divider line sak card
- The `sak_button_template_nm_tpl` is used for displaying the light card


??? Example "Excerpt of the `decluttering_templates.yaml` file..."
    ```yaml linenums="1"
    header_template:
      !include sak-header-template-mw.yaml
    divider_template:
      !include sak-divider-template-mw.yaml

    sak_light_button_template_nm_tpl:
      !include sak-light-button-nm-tpl.yaml 
    ```

##:sak-sak-logo: Interactions
Sliders --> :octicons-beaker-24: Experimental

**First row**

The first row has an explicit "more-info" menu button and sliders for brightness

-	The menu in the upper left corner calls the "more-info" popup for the light.
-	Clicking the light icon toggles the state of the light
-	Clicking on the slider will set the brightness to the percentage.
- Dragging the slider will set the brightness and update the lights brightness semi-realtime 4 times a second.

!!! Warning "Menu in upper left corner can be difficult to touch/click"
    The SVG Icon has no real "touch/click" area attached (yet). Therefore it is difficult to activate the menu as SVG Icons can only be touched/clicked on the foreground part of the icon.
    
!!! Success "The slider has a touch/click area attached, so is perfectly to use"
    Except for a little bug where the thumb is pulled to the edge of the touch/click area or the brightness is set to 100%, and cannot be controlled anymore. In this case clicking/touching the slider makes the thumb accessible again.

!!! Bug "The thumb of the slider of the first card is not positioned correctly"
    The slider expects to be in the center of the card, which this slider is not. As a result the thumb is positioned more to the left than it should be. 
    
    Will be fixed of course :smile:.
    
**Other rows**

- All cards displayed toggle the light by clicking on the light icon
- All cards displayed show the "more-info" dialog if name or brightness percentage is clicked.



##:sak-sak-logo: Remarks

- Home Assistant sends a brightness value between 0..255.
<br>A little piece of javascript in the card converts this to 0..100% as a derived state, including a unit of measurement definition of "%". This means that the value and the uom can be styled as if it is an existing state.