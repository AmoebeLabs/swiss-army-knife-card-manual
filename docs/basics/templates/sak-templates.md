---
template: main.html
title: Swiss Army Knife templates
description: The Swiss Army Knife custom card has built-in template functionality aimed at re-using card definitions, toolsets, entities, colorstops and more.
tags:
  - Templates
  - Built-in
---
<!-- GT/GL -->
#Swiss Army Knife templates

##:sak-sak-logo: Introduction
If you are familiar with the `decluttering template card`, you already know how to re-use cards and specialize them using variables.

SAK templates operate on a different level: they enable the re-use of `tools`, `toolsets`, `JavaScript templates/snippets`, `colorstops/lists` and more.

!!! Important "SAK templates therefore make re-use within a SAK card, and between SAK cards possible!"

[Example 7]: ../../examples/example-7.md
  
And as you can scale a `toolset`, you can use different sizes of a `toolset` template in various cards. [Example 7] shows an example of re-using a toolset in various sizes.

##:sak-sak-logo: Basics

**Usage**

SAK Templates can cover almost any part of the SAK YAML configuration.

Most used templates are:

- toolsets
- derived entities
- colorstops and colorlists

!!! Note "A template can use another template"
    Yup. Templates can use templates. A toolset template for instance can use a colorstop template. 
    
    But take care: don't create a loop. There is no safeguard for this (ab)use.

**Location**

SAK templates are stored in the `lovelace\sak_templates\templates` folder and automatically included by the `sak_templates.yaml` file in the `lovelace/sak_templates` folder.

##:sak-sak-logo: Examples

###:sak-sak-logo: Toolset example
This example shows the use of a Toolset template.

- it shows the name of the template to use
- it shows the variables to pass to the template

```yaml title="view-xyz.yaml" linenums="1" hl_lines="4-9"
- toolset: memory               # template type be of type "toolset"
  # Use pre-defined template for this part.
  # Template has variables.
  template:
    name: tools_segarc_icon_state
    variables:                  # Pass the list of variables
      - entity: 0               # - entity id
      - cx: 72.5                # - center x position
      - cy: 74                  # - center y position
```

Below the partial config of the `tools_segarc_icon_state` template:

- the first 7 lines define the template part with passed variables of the config
- from line 8, the toolset itself is defined. Identical to any inline toolset config. Except for the variable substitution of course :smile:

```yaml title="tools-segarc-icon-state template.yaml" linenums="1" hl_lines="1 2 8"
template:
  type: toolset                   # toolset template it is...
  defaults:                       # Default values for vars
    - entity: 0
    - cx: 25
    - cy: 50
    - show_scale: false
toolset:                          # From here the toolset is defined!
  position:
    cx: '[[cx]]'                  # Templated var!!
    cy: '[[cy]]'                  # Templated var!!
    scale: 1
  tools:
    - type: segarc
      id: 0                       # Unique id within tools config
      entity_index: '[[entity]]'  # Templated var!!
      position:
        cx: 50
        cy: 50
        start_angle: 0
        end_angle: 360
        width: 5
        radius: 25
      scale:
        min: 0
        max: 100
      show:
        scale: '[[show_scale]]'   # Templated var!!
        style: 'colorlist'
  <...>                           # rest of config removed for brevity
```

###:sak-sak-logo: Colorstop example
Say you want some consistency for the cards that show the inside temperature colors.

You define a colorstops template, and use that in several cards/tools. 

```yaml title="view" linenums="1" hl_lines="18-21"
- type: 'segarc'
  position:
    cx: 50
    cy: 50
    start_angle: -130
    end_angle: 130
    width: 7
    radius: 45
  entity_index: 0
  scale:
    min: 15                 # Inside temperature
    max: 25
    offset: -4.5
  show:
    style: colorstops       # Use a colorstop
  segments:
    colorstops:             # The colorstops dict is replaced
      template:             # Use template colorstops (re-use!)
        name: colorstops_temperature_inside
        variables:          # Pass variables to template
          - thegap: 1
```

And the full `colorstop` template definition:

```yaml title="template" linenums="1" hl_lines="1 3 6"
colorstops_temperature_inside:
  template:
    type: colorstops        # MUST reference colorstops
    defaults:               # Give vars a default value
      - thegap: 1
  colorstops:               # The contents of the template!
    gap: '[[thegap]]'       # Use '[[ ]]' for template vars
    colors:
      17: 'PowderBlue'
      19: 'var(--theme-gradient-color-01)'
      21: 'var(--theme-gradient-color-04)'
```

The result would be a replaced colorstops part:

```yaml title="result" linenums="1" hl_lines="17-22"
- type: 'segarc'
  position:
    cx: 50
    cy: 50
    start_angle: -130
    end_angle: 130
    width: 7
    radius: 45
  entity_index: 0
  scale:
    min: 15                 # Inside temperature
    max: 25
    offset: -4.5
  show:
    style: colorstops       # Use a colorstop
  segments:
    colorstops:             # The colorstops dict is replaced
      gap: 1
      colors:
        17: 'PowderBlue'
        19: 'var(--theme-gradient-color-01)'
        21: 'var(--theme-gradient-color-04)'
```

###:sak-sak-logo: Derived Entity example
Many examples calculate the `brightness` attribute from a light using a `derived_entity`: Home Assistant passes the `brightness` attribute as a value between 0 and 255. This range is converted using a JavaScript template to a 0..100 (%) range.
[Example 10]: ../../examples/example-10.md

[Example 10] is using a template for one card to show that you could re-use this JavaScript template.

```yaml title="view" linenums="1" hl_lines="18-26"
- type: segarc
  id: 0
  entity_index: 1
  position:
    cx: 80
    cy: 25
    start_angle: 0
    end_angle: 360
    width: 2
    radius: 15
  scale:
    min: 0
    max: 100
  show:
    scale: false
    style: 'colorlist'
  derived_entity:
    template:
      name: derived_entity_brightness
      # BUG:
      # Do need a variable section here and defaults in
      # template itself. That should not be the case...
      #
      # A template without variables SHOULD be possible...
      variables:
        - dummyvar: 'bug'
  segments:
    colorlist:
      gap: 1
      colors:
        - 'var(--primary-text-color)'
  animation:
    duration: 5
  styles:
    foreground:
      fill: var(--primary-text-color)
    background:
      fill: var(--theme-background-color-darken-20)
```

And the template definition:

```yaml title="template" linenums="1" hl_lines="1 3 6"
derived_entity_brightness:
  template:
    type: derived_entity
    defaults:
      - dummyvar: 'dummy'
  derived_entity:
    input : '[[[ return state ]]]'
    state: >
      [[[
        if (typeof(entity) === 'undefined') return;
        if (typeof(state) === 'undefined') return;
        
        var bri = Math.round(state / 2.55);
        return (bri ? bri : '0');
      ]]]
    unit: >
      [[[
        if (typeof(state) === 'undefined') return undefined;
        return '%';
      ]]]
```

##:sak-sak-logo: Advanced usage, Overrides and Extensions

The standard way of changing the template is to pass pre-defined variables to the template. 
<br>In some cases however, one wants to change more parts of the template in which case variables may not suit those needs.

In those cases, SAK templates provide the same sort of functionality as the built-in YAML Overrides and Extensions.

###:sak-sak-logo: Position override example

This example shows the simple use of overwriting parts of the Toolset template without using template variables.
<br>In this case the `position` record is simply overridden instead of passing `cx` and `cy` as variables.

```yaml title="From: view-sake7.yaml" linenums="1" hl_lines="18-21"
- toolset: memory
  # Use pre-defined template for this part.
  # Template has variables.
  template:
    name: tools_segarc_icon_state
    variables:                  # Pass the list of variables
      - entity: 0               # - entity id
  position:                     # 'Overwrite' the position from template
    cx: 72.5                    # Yes, we could have passed these as...
    cy: 74                      # ...variables!
```

###:sak-sak-logo: Tool override within toolset example

We can even go a bit further and overwrite a tool within the list of tools.

!!! Important "A tool needs a unique ID to be able to overwrite the tool config"
    In this case the `segarc` has `id: 0` and **parts** of the config are overwritten!

!!! Warning "Overriding and extending parts of a template is powerfull but can be error-prone. So take care!"
    
The yellow lines show the parts that are overwritten.

```yaml title="From: view-sake7" linenums="1" hl_lines="8-12 15-28"
- toolset: memory
  # Use pre-defined template for this part.
  # Template has variables.
  template:
    name: tools_segarc_icon_state
    variables:
      - entity: 0
  position:
    cx: 72.5
    cy: 74
    # Scale to 80% of toolset template.
    scale: .8
  # Overwrite template with the following configuration not covered by the template
  # variables. id is required to make this work. So much possibilities...
  tools:
    - type: segarc
      id: 0
      show:
        scale: true
        style: 'colorstops'
      segments:
        colorstops:
          gap: 1
          colors:
            00: 'DarkSeaGreen'
            70: 'yellow'
            80: 'orange'
            90: 'red'

```

The full config for the segarc tool is below. The yellow lines show the dictionaries that are overridden:

- the `show` config dictionary
- the `segments` config dictionary

!!! Note "The tool to replace parts of is selected by the `id: ` field"


```yaml title="From: template" linenums="1" hl_lines="14 17" 
    - type: segarc
      id: 0
      entity_index: '[[entity]]'
      position:
        cx: 50
        cy: 50
        start_angle: 0
        end_angle: 360
        width: 5
        radius: 25
      scale:
        min: 0
        max: 100
      show:
        scale: '[[show_scale]]'
        style: 'colorlist'
      segments:
        colorlist:
          gap: 1
          colors:
            - 'var(--theme-gradient-color-01)'
      animation:
        duration: 5
      styles:
        foreground:
          fill: var(--theme-gradient-color-01)
        background:
          fill: var(--theme-background-color-darken-20)
          filter: url(#is-1)
```

The resulting YAML config will be as follows with the overridden and/or extended `position:`,  `show:` and `segments:` dicts.

```yaml title="From: result" linenums="1" hl_lines="5-7 16-17 19-25"
    - type: segarc
      id: 0
      entity_index: 0         # Replaced variable
      position:
        cx: 72.5              # Override
        cy: 74                # Override
        scale: .8             # Extension
        start_angle: 0
        end_angle: 360
        width: 5
        radius: 25
      scale:
        min: 0
        max: 100
      show:
        scale: true           # Override
        style: 'colorstops'   # Override
      segments:
        colorstops:           # Override
          gap: 1
          colors:
            00: 'DarkSeaGreen'
            70: 'yellow'
            80: 'orange'
            90: 'red'
      animation:
        duration: 5
      styles:
        foreground:
          fill: var(--theme-gradient-color-01)
        background:
          fill: var(--theme-background-color-darken-20)
          filter: url(#is-1)
```

