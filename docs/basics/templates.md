---
template: overrides/main.html
---

##:sak-sak-logo: Basics
Templates have been created to enable re-use of various parts of the SAK Card's YAML config.

Templates nog only cover toolsets, but also things like colorstops.

!!! Question "Every part of the cards config could be converted to a template"
    Well, at least that is the intention. It hasn't been tested though!

!!! Success "A toolset template can use a colorstop template"
    Yup. Templates can use templates. But take care: don't create a loop. There is no safeguard for this (ab)use.
    
!!! Success "SAK templates use the same 'format' as the decluttering template"
    Why not! And it makes it easier to use for people already acquainted with the decluttering card.

    However, SAK templates work on a lower level: where decluttering template works for cards, SAK templates enable re-use within **and** between cards.
    
###:sak-sak-logo: An example: Toolset
This example shows the use of a Toolset template.

- it shows the name of the template to use
- it shows the variables to pass to the template

```yaml title="view" linenums="1" hl_lines="18-21"
- toolset: memory
  # Use pre-defined template for this part.
  # Template has variables.
  template:
    name: tools_segarc_icon_state
    variables:                  # Pass the list of variables
      - entity: 0               # - entity id
      - cx: 72.5                # - center x position
      - cy: 74                  # - center y position
```

Below the partial config:

- the first 5 lines define the template part of the config
- from line 6, the toolset itself is defined. Identical to any inline toolset config.

```yaml title="template" linenums="1" hl_lines="1 6 16 28"
template:
  type: toolset
  defaults:                       # Default values for vars
    - entity: 0
    - cx: 25
    - cy: 50
    - show_scale: false
toolset:                          # From here the toolset is defined!
  from_template: true             # Debug, ignore
  toolset: segarc-icon-state      # Debug, ignore
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

###:sak-sak-logo: An example: colorstop
Say you want some consistency for the cards that show the inside temperature colors.

You define a colorstop template, and after that use that in several cards/tools. 

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
    colorstops:
      template:             # Use template colorstop (re-use!)
        name: colorstops_temperature_inside
        variables:          # Pass variables to template
          - thegap: 1
```

The template is defined in `sak_templates.yaml`

```yaml title="template" linenums="1" hl_lines="1"
colorstops_temperature_inside:
  template:
    type: colorstops
    defaults:               # Give vars a default value
      - thegap: 1
  colorstops:
    gap: '[[thegap]]'       # Use '[[ ]]' for template vars
    colors:
      17: 'PowderBlue'
      19: 'var(--theme-gradient-color-01)'
      21: 'var(--theme-gradient-color-04)'
```

##:sak-sak-logo: Advanced usage
This example shows the simple use of overwriting parts of the Toolset template without using template variables.
<br>In this case the `position` record is simply overwritten instead of passing `cx` and `cy` as variables.

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

##:sak-sak-logo: More advanced usage
We can even go a bit further and overwrite a tool within the list of tools.

!!! Important "A tool needs a unique ID to be able to overwrite the tool config"
    In this case the `segarc` has `id: 0` and **parts** of the config are overwritten!
    
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

The full config for the segarc tool is below. The yellow lines show the parts (records/maps) that are overwritten:

- the `show` config
- the `segments` config

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
          fill: var(--cs-theme-default-darken-15)
          filter: url(#is-1)
```

!!! Warning "Overwriting parts of a template can be error-prone. So take care!"