//header
window.onscroll = function() {myFunction()};

var header = document.getElementById("header");

var sticky = header.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}

// video
$(document).ready(function() {
  $(".myvideos").on("mouseout", function(event) {
    this.play();

  }).on('mouseover', function(event) {
    this.pause();

  });
})

