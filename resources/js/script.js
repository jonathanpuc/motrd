$(document).ready(function() {
	$('.donate-btn').hover(function() {
		$(this).addClass('swing');
		$(this).mouseleave(function() {
			$(this).removeClass('swing');
		});

	});

	$('.donate-btn').click(function() {
		$(this).addClass('rollOut');
	});
})