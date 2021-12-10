---
template: overrides/main.html
---

[![SAK Example]][SAK Example]

  [SAK Example]: ../assets/screenshots/sak-example-5.png

##:sak-sak-logo: Visualization
This visualization is inspired by a car dashboard.

The first uses a Flat design, the second a Neumorphic design. Both designs use the same tools, but look different.

##:sak-sak-logo: Data sources
- [Met.no Weather integration](https://www.home-assistant.io/integrations/met/)

##:sak-sak-logo: How to make it work in your own installation

###Required Home Assistant integrations
The visualization is build on the Met.no, so you need these integrations:

- [Met.no Weather integration](https://www.home-assistant.io/integrations/met/)

###Required entity id changes

The `Met.no` integration creates the `weather.changeme` entity. Adapt the `changeme` part to your own installation!

!!! Info "Other weather integrations won't work, as they create different states and attributes"

###Alternative entities
You can also replace the `humidity`, `temperature` and `pressure` weather entities with other `humidity`, `temperature` and `pressure` entities from other integrations. An Aqara Zigbee device could be used for instance as the source.

##:sak-sak-logo: Configuration
Both views use 3 `segmented arc`s with scale, an entity state and unit of measurement and icon.

#### Lovelace view

This example is in the `view-sake5.yaml` file in the `/lovelace/views` folder.

#### Decluttering templates
None used. All inline YAML!

#### SAK templates
None used. All inline YAML!

##:sak-sak-logo: Interactions
- All tools support by default the "more-info" dialog once clicked.

##:sak-sak-logo: Remarks
None.