function search(){
  $("#movies").empty();
  var usersearchkeyword = document.getElementById('keyword').value;
  var url ="http://www.omdbapi.com/?apikey=9e6320eb&t=";
  var key  = "9e6320eb";
  var full = "&plot=full";
  var data = url+usersearchkeyword;
  // replace spaces with '+'

  $.get(url,data).done(function(response){
    console.log(JSON.stringify(response));

    $("#movies").append(
      '<table class="results">'
      +'<tr>'+'<td rowspan="8"><img src="'+response.Poster+'" height="450"></td>'+'</tr>'
      +'<tr>'+'<td><p>'+response.Title+' ('+response.Year+')</p></td>'+'</tr>'
      +'<tr>'+'<td><p>'+response.Runtime+'</p></td>'+'</tr>'
      +'<tr>'+'<td><p>'+response.Genre+'</p></td>'+'</tr>'
      +'<tr>'+'<td><p>'+response.Rated+'</p></td>'+'</tr>'
      +'<tr>'+'<td><p>'+response.Plot+'</p></td>'+'</tr>'
      +'<tr>'+'<td><p>Metascore: '+response.Metascore+'</p></td>'+'</tr>'
      +'<tr>'+'<td><p>imdb Rating: '+response.imdbRating+'</p></td>'+'</tr>'
      +'</table>'
    );

  });
}

$(document).ready(function(){
  $("#search").on("click",search);
});
