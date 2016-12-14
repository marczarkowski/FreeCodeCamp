"use strict";
$(document).ready(function() {
    let mediaWiki = "https:\/\/en.wikipedia.org/w/api.php?action=query&format=json&prop=extracts&generator=prefixsearch&redirects=1&formatversion=2&exsentences=2&exlimit=9&exintro=1&explaintext=1&gpssearch=Albert+Einstein&gpslimit=9&callback=?";
   $.getJSON(mediaWiki).done(function(data) { console.log(data) });
});