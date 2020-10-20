// next.config.js
const withOptimizedImages = require('next-optimized-images');

module.exports = withOptimizedImages({
    /* config for next-optimized-images */
    handleImages: ['svg', 'webp']
    // your config for other plugins or the general next.js here...
});