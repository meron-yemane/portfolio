$(document).ready(function() {
  $(window).scroll(function() {
    var quoteCatcherDivToptoBottom = $("#quote-catcher-project").offset().top + $("#quote-catcher-project")[0].scrollHeight;
    var diskovDivTopToBottom = $("#diskov-project").offset().top + $("#diskov-project")[0].scrollHeight;
    var usermanagementDivTopToBottom = $("#usermanagement-project").offset().top + ("#usermanagment-project")[0].scrollHeight;
    if ($(window).scrollTop() > $("#quote-catcher-project").offset().top - $(window).height()) {
      $("#quote-catcher-project").addClass("animated slideInLeft");
    }

    if ($(window).scrollTop() > $("#diskov-project").offset().top - $(window).height()) {
      $("#diskov-project").addClass("animated slideInRight");
    }

    if ($(window).scrollTop() > $("#usermanagement-project").offset().top - $(window).height()) {
      $("#usermanagement-project").addClass("animated slideInLeft");
    }
  });

  $('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });
});
