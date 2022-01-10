---
template: overrides/main.html
---

[![SAK Example]][SAK Example]

  [SAK Example]: ../assets/screenshots/sak-example-6.png

##:sak-sak-logo: Visualization
Let's do something different and use the weather for a nice view :smile:

This view is made with the aid of Affinity Designer. The 'balls' background is created with this tool and exported as an SVG file.
<br>On top of those circels the weather and Airvisual data is displayed.

##:sak-sak-logo: Data sources
- [Met.no Weather integration](https://www.home-assistant.io/integrations/met/)
- [Airvisual integration](https://www.home-assistant.io/integrations/airvisual/)

##:sak-sak-logo: How to make it work in your own installation

###Required Home Assistant integrations
The visualization is build on the Met.no and Airvisual entities, so you need these integrations:

- [Met.no Weather integration](https://www.home-assistant.io/integrations/met/)
- [Airvisual integration](https://www.home-assistant.io/integrations/airvisual/)

###Required entity id changes

The `Airvisual` entities should be the same for any installation, so no changes required on that part.

The `Met.no` integration creates the `weather.changeme` entity. Adapt the `changeme` part to your own installation!

!!! Info "Other weather integrations won't work, as they create different states and attributes"

##:sak-sak-logo: Configuration
- Background as external SVG, loaded with the `usersvg` tool
- Upper left the title
- The weather (temperature, humidity, pressure) in three circles.
- The weather type as a state dependent external, **animated** SVG
- Airvisual data showing the state dependent icon and the AQI value.

#### Lovelace view
This example is in the `view-sake6.yml` file in the `/lovelace/views` folder.

#### File assets
This view uses the following external file assets:

- The background is a separate SVG file located in `/local/images/backgrounds/balls-background-1.svg`
- To display the weather type, you need the external *animated* SVG's which are located in the `/local/images/weather` folder

#### Decluttering templates
None used.

#### SAK templates
None used.

##:sak-sak-logo: Interactions
- All tools support by default the "more-info" dialog once clicked.

##:sak-sak-logo: Remarks
None.