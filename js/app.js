$(document).ready(function(){
  console.log("Ready!");
  $(".ryu").mouseenter(function(){
  	console.log("Mouse over Ryu");
    $(".ryu-still").hide();
    $(".ryu-ready").show();
  })
  .mouseleave(function(){
  	console.log("Mouse off of Ryu");
    $(".ryu-ready").hide();
    $(".ryu-still").show();
  })
  .mousedown(function(){
    console.log("mousedown");
    //play hadouken sound
    $(".ryu-ready").hide();
    $(".ryu-throwing").show();
    $('.hadouken').show();
    //animate hadouken 
  })
  .mouseup (function(){
    console.log("mouseup");
    $(".ryu-throwing").hide();
    $(".ryu-ready").show();
  });
});