---
id: 576
title: 3 Easy Features that Enhance the User Experience
date: 2015-03-12T04:33:39+00:00
author: Anthony
layout: post
guid: http://www.anthonytrama.com/?p=576
permalink: /2015/03/12/3-easy-features-that-enhance-the-user-experience/
categories:
  - Development
  - Mobile
---

<script type="text/javascript" src="https://assets.codepen.io/assets/embed/ei.js" async=""></script>

Too many websites focus on looks and trends and miss the mark of good user experience. Fancy animations, hero images, and carousels will all go way of flash, splash pages, and 10px font one day. Making the site easy to use, fast, and intuitive has never gone out of style.

No doubt, great design enhances the experience and makes the site easier to use, but there are too many features that are here today and ready to be use that are virtually ignored by the sites that could truly benefit from them the most. And the sad part is, it really doesn&#8217;t take a lot of effort to start using them.

## Web Storage

I use a lot of sites that are necessary, require frequent visits, and I frankly do not want to spend time on them. I visit my credit card and bank website all the time; it&#8217;s not because I have fun on those sites. Every time I sign in, I have to go through the same steps to get to the same information. Want to sort this month&#8217;s transactions by amount spent? No problem, just find the dropdowns and change them&#8230;every&#8230;single&#8230;time&#8230;you&#8230;visit.

&#8230;Or give the user the choice, but remember their last or most frequent choices. But you&#8217;re not a back-end developer? Perfect, web storage (sessionStorage, localStorage, indexedDB) are great at doing this!

<p class="codepen" data-height="268" data-theme-id="0" data-slug-hash="azqqPd" data-default-tab="result" data-user="atrama">
  See the Pen <a href="https://codepen.io/atrama/pen/azqqPd/">localStorage Dropdown menu demo</a> by Anthony Trama (<a href="https://codepen.io/atrama">@atrama</a>) on <a href="https://codepen.io">CodePen</a>.
</p>

See how simple that is? It can be as small as a few lines of code. Don&#8217;t you wish your bank remembered this for you and you could see everything at a glance without navigating or changing dropdowns every time?

Support: [Almost every <del>mobile</del> browser and even IE8](http://caniuse.com/#search=web%20storage) (not a typo!).

## Geolocation

I recently booked a trip to Las Vegas to, ahem, only watch March Madness for fun and never walk into the sportsbook. Living in San Diego, I (predictably) wanted to set San Diego as my departure city. Depending on the airline&#8217;s website I used, I either had to type the name or select from a drop down list of _all_ of their cities. Yes, every city they fly out of. A few lines of JavaScript can detect a user&#8217;s location. From there, it really isn&#8217;t very hard to find the nearest departure city and make the experience 1,304% better. Yes, I did the math.

Don&#8217;t forget to allow access when you&#8217;re browser prompts you. <ins>Some browsers now require https to enable geolocation. Open this pen in codepen and change to https to see the feature or view the demos on <a href="https://developer.mozilla.org/en-US/docs/Web/API/Geolocation/Using_geolocation">MDN</a></ins>

<p class="codepen" data-height="268" data-theme-id="0" data-slug-hash="gbdLwE" data-default-tab="result" data-user="atrama">
  See the Pen <a href="https://codepen.io/atrama/pen/gbdLwE/">gbdLwE</a> by Anthony Trama (<a href="https://codepen.io/atrama">@atrama</a>) on <a href="https://codepen.io">CodePen</a>.
</p>

True, it&#8217;s not the fastest feature, but there are options to make it faster, more/less precise, and you can check the location before the user focuses on the input to make it feel faster. Also, I know geolocation is used on the web today, but it really isn&#8217;t used in nearly as many places as it should be.

Support: [Almost every <del>mobile</del> browser and even IE9](http://caniuse.com/#feat=geolocation).

## Using the right input type

As a developer, guy always looking for ways to optimize time, and somebody with fat fingers who still struggles with a touch keyboard, this is one pattern that drives me crazy. It&#8217;s so easy to set the pattern or type attribute on an input tag to email, tel (phone), date, etc., which triggers the appropriate keyboard. And if your website&#8217;s doctype isn&#8217;t HTML5 (seriously though, it&#8217;s 2015), it doesn&#8217;t matter. The browser will pick it up if it supports the input type. If not, it will just render as text.

How many custom datepickers have you enjoyed using on your phone? For me, it&#8217;s none. The date input type uses the OS datepicker (i.e.: the spinners in iOS). Email and tel give you the right keyboard so you don&#8217;t have to switch between letters, symbols, and numbers). There  are a lot more out there, but changing just a couple would probably really improve most forms out there today.

<div id="attachment_598" style="width: 179px" class="wp-caption alignnone">
  <a href="http://www.anthonytrama.com/wp-content/uploads/2015/03/IMG_3969.png"><img class="size-medium wp-image-598" alt="screenshot of iOS 8 with a text input." src="http://www.anthonytrama.com/wp-content/uploads/2015/03/IMG_3969-169x300.png" width="169" height="300" srcset="http://www.anthonytrama.com/wp-content/uploads/2015/03/IMG_3969-169x300.png 169w, http://www.anthonytrama.com/wp-content/uploads/2015/03/IMG_3969.png 640w" sizes="(max-width: 169px) 100vw, 169px" /></a>

  <p class="wp-caption-text">
    iOS 8 with a text input.
  </p>
</div>

<div id="attachment_597" style="width: 179px" class="wp-caption alignnone">
  <a href="http://www.anthonytrama.com/wp-content/uploads/2015/03/IMG_3970.png"><img class="size-medium wp-image-597" alt="screenshot of iOS 8 with an email input." src="http://www.anthonytrama.com/wp-content/uploads/2015/03/IMG_3970-169x300.png" width="169" height="300" srcset="http://www.anthonytrama.com/wp-content/uploads/2015/03/IMG_3970-169x300.png 169w, http://www.anthonytrama.com/wp-content/uploads/2015/03/IMG_3970.png 640w" sizes="(max-width: 169px) 100vw, 169px" /></a>

  <p class="wp-caption-text">
    iOS 8 with an email input. Note, the @ symbol and &#8220;.&#8221; &#8211; it gets even better with number and tel inputs types
  </p>
</div>

<p data-height="268" data-theme-id="0" data-slug-hash="YPJxbr" data-default-tab="result" data-user="atrama" class='codepen'>
  See the Pen <a href='https://codepen.io/atrama/pen/YPJxbr/'>YPJxbr</a> by Anthony Trama (<a href='https://codepen.io/atrama'>@atrama</a>) on <a href='https://codepen.io'>CodePen</a>.
</p>



Support: Depends on the input type, but [almost all modern mobile browsers and desktop browsers updated in the last 3 years](http://caniuse.com/#feat=forms).

## Wrapping Up

No, every website does not need all of these. Yes, it would look stupid to ask for the user&#8217;s location on your little blog (uh-oh). But think of the common sites you use where you need to enter a location, use different input types, or would just find it useful to have your preference remembered. Chances are, a lot of them don&#8217;t use these features.

And that, is where we&#8217;re all being robbed of a great experience. Apps have used these features for a long time, it&#8217;s time for HTML and JavaScript developers to catch up if they ever want to be seen on par with native apps.
