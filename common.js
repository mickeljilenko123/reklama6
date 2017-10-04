$(document).ready(function(){
    $('form').submit(function(){
        $.ajax({
            type: 'POST',
            url: 'mail.php',
            data: $(this). serialize()
          }).done(function() {
              alert("Cпасибо за заявку! Скоро мы с вами свяжемся.");
          
        });
        return false;
    });
});