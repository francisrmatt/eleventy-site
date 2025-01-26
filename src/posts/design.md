---
title: 'Colophon and web design'
layout: 'layouts/post.html'
displayOrder: 1
---

## Colophon

This website uses [11ty](https://www.11ty.dev/), a static site generator. Markdown files are edited using [Obsidian](https://obsidian.md/) and are pushed to a [Github Repository](https://github.com/francisrmatt/eleventy-site) which runs a Github 'action', running 11ty to generate the HTML from the markdown and layout template files. The output HTML is deployed to [Cloudflare Pages](https://pages.cloudflare.com/). 

## Design philosophy

Below are three websites, the latter two made in reference to the previous.

- [https://motherfuckingwebsite.com/](https://motherfuckingwebsite.com/)
- [http://bettermotherfuckingwebsite.com/](http://bettermotherfuckingwebsite.com/)
- [https://thebestmotherfucking.website/](https://thebestmotherfucking.website/)

While all three claim to be satire they all call into question perceptions of modern web design. Below I will outline what I believe each site gets right.

### The first site

Comprising a single HTML file, the first site is the most extreme of the three when considered against most modern websites. The site has no styling, and quite tersely proposes that any styling is a waste of time. I agree with its points that:

1. Many websites are over-designed and forget their original mission: delivering content or information to the end user.

I believe the type of person who has a website is somewhat tech-literate and enjoys tinkering with frameworks and the interesting visual effects they can achieve using Javascript. Perhaps this is a necessary display of skills for someone working in web-design where the website itself can act as a portfolio item. I refer to the website of [Berkshire Hathaway](https://www.berkshirehathaway.com/) as a website which delivers content without the extra bells-and-whistles.

2. Websites are too large from the overuse of frameworks, fonts, banners, uncompressed images etc.

To personally verify this, navigate to a website you would like to check and open inspect. Go to the network tab and refresh. Watch as a flurry of files and scripts are requested by the browser. From the first website:

> You loaded all 7 fontfaces of a shitty webfont just so you could say "Hi." at 100px height at the beginning of your site? You piece of shit.

3. Websites should remember proper use of HTML tags to ensure accessibility and compatibility across browsers.

The CEO of Obsidian, Steph Ango, writes in his blog about the philosophy of [file over app](https://stephango.com/file-over-app). The opening paragraph summarises:

> _File over app_ is a philosophy: if you want to create digital artifacts that last, they must be files you can control, in formats that are easy to retrieve and read. Use tools that give you this freedom.

If webmasters ensure their site has properly used HTML tagging to layout their content, sites can be loaded using accessibility readers (for the vision impaired) as well as older systems or reduced-capacity systems such as text-based internet browsers.

### The second site

With some CSS.

### The third site

Added Javascript.
