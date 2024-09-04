$('.moreless-button').click(function() {
    var $this = $(this);
    var $moreText = $this.closest('.right_side_hotel').find('.moretext');
  
    $moreText.slideToggle();
    if ($this.text() == "Olvass kevesebbet") {
      $this.text("Olvass tovább");
    } else {
      $this.text("Olvass kevesebbet");
    }
  });