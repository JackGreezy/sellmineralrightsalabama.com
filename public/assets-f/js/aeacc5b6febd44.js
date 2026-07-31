/**
 * search-toggle.js
 *
 * Handles toggling the search bar when the icon is clicked.
 */
jQuery(document).ready(function($) {
    $('#searchBttn').click(function() {
      if ($('#search').hasClass('showSearch'))
            $('#search').slideUp().removeClass('showSearch');
        else
            $('#search').slideDown().addClass('showSearch');     
    });
    $('#searchBttn_mobile').click(function() {
        if ($('#search').hasClass('showSearch'))
            $('#search').slideUp().removeClass('showSearch');
        else
            $('#search').slideDown().addClass('showSearch');
    });

    // Close when click outside the search container
    $(document).mouseup(function(e) {
        var container = $("#search");

        // if the target of the click isn't the container nor a descendant of the container
        if (!container.is(e.target) && container.has(e.target).length === 0) 
        {
            container.slideUp();
        }
    });
});
