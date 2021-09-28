
/********one**** */
$(function(){
    var previewImagee = function(input) {
    var fileTypes = ['jpg', 'jpeg', 'png','mp4','svg'];
    var extension = input.files[0].name.split('.').pop().toLowerCase(); /*se preia extensia*/
    var isSuccess = fileTypes.indexOf(extension) > -1; /*se verifica extensia*/

    if (isSuccess) {
        var reader = new FileReader();

        reader.onload = function(e) {
            if($('.upload-prod-pic-wrape ul li').length < 6){
             $('.upload-prod-pic-wrape ul').append('<li><span class="trash-icoe"><i class="fa fa-times" aria-hidden="true"></i></span><a href="#"><img src="'+e.target.result+'"></a></li>')
            }
        };
        reader.readAsDataURL(input.files[0]);
       
    } else {
        alert('Image not accepted');
    }

};
$('#upload-imge').on('change', function() {
    previewImagee(this);
    setTimeout(function() {
        showpreviewe() 
    }, 300);
})                              
});

function showpreviewe(){
var lth = $('.upload-prod-pic-wrape ul li').length;
if(lth == 0){
    $('#superadminpice').attr({
            'src': ''
        })
}
console.log('dasdas'+lth);  
$('.upload-prod-pic-wrape ul li').each(function(key,val){
    console.log('key'+key)
    if(key == lth-1){
        $('#superadminpice').attr({
            'src': $(this).find('img').attr('src')
        })
    }else{
        
    }
}); 
if(lth == 6){
    $('.camerae').hide()
}else{
    $('.camerae').show()
}

$(".upload-prod-pic-wrape ul li .trash-icoe").click(function(){  
     
    $(this).parent().remove(); 
    $("#upload-imge").val(''); 
    // alert("hii"); 
    showpreviewe();
});



}
/*tow*/
$(function(){
    var previewImage = function(input) {
    var fileTypes = ['jpg', 'jpeg', 'png','mp4','svg'];
    var extension = input.files[0].name.split('.').pop().toLowerCase(); /*se preia extensia*/
    var isSuccess = fileTypes.indexOf(extension) > -1; /*se verifica extensia*/

    if (isSuccess) {
        var reader = new FileReader();

        reader.onload = function(e) {
            if($('.upload-prod-pic-wrap ul li').length < 6){
             $('.upload-prod-pic-wrap ul').append('<li><span class="trash-ico"><i class="fa fa-times" aria-hidden="true"></i></span><a href="#"><img src="'+e.target.result+'"></a></li>')
            }
        };
        reader.readAsDataURL(input.files[0]);
       
    } else {
        alert('Image not accepted');
    }

};
$('#uploade-img').on('change', function() {
    previewImage(this);
    setTimeout(function() {
        showpreview() 
    }, 300);
})                              
});

function showpreview(){
var lth = $('.upload-prod-pic-wrap ul li').length;
if(lth == 0){
    $('#superadminpic').attr({
            'src': ''
        })
}
console.log('dasdas'+lth);  
$('.upload-prod-pic-wrap ul li').each(function(key,val){
    console.log('key'+key)
    if(key == lth-1){
        $('#superadminpic').attr({
            'src': $(this).find('img').attr('src')
        })
    }else{
        
    }
}); 
if(lth == 6){
    $('.camera').hide()
}else{
    $('.camera').show()
}



$(".upload-prod-pic-wrap ul li .trash-ico").click(function(){ 
   
    $(this).parent().remove(); 
    $("#uploade-img").val(''); 
    
    showpreview();
});



}
/**********profil-img********** */
