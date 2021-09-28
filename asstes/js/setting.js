function readURL(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();
        reader.onload = function(e) {
            $('#imagePreview').css('background-image', 'url('+e.target.result +')');
            $('#imagePreview').hide();
            $('#imagePreview').fadeIn(650);
        }
        reader.readAsDataURL(input.files[0]);
    }
}
$("#imageUpload").change(function() {
    readURL(this);
});
$('#imageUpload-2').change(function(){			
    readImgUrlAndPreview(this);
    function readImgUrlAndPreview(input){
      if (input.files && input.files[0]) {
        var reader = new FileReader();
        reader.onload = function (e) {			            	
          $('#imagePreview-2').attr('src', e.target.result);
          $('#imagePreview-2').css('opacity', 1);
        }
      };
      reader.readAsDataURL(input.files[0]);
    }	
  });
  