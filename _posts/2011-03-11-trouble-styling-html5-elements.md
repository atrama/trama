---
id: 295
title: Trouble Styling HTML5 elements?
date: 2011-03-11T06:02:02+00:00
author: Anthony
layout: post
guid: http://anthonytrama.com/atblog/?p=295
permalink: /2011/03/11/trouble-styling-html5-elements/
categories:
  - Development
tags:
  - CSS
  - HTML5
  - Troubleshooting
---
### The Problem

I was editing the CSS of a SECTION element in a WordPress theme that was supposed to be HTML5-ready the other day and couldn&#8217;t get the changes to appear. Convinced that I must have misspelled the class name somewhere, I spell checked and went on a copy/paste frenzy. Still no luck.

### The Solution

But luckily, once I found the fix, it was easy. HTML5 elements must have their display property set to block. Just add the following snippet toward the top of your CSS file (taken from the <a href="http://html5boilerplate.com" target="_blank">HTML5 Boilerplate</a>):

`article, aside, details, figcaption, figure, footer, header, hgroup, menu, nav, section {display: block;}`

### But Wait. Our Good Friend, Internet Explorer isn&#8217;t Done Yet

If you (or your theme) haven&#8217;t done it already, you&#8217;ll need to add some JavaScript so you can style your elements. Otherwise IE won&#8217;t know these elements exist.

`document.createElement('article');<br />
document.createElement('header');<br />
document.createElement('section');<br />
etc..`