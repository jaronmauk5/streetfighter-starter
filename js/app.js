$(document).ready(function() {
	$('.ryu').mouseenter(function() {
		$('.ryu-still').hide();
		$('.ryu-ready').show();
	})
	.mouseleave(function() {
		$('.ryu-ready').hide();
		$('.ryu-still').show();
	})
	.mousedown(function() {
		//play hadouken sound effect
		playHadouken();
		$('.ryu-ready').hide();
		$('.ryu-throwing').show();
		$('.hadouken').finish().show().animate(
			{'left':'1020px'},
			500,
			function(){
				$(this).hide();
				$(this).css('left','520px');
			});
	})
	.mouseup(function() {
		$('.ryu-throwing').hide();
		$('.ryu-ready').show();
	});
	

	$(document).keydown(function(event){
		var x=event.keyCode;
		//console.log('x was pressed',x);
		if(x == 88){   
			//88=keyCode for x
			$('.ryu-ready').hide();
			$('.ryu-cool').show();
		}
	})

	.keyup(function(){
		$('.ryu-cool').hide();
		$('.ryu-ready').show();
	});
	
}); //doc.ready


	

function playHadouken() {
			$('#hadouken-sound')[0].volume = 0.5;
			$('#hadouken-sound')[0].load();
			$('#hadouken-sound')[0].play();
		}