const EleventyFetch = require("@11ty/eleventy-fetch");

module.exports = {
    permalink: false,
    tags: "students",
    eleventyComputed: {
        img: function getCat() {
            return EleventyFetch('https://api.thecatapi.com/v1/images/search', {
                directory: "/tmp/.cache/",
                type: "json"
            }).then(function getCatUrl(/** @type {{ url: string; }[]} */ res) {
                return res[0].url;
            });
        }
    },
};