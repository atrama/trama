---
title: The Divine Comedy of Asynchronous JavaScript
date: 2018-02-08
author: Anthony
layout: post
permalink: /2018/02/08/devine-comedy-of-asynchronous-javascript
categories:
  - JavaScript
image: <a title="Gustave Doré - Dante Alighieri - purgatorio - Plate 9 (Canto III - Charon), via Wikimedia Commons" href="https://upload.wikimedia.org/wikipedia/commons/3/32/Gustave_Dor%C3%A9_-_Dante_Alighieri_-_Inferno_-_Plate_9_%28Canto_III_-_Charon%29.jpg"><img alt="Gustave Doré - Dante Alighieri - purgatorio - Plate 9 (Canto III - Charon)" src="img/articles/2018/02/dante.jpg"/></a>
imagesrc: /img/articles/2018/02/dante
imagealt: Gustave Doré - Dante Alighieri - purgatorio - Plate 9 (Canto III - Charon)
---

When I was in [college](https://www.ucsb.edu), I took an entire class dedicated to the <cite>Divine Comedy</cite>. I don't remember very much about it, other than I had little desire to read it and the professor had a thick Italian accent; both of which resulted in this being all that I remember about the book. That, and it had something to do with Dante traveling through hell, purgatory, and eventually, Heaven. So come with me, as we travel through the hell, purgatory, and Heaven of asynchronous JavaScript.

## What do I Mean by Asynchronous JavaScript?
Asynchronous programming allows different events to occur independently of the flow in the main program. On websites, this means that different events can occur that update state with user input, refresh a list while the user does something else on the page, or check properties of different objects, all without blocking each other.

## The Two Circles of Callback Hell (Inferno)

<figure>
  <picture>
    <source srcset="/img/articles/2018/02/infernoLg.webp" media="(min-width: 1400px)" type="image/webp" >
    <source srcset="/img/articles/2018/02/infernoLg.jpg" media="(min-width: 1400px)" >
    <source srcset="/img/articles/2018/02/infernoSm.webp" media="(min-width: 701px)" type="image/webp" >
    <source srcset="/img/articles/2018/02/infernoSm.jpg" media="(min-width: 701px)" >
    <source srcset="/img/articles/2018/02/inferno.webp" type="image/webp">
    <img src="/img/articles/2018/02/inferno.jpg" alt="Hoarders and Wasters">
  </picture>
  <figcaption>Gustave Doré's: The hoarders and wasters. "For all the gold that is beneath the moon, / Or ever has been, of these weary souls / Could never make a single one reponse." <a href="https://en.wikipedia.org/wiki/File:Gustave_Dor%C3%A9_-_Dante_Alighieri_-_Inferno_-_Plate_22_(Canto_VII_-_Hoarders_and_Waster.jpg">Wikimedia</a></figcaption>
</figure>


Let me get this out there right off the bat: callbacks are not technically asynchronous. They are used to synchronously order functions that call asynchronous functions. Like do thing A, then make ajax request B, then do thing C, then do thing D. Also, I am not using actual callbacks in every example, but instead what I have seen developers do in the wild. There are three levels of Callback Hell, so let's dive into the deepest level.

### The Third Circle
In this example, there are four functions. `compileAll()` simply returns the result of `getThingOne`, `getThingTwo`, and `getThingThree`. Easy enough. Except `getThingTwo` is asynchronous and must wait on `setTimeout` before returning a value, similar to making a network request (`setTimeout` is used in place of network requests for this entire article). 

This is not an example of a true callback, but it is a race condition that happens too often and you can remediate this with a promise. The issue here is that `compileAll` doesn't know to wait for `getThingTwo`, so it just prints the result before `getThingTwo` has finished because it has no way to know when `getThingTwo` finishes. Hence, the result is `Chuck Noll, undefined, Mike Tomlin`. Check out the example below.

<p data-height="265" data-theme-id="0" data-slug-hash="Xgjmgz" data-default-tab="result" data-user="atrama" data-embed-version="2" data-pen-title="Callback Hell 1" class="codepen">See the Pen <a href="https://codepen.io/atrama/pen/Xgjmgz/">Callback Hell 1</a> by Anthony Trama (<a href="https://codepen.io/atrama">@atrama</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script src="https://production-assets.codepen.io/assets/embed/ei.js"></script>

This method works if all your code is synchronous. This would obviously not be a viable solution if you had asynchronous functions, because you can never guarantee that you are getting the correct result from each function.

**The rest of the examples will have code snippets, but a link to a CodePen, so you can experiment and see the result of each one.**

### The Second Circle
The previous circle was pretty rough, but we're still stuck in Callback Hell as you can tell by the example below and the fact that you can hear <cite>American Woman</cite> by Lenny Kravitz playing in the background.

In this example, we're kicking everything off with `getThingOne()`, which then has to have the logic inside of it to explicitly call `getThingTwo()` and pass the result of `getThingOne()` into it and so on down the line. This means that you can never separate these functions. Anytime you want to `getThingOne()`, you have to accept the chain reaction of events and results that come with it.

<script src="https://gist.github.com/atrama/f512564ce2b73ba7c72f2c1d12f2e052.js"></script>
[View the demo on CodePen](https://codepen.io/atrama/pen/pwEjVP)

There is no way to just `getThingOne()` and simply return the result of `names[0]` (`Chuck Noll`). Promises, on the other hand, allow you to do just that.

### The First Circle

<script src="https://gist.github.com/atrama/5169d5c2171f221d97d02ba0fee45670.js"></script>
[View the demo on CodePen](https://codepen.io/atrama/pen/vWqjrv)

This is really the only **true** example of a callback here. It's very similar to the previous example except for a couple things:

1. Callbacks are passed as named functions, so `getThingOne` isn't directly tied to `getThingTwo` which isn't directly tied to `getThingThree`.
1. You can optionally call the callback only if it's passed `if(typeof callback === 'function){return callback()}, allowing you to call `getThingOne` without needing to call `getThingTwo`.
1. Callbacks are not named inside of each respective function, so you could do something like `getThingTwo([1,2,3], getThingOne)`.

Callbacks are not necessarily bad patterns in and of themselves, but they are not the right tool for the job when you are dealing with asynchronous functions that can be called concurrently.

## The 4 Terraces of Promise Purgatory (Purgatorio)

<figure>
  <picture>
    <source srcset="/img/articles/2018/02/purgatorioLg.webp" media="(min-width: 1400px)" type="image/webp" >
    <source srcset="/img/articles/2018/02/purgatorioLg.jpg" media="(min-width: 1400px)" >
    <source srcset="/img/articles/2018/02/purgatorioMd.webp" media="(min-width: 1101px)" type="image/webp" >
    <source srcset="/img/articles/2018/02/purgatorioMd.jpg" media="(min-width: 1101px)" >
    <source srcset="/img/articles/2018/02/purgatorioSm.webp" media="(min-width: 701px)" type="image/webp" >
    <source srcset="/img/articles/2018/02/purgatorioSm.jpg" media="(min-width: 701px)" >
    <source srcset="/img/articles/2018/02/purgatorio.webp" type="image/webp">
    <img src="/img/articles/2018/02/purgatorio.jpg" alt="Eustache Le Sueur">
  </picture>
  <figcaption>Dante begins the Purgatorio by invoking the Muses" <a href="https://commons.wikimedia.org/wiki/File:Eustache_Le_Sueur_002.jpg">Wikimedia</a></figcaption>
</figure>

### What the Hell is a Promise?
[Promises](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) are simply functions that represent an eventual return value (whether successful or not) of an asynchronous operation. Imagine you're shoe shopping and you need a different size, so you ask a salesman, Al. When Al tells you, "let me go check for that size in the back and I'll come back and let you know," he is promising one of two things. He will either return with that shoe or, if it's not available, return and inform you that he couldn't find it. He might give you more information ("we'll get a new shipment Monday," "we don't carry that shoe anymore"), but it's up to Al to decide what information he returns with.

Meanwhile, while Al is doing his thing in the back, you are free to wait where you are, or continue looking around, check out socks, or do whatever you'd like. You don't have to stand still and wait for Al, he'll let you know the result of his inventory check before you move to the next step and head over to the cash register.

In order for a promise to complete, it needs to either `resolve` or `reject`, which executes the promise (see examples below). In the case of Al, once the inventory check `resolves` or `rejects`, he immediately turns around and returns to the front of the store where you met. Let's dive into some examples, to make more sense of promises.

### The Fourth Terrace: A Single Promise to Handle Them All
In reality, this really is probably one of the cleaner examples here, but it doesn't quite show the power of promises. Line 11 executes `getAllNames`, which creates a `new Promise` that fetches a list of names. Think of `resolve(names)` as `return(names)` in a non-promise function.

<script src="https://gist.github.com/atrama/33a2ffb9c6396da9d542aef79f7024a4.js"></script>
[View the demo on CodePen](https://codepen.io/atrama/pen/vZXLBE)

The magic starts to happen in `then()` method, which has an parameter, `response`. `response` is whatever was resolved in the promise on line 5. In this case, an array of names.  

### The Third Terrace: Chaining
What if we need to wait on three separate asynchronous functions to finish before doing something? That's where chaining come in handy. In the example below, `getThingTwo`, which is another promise, is called after `getThingOne` finishes successfully (I'll cover `reject` in a bit). Notice that `getThingTwo` is dependent on the response of `getThingOne`, which is passed into `getThingTwo` as the `arg` parameter. This same pattern is followed in `getThingThree`, which is dependent on the response of `getThingTwo`. `getThingThree` then passes its response to the last `then()` on line 32, which spits out the result in the DOM.

<script src="https://gist.github.com/atrama/f39c6445b6f695b4c111b078d1e5e46c.js"></script>
[View the demo on CodePen](https://codepen.io/atrama/pen/NgRGBR)

This method of chaining is especially useful when your promises rely on each other. They will each wait on the previous promise(s) to resolve before starting. If you need multiple promises, but they can be called independently of each other (they don't need another promise's response), you can bundle them together. That's what happens in the Second Terrace of Promise Purgatory...

### The Second Terrace: Bundling Promises
This is an extremely clean way to tell your code to go do a bunch of asynchronous tasks, and then wait until they all complete before handling their response. It's like sending a bunch of shoe salesmen into the back to get different models of shoes that you want to buy because, hey, it's payday today, while you wait by the register until they all return with the different pairs of shoes you tasked them with retrieving. One might come back after 30 seconds, another after 2 minutes, and the last one after 5 minutes. They can give you their shoe immediately after they return, but you're going to wait until all the salesmen return before proceeding to the cash register.

In the example below, `getThingOne`, `getThingTwo`, and `getThingThree` are the salesmen and the `.then()` on line 4 is you walking up to the cash register.
<script src="https://gist.github.com/atrama/f7d693b00b091f3154353ebc944ab80e.js"></script>
[View the demo on CodePen](https://codepen.io/atrama/pen/YQGwzz)

But you are a picky customer. You will only give this store your business if they have all your shoes. So, what if one of them has trouble retrieving your shoe? Then you enter the First Terrace...

### The First Terrace: Catching Rejections and Errors
When a promise is unsuccessful, it can `reject()`. This can happen because of a bad request, or maybe it watches a status code in an ajax request and `reject()`s if it's not in the `200` range. If any promise in the group `reject()`s, the `catch()` on line 13 will fire immediately and proceed with your error handling.

`getThingFour` is the fourth salesman who is just appearing in this story. You sent him to find a pair of shoes, but he couldn't find your size, so he returns with bad news. So this is like you walking out of the store upset. This is really helpful in allowing you to give feedback to users and developers so your code doesn't just fail silently because of a failed promise.

<script src="https://gist.github.com/atrama/c9a8d091d9f43497e8d9d2bbf87a4889.js"></script>
[View the demo on CodePen](https://codepen.io/atrama/pen/OgWbbj)

## The 4 Spheres of Async/Await Paradise (Paradiso)

<figure>
  <picture>
    <source srcset="/img/articles/2018/02/paradisoMd.webp" media="(min-width: 1101px)" type="image/webp" >
    <source srcset="/img/articles/2018/02/paradisoMd.jpg" media="(min-width: 1101px)" >
    <source srcset="/img/articles/2018/02/paradisoSm.webp" media="(min-width: 701px)" type="image/webp" >
    <source srcset="/img/articles/2018/02/paradisoSm.jpg" media="(min-width: 701px)" >
    <source srcset="/img/articles/2018/02/paradiso.webp" type="image/webp">
    <img src="/img/articles/2018/02/paradiso.jpg" alt="Saint Francis of Assisi by Jusepe de Ribera">
  </picture>
  <figcaption>Saint Francis of Assisi<a href="https://en.wikipedia.org/wiki/File:Saint_Francis_of_Assisi_by_Jusepe_de_Ribera.jpg">Wikimedia</a></figcaption>
</figure>

Things get even better when you get into Async/Await Paradise. Async/Await is really a pattern that is comprised of:

1. An `async` function, which looks like a regular function, but has `async` before the function declaration. Async functions return a promise and simplify the promise pattern.
1. An `await` expression, which pauses execution until the promise expression is resolved.

This should make sense with the following examples, so let's move on to paradise...

### The Fourth Sphere: Another promise to handle them all
Admittedly, this example doesn't really prove that advantageous over the first promise example, but it gets better, I promise. Everything is the same until line 13, where the async function is declared and called. `names` represents the returned value of the `getAllNames` promise and puts that value in `result.innerText`.

<script src="https://gist.github.com/atrama/30dd79a14de3eeb01a64b7c28b177b8c.js"></script>
[View the demo on CodePen](https://codepen.io/atrama/pen/eRdoqo)

At this point, it's just a different syntax with an extra two lines of JavaScript, but there are already advantages of writing code this way, as opposed to Promise Purgatory 1.

* The syntax is easier to read. This is, admittedly, personal preference. However, either due to it being true, or due to the nature of JavaScript developers always falling in love with the new thing, most developers who have used both seem to prefer the `await` syntax over `.then()`.
* It future proofs your code, should there be additional promises needed later. Using `await`, the next developer simply needs to add another line of code. If you use `.then()`, they will need to either chain `.then()` or rewrite the `.then()` into await (more about this in the next example).

### The Third Sphere: Cleaning up then() then() then()
If you show this to somebody who has no (or little) experience with promises, I'll bet they will understand it better than the second promise example. Lines 1 through 27 are virtually the same as the previous promise example. However, the async `getNames` function creates 3 variables for `name1`, `name2`, and `name3` and awaits each of those before placing the results of each of those promises in `result.innerText`. This is much cleaner to read than chained `then().then().then()` and easier to write.

<script src="https://gist.github.com/atrama/a3540334e479daccba307f8b4305c8f4.js"></script>
[View the demo on CodePen](https://codepen.io/atrama/pen/awmrBv)

The downside of having three awaits is the same as chaining 3 promises: **they perform synchronously**. Meaning, `getThingTwo` will not start until `getThingOne` has finished (note: this is no different than chaining `.then()`). There are times when that is necessary, but in this case, we can, and want to, get all three names asynchronously.

### The Second Sphere: Awaiting Bundled Promises
Now things really start to get clean in our list of promises. Once again, on line 33 `result.innerText` simply returns `names`; however, this time `names` represents a `Promise.all` object, which requests all three promises at once (asynchronously), and waits for them all to resolve (or any to reject) before moving to the next line. Line 31 simply lists out the array of promises as invoked functions.

<script src="https://gist.github.com/atrama/f29bb0b37e546aba71a140787b138774.js"></script>
[View the demo on CodePen](https://codepen.io/atrama/pen/dzpVgL)

### The First Sphere: Seeing the Error of Our Ways
On line 38 in the gist below, `promiseList` defines an additional promise (`getThingFour()`), which will reject, like it did in the First Terrace of Purgatorio. This time though, I'm relying on a `try...catch` statement to catch rejected promises. It really works similar to the pattern of:

```
myPromise()
.then(response => {
  ...//if successful
}).catch(error => {
  ...//error handled here
})
```

Except, with `await`, you use

```
try{
  let response = await myPromise() //if successful
}catch(error){
  //error handled here
}
```

This might not look that much better, and you're right in this case. But, with multiple chained promises, it gets even more messy...

```
myPromise()
.then(response => {
  doNextPromise();
}).then(response2 => {
  doAnotherPromise();
}).then(response3 => {
  //do something if all promises are successful
}).catch(error => {
  //error handled here
})
```

...but with `await`, your code stays clean

```
try{
  const myPromise = await myPromise();
  const doNextPromise = await doNextPromise();
  const doAnotherPromise = await doAnotherPromise();
  //do something if all promises are successful
}catch(error){
  //error handled here
}
```

Make sense? They both boil down to block 1 handling successful attempts and block 2 handling errors. In the example below, much like previous examples, line 40 `await`s `Promise.all(promiseList)` and does something with the response. But this time, lines 43-44 handle any errors (`reject()` thrown from any promise). `error` (line 42) is simply whatever the rejected promise returns in the `reject()` method. For example: `reject('No arguments supplied')`, `reject('Invalid user')`, `reject(jsonResponse.errorMessage)`, etc.

<script src="https://gist.github.com/atrama/a3382720b683c866db1214c337e7cae8.js"></script>
[View the demo on CodePen](https://codepen.io/atrama/pen/jwMoVX)

## Wrapping Up
That's it! You've made it all the way through! Hopefully this helps you understand how to better work with asynchronous JavaScript and clean up any old patterns. See something that can be improved here, [let me know](/#contact)!