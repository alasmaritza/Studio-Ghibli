var locations;
var id;

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
    var name = $('#filmName').val().toLowerCase();
    if (name == 'my neighbor totoro' || name == 'totoro') {
        id = 3;
        filmsGet(id, onSuccess, onError);
    } else if (name == 'castle in the sky') {
        id = 1;
        filmsGet(id, onSuccess, onError);
    } else if (name == 'grave of the fireflies') {
        var id = 2;
        filmsGet(id, onSuccess, onError);
    } else if (name == 'kiki\'s delivery service' || name == 'kikis delivery service') {
        var id = 4;
        filmsGet(id, onSuccess, onError);
    } else if (name == 'only yesterday') {
        var id = 5;
        filmsGet(id, onSuccess, onError);
    } else if (name == 'porco rosso') {
        var id = 6;
        filmsGet(id, onSuccess, onError);
    } else if (name == 'pom poko') {
        var id = 7;
        filmsGet(id, onSuccess, onError);
    } else if (name == 'whisper of the heart') {
        var id = 8;
        filmsGet(id, onSuccess, onError);
    } else if (name == 'princess mononoke') {
        var id = 9;
        filmsGet(id, onSuccess, onError);
    } else if (name == 'my neighbors the yamadas' || name == 'yamadas') {
        var id = 10;
        filmsGet(id, onSuccess, onError);
    } else if (name == 'spirited away') {
        var id = 11;
        filmsGet(id, onSuccess, onError);
    } else if (name == 'the cat returns' || name == 'cat returns') {
        var id = 12;
        filmsGet(id, onSuccess, onError);
    } else if (name == 'howl\'s moving castle' || name == 'howls moving castle') {
        var id = 13;
        filmsGet(id, onSuccess, onError);
    } else if (name == 'tales from earthsea' || name == 'earthsea') {
        var id = 14;
        filmsGet(id, onSuccess, onError);
    } else if (name == 'ponyo') {
        var id = 15;
        filmsGet(id, onSuccess, onError);
    } else if (name == 'arrietty') {
        var id = 16;
        filmsGet(id, onSuccess, onError);
    } else if (name == 'from up on poppy hill' || name == 'poppy hill') {
        var id = 17;
        filmsGet(id, onSuccess, onError);
    } else if (name == 'the wind rises' || name == 'wind rises') {
        var id = 18;
        filmsGet(id, onSuccess, onError);
    } else if (name == 'the tale of the princess kaguya' || name == 'tale of the princess kaguya' || name == 'princess kaguya') {
        var id = 19;
        filmsGet(id, onSuccess, onError);
    } else if (name == 'when marnie was there' || name == 'marnie') {
        var id = 20;
        filmsGet(id, onSuccess, onError);
    } else {
        $('.filmTitle').append("Nothing Found!");
    }
    return false
}

var onSuccess = function (data) {

    $('.filmTitle').append(data.title);
    $('.filmYear').append(data.release_date);
    $('.filmDirector').append(data.director);
    $('.filmDescription').append(data.description);
    $('.filmProducer').append(data.producer);
    filmPostersGet(data.id, onPosterSuccess, onPosterError);
    console.log(data);
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
var randomImage = function() {
    var image = Math.floor(Math.random() * 6) + 1;
    backgroundImageGet(image, onImageSuccess, onImageError)
}

var onImageSuccess = function(data) {
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
        flag : {
            scaledSize: new google.maps.Size(60, 60),
            url: '/Content/img/totoroTop2.png'
        }
    }, {
        lat: 35.696238,
        lng: 139.568243,
        title: "Ghibli Museum",
        flag: {
            scaledSize: new google.maps.Size(70, 70),
            url: '/Content/img/Flying_totoro.png'
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