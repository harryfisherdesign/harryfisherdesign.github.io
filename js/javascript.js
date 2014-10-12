// JavaScript Document

$(document).ready(function() {
	$('footer h3').hide();
	$('.introtitle').hide();
        $('footer h3').fadeIn(2000);
		$('.introtitle').fadeIn(2000);
		
		
		$(document).one('keypress', function(){  
			$('footer img:nth-child(1)').animate({bottom:'-400px'},500);
			$('footer img:nth-child(2)').animate({bottom:'+5px'},200);
			$('footer img:nth-child(2)').animate({bottom:'-400px'},500);
			$('footer img:nth-child(3)').animate({bottom:'+9px'},200);
			$('footer img:nth-child(3)').animate({bottom:'-400px'},500);
			$('footer h3').animate({bottom:'+20px'},200);
			$('footer h3').animate({bottom:'-400px'},500);
			$('.introtitle').fadeOut(500);
			
		});
		
$(document).one('keypress', function(){  
$('body').delay(700).animate({backgroundColor: '#c9e3b5'},500)  
$('.footermain').delay(500).animate({bottom: '-250px'},500)
$('.blogbutton').delay(500).animate({top: '0px'},500)
$('.searchgardensbutton').delay(800).animate({top: '0px'},500)
$('.homebutton').delay(650).animate({top: '0px'},500)
$('.mainlogo').delay(1000).animate({top: '200px'},300)
$('.mainlogo').animate({top: '125px'},150)
$('.mainlogo').animate({top: '200px'},150)

$('.loginbar').delay(1100).animate({top: '450px'},300)
$('.loginbar').animate({top: '400px'},150)
$('.loginbar').animate({top: '450px'},150)

$('.loginbuttonbar').delay(1150).animate({top: '485px'},300)
$('.loginbuttonbar').animate({top: '435px'},150)
$('.loginbuttonbar').animate({top: '485px'},150)


});

$('.footermain img').click(function(event) {
	event.preventDefault();
	if($(this).hasClass('isDown')){
	$('.footermain').animate({bottom: '+10px'},300).animate({bottom: '-250px'},500);
	$(this).removeClass('isDown');
	} else {
		$('.footermain').animate({bottom: '+10px'},500).animate({bottom: '0px'},300);
		$(this).addClass('isDown');	
	}
		return false;
});



var OAUTH2_CLIENT_ID = 406577624934-lffvum8qghomp8b0d38ihv2u4igtfrdo.apps.googleusercontent.com;
var OAUTH2_SCOPES = [
  'https://www.googleapis.com/auth/youtube'
];

googleApiClientReady = function() {
  gapi.auth.init(function() {
    window.setTimeout(checkAuth, 1);
  });
}

// Attempt the immediate OAuth 2.0 client flow as soon as the page loads.
// If the currently logged-in Google Account has previously authorized
// the client specified as the OAUTH2_CLIENT_ID, then the authorization
// succeeds with no user intervention. Otherwise, it fails and the
// user interface that prompts for authorization needs to display.
function checkAuth() {
  gapi.auth.authorize({
    client_id: OAUTH2_CLIENT_ID,
    scope: OAUTH2_SCOPES,
    immediate: true
  }, handleAuthResult);
}

// Handle the result of a gapi.auth.authorize() call.
function handleAuthResult(authResult) {
  if (authResult && !authResult.error) {
    // Authorization was successful. Hide authorization prompts and show
    // content that should be visible after authorization succeeds.
    $('.pre-auth').hide();
    $('.post-auth').show();
    loadAPIClientInterfaces();
  } else {
    // Make the #login-link clickable. Attempt a non-immediate OAuth 2.0
    // client flow. The current function is called when that flow completes.
    $('#login-link').click(function() {
      gapi.auth.authorize({
        client_id: OAUTH2_CLIENT_ID,
        scope: OAUTH2_SCOPES,
        immediate: false
        }, handleAuthResult);
    });
  }
}

// Load the client interfaces for the YouTube Analytics and Data APIs, which
// are required to use the Google APIs JS client. More info is available at
// http://code.google.com/p/google-api-javascript-client/wiki/GettingStarted#Loading_the_Client
function loadAPIClientInterfaces() {
  gapi.client.load('youtube', 'v3', function() {
    handleAPILoaded();
  });
}




function signinCallback(authResult) {
  if (authResult['status']['signed_in']) {
    // Update the app to reflect a signed in user
    // Hide the sign-in button now that the user is authorized, for example
    document.getElementById('signinButton').setAttribute('style', 'display: none');
  } else {
    // Update the app to reflect a signed out user
    // Possible error values:
    //   "user_signed_out" - User is signed-out
    //   "access_denied" - User denied access to your app
    //   "immediate_failed" - Could not automatically log in the user
    console.log('Sign-in state: ' + authResult['error']);
  }
}


var host = "harryfisherdesign.github.io";
if ((host == window.location.host) && (window.location.protocol != "https:"))
    window.location.protocol = "https";

});




