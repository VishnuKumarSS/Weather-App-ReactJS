import {useEffect} from "react";
// import Weather from "./Weather";

var current_latitude;
var current_longitude;
function success(pos){
    var neww = pos.coords;
    console.log(`Latitude : ${neww.latitude}`);
    console.log(`Longitude: ${neww.longitude}`);
    console.log(`Accuracy: ${Math.floor(neww.accuracy)} meters.`);

    current_latitude = neww.latitude;
    current_longitude = neww.longitude;
    return (current_latitude, current_longitude)
}

function errorsHandler(err){
    console.warn(`Error code is: ${err.code} and Error Message is ${err.message}`);
}
function Location() {
    useEffect(()=>{
        if (navigator.geolocation){
          navigator.permissions
            .query({ name:'geolocation'})
            .then(function(result2){
              console.log('res2',result2)
              if (result2.state === 'granted'){
                console.log("It's state: ",result2.state)
                navigator.geolocation.getCurrentPosition(success);
              }
              else if (result2.state ==='prompt'){
                console.log("It's state: ",result2.state)
                // navigator.geolocation.getCurrentPosition(success, errorsHandler);
              }
              else if (result2.state === 'denied'){
                console.log("It's state: ",result2.state)
              }
              result2.onchange = function () {
                console.log(result2.state);
              }
            });
          }
          else {
          alert('sorry not available.!')
        }
      }, []);
}


export default Location