/**
 * Created by Denis on 08.04.2017.
 */
$(document).ready(function() {
    // $('#main-page').css('opacity', '1')
    $('#common').load('common/social.html')


    setTimeout(function () {
        $('#mainlogo').css('opacity', '1')
        // $('#vk').css('margin-top', '0')
        $('#art').css('opacity', '0.6')
        $('#art').css('margin-top', '0')
    }, 500)

    setTimeout(function () {
        // $('#fb').css('margin-top', '0')
        $('#music').css('opacity', '0.6')
        $('#music').css('margin-top', '0')
    }, 800)

    setTimeout(function () {
        // $('#sc').css('margin-top', '0')
        $('#photo').css('opacity', '0.6')
        $('#photo').css('margin-top', '0')
    }, 1100)

    $('#music').click(function () {
        // $('#main-page').css('opacity', '0')
    })
})