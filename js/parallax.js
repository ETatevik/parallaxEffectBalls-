jQuery(document).ready(function($) {
	
	{
		const parent = $('header.parallax-Parent');
		const plBg = $('.parallax > .bg-parallex-et');
		let plBg_X = parseFloat(plBg.css('left'));
		let plBg_Y = parseFloat(plBg.css('top'));
		let step = 1;

		// console.log(plBg, plBg_X, plBg_Y);

		parent.mousemove(function(e) {
			let widthP = $(this).width();
			let heightP = $(this).height();
			let x = Math.floor(e.clientX);
			let y = Math.floor(e.clientY);


			if((x >= 50 && x <= (widthP - 50)) && (y >= 50 && y <= (heightP - 50))) {
				plBg_X = x - (plBg.width()/ 2);
				plBg_Y = y - (plBg.height() / 2);
			}

			// if( ((x > widthP /2  && x <= widthP) && (y >= 0  && y <= heightP / 2))
			// 	|| ((x > widthP/2 && x <= widthP ) && (y > heightP / 2 && y <= heightP)))



			plBg.css({
				left: `${plBg_X}px`,
				top: `${plBg_Y}px`
			});

		});
	}

});