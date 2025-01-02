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
[Swiss Army Knife Awair Element Product]: ../../assets/screenshots/awair-element-product.png
![Swiss Army Knife Awair Element Product]

##:sak-sak-logo: Visualization
These cards are specifically made for the Awair Element hardware and the way Awair does the grading and calculation of the overall score.

There are 3 variations of this card.

<div class="poep" markdown>
<div class="grid cards toprow col3" markdown>
-   :sak-sak-logo:{ .lg .middle } __Awair Card #1a__

    ---

-   :sak-sak-logo:{ .lg .middle } __Awair Card #1b__

    ---

-   :sak-sak-logo:{ .lg .middle } __Awair Card #1c__

    ---
</div>
<div class="grid cards middlerow col3" markdown>
-    The card that alomst matches the Awair App display. It adds the history of the overall air quality score showing a 24 hour history.

-    The same as #1a, but now the overall air quality score shows the history of today. For each sensor, a radial_barcode/sun_burst type of sparkline displays today's history.

-    The same as #1b, but using barcode/audio sparkline chart to display the sensor history.
</div>
[Swiss Army Knife Functional Card Awair 1a - Light]: ../../assets/screenshots/sak-functional-card-s2-awair1a-living-light.png#only-light
[Swiss Army Knife Functional Card Awair 1a - Dark]: ../../assets/screenshots/sak-functional-card-s2-awair1a-living-dark.png#only-dark

[Swiss Army Knife Functional Card Awair 1b - Light]: ../../assets/screenshots/sak-functional-card-s2-awair1b-study-light.png#only-light
[Swiss Army Knife Functional Card Awair 1b - Dark]: ../../assets/screenshots/sak-functional-card-s2-awair1b-study-dark.png#only-dark

[Swiss Army Knife Functional Card Awair 1c - Light]: ../../assets/screenshots/sak-functional-card-s2-awair1c-study-light.png#only-light
[Swiss Army Knife Functional Card Awair 1c - Dark]: ../../assets/screenshots/sak-functional-card-s2-awair1c-study-dark.png#only-dark

<div class="grid cards bottomrow col3" markdown>
-   ![Swiss Army Knife Functional Card Awair 1a - Light]
    ![Swiss Army Knife Functional Card Awair 1a - Dark]

    [:octicons-arrow-right-24: Awair Card \#1a][Awair Card #1a]
    

-   ![Swiss Army Knife Functional Card Awair 1b - Light]
    ![Swiss Army Knife Functional Card Awair 1b - Dark]

    [:octicons-arrow-right-24: Awair Card \#1b][Awair Card #1b]

-   ![Swiss Army Knife Functional Card Awair 1c - Light]
    ![Swiss Army Knife Functional Card Awair 1c - Dark]

    [:octicons-arrow-right-24: Awair Card \#1c][Awair Card #1c]

</div>
</div>
| Description| Aspect Ratio| Target Size |
|-|-|-|
| Cards that show Awair sensor data in different ways.| varying | Grid with 1 column |

##:sak-sak-logo: Interaction

| Part | Description|
|-|-|
| Card | All tools connected to an entity do show by default the "more-info" dialog once clicked |

##:sak-sak-logo: Awair Element Card #1a
[:octicons-tag-24: 4.0.1][github-releases]

This card shows the following data:

- The location of the Awair Element (Living in this case)
- The actual "Air Quality" score (94)
- The history of the "Air Quality" score for this day: only the average in an "Area" sparkline chart
- For each sensor:
    - The Awair grading dots
    - The actual sensor value

![Swiss Army Knife Functional Card Awair 1a - Light]{width=500}
![Swiss Army Knife Functional Card Awair 1a - Dark]{width=500}

###Usage

!!! warning "Replace example entities with your entities!"

```yaml linenums="1"
- type: 'custom:swiss-army-knife-card'
  entities:
    - entity: sensor.awair_element_livingroom_score
      name: 'Score'
      area: 'Living'
    - entity: sensor.awair_element_livingroom_temperature
      name: 'Temp'
      area: 'Living'
    - entity: sensor.awair_element_livingroom_humidity
      name: 'Humidity'
      area: 'Living'
      decimals: 0
    - entity: sensor.awair_element_livingroom_carbon_dioxide
      name: 'CO2'
      area: 'Living'
    - entity: sensor.awair_element_livingroom_volatile_organic_compounds
      name: 'Chemicals'
      area: 'Living'
    - entity: sensor.awair_element_livingroom_pm2_5
      name: 'PM2.5'
      area: 'Living'
  layout:
    template:
      name: sak_layout_fce2_awair1a
```

##:sak-sak-logo: Awair Element Card #1b
[:octicons-tag-24: 4.0.1][github-releases]

This card shows the following data:

- The location of the Awair Element (Study in this case)
- The actual "Air Quality" score (946
- The history of the "Air Quality" over the last 24 hours: average and min/max are shown in an "Area" sparkline chart
- For each sensor:
    - The Awair grading dots
    - The actual sensor value
    - Today's history with a radial_barcode/sun_burst type of sparkline chart


![Swiss Army Knife Functional Card Awair 1b - Light]{width=500}
![Swiss Army Knife Functional Card Awair 1b - Dark]{width=500}

###Usage

!!! warning "Replace example entities with your entities!"

```yaml linenums="1"
- type: 'custom:swiss-army-knife-card'
  entities:
    - entity: sensor.awair_element_study_score
      name: 'Score'
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
  layout:
    template:
      name: sak_layout_fce2_awair1b
```

###YAML Template Definition
[:octicons-tag-24: 4.0.1][github-releases]
??? Info "Full definition of layout template"
    ```yaml linenums="1"
    ```
    
##:sak-sak-logo: Awair Element Card #1c
[:octicons-tag-24: 4.0.1][github-releases]

This card shows the following data:

- The location of the Awair Element (Study in this case)
- The actual "Air Quality" score (96)
- The history of the "Air Quality" over the last 24 hours: average and min/max are shown in an "Area" sparkline chart
- For each sensor:
    - The Awair grading dots
    - The actual sensor value
    - Today's history with a barcode/audio type of sparkline chart

![Swiss Army Knife Functional Card Awair 1c - Light]{width=500}
![Swiss Army Knife Functional Card Awair 1c - Dark]{width=500}

###Usage

!!! warning "Replace example entities with your entities!"

```yaml linenums="1"
- type: 'custom:swiss-army-knife-card'
  entities:
    - entity: sensor.awair_element_study_score
      name: 'Score'
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
  layout:
    template:
      name: sak_layout_fce2_awair1c
```
###YAML Template Definition
[:octicons-tag-24: 4.0.1][github-releases]
??? Info "Full definition of layout template"
    ```yaml linenums="1"
    ```
    

<!--- Internal References... --->
[Swiss Army Knife Tutorial 02]: ../tutorials/10-step-tutorial-02-intro.md
[Preface]: functional-card-binary-sensor-alert1-card.md
[Awair Card #1a]: #awair-element-card-3a
[Awair Card #1b]: #awair-element-card-3b
[Awair Card #1c]: #awair-element-card-3c

<!--- External References... --->
[ham3-d06-url]: https://material3-themes-manual.amoebelabs.com/examples/material3-example-theme-d06-tealblue/
[github-releases]: https://github.com/amoebelabs/swiss-army-knife-card/releases/

