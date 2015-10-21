$(document).ready(function() {

  /* Objects are declared and assigned below. The 
   * purpose of declaring and assigning objects of
   * type jQuery is to avoid constant invocations of
   * element nodes from the Document Object Model.
   *
   * ryuStatus is a variable used to implement the 
   * methods: hide() and show() at appropriate durations 
   * of user activity. If the user presses the "x" key, 
   * the correct GIF must be hidden or shown depending on 
   * the context of the cursor.*/

  var ryuStatus = 'still';
  var ryuStill = $('.ryu-still');
  var ryuReady = $('.ryu-ready')
  var ryuThrowing = $('.ryu-throwing');
  var ryuCool = $('.ryu-cool');
  var hadouken = $('.hadouken');
  var DEBUG = false;

  /* Switching the value of DEBUG will fire logs or accounts
   * of the code being executed: useful for debugging.*/

  if(DEBUG) console.log('Ready!');
  
  playOpening();
  if(DEBUG) console.log('Enter: Street Fighter Logo');
  $('.sf-logo').delay(1000).fadeIn('600').delay(4000).fadeOut('slow');
  $('.jQuery-credits').delay(1000).fadeOut('600').delay(5000).fadeIn('slow').delay(3000).fadeOut('slow');
  if(DEBUG) console.log('Enter: Ryu & Instructions');
  $('.ryu').delay(5500).fadeOut('600').delay(5000).fadeIn('600');
  $('.instructions').delay(5500).fadeOut('600').delay(5000).fadeIn('600');

  $(document).keydown(function(event) {
    if (event.which == 88) {
      if(DEBUG) console.log('Keydown');
      pauseOpening();
      ryuStill.hide();
      ryuReady.hide();
      ryuThrowing.hide();
      hadouken.hide();
      ryuCool.show();
    }
  })
  .keyup(function(event) {
    if (event.which == 88) {
      if(DEBUG) console.log('Keyup');
      ryuCool.hide();
      ryuReady.hide();
      ryuThrowing.hide();
      hadouken.hide();
      if (ryuStatus == 'ready') {
        ryuReady.show();
      } 
      else if (ryuStatus == 'still') {
        ryuStill.show();
      }
    }
  });

  $('.ryu').mouseenter(function() {
    ryuStatus = 'ready';
  	if(DEBUG) console.log('mouseenter');
    ryuStill.hide();
    ryuReady.show();
  })
  .mouseleave(function() {
    ryuStatus = 'still';
  	if(DEBUG) console.log('mouseleave');
    ryuReady.hide();
    ryuStill.show();
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

/* The functions defined below invovle calling audio elements
 * from the HTML, turning them into objects of jQuery, and 
 * invoking apropriate methods. These functions are invoked above.
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
  $('#cool-music')[0].volume = 0.5;
  $('#cool-music')[0].load();
  $('#cool-music')[0].play();
}

function pauseCoolMusic () {
  $('#cool-music')[0].volume = 0.5;
  $('#cool-music')[0].load();
  $('#cool-music')[0].pause();
}