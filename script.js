jQuery(document).ready(function( $ ) {

  var social_icons = $('.infinite-top-bar-right-social');
  social_icons.clone().appendTo('.infinite-footer-column .social__clone');

  var service_card = $('.js-service-card');
	if (service_card.length > 0) {
    $( service_card ).each( function( index, el ) {

      var service_card_url = $(this).closest('div').find('a').attr('href');


      $(this).click(function(){
        window.location.href = service_card_url;
      });

      $(this)
          .mouseenter(function() {
            $('.gdlr-core-image-overlay', this).css('opacity', 1);
          })
          .mouseleave(function() {
              $('.gdlr-core-image-overlay', this).css('opacity', 0);
          });

    });
  }




  var bucket_link = $('.js-link');
  bucket_link.click(function(){
    var destination = $(this).attr('id');
    window.location.href = destination;

  })

  bucket_link
      .mouseenter(function() {
        $('img', $(this)).css('transform', 'scale(1.1)');
      })
      .mouseleave(function() {
          $('img', $(this)).css('transform', 'scale(1)');
      });

});
