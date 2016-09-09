# Codher.css Animation Workshop
Originally run on September 10th 2016

## Contents
1. Introduction
2. Recommended Software
3. HTML + CSS + JS Recap
4. CSS Transitions
5. CSS Keyframe Animations
6. Resources
7. Acknowledgements

## Introduction

Welcome to Codher's CSS animation workshop! Today we will learn the basics of css transitions and @keyframes animations.

We'll go through the examples together and later you should try to solve the exercises with the help of your mentor (ask them any questions you might have, don't be shy!). Take a peek at the suggested solution once you're done and see what you could've done differently.

Happy coding, have fun!

## Recommended Software

You can use whichever code editor you prefer. But we'll be using [Atom](http://www.atom.io) with the [atom-live-server](https://atom.io/packages/atom-live-server) plugin.

## HTML + CSS + JS Recap

Websites are made of three main components. HTML, CSS and JavaScript

- HTML tells the browser what to display
- CSS tells the browser how to display it
- JavaScript tells the browser how to interact with it

To communicate between the three technologies you can use clases and ids. They are declared as attributes on HTML elements, i.e. `<element id="my-id" class="a-class another-class"></element>`. In CSS and JavaScript they are words represented by `.a-class` for classes and `#my-id` for ids.

In this workshop we'll focus on css. Stylesheets are used to define how html elements will look like on the website by declaring a selector (an html element type, class or id) and assigning values to some of their properties, for example:

```
.my-class {
  background: #00f; /* Will make the background blue */
  height: 100px; /* Will make sure the element has a height of 100px */
  border: 1px solid #f00; /* Will add a red, continuous border that is 1px wide around the element */
  font-family: sans-serif; /* Will make sure that any text inside the elements of the class .my-class is written using a sans-serif font */
  color: #fff; /* Will make the text white */s
}
```

There are lots of different css properties, and their interactions take a long time to master. But you'll only learn by applying them, so let's get our hands dirty.

## CSS Transitions

Transitions are used when animating a change in css properties. They allow us to show a gradual change in state rather than an immediate one.

They are declared by adding a `transition` property to any css selector which takes a comma-separated list of values of the type `property duration(in seconds)`. For example

```
.my-class-with-transition {
  height: 100px;
  width: 100px;
  background-color: blue;
  transition: width 1s, background 2s;
}

.my-class-with-transition:hover {
  width: 300px;
  background-color: red;
}
```

The above will make elements with class `.my-class-with-transition` grow and change their background color whenever the mouse is placed above them.

## CSS Keyframe Animations

`@keyframes` animations are used when an element's properties will change through time.

CSS animations are created in two steps. First we need to define the animation using `@keyframes animation_name {}` like this:

```
@keyframes bounce {
  from { transform: translateY(0); }
  to   { transform: translateY(-20px); }
}
```

Then we need to add the animation to any element in our website. We do this with the `animation` property in css.
```
.my-class-with-animation {
  animation-name: bounce; /* The name we defined in the @keyframe declaration */
  animation-duration: 0.1s; /* How long should each iteration of the animation last */
  animation-timing-function: linear; /* ease|ease-in|ease-out|ease-in-out|linear */
  animation-delay: 0s; /* How long to wait before starting the animation */
  animation-iteration-count: infinite; /* how many times to repeat the animation */
  animation-direction: alternate; /* normal|reverse|alternate|reverse-alternate */
  animation-fill-mode: none; /* Apply states before and after animating none|both|forwards|backwards */
  animation-play-state: running; /* running|paused */ß
}
```

You don't need to set all the `animation-` properties for every class, most of them will have default values.

You can add many animations to the same class separating the values with commas, just like we did with the transitions.

## Resources
- [List of css properties that can be animated](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_animated_properties)

## Acknowledgements
We ❤︎ the open source and creative commons communities. Thanks to these awesome people for opening their creativity for others to use.
- Character sprites by https://openclipart.org/detail/215080/retro-character-sprite-sheet
- Super cool misty desert background by http://bevouliin.com/
- Konami.js by https://github.com/snaptortoise/konami-js
