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

-   :sak-sak-logo:{ .lg .middle } __Sensor with Sparkline "Line"__

    ---

    The card that matches the Awair display without icons which column is which sensor!
    <br><br>

    ![Swiss Army Knife Functional Sensor Card #2a-8](../../assets/screenshots/sak-functional-card-s3-sensor2a-8-light.png#only-light)
    ![Swiss Army Knife Functional Sensor Card #2a-8](../../assets/screenshots/sak-functional-card-s3-sensor2a-8-dark.png#only-dark)


    [:octicons-arrow-right-24: Sensor Card #2a][Sensor Card #2a]

-   :sak-sak-logo:{ .lg .middle } __Sensor with Sparkline "Line"__

    ---

    The same as #3a, but now with icons for each sensor, so you don't have to memorize which column is which sensor!
    The background icon is ommitted.

    ![Swiss Army Knife Functional Sensor Card #2a-4](../../assets/screenshots/sak-functional-card-s3-sensor2a-4-light.png#only-light)
    ![Swiss Army Knife Functional Sensor Card #2a-4](../../assets/screenshots/sak-functional-card-s3-sensor2a-4-dark.png#only-dark)

    [:octicons-arrow-right-24: Sensor Card #2a][Sensor Card #2a]

-   :sak-sak-logo:{ .lg .middle } __Sensor with Sparkline "Line"__

    ---

    Same as example #3b, but now with rounded, rectangles for the sensor values instead of the Awair circles.
    <br><br>

    ![Swiss Army Knife Functional Sensor Card #2a-2](../../assets/screenshots/sak-functional-card-s3-sensor2a-2-light.png#only-light)
    ![Swiss Army Knife Functional Sensor Card #2a-2](../../assets/screenshots/sak-functional-card-s3-sensor2a-2-dark.png#only-dark)

    [:octicons-arrow-right-24: Sensor Card #2a-2][Sensor Card #2a-2]

-   :sak-sak-logo:{ .lg .middle } __Sensor with Sparkline "Line"__

    ---

    Same as example #3b, but now with rounded, rectangles for the sensor values instead of the Awair circles.
    <br><br>

    ![Swiss Army Knife Functional Sensor Card #2a-9](../../assets/screenshots/sak-functional-card-s3-sensor2a-9-light.png#only-light)
    ![Swiss Army Knife Functional Sensor Card #2a-9](../../assets/screenshots/sak-functional-card-s3-sensor2a-9-dark.png#only-dark)

    [:octicons-arrow-right-24: Sensor Card #2a-9][Sensor Card #2a-9]


-   :sak-sak-logo:{ .lg .middle } __Sensor with Sparkline "Line"__

    ---

    Same as example #3b, but now with rounded, rectangles for the sensor values instead of the Awair circles.
    <br><br>

    ![Swiss Army Knife Functional Sensor Card #2a-9](../../assets/screenshots/sak-functional-card-s3-sensor2a-6-light.png#only-light)
    ![Swiss Army Knife Functional Sensor Card #2a-9](../../assets/screenshots/sak-functional-card-s3-sensor2a-6-dark.png#only-dark)

    [:octicons-arrow-right-24: Sensor Card #2a-9][Sensor Card #2a-9]


-   :sak-sak-logo:{ .lg .middle } __Sensor with Sparkline "Line"__

    ---

    Same as example #3b, but now with rounded, rectangles for the sensor values instead of the Awair circles.
    <br><br>

    ![Swiss Army Knife Functional Sensor Card #2a-9](../../assets/screenshots/sak-functional-card-s3-sensor2a-5-light.png#only-light)
    ![Swiss Army Knife Functional Sensor Card #2a-9](../../assets/screenshots/sak-functional-card-s3-sensor2a-5-dark.png#only-dark)

    [:octicons-arrow-right-24: Sensor Card #2a-5][Sensor Card #2a-5]


</div>

| Description| Aspect Ratio| Target Size |
|-|-|-|
| A cards show Awair sensor data in different ways.| 1/1 | Grid with 2 columns |

##:sak-sak-logo: Interaction

| Part | Description|
|-|-|
| Card | All tools connected to an entity do show by default the "more-info" dialog once clicked |

##:sak-sak-logo: Awair Element Card #3a
[:octicons-tag-24: 4.0.1][github-releases]

###Usage
!!! warning "Replace example entities with your entities!"

```yaml linenums="1"
- type: 'custom:swiss-army-knife-card'
    entities:
    - entity: sensor.awair_element_study_score
        name: 'Awair Element'
        area: 'Study'
    - entity: sensor.awair_element_study_temperature
        name: 'Temp'
        area: 'Study'
    - entity: sensor.awair_element_study_humidity
        name: 'Humidity'
        area: 'Study'
        decimals: 0
    - entity: sensor.awair_element_study_carbon_dioxide
        name: 'CO2'
        area: 'Study'
    - entity: sensor.awair_element_study_volatile_organic_compounds
        name: 'Chemicals'
        area: 'Study'
    - entity: sensor.awair_element_study_pm2_5
        name: 'PM2.5'
        area: 'Study'
        icon: mdi:dots-hexagon
    layout:
    template:
        name: sak_layout_fce2_awair3a
```

###YAML Template Definition
[:octicons-tag-24: 4.0.1][github-releases]
??? Info "Full definition of layout template"
    ```yaml linenums="1"
    ```

##:sak-sak-logo: Awair Element Card #3b
[:octicons-tag-24: 4.0.1][github-releases]

###Usage

!!! warning "Replace example entities with your entities!"

```yaml linenums="1"
- type: 'custom:swiss-army-knife-card'
    entities:
    - entity: sensor.awair_element_study_score
        name: 'Awair Element'
        area: 'Study'
    - entity: sensor.awair_element_study_temperature
        name: 'Temp'
        area: 'Study'
    - entity: sensor.awair_element_study_humidity
        name: 'Humidity'
        area: 'Study'
        decimals: 0
    - entity: sensor.awair_element_study_carbon_dioxide
        name: 'CO2'
        area: 'Study'
    - entity: sensor.awair_element_study_volatile_organic_compounds
        name: 'Chemicals'
        area: 'Study'
    - entity: sensor.awair_element_study_pm2_5
        name: 'PM2.5'
        area: 'Study'
        icon: mdi:dots-hexagon
    layout:
    template:
        name: sak_layout_fce2_awair3b
```

###YAML Template Definition
[:octicons-tag-24: 4.0.1][github-releases]
??? Info "Full definition of layout template"
    ```yaml linenums="1"
    ```
    
##:sak-sak-logo: Awair Element Card #3c
[:octicons-tag-24: 4.0.1][github-releases]

###Usage

!!! warning "Replace example entities with your entities!"

```yaml linenums="1"
- type: 'custom:swiss-army-knife-card'
    entities:
    - entity: sensor.awair_element_livingroom_score
        name: 'Awair Element'
        area: 'Livingroom'
    - entity: sensor.awair_element_livingroom_temperature
        name: 'Temp'
        area: 'Livingroom'
    - entity: sensor.awair_element_livingroom_humidity
        name: 'Humidity'
        area: 'Livingroom'
        decimals: 0
    - entity: sensor.awair_element_livingroom_carbon_dioxide
        name: 'CO2'
        area: 'Livingroom'
    - entity: sensor.awair_element_livingroom_volatile_organic_compounds
        name: 'Chemicals'
        area: 'Livingroom'
    - entity: sensor.awair_element_livingroom_pm2_5
        name: 'PM2.5'
        area: 'Livingroom'
        icon: mdi:dots-hexagon
    layout:
    template:
        name: sak_layout_fce2_awair3c
```
###YAML Template Definition
[:octicons-tag-24: 4.0.1][github-releases]
??? Info "Full definition of layout template"
    ```yaml linenums="1"
    ```
    

<!--- Internal References... --->
[Swiss Army Knife Tutorial 02]: ../tutorials/10-step-tutorial-02-intro.md
[Preface]: functional-card-binary-sensor-alert1-card.md
[Awair Card #3a]: #awair-element-card-3a-usage
[Awair Card #3b]: #awair-element-card-3b-usage
[Awair Card #3c]: #awair-element-card-3c-usage

<!--- External References... --->
[ham3-d06-url]: https://material3-themes-manual.amoebelabs.com/examples/material3-example-theme-d06-tealblue/
[github-releases]: https://github.com/amoebelabs/swiss-army-knife-card/releases/