function google_url(){
    var GOOGLE_KEY = "AIzaSyCFUfZOecqIpzUV15SrRtR-6cDUEIkdJbs";
    var google_url = "https://maps.googleapis.com/maps/api/js?key=" + GOOGLE_KEY + "&callback=initMapRoute";
    var node = document.createElement("script");
    node.setAttribute("async","");
    node.setAttribute("defer","");
    node.setAttribute("src",google_url);
    document.body.appendChild(node);
}