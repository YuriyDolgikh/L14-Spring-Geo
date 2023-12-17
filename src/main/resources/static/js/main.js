$(document).ready(function(){
    $.getJSON('/rate', function(data) {
        $('#rate').text(data.rates.UAH);
        $('#date').text(data.date);
        $('#ip').text(data.location.ip);
        $('#local').text(data.location.city + " - " + data.location.region + " - " + data.location.country);
    });
}); // WebSockets