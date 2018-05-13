$(document).ready(function() {
  $(window).scroll(function() {
    var quoteCatcherDivToptoBottom = $("#quote-catcher-project").offset().top + $("#quote-catcher-project")[0].scrollHeight;
    var diskovDivTopToBottom = $("#diskov-project").offset().top + $("#diskov-project")[0].scrollHeight;
    if ($(window).scrollTop() > $("#quote-catcher-project").offset().top - $(window).height()) {
      $("#quote-catcher-project").addClass("animated slideInLeft");
    }

    if ($(window).scrollTop() > $("#diskov-project").offset().top - $(window).height()) {
      $("#diskov-project").addClass("animated slideInRight");
    }
  });
});