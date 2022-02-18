# Frontend Mentor - Coding bootcamp testimonials slider solution

This is a solution to the [Coding bootcamp testimonials slider challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/coding-bootcamp-testimonials-slider-4FNyLA8JL). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the component depending on their device's screen size
- Navigate the slider using either their mouse/trackpad or keyboard

### Screenshot

![](./screenshot.jpg)

### Links

- Solution URL: [Add solution URL here](https://github.com/KrzysztofLeczycki/coding-bootcamp-testimonials-slider)
- Live Site URL: [Add live site URL here](https://krzysztofleczycki.github.io/coding-bootcamp-testimonials-slider)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Vanilla Javascript
- Mobile-first workflow

### What I learned

I took this challenge for two reasons: convert the graphic project into a fully functional page's section and create my first js slider, a common feature in modern websites.

The first task in my project was the page structuring and styling its mobile version using static flow.
I used media queries to deploy a wider screens layout based on flexbox. 

In the second step, I wrote the slider functionality. Each slide's image and text is initially turned off: 

```css
.slide-img, .slide-text{
    display: none;
}
```
I declared in js code the index variable connected to the current slide. Clicking the buttons or pressing arrow keys leads to changing the index value. The function showSlide blocks value slower than 0 or higher than slides number and displays slide's elements with the actual index:

```js
const showSlide = () => {
    if (index > slideImg.length - 1){
        index = 0;
    } else if (index < 0){
        index = slideImg.length - 1;
    }

    slideImg[index].style.display = 'block';
    slideText[index].style.display = 'block';
}
```
The function showSlide needs to be invoked regardless of the events handlers due to letting a browser display the initial slide after loading the website.

The last step was adding animations to slides and transitions to the buttons states.
I used GIT while coding.

### Continued development

My short time goal is to improve my fluency in writing JS scripts, use more advanced concepts like AJAX and third parties API and learn React. 

### Useful resources

- [Mozzilla Developers Network](https://developer.mozilla.org/) - I check this pleace each time I have problems or I want to extend my knowledge.
- [W3schools](https://www.w3schools.com/howto/howto_js_slideshow.asp) - This article inspired me to create my slider version.

## Author

- Website - [Krzysztof Łęczycki](https://krzysztofleczycki.github.io/portfolio/)
- Frontend Mentor - [@KrzysztofLeczycki](https://www.frontendmentor.io/profile/KrzysztofLeczycki)
