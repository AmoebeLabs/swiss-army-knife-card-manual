---
template: main.html
title: Installation
description: The installation of the Swiss Army Knife custom card can be done in two ways: Automatic install using HACS or manual install.
tags:
  - Install
---
<!-- GT/GL -->

The installation can be done in two ways:

- automatic install using HACS
- manual install

On top of that you can install the examples using an extra dashboard.

##:sak-sak-logo: Automatic install using HACS

By the time this card is released, it will become available in HACS.

!!! Note "NTS: As SAK needs template files, I guess installation can't be fully automated..."

##:sak-sak-logo: Manual install (for Beta 0.9.0-b3, February 2022)

This third beta contains some fixes, extra examples, and - for some of the examples - the introduction / integration with HAM3: [The Material 3 themes for Home Assistant!][ha-m3-themes-url]

\#TODO: List changes and adapt manual install


This beta version expects the files to be using the following directory structure with their files.
If your structure differs, put the files into YOUR location, and don't forget to adjust the `!include` statements.

###My Folder Structure

!!! Info "I use separate folders for many things in Home Assistant"
    Read and adapt to your own config and structure.
    
Below, as reference the folder structure I use

=== "Home Assistant"
    ```
    homeassistant-data/
    .
    ├─ lovelace/
    ├─ themes/
    ├─ www/
    │
    ├─ configuration.yaml
    ├─ ui-lovelace.yaml
    └─ sak-examples-dashboard.yaml
    ```
=== "Lovelace folder"
      My Lovelace folder contains the following folders:
      ```
      lovelace/
      .
      ├─ decluttering_templates
      │  ├─ decluttering_templates.yaml
      │  └─ (etc)
      │
      ├─ sak_templates/
      │  ├─ sak_templates.yaml
      │  ├─ definitions/
      │  │  ├─ sak-css-definitions.yaml
      │  │  ├─ user-css-definitions.yaml
      │  │  └─ sak-svg-definitions.yaml
      │  └─ templates/
      │     └─<templates>.yaml
      │
      ├─ resources
      │  └─ resources.yaml
      │
      ├─ views/
      │  ├─ view-sake1.yml
      │  ├─ (...)
      │  └─ view-sake11.yml
      ```
      The location of the `sak_templates` folder in the `lovelace` folder is MANDATORY!
      This location is hard-coded into the SAK card. SAK needs the templates to function!
=== "www folder"
    ```
    www/
    .
    ├─ community/
    │  └─ wip-swiss-army-knife-card/
    │     └─ dev-swiss-army-knife-card.js
    │
    ├─ images/
       ├─ backgrounds/
       │  └─ balls-background-1.svg   # Used by view-sake6.yaml
       │
       ├─ weather/                    # Used by all weather-type usersvg tools
       │  ├─ *-day.svg
       │  └─ *-night.svg
       │
       ├─ ic-face-1.svg               # Used by Airvisual face display usersvg tools
       ├─ (...)
       └─ ic-face-6.svg
    ```

=== "Themes folder"
    ```
    themes/
    .
    ├─ nm-01-gonsboro.yaml
    └─ nm-03-dark-steelblue.yaml
    ```

###:octicons-checklist-24: Step 1: Add Swiss Army Knife Card to your installation
The folder has a wip prefix and the card itself a dev prefix. These will be removed in the official release.
This way they can't overwrite each other...

**:octicons-check-circle-16: Step 1a:**
Put the card into the community (`HACS`) folder.

```
www/
.
├─ community/
│  └─ wip-swiss-army-knife-card/
│     └─ dev-swiss-army-knife-card.js
```

**:octicons-check-circle-16: Step 1b:**
Add the card to the `resources.yaml` file.

```yaml title="resources.yaml"
- url: /hacsfiles/wip-swiss-army-knife-card/dev-swiss-army-knife-card.min.js
  type: module
```
The `resources.yaml` file should be included in your `configuration.yaml` config. I assume that that is already in place if you're using custom cards.
```yaml title="configuration.yaml"
lovelace:
  mode: yaml
  resources: !include lovelace/resources/resources.yaml
```
!!! Warning "I have a YAML only config. Pleas adjust to your own configuration"

###:octicons-checklist-24: Step 2: Add Swiss Army Knife templates
The second step is to add the `sak_templates`. These are mandatory.

**:octicons-check-circle-16: Step 2a:**
Add the SAK templates to the `sak_templates` folder.

Create the `sak_templates` folder in the `lovelace` folder and add all the folders and files.

```yaml 
lovelace/
.
├─ sak_templates/
│  ├─ sak_templates.yaml
│  ├─ definitions/
│  │  ├─ sak-css-definitions.yaml
│  │  └─ user-css-definitions.yaml
│  └─ templates/
│     └─<templates>.yaml```
```

**:octicons-check-circle-16: Step 2b:**
Include sak_templates to `ui-lovelace.yaml`

```yaml title="ui-lovelace.yaml"
# Swiss Army Knife Templates
sak_templates:
  !include lovelace/sak_templates/sak_templates.yaml
```
!!! Info "The supplied `sak_templates.yaml` file contains a wildcard include for the `templates` folder."
    So ANY template you add in that folder will be automatically included. You don't have to change this file!

###:octicons-thumbsup-24: You made it!
If this is all you want, you're ready to use the Swiss Army Knife card. If not, continue with the next paragraph for the example dashboard install.

##:sak-sak-logo: Examples dashboard install
If you want to use the examples, you need the full install that includes the example views, decluttering templates, backgrounds and weather, and Airvisual images. And last but not least: the used `gonsboro`, `dark steelblue` and [HAM3][ha-m3-themes-url] themes in the examples.

!!! Hint "Check my folder structure to understand my setup"
    So you can adapt it to yours if different.
    
###:octicons-checklist-24: Step 1: Add decluttering templates

**:octicons-check-circle-16: Step 1a:**

!!! Warning "Install the decluttering card first, if you haven't installed it yet"
    Use HACS to install the decluttering card.
    
Then you *should* have the following in your `ui-lovelace.yaml` file:
```yaml title="ui-lovelace.yaml"
# Decluttering Templates
decluttering_templates:
  !include lovelace/decluttering_templates/decluttering_templates.yaml
```
**:octicons-check-circle-16: Step 1b:**
Add the decluttering templates for SAK to your installation.

!!! Info "The supplied `decluttering_templates.yaml` file contains the templates for SAK."
    If you already use the decluttering card, merge the files.

###:octicons-checklist-24: Step 2: Add themes

Place the two themes into your `themes` folder.
If you use a wildcard include in your `configuration.yaml`, then you don't have to do anything anymore:
```yaml title="configuration.yaml"
frontend:
  themes: !include_dir_merge_named themes/
```

If you use explicit includes, include the themes manually:
```yaml
!include nm-01-gonsboro.yaml
!include nm-03-dark-steelblue.yaml
```

###:octicons-checklist-24: Step 3: Add SAK examples dashboard
The Swiss Army Knife examples have their own dashboard. This way using them doesn't interfere with you running installation. You can access the examples from the side panel.

**:octicons-check-circle-16: Step 3a:**
Add the external images used by the views to your configuration
```
www/
.
└─ images/
   ├─ backgrounds/
   │  └─ balls-background-1.svg   # Used by view-sake6.yaml
   │
   ├─ weather/                    # Used by all weather-type usersvg tools
   │  ├─ *-day.svg
   │  └─ *-night.svg
   │
   ├─ ic-face-1.svg               # Used by Airvisual face display usersvg tools
   ├─ (...)
   └─ ic-face-6.svg
```

**:octicons-check-circle-16: Step 3b:**
Add `sak-examples-dashboard.yaml` in the root folder and include it into your `configuration.yaml`:

```yaml title="configuration.yaml"
lovelace:
  mode: yaml
  resources: !include lovelace/resources/resources.yaml

  dashboards:
    sak-examples:
      mode: yaml
      filename: sak-examples-dashboard.yaml
      title: Swiss Army Knife Examples
      icon: mdi:hospital-box
      show_in_sidebar: true
```

The dashboard contains the 11 example views:
```yaml title="sak-examples-dashboard.yaml"
# Decluttering Templates
decluttering_templates:
  !include lovelace/decluttering_templates/decluttering_templates.yaml

# Swiss Army Knife Templates
sak_templates:
  !include lovelace/sak_templates/sak_templates.yaml

title: Swiss Army Knife Examples
views:

  # Swiss Army Knife example views...
  - !include lovelace/views/view-sake1.yml
  - !include lovelace/views/view-sake2.yml
  - !include lovelace/views/view-sake3.yml
  - !include lovelace/views/view-sake4.yml
  - !include lovelace/views/view-sake5.yml
  - !include lovelace/views/view-sake6.yml
  - !include lovelace/views/view-sake7.yml
  - !include lovelace/views/view-sake8.yml
  - !include lovelace/views/view-sake9.yml
  - !include lovelace/views/view-sake10.yml
  - !include lovelace/views/view-sake11.yml
```

!!! Warning "The views themselves reference the `gonsboro` and `dark steelblue` themes, you can keep your existing theme"
    You don't have to switch to the `gonsboro` or `dark steelblue` theme for your installation to see the examples "as the creator meant them to be seen", so your existing views stay the same.

**:octicons-check-circle-16: Step 3c:**
Restart Home Assistant to have the dashboard installed

!!! Info "Make sure to validate your config before you restart Home Assistant :smile:"

###:octicons-thumbsup-24: You made it again!
Now enjoy the [examples][swiss-army-knife-examples-url] and don't forget that you have to replace my entities with yours to see the cards as intended!

If you want to start building right away, head over to the [tools and toolsets][swiss-army-knife-tools-and-toolsets-url] section! Check the interactions page for user [interactions][swiss-army-knife-interactions-url] with the tools and toolsets, and last but not least the extensive CSS [class][swiss-army-knife-styling-classes-url] and [element][swiss-army-knife-styling-styles-url] styling options, [CSS animations][swiss-army-knife-animations-css-url], [colorstops][swiss-army-knife-animations-colorstops-url] and [state operators][swiss-army-knife-animations-state-operators-url].


![sak-example-dashboard][sak-example-dashboard]

<!-- Images -->
[sak-example-dashboard]: ../assets/screenshots/sak-example-dashboard.png

<!-- Internal links -->
[swiss-army-knife-examples-url]: ../../examples/introduction/
[swiss-army-knife-tools-and-toolsets-url]: ../../basics/tools-and-toolsets/
[swiss-army-knife-interactions-url]: ../..//basics/interactions/
[swiss-army-knife-styling-classes-url]: ../../basics/styling/classes/
[swiss-army-knife-styling-styles-url]: ../../basics/styling/styles/
[swiss-army-knife-animations-css-url]: ../../basics/animations/css-animations/
[swiss-army-knife-animations-colorstops-url]: ../../basics/animations/colorstops/
[swiss-army-knife-animations-state-operators-url]: ../../basics/animations/state-operators/


<!-- External links -->
[ha-m3-themes-url]: https://ha-m3-themes.docs.amoebelabs.com/examples/introduction/
