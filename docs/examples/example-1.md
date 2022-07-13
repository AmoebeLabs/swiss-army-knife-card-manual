---
template: main.html
title: "Example 1: AirVisual and the Weather"
description: The Airvisual and weather forecast example card shows a single card with Airvisual data, the current weather and a 5 day weather forecast
tags:
  - Examples
---

<!-- GT/GL -->
#Example 1: AirVisual and Weather forecast

A single card displaying data from Airvisual, the current weather and a 5 day weather forecast.

Topcard showing AirVisual data with some weather data:
![AmoebeLabs Swiss Army Knife Custom Card Example 1a - AirVisual and Weather forecast]

Bottom card showing weather and weather forecast:
![AmoebeLabs Swiss Army Knife Custom Card Example 1b - AirVisual and Weather forecast]

##:sak-sak-logo: Visualization

###:sak-sak-logo: AirVisual
The AirVisual card shows two blocks:

1. The left part shows the AirVisual data with 24 hours of  history
    - The AQI 'face', an external SVG
    - The AQI value with interpretation (good, etc.)
    - The AQI main pollutant.
    - 24 hour history of the AQI value
    
2. The right part shows weather data.
    - The weathertype is displayed using an external *animated* SVG
    - And below that, the outside temperature, humidity, pressure and wind speed.
    
###:sak-sak-logo: Weather forecast
This visualization is divided into three major blocks:

1. The top part shows the weathertype, temperature, humidity and AQI value.

    - The weathertype is displayed using an external *animated* SVG
    - Next are three `segmented arc` tools with dedicated colorstops and the state value and icon inside. The AQI icon is state dependent.

2. The second / middle block shows pressure, wind and wind direction and sunset and sunrise

3. The last block shows the 5 day weather forecast.

    - The localized short day name using a bit of javascript in the YAML configuration
    - The expected weather type using (again) external *animated* SVG's
    - The maximum expected temperature
    - The minimum expected temperature
    - The expected precipitation
  

##:sak-sak-logo: Interactions
- All tools support by default the "more-info" dialog once clicked.

##:sak-sak-logo: Used Home Assistant Integrations
- [Met.no Weather integration](https://www.home-assistant.io/integrations/met/)
- [Airvisual integration](https://www.home-assistant.io/integrations/airvisual/)

In total approx 50 entities are used to build this visualization.

##:sak-sak-logo: How to make it work in your own installation
####Card

:material-checkbox-multiple-marked-outline: _Required Home Assistant Integrations_<br>
The visualization is build on the `Met.no` and `Airvisual` entities, so you need these integrations:

- [Met.no Weather integration](https://www.home-assistant.io/integrations/met/): [![](https://my.home-assistant.io/badges/config_flow_start.svg)](https://my.home-assistant.io/redirect/config_flow_start?domain=met)
- [Airvisual integration](https://www.home-assistant.io/integrations/airvisual/): [![](https://my.home-assistant.io/badges/config_flow_start.svg)](https://my.home-assistant.io/redirect/config_flow_start?domain=airvisual)

:material-checkbox-multiple-marked-outline: _Required Home Assistant Entity Changes_<br>
The `Airvisual` entities should be the same for any installation, so no changes required on that part.

The `Met.no` integration creates the `weather.changeme` entity. Adapt the `changeme` part to your own installation!

!!! Info "Other weather integrations won't work, as they create different states and attributes"

##:sak-sak-logo: View and Card Configuration

=== "If you LOVE YAML"
    !!! Success "It's your lucky day"
      
        This is your go-to card: absolutely NO re-use, so no templates are used to define this card.
        
        It's a whopping 1.500 lines of YAML to display about 50 entities. Only 30 lines/entity!

        It was my first card, made in a time where templates didn't exist yet!

=== "If you DON'T love YAML"
    !!! Warning "Skip this one for now"

        Skip this example and look at the other examples first!
        
        Or start with this one, and learn how to read YAML the hard way...

#### Lovelace view
| file | location | included from |
| ---- | -------- | ------------- |
| `view-sake1.yml` | `/lovelace/views` | `sak-examples-dashboard.yaml`|


#### File assets
To display the weather type, you need the external *animated* SVG's which are located in the `/local/images/weather` folder

??? Info "Definitions used in the animations section to display the weather type icon"
    ```yaml
      images:
        - clear-night-night: /local/images/weather/clear-night.svg
        - cloudy-day: /local/images/weather/cloudy-day.svg
        - cloudy-night: /local/images/weather/cloudy-night.svg
        - fog-day: /local/images/weather/fog-day.svg
        - fog-night: /local/images/weather/fog-night.svg
        - hail-day: /local/images/weather/hail-day.svg
        - hail-night: /local/images/weather/hail-night.svg
        - lightning-day: /local/images/weather/lightning.svg
        - lightning-night: /local/images/weather/lightning.svg
        - partlycloudy-day: /local/images/weather/partlycloudy-day.svg
        - partlycloudy-night: /local/images/weather/partlycloudy-night.svg
        - pouring-day: /local/images/weather/pouring.svg
        - pouring-night: /local/images/weather/pouring-night.svg
        - rainy-day: /local/images/weather/rainy-day.svg
        - rainy-night: /local/images/weather/rainy-night.svg
        - snowy-day: /local/images/weather/snowy-day.svg
        - snowy-night: /local/images/weather/snowy-night.svg
        - snowy-rainy-day: /local/images/weather/snowy-rainy-day.svg
        - snowy-rainy-night: /local/images/weather/snowy-rainy-night.svg
        - sunny-day: /local/images/weather/sunny-day.svg
        - sunny-night: /local/images/weather/clear-night.svg
        - snowy-rainy-day: /local/images/weather/snowy-rainy-day.svg
        - snowy-rainy-night: /local/images/weather/snowy-rainy-night.svg
        - windy-day: /local/images/weather/windy-day.svg
        - windy-night: /local/images/weather/windy-night.svg
        - windy-variant-day: /local/images/weather/windy-variant.svg
        - windy-variant-night: /local/images/weather/windy-variant.svg
      animations:
        - state: '[[[ return (state); ]]]'
          image: >
            [[[
              if (states["sun.sun"].state == 'below_horizon') return (state + '-night');
              return (state + '-day');
            ]]]
    ```
##:sak-sak-logo: Remarks
- 
This view shows the dutch translation for "Partly Cloudy --> Gedeeltelijk bewolkt" and the wind direction "WSW --> WZW".
> Support for translations is possible using a YAML configuration.

<!-- Image references -->

[AmoebeLabs Swiss Army Knife Custom Card Example 1a - AirVisual and Weather forecast]: ../assets/screenshots/sak-example-1a.png "Swiss Army Knife Example 1a - AirVisual and Weather forecast"
[AmoebeLabs Swiss Army Knife Custom Card Example 1b - AirVisual and Weather forecast]: ../assets/screenshots/sak-example-1b.png "Swiss Army Knife Example 1b - AirVisual and Weather forecast"