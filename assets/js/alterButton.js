$(document).ready(function () {
    $('#select-slider').change(function (){
        var slide = ($(this).val());
        var counterItems = 1;
        var counterItems2 = 1;
        switch (slide) {
            case 'slide2':
                $('button[name="btn-sender"]').each(function () {
                    $(this).prop('value', '2-' + counterItems2);
                    counterItems2++;
                });

                $('.item-slide').each(function () {
                    $(this).css("background-image", "url(assets/images/galeria/second/" + counterItems + ".jpg)");
                    counterItems++;
                });
                break;

            case 'slide3':
                $('button[name="btn-sender"]').each(function () {
                    $(this).prop('value', '3-' + counterItems2);
                    counterItems2++;
                });
                $('.item-slide').each(function () {
                    $(this).css("background-image", "url(assets/images/galeria/third/" + counterItems + ".jpg)");
                    counterItems++;
                });
                break;

            case 'slide4':
                $('button[name="btn-sender"]').each(function () {
                    $(this).prop('value', '4-' + counterItems2);
                    counterItems2++;
                });
                $('.item-slide').each(function () {
                    $(this).css("background-image", "url(assets/images/galeria/fouth/" + counterItems + ".jpg)");
                    counterItems++;
                });
                break;

            case 'slide5':
                $('button[name="btn-sender"]').each(function () {
                    $(this).prop('value', '5-' + counterItems2);
                    counterItems2++;
                });
                $('.item-slide').each(function () {
                    $(this).css("background-image", "url(assets/images/galeria/fifth/" + counterItems + ".jpg)");
                    counterItems++;
                });
                break;

            case 'slide6':
                $('button[name="btn-sender"]').each(function () {
                    $(this).prop('value', '6-' + counterItems2);
                    counterItems2++;
                });
                $('.item-slide').each(function () {
                    $(this).css("background-image", "url(assets/images/galeria/six/" + counterItems + ".jpg)");
                    counterItems++;
                });
                break;

            case 'slide7':
                $('button[name="btn-sender"]').each(function () {
                    $(this).prop('value', '7-' + counterItems2);
                    counterItems2++;
                });

                $('.item-slide').each(function () {
                    $(this).css("background-image", "url(assets/images/galeria/seven/" + counterItems + ".jpg)");
                    counterItems++;
                });
                break;

            case 'slide8':
                $('button[name="btn-sender"]').each(function () {
                    $(this).prop('value', '8-' + counterItems2);
                    counterItems2++;
                });
                $('.item-slide').each(function () {
                    $(this).css("background-image", "url(assets/images/galeria/eight/" + counterItems + ".jpg)");
                    counterItems++;
                });
                break;

            case 'slide9':
                $('button[name="btn-sender"]').each(function () {
                    $(this).prop('value', '9-' + counterItems2);
                    counterItems2++;
                });
                $('.item-slide').each(function () {
                    $(this).css("background-image", "url(assets/images/galeria/nine/" + counterItems + ".jpg)");
                    counterItems++;
                });
                break;

            case 'slide10':
                $('button[name="btn-sender"]').each(function () {
                    $(this).prop('value', '10-' + counterItems2);
                    counterItems2++;
                });
                $('.item-slide').each(function () {
                    $(this).css("background-image", "url(assets/images/galeria/ten/" + counterItems + ".jpg)");
                    counterItems++;
                });
                break;

            default:
                $('button[name="btn-sender"]').each(function () {
                    $(this).prop('value', '1-' + counterItems2);
                    counterItems2++;
                });
                $('.item-slide').each(function () {
                    $(this).css("background-image", "url(assets/images/galeria/first/" + counterItems + ".jpg)");
                    counterItems++;
                });
        }
    });
});