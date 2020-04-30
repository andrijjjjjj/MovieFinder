var x = 0;

var comment_array = Array();
var rating_array = Array();
var user_array = Array();

function add_element_to_array(){
comment_array[x] = document.getElementById("review").value;
rating_array[x] = document.getElementById("rating").value;
 alert( "Your review has been recorded");
 x++;
 document.getElementById("review").value = "";
}

function display_array(){
   var e = "<hr/>";
   for (var y=0; y<comment_array.length; y++)
   {
     e += "<h4>"+window.location.hash.substring(1)+" says: This movie is "+rating_array[y]+"!<br>Comments: "+comment_array[y]+"<br></h4>";
   }
   document.getElementById("Result").innerHTML = e;
}

// search function
function search(){
  $("#movies").empty();
  var usersearchkeyword = document.getElementById('keyword').value;
  var url ="http://www.omdbapi.com/?apikey=9e6320eb&t=";
  var key  = "9e6320eb";
  var full = "&plot=full";
  var data = url+usersearchkeyword;

  $.get(url,data).done(function(response){
    console.log(JSON.stringify(response));
    if(response.Response == "False"){
      $("#movies").append('<h4>'+usersearchkeyword+' not found :(</h4>');
    }
    else{
      $('body').css('backgroundImage', 'url('+response.Poster+')');
      $("#movies").append(
        '<table class="results">'
        +'<tr>'+'<td rowspan="8"><img src="'+response.Poster+'" height="450"></td>'+'</tr>'
        +'<tr>'+'<td><h3>'+response.Title+' ('+response.Year+')</h3></td>'+'</tr>'
        +'<tr>'+'<td><h3>'+response.Runtime+'</h3></td>'+'</tr>'
        +'<tr>'+'<td><h3>'+response.Genre+'</h3></td>'+'</tr>'
        +'<tr>'+'<td><h3>'+response.Rated+'</h3></td>'+'</tr>'
        +'<tr>'+'<td><h3>'+response.Plot+'</h3></td>'+'</tr>'
        +'<tr>'+'<td><h3>Metascore: '+response.Metascore+'</h3></td>'+'</tr>'
        +'<tr>'+'<td><h3>imdb Rating: '+response.imdbRating+'</h3></td>'+'</tr>'
        +'</table>'
      );

      // Jacks modified code
        if(window.location.hash.substring(1) == false){
          $("#movies").append('<h4> Login 🔐 or signup 📝 for a free account to post reviews! </h4><br>');

        }
        else{
        var userName = window.location.hash.substring(1);
        var rating = $(
        '<select id="rating">'
        +'option value="none" selected disabled hidden> Select a rating </option>'
        +'<option value="legendary">A legendary movie</option>'
        +'<option value="great">A great movie</option>'
        +'<option value="good">A good movie</option>'
        +'<option value="mediocre">A mediocre movie</option>'
        +'<option value="bad">A bad movie</option> </select> <br>');
        var commentdiv = $('<textarea id="review" rows="4" cols="50"> </textarea><br>'
        +'<input type="button" id="button1" value="Post a review" onclick="add_element_to_array();"></input> <br>'
        +'<input type="button" id="button2" value="See Review" onclick="display_array();"></input>'
        +'<div id="Result"></div>  ');

        $("#movies").append('<div id="reviews">');
        $("#movies").append('<h4>'+userName+'\'s Review: </h4><br>');
        $("#movies").append(rating);
        $("#movies").append(commentdiv);
        $("#movies").append('</div>');
      }
    }
  });
}
$(document).ready(function(){
  $("#search").on("click",search);
});

// go to login page
function loginPage(){
  window.location.replace("Login.html");
}
$(document).ready(function(){
  $("#loginPage").on("click",loginPage);
});

// cancel login back to homepage
function cancel(){
  window.location.replace("MovieFinder.html");
}
$(document).ready(function(){
  $("#cancel").on("click", cancel);
});

// customizes homepage for logged in & logged out users
function customHome(){
  // if logged in
  if(window.location.hash.substring(1) != ""){
    $("#welcomeMsg").empty();
    $("#welcomeMsg").show();
    $("#welcomeMsg").append('<h4> 👤 Welcome '+window.location.hash.substring(1)+'!</h4>');
    $("#loginPage").hide();
    $("#logout").show();
    $("#signup").hide();
  }
  // if logged out
  else{
    $("#logout").hide();
    $("#loginPage").show();
    $("#welcomeMsg").empty();
    $("#welcomeMsg").hide();
    $("#signup").show();
  }
}
$(document).ready(function(){
  customHome();
});

// login submit button (and signup+login)
function login(){
  window.location.href = 'MovieFinder.html' + '#' + document.getElementById('username').value;
}
$(document).ready(function(){
  $("#login").on("click", login);
});

// go to signup page
function signup(){
  window.location.replace("Signup.html");
}
$(document).ready(function(){
  $("#signup").on("click", signup);
});

// logout submit button
function logout(){
  window.location.href = 'MovieFinder.html';
}
$(document).ready(function(){
  $("#logout").on("click", logout);
});
