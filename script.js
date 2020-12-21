var cities = [];


// function currWeather() {
//     var userInput = $("input").val();
//     console.log(userInput);
//     var queryUrl = "https://api.openweathermap.org/data/2.5/weather?q=" +userInput+ "&units=imperial&appid=2c062c555c4ce4c855a0024b2b9ccef3";
    
//     $.ajax({
//         url: queryUrl,
//         method: "GET"
//     }).then(function(response){
//         console.log(response);
        
//         var currCity = response.name;
//         var cityTag = $("<h1>").text(currCity);
//         $("#today").append(cityTag);
        
//         var currTemp = response.main.temp;
//         var tempTag = $("<h5>").text("Temperature: " + currTemp);
//         $("#today").append(tempTag);
//         console.log(currTemp);

//         var currWind = response.wind.speed;
//         var windTag = $("<h5>").text("Wind speed: " + currWind);
//         $("#today").append(windTag);

//         var currHum = response.main.humidity;
//         var humTag = $("<h5>").text("Humidity: " + currHum);
//         $("#today").append(humTag);
//     });
// };


function forecast() {
    var userInput = $("input").val();
    var queryUrl = "https://api.openweathermap.org/data/2.5/forecast?q=" + userInput + "&units=imperial&appid=df49e2d92666e0dade8660d881bd4419";

    $.ajax({
        url: queryUrl,
        method: "GET"
    }).then(function(response){
        console.log(response);
        var date1 = $("#date1").text("Date: " + response.list[0].dt_txt);
        $("#date1").append(date1);

        var temp1 = $(".currTemp1").text("Temp: " + response.list[0].main.temp);
        $(".currTemp1").append(temp1);

        var hum1 = $(".currHum1").text("Humidity: " + response.list[0].main.humidity);
        $(".currHum1").append(hum1)
       
        // TODO: ajax inside ajax for symbol?
        // var symbolUrl = "http://openweathermap.org/img/wn/10d@2x.png"

        // $.ajax({
        //     url: symbolUrl,
        //     method: "GET"
        // }).then(function(response1){
        //     console.log(response1);
        //     var symbol1 = $(".symbol1").text(response.list[0].weather[0].icon);
        //     $(".symbol1").append(symbol1);
        // });

        
    });
    
    
    
};

$(".searchBtn").on("click", function (event) {
    // console.log("consider me searched");
    // console.log($(this).prev().val());
    event.preventDefault();
    forecast();
    // currWeather();
});




// TODO: onclick for new city search result buttons
// $(document).on("click", ".newSearch", mainFunction() )
