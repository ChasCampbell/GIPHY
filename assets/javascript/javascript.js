$(document).ready(function() {
    // Variables
    var topics = ["Oprah Winfrey", "Stephen Colbert", "Heidi Klum", "Simon Cowell", "Tyra Banks", "Jimmy Fallon", "Ellen Degenres", "Stephen Tyler", "Vanna White", "Jay Leno"];
    var queryURLbase = "https://api.giphy.com/v1/gifs/search?q=";
    var apiKey = "?limit=10&api_key=dc6zaTOxFJmzC";
    var enteredName;
    var btnCount = 0;
    var btnId = "";
    var personalityName = "";
    var nameTrimmed = "";
    var queryURL;
    var rating = "g";
    var stillUrl;
    var loopUrl;
    var addedCount = 0;
    var addedDivCount = 0;
    var divId = 0;
    var photoId = 0;
    var result = {};
    var theResults = {};
    var pictureNumber = 0;
    var ObjKey = {};

    // Build the URL.
    queryURL = queryURLbase + nameTrimmed + apiKey;

    // Create 10 buttons.
    for (var i = 0; i < 10; i++) {
        btnCount = btnCount + 1;
        btnId = "btnId" + i;
        var person = topics[i];
        $(".buttons").append("<button class='allbtns' id='" + btnId + "'>" + person + "</button>");
    } // End of for.

    //  Event handler.
    $(".allbtns").on("click", function() {

        // This is for the user to add buttons. Needs updating since I did the rest of the coding.
        // if (this.id === "userButton") { // Check if action initiated to add to the original ten.
        //     btnId = "btnId" + btnCount; // Doing this first to skip the initial ten steps after one time.
        //     person = $("this"0.attr("action");
        //     $(".buttons").append("<button class='allbtns' id='" + btnId + "'>" + person + "</button>");
        //     btnCount = btnCount + 1;
        //     $.ajax({
        //             url: queryURL,
        //             method: "GET"
        //         }) // Close ajax start.
        //         .done(function(result) {
        //             addedCount = addedCount + 1; // Track the total added and add for each new.
        //             divId = divId + addedCount; // To provide a unique id for each div.
        //             photId = photoId + addedCount; // Unique id for each picture.
        //             // console.log(result.data[i].rating);
        //             // console.log(result.data[i].images.fixed_width_small_still);
        //             // console.log(result.data[i].images.looping.mp4);
        //             $(".pictureSpace").append("<div class='" + divId + "'>");
        //             $(".divId").append("<img class='added' id='" + photoId + "'>");
        //             $(".divId").append("<p>'  + console.log(result.data[0].rating) + '</p>");
        //         }); //End of .done and .ajax
        // } // End of if portion of if-else.
        // else { // To build the first ten.
        //     personalityName = $(this).text();
        //     nameTrimmed = personalityName.replace(/\s+/g, '');
        //     console.log(nameTrimmed);

        // Get the ratings,  still pictures, and looping pictures
        $.ajax({
                url: queryURL,
                method: "GET"
            }) //Close ajax start

            .done(function(result) {
                for (i = 0; i < 10; i++) {
                    // addedDivCount = addedDivCount + 1; // Gives count before user additions.
                    divId = "div" + i; // To provide a unique id for each div.
                    photoId = "photo" + i;
                    // Unpack the object to associate each picture's information with the image tags.
                    objKey = "p" + (pictureNumber + i).toString();
                    theResults[i] = {
                        objKey: {
                            rating: "result.data[i].rating",
                            stillUrl: "result.data[i].images.fixed_width_small_still",
                            loopUrl: "result.data[i].images.looping.mp4"
                        } // End of object inside object.
                    }; // End of object.
                    console.log(result.data[i].images.fixed_width_small_still);
                    // Load the picture space.
                    $(".pictureSpace").append("<div class='" + divId + "'></div>");
                    $("." + divId).append("<img class = 'allPictures' id ='" + photoId + "' type = 'input'>Image</img>");
                    $("." + divId).append("<p>" + result.data[i].rating + "</p>");;
                    $("." + photoId).attr("src", result.data[i].images.fixed_width_small_still);
                    $("." + photoId).attr("alt", " + person + ");
                    $("." + photoId).attr("data-status", "still");

                } //End of for loop.
                //   } // End of else from above.
            }); //End of .done and .ajax
    }); // End of .on(click)

    $(".allPictures").on("click", function() { // To alternate still and looping.
        if (this.data - status === "still") {
            $("this").attr("src", theResults.objKey.loopUrl);
            $("this").attr("data-status", "loop");
        }
        else {
            $("this").attr("src", theResults.objKey.still);
            $("this").attr("data-status", "still");
        } // End of else
    }); // End of for

}); // Closes document.ready
