function getLocation(lat,lon){
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=d11d263aad330777246c53832bacb088`;

    fetch(url).then(function(res){
        return res.json();
    })
    .then(function(res){
        // append(res);
        console.log(res.name);
        document.getElementById("changecity").innerText = res.name
    }).catch(function(err){
        console.log(err);
    })

}

function getLoc(){
    navigator.geolocation.getCurrentPosition(success);
    
     function success(pos) {
         let crd = pos.coords;
         getLocation(crd.latitude, crd.longitude)
     }
     
    }