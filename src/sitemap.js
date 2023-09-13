const sitemap = require('sitemap');
const hostname = 'https://www.summare.ai';

const urls = [
  { url: '/', changefreq: 'daily', priority: 1 },
  // Add additional pages here
];

const sitemapInstance = sitemap.createSitemap({
  hostname,
  urls,
});


const fs = require('fs');

// Write sitemap to public directory
fs.writeFileSync('./public/sitemap.xml', sitemapInstance.toString());