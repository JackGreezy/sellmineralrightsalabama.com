jQuery(function($){


    if ($('body').hasClass('page-people')) {
        $('ul#menu-people-nav li:first-child a').addClass('is-page');
    }
    else if ($('body').hasClass('page-corporate-leadership-team')) { 
         $('ul#menu-people-nav li:nth-child(2) a').addClass('is-page');
    }
    else if ($('body').hasClass('page-fellows')) { 
        $('ul#menu-people-nav li:nth-child(3) a').addClass('is-page');
    }
    else if ($('body').hasClass('page-sector-leaders')) { 
        $('ul#menu-people-nav li:nth-child(4) a').addClass('is-page');
    }

    // Set Show/Hide for ID&E menu

    if ($('body').hasClass('page-id-5692')) {
        $('ul#menu-inclusion-diversity-and-equity li:first-child a').addClass('is-page');
    }
    else if ($('body').hasClass('page-our-culture')) {
        $('ul#menu-inclusion-diversity-and-equity li:nth-child(2) a').addClass('is-page');
    }
    else if ($('body').hasClass('page-our-industry')) {
        $('ul#menu-inclusion-diversity-and-equity li:nth-child(3) a').addClass('is-page');
    }


    // Set Show/Hide for Architecture menu

    if ($('body').hasClass('page-project-list-architecture')) {
        $('#arch-nav').removeClass('hide');
    } 
    else if ($('body').hasClass('page-project-list-aviation-architecture')) { 
        $('#arch-nav').removeClass('hide');
    }
    else if ($('body').hasClass('page-project-list-sports-architecture')) { 
        $('#arch-nav').removeClass('hide');
    }
    else if ($('body').hasClass('page-project-list-transit-architecture')) { 
        $('#arch-nav').removeClass('hide');
    }

    // Show active page in Architecture menu
    if ($('body').hasClass('page-project-list-architecture')) {
        $('ul#menu-architecture-menu li:first-child a').addClass('is-page');
    }
    else if ($('body').hasClass('page-project-list-aviation-architecture')) { 
         $('ul#menu-architecture-menu li:nth-child(2) a').addClass('is-page');
     }
    else if ($('body').hasClass('page-project-list-sports-architecture')) { 
        $('ul#menu-architecture-menu li:nth-child(3) a').addClass('is-page');
    }
    else if ($('body').hasClass('page-project-list-transit-architecture')) { 
        $('ul#menu-architecture-menu li:nth-child(4) a').addClass('is-page');
    }


    // Add Share button to all pages with share functionality
    $('#dpsp-floating-sidebar').prepend('<div class="shareBttn">Share</div>');

    // Show share buttons on click
    $('.shareBttn').click(function() {
        $('.dpsp-networks-btns-sidebar').slideToggle();
    });


    // Remove all spacing from bottom component and page elements so footer and last component are touching
    if ( $('.no_bottom_space').length ) {
        $('.site-content').css('padding-bottom', '0px');
        $('.hentry').css('margin-bottom', '0px');
    }

    // Auto-close mobile nav if user clicks off nav
    // Close when click outside the search container
    $(document).mouseup(function(e) {
        var container = $(".slicknav_nav");

        // if the target of the click isn't the container nor a descendant of the container
        if (!container.is(e.target) && container.has(e.target).length === 0) 
        {
            container.slideUp();
        }
    });

    
    // Push all content down if wp admin bar is showing

    if ($('#wpadminbar').length) {
        // $('.nav-wrap').addClass('adminSpacing');
        console.log('admin bar is showing');

        $(window).scroll(function() {    
            var scroll = $(window).scrollTop();
        
            if (scroll >= 46) {
                $('.nav-wrap').removeClass('adminSpacing');
            } 
            
            if (scroll <= 45) {
                $('.nav-wrap').addClass('adminSpacing');
            }
        });
    }


    //Navigation highlighting for sub-pages

    //Expertise pages
    if ($('.page-template-page-project_list, .single-projects').length) {
        $('.main-navigation ul.nav-menu li#menu-item-33').addClass('current_page_item');
    }

    //About pages
    if ($('.page-template-page-people, .single-people').length) {
        $('.main-navigation ul.nav-menu li#menu-item-34').addClass('current_page_item');
    }

    //Feature Insight pages
    if ($('.page-digital-innovation-in-transportation, .page-how-the-modern-version-reinvigorates-urban-corridors, .page-emerging-mobility-solutions').length) {
        $('ul#menu-secondary-nav li#menu-item-44').addClass('current_page_item');
    }

    //News pages
    if ($('.page-template-page-publication, .page-template-page-article-simple, .page-template-page-article-complex, .single-press_release').length) {
        $('ul#menu-secondary-nav li#menu-item-43').addClass('current_page_item');
    }

    // Change "See More" article title on THINK pages if more than 3 stories on listed
    if ($('.page-template-page-article-think-complex .component_recommend_images').length > 1) {
        $('.page-template-page-article-think-complex .component_recommend_title').css('margin', '140px 0 -183px');
    }

});

//Add class to element as it becomes visible in viewport 
(function(){
	function debounce(fn, ms) { // https://remysharp.com/2010/07/21/throttling-function-calls
		var time = null;
		return function() {
			var a = arguments, t = this;
			clearTimeout(time);
			time = setTimeout(function() { fn.apply(t, a); }, ms);
			}
		}
	function throttle(fn, ms) { // Ryan Taylor comment - https://remysharp.com/2010/07/21/throttling-function-calls
		var time, last = 0;
		return function() {
			var a = arguments, t = this, now = +(new Date), exe = function() { last = now; fn.apply(t, a); };
			clearTimeout(time);
			(now >= last + ms) ? exe() : time = setTimeout(exe, ms);
			}
		}
	function hasClass(el, cls) {
		if (el.className.match('(?:^|\\s)'+cls+'(?!\\S)')) { return true; } 
		}
	function addClass(el, cls) {
		if (!el.className.match('(?:^|\\s)'+cls+'(?!\\S)')) { el.className += ' '+cls; } 
		}
	function delClass(el, cls) {
		el.className = el.className.replace(new RegExp('(?:^|\\s)'+cls+'(?!\\S)'),'');
		}

	document.documentElement.className += ' js'; // adds class="js" to <html> element

	function elementFromTop(elem, classToAdd, distanceFromTop, unit) {
		var winY = window.innerHeight || document.documentElement.clientHeight, 
		elemLength = elem.length, distTop, distPercent, distPixels, distUnit, i;
		for (i = 0; i < elemLength; ++i) {
			distTop = elem[i].getBoundingClientRect().top;
			distPercent = Math.round((distTop / winY) * 100);
			distPixels = Math.round(distTop);
			distUnit = unit == 'percent' ? distPercent : distPixels;
			if (distUnit <= distanceFromTop) {
				if (!hasClass(elem[i], classToAdd)) { addClass(elem[i], classToAdd); }
				} else {
				delClass(elem[i], classToAdd);
				}
			}
		}
	// params: element, classes to add, distance from top, unit ('percent' or 'pixels')

	window.addEventListener('scroll', throttle(function() {
		elementFromTop(document.querySelectorAll('.page-template-page-article-complex .component_full_width_image .so-panel'),  'animate', 100, 'percent'); // as top of element hits top of viewport
        elementFromTop(document.querySelectorAll('.page-template-page-article-complex .component_pull_quote'), 'animate', 100, 'percent'); // as top of element enters bottom of viewport 
        elementFromTop(document.querySelectorAll('.page-template-page-article-complex .component_see_more'), 'animate', 100, 'percent'); // as top of element enters bottom of viewport 
        elementFromTop(document.querySelectorAll('.page-template-page-article-complex .left-slide-in'), 'animate', 100, 'percent'); // as top of element enters bottom of viewport 
        elementFromTop(document.querySelectorAll('.page-template-page-article-think-complex .component_full_width_image .so-panel'),  'animate', 100, 'percent'); // as top of element hits top of viewport
        elementFromTop(document.querySelectorAll('.page-template-page-article-think-complex .component_pull_quote'), 'animate', 100, 'percent'); // as top of element enters bottom of viewport 
        elementFromTop(document.querySelectorAll('.page-template-page-article-think-complex .component_see_more'), 'animate', 100, 'percent'); // as top of element enters bottom of viewport 
        elementFromTop(document.querySelectorAll('.page-template-page-article-think-complex .left-slide-in'), 'animate', 100, 'percent'); // as top of element enters bottom of viewport 
        }, 100), false);

	window.addEventListener('resize', debounce(function() {
		elementFromTop(document.querySelectorAll('.page-template-page-article-complex .component_full_width_image .so-panel'),  'animate', 100, 'percent'); // as top of element hits top of viewport
        elementFromTop(document.querySelectorAll('.page-template-page-article-complex .component_pull_quote'), 'animate', 100, 'percent'); // as top of element enters bottom of viewport 
        elementFromTop(document.querySelectorAll('.page-template-page-article-complex .component_see_more'), 'animate', 100, 'percent'); // as top of element enters bottom of viewport 
        elementFromTop(document.querySelectorAll('.page-template-page-article-complex .left-slide-in'), 'animate', 100, 'percent'); // as top of element enters bottom of viewport 
        elementFromTop(document.querySelectorAll('.page-template-page-article-think-complex .component_full_width_image .so-panel'),  'animate', 100, 'percent'); // as top of element hits top of viewport
        elementFromTop(document.querySelectorAll('.page-template-page-article-think-complex .component_pull_quote'), 'animate', 100, 'percent'); // as top of element enters bottom of viewport 
        elementFromTop(document.querySelectorAll('.page-template-page-article-think-complex .component_see_more'), 'animate', 100, 'percent'); // as top of element enters bottom of viewport 
        elementFromTop(document.querySelectorAll('.page-template-page-article-think-complex .left-slide-in'), 'animate', 100, 'percent'); // as top of element enters bottom of viewport 
		}, 100), false);
})();
