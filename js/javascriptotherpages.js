// JavaScript Document

$(document).ready(function() {
		
		
$('.searchbar').animate({top: '400px'},500)
$('.searchbar').animate({top: '350px'},150)
$('.searchbar').animate({top: '400px'},150)
$('.searchbuttonbar').delay(50).animate({top: '480px'},500)
$('.searchbuttonbar').animate({top: '430px'},150)
$('.searchbuttonbar').animate({top: '480px'},150)

$('.growingtrees img:nth-child(1)').delay(300).animate({top: '0px'},1100);
$('.growingtrees img:nth-child(2)').delay(400).animate({top: '5px'},900);
$('.growingtrees img:nth-child(3)').delay(600).animate({top: '20px'},1000);

$('.signuptree').animate({bottom:'0px'},700);
$('.details').delay(300).animate({bottom: '35%'},700);
$('.signupbutton').delay(500).animate({bottom: '20%'},700);


$('.footerprofile').animate({bottom: '0px'},500)
$('.mask').animate({bottom: '0px'},700)
$('.footermain').animate({bottom: '0px'},700)
$('.blogbutton').animate({top: '0px'},500)
$('.progressionbutton').animate({top: '0px'},500)
$('.searchgardensbutton').delay(300).animate({top: '0px'},500)
$('.adjustcamerabutton').delay(375).animate({top: '0px'},500)
$('.homebutton').delay(150).animate({top: '0px'},500)
$('.fullscreenbutton').delay(225).animate({top: '0px'},500)
$('.pot').delay(500).animate({bottom: '0px'},500)
$('.dirt').delay(500).animate({bottom: '248px'},500)
$('.optionplant').delay(550).animate({bottom: '-50px'},1000)


$('.link1').delay(50).animate({top: '270px'},500)
$('.link1').animate({top: '250px'},150)
$('.link1').animate({top: '270px'},150)

$('.link2').delay(100).animate({top: '270px'},500)
$('.link2').animate({top: '200px'},150)
$('.link2').animate({top: '270px'},150)

$('.link3').delay(75).animate({top: '270px'},500)
$('.link3').animate({top: '200px'},150)
$('.link3').animate({top: '270px'},150)


/*FULL SCREEN*/
$('.fullscreenbutton').click(function() {
	$('.exitfullscreen').animate({top: '0px'},500)
	$('.footerprofile').animate({bottom: '-300px'},700)
	$('.mask').animate({bottom: '-300px'},700)
	$('.blogbutton').animate({top: '-1000px'},500)
	$('.progressionbutton').animate({top: '-100px'},500)
	$('.searchgardensbutton').delay(300).animate({top: '-100px'},500)
	$('.adjustcamerabutton').delay(375).animate({top: '-100px'},500)
	$('.homebutton').delay(150).animate({top: '-100px'},500)
	$('.fullscreenbutton').delay(225).animate({top: '-100px'},500)
	$('.pot').delay(300).animate({bottom: '-290px'},500)
	$('.dirt').delay(300).animate({bottom: '-40px'},500)
	$('.optionplant').delay(300).animate({bottom: '-450px'},500)
});

$('.exitfullscreen img').hover(function(event) {
	event.preventDefault();
	if($(this).hasClass('nothovering')){
	$('.exitfullscreen img').animate({opacity: '0.3'},500);
	$(this).removeClass('nothovering');
	} 
else {
		$('.exitfullscreen img').animate({opacity: '1'},500);
		$(this).addClass('nothovering');	
	}
		return false;
});

/*Exit Full Screen*/
$('.exitfullscreen').click(function() {
	$('.footerprofile').animate({bottom: '0px'},500)
$('.mask').animate({bottom: '0px'},700)
$('.footermain').animate({bottom: '0px'},700)
$('.blogbutton').animate({top: '0px'},500)
$('.progressionbutton').animate({top: '0px'},500)
$('.searchgardensbutton').delay(300).animate({top: '0px'},500)
$('.adjustcamerabutton').delay(375).animate({top: '0px'},500)
$('.homebutton').delay(150).animate({top: '0px'},500)
$('.fullscreenbutton').delay(225).animate({top: '0px'},500)
$('.pot').delay(300).animate({bottom: '0px'},500)
$('.dirt').delay(300).animate({bottom: '250px'},500)
$('.optionplant').delay(300).animate({bottom: '-50px'},500)
$('.exitfullscreen').animate({top:'-100px'},500)

});


$('.plantmenuwrap').hover(function(event) {
	event.preventDefault();
	if($(this).hasClass('isDown')){
	$('.optionplant').animate({bottom: '-50px'},500);
	$(this).removeClass('isDown');
	} 
else {
		$('.optionplant').animate({bottom: '250px'},500);
		$(this).addClass('isDown');	
	}
		return false;
});


$('.link1').hover(function(event) {
	event.preventDefault();
	if($(this).hasClass('isDown')){
	$('.tumblrtree').animate({top: '200px'},500);
	$(this).removeClass('isDown');
	} else {
		$('.tumblrtree').animate({top: '-80px'},500);
		$(this).addClass('isDown');	
	}
		return false;
});


$('.link2').hover(function(event) {
	event.preventDefault();
	if($(this).hasClass('isDown')){
	$('.facebooktree').animate({top: '200px'},500);
	$(this).removeClass('isDown');
	} else {
		$('.facebooktree').animate({top: '-80px'},500);
		$(this).addClass('isDown');	
	}
		return false;
});

$('.link3').hover(function(event) {
	event.preventDefault();
	if($(this).hasClass('isDown')){
	$('.twittertree').animate({top: '200px'},500);
	$(this).removeClass('isDown');
	} else {
		$('.twittertree').animate({top: '-80px'},500);
		$(this).addClass('isDown');	
	}
		return false;
});

});






