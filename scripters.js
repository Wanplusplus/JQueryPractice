    $(document).ready(function() {
    // Hide all tutorial sections initially
    $(".tutorial-section").hide();
    
    // Show the selected tutorial based on the menu link clicked
    $("#menu ul li a").click(function(e) {
        e.preventDefault();
        var tutorial = $(this).data("tutorial");
        // Hide all sections and show the selected one
        $(".tutorial-section").hide();
        $("#" + tutorial).show();
    });
    
    // Tutorial actions
    $("#var-submit").click(function() {
        var name = $("#var-name").val();
        var age = $("#var-age").val();
        $("#output-variables").html("Name: " + name + "<br>Age: " + age);
    });
    
    $("#add-submit").click(function() {
        var num1 = parseFloat($("#num1").val());
        var num2 = parseFloat($("#num2").val());
        var sum = num1 + num2;
        $("#output-add-numbers").html("Sum: " + sum);
    });
    
    $("#grade-submit").click(function() {
        var grade = parseFloat($("#grade").val());
        if (grade >= 50) {
        $("#output-if-statement").html("Student Passed!");
        } else {
        $("#output-if-statement").html("Student Failed!");
        }
    });
    
    $("#loop-submit").click(function() {
        var num = parseInt($("#loop-num").val());
        var output = "";
        for (var i = 0; i < num; i++) {
        output += "Iteration " + (i + 1) + "<br>";
        }
        $("#output-loops").html(output);
    });
    
    $("#array-submit").click(function() {
        var values = $("#array-values").val().split(",");
        $("#output-arrays").html("Array: [" + values + "]");
    });
    
    $("#string-submit").click(function() {
        var str = $("#string-input").val();
        var num = parseInt(str);
        $("#output-strings").html("Converted Number: " + num);
    });
    
    $("#function-submit").click(function() {
        var name = $("#function-name").val();
        var message = "Hello, " + name + "!";
        $("#output-functions").html(message);
    });
    
    $("#myButton").click(function() {
        alert("You clicked a button!");
    });
    
    $("#control-submit").click(function() {
        var selectedValue = $("#mySelect").val();
        $("#output-control-manipulation").html("Selected Option: " + selectedValue);
    });
    });