$(document).ready(function () {
    function btnAAlterColor() {
        var corAtual = $('#eye').css('background-color');
        corAtual = corAtual == 'rgb(0, 128, 0)' ? 'green' : 'red';
        if(corAtual == 'green'){
            $('#eye').css('background-color', 'red');
            return 'none';
        } else {
            $('#eye').css('background-color', 'green');
            return 'block';
        }
    }

    $('#eye').click(function () {
        var statusDb = btnAAlterColor();
        var slideAtual = $('#select-slider').val();
        $.post('https://www.aureliomendes.com.br/source/models/alterValues.php', {clicked: slideAtual, display: statusDb}, function (data) {
            console.log(data);
        });
    });
});