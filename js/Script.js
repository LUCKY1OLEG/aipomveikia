$(function() {
    $('.sound-on').on('click', function(){
			console.log('turn up the sound');
			// inline if statement
			// kintamasis = salyga ? 'grazina jei true' : 'grazina jei false';
			var text = $(this).html() === 'OFF' ? 'ON' : 'OFF';
			$(this).html(text);
    });
});
//alert("hi");