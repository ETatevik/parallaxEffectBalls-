jQuery(document).ready(function($) {
	
	{
		const parent = $('header.parallax-Parent');
		const plBg = $('.parallax > .bg-parallex-et');
		let plBg_X = parseFloat(plBg.css('left'));
		let plBg_Y = parseFloat(plBg.css('top'));
		let step = 1;

		parent.mousemove(function(e) {
			let widthP = $(this).width();
			let heightP = $(this).height();
			let x = Math.floor(e.clientX);
			let y = Math.floor(e.clientY);


			if((x >= 50 && x <= (widthP - 50)) && (y >= 50 && y <= (heightP - 50))) {
				plBg_X = x - (plBg.width()/ 4);
				plBg_Y = y - (plBg.height() / 4);
			}

			if(x + plBg.width() >= widthP + plBg.width() / 4){
				plBg_X = widthP - (plBg.width() - 50);
			}

			if( y + plBg.height() >= heightP +plBg.height() / 4){
				plBg_Y = heightP - (plBg.height() - 50);
			}

			plBg.css({
				left: `${plBg_X}px`,
				top: `${plBg_Y}px`
			});

		});
	}

});