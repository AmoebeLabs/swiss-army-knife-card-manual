---
template: overrides/main.html
---

##:sak-sak-logo: The Swiss Army Knife YAML structure

```yaml linenums="1" hl_lines="5 7 19 26 31 37 51 53"
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
  # -----
  layout:

    # ***** card/layout/styles section *****
    #
    # Overall styles for the card and toolsets. Mainly used for defining filters!
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
    # -----
    toolsets:
      # define list of toolsets with its tools
      - toolset: background
        #
        # define list of tools within toolset
        #
        tools:
          - type: 'usersvg'
            
```