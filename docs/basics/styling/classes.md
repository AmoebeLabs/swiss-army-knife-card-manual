CSS Classes can be used to get uniform styling over multiple cards with minimal work.
<br>More than one class can be enabled to be used for a tool.

##:sak-sak-logo: Basic usage

```yaml linenums="1" hl_lines="6"
- type: 'circle'
  position:
    cx: 50
    cy: 50
    radius: 25
  classes:
    circle:                 # Class definitions for circle
      my-first-class: true  # User defined CSS class
      my-second-class: true # User defined CSS class
```

##:sak-sak-logo: Default tool classes
SAK defines classes with default styling for all the existing tools.
<br>These classes are defined in the `sak-css-definitions.yaml` file in the `sak_templates` folder.

!!! Success "Default classes are automatically assigned to the tools"
    There is no need for the user to specify these classes in the tools definition.
    
!!! Warning "Don't change this file!"
    If you want to change the default definition, see the next chapter...

##:sak-sak-logo: Overriding default tool classes
The default css classes used by SAK to style the tools can be altered by overriding these classes in the `user-css-definitions.yaml` file.

Say you don't like the fact that text is spaced for the entity name and you want to set that to 0.

The SAK definition is:
```yaml linenums="1" hl_lines="12"
- descr: Entity Name tool
  content: >
    .sak-name {
      overflow: visible;
    }
    .sak-name__name {
      font-size: 3em;
      fill: var(--primary-text-color);
      opacity: 1.0;
      text-anchor: middle;
      alignment-baseline: central;
      letter-spacing: 0.05em;
    }
```

You override the `letter-spacing` in your own definition with a value of 0:

```yaml linenums="1" hl_lines="4"
- descr: Override Entity Name tool
  content: >
    .sak-name__name {
      letter-spacing: 0.0em;
    }
```
Now look into the mirror to see that big smile on your face. You're so happy you fixed that...

##:sak-sak-logo: Using your own tool classes
Just as you can override default SAK classes, you can define your own set of classes to style your tools.

These classes are defined in the `user-css-definitions.yaml` file in the `sak_templates` folder.

Example \#8, the Homekit alike cards use user defined classes to style the cards.

```yaml linenums="1"
# Demo using classes for example #8, some Homekit alike cards...
#------------------------------------------------------------------------------
  - descr: Homekit alike Area styling
    content: >
      .homekit-area__area {
        text-anchor: start;
        font-size: 12em;
        font-weight: 700;
        fill: var(--primary-text-color);
      }
      
  - descr: Homekit alike Name styling
    content: >
      .homekit-name__name {
        text-anchor: start;
        font-size: 12em;
        font-weight: 700;
        fill: var(--primary-text-color);
      }

  # Note: font-size MUST be defined as style for the state.
  # Otherwise, uom can't be rendered!
  - descr: Homekit alike State & Uom styling
    content: >
      .homekit-state__value {
        text-anchor: start;
        font-weight: 700;
        fill: var(--primary-text-color);
      }
      .homekit-state__uom {
        fill: var(--primary-text-color);
        font-weight: 700;
      }
      

```
And this looks like this in the example view, `view-sake8.yaml` file:

```yaml linenums="1" hl_lines="8"
- type: name
  position:
    cx: 10
    cy: 70
  entity_index: 0
  classes:
    name:
      homekit-name__name: true  # Use homekit class

```