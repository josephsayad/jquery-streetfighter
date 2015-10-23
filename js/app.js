$(document).ready(function() {
  /* The purpose of declaring and assigning objects of
   * type jQuery is to avoid any unnecessary calls to 
   * element nodes from the Document Object Model
   *
   * ryuStatus is a variable used to implement the 
   * methods: hide() and show() - at appropriate durations 
   * of user activity. If the user presses the "x" key, 
   * the correct GIF must be hidden or shown - depending on 
   * the context of the cursor within the environment 
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

  /* Switching the value of DEBUG will fire logs [accounts]
   * of the code being executed: useful for debugging
   */
  if(DEBUG) console.log('Ready!');
  playOpening();
  if(DEBUG) console.log('Enter: Street Fighter Logo');
  $('.sf-logo').delay(1000).fadeIn('600').delay(4000).fadeOut('slow');
  $('.jQuery-credits').delay(1000).fadeOut('600').delay(5000).fadeIn('slow').delay(3000).fadeOut('slow');
  if(DEBUG) console.log('Enter: Ryu & Instructions');
  ryu.delay(5500).fadeOut('600').delay(5000).fadeIn('600');
  $('.instructions').delay(5500).fadeOut('600').delay(5000).fadeIn('600');

  /* keydown and keyup event-handlers are invoked by document
   * because the functionality of these functions are expected 
   * to be put into play regardless of the user's location on 
   * the document  
   */  
  $(document).keydown(function(event) {
    if (event.which == 88) {
      if(DEBUG) console.log('Keydown');
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
      if(DEBUG) console.log('Keyup');
      coolStatus = 'notCool';
      ryuReady.hide();
      ryuThrowing.hide();
      hadouken.hide();
      ryuStill.hide();
      ryuCool.hide();
      //If the cursor is in div.ryu after the user releases the 
      //"x" key, then ryu-ready-position.gif will be shown
      if (ryuStatus == 'ready') {
        ryuReady.show();
      } 
      //If the cursor is not in div.ryu after the user releases
      //the "x" key, then ryu-standing-still.png will be shown
      else if (ryuStatus == 'still') {
        ryuStill.show();
      }
    }
  });

  ryu.mouseenter(function() {
    if(DEBUG) console.log('mouseenter');
    ryuStatus = 'ready';
    ryuStill.hide();
    if (coolStatus == 'cool') {
      ryuReady.hide();
    }
    else if (coolStatus == 'notCool'){
      ryuReady.show();
    }
  })
  .mouseleave(function() {
    ryuStatus = 'still';
    if(DEBUG) console.log('mouseleave');
    ryuReady.hide();
    if (coolStatus == 'cool') {
      ryuStill.hide();
    }
    else if (coolStatus == 'notCool') {
      ryuStill.show();
    }
  })
  .mousedown(function() {
    if(DEBUG) console.log('mousedown');
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
        //Hadouken.gif will be moved back to it's original location
      }
    )  
  }) 
  .mouseup (function() {
    if(DEBUG) console.log('mouseup');
    ryuThrowing.hide();
    ryuReady.show();
    $('.instructions').fadeIn('slow');
  });
});

/* The functions defined below invovle calling audio element nodes
 * from the HTML, turning them into objects of jQuery, and 
 * invoking methods needed for this application.
 */
function playHadouken () {
  $('#hadouken-sound')[0].volume = 0.5;
  $('#hadouken-sound')[0].load();
  $('#hadouken-sound')[0].play();
}

function playOpening () {
  $('#sf-opening')[0].volume = 0.5;
  $('#sf-opening')[0].load();
  $('#sf-opening')[0].play();
}

function pauseOpening () {
  $('#sf-opening')[0].volume = 0.5;
  $('#sf-opening')[0].load();
  $('#sf-opening')[0].pause();
}

function playCoolMusic () {
  coolSound = true;
  if (coolSound) {
    pauseOpening();
    $('#cool-music')[0].volume = 0.5;
    $('#cool-music')[0].load();
    $('#cool-music')[0].play();
  }
}

function pauseCoolMusic () {
  $('#cool-music')[0].volume = 0.5;
  $('#cool-music')[0].load();
  $('#cool-music')[0].pause();
}