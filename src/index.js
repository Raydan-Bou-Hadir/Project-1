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

$(document).ready(function(event){
  $("a.scroll").on('click', function(event) {

  var hash = this.hash;

  $('html, body').animate({scrollTop: $(hash).offset().top}, 800, function(){});

  });
});

$(document).ready(function () {
  $("#myBtn").on("click", function(){
      read();
  });
});

function read() {
  var dots = document.getElementById("dots");
  var moretext = document.getElementById("more");
  var btntext = document.getElementById("myBtn");

  if (dots.style.display === "none") {
      dots.style.display = "inline";
      btntext.innerHTML = "عرض المزيد";
      moretext.style.display = "none";
  } else {
     dots.style.display = "none";
      btntext.innerHTML = "عرض عناصر أقل";
      moretext.style.display = "inline";
  }
}

$(function () {
  $("#bsubmit").click(function () {
      var password = $("#cpassword").val();
      var confirmPassword = $("confirm_password").val();
      if (password != confirmPassword) {
          alert("خطأ في كلمة المرور.");
          return false;
      }
      return true;
  });
});

$(function () {
  $("#body-acc").validate();
});