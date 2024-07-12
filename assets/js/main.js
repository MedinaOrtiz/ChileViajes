
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))


$(document).ready(function(){ 

    $('.card').mouseover(function(){
        $('img',this).animate({opacity:'0.5'});
        $(this).addClass('card-body');
    });
    
    $('.card').mouseleave(function(){
        $('img',this).animate({opacity:'1'});
        $(this).removeClass('card-body');
    });

    $("#button-mail").click(function () {
        alert("El correo fue enviado correctamente");
    });

});



