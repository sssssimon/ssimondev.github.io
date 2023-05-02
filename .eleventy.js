module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("bundle.css");

    eleventyConfig.addPassthroughCopy("img");
};