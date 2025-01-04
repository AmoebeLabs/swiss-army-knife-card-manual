---
template: main.html
title: "Functional Cards Series 2: Big Electricity Cards"
description: "Example of functional card, Big Electricity Cards"
hideno:
  toc
tags:
  - Example
  - Functional Card - Series 2
  - Electricity Cards
---
<!-- GT/GL -->
!!! warning "Series 2 will be released in 2025!"

##:sak-sak-logo: Visualization


!!! info "These big cards show electricity sensors using sparkline graphs."
    These are really big cards, but do show lots of the possibilities of the Swiss Army Knife Card and the sparkline tool.

    These are really advanced cards (lots of YAML...)
    

<div class="grid cards col1" markdown>

-   :sak-sak-logo:{ .lg .middle } __Electricity Card *"\#3"*__

    ---


    !!! info "I have no solar panels, so the blue part of the flower is fake!"

[Electricity #3 Example - Light]: ../../assets/screenshots/sak-functional-card-s2-electricity3b-light.png#only-light
[Electricity #3 Example - Dark]: ../../assets/screenshots/sak-functional-card-s2-electricity3b-dark.png#only-dark

    ![Electricity #3 Example - Light]
    ![Electricity #3 Example - Dark]

    [:octicons-arrow-right-24: Electricity \#3 Example][Electricity Card #3 Example]
    <br><br>

-   :sak-sak-logo:{ .lg .middle } __Electricity Card *"\#4"*__

    ---

    !!! info "I have no solar panels, so the blue part of the flower is fake!"

    !!! info "The power sensor just changed when I took the screenshot (dark mode only)"
        so you see the left graph having animated bars, and in the block below you see 0,137kW while the graph is still showing the previous data (red, so > 2kW).

[Electricity #4 Example - Light]: ../../assets/screenshots/sak-functional-card-s2-electricity4b-light.png#only-light
[Electricity #4 Example - Dark]: ../../assets/screenshots/sak-functional-card-s2-electricity4b-dark.png#only-dark

    ![Electricity #4 Example - Light]
    ![Electricity #4 Example - Dark]

    [:octicons-arrow-right-24: Electricity \#4 Example][Electricity Card #4 Example]
    <br><br>

-   :sak-sak-logo:{ .lg .middle } __Electricity Card *"\#5"*__

    ---

    !!! info "I have no solar panels, so the blue part of the flower is fake!"


[Electricity #5 Example - Light]: ../../assets/screenshots/sak-functional-card-s2-electricity5b-light.png#only-light
[Electricity #5 Example - Dark]: ../../assets/screenshots/sak-functional-card-s2-electricity5b-dark.png#only-dark

    ![Electricity #5 Example - Light]
    ![Electricity #5 Example - Dark]

    [:octicons-arrow-right-24: Electricity \#5 Example][Electricity Card #5 Example]
    <br><br>

</div>

| Description| Aspect Ratio| Target Size |
|-|-|-|
| A cards show Awair sensor data in different ways.| 1/1 | Grid with 2 columns |

##:sak-sak-logo: Interaction

| Part | Description|
|-|-|
| Card | All tools connected to an entity do show by default the "more-info" dialog once clicked |

##:sak-sak-logo: Electricity Card \#3 Example
[:octicons-tag-24: 4.0.1][github-releases]

The card shows a comprehensive overview of the electricity usage and return:

1. **Today's Electricity Header:** Displays the average, minimum, and maximum electricity used over the last 24 hours.

1. **Mid Section:**
    - **Left Graph:** Electricity used from the grid.
    - **Right Graph:** Electricity returned to the grid.
    - **Flower Diagram:**
        - **In Center Circle:** Actual usage and delivered power.
        - **Inner Circle (Blue):** Today's history of electricity delivered to the grid.
        - **Outer Circle (Green/Orange/Yellow/Red):** Today's history of electricity used from the grid.

1. **Per Phase Usage:** Shows the current power used/returned from the grid for each of the three phases (230V/25A each).

1. **Totals:**
    - **From the Grid:** Current and Total electricity used (day/month/year) from the grid.
    - **To the Grid:** Current and Total electricity delivered (day/month/year) to the grid.

![Electricity #3 Example - Dark]{width=500}
![Electricity #3 Example - Light]{width=500}

###Usage
!!! warning "Replace example entities with your entities!"

```yaml linenums="1"
- type: 'custom:swiss-army-knife-card'
  entities:
    ## Today actual power
    # 0..3
    - entity: sensor.dsmr_reading_electricity_currently_delivered
      name: 'Total'
    - entity: sensor.dsmr_reading_phase_currently_delivered_l1
      name: 'L1'
    - entity: sensor.dsmr_reading_phase_currently_delivered_l2
      name: 'L2'
    - entity: sensor.dsmr_reading_phase_currently_delivered_l3
      name: 'L3'
    ## Returned actual power
    # 4..6
    - entity: sensor.dsmr_reading_electricity_currently_returned
      name: 'Total'
    - entity: sensor.dsmr_reading_phase_currently_returned_l1
      name: 'L1'
    - entity: sensor.dsmr_reading_phase_currently_returned_l2
      name: 'L2'
    - entity: sensor.dsmr_reading_phase_currently_returned_l3
      name: 'L3'

    ## Today actual energy
    # 7..9
    - entity: sensor.dsmr_day_consumption_electricity_merged
      name: 'Today'
      decimals: 2
    - entity: sensor.dsmr_current_month_electricity_merged
      name: 'This Month'
      decimals: 1
    - entity: sensor.dsmr_current_year_electricity_merged
      name: 'This Year'
      decimals: 0
    ## Returned stuff
    # 10..12
    - entity: sensor.dsmr_day_consumption_electricity_returned_merged
      name: 'Today'
      decimals: 2
    - entity: sensor.dsmr_current_month_electricity_returned_merged
      name: 'This Month'
      decimals: 1
    - entity: sensor.dsmr_current_year_electricity_returned_merged
      name: 'This Year'
      decimals: 0
  layout:
    template:
      name: sak_layout_fce2_electricity3
```

##:sak-sak-logo: Electricity Card \#4 Example
[:octicons-tag-24: 4.0.1][github-releases]

The card shows a comprehensive overview of the electricity usage and return:

1. **Flower Power Header:** Displays the average, minimum, and maximum electricity used over the last 24 hours.

1. **Mid Section:**
    - **Left Graph:** Electricity used from the grid.
    - **Right Graph:** Electricity returned to the grid.
    - **Flower Diagram:**
        - **In Center Circle:** Actual usage and delivered power.
        - **Outer Circle (Blue):** Today's history of electricity delivered to the grid.
        - **Inner Circle (Green/Orange/Yellow/Red):** Today's history of electricity used from the grid.

1. **Per Phase Usage:** Shows the current power used/returned from the grid for each of the three phases (230V/25A each).

1. **Totals:**
    - **Today (Vandaag):** Total electricity used from the grid (left/green) and delivered to the grid (right/blue).
    - **This Month (Deze Maand):** Total electricity used from the grid (left/green) and delivered to the grid (right/blue).
    - **This Year (Dit Jaar):** Total electricity used from the grid (left/green) and delivered to the grid (right/blue).

Blue/green gradients are used for both the backgrounds and the bounding boxes.

![Electricity #4 Example - Dark]{width=500}
![Electricity #4 Example - Light]{width=500}

###Usage
!!! warning "Replace example entities with your entities!"

```yaml linenums="1"
- type: 'custom:swiss-army-knife-card'
  entities:
    ## Today actual power
    # 0..3
    - entity: sensor.dsmr_reading_electricity_currently_delivered
      name: 'Total'
    - entity: sensor.dsmr_reading_phase_currently_delivered_l1
      name: 'L1'
    - entity: sensor.dsmr_reading_phase_currently_delivered_l2
      name: 'L2'
    - entity: sensor.dsmr_reading_phase_currently_delivered_l3
      name: 'L3'
    ## Returned actual power
    # 4..6
    - entity: sensor.dsmr_reading_electricity_currently_returned
      name: 'Total'
    - entity: sensor.dsmr_reading_phase_currently_returned_l1
      name: 'L1'
    - entity: sensor.dsmr_reading_phase_currently_returned_l2
      name: 'L2'
    - entity: sensor.dsmr_reading_phase_currently_returned_l3
      name: 'L3'

    ## Today actual energy
    # 7..9
    - entity: sensor.dsmr_day_consumption_electricity_merged
      name: 'Vandaag' #'Today'
      decimals: 2
    - entity: sensor.dsmr_current_month_electricity_merged
      name: 'Deze Maand' #'This Month'
      decimals: 1
    - entity: sensor.dsmr_current_year_electricity_merged
      name: 'Dit Jaar' #'This Year'
      decimals: 0
    ## Returned stuff
    # 10..12
    - entity: sensor.dsmr_day_consumption_electricity_returned_merged
      name: 'Today'
      decimals: 2
    - entity: sensor.dsmr_current_month_electricity_returned_merged
      name: 'This Month'
      decimals: 1
    - entity: sensor.dsmr_current_year_electricity_returned_merged
      name: 'This Year'
      decimals: 0
  layout:
    template:
      name: sak_layout_fce2_electricity4
```

##:sak-sak-logo: Electricity Card \#5 Example
[:octicons-tag-24: 4.0.1][github-releases]

The card shows a comprehensive overview of the electricity usage and return:

1. **Flower Power Header:** Displays the average, minimum, and maximum electricity used over the last 24 hours.

1. **Mid Section:**
    - **Flower Diagram:**
        - **In Center Circle:** Total usage and delivered power for today.
        - **Outer Circle (Blue):** Today's history of electricity delivered to the grid.
        - **Inner Circle (Green/Orange/Yellow/Red):** Today's history of electricity used from the grid.
    - **This Month (Deze Maand):** Total electricity used from the grid (left/green) and delivered to the grid (right/blue).
    - **This Year (Dit Jaar):** Total electricity used from the grid (left/green) and delivered to the grid (right/blue).

1. **Current Power Usage (Huidig Vermogensgebruik):** Shows the current power used/returned from the grid for each of the three phases (230V/25A each).

Blue/green gradients are used for both the backgrounds and the bounding boxes.

![Electricity #5 Example - Dark]{width=500}
![Electricity #5 Example - Light]{width=500}

###Usage
!!! warning "Replace example entities with your entities!"

```yaml linenums="1"
- type: 'custom:swiss-army-knife-card'
  entities:
    ## Today actual power
    # 0..3
    - entity: sensor.dsmr_reading_electricity_currently_delivered
      # name: 'Total'
    - entity: sensor.dsmr_reading_phase_currently_delivered_l1
      name: 'L1'
    - entity: sensor.dsmr_reading_phase_currently_delivered_l2
      name: 'L2'
    - entity: sensor.dsmr_reading_phase_currently_delivered_l3
      name: 'L3'
    ## Returned actual power
    # 4..6
    - entity: sensor.dsmr_reading_electricity_currently_returned
      name: 'Total'
    - entity: sensor.dsmr_reading_phase_currently_returned_l1
      name: 'L1'
    - entity: sensor.dsmr_reading_phase_currently_returned_l2
      name: 'L2'
    - entity: sensor.dsmr_reading_phase_currently_returned_l3
      name: 'L3'

    ## Today actual energy
    # 7..9
    - entity: sensor.dsmr_day_consumption_electricity_merged
      name: 'Vandaag' #'Today'
      decimals: 2
    - entity: sensor.dsmr_current_month_electricity_merged
      name: 'Deze Maand' #'This Month'
      decimals: 1
    - entity: sensor.dsmr_current_year_electricity_merged
      name: 'Dit Jaar' #'This Year'
      decimals: 0
    ## Returned stuff
    # 10..12
    - entity: sensor.dsmr_day_consumption_electricity_returned_merged
      name: 'Vandaag' #'Today'
      decimals: 2
    - entity: sensor.dsmr_current_month_electricity_returned_merged
      name: 'Deze Maand' #'This Month'
      decimals: 1
    - entity: sensor.dsmr_current_year_electricity_returned_merged
      name: 'Dit Jaar' #'This Year'
      decimals: 0
  layout:
    template:
      name: sak_layout_fce2_electricity5
```

###Sensor Card \#4 YAML Template Definition
[:octicons-tag-24: 4.0.1][github-releases]
??? Info "Full definition of layout template"
    ```yaml linenums="1"

    ```

<!--- Internal References... --->
[Swiss Army Knife Tutorial 02]: ../tutorials/10-step-tutorial-02-intro.md
[Electricity Card #3 Example]: #electricity-card-3-example
[Electricity Card #4 Example]: #electricity-card-4-example
[Electricity Card #5 Example]: #electricity-card-5-example

<!--- External References... --->
[ham3-d06-url]: https://material3-themes-manual.amoebelabs.com/examples/material3-example-theme-d06-tealblue/
[github-releases]: https://github.com/amoebelabs/swiss-army-knife-card/releases/