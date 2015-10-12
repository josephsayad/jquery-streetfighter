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
    //play hadouken sound
    $('.ryu-ready').hide();
    $('.ryu-throwing').show();
    $('.hadouken').show().animate(
    {'left': '1040px'},
    600,
    function() {
      $(this).hide();
      $(this).css('left', '619px');
    })  
  }) 
  .mouseup (function(){
    console.log('mouseup');
    $('.ryu-throwing').hide();
    $('.ryu-ready').show();
  });
});