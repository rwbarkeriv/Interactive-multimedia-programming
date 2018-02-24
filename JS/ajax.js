$(document).ready(function () {
    $('#getPeople').click(function () {
        $.ajax({
            url: 'https://imp-portfolio-demonstration.herokuapp.com/json/persons.jsonp',
            type: 'GET',
            dataType: 'jsonp'
        });
    });
});

function jsonCallback(response) {
    var names = $('#names');
    names.children('div').remove();

    response.forEach(function (response) {
        var element = $(`<div>${response.name} email: <a href="mailto:${response.email}">${response.email}</a></div>`);
        element.appendTo(names);
    });
}
