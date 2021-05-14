import '@laylazi/bootstrap-rtl/dist/css/bootstrap-rtl.min.css';
import './scss/style.scss';
import './css/style.css';
import 'jquery/dist/jquery';
import 'popper.js/dist/popper';
import 'bootstrap/dist/js/bootstrap.min.js';
import { library, dom } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
library.add(fas, far, fab);
dom.i2svg();

$(document).on('ready', function(event){
  $("a.scroll").on('click', function(event) {

  var hash = this.hash;

  $('html, body').animate({scrollTop: $(hash).offset().top}, 800, function(){});

  });
});

$(function() {
  $('#copyright').text("جميع الحقوق محفوظة سنة " + new Date().getFullYear());
});

var password = document.getElementById("password"),
confirm_password = document.getElementById("confirm_password");

function validatePassword(){
  if(password.value != confirm_password.value) {
    confirm_password.setCustomValidity("كلمة المرور خاطئة");
  }
}

password.onchange = validatePassword;
confirm_password.onkeyup = validatePassword;




