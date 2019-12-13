jQuery(document).ready(function($) {
	
	{
		const parent = $('header.parallax-Parent');

		const plBg = $('.parallax > .bg-parallex-et');
		let plBg_X = parseFloat(plBg.css('left'));
		let plBg_Y = parseFloat(plBg.css('top'));

		const ball_left = $('.box-left-et');
		let left_X = parseFloat(ball_left.css('left'));
		let left_Y = parseFloat(ball_left.css('top'));

		const ball_right = $('.box-right-et');
		let right_X = parseFloat(ball_right.css('right'));
		let right_Y = parseFloat(ball_right.css('top'));

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
				plBg_X = widthP - (plBg.width() - 100);
			}

			if( y + plBg.height() >= heightP +plBg.height() / 4){
				plBg_Y = heightP - (plBg.height() - 100);
			}

			if( (x >= 0 && x <= widthP/2)){
				left_X = -30;
			}
			if( (x > widthP/2 && x <= widthP)){
				left_X = -5;
			}
			
			if( (y >= 0 && y <= heightP/2)){
				left_Y = -50;
			}
			if( (y > heightP/2 && y <= heightP)){
				left_Y = 20;
			}

			plBg.css({
				left: `${plBg_X}px`,
				top: `${plBg_Y}px`
			});

			ball_left.css({
				left: `${left_X}%`,
				top: `${left_Y}%`
			});

		});
	}

});