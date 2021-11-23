window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 60 || document.documentElement.scrollTop > 60) {
    document.getElementById("header").style.padding = "20px 10%";
    document.getElementById("header").style.background = "rgba(219,247,247, 0.9)";
    document.getElementById("header").style.backdropFilter = "blur(8px)";
    document.getElementById("header").style.marginBottom = "90px";
  } else {
    document.getElementById("header").style.padding = "60px 10%";
    document.getElementById("header").style.background = "none";
    document.getElementById("header").style.backdropFilter = "none";
    document.getElementById("header").style.marginBottom = "10px";
  }
}




$(document).ready(function(){
    window.scrollTo(0, 0);
  });
  