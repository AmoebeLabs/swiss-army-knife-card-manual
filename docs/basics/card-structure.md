---
template: main.html
title: YAML Card Structure
description: Each Swiss Army Knife custom card follows the same structure to define the card, toolsets and tools to create the visualization you want.
tags:
  - YAML
  - Structure
  - Card
---

##:sak-sak-logo: The Swiss Army Knife YAML structure
The main aspects of a SAK Card are shown below using yellow lines.

```yaml linenums="1" hl_lines="5 7 22 29 37 46 63 72"
  # Define the type of the card to use.
  #
  # This is normally part of a "cards" section from a horizontal or vertical Lovelace stack
  # -----
- type: 'custom:dev-swiss-army-knife-card'
  # Define the entities
  entities:
    - <list of entities>

  #
  # Define aspect ratio and size of card.
  # - In this case the card is square and has a size of 100x100
  # - A 2/1 ratio would have a size of 200x100
  # - etc.
  #
  # Odd values like 1/0.05 are also possible. Size is 100x5
  # This is used for instance to just draw a line/separator
  #
  # Specification:
  # - aspectratio (string)
  # -----
  aspectratio: 1/1

  #
  # Display the card or not.
  # - default false. Card is displayed.
  # - use true to just draw header text or a separator.
  # -----
  disable_card: false

  #
  # ***** card/layout section *****
  #
  # Specification:
  # - layout (map)
  # -----
  layout:

    # ***** card/layout/styles section *****
    #
    # Overall styles for the card and toolsets. Mainly used for defining filters!
    #
    # Specification:
    # - styles (map)
    # -----
    styles:
      card:
      toolsets:
        # Define Neumorphic filter over the full toolset.
        filter: url(#sak-nm-default)
        
        # Define material shadow filter over the full toolset
        # filter: url(#ds-1)
      
    #
    # ***** card/layout/toolsets section *****
    #
    # Define the list of toolsets from here
    #
    # Specification:
    # - toolsets (list of toolset configs)
    # -----
    toolsets:
      # define list of toolsets with its tools
      - toolset: background
        #
        # define list of tools within toolset
        #
        # Specification:
        # - tools (list of tool configs)
        #
        tools:
          #
          # define the tools
          #
          - type: 'usersvg'
          <...etc...>
            
```