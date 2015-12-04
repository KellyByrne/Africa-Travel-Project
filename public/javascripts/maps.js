$(document).ready(function(){
  var countrylat;
  var countrylng;
  var countrypic;
  var countryname;
  var regionlat;
  var regionlng;
  var regionpic;
  var regionname;

  $('.country').on('click', function(){

// debugger

//    $(this).closest('.countries').find('.region').slideToggle();
    countrylat = $(this).data('countrylat');
    countrylng = $(this).data('countrylng');
    countrypic = $(this).data('picture');
    countryname = $(this).data('name')

    $('[data-country="' + countryname + '"]').slideToggle()

    var countryMarker = L.marker([countrylat, countrylng]).addTo(map);

    countryMarker.bindPopup(popup).openPopup();

    var popup = L.popup({maxWidth:500})
    .setLatLng([countrylat, countrylng])
    .setContent("<img src=\'" + countrypic + "\' height='200' width='300'> <br> <a class='link-black' href='/paths/places/" + countryname + "\'>" + countryname + "</a>")
    .openOn(map);
    })

$('.region').on('click', function(){
    regionlat = $(this).data('regionlat');
    regionlng = $(this).data('regionlng');
    regionpic = $(this).data('pic');
    regionname = $(this).data('name')

    $('[data-region="' + regionname + '"]').slideToggle()

    var regionMarker = L.marker([regionlat, regionlng]).addTo(map);

    regionMarker.bindPopup(popup).openPopup();

    var popup = L.popup({maxWidth:500})
    .setLatLng([regionlat, regionlng])
    .setContent("<img src=\'" + regionpic + "\' height='200' width='300'> <br> <a class='link-black' href='/paths/places/" + regionname + "\'>" + regionname + "</a>")
    .openOn(map);
    })

$('.sub').on('click', function(){
  subregionlat = $(this).data('subregionlat');
  subregionlng = $(this).data('subregionlng');
  subregionpic = $(this).data('pic');
  subregionname = $(this).data('name');

  $('[data-region="' + subregionname + '"]').slideToggle()


})
 


var map = L.map('map', {zoomControl:false}).setView([1.0, 1.0], 4);

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    maxZoom: 18,
    id: 'kellyannbyrne.o0me94bc',
    accessToken: 'pk.eyJ1Ijoia2VsbHlhbm5ieXJuZSIsImEiOiJjaWdhMzBlMDYwMDh3dHltMng3YjczYXYwIn0.hbdB4IT5DBE1iQAe0HbGOw'
}).addTo(map);

 new L.Control.Zoom({ position: 'bottomright' }).addTo(map) 



var marker = L.marker([-17.833, 31.050]).addTo(map);



})

