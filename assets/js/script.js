// video
$(document).ready(function() {
  $(".myvideos").on("mouseout", function(event) {
    this.play();

  }).on('mouseover', function(event) {
    this.pause();

  });
})
