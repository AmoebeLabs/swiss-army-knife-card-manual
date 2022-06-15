[![hacs][hacs-badge]][hacs-url]
[![hacs][beta_badge]][hacs-url]
<br>[![release][release-badge]][release-url]
![downloads][downloads-badge]
![LGTM Grade][lgtm-grade-badge]
![LGTM Alerts][lgtm-alerts-badge]

# ![](docs/assets/images/swiss-army-knife24.png) Swiss Army Knife custom card manual

This is the home of the [Swiss Army Knife custom card for Home Assistant documentation](https://swiss-army-knife-card-manual.amoebelabs.com/).

The custom Swiss Army Knife card for [Home Assistant][home-assistant] allows you to create your own visualization using [17 basic, advanced and Home Assistant specific SVG-based tools][sak-tools] and CSS [styling][sak-css-styles] and [animation][sak-css-animations] options this card provides.

It is a card with lots of possibilities, fully YAML based, and requires the [user to design a card][sak-how-to-design-your-card]!
What you can make is only limited by the 17 provided tools and your own imagination.

![frontpage](sak-frontpage.png)

## ![](docs/assets/images/swiss-army-knife24.png) __Development status as of June 2022:__

Due to a lot of work to handle my sister's estate, I was unable to do any work on this card the past couple of months. This month work has resumed to release the card as a Release Candidate!

- Currently in **closed** BETA with around 40 users.
- Next step will be a **public** Release Candidate (v1.0.0-rc.1), announced here and on the Home Assistant community forum.
- Depending on the issues, more RC's ((v1.0.0-rc.x) will be released.
- And if that goes well, I will release version 1.x.y after about a month 🚀.

<a href="https://www.buymeacoffee.com/amoebelabs" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" alt="Buy Me A Coffee" style="height: 60px !important;width: 217px !important;" ></a>

## ![](docs/assets/images/swiss-army-knife24.png) Swiss Army Knife Card Examples

There are [12 example views](https://swiss-army-knife-card-manual.amoebelabs.com/examples/introduction/) available to learn from.

All these examples are available on Github and described in the [installation manual][sak-installation]. Each example has its own page which describes how to adapt / use them in your own installation.

| Examples...| Examples...|
| :------------: | :------------: |
| ![](https://github.com/AmoebeLabs/swiss-army-knife-card-manual/blob/master/docs/assets/screenshots/sak-example-1b.png) | ![](https://github.com/AmoebeLabs/swiss-army-knife-card-manual/blob/master/docs/assets/screenshots/sak-example-2.png) | 
| ![](https://github.com/AmoebeLabs/swiss-army-knife-card-manual/blob/master/docs/assets/screenshots/sak-example-3.png) | ![](https://github.com/AmoebeLabs/swiss-army-knife-card-manual/blob/master/docs/assets/screenshots/sak-example-4.png) | 
| ![](https://github.com/AmoebeLabs/swiss-army-knife-card-manual/blob/master/docs/assets/screenshots/sak-example-5.png) | ![](https://github.com/AmoebeLabs/swiss-army-knife-card-manual/blob/master/docs/assets/screenshots/sak-example-6.png) | 
| ![](https://github.com/AmoebeLabs/swiss-army-knife-card-manual/blob/master/docs/assets/screenshots/sak-example-7.png) | ![](https://github.com/AmoebeLabs/swiss-army-knife-card-manual/blob/master/docs/assets/screenshots/sak-example-8.png) | 
| ![](https://github.com/AmoebeLabs/swiss-army-knife-card-manual/blob/master/docs/assets/screenshots/sak-example-9.png) | ![](https://github.com/AmoebeLabs/swiss-army-knife-card-manual/blob/master/docs/assets/screenshots/sak-example-10.png) | 

| Examples using a Light Material 3 Theme...| Examples using a Dark Material 3 Theme.. |
| :------------: | :------------: |
| [Example 11: Boiler and Electricity cards][example-11] | |
| ![](https://github.com/AmoebeLabs/swiss-army-knife-card-manual/blob/master/docs/assets/screenshots/sak-example-11-m3-c11-light.png) | ![](https://github.com/AmoebeLabs/swiss-army-knife-card-manual/blob/master/docs/assets/screenshots/sak-example-11-m3-c11-dark.png) | 
| [Example 12: Wide cards showing lots of sensors][example-12] | |
| ![](https://github.com/AmoebeLabs/swiss-army-knife-card-manual/blob/master/docs/assets/screenshots/sak-example-12-m3-d06-light.png) | ![](https://github.com/AmoebeLabs/swiss-army-knife-card-manual/blob/master/docs/assets/screenshots/sak-example-12-m3-d06-dark.png) | 


## ![](docs/assets/images/swiss-army-knife24.png) Material 3 themes for Home Assistant

For the Material 3 themes used on [some of the cards](https://swiss-army-knife-card-manual.amoebelabs.com/examples/example-12/), see: https://material3-themes-manual.amoebelabs.com/


<a href="https://www.buymeacoffee.com/amoebelabs" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" alt="Buy Me A Coffee" style="height: 60px !important;width: 217px !important;" ></a>

<!-- Badges -->

[hacs-url]: https://github.com/hacs/integration
[hacs-badge]: https://img.shields.io/badge/HACS-Default-41BDF5.svg?style=for-the-badge&logo=homeassistantcommunitystore
[beta_badge]: https://img.shields.io/badge/State-Beta-orange?style=for-the-badge&logo=homeassistantcommunitystore
[release-badge]: https://img.shields.io/github/v/release/AmoebeLabs/swiss-army-knife-card?style=for-the-badge&include_prereleases&logo=github
[downloads-badge]: https://img.shields.io/github/downloads/AmoebeLabs/swiss-army-knife-card/total?style=for-the-badge&logo=github
[lgtm-grade-badge]: https://img.shields.io/lgtm/grade/javascript/github/AmoebeLabs/swiss-army-knife-card?style=for-the-badge&logo=lgtm
[lgtm-alerts-badge]: https://img.shields.io/lgtm/alerts/github/AmoebeLabs/swiss-army-knife-card?style=for-the-badge&logo=lgtm


<!-- References -->

[home-assistant]: https://www.home-assistant.io/
[home-assitant-theme-docs]: https://www.home-assistant.io/integrations/frontend/#defining-themes
[hacs]: https://hacs.xyz
[release-url]: https://github.com/AmoebeLabs/swiss-army-knife-card/releases
[sak-docs-url]: https://swiss-army-knife-card-manual.amoebelabs.com/

[example-11]: https://swiss-army-knife-card-manual.amoebelabs.com/examples/example-11/
[example-12]: https://swiss-army-knife-card-manual.amoebelabs.com/examples/example-12/
[sak-tools]: https://swiss-army-knife-card-manual.amoebelabs.com/tools/circle-tool/
[sak-css-styles]: https://swiss-army-knife-card-manual.amoebelabs.com/basics/styling/styles/
[sak-css-animations]: https://swiss-army-knife-card-manual.amoebelabs.com/basics/animations/css-animations/
[sak-installation]: https://swiss-army-knife-card-manual.amoebelabs.com/start/installation/
[sak-how-to-design-your-card]: https://swiss-army-knife-card-manual.amoebelabs.com/design/how-to-design-your-card/