---
title: "When to use a Static Generation v.s Server-Side Rendering"
date: "2022-01-20"
---

We recommend using **Static Generation** (with or without data) whenever possible because your page can be build once and served by CDN , which makes it much faster than having a server render the page on every request.

You can use Static Generation for many types of pages, including:

- Marketing Pages
- Blog posts
- E-commerce product listing
- Help and Documentation

You should ask yourself : "Can I pre-render this page **ahead** of a user's request" If the answer is yes, then you should choose Static Generation.

On the other hand, Static Generation is **not** a good idea if you cannot pre-render a page ahead of a user's request.
