/*Global*/
var GOOGLE_KEY = "AIzaSyCFUfZOecqIpzUV15SrRtR-6cDUEIkdJbs";

$(document).ready(function() {

        google_url();
        $.getScript("google_maps.js");
        $("#origem-input").on("input",function(){initMap("origem-input");});
        $("#destino-input").on("input",function(){initMap("destino-input");});
        //$("#destino").on("input",function(){console.log("ok2")});

    }
);

function google_url(){
    var google_url = "https://maps.googleapis.com/maps/api/js?key=" + GOOGLE_KEY + "&libraries=places";
    var node = document.createElement("script");
    node.setAttribute("async","");
    node.setAttribute("defer","");
    node.setAttribute("src",google_url);
    document.head.appendChild(node);
}




  