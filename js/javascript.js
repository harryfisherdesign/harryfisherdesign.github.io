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



function signinCallback(authResult) {
  if (authResult['status']['signed_in']) {
    // Update the app to reflect a signed in user
    // Hide the sign-in button now that the user is authorized, for example:
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


});




