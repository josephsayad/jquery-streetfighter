$(document).ready(function(){

  console.log('Ready!');

  $(document).keydown(function(event){
    if (event.which == 88) {
      $('.ryu-still').hide();
      $('.ryu-cool').show();
      $('.ryu-ready').hide();
    }
  })
  .keyup(function(event){
    if (event.which == 88) {
      $('.ryu-cool').hide();
      $('.ryu-still').show();
    }
  });

  $('.ryu').mouseenter(function(){
  	console.log('mouseenter');
    //if (x is being pressed) {
    // $('.ryu-ready.hide()')
    //} else
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