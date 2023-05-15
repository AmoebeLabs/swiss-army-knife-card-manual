---
template: main.html
title: Changelog
description: Changelog overview of the Swiss Army Knife custom card versions.
tags:
  - Changelog
  - Card
---

# Changelog

##:sak-sak-logo: Release v2.4.3
<!-- Release notes generated using configuration in .github/release.yml at master -->

### What's Changed
#### New Features
* Support for custom popup actions using browser mod integration by @AmoebeLabs in https://github.com/AmoebeLabs/swiss-army-knife-card/pull/204

#### Bug Fixes
* Fix Action doesn't work with multiple entities by @AmoebeLabs in https://github.com/AmoebeLabs/swiss-army-knife-card/pull/208

#### Other Changes
* None

**Full Changelog**: https://github.com/AmoebeLabs/swiss-army-knife-card/compare/v2.4.2...v2.4.3

## :sak-sak-logo: Release v2.4.2
<!-- Release notes generated using configuration in .github/release.yml at master -->

### "Behind the scenes" development environment changes
The previous development was done in a single file (8.000 lines of JavaScript) using vscode or Notepad++ as editor. This was easy, but sometimes challenging to maintain.

The current environment uses the latest and greatest stuff:
- vscode with the "Remote attached SSH Docker container" extension for development. The remote container is running on my server where Home Assistant is also running. This makes it also easy to check all my dashboards if they are still working with the latest SAK card.
- source file is split into (currently) 28 JavaScript files and built using [Rollup.js](https://rollupjs.org/)
- source quality is extended with this change, and now uses eslint with the strict AirBNB rules

#### Results
- no more external dependencies (unpkg.com), so no need for CORS definitions in `configuration.yaml` anymore for this card
- faster loading of the card, as there is no wait anymore caused by loading external packages

### What's Changed
#### Development Environment
* Reorganize development environment and split source files by @AmoebeLabs in https://github.com/AmoebeLabs/swiss-army-knife-card/pull/198
#### SVG Styling
* Reintroduce external SVG Injection to allow styling by @AmoebeLabs in https://github.com/AmoebeLabs/swiss-army-knife-card/issues/197
* Change Pollen SVGs to allow class and CSS var styling by @AmoebeLabs in https://github.com/AmoebeLabs/swiss-army-knife-card/pull/200

##### Notes:
- for styling to work, the SVG must be suitable for external styling and not contain local styling as this overwrites the external styling. For that reason, issue #200 was made for the pollen images.
- loading SVGs as external files is till possible in case of problems by using the `options: svginjection: false` definition in the card.
- In many cases, CSS `filter` definitions won't work in Safari. You should use SVG filters instead...

##### Documentation Notes:
- The documentation is not yet updated with these SVG changes!

**Full Changelog**: https://github.com/AmoebeLabs/swiss-army-knife-card/compare/v2.4.1...v2.4.2

## :sak-sak-logo: Release v2.4.1
<!-- Release notes generated using configuration in .github/release.yml at master -->

### What's Changed
#### Fixed
* Duplicate key "fill" in sak-layout-fce-light-with-slider.yaml (@DeepCoreSystem), https://github.com/AmoebeLabs/swiss-army-knife-card/issues/165
* The segment colors in the Segmented Arc are not rendered correctly by @AmoebeLabs , #189 
* Circleslider doesn't work on scale 15-25 (@stinobook), #182
* Circular Slider Tool acts weird with "odd" scales (@KingCruzIII), #172
* Browser: compatibility with Safari 16.2-16.4 (@AmoebeLabs), #184
* Negative state value display with 2 signs '-' (@grichka49), #162
#### Features
* Support more than 1 entity to be passed to a tool (@AmoebeLabs), #160
* Add a simple format option for a state to convert brightness (@AmoebeLabs), #159
* Circular Slider: Enhance circular slider and fix bugs (@AmoebeLabs), #187

#### Other Changes
* Add brightness and duration format options to secondaryinfo by @AmoebeLabs in https://github.com/AmoebeLabs/swiss-army-knife-card/pull/181
* Negative state value display with 2 signs by @AmoebeLabs in https://github.com/AmoebeLabs/swiss-army-knife-card/pull/183
* Fix browser compatibility with Safari 16.2-16.4 by @AmoebeLabs in https://github.com/AmoebeLabs/swiss-army-knife-card/pull/185
* Fix two code scanning alerts by @AmoebeLabs in https://github.com/AmoebeLabs/swiss-army-knife-card/pull/186
* Circular Slider: Enhance, fix bugs and add entitylist by @AmoebeLabs in https://github.com/AmoebeLabs/swiss-army-knife-card/pull/188
* Fix: Segment colors are wrong in segmented-arc by @AmoebeLabs in https://github.com/AmoebeLabs/swiss-army-knife-card/pull/190
* Remove duplicate "fill" keys in say-layout-fce-light-with-slider.yaml by @AmoebeLabs in https://github.com/AmoebeLabs/swiss-army-knife-card/pull/192


**Full Changelog**: https://github.com/AmoebeLabs/swiss-army-knife-card/compare/v1.0.0-rc.4...v2.4.1

