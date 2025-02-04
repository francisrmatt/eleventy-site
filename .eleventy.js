const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
module.exports = config => {
  config.addPassthroughCopy("chinese/index.html");
  config.addPassthroughCopy("thesis/index.html");
  config.addPassthroughCopy("thesis.pdf");
  config.addPassthroughCopy('functions');
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