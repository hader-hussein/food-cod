
$('#multi-slider .carousel-item').each(function(){
    var next = $(this).next();
       
    for (var i=0;i<2;i++) {  
      if (!next.length) {
        next=$(this).siblings(':first');
      }
      next.children(':first').children(':first').clone().addClass('d-none d-md-block').appendTo($(this).children(':first'));
      
       next=next.next();
    }
  });