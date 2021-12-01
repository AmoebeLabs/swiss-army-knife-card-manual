##:sak-sak-logo: Tools
SAK offers a series of tools (17 at this moment) to create visualizations.

The tools are:

| tool        | type        | description |
| ----------- | ----------- | ----------- |
| `circle`    | basic       | A circle |
| `ellipse`   | basic       | An ellipse |
| `line`      | basic       | A vertical or horizontal line |
| `rectangle` | basic       | A rectangle with and w/o rounded cornders |
| `rectex`    | basic       | A more advanced rectangle with independent rounded corners |
| `regpoly`   | basic       | A regular poly using the Schläfli symbol math |
| `text`      | basic       | A text display |
| `horseshoe` | advanced    | TBD |
| `segarc`    | advanced    | A segmented arc: shows progress data in an arc |
| `slider`    | advanced    | Slider input tool. Used for brightness for example |
| `switch`    | advanced    | A basic on/off switch |
| `usersvg`   | advanced    | For fetching user defined, external SVG files |
| `area`      | HA specific | Represents an Entity Area (text) |
| `icon`      | HA specific | Represents an Entity Icon (icon) |
| `name`      | HA specific | Represents an Entity Name (text) |
| `state`     | HA specific | Represents an Entity State & Unit of Measurement (text) |
| `bar`       | HA specific | Represents an simple state history (horizontal or vertical bars)|

##:sak-sak-logo: Toolsets

**Grouping of tools**

!!! Important "Toolsets are aware of the `aspectratio` value of the card"
    As a toolset places the (set of) tools it contains on the card, hence must know its dimensions.

**Scaling**

!!! Important "Toolsets can scale the tools as a whole to 'fit' the card or required size"

Server example ([example 7]) showing this scaling
  [sak-example-7]: ../assets/screenshots/sak-example-7.png
  [example 7]: ../examples/example-7.md
    
The discs with the arc, icon and state use the same toolset (using a template) and use a toolset scale factor to get the required size of the toolset.

![sak-example-7]

!!! Important "Because of the scaling, tools need NOT to be designed to their final size on a card"
    You can re-use the same toolset in different sizes, altough they are designed on a 100x100 grid.

!!! Note "Height and Width can be scaled independently if required. Scaling does not affect the center position."

Example showing independent x/y scaling on the 3rd disc
  [sak-example-8t]: ../assets/screenshots/sak-example-8t.png
  ![sak-example-8t]

**Rotating**
!!! Important "Toolsets can rotate the tools as a whole"
    Rotating is in degrees and uses (again) the center of the toolset as the rotation anchor.

??? Example "Example showing some rotating disc toolsets"
    ![sak-example-8t]
    
!!! Warning "Rotating *can* have different results depending on the browser"    
    
**Styling**

