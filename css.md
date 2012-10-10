Intro to CSS
========

CSS is performed by a series of selectors and attributes.

```css
selector { key: value; key: value; key: value }
```

CSS comments are denoted like this `/* this is a comment */` (similar to comments in PHP, C, or java).

CSS can be included in three ways:

1. The style tag:

```html
<style type="text/css">
* { display: none; }
</style>
```

2. External style sheets:

```css
<link rel="stylesheet" type="text/css" href="/path/to/stylesheet.css" />
```

3. Inline (element specific styles, no selector used):

```html
<p>This is normal sized</p>
<p style="font-size: 10em">This is 10x as large.</p>
```

selecting elements
--------

### CSS selectors

* select all * - matches every element

```css
* { display: none }
/* the above line hides all *
```

* select by tagname - any name without a symbol infront of it matches elements by tagname (eg div, input, p, ul ...)

```css
div { font-size: 10px; } /* matches every div on the page */
```

* select by id - The number sign selects elements by id

```css
#main-container { margin: 0 auto; }
/* matches the element with id="main-container */
```

* select by class

```css
.purple-text
/* matches any element with class="purple-text" */
```

* select by attribute [attr=value]

```css
[type=text] { background: pink; }
/* matches all text inputs */
```

### chaining selectors

Selectors not separated by a space indicate that you should match elements matching all selectors.

```css
input[type=text].required { font-weight: bold; }
/* matches all inputs of type=text with class="required" */
```

selecting descendents
--------

### space

Selectors separated by spaces indicate that you should matches only elements of the second selector conatained by elements matching the first selector.

```css
#side-bar li { text-decoration: underline; }
/* matches all li elements inside of the #side-bar */
```

### immediate child >

To select only immediate children, the greater than sign is used

```css
#side-bar > div { font-weight: bold; }
```

Works like this:

```html
<aside id="side-bar">
  <div>This is matched</div>
  <form>
    <div>I am not matched</div>
  </form>
</aside>
```

### pseudo classes

Pseudo classes act like classes, and match elements with specific criteria. The are denoted with a colon

1. :first-child :last-child

```css
#side-bar li:first-child { font-weight: bold; }
#side-bar li:last-child { text-decoration: underline; }
```

Works like this:

```html
<aside id="side-bar">
  <ul>
    <li>I am bold</li>
    <li>I am nothing</li>
    <li>I am also nothing</li>
    <li>I am italic</li>
  </ul>
</aside>
```

2. :not(selectors) matches all elements that do not match the criteria. This is a useful shortcut.

```css
#side-bar li { color: purple }
#side-bar li:not(.visible) { display: none; }
```

```html
<aside id="side-bar">
  <ul>

    <li class="visible">
      I love my boss!!
    </li>

    <li class="visible">
      I love my boss!!
    </li>

    <li class="visible">
      I love my boss!!
    </li>

    <li>
      I sectretly hate my boss
    </li>

    <li class="visible">
      I love my boss!!
    </li>

  </ul>
</aside>
```

### :selected :checked

These are useful on <select> elements and [type=radio] or [type=checkbox] respectively

### :nth-child(n)

A bit more advanced. These will match elements that fit the mathematical expression in n.

```css
li:nth-child(2n) { display: none; } /* hides even elements */
li:nth-child(2n+1) { font-weight: bold; } /* bolds odd elements */
li:not(:nth-child(3n)) { color: purple; } /* purples every non-third element */
```

### multiple sets of selectors

You can apply the same set of rules to as many selectors as you want by separating sets of selectors by commas:

```css
ul, ol, h1, h2, h3, h4, h5, h6 { margin: 0; }
```

Is the same as writting:

```css
ul { margin: 0; }
ol { margin: 0; }
h1 { margin: 0; }
...
```

CSS attributes
--------

Attributes follow the pattern key-colon-value-semicolon, as seen above in many examples.
Attributes can be used to change the display, positioning, font attributes, or box attributes of an element.
We should start with a discussion of units, because math is fun.

### CSS units

* px - number of pixels for a given attribute

```css
#side-bar { height: 1000px; }
/* The side bar is now 1000 pixels tall */
```

* percent of current container's value

```css
#side-bar > * { height: 20% }
/* a great ide if #side-bar has 5 children! */
```

* em - ratio of parent container's value

```css
#profile-box { font-size: 20px; }
#profile-box > p { font-size: .5em } /* font-size of p is now 10px; */
#profile-box > h1 { font-size: 1.3em } /* font-size of h1 is now 26px; */
```

* physical units mm, cm, and in are available, but are buggy and should never be used

### CSS colors

Many CSS attributes can take colors. These can be expressed in 3 ways:

* rgb(#,#,#) tells the color in red, green and blue values. The number is between 0 and 255

```css
body { color: rgb(15,15,15); }
/* the font-color for the document is now a dark gray, almost black */
```

* Hex codes - 3 or 6 hexidecimal characters, 0-9 or a-f (0123456789abcdef). These tell the red,

```css
body { background-color: #202020 }
/* the background is now a dark gray */
/* this is equivalent to rgb(32,32,32) */
```

```css
#side-bar { border: #733 }
/* the side bar now has a dark red border */
/* this is equivalent to #773333 */
```

* rgba(#,#,#,#) - the a is alpha, or % opacity. It is between 0 and 1.

```css
#side-bar { background: rgba(255,255,255,.9); }
/* the side bar now has a white, slightly see-through background */
```

### font and all of it's marvelous variants!

Font can written as a short hand or as individual attributes:

```css
font: STYLE VARIANT WEIGHT SIZE/LINE-HEIGHT FAMILY;
```

or with real values:

```css
font: italic small-caps bold 10px/20px "Helvetica", arial, sans-serif;
```

Let's break that down:

```css
font-style: italic;
/* can be none or italic */

font-variant: small-caps;
/* rarely used */

font-weight: bold; 
/* can be bold or a number like 100, 200, etc. */

font-size: 10px;
/* You probably can intuit this one. See units section above. */

line-height: 20px;
/* how much space the line takes up vertically. */
/* defaults to about 1.2em */
/* in this case the text will be vertically ceneterd in a line twice the size of the font */

font-family: "Helvetica", Arial, sans-serif;
/* a list of fonts to use */
/* if the browser can't find the first, it defaults to the second, etc */
```

The box model
--------

Googling the box model will get you a good image. I'm not going to bother reproducing one here.

### The box

Any element with `display: block` or `display: inline-block` is considered a block. Inline-block elements will not break the line, block elements will.  It has several layers, from outside to in, they are:

1. margin: the spacing between the border and neighboring elements.

2. border: a layer between the margin and padding. Can have color and style.

3. padding: the distance between the border and the content. The background will be shown in the padding.

4. content: the actual content shown. This will be set by the width and the height properties. If not set the content can be as wide as the parent content and as heigh as necessary.

### Assigning size

Size can be in px, em, %, or any other units. Size is asssigned in the order of top, right, bottom, left. If a size is missing, it uses the next logical size:

```css
.some-div {
  padding: 10px; /* assigns all 4 sides */
  padding: 10px 5px; /* top and bottom are 10px, left and right are 5px */
  padding: 10px 5px 0; /* same as above with zero padding bottom */
  padding: 10px 5px 0 25px; /* right is still 5, left is 25px; */
  padding-left: 0; /* only the left padding is changed */
}
```

Note: each `padding:` declaration overwrites the last (only the bottom most one counts).  However `padding-left` only overrides the left padding.

## fun with borders

Borders require a style, width and color. With CSS3 the color can be an image or a gradient (fun, fun, fun!) Borders, much like fonts, have a shorthand:

```css
border: 10px black solid;
```

is equivalent to:

```css
border-width: 10px; /* or 10px 10px 10px 10px */
border-style: solid;
border-color: black;
```

Borders also can have `border-radius`, which rounds the corners of the border.

Positioning
--------

### Static

One of the more difficult css concepts to understand. Elements are naturally set to `position: static`, meaning that they are positioned one after another, taking up space and landing logically where they will. Block elements are positioned vertically, inline and inline-block elements go from left to right like text in english.

### Fixed

A fixed element is positioned relative to the browser window. Scrolling will not move this element. The element will not take up space (it will not displace other elements). The following rules will position an element to the top right of the window:

```css
position: fixed;
top: 0;
right: 0;
```

The following rules will position an element at the bottom left of the window. There will be 10 pixels between the element and the window, the bottom 10 pixels will be cut off of the screen.

```css
position: fixed;
bottom: -10px;
left: 10px;
```

### Relative

If an element has `position: relative;`, it is positioned relative to it's static position. It still takes up the same space, but now can be moved with left, right, top, bottom:

```css
position: relative; /* at this point, nothing has changed */
top: -5px; /* move the element 5 pixels up */
left: 10px; /* move the element 10 pixels to the right (from the left border)
```

### Absolute

Here's where it gets tricky. Absolute elements are positioned "relative to the closest relative element". The body element is considered `position: relative;`, so by default `position: absolute;` works the same way as `position: fixed`, but using the body instead of the window. Like fixed elements, absolute elements take up no space.

```html
<body>
  <div id="wrapper">

    <div style="position: absolute; bottom: 0; right: 0;">
      I'm at the bottom of the body!
    </div>

    <div id="side-bar" style="position: relative;">
      <div style="position: absolute; top: 20px;">
        I'm 20px from the top of the sidebar!
      </div>
    </div>

  </div>
</body>

```

Backgrounds
--------

Backgrounds can be images or colors. Backgrounds also have a shorthand:

```css
background: url(/images/background.jpeg) center black repeat-x;
```

Is equivalent to:

```css
background-image: url(/images/background.jpeg); /* sets the image */
background-position: center; /* centers it in the page */
background-repeat: repeat-x; /* the background will only repeat horizontally */
background-color: black; /* any place without the image will be black */
```

