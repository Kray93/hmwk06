var cities = [];

function mainFunction() {
    currWeather();
    forecast();
};
function currWeather() {
    var userInput = $("input").val();
    // console.log(userInput);
    var queryUrl = "https://api.openweathermap.org/data/2.5/weather?q=" +userInput+ "&units=imperial&appid=2c062c555c4ce4c855a0024b2b9ccef3";
    
    $.ajax({
        url: queryUrl,
        method: "GET"
    }).then(function(response){
        console.log(response);
        $("#today").empty();
        
        var currCity = response.name;
        var cityTag = $("<h1>").text(currCity);
        $("#today").append(cityTag);
        
        var currTemp = response.main.temp;
        var tempTag = $("<h5>").text("Temperature: " + currTemp);
        $("#today").append(tempTag);
        console.log(currTemp);

        var currWind = response.wind.speed;
        var windTag = $("<h5>").text("Wind speed: " + currWind);
        $("#today").append(windTag);

        var currHum = response.main.humidity;
        var humTag = $("<h5>").text("Humidity: " + currHum);
        $("#today").append(humTag);
    });
};

function forecast() {
    var userInput = $("input").val();
    var queryUrl = "https://api.openweathermap.org/data/2.5/forecast?q=" + userInput + "&units=imperial&appid=df49e2d92666e0dade8660d881bd4419";

    $.ajax({
        url: queryUrl,
        method: "GET"
    }).then(function(response){
        console.log(response);
        // forecast day 1 of 5
        var date1 = $("#date1").text("Date: " + response.list[0].dt_txt);
        $("#date1").append(date1);

        var temp1 = $(".currTemp1").text("Temp: " + response.list[0].main.temp);
        $(".currTemp1").append(temp1);

        var hum1 = $(".currHum1").text("Humidity: " + response.list[0].main.humidity);
        $(".currHum1").append(hum1);
        
         // forecast day 2 of 5
        var date2 = $("#date2").text("Date: " + response.list[9].dt_txt);
        $("#date2").append(date2);

        var temp2 = $(".currTemp2").text("Temp: " + response.list[9].main.temp);
        $(".currTemp2").append(temp2);

        var hum2 = $(".currHum2").text("Humidity: " + response.list[9].main.humidity);
        $(".currHum2").append(hum2);
        
         // forecast day 3 of 5
        var date3 = $("#date3").text("Date: " + response.list[17].dt_txt);
        $("#date3").append(date3);

        var temp3 = $(".currTemp3").text("Temp: " + response.list[17].main.temp);
        $(".currTemp3").append(temp3);

        var hum3 = $(".currHum3").text("Humidity: " + response.list[17].main.humidity);
        $(".currHum3").append(hum3);
        
         // forecast day 4 of 5
        var date4 = $("#date4").text("Date: " + response.list[25].dt_txt);
        $("#date4").append(date4);

        var temp4 = $(".currTemp4").text("Temp: " + response.list[25].main.temp);
        $(".currTemp4").append(temp4);

        var hum4 = $(".currHum4").text("Humidity: " + response.list[25].main.humidity);
        $(".currHum4").append(hum4);
        
         // forecast day 5 of 5
        var date5 = $("#date5").text("Date: " + response.list[33].dt_txt);
        $("#date5").append(date5);

        var temp5 = $(".currTemp5").text("Temp: " + response.list[33].main.temp);
        $(".currTemp5").append(temp5);

        var hum5 = $(".currHum5").text("Humidity: " + response.list[33].main.humidity);
        $(".currHum5").append(hum5);
       
        // TODO: ajax inside ajax for symbol?
        // var icon = 
        var symbolUrl = "http://openweathermap.org/img/wn/" + response.list[1].weather[0].icon + ".png"

        $.ajax({
            url: symbolUrl,
            method: "GET"
        }).then(function(response1){
            console.log(response);
            $(".symbol1").empty()
            // var symbol1 = response.list[1].weather[0].icon;
            var newImg1 = $(`<img src="${symbolUrl}">`);
            $(".symbol1").append(newImg1);
            symbolUrl = "http://openweathermap.org/img/wn/" + response.list[8].weather[0].icon + ".png"
            var newImg2 = $(`<img src="${symbolUrl}">`);
            $(".symbol2").append(newImg2);
            symbolUrl = "http://openweathermap.org/img/wn/" + response.list[16].weather[0].icon + ".png"
            var newImg3 = $(`<img src="${symbolUrl}">`);
            $(".symbol3").append(newImg3);
            symbolUrl = "http://openweathermap.org/img/wn/" + response.list[24].weather[0].icon + ".png"
            var newImg4 = $(`<img src="${symbolUrl}">`);
            $(".symbol4").append(newImg4);
            symbolUrl = "http://openweathermap.org/img/wn/" + response.list[32].weather[0].icon + ".png"
            var newImg5 = $(`<img src="${symbolUrl}">`);
            $(".symbol5").append(newImg5);
        });  
    }); 
};

function pushCities() {
    var userInput = $("input").val();
    cities.push(userInput)
    // console.log("test" + cities);
    storeCities();
    getCities();
};

function storeCities() {
    localStorage.setItem('cities', JSON.stringify(cities));
};

function getCities() {
    var storedCities = JSON.parse(localStorage.getItem("cities"));
    if (storedCities !== null) {
        cities = storedCities;
    }
    createBtn();
};

function createBtn(event) {
    $(".searchResults").empty();
    for (var i = 0; i < cities.length; i++) {
        var city = cities[i];
        var newBtn = $("<button>").text(city);
        $("button").addClass("newSearch");
        $(".searchResults").append(newBtn);
    };
};

getCities();

$(".searchBtn").on("click", function (event) {
    // console.log("consider me searched");
    // console.log($(this).prev().val());
    event.preventDefault();
    forecast();
    currWeather();
    pushCities();
    $("input").val("");
});

$("form").on("submit", function (event) {
    // console.log("consider me searched");
    // console.log($(this).prev().val());
    event.preventDefault();
    forecast();
    currWeather();
    pushCities();
    $("input").val("");
});

// TODO: onclick for new city search result buttons
// $(document).on("click", ".newSearch", function() {
//     mainFunction();
// });