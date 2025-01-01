---
template: main.html
title: "Functional Cards Series 2: Awair Cards"
description: "Example of functional card, Awair Cards"
hideno:
  toc
tags:
  - Example
  - Functional Card - Series 2
  - Awair Element Cards
---
<!-- GT/GL -->
!!! warning "Series 2 will be released in 2025!"

##:sak-sak-logo: Visualization


!!! info "These cards mimic the display of an Awair Element."
    The graphs are not specifically for Awair sensor data. They can be used for other sensors too! 
<div class="poep" markdown>
<div class="grid cards toprow col3" markdown>
-   :sak-sak-logo:{ .lg .middle } __Awair Card #3a__

    ---

-   :sak-sak-logo:{ .lg .middle } __Awair Card #3b__

    ---

-   :sak-sak-logo:{ .lg .middle } __Awair Card #3c__

    ---
</div>
<div class="grid cards middlerow col3" markdown>
-    The card that matches the Awair display without icons which column is which sensor!

-    The same as #3a, but now with icons for each sensor, so you don't have to memorize which column is which sensor!
    The background icon is ommitted.

-    Same as example #3b, but now with rounded, rectangles for the sensor values instead of the Awair circles.

</div>
[Swiss Army Knife Functional Card Awair 3a - Light]: ../../assets/screenshots/sak-functional-card-s2-awair3a-light.png#only-light
[Swiss Army Knife Functional Card Awair 3a - Dark]: ../../assets/screenshots/sak-functional-card-s2-awair3a-dark.png#only-dark

[Swiss Army Knife Functional Card Awair 3b - Light]: ../../assets/screenshots/sak-functional-card-s2-awair3b-light.png#only-light
[Swiss Army Knife Functional Card Awair 3b - Dark]: ../../assets/screenshots/sak-functional-card-s2-awair3b-dark.png#only-dark

[Swiss Army Knife Functional Card Awair 3c - Light]: ../../assets/screenshots/sak-functional-card-s2-awair3c-1-light.png#only-light
[Swiss Army Knife Functional Card Awair 3c - Dark]: ../../assets/screenshots/sak-functional-card-s2-awair3c-1-dark.png#only-dark

<div class="grid cards bottomrow col3" markdown>
-   ![Swiss Army Knife Functional Card Awair 3a - Light]
    ![Swiss Army Knife Functional Card Awair 3a - Dark]

    [:octicons-arrow-right-24: Awair Card \#3a][Awair Card #3a]
    

-   ![Swiss Army Knife Functional Card Awair 3b - Light]
    ![Swiss Army Knife Functional Card Awair 3b - Dark]

    [:octicons-arrow-right-24: Awair Card \#3b][Awair Card #3b]

-   ![Swiss Army Knife Functional Card Awair 3c - Light]
    ![Swiss Army Knife Functional Card Awair 3c - Dark]

    [:octicons-arrow-right-24: Awair Card \#3c][Awair Card #3c]

</div>
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

The "original" Awair card that mimics the way Awair shows all of its sensors and the overal "air quality" index ranging from 0 to 100.

![Swiss Army Knife Functional Card Awair 3a - Light]{width=300}
![Swiss Army Knife Functional Card Awair 3a - Dark]{width=300}

##:sak-sak-logo: Design
The Awair cards are very similar to the sensor \#4 design: the latter was derived from the original Awair sensor cards!. It has a 1/1 aspectratio and is meant to be part of a grid with 2 columns in order to be readable on mobile devices.

| Description| Aspect Ratio| Target Size |
|-|-|-|
| A specific Card for Awair Element hardware that mimics the Awair way of showing graded sensor data using dots for each of the 5 sensors ranging from green (OK) to red (very bad).| 1/1 | Grid with 2 columns |

###Tools used
The card is built with 12 tools. You can find the numbers as *'dref: 1'* in the template itself for easy referencing.

![Swiss Army Knife Functional Card Design Awair Card #3a](../../assets/screenshots/sak-functional-card-design-s2-awair3a-light.png#only-light){width=300}
![Swiss Army Knife Functional Card Design Awair Card #3a](../../assets/screenshots/sak-functional-card-design-s2-awair3a-dark.png#only-dark){width=300}

| Number| Tool | Description |
|-|-|-|
| **1** | circle | Circle as background for the icon. Background color is determined by the colorstop for the main entity |
| **2** | icon | Icon of the entity |
| **3** | segarc | SegArc around the circle. Color according to the colorstop for the entity |
| **4** | state | State that displays the value of the entity |
| **5** | area | Location of the entity |
| **6** | name | Short description of the entity's sensor |
| **7** | icon | Icon as background for the card. Can be switched on/off |
| **8..12** | sparkline | Sparkline showing Awair alike values of the 5 sensors: temperature, humidity, CO~2~, VOC and PM2.5 |

###Template variables for `sak_layout_fce3_sensor4`

There are no template variables for this template card.

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

A slightly changed version compared to the \#3a version: Icons are added below each column of dots, so you don't have to memorize which colomn is which sensor...

![Swiss Army Knife Functional Card Awair 3b - Light]{width=300}
![Swiss Army Knife Functional Card Awair 3b - Dark]{width=300}

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

A variant of \#3b: now with bigger rounded rectangles instead of tiny circles for a larger display of the sensors colors.

![Swiss Army Knife Functional Card Awair 3c - Light]{width=300}
![Swiss Army Knife Functional Card Awair 3c - Dark]{width=300}

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
[Awair Card #3a]: #awair-element-card-3a
[Awair Card #3b]: #awair-element-card-3b
[Awair Card #3c]: #awair-element-card-3c

<!--- External References... --->
[ham3-d06-url]: https://material3-themes-manual.amoebelabs.com/examples/material3-example-theme-d06-tealblue/
[github-releases]: https://github.com/amoebelabs/swiss-army-knife-card/releases/

