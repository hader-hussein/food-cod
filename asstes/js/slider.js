$(document).ready(function(){
    $('#carouselExampleControls').carousel({
      pause: true,
    interval: false
    })

  $('#carouselExampleControls.carousel .carousel-item').each(function(){
    var minPerSlide = 4;
    var next = $(this).next();
    if (!next.length) {
      next = $(this).siblings(':first');
    }
  next.children(':first-child').clone().appendTo($(this));

  for (var i=0;i<minPerSlide;i++) {
    next=next.next();
    if (!next.length) {
        next = $(this).siblings(':first');
      }
    
    next.children(':first-child').clone().appendTo($(this));
  }
  
});
/**** */
(function(){
  $('#carousel-Advertisement .carousel-item ').each(function(){
    var itemToClone = $(this);

    for (var i=1;i<3;i++) {
      itemToClone = itemToClone.next();

      // wrap around if at end of item collection
      if (!itemToClone.length) {
        itemToClone = $(this).siblings(':first');
      }

      // grab item, clone, add marker class, add to collection
      itemToClone.children(':first-child').clone()
        .addClass("cloneditem-"+(i))
        .appendTo($(this));
    }
  });
}());


  });

/** radio-tap */
$(function () {
  $('input:radio').click(function (e) {
     e.stopPropagation();
     $('li').removeClass('active')
     $(this).parent().parent().addClass('active');
     var tabpane = $(this).parent().attr('aria-controls');
     $('.form-model .tab-content').children().removeClass('active');
     $('#' + tabpane).addClass('active');
  });
  $('a').click(function (e) {
     $(this).find("input[type=radio]").trigger('click');
  });
});

  
/***chang-color-link***/
jQuery(function ($) {
  $('.select').click(function () {
      $(this).toggleClass('highlight')
  })
})
/**button-tap */
$('#stert-altahdir').click(function(e){
  e.preventDefault()
  $('#pills-altahdir-tab').removeClass('active'); 
  $('#pills-almukawanat-tab').addClass('active');
  $('.component-sec-decimal').attr("hidden",true);    
  $('.alert-almukawanat').removeAttr('hidden');
  
  /*new button */
  

  });

  $('.btn-close-btn').click(function(e){
  e.preventDefault()
  $('#pills-almukawanat-tab').removeClass('active'); 
  $('#pills-altahdir-tab').addClass('active');
  $('.alert-almukawanat').attr("hidden",true);    
  $('.component-sec-decimal').removeAttr('hidden');
 
  });

 /*stert-altahdir-tow*/
  $('#stert-altahdir-tow').click(function(e){
  e.preventDefault()
  $('#pills-almukawanat-tab').removeClass('active'); 
  $('#pills-altahdir-tab').addClass('active');
  $('.alert-almukawanat').attr("hidden",true);    
  $('.component-sec-decimal').removeAttr('hidden');
  $('#stert-altahdir').attr("hidden",true);
  $('#new-button').removeAttr('hidden');
  });
  /**new button */
  $('#new-button').click(function(e){
    e.preventDefault()
    $('.nav-item section').css("display","none"); 
    $('.nav-Comments .nav-item a').removeClass('active'); 
    $('#new-button').attr("hidden",true);
  $('#stert-altahdir').removeAttr('hidden');
  });
  /**forget-password**/
  $('#forget-number').click(function(e){
    e.preventDefault()
  
    $('.forget-password-number').attr("hidden",true);
  $('.Confirmation-code').removeAttr('hidden');
  });
  /**** */
  $('#Confirmation-code-phon').click(function(e){
    e.preventDefault()
  
    $('.Confirmation-code').attr("hidden",true);
  $('.Confirmation-code-number').removeAttr('hidden');
  });
  $('.navbar .nav-link').click(function(){
    $('.navbar-nav .nav-link').removeClass('active');
    $(this).addClass('active');
})
$('.navbar-nav-itrm-2 .nav-item').click(function(){
  $('.navbar-nav-itrm-2 .nav-item').removeClass('active');
  $(this).addClass('active');
})
$('.media-notification').click(function(){
  $('.media-notification').removeClass('active');
  $(this).addClass('active');
})
const currentlocation = location.href; 
 const menuitem = document.querySelectorAll('.navbar .nav-link');
  const menulength = menuitem.length
 for (let i = 0; i<menulength; i++){
  if(menuitem[i].href === currentlocation) {
    menuitem[i].className = "active" 
     }
 }
 const currentlocatione = location.href; 
 const menuiteme = document.querySelectorAll('.nav-pillsee .nav-link');
  const menulengthe = menuiteme.length
 for (let i = 0; i<menulengthe; i++){
  if(menuiteme[i].href === currentlocation) {
    menuiteme[i].className = "active" 
     }
 }
/*****nav-boll */
$(document).ready(function () {
    
  // $('#nav').children('li').first().children('a').addClass('active')
  //     .next().addClass('is-open').show();
      
  $('#nav').on('click', 'li > a', function() {
      
    if (!$(this).hasClass('active')) {

      $('#nav .is-open').removeClass('is-open').hide();
      $(this).next().toggleClass('is-open').toggle();
        
      $('#nav').find('.active').removeClass('active');
      $(this).addClass('active');
    } else {
      $('#nav .is-open').removeClass('is-open').hide();
      $(this).removeClass('active');
    }
 });
});
/***button-volume*/
jQuery(function ($) {
  $('.component-li-altahdir .btn i').click(function () {
      $(this).toggleClass('highlight')
  })
})