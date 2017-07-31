$(function() {
	var audioElement = document.createElement('audio');
	audioElement.setAttribute('src', 'sounds/song.mp3');
	$(".blocks").hover(
    function() {
       $(this).children('.hidden').addClass('shown');
    },
    function(){
       $(this).children('.hidden').removeClass('shown');
    }
);
     $('.sound-on').on('click', function(){
 		var text = $(this).html() === 'OFF' ? 'ON' : 'OFF';
 		$(this).html(text);
 		if (text === 'ON') {
 			audioElement.play();
 		} else {
 			audioElement.pause();
 		}
    });
 });