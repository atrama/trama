---
title: The new site
date: 2016-11-15
author: Anthony
layout: post
permalink: /2016/11/15/the-new-site/
categories:
- Jekyll
- Personal
---
The new site is finally done! It's actually been done for a few months now, but my 11 week old son has sort of thrown a wrench into side projects. If you're not familiar with Jekyll, it's a static site generator. Meaning, instead of having a bunch of layouts and config files that run server-side when the user visits your page (which takes time), you compile everything in your dev environment, then ship it to production. So yes, you have a bunch of HTML files, but you only manage a handful of layouts and Jekyll does the job of compiling all those HTML files before you deploy. And all the server has to do, is spit out plain HTML. No server-side processing required. There were a number of reasons I moved from WordPress to Jekyll, namely:

- There's no database and, thus, nothing to hack.
- It's incredibly easy to get started with.
- In order to really do WordPress right, you need to dedicate yourself to WordPress development. I'd rather focus on JavaScript myself.
- Honestly, saying you use WordPress just sounds dirty now. Unless you happen to be a WordPress developer.
- It's *super* fast (more about that below).

<picture>
  <source srcset="/img/2016_11_site_old.webp" type="image/webp">
  <img src="/img/2016_11_site_old.png" alt="Old Site Network Requests">
</picture>
Looking at my old WordPress site (homepage), you can see that it had a payload of 513KB and took 2.42 seconds to load. Not terrible, but there was certainly room for improvement. It also made 24 requests; partially because the site was about 5 years old and didn't bundle assets the way it could have.

<picture>
  <source srcset="/img/2016_11_site_new.webp" type="image/webp">
  <img src="/img/2016_11_site_new.png" alt="New Site Network Requests">
</picture>
The new site's payload is about 20% the size of the old site and loads in less than half a second. There are half the amount of requests and the content (not including images) is actually ready after less than a quarter of a second! Unlike WordPress, Jekyll does not have a database to look up, so your blog content is there *muuuccchh* faster.

So what else enabled the site to pick up speed? Admittedly, changing the framework took care of a lot, but there are a lot of easy steps anyone can take. And speaking as somebody who looks at a lot of portfolio sites, most developers are not doing these items:

- Bundle assets. I could have gone farther by loading critical CSS in the HTML (and probably will).
- Change images to use `webp` or `svg` and combine these formats with the `<picture>` element and `srcset` attributes.
- Don't let today's trends trap you tomorrow. I'm really excited by the fact that my articles are just plain markdown, which means they're compiled to plain HTML. No nested `div`s to make a parallax or carousel animation in an article. Just content.
- Think about which assets you really needs. Really, this is a blog and portfolio site.
- Add cool features that are actually useful. My next feature? Using the [Notifications API ](https://developer.mozilla.org/en-US/docs/Web/API/Notifications_API/Using_the_Notifications_API) to display notifications when a new post is added.

There are still a lot of changes I want to make. Adding a link to recent work is a big one. So is writing more. But for now, I'm also enjoying coming home and playing with my son, as well as working on the house. So progress might be slow. And I'm totally fine with that.
