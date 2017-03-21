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