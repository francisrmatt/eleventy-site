---
title: 'Colophon and web design'
layout: 'layouts/post.html'
displayOrder: 1
---

## Colophon

This website uses [11ty](https://www.11ty.dev/), a static site generator. Markdown files are edited using [Obsidian](https://obsidian.md/) and are pushed to a [Github Repository](https://github.com/francisrmatt/eleventy-site) which runs a Github 'action', running 11ty to generate the HTML from the markdown and layout template files. The output HTML is deployed to [Cloudflare Pages](https://pages.cloudflare.com/). I have tried to ensure as much processing is done server-side.

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

The second site introduces seven CSS declarations which it argues makes the site far more readable. I agree, and if someone uses a graphical internet browser they should enjoy the benefits that come with graphical rendering, otherwise one may as well be in a terminal. The second site is what this website is based on and has all the benefits of the previous site while only adding minuscule data to the payload. The most important takeaways are: line-width should only be 60-80 characters, contrast should not be as extreme, and line-heights should be generous to ensure proper spacing. 

For example, [Dan Luu](https://danluu.com/) is a great blogger but there is no reason to keep everything purely HTML.
### The third site

The third takes is futher and adds Javascript which [some people](https://www.gnu.org/philosophy/javascript-trap.en.html) think is a moral wrong. I'm not sure I agree as the two features javascript adds to this site are a dark-mode, and a higher contrast mode, both great for readability. Most importantly, quoting the site:

> Freaks who are scared of JavaScript will feel safe here since the website doesn't need to have JS enable to be properly rendered

PS: You can animate text without javascript using the `animation` tag in CSS.

## Features a blog should or could have

- Date of article
- Date of latest amendment to article (potentially a way to see a diff as well)
- Extensive links to articles or pages you wrote to create a well-networked mesh

### Features I like but don't yet have

- [Webmentions](https://indieweb.org/Webmention)
- RSS feed
- A [guestbook](https://t0.vc/g/)

## Subculture

Many of the design elements have been inspired by the sites I've visited from:

- [1MB Club](https://1mb.club/)
- [512KB Club](https://512kb.club/)
- [250KB Club](https://250kb.club/)
- [1kB Club](https://1kb.club/)
- [https://textonly.website/](https://textonly.website/)

## Pet peeves

### Tech-bro speak

There is a certain style of writing which I see on many personal websites and Reddit comments which overuses filler language, exclamation marks, and italics. I suspect this is need for unambiguous emphasis is to compensate for lower quality writing or an ability to crystallise your point in a terse manner. Furthermore, some people are prone to use words or phrases only people who are chronically online would be aware of. My favourite example is calling your personal site your 'digital abode' or 'second brain.'

### Unnecessary information

A blog doesn't need to start with a paragraph explaining that this is your personal blog.

### Capitalisation

The words in titles and headings do not have to have their first letter capitalised. On the flip-side there are websites that are obsessed with not capitalising at all, going for a minimal and modern feel. This makes reading the website difficult.



