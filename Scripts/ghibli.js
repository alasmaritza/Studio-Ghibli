var locations;
var name;

function startUp() {
    googleMap();
    randomImage();
    $('.search').on('click', searchFilms);
}

var searchFilms = function () {
    $('#services').removeClass('hidden');
    $('.film').empty();
    $('html, body').animate({
        scrollTop: $('.filmInfo').offset().top
    }, 2000);

    name = $('#filmName').val();
    name = name.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
    filmsGet(onSuccess, onError);
    return false
}

var onSuccess = function (data) {
    var findIt = $.map(data, function(value) {
            if (name == value.title) {
           // console.log(value.description);
            $('.filmTitle').append(value.title);
            $('.filmYear').append(value.release_date);
            $('.filmDirector').append(value.director);
            $('.filmDescription').append(value.description);
            $('.filmProducer').append(value.producer);
            filmPostersGet(value.id, onPosterSuccess, onPosterError);
            }
    });
}

var onError = function () {
    $('.filmTitle').append("Nothing Found!");
    console.log("I'm broken.");
}

var onPosterSuccess = function (item) {
    $('.filmPoster').attr('src', item.Poster);
    $('.filmPosterOrg').attr('src', item.PosterOrig);
    console.log(item);
}

var onPosterError = function () {
    console.log("No Poster Found.");
}
var randomImage = function () {
    var image = Math.floor(Math.random() * 6) + 1;
    backgroundImageGet(image, onImageSuccess, onImageError)
}

var onImageSuccess = function (data) {
    $('.backgroundImage').attr('src', data.image);
}

var onImageError = function () {
    console.log("Error.")
}
var googleMap = function () {

    var map = new google.maps.Map(document.getElementById('map-canvas'), {
        zoom: 11,
        center: new google.maps.LatLng(35.7013352, 139.4742351)
    });
    locations = [{
        lat: 35.7013352,
        lng: 139.4742351,
        title: "Studio Ghibli, Inc.",
        flag: {
            scaledSize: new google.maps.Size(60, 60),
            url: '/Studio-Ghibli/Content/img/totoroTop2.png'
        }
    }, {
        lat: 35.696238,
        lng: 139.568243,
        title: "Ghibli Museum",
        flag: {
            scaledSize: new google.maps.Size(70, 70),
            url: '/Studio-Ghibli/Content/img/Flying_totoro.png'
        }
    }];
    for (var i = 0; i < locations.length; i++) {
        var loc = locations[i];

        var marker = new google.maps.Marker({
            position: loc,
            map: map,
            icon: loc.flag,
            title: loc.title,
            animation: google.maps.Animation.DROP
        });


    }

}

$(document).ready(startUp);
