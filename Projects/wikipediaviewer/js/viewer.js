"use strict";
$(document).ready(function () {

    let titles = document.getElementsByClassName("title");
    let description = document.getElementsByClassName("description");
    let userQuery = "";
    let searchButton = document.getElementsByClassName("fa-search")[0];
    searchButton.addEventListener("click", function () {
        userQuery = document.getElementById("query").value;
        let wikiRequestTemplate = `https:\/\/en.wikipedia.org/w/api.php?action=query&format=json&prop=extracts&generator=prefixsearch&redirects=1&formatversion=2&exsentences=1&exlimit=9&exintro=1&explaintext=1&gpssearch=${userQuery}&gpslimit=9&callback=?`;
        $.getJSON(wikiRequestTemplate).done(function (data) {
            console.log(data);
            data["query"]["pages"].forEach(function (outcome, index) {
                titles[index].innerHTML = outcome["title"];
                description[index].innerHTML = outcome["extract"];
            });
            let maxHeight = 0;
            $(".rect").each(function () {
                let thisH = $(this).height();
                if (thisH > maxHeight) {
                    maxHeight = thisH;
                }
            });
            $(".rect").height(maxHeight);

            $(".rectBox").show();
        })


    });
});