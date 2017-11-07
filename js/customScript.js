//smoothScroll
$(document).ready(function() {
  $('.js-scrollTo').on('click', function() { // Au clic sur un élément
    var page = $(this).attr('href'); // Page cible
    var speed = 750; // Durée de l'animation (en ms)
    $('html, body').animate( { scrollTop: $(page).offset().top }, speed ); // Go
    return false;
  });
});
//bouncetimeline
jQuery(document).ready(function($){
	var timelineBlocks = $('.cd-timeline-block'),
		offset = 0.8;


	//hide timeline blocks which are outside the viewport
	hideBlocks(timelineBlocks, offset);

	//on scolling, show/animate timeline blocks when enter the viewport
	$(window).on('scroll', function(){
		(!window.requestAnimationFrame)
			? setTimeout(function(){ showBlocks(timelineBlocks, offset); }, 100)
			: window.requestAnimationFrame(function(){ showBlocks(timelineBlocks, offset); });
	});

	function hideBlocks(blocks, offset) {
		blocks.each(function(){
			( $(this).offset().top > $(window).scrollTop()+$(window).height()*offset ) && $(this).find('.cd-timeline-img, .cd-timeline-content').addClass('is-hidden');
		});
	}

	function showBlocks(blocks, offset) {
		blocks.each(function(){
			( $(this).offset().top <= $(window).scrollTop()+$(window).height()*offset && $(this).find('.cd-timeline-img').hasClass('is-hidden') ) && $(this).find('.cd-timeline-img, .cd-timeline-content').removeClass('is-hidden').addClass('bounce-in');
		});
	}
});

	hideScrollButton();
	function hideScrollButton(){
		link = document.getElementById('scrollTopButton').classList;
		$(window).on('scroll', function(){
			if($(document).scrollTop() > ($(window).height() / 2) )
			{
				if(link.contains("is-hidden"))
				{
					link.remove( "is-hidden" );
				}
			}
			else{
				if(!link.contains("is-hidden"))
				{
					link.add('is-hidden');
				}
			}

		});
	}