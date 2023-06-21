$(document).ready(function(){
    $('#botao').click(function(){
        let capturarTarefa = $('#tarefa').val();
        let linha = $('<li>').text(capturarTarefa).hide();
        $('#resposta').append(linha);
        linha.fadeIn(500);
    });

    $('#resposta').on('click', 'li', function(){
        $(this).toggleClass('clicked');
    });
});
