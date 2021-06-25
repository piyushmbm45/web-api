const x = document.getElementById('demo');
const button = document.getElementById('id');
button.addEventListener('click', function geolocation() {
    if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition(showPosition);
}
else {
x.innerHTML= "Geolocation in not"
}
function showPosition(position){
x.innerHTML = "Latitude - " + position.coords.latitude +
"<br>Longitude - " + position.coords.longitude;
}
})