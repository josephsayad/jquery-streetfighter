$(document).ready(function() {
  /* The purpose of declaring and assigning objects of
   * type jQuery: to avoid all unnecessary calls to element
   * nodes in the Document Object Model
   *
   * ryuStatus and coolStatus are variables used to implement
   * specific methods at the disgression of user-activity. 
   * coolStatus implemented in bug-fix: div.ryu-ready and div.
   * ryu-still will not appear when the user is pressing down 
   * on the "x" key
   *
   * Switching the value of DEBUG will fire accounts or checks
   * of the code being executed: useful for debugging
   */
  var ryuStatus = 'still';
  var coolStatus = 'notCool';
  var ryu = $('.ryu');
  var ryuStill = $('.ryu-still');
  var ryuReady = $('.ryu-ready')
  var ryuThrowing = $('.ryu-throwing');
  var hadouken = $('.hadouken');
  var ryuCool = $('.ryu-cool');
  var DEBUG = false;
  var coolSound = false;

  streetfighterOpening();

  /* keydown and keyup event-handlers are invoked by the 
   * document: functionality of these event-handlers are 
   * extended to the HTML document as a whole
   */  
  $(document).keydown(function(event) {
    if (event.which == 88) {
      if (DEBUG) console.log('Keydown');
      coolStatus = 'cool';
      // playCoolMusic();
      ryuReady.hide();
      ryuThrowing.hide();
      hadouken.hide();
      ryuStill.hide();
      ryuCool.show();
    }
  })
  .keyup(function(event) {
    if (event.which == 88) {
      if (DEBUG) console.log('Keyup');
      coolStatus = 'notCool';
      ryuReady.hide();
      ryuThrowing.hide();
      hadouken.hide();
      ryuStill.hide();
      ryuCool.hide();
      if (ryuStatus == 'ready') {
        ryuReady.show();
      } 
      else if (ryuStatus == 'still') {
        ryuStill.show();
      }
    }
  });

  ryu.mouseenter(function() {
    if (DEBUG) console.log('mouseenter');
    ryuStatus = 'ready';
    ryuStill.hide();
    if (coolStatus == 'cool') {
      ryuReady.hide();
    }
    else if (coolStatus == 'notCool'){
      ryuReady.show();
    }
    //these conditional statements will inhibit div.ryu-ready
    //from showing if the user is pressing down on "x"
  })
  .mouseleave(function() {
    ryuStatus = 'still';
    if (DEBUG) console.log('mouseleave');
    ryuReady.hide();
    if (coolStatus == 'cool') {
      ryuStill.hide();
    }
    else if (coolStatus == 'notCool') {
      ryuStill.show();
    }
    //these conditional statements will inhibit div.ryu-still
    //from showing if the user is pressing down on "x"
  })
  .mousedown(function() {
    if (DEBUG) console.log('mousedown');
    playHadouken();
    ryuReady.hide();
    $('.instructions').hide();
    ryuThrowing.show();
    hadouken.finish().show().animate(
      {'left': '1040px'},
      500,
      function() {
        $(this).hide();
        $(this).css('left', '600px');
      }
      //Hadouken.gif will be moved back to it's original 
      //location
    )  
  }) 
  .mouseup (function() {
    if (DEBUG) console.log('mouseup');
    ryuThrowing.hide();
    ryuReady.show();
    $('.instructions').fadeIn('slow');
  });
  });

function streetfighterOpening() {
  var DEBUG = false;
  if (DEBUG) console.log('Ready!');
  playOpening();
  if (DEBUG) console.log('Enter: Logo, Credits, Ryu, & Instructions');
  $('.sf-logo').delay(1000).fadeIn('600').delay(4000).fadeOut('slow');
  $('.jQuery-credits').delay(1000).fadeOut('600').delay(5000).fadeIn('slow').delay(3000).fadeOut('slow');
  $('.ryu').delay(5500).fadeOut('600').delay(5000).fadeIn('600');
  $('.instructions').delay(5500).fadeOut('600').delay(5000).fadeIn('600');
}

function playHadouken() {
  $('#hadouken-sound')[0].volume = 0.5;
  $('#hadouken-sound')[0].load();
  $('#hadouken-sound')[0].play();
}

function playOpening() {
  $('#sf-opening')[0].volume = 0.5;
  $('#sf-opening')[0].load();
  $('#sf-opening')[0].play();
}

function pauseOpening() {
  $('#sf-opening')[0].volume = 0.5;
  $('#sf-opening')[0].load();
  $('#sf-opening')[0].pause();
}

function playCoolMusic() {
  coolSound = true;
  //if the user presses down on "x," coolSound will
  //be assigned to true and this conditional will be
  //executed
  if (coolSound) {
    pauseOpening();
    $('#cool-music')[0].volume = 0.5;
    $('#cool-music')[0].load();
    $('#cool-music')[0].play();
  }
}

function pauseCoolMusic() {
  $('#cool-music')[0].volume = 0.5;
  $('#cool-music')[0].load();
  $('#cool-music')[0].pause();
}
