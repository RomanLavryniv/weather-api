var button = document.querySelector('.button');
var inputValue = document.querySelector('.inputValue');

var d = new Date();
var day = d.getDate();
var month = d.getMonth();
month++;
var year = d.getFullYear();

button.addEventListener('click', function () {
    fetch('http://api.openweathermap.org/data/2.5/weather?q=' + inputValue.value + '&appid=0a67b7e53385e2ba59c8e562dcf2ffa6')
        .then(function (resp) { return resp.json() })
        .then(function (data) {
            console.log(data);
            document.querySelector('.package-name').textContent = data.name;
            document.querySelector('.price').innerHTML = Math.round(data.main.temp - 273) + '&deg;' + 'c';
            document.querySelector('.price_min').innerHTML = Math.round(data.main.temp_min - 273) + '&deg;' + 'c';
            document.querySelector('.price_max').innerHTML = Math.round(data.main.temp_max - 273) + '&deg;' + 'c';
            document.querySelector('.speed').innerHTML = Math.round(data.wind.speed);
            document.querySelector('.disclaimer').textContent = data.weather[0]
            ['description'];
            document.querySelector('.features, li').innerHTML = `<img src="https://openweathermap.org/img/wn/${data.weather[0]['icon']}@2x.png">`;
            document.querySelector('.date').innerHTML = day + "." + month + "." + year;

            if (inputValue.value) {
                document.querySelectorAll('.min_max_temp').forEach(function (element) {
                    element.style.display = 'block';
                })
            }
        })
        .catch(function err() {
            alert('Wrong city name!');
            document.querySelectorAll('.min_max_temp').forEach(function (element) {
                element.style.display = 'none';
            })
        })
});