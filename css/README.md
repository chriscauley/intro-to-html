Intro to CSS
========

### How to use this file

Save the source code of this repositiory (by clicking the zip button near the top of the page) and extract it to your desktop. Open the index.html file in a chrome browser (by right clicking it and selecting open with... chrome) and then open the style.css file in a text editor (eg notepad++). Then open http://www.cssheaven.org/preview/cleanred/  in another chrome window, which is the site I stole the html file from (please don't sue!). The goal of this class is to make the dummy file look similar to the example.

<br><br>

### The basics

CSS is performed by a series of rules. Each rule consists of selectors and styles, where the styles are contained in braces like `selectors { styles }`. Each style is a key pair and each rule can have as many styles as needed. Styles are separated with semicolons, and keys are matched to values using colons.

```css
selector {
  key: value;
  key: value;
  key: value;
}
```

CSS is "white space agnostic", meaning the line breaks and spaces do not matter. Code is separated into rules, styles, keys and values using the syntax characters (braces, colons and semicolons). 

CSS comments are denoted like this `/* this is a comment */` (similar to comments in PHP, C, or java).

CSS can be included in an html document in three ways:

* The `<style>` tag inserts rules directly into an html document. Everything between `<style>` and `</style>` is no longer html. It is considered css by the browser.

```html
<style type="text/css">
* { display: none; }
</style>
```

* **External style sheets** tell the browser "look up the url at this href and insert it like you would a style tag". This is no different than pasting the contents of the stylesheet inside ofa style tag.

```css
<link rel="stylesheet" type="text/css" href="/path/to/stylesheet.css" />
```

* **Inline styles** set the style of an individual element. This is generally avoided on the finished product because it makes for sloppy html and inefficient styles.

```html
<p>This is normal sized</p>
<p style="font-size: 10em">This is 10x as large.</p>
```

Selecting Elements
========

### CSS selectors

* **select all** - The asterisk character `*` matches every element (rarely used)

```css
* { outline: 1px solid black; }
/* the above line hides all *
```

This is useful for seeing where elements are and how they line up on the page.

<br><br>

* **select by tagname** - any name without a symbol infront of it matches elements by tagname (eg div, input, p, ul ... also rarely used)

```css
div { font-size: 10px; } /* matches every div on the page */
```

Typically a style sheet will start by setting a few default font properties by selecting the body. Font properties are "inherited", meaning that if an element does not explicitly have a font, it will default to the font of its parent, its parents parent, and so on. In the files provided by the course material there is a folder called css containing a stylesheet "style.css" and an html document called "index.html". Add this to "style.css", save, and open the html file in a browser.

```css
body {
   font-size: 12px;
   font-family: Arial;
}
```

<br><br>

* select by id - The number sign selects elements by id. Maybe we want all of the text inside `id="mainnav"` to be 2px smaller than the rest of the body. We do this by adding the following to "style.css".

```css
#mainnav {
  font-size: 10px;
}
/* matches the element with id="mainnav" */
```

<br><br>

* select by class - The period or "dot" selects all elements of a given class. Classes set off an element as belonging to a class or set of similar elements. In index.html we see `class="current"` in the nav. It's not a specific element, so we don't use an id. It is the current nav element, which is subject to change.

```css
.current {
  font-weight: bold;
}
/* matches any element with class="current" */
```

Additionally there are many articles with `class="post"`. If we want the font-family to be Times we can change it like:

```css
.post {
  font-family: Times;
}
```

<br><br>

* select by attribute [attr=value] - alternately we could have done the same thing by selecting the class directly. Note that this matches then entire class attribute. This is mostly used to select inputs of a specific type.

```css
[type=text] {
  background: pink;
}
/* matches all text inputs */

[class=article] {
  background: pink;
}
```

<br><br>

### Chaining Selectors

Selectors not separated by a space indicate that you should match elements matching all selectors.

```css
input[type=text].required {
  border: red;
}
/* matches all inputs of type=text with class="required" */
```

<br><br>

### multiple sets of selectors

You can apply the same set of rules to as many selectors as you want by separating sets of selectors by commas:

```css
body, ul, ol, h1, h2, h3, h4, h5, h6 { margin: 0; }
```

Is the same as writting:

```css
body { margin: 0; }
ul { margin: 0; }
ol { margin: 0; }
h1 { margin: 0; }
...
```

<br><br>

Selecting Descendents
========

### space

Selectors separated by spaces indicate that you should matches only elements of the second selector conatained by elements matching the first selector.

```css
#sidebar li { text-decoration: underline; }
/* matches all li elements inside of the #sidebar */
```

<br><br>

### immediate child >

To select only immediate children, the greater than sign is used

```css
#sidebar > div {
  outline: black 1px solid;
}
```

Works like this:

```html
<aside id="sidebar">
  <div>This is matched</div>
  <form>
    <div>I am not matched</div>
  </form>
</aside>
```

We can use this to do one of my favorite debugging tricks. The following code will set the background of the html elements to white, light gray, etc. depending on whether it is body's child, grandchild, etc.

```css
body > * {
  border: 10px green solid;
}
body > * > * {
  border: 10px pink solid;
}
body > * > * > *{
  border: 10px red solid;
}
body > * > * > * > * {
  border: 10px black solid;
}
```
<br><br>

### pseudo classes

Pseudo classes act like classes, and match elements with specific criteria. The are denoted with a colon.

* `:first-child` and `:last-child`

```css
#sidebar li:first-child { font-weight: bold; }
#sidebar li:last-child { font-style: italic; }
```

Works like this:

```html
<aside id="sidebar">
  <ul>
    <li>I am bold</li>
    <li>I am nothing</li>
    <li>I am also nothing</li>
    <li>I am italic</li>
  </ul>
</aside>
```

<br><br>

* `:not(selectors)` matches all elements that do not match the criteria. This is a useful shortcut.

```css
#sidebar li { color: purple }
#sidebar li:not(.visible) { display: none; }
```

```html
<aside id="sidebar">
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

<br><br>

* `:hover` selects an element that is hovered over.

```css
div:hover {
  background: pink;
}
```

<!--### :selected :checked

These are useful on <select> elements and [type=radio] or [type=checkbox] respectively

### :nth-child(n)

A bit more advanced. These will match elements that fit the mathematical expression in n.

```css
li:nth-child(2n) { display: none; } /* hides even elements */
li:nth-child(2n+1) { font-weight: bold; } /* bolds odd elements */
li:not(:nth-child(3n)) { color: purple; } /* purples every non-third element */
```
-->

<br><br>

CSS attributes
========

Attributes follow the pattern key-colon-value-semicolon, as seen above in many examples.
Attributes can be used to change the display, positioning, font attributes, or box attributes of an element.
We should start with a discussion of units, because math is fun.

### CSS units

* px - number of pixels for a given attribute

```css
#sidebar { height: 1000px; }
/* The side bar is now 1000 pixels tall */
```

* percent of current container's value

```css
#sidebar > * { height: 20% }
/* a great ide if #sidebar has 5 children! */
```

* em - ratio of parent container's value

```css
#profile-box { font-size: 20px; }
#profile-box > p { font-size: .5em } /* font-size of p is now 10px; */
#profile-box > h1 { font-size: 1.3em } /* font-size of h1 is now 26px; */
```

* physical units mm, cm, and in are available, but are buggy and should never be used

<br><br>

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
#sidebar { border: #733 }
/* the side bar now has a dark red border */
/* this is equivalent to #773333 */
```

* rgba(#,#,#,#) - the a is alpha channel or opacity of the collor. It is between 0 and 1.

```css
#sidebar { background: rgba(255,255,255,.9); }
/* the side bar now has a white, slightly see-through background */
```

<br><br>

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
========

Googling the box model will get you a good image with labels. In the css folder there is also a file called "boxmodel.html" that you can use to play with this.

### The box

Any element with `display: block` or `display: inline-block` or `float: left;` or `float: right` is considered a block. Inline-block elements will not break the line, block elements will.  It has several layers, from outside to in, they are:

1. margin: the spacing between the border and neighboring elements. (pink in the example)

2. border: a layer between the margin and padding. Can have color and style. (black)

3. padding: the distance between the border and the content. The background will be shown in the padding. (blue)

4. content: the actual content shown. This will be set by the width and the height properties. If not set the content can be as wide as the parent content and as heigh as necessary. (green)

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
========

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

    <div id="sidebar" style="position: relative;">
      <div style="position: absolute; top: 20px;">
        I'm 20px from the top of the sidebar!
      </div>
    </div>

  </div>
</body>

```

Backgrounds
========

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

