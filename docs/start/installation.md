---
template: overrides/main.html
---

##:sak-sak-logo: Install using HACS

By the time this card is released, it will become available in HACS.

##:sak-sak-logo: Manual installation (for Beta version)

The beta version expects the files to be using the following directory structure with their files.
If your structure differs, put the files into YOUR location, and don't forget to adjust the `!include` statements.

    
###My Folder Structure

!!! Info "I use separate folders for many things in Home Assistant"
    Read and adapt to your own config and structure.
    
####My Main Home Assistant folder
Below, as reference the folder structure I use

=== "Home Assistant"
    ```
    homeassistant-data/
    .
    ├─ lovelace/
    ├─ themes/
    ├─ www/

    ```

=== "Lovelace folder"
      My Lovelace folder contains the following folders:
      ```
      lovelace/
      .
      ├─ decluttering_templates
      │  └─ decluttering_templates.yaml
      │  └─ (etc)
      │
      ├─ sak_templates/
      │  └─ sak_templates.yaml
      │  └─ sak-css-definitions.yaml
      │  └─ user-css-definitions.yaml
      │  └─ (etc)
      │
      ├─ resources
      │  └─ resources.yaml
      │
      ├─ views/
      │  └─ view-sake1.yaml
      │  └─ (...)
      │  └─ view-sake8.yaml
      ```
      !!! Warning "The location of the `sak_templates` folder in the `lovelace` folder is MANDATORY!"
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
       │  └─ *-day.svg
       │  └─ *-night.svg
       │
       └─ ic-face-1.svg               # Used by Airvisual face display usersvg tools
       └─ (...)
       └─ ic-face-6.svg
    ```

=== "Themes folder"
    ```
    themes/
    .
    └─ themes.yaml
    └─ nm-01-gonsboro.yaml
    ```

##:sak-sak-logo: Minimal Install

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
- url: /hacsfiles/wip-swiss-army-knife-card/dev-swiss-army-knife-card.js
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
The second step is to add the `sak_templates`. These are mandatory for the SAK Card to function.

**:octicons-check-circle-16: Step 2a:**
Add the SAK templates to the `sak_templates` folder.

Create the `sak_templates` folder in the `lovelace` folder and add all the files.

```yaml 
lovelace/
.
├─ sak_templates/
│  └─ sak_templates.yaml
│  └─ sak-css-definitions.yaml
│  └─ user-css-definitions.yaml
│  └─ (etc)
```

**:octicons-check-circle-16: Step 2b:**
Include sak_templates to lovelace.yaml

```yaml title="lovelace.yaml"
# Swiss Army Knife Templates
sak_templates:
  !include lovelace/sak_templates/sak_templates.yaml
```
!!! Info "The supplied `sak_templates.yaml` file contains the templates for SAK."
    You don't have to change this file!

##:sak-sak-logo: Full Install
If you want to use the examples, you need the full install that includes the example views, decluttering templates, backgrounds and weather and Airvisual images. And last but not least: the used gonsboro theme in the examples.

###:octicons-checklist-24: Step 3: Add decluttering templates

**:octicons-check-circle-16: Step 3a:**

!!! Warning "Install the decluttering card first, if you haven't installed it yet"
    Use HACS to install the decluttering card.
    
Then you *should* have the following in your `lovelace.yaml` file:
```yaml title="lovelace.yaml"
# Decluttering Templates
decluttering_templates:
  !include lovelace/decluttering_templates/decluttering_templates.yaml
```
**:octicons-check-circle-16: Step 3b:**
Add the decluttering templates for SAK to your installation.

!!! Info "The supplied `decluttering_templates.yaml` file contains the templates for SAK."
    If you already use the decluttering card, merge the files.
    
###:octicons-checklist-24: Step 4: Add views & used files

**:octicons-check-circle-16: Step 4a:**
Add the views you want to see/use into your own `lovelace.yaml` config
```yaml title="lovelace.yaml"
views:
  # Swiss Army Knife example views...
  - !include lovelace/views/view-sake1.yaml
  - !include lovelace/views/view-sake2.yaml
  - !include lovelace/views/view-sake3.yaml
  - !include lovelace/views/view-sake4.yaml
  - !include lovelace/views/view-sake5.yaml
  - !include lovelace/views/view-sake6.yaml
  - !include lovelace/views/view-sake7.yaml
  - !include lovelace/views/view-sake8.yaml
```

**:octicons-check-circle-16: Step 4b:**
Add the external images used by the views to your configuration
```
www/
.
└─ images/
   ├─ backgrounds/
   │  └─ balls-background-1.svg   # Used by view-sake6.yaml
   │
   ├─ weather/                    # Used by all weather-type usersvg tools
   │  └─ *-day.svg
   │  └─ *-night.svg
   │
   └─ ic-face-1.svg               # Used by Airvisual face display usersvg tools
   └─ (...)
   └─ ic-face-6.svg
```

###:octicons-checklist-24: Step 5: Add gonsboro theme if needed

If you want to use the gonsboro theme, it should be included into your `themes.yaml` file in the themes folder:
```yaml title="themes.yaml"
NM - Gonsboro:
  !include nm-01-gonsboro.yaml
```

And the `themes.yaml` file should be included into your Home Assistant config:
```yaml title="configuration.yaml"
# frontend
# ========
# Enables the frontend to define themes
# - https://www.home-assistant.io/integrations/frontend/#defining-themes
frontend:
  themes: !include themes/themes.yaml
```

###:octicons-thumbsup-24: Step 6: You made it!
Now test and use the SAK card...
