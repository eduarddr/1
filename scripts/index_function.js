$(document).ready(function(){
  $("article").removeClass("text");
  $("span").removeClass("img_replace");
  setTimeout(function(){
    $('#about_code').waypoint(function(){
      $("article").addClass("text");
      $("span").addClass("img_replace");
     var items = [
       '.img{',
       'top: 0%;',
       'left: 0%;',
       'border-radius: 50%;',
       'left: 20%;',
       'top: 5%;',
       'top:15%;',
       'left: 20%;',
       '}',
       '.text{',
       'padding-top: 35%;',
       'padding-left: 30%;',
       'max-width: 600px;',
       'text-align: left;',
       'padding-top: 15%;',
       'padding-left: 10%;',
       'text-align: center;',
       'font-family: Quicksand;',
       'max-width: 400px;',
       '}'];
        var app = document.getElementById('about_code');
        var count = 0;
        var index = 0;
        var typingEffect = function typingEffect() {
          var text = items[index];
          if (count < text.length) {
            setTimeout(function (){
              app.innerHTML += text[count];
              count++;
              typingEffect();
            }, Math.floor(Math.random(10) * 10));
              }
          else {
           count = 0;
           index = index + 1;
           app.innerHTML += '<br/>';
           if (index != 9) {
             app.innerHTML += '\u00A0\u00A0\u00A0\u00A0';
           }
           else {
             app.innerHTML += '\u00A0';
           }
           setTimeout(function(){
             typingEffect();
           }, 0);
            }
          };
        typingEffect();
        this.destroy();
      }, {
        offset: '50%'
      });
    }, 5000);
$(".li1").click(function() {
    $('html, body').animate({
        scrollTop: $('#about_code').offset().top - 50
    }, 2000);
});
$(".li2").click(function(){
  $('html, body').animate({
    scrollTop: $('#skills').offset().top - 50
  }, 2000);
});
});
