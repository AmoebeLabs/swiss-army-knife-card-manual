---
template: overrides/main.html
---

[regpoly-tool support]: https://github.com/amoebelabs/swiss-army-knife/releases/tag/1.0.0
# The Regular Polygon tool
[:octicons-tag-24: 1.0.0][regpoly-tool support] ·
:octicons-package-dependents-24: Output

The Regular Polygon tool is a tool build on the [Shläfli symbol.](http://en.wikipedia.org/wiki/Schl%C3%A4fli_symbol)

It can build both regular convex polygons and regular star polygons. They have a mathematical background:

- p is the number of vertices. They are all distributed evenly on a circle.
- For q = 1, you connect each point to the next one on the circle (clockwise or counterclockwise, it doesn't matter).
- For q = 2, you skip the first one and connect to the 2nd.
- For q = 3, you skip the first two and connect to the 3rd. And so on... as long as q < p/2.
 
<div>
  <div style="display:grid; grid-template-columns: repeat(4, 1fr); grid-column-gap: 10px; grid-row-gap: 10px;">
    <div>
      <svg viewBox="-1000 -1000 2000 2000">
      <path style="transform:rotate(8deg);fill:var(--md-primary-fg-color--light);stroke:var(--md-primary-fg-color--dark);stroke-width:20"
        d="M748 281 L-618 507 L-130 -789 z" fill-rule="evenodd"></path></svg>
    </div>
    <div>
      <svg viewBox="-1000 -1000 2000 2000">
      <path style="transform:rotate(8deg);fill:var(--md-primary-fg-color--light);stroke:var(--md-primary-fg-color--dark);stroke-width:20"
        d="M501 623 L-437 669 L-772 -209 L-39 -799 L747 -284 z" fill-rule="evenodd"></path></svg>
    </div>
    <div>
      <svg viewBox="-1000 -1000 2000 2000">
      <path style="transform:rotate(8deg);fill:var(--md-primary-fg-color--light);stroke:var(--md-primary-fg-color--dark);stroke-width:20"
        d="M324 731 L-692 -400 L795 -83 L-594 534 L166 -782 z" fill-rule="evenodd"></path></svg>
    </div>
    <div>
      <svg viewBox="-1000 -1000 2000 2000">
      <path style="transform:rotate(8deg);fill:var(--md-primary-fg-color--light);stroke:var(--md-primary-fg-color--dark);stroke-width:20"
        d="M690 404 L-797 -64 L746 -287 L-547 582 L240 -762 L114 791 L-446 -663 z" fill-rule="evenodd"></path>
    </div>
  </div>
</div>
<div style="display:default" >
</div>


##:sak-sak-logo: Basic usage

=== "Standalone"
    ```yaml linenums="1" hl_lines="1"
    - type: 'regpoly'           # tooltype is 'regpoly'
      position:                 # Position on (100x100) canvas
        cx: 50                  # cx=50 is center position
        cy: 50                  # cy=50 is center position
        radius: 50              # Radius of the "circle"
        side_count: 6           # The "p" value in the Schläfli symbol
        side_skip: 1            # The "q" value in the Schläfli symbol
        angle_offset: 0         # Value to rotate the regpoly
      styles:
        regpoly:
          stroke-width: 2       # width of stroke. 0 = no stroke.
    ```
=== "Connected"
    ```yaml linenums="1" hl_lines="1 9"
    - type: 'regpoly'           # tooltype is 'regpoly'
      position:                 # Position on (100x100) canvas
        cx: 50                  # cx=50 is center position
        cy: 50                  # cy=50 is center position
        radius: 50              # Radius of the "circle"
        side_count: 6           # The "p" value in the Schläfli symbol
        side_skip: 1            # The "q" value in the Schläfli symbol
        angle_offset: 0         # Value to rotate the regpoly
      entity_index: 0           # connect to state of entity 0
      styles:
        regpoly:
          stroke-width: 2       # width of stroke. 0 = no stroke.
    ```

##:sak-sak-logo: Styling
The Regular Polygon tool has support for the following forms of styling:

| Method       | Support          | Description            |
| :----------- | :--------------: | :-------------------- |
| `classes`    | :material-check: | Using SAK or User defined class definitions  |
| `styles`     | :material-check: | Using inline SVG and CSS styles |

The Regular Polygon tool is composed of a single object: "regpoly" and this is the selector for styling:
```yaml linenums="1"hl_lines="10 13"
- type: 'regpoly'
  position:
    cx: 50
    cy: 50
    radius: 50              # Radius of the "circle"
    side_count: 6           # The "p" value in the Schläfli symbol
    side_skip: 1            # The "q" value in the Schläfli symbol
    angle_offset: 0         # Value to rotate the regpoly
  classes:
    regpoly:                # RegPoly selector
      <...>
  styles:
    regpoly:                # RegPoly selector
      <...>
```
Populair properties:

| Property       | Does what?            | Example                                                 |
| :-------------- | :-------------------- | :------------------------------------------------------ |
| `fill`          | Fill color            | `fill: red` sets fill to color red |
| `stroke-width`  | Stroke width          | `stroke-width: 2em` sets width to relative width of 2em |
| `stroke`        | Stroke color          | `stroke: blue` sets stroke to blue |
| `opacity`       | Opacity (stroke/fill) | `opacity: 0.7` sets the opacity of rect to 70% |
| `fill-opacity`  | Opacity for fill      | `fill-opacity: 0.5` sets the fill opacity to 50% |
| `stroke-opacity`| Opacity for stroke    | `stroke-opacity: 0.5` sets the stroke opacity to 50% |

--8<-- "docs/tools/default-haptics.md"

##:sak-sak-logo: Animations
The RegPoly tool has support for the following forms of animations:

| Method       | Support          | Description            |
| :----------- | :--------------: | :-------------------- |
| `colorstops` | :material-check: | List of state values to set the color |
| `colorlists` | :material-close: | Using a colorlist definition |
| `animations` | :material-check: | Operator state based animations with class/style styling |

!!! Info "The use of animations require the tool to be connected to an entity"


##:sak-sak-logo: Examples
Below some examples with varying "p" (side count) and "q" (skip number of points).

!!! Info "The fill rule is 'evenodd' in the examples"
| ----------------------------| ----------------------------| ----------------------------| ----------------------------|
| :-----: | :-----: | :-----: | :-----: |
| p: 3, q: 1 <svg viewBox="-1000 -1000 2000 2000"><path style="transform:rotate(8deg);"d="M748 281 L-618 507 L-130 -789 z" fill-rule="evenodd"></path></svg> | p: 5, q: 1 <svg viewBox="-1000 -1000 2000 2000"><path d="M501 623 L-437 669 L-772 -209 L-39 -799 L747 -284 z" fill-rule="evenodd"></path></svg> | p: 5, q: 2 <svg viewBox="-1000 -1000 2000 2000"><path d="M324 731 L-692 -400 L795 -83 L-594 534 L166 -782 z" fill-rule="evenodd"></path></svg> | p: 6, q: 1 <svg viewBox="-1000 -1000 2000 2000"><path d="M445 664 L-352 718 L-798 53 L-445 -664 L352 -718 L798 -53 z" fill-rule="evenodd"></path></svg> |
| p: 6, q: 2 <svg viewBox="-1000 -1000 2000 2000"><path d="M655 459 L-725 337 L70 -796 L655 459 M-70 796 L-655 -459 L725 -337 z" fill-rule="evenodd"></path></svg> | p: 7, q: 1 <svg viewBox="-1000 -1000 2000 2000"><path d="M621 503 L-6 799 L-629 493 L-778 -184 L-341 -723 L353 -717 L781 -171 z" fill-rule="evenodd"></path></svg> | p: 7, q: 2 <svg viewBox="-1000 -1000 2000 2000"><path d="M534 595 L-699 388 L-223 -768 L798 -46 L-132 789 L-739 -304 L461 -653 z" fill-rule="evenodd"></path></svg> | p: 7, q: 3 <svg viewBox="-1000 -1000 2000 2000"><path d="M690 404 L-797 -64 L746 -287 L-547 582 L240 -762 L114 791 L-446 -663 z" fill-rule="evenodd"></path></svg> |
| p: 8, q: 1 <svg viewBox="-1000 -1000 2000 2000"><path d="M711 366 L243 761 L-366 711 L-761 243 L-711 -366 L-243 -761 L366 -711 L761 -243 z" fill-rule="evenodd"></path></svg> | p: 8, q: 2 <svg viewBox="-1000 -1000 2000 2000"><path d="M757 257 L-257 757 L-757 -257 L257 -757 L757 257 M353 717 L-717 353 L-353 -717 L717 -353 z" fill-rule="evenodd"></path></svg> | p: 8, q: 3 <svg viewBox="-1000 -1000 2000 2000"><path d="M799 25 L-583 547 L25 -799 L547 583 L-799 -25 L583 -547 L-25 799 L-547 -583 z" fill-rule="evenodd"></path></svg> | p: 9, q: 1 <svg viewBox="-1000 -1000 2000 2000"><path d="M699 388 L286 747 L-260 756 L-685 411 L-790 -125 L-524 -604 L-13 -799 L503 -621 L785 -152 z" fill-rule="evenodd"></path></svg> |
| p: 9, q: 2 <svg viewBox="-1000 -1000 2000 2000"><path d="M762 240 L-104 793 L-799 34 L-173 -781 L739 -306 L429 674 L-589 540 L-634 -487 L369 -709 z" fill-rule="evenodd"></path></svg> | p: 9, q: 3 <svg viewBox="-1000 -1000 2000 2000"><path d="M754 267 L-608 519 L-145 -786 L754 267 M406 689 L-799 6 L393 -696 L406 689 M-132 789 L-617 -508 L749 -280 z" fill-rule="evenodd"></path></svg> | p: 9, q: 4 <svg viewBox="-1000 -1000 2000 2000"><path d="M797 57 L-769 219 L647 -469 L-448 662 L194 -775 L82 795 L-349 -719 L574 556 L-730 -326 z" fill-rule="evenodd"></path></svg> | p: 10, q: 1 <svg viewBox="-1000 -1000 2000 2000"><path d="M716 356 L370 709 L-117 791 L-560 571 L-788 132 L-716 -356 L-370 -709 L117 -791 L560 -571 L788 -132 z" fill-rule="evenodd"></path></svg> |
| p: 10, q: 2 <svg viewBox="-1000 -1000 2000 2000"><path d="M776 191 L58 797 L-740 301 L-516 -611 L421 -679 L776 191 M516 611 L-421 679 L-776 -191 L-58 -797 L740 -301 z" fill-rule="evenodd"></path></svg> | p: 10, q: 3 <svg viewBox="-1000 -1000 2000 2000"><path d="M760 249 L-472 645 L-468 -648 L761 -244 L-2 799 L-760 -249 L472 -645 L468 648 L-761 244 L2 -799 z" fill-rule="evenodd"></path></svg> | p: 10, q: 4 <svg viewBox="-1000 -1000 2000 2000"><path d="M694 397 L-795 87 L592 -537 L-162 783 L-328 -729 L694 397 M328 729 L-694 -397 L795 -87 L-592 537 L162 -783 z" fill-rule="evenodd"></path></svg> | p: 11, q: 1 <svg viewBox="-1000 -1000 2000 2000"><path d="M774 201 L542 588 L138 787 L-309 737 L-659 453 L-799 24 L-685 -411 L-354 -717 L89 -794 L505 -620 L760 -248 z" fill-rule="evenodd"></path></svg> |
| p: 11, q: 2 <svg viewBox="-1000 -1000 2000 2000"><path d="M774 201 L138 787 L-659 452 L-685 -411 L89 -794 L760 -248 L542 588 L-309 737 L-799 24 L-354 -717 L505 -620 z" fill-rule="evenodd"></path></svg> | p: 11, q: 3 <svg viewBox="-1000 -1000 2000 2000"><path d="M783 160 L-270 753 L-706 -374 L471 -646 L572 558 L-634 487 L-392 -697 L745 -288 L179 779 L-797 67 L47 -798 z" fill-rule="evenodd"></path></svg> | p: 11, q: 4 <svg viewBox="-1000 -1000 2000 2000"><path d="M735 314 L-719 349 L206 -772 L448 662 L-794 -94 L591 -538 L19 799 L-616 -509 L788 -132 L-416 683 L-243 -761 z" fill-rule="evenodd"></path></svg> | p: 11, q: 5 <svg viewBox="-1000 -1000 2000 2000"><path d="M729 327 L-792 -108 L791 -118 L-725 336 L601 -527 L-428 675 L220 -768 L4 799 L-230 -766 L436 670 L-607 -520 z" fill-rule="evenodd"></path></svg> |
| p: 12, q: 1 <svg viewBox="-1000 -1000 2000 2000"><path d="M763 238 L541 588 L174 780 L-238 763 L-588 541 L-780 174 L-763 -238 L-541 -588 L-174 -780 L238 -763 L588 -541 L780 -174 z" fill-rule="evenodd"></path></svg> | p: 12, q: 2 <svg viewBox="-1000 -1000 2000 2000"><path d="M799 16 L385 701 L-414 684 L-799 -16 L-385 -701 L414 -684 L799 16 M684 414 L-16 799 L-701 385 L-684 -414 L16 -799 L701 -385 z" fill-rule="evenodd"></path></svg> | p: 12, q: 3 <svg viewBox="-1000 -1000 2000 2000"><path d="M708 372 L-372 708 L-708 -372 L372 -708 L708 372 M427 676 L-676 427 L-427 -676 L676 -427 L427 676 M31 799 L-799 31 L-31 -799 L799 -31 z" fill-rule="evenodd"></path></svg> | p: 12, q: 4 <svg viewBox="-1000 -1000 2000 2000"><path d="M768 221 L-576 555 L-192 -776 L768 221 M555 576 L-776 192 L221 -768 L555 576 M192 776 L-768 -221 L576 -555 L192 776 M-221 768 L-555 -576 L776 -192 z" fill-rule="evenodd"></path></svg> |
| p: 12, q: 5 <svg viewBox="-1000 -1000 2000 2000"><path d="M736 313 L-794 97 L639 -481 L-313 736 L-97 -794 L481 639 L-736 -313 L794 -97 L-639 481 L313 -736 L97 794 L-481 -639 z" fill-rule="evenodd"></path></svg> | p: 13, q: 1 <svg viewBox="-1000 -1000 2000 2000"><path d="M799 27 L694 396 L431 673 L68 797 L-309 737 L-616 509 L-782 164 L-769 -218 L-579 -551 L-257 -757 L124 -790 L477 -642 L720 -346 z" fill-rule="evenodd"></path><</svg> | p: 13, q: 2 <svg viewBox="-1000 -1000 2000 2000"><path d="M795 83 L382 702 L-360 714 L-792 108 L-539 -590 L179 -779 L743 -295 L665 443 L12 799 L-651 464 L-752 -271 L-203 -773 L520 -607 z" fill-rule="evenodd"></path></svg> | p: 13, q: 3 <svg viewBox="-1000 -1000 2000 2000"><path d="M791 119 L-23 799 L-796 73 L-168 -782 L755 -261 L350 718 L-671 435 L-512 -614 L547 -583 L644 473 L-392 697 L-739 -305 L213 -770 z" fill-rule="evenodd"></path></svg> |
| p: 13, q: 4 <svg viewBox="-1000 -1000 2000 2000"><path d="M755 263 L-513 613 L-391 -697 L791 -118 L-170 781 L-670 -436 L645 -472 L212 771 L-796 -74 L352 -718 L546 584 L-739 304 L-21 -799 z" fill-rule="evenodd"></path></svg> | p: 13, q: 5  <svg viewBox="-1000 -1000 2000 2000"><path d="M785 152 L-688 406 L245 -761 L320 732 L-726 -335 L766 -230 L-420 680 L-136 -788 L624 499 L-798 40 L571 -559 L-56 798 L-486 -634 z" fill-rule="evenodd"></path></svg> | p: 13, q: 6 <svg viewBox="-1000 -1000 2000 2000"><path d="M799 5 L-777 186 L710 -367 L-602 526 L458 -655 L-288 746 L101 -793 L91 794 L-278 -749 L450 661 L-595 -534 L705 376 L-775 -196 z" fill-rule="evenodd"></path></svg> | p: 14, q: 1 <svg viewBox="-1000 -1000 2000 2000"><path d="M740 301 L536 593 L225 767 L-129 789 L-459 655 L-697 390 L-798 49 L-740 -301 L-536 -593 L-225 -767 L129 -789 L459 -655 L697 -390 L798 -49 z" fill-rule="evenodd"></path></svg> |
| p: 14, q: 2 <svg viewBox="-1000 -1000 2000 2000"><path d="M776 192 L333 727 L-360 714 L-783 163 L-616 -510 L14 -799 L634 -487 L776 192 M616 510 L-14 799 L-634 487 L-776 -192 L-333 -727 L360 -714 L783 -163 z" fill-rule="evenodd"></path></svg> | p: 14, q: 3 <svg viewBox="-1000 -1000 2000 2000"><path d="M781 172 L5 799 L-778 183 L-352 -718 L621 -503 L629 494 L-341 723 L-781 -172 L-5 -799 L778 -183 L352 718 L-621 503 L-629 -494 L341 -723 z" fill-rule="evenodd"></path></svg> | p: 14, q: 4 <svg viewBox="-1000 -1000 2000 2000"><path d="M794 92 L-266 754 L-676 -427 L567 -563 L423 678 L-755 261 L-87 -795 L794 92 M676 427 L-567 563 L-423 -678 L755 -261 L87 795 L-794 -92 L266 -754 z" fill-rule="evenodd"></path></svg> | p: 14, q: 5 <svg viewBox="-1000 -1000 2000 2000"><path d="M788 136 L-598 531 L-42 -798 L651 464 L-769 219 L308 -738 L385 701 L-788 -136 L598 -531 L42 798 L-651 -464 L769 -219 L-308 738 L-385 -701 z" fill-rule="evenodd"></path></svg> |
| p: 14, q: 6 <svg viewBox="-1000 -1000 2000 2000"><path d="M763 239 L-791 115 L663 -447 L-403 690 L63 -797 L288 746 L-583 -547 L763 239 M583 547 L-763 -239 L791 -115 L-663 447 L403 -690 L-63 797 L-288 -746 z" fill-rule="evenodd"></path></svg> | p: 15, q: 1 <svg viewBox="-1000 -1000 2000 2000"><path d="M796 75 L696 392 L476 642 L174 780 L-158 784 L-463 652 L-688 407 L-794 91 L-763 -239 L-600 -529 L-333 -727 L-8 -799 L317 -734 L588 -541 L758 -255 z" fill-rule="evenodd"></path></svg> | p: 15, q: 2 <svg viewBox="-1000 -1000 2000 2000"><path d="M774 199 L370 709 L-279 749 L-744 293 L-716 -356 L-214 -770 L429 -675 L788 -132 L626 497 L49 798 L-560 571 L-799 -34 L-509 -616 L117 -791 L666 -442 z" fill-rule="evenodd"></path></svg> | p: 15, q: 3 <svg viewBox="-1000 -1000 2000 2000"><path d="M760 247 L0 799 L-760 246 L-470 -647 L470 -647 L760 247 M594 535 L-325 730 L-795 -83 L-166 -782 L692 -399 L594 535 M325 730 L-594 535 L-692 -400 L166 -782 L795 -83 z" fill-rule="evenodd"></path></svg> |
| p: 15, q: 4 <svg viewBox="-1000 -1000 2000 2000"><path d="M790 120 L-202 773 L-748 -282 L359 -714 L673 431 L-499 624 L-568 -562 L618 -506 L439 668 L-710 367 L-290 -745 L771 -211 L129 789 L-798 46 L37 -799 z" fill-rule="evenodd"></path></svg> | p: 15, q: 5 <svg viewBox="-1000 -1000 2000 2000"><path d="M734 317 L-642 477 L-92 -794 L734 317 M541 588 L-780 174 L239 -763 L541 588 M255 758 L-784 -157 L528 -600 L255 758 M-75 796 L-652 -463 L727 -333 L-75 796 M-392 697 L-407 -688 L799 -8 z" fill-rule="evenodd"></path></svg> | p: 15, q: 6 <svg viewBox="-1000 -1000 2000 2000"><path d="M769 218 L-751 275 L445 -664 L29 799 L-494 -629 L769 218 M614 512 L-798 -53 L677 -425 L-297 742 L-195 -775 L614 512 M352 718 L-707 -373 L791 -113 L-574 557 L137 -788 z" fill-rule="evenodd"></path></svg> | p: 15, q: 7 <svg viewBox="-1000 -1000 2000 2000"><path d="M770 213 L-798 -48 L791 -118 L-749 280 L674 -430 L-570 560 L441 -667 L-292 744 L131 -789 L35 799 L-200 -774 L357 715 L-498 -625 L617 508 L-709 -369 z" fill-rule="evenodd"></path></svg> |
| p: 16, q: 1 <svg viewBox="-1000 -1000 2000 2000"><path d="M792 107 L691 402 L484 636 L204 773 L-107 792 L-402 691 L-636 484 L-773 204 L-792 -107 L-691 -402 L-484 -636 L-204 -773 L107 -792 L402 -691 L636 -484 L773 -204 z" fill-rule="evenodd"></path></svg> | p: 16, q: 2 <svg viewBox="-1000 -1000 2000 2000"><path d="M774 201 L404 689 L-201 774 L-689 404 L-774 -201 L-404 -689 L201 -774 L689 -404 L774 201 M638 482 L109 792 L-482 638 L-792 109 L-638 -482 L-109 -792 L482 -638 L792 -109 z" fill-rule="evenodd"></path></svg> | p: 16, q: 3 <svg viewBox="-1000 -1000 2000 2000"><path d="M796 79 L230 765 L-619 506 L-704 -378 L79 -796 L765 -230 L506 619 L-378 704 L-796 -79 L-230 -765 L619 -506 L704 378 L-79 796 L-765 230 L-506 -619 L378 -704 z" fill-rule="evenodd"></path></svg> | p: 16, q: 4 <svg viewBox="-1000 -1000 2000 2000"><path d="M754 265 L-265 754 L-754 -265 L265 -754 L754 265 M595 534 L-534 595 L-595 -534 L534 -595 L595 534 M345 721 L-721 345 L-345 -721 L721 -345 L345 721 M43 798 L-798 43 L-43 -798 L798 -43 z" fill-rule="evenodd"></path></svg> |
| p: 16, q: 5 <svg viewBox="-1000 -1000 2000 2000"><path d="M797 57 L-358 715 L-523 -604 L759 -252 L-57 797 L-715 -358 L604 -523 L252 759 L-797 -57 L358 -715 L523 604 L-759 252 L57 -797 L715 358 L-604 523 L-252 -759 z" fill-rule="evenodd"></path></svg> | p: 16, q: 6 <svg viewBox="-1000 -1000 2000 2000"><path d="M773 204 L-691 402 L204 -773 L402 691 L-773 -204 L691 -402 L-204 773 L-402 -691 L773 204 M636 484 L-792 107 L484 -636 L107 792 L-636 -484 L792 -107 L-484 636 L-107 -792 z" fill-rule="evenodd"></path></svg> | p: 16, q: 7 <svg viewBox="-1000 -1000 2000 2000"><path d="M759 251 L-797 58 L714 -358 L-523 605 L251 -759 L58 797 L-358 -714 L605 523 L-759 -251 L797 -58 L-714 358 L523 -605 L-251 759 L-58 -797 L358 714 L-605 -523 z" fill-rule="evenodd"></path></svg> | p: 17, q: 1 <svg viewBox="-1000 -1000 2000 2000"><path d="M748 282 L595 534 L362 713 L80 795 L-212 771 L-476 642 L-676 426 L-785 153 L-787 -140 L-683 -415 L-487 -634 L-225 -767 L67 -797 L350 -718 L586 -543 L743 -294 L799 -6 z" fill-rule="evenodd"></path></svg> |
| p: 17, q: 2 <svg viewBox="-1000 -1000 2000 2000"><path d="M798 53 L553 577 L20 799 L-523 604 L-794 93 L-650 -465 L-166 -782 L403 -690 L763 -238 L724 338 L307 738 L-270 753 L-706 374 L-774 -199 L-438 -669 L127 -789 L626 -498 z" fill-rule="evenodd"></path></svg> | p: 17, q: 4 <svg viewBox="-1000 -1000 2000 2000"><path d="M747 284 L-214 770 L-787 -141 L68 -797 L799 -5 L78 796 L-785 152 L-223 -768 L744 -293 L361 713 L-677 425 L-486 -635 L587 -542 L594 535 L-478 641 L-682 -416 L352 -718 z" fill-rule="evenodd"></path></svg> | p: 17, q: 5 <svg viewBox="-1000 -1000 2000 2000"><path d="M763 240 L-439 668 L-522 -605 L725 -336 L125 790 L-794 -95 L309 -737 L624 499 L-651 464 L-268 -753 L798 -51 L-168 782 L-705 -376 L555 -576 L402 691 L-775 197 L22 -799 z" fill-rule="evenodd"></path></svg> | p: 17, q: 6 <svg viewBox="-1000 -1000 2000 2000"><path d="M776 192 L-621 503 L-27 -799 L654 459 L-761 245 L263 -755 L444 665 L-798 -46 L518 -609 L174 780 L-728 -331 L703 -381 L-119 790 L-559 -572 L793 -101 L-397 694 L-314 -735 z" fill-rule="evenodd"></path></svg> |
| p: 17, q: 7 <svg viewBox="-1000 -1000 2000 2000"><path d="M755 264 L-781 172 L573 -558 L-193 776 L-243 -761 L608 519 L-790 -121 L736 -313 L-460 653 L47 -798 L379 704 L-693 -398 L799 -26 L-666 443 L332 -727 L99 793 L-502 -622 z" fill-rule="evenodd"></path></svg> | p: 17, q: 8 <svg viewBox="-1000 -1000 2000 2000"><path d="M787 138 L-799 8 L784 -155 L-742 297 L675 -428 L-585 545 L475 -643 L-348 719 L210 -771 L-65 797 L-82 -795 L227 767 L-364 -712 L488 633 L-597 -532 L684 413 L-749 -280 z" fill-rule="evenodd"></path></svg> | I think you know... | ...the drill by now :smile: |



