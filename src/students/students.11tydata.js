const EleventyFetch = require("@11ty/eleventy-fetch");

function getCat(data) {
    return EleventyFetch('https://api.thecatapi.com/v1/images/search?cache=' + data.page.fileSlug, {
        type: "json"
    }).then(function getCatUrl(/** @type {{ url: string; }[]} */ res) {
        if (res && res[0] && res[0].url) {
            return res[0].url;
        }

        return 'https://cdn2.thecatapi.com/images/2BSxnHaIx.png';
    });
}

module.exports = {
    permalink: false,
    tags: "students",
    eleventyComputed: { img: getCat },
};