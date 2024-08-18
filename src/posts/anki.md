---
title: 'On Anki'
layout: 'layouts/post.html'
displayOrder: 2
---

fee fii fo fum

```js
const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
module.exports = config => {
  config.addCollection('post', collection => {
    return collection
      .getFilteredByGlob('./src/posts/*.md')
      .sort((a, b) => (Number(a.data.displayOrder) > Number(b.data.displayOrder) ? 1 : -1));
  });
  config.addPlugin(syntaxHighlight);
  return {
    markdownTemplateEngine: 'njk',
    dataTemplateEngine: 'njk',
    htmlTemplateEngine: 'njk',
    dir: {
      input: 'src',
      output: 'dist'
    }
  };
};
```