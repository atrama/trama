---
id: 338
title: The Web as a House
date: 2012-03-06T04:23:28+00:00
author: Anthony
layout: post
guid: http://anthonytrama.com/atblog/?p=338
permalink: /2012/03/06/the-web-as-a-house/
categories:
  - Development
---
JavaScript, jQuery, HTML, CSS, PHP, JSON. People who don&#8217;t work with the web every day, and sadly some who do, usually have a hard time understanding the difference between all the web jargon they come across. I&#8217;ve found it very useful to use the house analogy in the past. It&#8217;s not perfect, but it certainly helps others understand what goes into a website. So the next time your boss or client asks why you can&#8217;t just build your whole website with JavaScript, hold your laughter (for a few minutes) and give them the house analogy.

## HTML: The Bones

The &#8220;bones&#8221; of a house determine how it is laid out and where everything goes. They will also tell you how strong the structure and foundation are. Is it a 1,000 square foot home or a 4,000 square foot home? How many rooms will it have? Where does each area of the house go? You don&#8217;t want the laundry room upstairs near the baby&#8217;s room, do you? Should the kitchen be at the front or back of the house?

The structure of a website is very similar. The process of building a small 1 page site is different from a 10 page site, which is different from a 100 page site. Which is partially why a client shouldn&#8217;t expect an answer to the most common question we hear: &#8220;how much does a website cost?&#8221; And if you&#8217;re the client and hear a flat answer without any consultation or other questions, run fast.

A standard page is made up of individual elements (e.g., <article>, <h1> [heading], <p> [paragraph], <img> [image]). When you craft these together, you end up with the structure of a page.

<div id="attachment_528" style="width: 1776px" class="wp-caption alignnone">
  <a href="http://www.anthonytrama.com/wp-content/uploads/2012/03/Screen-Shot-2013-11-21-at-8.25.24-PM.png"><img class="size-full wp-image-528" alt="The content of this post (left) and the code, with the structural elements in red (right)" src="http://www.anthonytrama.com/wp-content/uploads/2012/03/Screen-Shot-2013-11-21-at-8.25.24-PM.png" width="1766" height="436" srcset="http://www.anthonytrama.com/wp-content/uploads/2012/03/Screen-Shot-2013-11-21-at-8.25.24-PM-300x74.png 300w, http://www.anthonytrama.com/wp-content/uploads/2012/03/Screen-Shot-2013-11-21-at-8.25.24-PM-1024x252.png 1024w, http://www.anthonytrama.com/wp-content/uploads/2012/03/Screen-Shot-2013-11-21-at-8.25.24-PM.png 1766w" sizes="(max-width: 1766px) 100vw, 1766px" /></a>
  
  <p class="wp-caption-text">
    The content of this post (left) and the code, with the structural elements in red (right)
  </p>
</div>

Before any code or color hits a site, most designers usually create wireframes, which are like blueprints for a website. They are plain, single-color, and often hand drawn sketches of the site. Just like architects take flow into account when designing a house, when laying out wireframes, designers need to think of how your users will not just use the site, but the overall narrative from landing on the site to checkout.

By the way, have you ever walked into an open house and had somebody make you look at advertisements from Netflix or Ancestry.com before you get through the entry? That would be stupid right? Think about that next time you consider throwing pop-up advertisements on a site.

You can live in a house with nothing but drywall, studs, and a roof, but it won&#8217;t be pleasant. Similarly, with HTML alone, your site can function, but it will lack some serious curb appeal.

## CSS: The Curb Appeal

CSS (Cascading Style Sheets) are what gives websites their design. It&#8217;s the decorating stage of building your <del>house</del> website. Its the paint, furniture, and flooring; and is really what most users see when they see your site at first. It gives HTML elements their color, size, and shape. <span style="border: 1px solid #aaa; border-radius: .25em;">Borders</span>, <span style="text-shadow: 1px 1px 1px #aaa;">shadows</span>, <span style="color: orange;">colors</span>, <span style="font-weight: bold;">bold fonts</span>, <span style="opacity: .65;">opacities</span>, etc. are all determined by CSS.

<div id="attachment_540" style="width: 660px" class="wp-caption alignnone">
  <a href="http://www.anthonytrama.com/wp-content/uploads/2012/03/Screen-Shot-2013-11-21-at-8.45.25-PM.png"><img class="size-full wp-image-540" alt="A preview of what this page would look like without any CSS. Notice everything still functions and you can still get content you need, even if it looks bland." src="http://www.anthonytrama.com/wp-content/uploads/2012/03/Screen-Shot-2013-11-21-at-8.45.25-PM.png" width="650" height="597" srcset="http://www.anthonytrama.com/wp-content/uploads/2012/03/Screen-Shot-2013-11-21-at-8.45.25-PM-300x275.png 300w, http://www.anthonytrama.com/wp-content/uploads/2012/03/Screen-Shot-2013-11-21-at-8.45.25-PM.png 650w" sizes="(max-width: 650px) 100vw, 650px" /></a>
  
  <p class="wp-caption-text">
    A preview of what this page would look like without any CSS. Notice everything still functions and you can still get content you need, even if it looks bland.
  </p>
</div>

CSS often does little to actually determine structure of the site, but it does determine how it is presented in the browser.

## JavaScript: It&#8217;s Electric

A house is completely livable without electricity; people did it for most of our existence. However, electricity makes it possible to flip a switch and light a room instead of carrying a candle. It turns on the TV, brews our coffee, and powers our dishwashers. Javascript does just that to websites. It tells the user that their password is too weak as they&#8217;re typing it in, creates and animates graphs, makes drag and drop possible on all modern browsers, and makes photos bigger when you click the thumbnail.

JavasScript is a powerful language that can access and change the CSS of a page, edit the HTML and content and, if not used properly, really hinder the user&#8217;s experience on a page. If you&#8217;ve ever landed on a page that won&#8217;t let you escape out of multiple popups (called alerts) or had your experienced ruined by a choppy, slow page, JavaScript was likely to blame. Actually, a bad developer was most likely the one to blame; but they probably used JavaScript. In the same way, you watch your electric bill, watch the amount of JavaScript on your page because it <a title="How One Second Could Cost Amazon $1.6 Billion In Sales" href="http://www.fastcompany.com/1825005/how-one-second-could-cost-amazon-16-billion-sales" target="_blank">may cost you</a> as well.

## PHP: Letting Data Flow

Let me start by saying that you can replace PHP with other server-side languages (e.g., Ruby, Python, C#) for this example. These languages are the most powerful and complex languages and the user never sees any of it. It&#8217;s all done behind the scenes, generally, before and after the user lands on pages. Server-side languages communicate with databases and control the most of the data we interact with on the web today. The reason why you and I can both log into the same bank&#8217;s website and see different data is because the server-side language knows who you are after login and only displays your information on your screen.

This example may not be as strong as the 3 above, but it&#8217;s similar to the sewer system. It&#8217;s a give and take relationship with the grid. Clean water comes in, say in the form of shower water. We interact with it by showering, and the resulting dirty, waste water goes back to the sewer system.

## SEO: Sweat Equity Online

I&#8217;m not going to pretend to be an expert with SEO (Search Engine Optimization). Or pretend that the heading above isn&#8217;t incredibly cheesy.

I know enough to use good practices on the sites I work on, but there are knowledgeable people who know much more than I do about SEO. If you&#8217;re selling a house, there are things that your realtor will have you do to attract more potential buyers through your front door, such as putting in a new lawn, a fresh coat of paint, or new hardwood flooring. Similarly, you can practice good SEO and get visitors to your site from search engines. However, like a real house&#8217;s attractiveness &#8211; the best SEO comes from care and maintenance over time (good content and clean code) and not a few <a title="The Dirty Little Secrets of Search" href="http://www.nytimes.com/2011/02/13/business/13search.html" target="_blank">sneaky tricks</a>.

Oh, and for the last time, there&#8217;s no way to contact Google and ask them to make you the first result.