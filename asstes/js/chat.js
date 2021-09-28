$(function(){
    var arrow = $('.chat-head');
    var textarea = $('.chat-text textarea');
    arrow.on('click', function(){
      var src = arrow.attr('src');
  
      $('.chat-body').slideToggle('fast');
      $('#target1').slideToggle('fast');
         
    });  
    textarea.keypress(function(event) {
      var $this = $(this);
  
      if(event.keyCode == 13){
        var msg = $this.val();
        $this.val('');
        $('.msg-insert').append("<div class='msg-send'>"+msg+"</div>");
        }
    });
  
  });
  (function () {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
      .forEach(function (form) {
        form.addEventListener('submit', function (event) {
          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
          }
  
          form.classList.add('was-validated')
        }, false)
      })
  })()
  $('.field .glyphicon').on('click', function() {
    var attr =
      $(this)
        .prev()
        .attr('type') == 'password'
        ? 'text'
        : 'password';
    $(this)
      .prev()
      .attr('type', attr);
    $(this).toggleClass('active');
  });