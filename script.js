var cities = [];


function mainFunction() {
    var userInput = $(".input").val()
    
    var queryUrl = "https://api.openweathermap.org/data/2.5/forecast/daily?q=" + userInput + "&cnt=6&units=imperial&appid=2c062c555c4ce4c855a0024b2b9ccef3"
    
    

    $.ajax({
        url: queryUrl,
        method: "GET"
    }).then(function(response){
        console.log(response);
        var currTemp = response.list[0].main.temp
        console.log(currTemp);
    });
    
    
    
};

$(".searchBtn").on("click", function (event) {
    // console.log("consider me searched");
    console.log($(this).prev().val());
    event.preventDefault();
    // $(this).prev.val();
    // $("input").val("");
    // TODO: above ^ error 400...?
    mainFunction();
});




// TODO: onclick for new city search result buttons
// $(document).on("click", ".newSearch", mainFunction() )
