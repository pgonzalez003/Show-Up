$(document).ready(function(){
    $('.parallax').parallax();
    $('select').formSelect();
    $('#indexSubmit').on("click", function(){
        var workoutValue = $('#workoutSelect').find(':selected').val();
        document.location.href = workoutValue;
    })

    var exercise = [
        {
            area:"Chest", 
            motion:["Bench", " Incline Press", " Incline Fly"]
        },
        {
            area:"Back", 
            motion:["Row", " Lat Pull", " Standing Row", " Pull"]
        },
        {
            area: "Bicep",
            motion: ["Standing Curl", " Incline Curl", " Chin Up"]
        },
        {
            area: "Tricep",
            motion: ["Extension", " Dips", " Skull Crusher"]
        },
        {
            area: "Shoulder",
            motion: ["Pull Up", " Military Press", " Rack Pull", " Lateral Raise", " Reverse Fly"]
        },
        {
            area:"Lower", 
            motion:"Squat"
        },
    ];

   for (var i = 0; i < exercise.length; i++) {
        console.log(exercise[i].motion);
        let button = $("<a>");
        button.addClass("btn-floating btn-large waves-effect waves-light red");
        button.attr("id", "areaButton");
        button.attr("data-letter", exercise[i].motion);
        button.text(exercise[i].area);
        

        $(".buttonLanding").append(button);
    }

    $(".btn-floating").on("click", function(){
        for (var i = 0; i < exercise.length; i++) {
        //     // console.log(exercise[i].motion);
            let motionButton = $("<a>");
            motionButton.addClass("btn-floating btn-small waves-effect waves-light red");
            motionButton.attr("id", "motionButton");
            motionButton.attr("data-motion", exercise[i].motion);
            motionButton.text($(this).attr("data-motion"));
            
            $(".textLanding").append(motionButton);
            // let textDisplay = $("<a>");
            // textDisplay.addClass("btn-floating btn-large waves-effect waves-light red");
            // textDisplay.text($(this).attr("data-letter"));
            // $(".textLanding").append(textDisplay);
        }
        })

    // $("#motionButton").on("click", function(){
    //     let textDisplay = $("<div>");
    //     textDisplay.text($(this).attr("data-motion"));
    //     $(".motionLanding").append(textDisplay);
    // })

    $("#delete").on("click", function(){
        $(".textLanding").empty();
    })

    // $("#save").on("click", function(){
    //     $(".saveLanding").append($(".textLanding"))
    // })


});

