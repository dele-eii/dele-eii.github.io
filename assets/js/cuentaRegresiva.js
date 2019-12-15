var end = new Date('12/16/2019 00:00');

var _second = 1000;
var _minute = _second * 60;
var _hour = _minute * 60;
var _day = _hour * 24;
var timer;

function showRemaining() {
    var now = new Date();
    var distance = end - now;
    if (distance < 0) {

        clearInterval(timer);
        document.getElementById('countdown').innerHTML = '<a href="https://forms.gle/GJev39UKPuQ6Nz549" class="btn btn-danger btn-lg">Pre-Inscribirse</a>';

        return;
    }
    var days = Math.floor(distance / _day);
    var hours = Math.floor((distance % _day) / _hour);
    var minutes = Math.floor((distance % _hour) / _minute);
    var seconds = Math.floor((distance % _minute) / _second);

    document.getElementById('countdown').innerHTML = days + ' dias, ';
    document.getElementById('countdown').innerHTML += hours + ' horas, ';
    document.getElementById('countdown').innerHTML += minutes + ' minutos y ';
    document.getElementById('countdown').innerHTML += seconds + ' segundos';
}

timer = setInterval(showRemaining, 1000);