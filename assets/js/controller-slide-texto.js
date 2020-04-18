$(document).ready(function() {
    $('nav a').click(function(e){
        e.preventDefault();
        var id = $(this).attr('href'),
            menuHeight = $('nav').innerHeight(),
            targetOffset = $(id).offset().top;
        $('html, body').animate({
            scrollTop: targetOffset - menuHeight
        }, 500);
    });

    $(window).on('scroll', function () {
        if($(window).scrollTop() < 400){
            $('#home-btn').addClass('here');
        } else {
            $('#home-btn').removeClass('here');
        }

        if($(window).scrollTop() >= 400 && $(window).scrollTop() < 1000){
            $('#about-btn').addClass('here');
        } else {
            $('#about-btn').removeClass('here');
        }

        if($(window).scrollTop() >= 1000 && $(window).scrollTop() < 1600){
            $('#port-btn').addClass('here');
        } else {
            $('#port-btn').removeClass('here');
        }

        if($(window).scrollTop() >= 1600){
            $('#contact-btn').addClass('here');
        } else {
            $('#contact-btn').removeClass('here');
        }
    });

    $(window).on('scroll', function () {
        if($(window).scrollTop()){
            $('header').addClass('animate-header');
        } else {
            $('header').removeClass('animate-header');
        }
    });

    $('.item-slide').click(function () {
        var idGaleria = $(this).attr('id');

        switch (idGaleria) {
            case 'img-first':
                var idImagesItems = 'img-galery-';
                var qntd = document.getElementsByClassName('igm').length;
                for(i=1; i<=qntd; i++){
                    $('#img-galery-' + i).css({"background-image":"url('assets/images/galeria/first/" + i + ".jpg')"});
                }
                break;
            case 'img-second':
                var idImagesItems = 'img-galery-';
                var qntd = document.getElementsByClassName('igm').length;
                for(i=1; i<=qntd; i++){
                    $('#img-galery-' + i).css({"background-image":"url('assets/images/galeria/second/" + i + ".jpg')"});
                }
                break;
            case 'img-third':
                var idImagesItems = 'img-galery-';
                var qntd = document.getElementsByClassName('igm').length;
                for(i=1; i<=qntd; i++){
                    $('#img-galery-' + i).css({"background-image":"url('assets/images/galeria/third/" + i + ".jpg')"});
                }
                break;
            case 'img-fourth':
                var idImagesItems = 'img-galery-';
                var qntd = document.getElementsByClassName('igm').length;
                for(i=1; i<=qntd; i++){
                    $('#img-galery-' + i).css({"background-image":"url('assets/images/galeria/fourth/" + i + ".jpg')"});
                }
                break;
            case 'img-fifth':
                var idImagesItems = 'img-galery-';
                var qntd = document.getElementsByClassName('igm').length;
                for(i=1; i<=qntd; i++){
                    $('#img-galery-' + i).css({"background-image":"url('assets/images/galeria/fifth/" + i + ".jpg')"});
                }
                break;

                //

            case 'img-six':
                var idImagesItems = 'img-galery-';
                var qntd = document.getElementsByClassName('igm').length;
                for(i=1; i<=qntd; i++){
                    $('#img-galery-' + i).css({"background-image":"url('assets/images/galeria/six/" + i + ".jpg')"});
                }
                break;
            case 'img-seven':
                var idImagesItems = 'img-galery-';
                var qntd = document.getElementsByClassName('igm').length;
                for(i=1; i<=qntd; i++){
                    $('#img-galery-' + i).css({"background-image":"url('assets/images/galeria/seven/" + i + ".jpg')"});
                }
                break;
            case 'img-eight':
                var idImagesItems = 'img-galery-';
                var qntd = document.getElementsByClassName('igm').length;
                for(i=1; i<=qntd; i++){
                    $('#img-galery-' + i).css({"background-image":"url('assets/images/galeria/eight/" + i + ".jpg')"});
                }
                break;
            case 'img-nine':
                var idImagesItems = 'img-galery-';
                var qntd = document.getElementsByClassName('igm').length;
                for(i=1; i<=qntd; i++){
                    $('#img-galery-' + i).css({"background-image":"url('assets/images/galeria/nine/" + i + ".jpg')"});
                }
                break;
            case 'img-ten':
                var idImagesItems = 'img-galery-';
                var qntd = document.getElementsByClassName('igm').length;
                for(i=1; i<=qntd; i++){
                    $('#img-galery-' + i).css({"background-image":"url('assets/images/galeria/ten/" + i + ".jpg')"});
                }
                break;
        }

        $('.galeria').show();
    });

    $('.btn-close-g').click(function () {
        $('.galeria').hide();
    });
});