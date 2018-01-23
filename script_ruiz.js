$(document).ready(function(){
    
    $('#refresh').on('click', function(e){
        let nome = $('#name').val();
        let cel = $('#cellphone').val();
        let cargo = $('#cargo').val();

        $('.nome').text(nome);
        $('.tel span').text('Tel: +55 '+cel);
        $('.cargo').text(cargo);
        e.preventDefault();
        // Checkfiles();
    });

    $('#help').on('click', function(){
        $('#modal1').modal('open');
    });

    function readURL(input) {
        
        if (input.files && input.files[0]) {
        var reader = new FileReader();
    
        reader.onload = function(e) {
            $('#blah').attr('src', e.target.result);
        }
    
        reader.readAsDataURL(input.files[0]);
        }
    }
    
    $("#imgInp").change(function() {
        readURL(this);
    });

    
    
   


    $('#copia').on('click', function(){
        
    });


    
});