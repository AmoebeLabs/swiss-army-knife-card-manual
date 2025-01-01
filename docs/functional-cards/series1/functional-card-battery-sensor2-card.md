---
template: main.html
title: "Functional Cards: Battery Sensor Card"
description: "Example of functional card, Battery Sensor card"
hideno:
  toc
tags:
  - Design
  - Functional Card
  - Battery Level Card
---
<!-- GT/GL -->
##:sak-sak-logo: Visualization

![Swiss Army Knife Functional Card Battery Sensor2 D06 Light](../../assets/screenshots/sak-functional-card-12-battery-sensor2-theme-d06-light.png#only-light){width="600"}
<br>![Swiss Army Knife Functional Card Battery Sensor2 D06 Dark](../../assets/screenshots/sak-functional-card-12-battery-sensor2-theme-d06-dark.png#only-dark){width="600"}

This card uses the [Material 3 theme D06, TealBlue][ham3-d06-url]

!!! Warning "This card is nothing more than a Sensor Card \#2 with an adjusted colorstop!"

| Description| Aspect Ratio| Target Size |
|-|-|-|
| An example battery sensor level card with segmented arc and history| 4/1 | Grid with 2 columns |

For a description, check the sensor card!

##:sak-sak-logo: Usage
[:octicons-tag-24: 1.0.0-rc.3][github-releases]

!!! warning "Replace example entities with your entities!"

```yaml linenums="1"
- type: 'custom:swiss-army-knife-card'
  entities:
    - entity: sensor.iphone_van_marco_battery_level
      name: 'Battery #2'
    - entity: sensor.iphone_van_marco_battery_level
      secondary_info: last_changed
      format: relative
  layout:
    template:
      name: sak_layout_fce_sensor2
      variables:
        - sak_layout_sensor_name_above_state: false
        - sak_layout_sensor_colorstops_template: colorstops_battery_level
        - sak_layout_sensor_icon_style: colorstops
        - sak_layout_sensor_segarc_style: colorstops
        - sak_layout_sensor_segarc_scale_max: 100                

########################################################################

- type: 'custom:swiss-army-knife-card'
  entities:
    - entity: sensor.ipad_van_marco_battery_level
      name: 'Battery #2'
    - entity: sensor.ipad_van_marco_battery_level
      secondary_info: last_changed
      format: relative
  layout:
    template:
      name: sak_layout_fce_sensor2
      variables:
        - sak_layout_sensor_name_above_state: false
        - sak_layout_sensor_colorstops_template: colorstops_battery_level
        - sak_layout_sensor_icon_style: colorstops
        - sak_layout_sensor_segarc_style: colorstops
        - sak_layout_sensor_segarc_scale_max: 100                
```
##:sak-sak-logo: YAML Template Definition
[:octicons-tag-24: 1.0.0-rc.3][github-releases]
Check the sensor layout card!
<!-- Image references -->

<!--- Internal References... --->
[Swiss Army Knife Tutorial 02]: ../tutorials/10-step-tutorial-02-intro.md

<!--- External References... --->
[ham3-d06-url]: https://material3-themes-manual.amoebelabs.com/examples/material3-example-theme-d06-tealblue/
[github-releases]: https://github.com/amoebelabs/swiss-army-knife-card/releases/
