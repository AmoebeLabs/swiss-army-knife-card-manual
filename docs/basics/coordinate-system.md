[sak-example-22t]: ../assets/screenshots/sak-example-22t.png
[sak-card-toolset-tool-placement]: ../assets/screenshots/sak-card-toolset-tool-placement.png

The Swiss Army Knife card uses its own, simplified, coordinate system to simplify the design and placement of toolsets and tools on a card.

##:sak-sak-logo: Basics

##:sak-sak-logo: Card aspect ratio and size
The `aspectratio` configuration determines both the aspect ratio and the size of the SAK Card.

The aspect ratio is defined in the card. Below you see the definition of a square card with default size of 100x100.
```yaml
  aspectratio: 1/1        # Square card with a 100x100 grid size
```
###Example cards with different aspect ratio's
Some examples for aspect ratio's of: `0.5/1`, `1/1`, `2/1` and `3/1`:

<svg viewBox="0 0 680 100" style="fill:grey;margin:10px;padding:10px;">
  <rect x="0" y="0" width="50" height="100"/>
  <rect x="60" y="0" width="100" height="100"/>
  <rect x="170" y="0" width="200" height="100"/>
  <rect x="380" y="0" width="300" height="100"/>
</svg>

Some more examples for aspect ratio's of: `0.5/2`, `1/2`, `2/2` and `3/2`:

<svg viewBox="0 0 680 200" style="fill:grey;margin:10px;padding:10px;">
  <rect x="0" y="0" width="50" height="200"/>
  <rect x="60" y="0" width="100" height="200"/>
  <rect x="170" y="0" width="200" height="200"/>
  <rect x="380" y="0" width="300" height="200"/>
</svg>
!!! Info "You are not limited to these aspect ratio's. Any aspect ratio will work"

###But what about the size then?
If I would place three square cards in a `horizontal-stack` with different aspect ratio's, I get three equally sized cards. All cards scale to the same actual size in pixels, independently of their internal canvas sizes of 100x100, 200x200 and 400x400.

<svg viewBox="0 0 310 100" style="fill:grey;margin:10px;padding:10px;">
  <rect x="0" y="0" width="100" height="100"/>
  <text x="50" y="55" font-size="12" text-anchor="middle" fill="black">1/1</text>
  <rect x="105" y="0" width="100" height="100"/>
  <text x="155" y="55" font-size="12" text-anchor="middle" fill="black">2/2</text>
  <rect x="210" y="0" width="100" height="100"/>
  <text x="260" y="55" font-size="12" text-anchor="middle" fill="black">4/4</text>
</svg>

The result of these different internal sizes can be seen in the following example: I "designed" a toolset with a single circle on a standard 100x100 canvas and placed the toolset for each card on the same position (50,50); The circle scales to the actual canvas dimensions of the card. **Scalable** Vector Graphics at work!
<svg viewBox="0 0 310 100" style="fill:grey;margin:10px;padding:10px;">
  <rect x="0" y="0" width="100" height="100"/>
  <circle cx="50" cy="50" r="50" fill="lightgrey"/>
  <text x="50" y="55" font-size="12" text-anchor="middle" fill="black">1/1</text>
  <rect x="105" y="0" width="100" height="100"/>
  <circle cx="130" cy="25" r="25" fill="lightgrey"/>
  <text x="155" y="55" font-size="12" text-anchor="middle" fill="black">2/2</text>
  <rect x="210" y="0" width="100" height="100"/>
  <circle cx="222.5" cy="12.5" r="12.5" fill="lightgrey"/>
  <text x="260" y="55" font-size="12" text-anchor="middle" fill="black">4/4</text>
</svg>

##:sak-sak-logo: Toolset and tool placement
Let's start with the most important specifications

!!! Important "The position and dimensions of a tool *always* reference a *default* toolset grid size of 100x100"
    Where:
    
    - (0,0) is the upper left corner of the grid
    - (100,100) is the lower right corner of the grid
    
    Furthermore, all dimensions are *relative* to the grid:
    
    - a line with a length of 10 takes 10% of the grid.
    - a circle with radius of 50 fits exactly the grid.

!!! Important "Therefore, the center position of a toolset is *always* (50,50)"
    This center position is the 'anchor' used by the Toolset to position the tools on a card.

!!! Note "However, the size and position are not limited by this grid size!"
    So:
    
    - a tool can be wider and higher
    - can be placed outside these default coordinates: so coordinates can be < 0 or > 100.
!!! Note "Don't forget that toolsets can scale tools and are re-usable if defined as a template" 

###An example
Now that we know all that, how does this actually work in practice?

Let's look at the example with a card size of 200x100 and two toolsets consisting of a `circle`, `icon` and `state`. In a kind of 3D world, it looks like this:

![sak-card-toolset-tool-placement]

The tools are neatly configured around the center position (50,50) of the toolset grid: they have no knowledige of the size of the card, nor the placement on the card. That is the task of the toolset!

The YAML definition is shown below. Here you see the toolsets (named set1 and set2) and the different tools: `circle`, `state` and `icon`. For brevity only the coordinates/sizes part is shown.

```yaml linenums="1" hl_lines="6 11 17 22 29 34 40 45"
aspectratio: 2/1              # Gives a 200x100 canvas size

layout:
  # Circles with icon and state are placed at (40,50) and (160,50)
  toolsets:
    - toolset: set1
      position:
        cx: 40
        cy: 50
      tools:
        - type: circle
          position:
            cx: 50            # Circle is centered on 100x100
            cy: 50
            radius: 25

        - type: state
          position:
            cx: 50            # x centered
            cy: 60            # y a bit lower

        - type: icon
          position:
            cx: 50            # x centered
            cy: 40            # y a bit higher
            align: center
            icon_size: 15

    - toolset: set2
      position:
        cx: 160
        cy: 50
      tools:
        - type: circle
          position:
            cx: 50            # Circle is centered on 100x100
            cy: 50
            radius: 25

        - type: state
          position:
            cx: 50            # x centered
            cy: 60            # y a bit lower

        - type: icon
          position:
            cx: 50            # x centered
            cy: 40            # y a bit higher
            align: center
            icon_size: 15

```
##:sak-sak-logo: Use relative sizes for styles too, where possible
One easy example is the CSS `font-size` attribute: use `em` and not `px` to configure the size of a font, ie use `font-size: 12em`. 

SAK has configured the default `font-size` for SAK cards to be about the same as the 1% of the grid: so `font-size: 10em` should be about 10% of the grid in size.
