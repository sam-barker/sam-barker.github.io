const { minify } = require('html-minifier');
const fs = require('fs');

const minifyOpts = {
  removeAttributeQuotes: true,
  collapseWhitespace: true,
  html5: true,
  keepClosingSlash: true,
  minifyCSS: true,
  minifyJS: true,
  minifyURLs: true,
  quoteCharacter: '\'',
  removeComments: true,
  removeEmptyAttributes: true,
  removeRedundantAttributes: true,

};

(async () => {
  try {
    const htmlToMinify = await fs.readFileSync(`${__dirname}/src.html`, 'utf8');
    const html = minify(htmlToMinify, minifyOpts);
    await fs.writeFileSync(`${__dirname}/index.html`, html, 'utf8');
  } catch (e) {
    console.error(e);
    process.exit(1);
  }
})();