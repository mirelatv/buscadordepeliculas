$( document ).ready(function() {
    console.log( "ready!" );
    $("#resultado").hide();
    			

	$('#searchMovie').click(function () {

		document.getElementById("#tabla").innerHTML="";
        
		var query = $("#movieTile").val();

		var movie = theMovieDb.search.getMovie({"query":query}, successCB, errorCB);
	});

 	function successCB (movie){
 	   	$("#resultado").show();
 		    	

 	   	images_uri = "http://image.tmdb.org/t/p/w300//";
		var obj = JSON.parse(movie);
		var results = obj.results;
				
		if (results.length == 0){
			$("#resultado").hide();
			alert("No existe coincidencias, intente otro termino")
		}
		else {
			$(".animacion").hide();
			document.getElementById("#tabla").innerHTML +="<thead><tr><th><center>Titulo Original<center></th><th><center>Poster<center></th></tr></thead>"
			for (i = 0; i < results.length; i++) { 
    			
				
				var title = (obj.results[i].title);
				var imageUrl = images_uri + obj.results[i].poster_path;
					
					
				document.getElementById("#tabla").innerHTML += ("<tr><td><center>" + title + "</center></td><td><center>" + "<img src="+imageUrl+">" + "</center></td></tr>");
					
			}
		}	
	}			
		

 	function errorCB (){

 	   	alert("No ingresaste ningun termino de busqueda, intenta devuelta!");
 	};
});    
