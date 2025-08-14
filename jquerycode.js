$(document).ready(function(){ //select document
    $("#myButton").click(function(){ //id na sa html file and if u click it
        alert("A button is clicked"); //alert message will happen
        // $("p").hide(); //it will hide all paragraph tags
        $("#academic_program").hide(); // kung specific ids
    });

    $("#showHeaders").prop("disabled",true); // initially off

    $("#hideHeaders").click(function(){ 
        $("h1,h2,h3").hide();
        $("#showHeaders").prop("disabled",false); // will open the showheaders button
        $("#hideHeaders").prop("disabled",true); // will close the hideheaders button
    });

    $("#showHeaders").click(function(){ 
        $("#hideHeaders").prop("disabled",false); // will close the showheaders after
        $("#showHeaders").prop("disabled",true); // will open the hideheaders button
        $("h1,h2,h3").show(); //multiple selection
    });

    $("#changeFontSettings").click(function(){
        $(".details")
            .css("font-size","20px")
            .css("color","blue");
    });

    $("#changeFontSettings").hover(function(){
        $(this).css({ // select itself
        "transform":"scale(1.2)",
        "transition":"transform 0.3s ease"
        })
    });

    $("#changeFontSettings").mouseout(function(){
        $(this).css({
        "transform":"scale(1)",
        "transition":"transform 0.3s ease"
        })
    });

    $("#getValue").click(function(){
        alert("Value:" + $("#userinput").val()); //present input box
    });

    $("#clearValue").click(function(){
        $("#userinput").val(''); // turn input box emptu
    });

    $("#Add").click(function(){
         $("#result").val(parseInt($("#numberA").val()) + parseInt($("#numberB").val())); //present input box
    });
})