---
template: main.html
title: "Example 5: Car dashboard alike cards"
description: This visualization is inspired by a car dashboard. The first uses a Flat design, the second a Neumorphic design. Both designs use the same tools, but look different.
tags:
  - Examples
---
#Example 5: Car dashboard alike cards
![AmoebeLabs Swiss Army Knife Custom Card Example 5 - Car dashboard alike]

##:sak-sak-logo: Visualization
This visualization is inspired by a car dashboard.

The first uses a Flat design, the second a Neumorphic design. Both designs use the same tools, but look different.

##:sak-sak-logo: Interactions
- All tools support by default the "more-info" dialog once clicked.

##:sak-sak-logo: Used Home Assistant Integrations
- [Met.no Weather integration](https://www.home-assistant.io/integrations/met/)

##:sak-sak-logo: How to make it work in your own installation

###Required Home Assistant integrations
####Both cards

:material-checkbox-multiple-marked-outline: _Required Home Assistant Integrations_<br>
The visualization is build on the Met.no, so you need the [Met.no Weather integration](https://www.home-assistant.io/integrations/met/)

!!! Info "Other weather integrations won't work, as they create different states and attributes"

:material-checkbox-multiple-marked-outline: _Required Home Assistant Entity Changes_<br>
The `Met.no` integration creates the `weather.changeme` entity. Adapt the `changeme` part to your own installation!

:material-checkbox-multiple-marked-outline: _Alternative entities_<br>
You can also replace the `humidity`, `temperature` and `pressure` weather entities with other `humidity`, `temperature` and `pressure` entities from other integrations. An Aqara Zigbee device could be used for instance as the source.

##:sak-sak-logo: View and Card Configuration
Both views use 3 `segmented arc`s with scale, an entity state and unit of measurement and icon.

#### Lovelace view
| file | location | included from |
| ---- | -------- | ------------- |
| `view-sake5.yml` | `/lovelace/views` | `sak-examples-dashboard.yaml`|


#### Decluttering templates
None used. All inline YAML!

#### SAK templates
None used. All inline YAML!

##:sak-sak-logo: Remarks
None.

<!-- Image references -->

[AmoebeLabs Swiss Army Knife Custom Card Example 5 - Car dashboard alike]: ../assets/screenshots/sak-example-5.png "Swiss Army Knife Example 5 - Car dashboard alike"