function initMapRoute() {
    var directionsService = new google.maps.DirectionsService();
    var directionsDisplay = new google.maps.DirectionsRenderer();
    var varRoute = new getUrlDirections();
    var map = new google.maps.Map(document.getElementById('map'));
    directionsService.route({
        origin: varRoute.Origem, //"Rio de Janeiro, RJ, Brazil",
        destination: varRoute.Destino, // "São Paulo, SP, Brazil",
        //waypoints: [{location: 'Adelaide, SA'}, {location: 'Broken Hill, NSW'}],
        travelMode: 'DRIVING',
        //avoidTolls: true
      }, function(response, status) {
        if (status === 'OK') {
            directionsDisplay.setMap(map);
            directionsDisplay.setDirections(response);
        } else {
          alert('Could not display directions due to: ' + status);
        }
      });
}
  
  function getUrlDirections(){
    //?myOrigem=Rua+Maria+Pia+181%2C+Lisboa%2C+Portugal&myDestiny=Ericeira+Camping%2C+Ericeira%2C+Portugal
    var UrlSearch = window.location.search;
    var RefOrigem = "?myOrigem=";
    var RefDestino = "&myDestiny=";
    var PosOrigem = UrlSearch.indexOf(RefOrigem);
    var PosDestino = UrlSearch.indexOf(RefDestino);
    var OrigemCut = RefOrigem.length + PosOrigem;
    var DestinoCut = RefDestino.length + PosDestino;
    
    var Origem = UrlSearch.slice(OrigemCut, PosDestino);
    while (Origem.indexOf("+") != -1){
        Origem = Origem.replace("+"," ");
    }
    while (Origem.indexOf("%2C") != -1){
        Origem = Origem.replace("%2C",",");
    }

    var Destino = UrlSearch.slice(DestinoCut, UrlSearch.length);
    while (Destino.indexOf("+") != -1){
        Destino = Destino.replace("+"," ");
    }
    while (Destino.indexOf("%2C") != -1){
        Destino = Destino.replace("%2C",",");
    }

    return {
        "Origem" : Origem,
        "Destino" : Destino
    }

}


    