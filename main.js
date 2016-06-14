$(document).ready(function(){

  $('.image-one').on('click', function(){
    var imageOne = ('<img class="icon" id="img-one" src="icons/one.png">');
    $('.icon-container').append(imageOne);
  });

  $('.image-two').on('click', function(){
    var imageTwo = ('<img class="icon" id="img-two" src="icons/two.png">');
    $('.icon-container').append(imageTwo);
  });

  $('.image-three').on('click', function(){
    var imageThree = ('<img class="icon" id="img-three" src="icons/three.png">');
    $('.icon-container').append(imageThree);
  });

});
