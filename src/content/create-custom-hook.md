---
title: Creating a custom react hook for markdown parsing
author: Opticrafts
date: December 11, 2021
category: design tools
excerpt: I am making a side project in React that requires markdown parsing so I decided to use that as a good candidate to experiment with custom.
image: /images/coding.jpg
---

## Introduction

I am making a side project in React that requires markdown parsing so I decided to use that as a good candidate to experiment with custom [hooks](https://reactjs.org/docs/hooks-intro.html).

> Checkout this fantastic [post](https://wattenberger.com/blog/react-hooks) from Amelia Wattenberger that goes over a comparison between traditional class components versus using hooks and how they make React feel less bloated and more natural to work with.

Here's what I needed to do:

- Parse a markdown string
- Sanitize that string to prevent XSS attacks

Apparently there is a vast number of parsers out there. I decided to go with marked which seems like a good library with an active community and a nice and simple implementation

Again, the same could be said for sanitizing html (for some reason people just like writing parsers a lot), so I picked sanitize-html which offers a nice level of configuration through a simple object

### Setup

Alright let's get to work

```js
// parsing markdown with marked

const marked = require("marked");
const marked = require("marked");
const md = `

  # heading

  [link][1]

  [1]: #heading "heading"`;

const tokens = marked.lexer(md);
const html = marked.parser(tokens);
```

Will output this html!

```html
<h1 id="heading">heading</h1>
<p><a href="#heading" title="heading">link</a></p>
```

## Table

| a   | b   | c   | d   |
| --- | --- | --- | --- |
| 1   | 2   | 3   | 4   |

```js
const doc = getDocBySlug(params.slug);
```

## Tasklist

- [ ] to do
- [x] done
