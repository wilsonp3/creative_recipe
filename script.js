$(document).ready(function() {

    //var print = function(whatever){
        //console.log(whatever);
    //}
    //print("hey print this now");

    //var submitButton = $("#weatherSubmit");
    //var clickFunction = function(e){
    //    e.preventDefault();
        //Note: e.preventDefault() prevents the browser from reloading
        //console.log("You clicked me")
    //submitButton.click(clickFunction);


    //This is the Javascript Way down below of writing what is written above.

    $("#recipeSubmit").click(function(e) {
    	e.preventDefault();
    	var value = $("#recipeInput").val();
        var myurl= "https://api.edamam.com/search?q=" + value + "&app_id=49ac56a7&app_key=4a4b32768a2008bffc546026a066ea8e";
	    $.ajax({
	        url : myurl,
	        dataType : "json",
	        success : function(json) {
		        console.log(json);
                var results = "<ul>"
                for(i=0; i<json.hits.length; i++){
                    results+= '<li><a href="'+ json.hits[i].recipe.url + '" target="blank"><div class="foodImage"><img src="' + json.hits[i].recipe.image + '"></div><div class="description"><h4>' + json.hits[i].recipe.label + "</h4><ul>";
                    for(j=0; j<json.hits[i].recipe.ingredientLines.length; j++){
                        results+= "<li>" + json.hits[i].recipe.ingredientLines[j] + "</li>";
                    }
                    results+= "</ul></div></a></li>"
                }

                results += "</ul>";
                $("#recipeResults").html(results);
	        }
	    });

    });

});
