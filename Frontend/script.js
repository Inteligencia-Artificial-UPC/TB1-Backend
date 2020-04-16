

function iniciarMap(){
    var coord = {lat: -28.024, lng: 140.887};

    var labels = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

    var marcadores = [];
    

    var map = new google.maps.Map(document.getElementById('map'),
    {
        zoom:15,
        center: new google.maps.LatLng(-33.91722, 151.23064)
        
        
    });






    map.addListener('click', function(e) {
      if(marcadores.length == 0){
        placeMarkerTruck(e.latLng, map);
      }
      else{
        placeMarkerBox(e.latLng, map);
      }
      
      var aux = { lat: e.latLng.lat(), lng: e.latLng.lng()}
      
      marcadores.push(aux);
      console.log(marcadores)
    });
  
    function placeMarkerTruck(position, map) {
      var marker = new google.maps.Marker({
          position: position,
          map: map,
          icon: iconTruck
      });
      
      map.panTo(position);
  }

  function placeMarkerBox(position, map) {
    var marker = new google.maps.Marker({
        position: position,
        map: map,
        icon: iconBox
    });
    
    map.panTo(position);
}




    var iconBox = {
      url: "caja.png", 
      scaledSize: new google.maps.Size(50, 50), // scaled size
      origin: new google.maps.Point(0,0), // origin
      anchor: new google.maps.Point(0, 0) // anchor
  };
    var iconTruck = {
      url: "camion.png", 
      scaledSize: new google.maps.Size(70,50), // scaled size
      origin: new google.maps.Point(0,0), // origin
      anchor: new google.maps.Point(0, 0)
    }


    var icons = {
      caja : iconBox,
     camion: iconTruck
    }
    
        var features = [
          {
            position: new google.maps.LatLng(-33.91721, 151.22630),
            type: 'camion',
            title : 'hola'
          }, {
            position: new google.maps.LatLng(-33.91539, 151.22820),
            type: 'caja'
          }, {
            position: new google.maps.LatLng(-33.91747, 151.22912),
            type: 'caja'
          }, {
            position: new google.maps.LatLng(-33.91910, 151.22907),
            type: 'caja'
          }, {
            position: new google.maps.LatLng(-33.91725, 151.23011),
            type: 'caja'
          }, {
            position: new google.maps.LatLng(-33.91872, 151.23089),
            type: 'caja'
          }, {
            position: new google.maps.LatLng(-33.91784, 151.23094),
            type: 'caja'
          }, {
            position: new google.maps.LatLng(-33.91682, 151.23149),
            type: 'caja'
          }, {
            position: new google.maps.LatLng(-33.91790, 151.23463),
            type: 'caja'
          }, {
            position: new google.maps.LatLng(-33.91666, 151.23468),
            type: 'caja'
          }, {
            position: new google.maps.LatLng(-33.916988, 151.233640),
            type: 'caja'
          }, {
            position: new google.maps.LatLng(-33.91662347903106, 151.22879464019775),
            type: 'caja'
          }, {
            position: new google.maps.LatLng(-33.916365282092855, 151.22937399734496),
            type: 'caja'
          }, {
            position: new google.maps.LatLng(-33.91665018901448, 151.2282474695587),
            type: 'caja'
          }, {
            position: new google.maps.LatLng(-33.919543720969806, 151.23112279762267),
            type: 'caja'
          }, {
            position: new google.maps.LatLng(-33.91608037421864, 151.23288232673644),
            type: 'caja'
          }, {
            position: new google.maps.LatLng(-33.91851096391805, 151.2344058214569),
            type: 'caja'
          }, {
            position: new google.maps.LatLng(-33.91818154739766, 151.2346203981781),
            type: 'caja'
          }, {
            position: new google.maps.LatLng(-33.91727341958453, 151.23348314155578),
            type: 'caja'
          }
        ];

        // Create markers.
        for (var i = 0; i < features.length; i++) {
          var marker = new google.maps.Marker({
            position: features[i].position,
            icon: icons[features[i].type],
            map: map,
            title: features[i].title
          });
        };

        
      

        console.log("hola")
        console.log(marcadores)
   

}

//document.getElementById('lat').innerHTML = "aver"