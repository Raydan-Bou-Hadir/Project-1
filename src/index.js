import '@laylazi/bootstrap-rtl/dist/css/bootstrap-rtl.min.css';
import './scss/style.scss';
import './css/style.css';
import 'jquery/dist/jquery';
import 'popper.js/dist/popper';
import 'bootstrap/dist/js/bootstrap.min.js';
import '@fortawesome/fontawesome-free/js/all';


$(window).on('scroll', function(){
    if($(this).scrollTop()>=500){
       $("#navBar").addClass("noTransparrent");
     }
     else{
       $("#navBar").removeClass("noTransparrent");
    }
});

$(document).ready(function(event){
    $("a.scroll").on('click', function(event) {

    var hash = this.hash;

    $('html, body').animate({scrollTop: $(hash).offset().top}, 800, function(){});

  });

  $('.timer').countTo();
});

$(document).ready(function () {

  $('#copyright').text("جميع الحقوق محفوظة للمتجر سنة " + new Date().getFullYear());

});


