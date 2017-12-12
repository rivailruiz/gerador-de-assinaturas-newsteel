$(document).ready(function(){
    
    $('#refresh').on('click', function(e){
        let nome = $('#name').val();
        let cel = $('#cellphone').val();
        let cargo = $('#cargo').val();

        $('.nome').text(nome);
        $('.tel span').text('Tel: +55 '+cel);
        $('.cargo').text(cargo);
        e.preventDefault();
    });

    $('#help').on('click', function(){
        $('#modal1').modal('open');
    });
});