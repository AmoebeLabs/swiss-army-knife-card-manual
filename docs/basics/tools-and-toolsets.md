---
template: main.html
---
<!-- GT/GL -->

Tools and Toolsets are the main ingredients of the Swiss Army Knife custom card.
<br>They provide the means to visualize Home Assistant data in a free and creative manner.

The Swiss Army Knife uses SVG (Scalable Vector Graphics) as its sole basis to visualize a the tools on a card.

##:sak-sak-logo: Tools to create visualizations
The Swiss Army Knife card offers a series of tools (currently 17) to create visualizations.

The tools are:

| tool        | type        | description |
| ----------- | ----------- | ----------- |
| [circle][swiss-army-knife-basic-tool-circle]          | basic       | A circle |
| [ellipse][swiss-army-knife-basic-tool-ellipse]        | basic       | An ellipse |
| [line][swiss-army-knife-basic-tool-line]              | basic       | A vertical or horizontal line |
| [rectangle][swiss-army-knife-basic-tool-rectangle]    | basic       | A rectangle with and w/o rounded corners |
| [rectex][swiss-army-knife-basic-tool-rectex]          | basic       | A more advanced rectangle with independent rounded corners |
| [regpoly][swiss-army-knife-basic-tool-regpoly]        | basic       | A regular poly using the Schläfli symbol math |
| [text][swiss-army-knife-basic-tool-text]              | basic       | A text display |
| [horseshoe][swiss-army-knife-advanced-tool-horseshoe] | advanced    | TBD |
| [segarc][swiss-army-knife-advanced-tool-segarc]       | advanced    | A segmented arc: shows progress data in an arc |
| [slider][swiss-army-knife-advanced-tool-slider]       | advanced    | Slider input tool. Used for brightness for example |
| [switch][swiss-army-knife-advanced-tool-switch]       | advanced    | A basic on/off switch |
| [usersvg][swiss-army-knife-advanced-tool-usersvg]     | advanced    | For fetching user defined, external SVG files |
| [area][swiss-army-knife-ha-tool-area]                 | HA specific | Represents an Entity Area |
| [icon][swiss-army-knife-ha-tool-icon]                 | HA specific | Represents an Entity Icon |
| [name][swiss-army-knife-ha-tool-name]                 | HA specific | Represents an Entity Name |
| [state][swiss-army-knife-ha-tool-state]               | HA specific | Represents an Entity State & Unit of Measurement |
| [bar][swiss-army-knife-ha-tool-bar]                   | HA specific | Represents an simple state history (horizontal or vertical bars)|

##:sak-sak-logo: Toolsets to combine and control tools
Toolsets provide extra functionality to tools.

####Grouping of tools

Well, a 'set' already tells this: a Toolset is a container for a set of tools.

####Placement on card

A Toolset provides a grid to place tools on, and can itself be placed on a card.
<br>This makes a Toolset separate the coordinates of a tool and a card on which it is placed.

####Scaling

Toolsets can scale the tools as a whole to 'fit' the card or required size.

Server example ([example 7]) shows this scaling
    
The discs with the arc, icon, and state use the same toolset (using a template) and use a toolset scale factor to get the required size of the toolset.

![Swiss Army Knife Example 7 - Servers]

!!! Important "Because of the scaling, tools need NOT to be designed to their final size on a card"
    You can re-use the same toolset in different sizes, although they are designed on a 100x100 grid.

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

<!--- References to pictures... --->
[Swiss Army Knife Example 7 - Servers]: ../assets/screenshots/sak-example-7.png "Swiss Army Knife example 7 - Servers"


<!--- References to internal links... --->

[swiss-army-knife-basic-tool-circle]: ../tools/circle-tool.md "Swiss Army Knife - Circle Tool"
[swiss-army-knife-basic-tool-ellipse]: ../tools/ellipse-tool.md "Swiss Army Knife - Ellipse Tool"
[swiss-army-knife-basic-tool-line]: ../tools/line-tool.md "Swiss Army Knife - Line Tool"
[swiss-army-knife-basic-tool-rectangle]: ../tools/rectangle-tool.md "Swiss Army Knife - Rectangle Tool"
[swiss-army-knife-basic-tool-rectex]: ../tools/rectangle-ex-tool.md "Swiss Army Knife - Rectangle Ex Tool"
[swiss-army-knife-basic-tool-regpoly]: ../tools/regular-poly-tool.md "Swiss Army Knife - Regular Poly Tool"
[swiss-army-knife-basic-tool-text]: ../tools/text-tool.md "Swiss Army Knife - Text Tool"
[swiss-army-knife-advanced-tool-horseshoe]: ../tools/horseshoe-tool.md "Swiss Army Knife - Horse shoe Tool"
[swiss-army-knife-advanced-tool-segarc]: ../tools/segarc-tool.md "Swiss Army Knife - Segmented Arc Tool"
[swiss-army-knife-advanced-tool-slider]: ../tools/slider-tool.md "Swiss Army Knife - Slider Tool"
[swiss-army-knife-advanced-tool-switch]: ../tools/switch-tool.md "Swiss Army Knife - Switch Tool"
[swiss-army-knife-advanced-tool-usersvg]: ../tools/usersvg-tool.md "Swiss Army Knife - User SVG Tool"
[swiss-army-knife-ha-tool-area]: ../tools/entity-area-tool.md "Swiss Army Knife - Entity Area Tool"
[swiss-army-knife-ha-tool-icon]: ../tools/entity-icon-tool.md "Swiss Army Knife - Entity Icon Tool"
[swiss-army-knife-ha-tool-name]: ../tools/entity-name-tool.md "Swiss Army Knife - Entity Name Tool"
[swiss-army-knife-ha-tool-state]: ../tools/entity-state-tool.md "Swiss Army Knife - Entity State Tool"
[swiss-army-knife-ha-tool-bar]: ../tools/entity-barchart-tool.md "Swiss Army Knife - Entity History Bar Tool"

[example 7]: ../examples/example-7.md

<!--- References to external links... --->

