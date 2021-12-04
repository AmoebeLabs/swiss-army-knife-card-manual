---
template: overrides/main.html
---

##:sak-sak-logo: Install using HACS

By the time this card is released, it will become available in HACS.

##:sak-sak-logo: Manual installation (for Beta version)

The beta version expects the files to be using the following directory structure with their files.
If your structure differs, put the files into YOUR location, and don't forget to adjust the `!include` statements.

!!! Info "I use separate folders for many things in Home Assistant"
    Read and adapt to your own config and structure.
    
###My Main Home Assistant folder
```
homeassistant-data/
.
├─ lovelace/
├─ themes/
├─ www/

```

###My Lovelace folder
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

####Add SAK Card to resources.yaml
```yaml title="resources.yaml"
- url: /hacsfiles/wip-swiss-army-knife-card/dev-swiss-army-knife-card.js
  type: module
```
The `resources.yaml` file should be included from your `configuration.yaml` config:
```yaml title="configuration.yaml"
lovelace:
  mode: yaml
  resources: !include lovelace/resources/resources.yaml
```
!!! Warning "I have a YAML only config. Pleas adjust to your own configuration"

####Add decluttering_templates and sak_templates to lovelace.yaml
```yaml title="lovelace.yaml"
# Decluttering Templates
decluttering_templates:
  !include lovelace/decluttering_templates/decluttering_templates.yaml

# Swiss Army Knife Templates
sak_templates:
  !include lovelace/sak_templates/sak_templates.yaml
```

####Add views to your to lovelace.yaml
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

####Themes folder
```
themes/
.
└─ themes.yaml
└─ nm-01-gonsboro.yaml
```

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

####www folder
The `www` folder contains the files that are accessible over the webinterface.
The SAK Card must be added to the community folder (called `/hacsfiles/` from the webinterface) and all the images to the images folder. The paths are used in the example views, so if you have different paths, you have to adjust the views to use them.

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

