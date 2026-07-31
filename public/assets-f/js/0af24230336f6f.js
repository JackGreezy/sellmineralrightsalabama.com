jQuery(document).ready(function($){

    //Add container around full-width image component to control width
    $('.component_full_width_image').wrapInner('<div class="full-width-grid"></div>');
    $('.component_recommend').wrapInner('<div class="full-width-grid"></div>');
    $('.component_recommend_images').wrapInner('<div class="full-width-grid"></div>');

    // Img hover on images for Image & Text Component   
    $('.component_text_image .action-img').hover( function() {
        $('.component_text_image .img-hover').toggleClass('hideTxt');
    });

    // Check if a banner element is on the page, if not apply .no_banner class to heading component
    if ($('.component_banner_carousel, .component_banner_image, .component_banner_video').length === 0 ) {
        $('.component_heading').addClass('no_banner');
    }


    // Article template - check if "See More Articles" section is included on page and adjust bottom-margin accordingly 
    // if($('.page-template-page-article-think-complex .component_recommend_images').length === 0) {
    //     $('.page-template-page-article-think-complex .panel-layout .panel-grid:nth-last-of-type(2)').addClass('no-see-more-section');
    // }
    //
    // if($('.page-template-page-article-simple .component_recommend_images').length === 0) {
    //     $('.page-template-page-article-simple .panel-layout .panel-grid:nth-last-of-type(2)').addClass('no-see-more-section');
    // }
    //
    // if($('.page-template-page-article-complex .component_recommend_images').length === 0) {
    //     $('.page-template-page-article-complex.panel-layout .panel-grid:nth-last-of-type(2)').addClass('no-see-more-section');
    // }


});