$(document).ready(function() {
    // Variables
    var topics = ["Oprah Winfrey", "Stephen Colbert", "Heidi Klum", "Simon Cowell", "Tyra Banks", "Jimmy Fallon", "Ellen Degenres", "Stephen Tyler", "Vanna White", "Jay Leno"];
    var queryURLbase = "https://api.giphy.com/v1/gifs/search?q=";
    var apiKey = "?limit=10&api_key=dc6zaTOxFJmzC";
    var enteredName;
    var btnCount = 0;
    var personalityName = "";
    var nameTrimmed = "";
    var queryURL;
    var rating = "g";
    var stillUrl;
    var loopUrl;
    var status;
    var addedCount;
    var divId;
    var photoId;

    // Build the URL.
    queryURL = queryURLbase + nameTrimmed + apiKey;

    // Create 10 buttons.
    for (var i = 1; i < 11; i++) {
        btnCount = btnCount + 1;
        var btnId = "";
        btnId = "btnId" + i;
        var person = topics[i - 1];

        $(".buttons").append("<button class='allbtns' id='" + btnId + "'>" + person + "</button>");
    } // End of for.


    //  Event handler.
    $(".allbtns").on("click", function() {
        if (this.id = "userButton") { // Check if action initiated to add to the original ten.
            btnId = "btnId" + btnCount;
            console.log(btnId)
            person = personalityName;
            console.log(person);
            $(".buttons").append("<button class='allbtns' id='" + btnId + "'>" + person + "</button>");
            btnCount = btnCount + 1;
            $.ajax({
                    url: queryURL,
                    method: "GET"
                }) // Close ajax start.
                .done(function(result) {
                    addedCount = addedCount + 1; // Track the total added and add for each new.
                    divId = divId + addedCount; // To provide a unique id for each div.
                    photId = PhotoId + addedCount; // Unique id for each picture.
                    // console.log(result.data[i].rating);
                    // console.log(result.data[i].images.fixed_width_small_still);
                    // console.log(result.data[i].images.looping.mp4);
                    $(".pictureSpace").append("<div class='" + divId + "'>");
                    $(".divId").append("<img class='added' id='" + photoId + "'>");
                    $(".divId").append("<p>'  + console.log(result.data[0].rating) + '</p>");
                }); //End of .done and .ajax
        } // End of if portion of if-else.
        else { // To build the first ten.
            personalityName = $(this).text();
            nameTrimmed = personalityName.replace(/\s+/g, '');
            console.log(nameTrimmed);

            $.ajax({
                    url: queryURL,
                    method: "GET"
                }) //Close ajax start
                .done(function(result) {
                    for (i - 0; i < 10; i++) {
                        addedDivCount = addedDivCount + 1; // Gives count before user additions.
                        divId = divId + 1; // To provide a unique id for each div.
                        photoid = photoId + 1;
                        // console.log(result.data[i].rating);
                        // console.log(result.data[i].images.fixed_width_small_still);
                        // console.log(result.data[i].images.looping.mp4);
                        $(".pictureSpace").append("<div class='" + divId + "'")
                        $(".divId").append("<img class='added' id=' + photoId + '>");
                    } //End of for loop.
                }); //End of .done and .ajax
        } // End of else
    }); // End of .on(click)
}); // Closes document.ready
