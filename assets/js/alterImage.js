$(document).ready(function () {
    $('#btn-social-1').click(function () {
        var dados = $(this).val();
        var formData = new FormData();
        formData.append('file', $('#social1')[0].files[0]);
        formData.append('social', dados);
        $.ajax({
            url : 'https://www.aureliomendes.com.br/source/models/upload.php',
            type : 'POST',
            data : formData,
            processData: false,  // tell jQuery not to process the data
            contentType: false,  // tell jQuery not to set contentType
            success : function(data) {
                console.log(data);
                if(data == 'imagem atualizada!'){
                    $('#warn-ok').show();
                    setTimeout(function(){
                        location.reload();
                    }, 5000);

                } else {
                    $('#warn-erro').show();
                    setTimeout(function(){
                        location.reload();
                    }, 5000);
                }
            }
        });
    });

    $('#btn-social-2').click(function () {
        var dados = $(this).val();
        var formData = new FormData();
        formData.append('file', $('#social2')[0].files[0]);
        formData.append('social', dados);
        $.ajax({
            url : 'https://www.aureliomendes.com.br/source/models/upload.php',
            type : 'POST',
            data : formData,
            processData: false,  // tell jQuery not to process the data
            contentType: false,  // tell jQuery not to set contentType
            success : function(data) {
                console.log(data);
                if(data == 'imagem atualizada!'){
                    $('#warn-ok').show();
                    setTimeout(function(){
                        location.reload();
                    }, 5000);

                } else {
                    $('#warn-erro').show();
                    setTimeout(function(){
                        location.reload();
                    }, 5000);
                }
            }
        });
    });

    $('#btn-social-3').click(function () {
        var dados = $(this).val();
        var formData = new FormData();
        formData.append('file', $('#social3')[0].files[0]);
        formData.append('social', dados);
        $.ajax({
            //
            url : 'https://www.aureliomendes.com.br/source/models/upload.php',
            type : 'POST',
            data : formData,
            processData: false,  // tell jQuery not to process the data
            contentType: false,  // tell jQuery not to set contentType
            success : function(data) {
                console.log(data);
                if(data == 'imagem atualizada!'){
                    $('#warn-ok').show();
                    setTimeout(function(){
                        location.reload();
                    }, 5000);

                } else {
                    $('#warn-erro').show();
                    setTimeout(function(){
                        location.reload();
                    }, 5000);
                }
            }
        });
    });

    //1
    $('#btn-1').click(function () {
        var dados = $(this).val();
        var formData = new FormData();
        formData.append('file', $('#file1')[0].files[0]);
        formData.append('text', dados);
        $.ajax({
            url : 'https://www.aureliomendes.com.br/source/models/upload.php',
            type : 'POST',
            data : formData,
            processData: false,  // tell jQuery not to process the data
            contentType: false,  // tell jQuery not to set contentType
            success : function(data) {
                console.log(data);
                if(data == 'imagem atualizada!'){
                    $('#warn-ok').show();
                    setTimeout(function(){
                        location.reload();
                    }, 5000);

                } else {
                    $('#warn-erro').show();
                    setTimeout(function(){
                        location.reload();
                    }, 5000);
                }
            }
        });
    });

    $('#btn-2').click(function () {
        var dados = $(this).val();
        var formData = new FormData();
        formData.append('file', $('#file2')[0].files[0]);
        formData.append('text', dados);
        $.ajax({
            url : 'https://www.aureliomendes.com.br/source/models/upload.php',
            type : 'POST',
            data : formData,
            processData: false,  // tell jQuery not to process the data
            contentType: false,  // tell jQuery not to set contentType
            success : function(data) {
                console.log(data);
                if(data == 'imagem atualizada!'){
                    $('#warn-ok').show();
                    setTimeout(function(){
                        location.reload();
                    }, 5000);

                } else {
                    $('#warn-erro').show();
                    setTimeout(function(){
                        location.reload();
                    }, 5000);
                }
            }
        });
    });

    $('#btn-3').click(function () {
        var dados = $(this).val();
        var formData = new FormData();
        formData.append('file', $('#file3')[0].files[0]);
        formData.append('text', dados);
        $.ajax({
            url : 'https://www.aureliomendes.com.br/source/models/upload.php',
            type : 'POST',
            data : formData,
            processData: false,  // tell jQuery not to process the data
            contentType: false,  // tell jQuery not to set contentType
            success : function(data) {
                console.log(data);
                if(data == 'imagem atualizada!'){
                    $('#warn-ok').show();
                    setTimeout(function(){
                        location.reload();
                    }, 5000);

                } else {
                    $('#warn-erro').show();
                    setTimeout(function(){
                        location.reload();
                    }, 5000);
                }
            }
        });
    });

    $('#btn-4').click(function () {
        var dados = $(this).val();
        var formData = new FormData();
        formData.append('file', $('#file4')[0].files[0]);
        formData.append('text', dados);
        $.ajax({
            url : 'https://www.aureliomendes.com.br/source/models/upload.php',
            type : 'POST',
            data : formData,
            processData: false,  // tell jQuery not to process the data
            contentType: false,  // tell jQuery not to set contentType
            success : function(data) {
                console.log(data);
                if(data == 'imagem atualizada!'){
                    $('#warn-ok').show();
                    setTimeout(function(){
                        location.reload();
                    }, 5000);

                } else {
                    $('#warn-erro').show();
                    setTimeout(function(){
                        location.reload();
                    }, 5000);
                }
            }
        });
    });
});