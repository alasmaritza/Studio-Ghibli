var filmsGet = function (id, onSuccess, onError) {
    var url = "https://ghibliapi.herokuapp.com/films/" + id;
    var settings = {
        cache: false,
        contentType: "application/x-www-form-urlencoded; charset=UTF-8",
        dataType: "json",
        success: onSuccess,
        error: onError,
        type: "GET"
    }
    $.ajax(url, settings)
}

var filmsGetAll = function (onSuccess, onError) {
    var url = "https://ghibliapi.herokuapp.com/films"
    var settings = {
        cache: true,
        contentType: "application/x-www-form-urlencoded; charset=UTF-8",
        dataType: "json",
        success: onSuccess,
        error: onError,
        type: "GET"
    }
    $.ajax(url, settings)
}

var filmPostersGet = function (id, onSuccess, onError) {
    var url = "http://58d1698a04de34120083b4aa.mockapi.io/Ghibli/posters/" + id
    var settings = {
        cache: false,
        contentType: "application/x-www-form-urlencoded; charset=UTF-8",
        dataType: "json",
        success: onSuccess,
        error: onError,
        type: "GET"
    }
    $.ajax(url, settings)
}

var backgroundImageGet = function (id, onSuccess, onError) {
    var url = "http://58d1a87804de34120083b4df.mockapi.io/images/images/" + id
    var settings = {
        cache: false,
        contentType: "application/x-www-form-urlencoded; charset=UTF-8",
        dataType: "json",
        success: onSuccess,
        error: onError,
        type: "GET"
    }
    $.ajax(url, settings)
}