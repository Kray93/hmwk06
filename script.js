var cities = [];
var userInput = $(".input").val();
function currWeather() {
    var queryUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + userInput + "&units=imperial&appid=df49e2d92666e0dade8660d881bd4419";
    
    $.ajax({
        url: queryUrl,
        method: "GET"
    }).then(function(response){
        console.log(response);
        
        // var currDate = 
        
        // var currTemp = response.list[0].main.temp;
        // console.log(currTemp);
    });
};


function forecast() {
    var queryUrl = "https://api.openweathermap.org/data/2.5/forecast?q=" + userInput + "&units=imperial&appid=df49e2d92666e0dade8660d881bd4419";

    $.ajax({
        url: queryUrl,
        method: "GET"
    }).then(function(response){
        console.log(response);
        
        // var currDate = 
        
        // var currTemp = response.list[0].main.temp;
        // console.log(currTemp);
    });
    
    
    
};

$(".searchBtn").on("click", function (event) {
    // console.log("consider me searched");
    console.log($(this).prev().val());
    event.preventDefault();
    // $(this).prev.val();
    // $("input").val("");
    // TODO: above ^ error 400...?
    forecast();
});




// TODO: onclick for new city search result buttons
// $(document).on("click", ".newSearch", mainFunction() )
