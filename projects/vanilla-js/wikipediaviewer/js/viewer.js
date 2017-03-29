"use strict";
$(document).ready(function () {
    let searchButton = document.getElementsByClassName("fa-search")[0];
    searchButton.addEventListener("click", getData);
    window.addEventListener("keypress", function (e) {
        let key = e.which || e.keyCode;
        if (key === 13) {
            getData();
        }
    });
    $(".rect").on("mouseenter", function () {
        $(this).animate({width: "99%"}, 100);
    });
    $(".rect").on("mouseleave", function () {
        $(this).animate({width: "100%"}, 100);
    });
});

function getData() {
    let rectBox = document.getElementsByClassName("rectBox")
    let rects = rectBox[0].getElementsByTagName("a");
    let titles = document.getElementsByClassName("title");
    let description = document.getElementsByClassName("description");
    let userQuery = document.getElementById("query").value;
    let wikiRequestTemplate = `https:\/\/en.wikipedia.org/w/api.php?action=query&format=json&prop=extracts&generator=prefixsearch&redirects=1&formatversion=2&exsentences=1&exlimit=9&exintro=1&explaintext=1&gpssearch=${userQuery}&gpslimit=9&callback=?`;
    $.getJSON(wikiRequestTemplate).done(function (data) {
        let results = data["query"]["pages"];
        results.sort(function (a, b) {
            return a["index"] > b["index"];
        });
        results.forEach(function (outcome, index) {
            rects[index].setAttribute("href", `https://en.wikipedia.org/?curid=${outcome["pageid"]}`);
            titles[index].innerHTML = outcome["title"];
            description[index].innerHTML = outcome["extract"];
        });

        $(".rectBox").show();
    });


}