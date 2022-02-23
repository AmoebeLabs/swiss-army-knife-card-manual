---
template: overrides/main.html
---
<!-- GT/GL -->

Tools and Toolsets are the main ingredients of the Swiss Army Knife custom card.
<br>They provide the means to visualize Home Assistant data in a free and creative manner.

##:sak-sak-logo: Tools
SAK offers a series of tools (currently 17) to create visualizations.

The tools are:

| tool        | type        | description |
| ----------- | ----------- | ----------- |
| `circle`    | basic       | A circle |
| `ellipse`   | basic       | An ellipse |
| `line`      | basic       | A vertical or horizontal line |
| `rectangle` | basic       | A rectangle with and w/o rounded corners |
| `rectex`    | basic       | A more advanced rectangle with independent rounded corners |
| `regpoly`   | basic       | A regular poly using the Schläfli symbol math |
| `text`      | basic       | A text display |
| `horseshoe` | advanced    | TBD |
| `segarc`    | advanced    | A segmented arc: shows progress data in an arc |
| `slider`    | advanced    | Slider input tool. Used for brightness for example |
| `switch`    | advanced    | A basic on/off switch |
| `usersvg`   | advanced    | For fetching user defined, external SVG files |
| `area`      | HA specific | Represents an Entity Area |
| `icon`      | HA specific | Represents an Entity Icon |
| `name`      | HA specific | Represents an Entity Name |
| `state`     | HA specific | Represents an Entity State & Unit of Measurement |
| `bar`       | HA specific | Represents an simple state history (horizontal or vertical bars)|

##:sak-sak-logo: Toolsets
Toolsets provide extra functionality to tools.

####Grouping of tools

Well, a 'set' already tells this: a Toolset is a container for a set of tools.

####Placement on card

A Toolset provides a grid to place tools on, and can itself be placed on a card.
<br>This makes a Toolset separate the coordinates of a tool and a card on which it is placed.

####Scaling

Toolsets can scale the tools as a whole to 'fit' the card or required size.

Server example ([example 7]) shows this scaling
  [sak-example-7]: ../assets/screenshots/sak-example-7.png
  [example 7]: ../examples/example-7.md
    
The discs with the arc, icon, and state use the same toolset (using a template) and use a toolset scale factor to get the required size of the toolset.

![sak-example-7]

!!! Important "Because of the scaling, tools need NOT to be designed to their final size on a card"
    You can re-use the same toolset in different sizes, altough they are designed on a 100x100 grid.

!!! Note "Height and Width can be scaled independently if required. Scaling does not affect the center position."

Example showing independent x/y scaling on the 3rd disc
  [sak-example-8t]: ../assets/screenshots/sak-example-8t.png
  ![sak-example-8t]

####Rotating
!!! Important "Toolsets can rotate the tools as a whole"
    Rotation is in degrees and uses (again) the center of the toolset as the rotation anchor.

??? Example "Example showing some rotating disc toolsets"
    ![sak-example-8t]
    
!!! Warning "Rotating *may* yield different results depending on the browser"    
    
####Styling

