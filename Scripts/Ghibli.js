function startUp() {
$('.search').on('click', searchFilms);
console.log("I'm working!")
}

searchFilms = function() {
    $('.film').empty();
    $('html, body').animate({
        scrollTop : $('.filmInfo').offset().top
    }, 2000);
    var name = $('#filmName').val().toLowerCase();
    if (name == 'my neighbor totoro') {
        var id = 3;
        filmsGet(id, onSuccess, onError);
    } else if (name == 'castle in the sky'){
        var id = 1;
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
    }
    return false
}

onSuccess = function(data) {
    
    $('.filmTitle').append(data.title);
    $('.filmYear').append(data.release_date);
    $('.filmDirector').append(data.director);
    $('.filmDescription').append(data.description);
    $('.filmProducer').append(data.producer);
    console.log(data);
}

onError = function() {
    $('.filmTitle').append("Nothing Found!");
    console.log("I'm broken.");
}

$(document).ready(startUp);