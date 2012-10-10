Intro to CSS
========

CSS is performed by a series of selectors and attributes.

     selector { key: value; key: value; key: value }

CSS comments are denoted like this `/* this is a comment */` (similar to comments in PHP, C, or java).

CSS can be included in three ways:

1. The style tag:

     <style type="text/css">
     * { display: none; }
     </style>

2. External style sheets:

> <link rel="stylesheet" type="text/css" href="/path/to/stylesheet.css" />

3. Inline (element specific styles, no selector used):

> <p>This is normal sized</p>
> <p style="font-size: 10em">This is 10x as large.</p>

selecting elements
--------

### CSS selectors

* select all * - matches every element

> * { display: none }
> /* the above line hides all *

* select by tagname - any name without a symbol infront of it matches elements by tagname (eg div, input, p, ul ...)

> div { font-size: 10px; } /* matches every div on the page */

* select by id - The number sign selects elements by id

> \#main-container { margin: 0 auto; }
> /* matches the element with id="main-container */

* select by class

> .purple-text
> /* matches any element with class="purple-text" */

* select by attribute [attr=value]

> [type=text] { background: pink; }
> /* matches all text inputs */

### chaining selectors

Selectors not separated by a space indicate that you should match elements matching all selectors.

> input[type=text].required { font-weight: bold; }
> /* matches all inputs of type=text with class="required" */

selecting descendents
--------

### space

Selectors separated by spaces indicate that you should matches only elements of the second selector conatained by elements matching the first selector.

> \#side-bar li { text-decoration: underline; }
> /* matches all li elements inside of the #side-bar */

### immediate child >

To select only immediate children, the greater than sign is used

> \#side-bar > div { font-weight: bold; }

Works like this:

> <aside id="side-bar">
>   <div>This is matched</div>
>   <form>
>     <div>I am not matched</div>
>   </form>
> </aside>

### pseudo classes

Pseudo classes act like classes, and match elements with specific criteria. The are denoted with a colon

1. :first-child :last-child

> \#side-bar li:first-child { font-weight: bold; }
> \#side-bar li:last-child { text-decoration: underline; }

Works like this:

> <aside id="side-bar">
>   <ul>
>     <li>I am bold</li>
>     <li>I am nothing</li>
>     <li>I am also nothing</li>
>     <li>I am italic</li>
>   </ul>
> </aside>

2. :not(selectors) matches all elements that do not match the criteria. This is a useful shortcut.

> \#side-bar li { color: purple }
> \#side-bar li:not(.visible) { display: none; }

> <aside id="side-bar">
>   <ul>
>
>     <li class="visible">
>       I love my boss!!
>     </li>
>
>     <li class="visible">
>       I love my boss!!
>     </li>
>
>     <li class="visible">
>       I love my boss!!
>     </li>
>
>     <li>
>       I sectretly hate my boss
>     </li>
>
>     <li class="visible">
>       I love my boss!!
>     </li>
>
>   </ul>
> </aside>

### :selected :checked

These are useful on <select> elements and [type=radio] or [type=checkbox] respectively

### :nth-child(n)

A bit more advanced. These will match elements that fit the mathematical expression in n.

> li:nth-child(2n) { display: none; } /* hides even elements */
> li:nth-child(2n+1) { font-weight: bold; } /* bolds odd elements */
> li:not(:nth-child(3n)) { color: purple; } /* purples every non-third element */

### multiple sets of selectors

You can apply the same set of rules to as many selectors as you want by separating sets of selectors by commas:

> ul, ol, h1, h2, h3, h4, h5, h6 { margin: 0; }

Is the same as writting:

> ul { margin: 0; }
> ol { margin: 0; }
> h1 { margin: 0; }
> ...

CSS attributes
--------

Attributes follow the pattern key-colon-value-semicolon, as seen above in many examples.
Attributes can be used to change the display, positioning, font attributes, or box attributes of an element.
We should start with a discussion of units, because math is fun.

### CSS units

* px - number of pixels for a given attribute

> \#side-bar { height: 1000px; }
> /* The side bar is now 1000 pixels tall */

* percent of current container's value

> \#side-bar > * { height: 20% }
> /* a great ide if #side-bar has 5 children! */

* em - ratio of parent container's value

> \#profile-box { font-size: 20px; }
> \#profile-box > p { font-size: .5em } /* font-size of p is now 10px; */
> \#profile-box > h1 { font-size: 1.3em } /* font-size of h1 is now 26px; */

* physical units mm, cm, and in are available, but are buggy and should never be used

### CSS colors

Many CSS attributes can take colors. These can be expressed in 3 ways:

* rgb(#,#,#) tells the color in red, green and blue values. The number is between 0 and 255

> body { color: rgb(15,15,15); }
> /* the font-color for the document is now a dark gray, almost black */

* Hex codes - 3 or 6 hexidecimal characters, 0-9 or a-f (0123456789abcdef). These tell the red,

> body { background-color: #202020 }
> /* the background is now a dark gray */
> /* this is equivalent to rgb(32,32,32) */

> \#side-bar { border: #733 }
> /* the side bar now has a dark red border */
> /* this is equivalent to #773333 */

* rgba(#,#,#,#) - the a is alpha, or % opacity. It is between 0 and 1.

> \#side-bar { background: rgba(255,255,255,.9); }
> /* the side bar now has a white, slightly see-through background */

### font and all of it's marvelous variants!

Font can written as a short hand or as individual attributes:

> font: STYLE VARIANT WEIGHT SIZE/LINE-HEIGHT FAMILY;

or with real values:

> font: italic small-caps bold 10px/20px "Helvetica", arial, sans-serif;

Let's break that down:

> font-style: italic;
> /* can be none or italic */
>
> font-variant: small-caps;
> /* rarely used */
>
> font-weight: bold; 
> /* can be bold or a number like 100, 200, etc. */
>
> font-size: 10px;
> /* You probably can intuit this one. See units section above. */
>
> line-height: 20px;
> /* how much space the line takes up vertically. */
> /* defaults to about 1.2em */
> /* in this case the text will be vertically ceneterd in a line twice the size of the font */
>
> font-family: "Helvetica", Arial, sans-serif;
> /* a list of fonts to use */
> /* if the browser can't find the first, it defaults to the second, etc */
