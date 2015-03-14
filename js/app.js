$(document).ready(function() {
  playGame();

  playTheme();
});

function playGame() {
  $('.ryu').mouseenter(function() {
    $('.ryu-still').hide();
    $('.ryu-cool').hide();
    $('.ryu-ready').show();
  })
  .mouseleave(function() {
    $('.ryu-ready').hide();
    $('.ryu-cool').hide();
    $('.ryu-still').show();
  })
  .mousedown(function() {
    playHadouken();
    $('.ryu-still').hide();
    $('.ryu-ready').hide();
    $('.ryu-throwing').show();
    $('.hadouken').finish().show()
      .animate(
        {'left': '1020px'},
        500,
        function() {
          $(this).hide();
          $(this).css('left', '520px');
        });
  })
  .mouseup(function() {
    $('.ryu-throwing').hide();
    $('.ryu-cool').hide();
    $('.ryu-ready').show();
    // ryu goes back to his ready position
  });

  $(document).keydown(function(e) {
    if (e.keyCode == 88) {
      playCool();
      $('.ryu-still').hide();
      $('.ryu-ready').hide();
      $('.ryu-throwing').hide();
      $('.ryu-cool').show();
    }
  }).keyup(function(e) {
    if (e.keyCode == 88) {
	    $('#cool')[0].pause();
        $('#cool')[0].load();
      $('.ryu-cool').hide();
      $('.ryu-still').show();
    }
  });
}

function playTheme () {
  $('#theme-song')[0].volume = 0.5;
  // $('#theme-song')[0].load();
  $('#theme-song')[0].play();
}

function playHadouken () {
  $('#hadouken-sound')[0].volume = 0.5;
  $('#hadouken-sound')[0].load();
  $('#hadouken-sound')[0].play();
}

function playCool () {
  $('#cool')[0].volume = 0.5;
  //$('#cool')[0].load();
  $('#cool')[0].play();
}