---
template: main.html
title: "Example 6: Weather on SVG background"
description: This visualization uses a custom made SVG background. On top of those circles the weather and Airvisual data is displayed.
tags:
  - Examples
---
#Example 6: Weather on SVG background

![AmoebeLabs Swiss Army Knife Custom Card Example 6 - Weather on SVG background]:

##:sak-sak-logo: Visualization
!!! Note "There is also a variant with '-m3' in the filename. This one uses a Material 3 theme for its colors"
    
Let's do something different and use the weather for a nice view :smile:

This view is made with the aid of Affinity Designer. The 'balls' background is created with this tool and exported as an SVG file.
<br>On top of those circles the weather and Airvisual data is displayed.

##:sak-sak-logo: Interactions
- All tools support by default the "more-info" dialog once clicked.

##:sak-sak-logo: Used Home Assistant Integrations
- [Met.no Weather integration](https://www.home-assistant.io/integrations/met/)
- [Airvisual integration](https://www.home-assistant.io/integrations/airvisual/)

##:sak-sak-logo: How to make it work in your own installation

**Card**

:material-checkbox-multiple-marked-outline: _Required Home Assistant Integrations_<br>
The visualization is build on the Met.no and Airvisual entities, so you need these integrations:

- [Met.no Weather integration](https://www.home-assistant.io/integrations/met/)
- [Airvisual integration](https://www.home-assistant.io/integrations/airvisual/)

:material-checkbox-multiple-marked-outline: _Required Home Assistant Entity Changes_<br>

The `Airvisual` entities should be the same for any installation, so no changes required on that part.

The `Met.no` integration creates the `weather.changeme` entity. Adapt the `changeme` part to your own installation!

!!! Info "Other weather integrations won't work, as they create different states and attributes"

##:sak-sak-logo: View and Card Configuration
- Background as external SVG, loaded with the `usersvg` tool
- Upper left the title
- The weather (temperature, humidity, pressure) in three circles.
- The weather type as a state dependent external, **animated** SVG
- Airvisual data showing the state dependent icon and the AQI value.

#### Lovelace view
| file | location | included from |
| ---- | -------- | ------------- |
| `view-sake6.yml` | `/lovelace/views` | `sak-examples-dashboard.yaml`|

#### File assets
This view uses the following external file assets:

- The background is a separate SVG file located in `/local/images/backgrounds/balls-background-1.svg`
- To display the weather type, you need the external *animated* SVG's which are located in the `/local/images/weather` folder

#### Decluttering templates
None used.

#### SAK templates
None used.

##:sak-sak-logo: Remarks
None.

<!-- Image references -->

[AmoebeLabs Swiss Army Knife Custom Card Example 6 - Weather on SVG background]: ../assets/screenshots/sak-example-6.png "Swiss Army Knife Example 6 - Weather on SVG background"