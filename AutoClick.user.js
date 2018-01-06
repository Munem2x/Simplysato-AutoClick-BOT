// ==UserScript==
// @name         AutoClick
// @icon		https://simplysato.ml/favicon.ico
// @version      1
// @description  AutoClick
// @author       Munem2x
// @match        https://simplysato.ml/*
// @grant        none
// ==/UserScript==

$(document).ready(function(){
    var ClickOnCaptcha = setInterval(function(){
        if ($("#satodown").text() === "") {
            $('#getsato').mousedown();
            $('#getsato').click();
            $('#getsato').mouseup();
        }
    },2000);

});