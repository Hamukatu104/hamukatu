$(function(){


  $('#twitter').hide();
  $('#instagram').hide();
  $('#youtube').hide();
  $('#twitch').hide();
  $('#steam').hide();
  var flag = 0 ;

  $('#1').click(function(){

    $(this).fadeOut();
    $('#2').fadeIn();

    var Description = document.getElementById("Description");
    Description.innerHTML = '<h1>Hamukatu104</h1><p>ゲーム大好きマンかつこのサイトの制作者。</p><br><p>深夜になるほど叫びがち。</p><br>';

    var twitter = document.getElementById("twitter");
    twitter.innerHTML = '<a href="https://twitter.com/Hamukatu104" class=" btn twitter" target="_blank"><i class="fab fa-twitter"></i>Twitter</a>';

    $('#twitter').show();
    $('#instagram').hide();
    $('#youtube').show();
    $('#twitch').show();
    $('#steam').show();

  });


  $('#2').click(function(){

    $(this).fadeOut();
    $('#1').fadeIn();


    var Description = document.getElementById("Description");
    Description.innerHTML = '<h1>岡山　拳大</h1><p>大学生のエンジニア(仮)。</p><br><p>自分のしたいことをやりまくり中。</p><br>';

    var twitter = document.getElementById("twitter");
    twitter.innerHTML = '<a href="https://twitter.com/328_kenta" class=" btn twitter" target="_blank"><i class="fab fa-twitter"></i>Twitter</a>';




    $('#twitter').show();
    $('#instagram').show();
    $('#youtube').hide();
    $('#twitch').hide();
    $('#steam').hide();

  });


  $('.header-logo').click(function(){
    $('html, body').animate({
      scrollTop:0
    },500);
  });


  $('#myself').click(function(){
    $('html, body').animate({
      scrollTop:$('.myself').offset().top
    },500);
  });



  $('#hobby').click(function(){
    $('html, body').animate({
      scrollTop:$('.hobbies').offset().top
    },500);
  });

  $('#hopingList').click(function(){
    $('html, body').animate({
      scrollTop:$('.hopingList').offset().top
    },500);
  });


  $('#completionList').click(function(){
    $('html, body').animate({
      scrollTop:$('.completionList').offset().top
    },500);
  });


  $('.menu-icon').click(function(){



    if( flag === 0 ){

      $('.responsive-modal').fadeIn();
      flag = 1 ;
    }else{

      $('.responsive-modal').fadeOut();
      flag = 0 ;
    }

  });




  $('#myself-modal').click(function(){

    $('html, body').animate({
      scrollTop:$('.myself').offset().top
    },500);

  });



  $('#hobby-modal').click(function(){

    $('html, body').animate({
      scrollTop:$('.hobbies').offset().top
    },500);

  });


  $('#hoping-modal').click(function(){

    $('html, body').animate({
      scrollTop:$('.hopingList').offset().top
    },500);

  });


  $('#completion-modal').click(function(){

    $('html, body').animate({
      scrollTop:$('.completionList').offset().top
    },500);

  });


});
