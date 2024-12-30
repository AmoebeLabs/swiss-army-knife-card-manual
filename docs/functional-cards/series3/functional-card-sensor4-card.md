---
template: main.html
title: "Functional Cards Series 3: Sensor Cards"
description: "Example of functional card, Sensor Cards"
hideno:
  toc
tags:
  - Example
  - Functional Card - Series 3
  - Sensor Cards
---
<!-- GT/GL -->
!!! warning "Series 3 will be released in 2025!"

##:sak-sak-logo: Visualization


!!! info "These cards show different sorts of sparkline graphs."
    They use the same SAK template and use variables to specify the type of sparkline, colorstops and more!
    

<div class="grid cards" markdown>

-   :sak-sak-logo:{ .lg .middle } __Sensor with Sparkline *"Line"*__

    ---

    A sensor card with a sparkline showing the history of today.
    <br><br>

    ![Swiss Army Knife Functional Sensor Card #4-8](../../assets/screenshots/sak-functional-card-s3-sensor4-8-light.png#only-light)
    ![Swiss Army Knife Functional Sensor Card #4-8](../../assets/screenshots/sak-functional-card-s3-sensor4-8-dark.png#only-dark)


    [:octicons-arrow-right-24: Line Example][Line Example]

-   :sak-sak-logo:{ .lg .middle } __Sensor with Sparkline *"Area"*__

    ---

    A sensor card with a sparkline showing the history of today.
    <br><br>
    
    ![Swiss Army Knife Functional Sensor Card #4-6](../../assets/screenshots/sak-functional-card-s3-sensor4-6-light.png#only-light)
    ![Swiss Army Knife Functional Sensor Card #4-6](../../assets/screenshots/sak-functional-card-s3-sensor4-6-dark.png#only-dark)

    [:octicons-arrow-right-24: Area Example][Area Example]

-   :sak-sak-logo:{ .lg .middle } __Sensor with Sparkline *"Barcode/Audio"*__

    ---

    A sensor card with a sparkline showing the history of today.
    <br><br>

    ![Swiss Army Knife Functional Sensor Card #4-2](../../assets/screenshots/sak-functional-card-s3-sensor4-2-light.png#only-light)
    ![Swiss Army Knife Functional Sensor Card #4-2](../../assets/screenshots/sak-functional-card-s3-sensor4-2-dark.png#only-dark)

    [:octicons-arrow-right-24: Barcode/Audio Example][Barcode/Audio Example]

-   :sak-sak-logo:{ .lg .middle } __Sensor with Sparkline *"Bar"*__

    ---

    A sensor card with a sparkline showing the history of today.
    <br><br>

    ![Swiss Army Knife Functional Sensor Card #4-9](../../assets/screenshots/sak-functional-card-s3-sensor4-9-light.png#only-light)
    ![Swiss Army Knife Functional Sensor Card #4-9](../../assets/screenshots/sak-functional-card-s3-sensor4-9-dark.png#only-dark)

    [:octicons-arrow-right-24: Bar Example][Bar Example]


-   :sak-sak-logo:{ .lg .middle } __Sensor with Sparkline *"Dots"*__

    ---

    A sensor card with a sparkline showing the history of today.
    <br><br>

    ![Swiss Army Knife Functional Sensor Card #4-10](../../assets/screenshots/sak-functional-card-s3-sensor4-10-light.png#only-light)
    ![Swiss Army Knife Functional Sensor Card #4-10](../../assets/screenshots/sak-functional-card-s3-sensor4-10-dark.png#only-dark)

    [:octicons-arrow-right-24: Dots Example][Dots Example]


-   :sak-sak-logo:{ .lg .middle } __Sensor with Sparkline *"Graded/Rank"*__

    ---

    A sensor card with a sparkline showing the history of today.
    <br><br>

    ![Swiss Army Knife Functional Sensor Card #4-9](../../assets/screenshots/sak-functional-card-s3-sensor4-5-light.png#only-light)
    ![Swiss Army Knife Functional Sensor Card #4-9](../../assets/screenshots/sak-functional-card-s3-sensor4-5-dark.png#only-dark)

    [:octicons-arrow-right-24: Graded/Rank Order Example][Graded/Rank Order Example]


</div>

| Description| Aspect Ratio| Target Size |
|-|-|-|
| A cards show Awair sensor data in different ways.| 1/1 | Grid with 2 columns |

##:sak-sak-logo: Interaction

| Part | Description|
|-|-|
| Card | All tools connected to an entity do show by default the "more-info" dialog once clicked |

##:sak-sak-logo: Sensor Card \#4 - Line Example
[:octicons-tag-24: 4.0.1][github-releases]

###Usage
!!! warning "Replace example entities with your entities!"

```yaml linenums="1"
- type: 'custom:swiss-army-knife-card'
  entities:
    - entity: sensor.awair_element_study_pm2_5
      name: 'PM2.5'
      area: 'Study'
      icon: mdi:dots-hexagon
    layout:
    template:
      name: sak_layout_fce3_sensor4
      variables:
        - sak_layout_awair_chart_type: line
        - sak_layout_awair_background_icon_disabled: false
        - sak_layout_awair_sensor_colorstop_v1: sak_colorstops_awair_pm25_v1
        - sak_layout_awair_sensor_colorstop_v2: sak_colorstops_awair_pm25_v2
        - sak_layout_awair_sensor_scale_max: 100
```


##:sak-sak-logo: Sensor Card \#4 - Area Example
[:octicons-tag-24: 4.0.1][github-releases]

###Usage

!!! warning "Replace example entities with your entities!"

```yaml linenums="1"
- type: 'custom:swiss-army-knife-card'
   entities:
    - entity: sensor.kitchen_group_energy_power
      name: 'Power'
      area: 'Kitchen'
    layout:
    template:
      name: sak_layout_fce3_sensor4
      variables:
        - sak_layout_awair_chart_type: area
        - sak_layout_awair_background_icon_disabled: false
        - sak_layout_awair_sensor_colorstop_v1: sak_colorstops_energy_4000w_v1
        - sak_layout_awair_sensor_colorstop_v2: sak_colorstops_energy_4000w_v2
        - sak_layout_awair_sensor_scale_max: 250
```

##:sak-sak-logo: Sensor Card \#4 - Barcode/Audio Example
[:octicons-tag-24: 4.0.1][github-releases]

###Usage

!!! warning "Replace example entities with your entities!"

```yaml linenums="1"
- type: 'custom:swiss-army-knife-card'
    entities:
    - entity: sensor.kitchen_group_energy_voltage
      name: 'Voltage'
      area: 'Kitchen'
    layout:
    template:
      name: sak_layout_fce3_sensor4
      variables:
        - sak_layout_awair_chart_type: barcode
        - sak_layout_awair_chart_variant: audio
        - sak_layout_awair_background_icon_disabled: false
        - sak_layout_awair_sensor_colorstop_v1: sak_colorstops_awair_voc_v1
        - sak_layout_awair_sensor_colorstop_v2: sak_colorstops_awair_voc_v2
        - sak_layout_awair_sensor_scale_max: 250
```

##:sak-sak-logo: Sensor Card \#4 - Bar Example
[:octicons-tag-24: 4.0.1][github-releases]

###Usage

!!! warning "Replace example entities with your entities!"

```yaml linenums="1"
- type: 'custom:swiss-army-knife-card'
  entities:
    - entity: sensor.awair_element_study_humidity
      name: 'Humidity'
      area: 'Study'
      decimals: 0
    layout:
    template:
      name: sak_layout_fce3_sensor4
      variables:
        - sak_layout_awair_chart_type: bar
        - sak_layout_awair_background_icon_disabled: false
        - sak_layout_awair_sensor_colorstop_v1: sak_colorstops_awair_humidity_v1
        - sak_layout_awair_sensor_colorstop_v2: sak_colorstops_awair_humidity_v2
        - sak_layout_awair_sensor_scale_max: 100
```
##:sak-sak-logo: Sensor Card \#4 - Dots Example
[:octicons-tag-24: 4.0.1][github-releases]

###Usage

!!! warning "Replace example entities with your entities!"

```yaml linenums="1"
- type: 'custom:swiss-army-knife-card'
  entities:
    - entity: sensor.awair_element_study_pm2_5
      name: 'PM2.5'
      area: 'Study'
      icon: mdi:dots-hexagon
    layout:
    template:
      name: sak_layout_fce3_sensor4
      variables:
        - sak_layout_awair_chart_type: dots
        - sak_layout_awair_background_icon_disabled: false
        - sak_layout_awair_sensor_colorstop_v1: sak_colorstops_awair_pm25_v1
        - sak_layout_awair_sensor_colorstop_v2: sak_colorstops_awair_pm25_v2
        - sak_layout_awair_sensor_scale_max: 100
```

##:sak-sak-logo: Sensor Card \#4 - Graded/Rank Order Example
[:octicons-tag-24: 4.0.1][github-releases]

###Usage

!!! warning "Replace example entities with your entities!"

```yaml linenums="1"
- type: 'custom:swiss-army-knife-card'
  entities:
    - entity: sensor.awair_element_study_carbon_dioxide
      name: 'CO2'
      area: 'Study'
    layout:
    template:
      name: sak_layout_fce3_sensor4
      variables:
        - sak_layout_awair_background_icon_disabled: false
        - sak_layout_awair_sensor_colorstop_v1: sak_colorstops_awair_co2_v1
        - sak_layout_awair_sensor_colorstop_v2: sak_colorstops_awair_co2_v2
        - sak_layout_awair_sensor_scale_max: 3000
```

###Sensor Card \#4 YAML Template Definition
[:octicons-tag-24: 4.0.1][github-releases]
??? Info "Full definition of layout template"
    ```yaml linenums="1"
    sak_layout_fce3_sensor4:
      template:
        type: layout
        defaults: 
            # Chart types barcode, dots, line, area, bar or graded work nicely
            # The equalizer not!
          - sak_layout_awair_chart_type: graded
            # Check documentation for chart variant per chart type
          - sak_layout_awair_chart_variant: rank_order
          - sak_layout_awair_background_icon_disabled: false
          - sak_layout_awair_sensor_colorstop_v1: sak_colorstops_awair_temperature_v1
          - sak_layout_awair_sensor_colorstop_v2: sak_colorstops_awair_temperature_v2
          - sak_layout_awair_sensor_scale_max: 100

      layout:
        aspectratio: 1/1
        toolsets:
          # ==============================================================================
          - toolset: background-icon
            position:
              cx: 100
              cy: 37.5
            tools:
              # ------------------------------------------------------------
              - type: icon
                # When disabled, SAK will not use this tool
                disabled: '[[sak_layout_awair_background_icon_disabled]]'
                position:
                  cx: 50
                  cy: 50
                  align: center
                  icon_size: 50
                entity_index: 0
                styles:
                  icon:
                    fill: var(--theme-sys-elevation-surface-neutral3)
          # ==============================================================================
          - toolset: circle-with-icon
            position:
              cx: 20
              cy: 20
            tools:
              # ------------------------------------------------------------
              - type: 'segarc'
                entity_index: 0
                position:
                  cx: 50
                  cy: 50
                  start_angle: 0
                  end_angle: 360
                  width: 2
                  radius: 12.5
                scale:
                  min: 0
                  max: '[[sak_layout_awair_sensor_scale_max]]'
                show:
                  scale: false
                  style: 'colorstops'
                  lastcolor: true
                segments:
                  colorstops:
                    template: 
                      name: '[[sak_layout_awair_sensor_colorstop_v1]]'
                styles:
                  foreground:
                    fill: var(--theme-gradient-color-02)
                  background:
                    fill: var(--primary-background-color)
              # ------------------------------------------------------------
              - type: circle
                position:
                  cx: 50
                  cy: 50
                  radius: 9
                entity_index: 0
                colorstops:
                  template: 
                    name: '[[sak_layout_awair_sensor_colorstop_v1]]'
                show:
                  style: colorstops
                styles:
                  circle:
                    transition: fill 2s ease
                    stroke-width: 2em
              # ------------------------------------------------------------
              - type: icon
                position:
                  cx: 50
                  cy: 50
                  align: center
                  icon_size: 15
                entity_index: 0
                styles:
                  icon:
                    fill: var(--primary-background-color)
          # ==============================================================================
          - toolset: area-name
            position:
              cx: 7.5
              cy: 45
            tools:
              # ------------------------------------------------------------
              - type: area
                position:
                  cx: 50
                  cy: 50
                entity_index: 0
                show:
                  ellipsis: 12
                styles: 
                  area: 
                    text-anchor: start
                    font-size: 12em
                    font-weight: 700
                    opacity: 1
              # ------------------------------------------------------------
              - type: name
                position:
                  cx: 50
                  cy: 62.5
                entity_index: 0
                show:
                  ellipsis: 16
                styles: 
                  name: 
                    text-anchor: start
                    font-size: 10em
                    font-weight: 400
                    opacity: 0.6

          # ==============================================================================
          - toolset: score-state
            position:
              cx: 92.8
              cy: 15
            tools:
              # ------------------------------------------------------------
              - type: state
                position:
                  cx: 50
                  cy: 50
                entity_index: 0
                show: 
                  uom: end
                styles:
                  state:
                    font-size: 15em
                    text-anchor: end
                    font-weight: 700
                  uom:
                    font-weight: 600

          # ===============================================================
          - toolset: graph-sensor
            position:
              cx: 50
              cy: &sensor_cy 78
            tools:
              # ------------------------------------------------------------
              - type: sparkline
                position: &graph_pos
                  cx: 50
                  cy: 50
                  width: 85
                  height: 25
                entity_index: 0
                entity_indexes:
                  - entity_index: 0
                period:
                  calendar:
                    period: day
                    offset: 0
                    duration:
                      hour: 24
                    bins:
                      per_hour: 1
                sparkline:
                  animate: true
                  show:
                    chart_type: '[[sak_layout_awair_chart_type]]'
                    chart_variant: '[[sak_layout_awair_chart_variant]]'
                    fill: fade
                  state_values:
                    aggregate_func: avg
                  area:
                    line_width : 1.5
                  bar:
                    line_width : 0.1
                    colum_spacing: 1
                  dots:
                    line_width: 2
                  equalizer:
                    value_buckets: 5
                  graded:
                    square: true
                    line_width : 1.5
                  line:
                    line_width : 1.5
                  x_lines:
                    lines:
                      - name: x_axis
                        zpos: below 
                        yshift: 15
                      - name: ticks
                        zpos: below 
                        yshift: 16
                  colorstops_transition: hard
                  colorstops:
                    template:
                      name: '[[sak_layout_awair_sensor_colorstop_v2]]'
                  styles: &graded_rank_order_styles
                    barcode_graph:
                      rx: 50%
                      ry: 5%
                    graded_background:
                      transition: fill 2s ease
                      rx: 50%
                      ry: 50%
                    graded_foreground:
                      transition: fill 2s ease
                      rx: 50%
                      ry: 50%
                    x_axis:
                      stroke: var(--theme-sys-elevation-surface-neutral6)
                      stroke-width: 0.2rem
                    ticks:
                      stroke: var(--theme-sys-elevation-surface-neutral6)
                      stroke-dasharray: 2, 117.5
                      stroke-dashoffset: 0
                      stroke-width: 0.75rem
    ```

<!--- Internal References... --->
[Swiss Army Knife Tutorial 02]: ../tutorials/10-step-tutorial-02-intro.md
[Line Example]: #sensor-card-4-line-example
[Area Example]: #sensor-card-4-area-example
[Barcode/Audio Example]: #sensor-card-4-barcodeaudio-example
[Bar Example]: #sensor-card-4-bar-example
[Dots Example]: #sensor-card-4-dots-example
[Graded/Rank Order Example]: #sensor-card-4-gradedrank-order-example

<!--- External References... --->
[ham3-d06-url]: https://material3-themes-manual.amoebelabs.com/examples/material3-example-theme-d06-tealblue/
[github-releases]: https://github.com/amoebelabs/swiss-army-knife-card/releases/