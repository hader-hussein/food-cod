$(document).ready(function(){

    $(".filter-button").click(function(){
        var value = $(this).attr('data-filter');
        
        if(value == "all")
        {
          
            $('.filter').show('1000');
        }
        else
        {

            $(".filter").not('.'+value).hide('3000');
            $('.filter').filter('.'+value).show('3000');
            
        }
    });
    
    if ($(".filter-button").removeClass("active")) {
$(this).removeClass("active");
}
$(this).addClass("active");

});
$('.order-food').click(function(e){
    e.preventDefault()
    
    $('.Continue').toggle();   
    $('.component-confirmation').toggle();
    $('.component-basket').attr("hidden",true); 
    $('.component-confirmation').removeAttr('hidden'); 
    $('.Minimum-Order').toggle();
   
    
    });
    $('#taka-away').click(function(e){
        e.preventDefault()
        $('.component-confirmation').attr("hidden",true);
        $('.component-basket').removeAttr('hidden');
        
        });
        $('.chevron-left').click(function(e){
            e.preventDefault() 
            $('.component-basket').attr("hidden",true);
            $('.component-confirmation').removeAttr('hidden'); 
        });
       
       