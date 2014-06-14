/*!
 * jQuery scrollTo plugin
 * 
 * Copyright Mirko Renzetti
 */

(function($) {
	$.fn.scrollto = function(options) {

		var defaults = {
			'speed': 400,
			'easing': 'swing'
		};
		var custom = $.extend(defaults, options);

		return this.each(function() {
			var $link = $(this);
			$link.on('click', function(e) {
				var parts = /^#(.+)$/.exec($(this).attr('href'));
				if(!parts) 
					return;
				
				e.preventDefault();
				var $target = $('[id='+parts[1]+'], [name='+parts[1]+']').first();
				var targetOffset = $target.offset().top;
				$('html,body').animate({
					scrollTop: targetOffset
				},
				custom.speed,
				custom.easing, 
				function(){
					window.location.hash = parts[1];
				});
			});
		});

	};
})(jQuery);
