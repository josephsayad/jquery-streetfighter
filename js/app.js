$(document).ready(function(){
  console.log('Ready!');
  playOpening();
  console.log('Enter: Street Fighter Logo');
  $('.sf-logo').delay(1000).fadeIn('600').delay(4000).fadeOut('slow');
  $('.jQuery-credits').delay(1000).fadeOut('600').delay(5000).fadeIn('slow').delay(3000).fadeOut('slow');
  console.log('Enter: Ryu & Instructions');
  $('.ryu').delay(5500).fadeOut('600').delay(5000).fadeIn('600');
  $('.instructions').delay(5500).fadeOut('600').delay(5000).fadeIn('600');
  $(document).keydown(function(event){
    if (event.which == 88) {
      console.log('Keydown');
      pauseOpening();
      $('.ryu-still').hide();
      $('.ryu-ready').hide();
      $('.ryu-throwing').hide();
      $('.hadouken').hide();
      $('.ryu-cool').show();
    }
  })
  .keyup(function(event){
    if (event.which == 88) {
      console.log('Keyup');
      $('.ryu-cool').hide();
      $('.ryu-ready').hide();
      $('.ryu-throwing').hide();
      $('.hadouken').hide();
      $('.ryu-still').show();
    }
  });

  $('.ryu').mouseenter(function(){
  	console.log('mouseenter');
    $('.ryu-still').hide();
    $('.ryu-ready').show();
  })
  .mouseleave(function(){
  	console.log('mouseleave');
    $('.ryu-ready').hide();
    $('.ryu-still').show();
  })
  .mousedown(function(){
    console.log('mousedown');
    playHadouken();
    $('.ryu-ready').hide();
    $('.instructions').hide();
    $('.ryu-throwing').show();
    $('.hadouken').finish().show().animate(
    {'left': '1040px'},
    500,
    function() {
      $(this).hide();
      $(this).css('left', '600px');
    })  
  }) 
  .mouseup (function(){
    console.log('mouseup');
    $('.ryu-throwing').hide();
    $('.ryu-ready').show();
    $('.instructions').fadeIn('slow');
  });
});

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