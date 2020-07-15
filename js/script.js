/* global $ */

  
    $("#search").on("click", function() {
    	var searchTerm = $("#searchTerm").val();
		var url = "https://en.wikipedia.org/w/api.php?action=opensearch&search="+ searchTerm +"&format=json&callback=?"; 
		$.ajax({
			url: url,
			type: 'GET',
			
        	dataType: "json",
        	success: function(result, status) {
        		{ if ($("#searchTerm").val().length == 0){
        			$("#emptySearch").html("Are you going to search or not...");
        			
        		}
        		$("#results").html();
        		for(var i=0;i<result[1].length;i++){
        			$("#output").prepend("<div><div class='well'><a href="+result[3][i]+"><h2>" + result[1][i]+ "</h2>" + "<p>" + result[2][i] + "</p></a></div></div>");
        		}

        	}
		}
    });

     /*  global location */   
     $(".play").on("click", function(){
            location.reload();
     });
}); 


