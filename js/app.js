$(document).ready(function(){
  console.log('Ready!');
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
  });
});

function playHadouken () {
  $('#hadouken-sound')[0].volume = 0.5;
  $('#hadouken-sound')[0].load();
  $('#hadouken-sound')[0].play();
}