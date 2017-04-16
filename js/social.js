/**
 * Created by Denis on 11.04.2017.
 */
$(document).ready(function () {
    setTimeout(function () {
        $('#vk').css('margin-top', '0')
    }, 500)

    setTimeout(function () {
        $('#fb').css('margin-top', '0')
    }, 800)

    setTimeout(function () {
        $('#sc').css('margin-top', '0')
    }, 1100)

    $('#vk').hover(function () {
        $(this).css('transform', 'translateX(-150px)')
    }, function () {
        $(this).css('transform', 'translateX(0)')
    })

    $('#fb').hover(function () {
        $(this).css('transform', 'translateX(-150px)')
        $('#vk').css('transform', 'translateX(-150px)')
    }, function () {
        $(this).css('transform', 'translateX(0)')
        $('#vk').css('transform', 'translateX(0)')
    })

    $('#sc').hover(function () {
        $(this).css('transform', 'translateX(-150px)')
        $('#vk').css('transform', 'translateX(-150px)')
        $('#fb').css('transform', 'translateX(-150px)')
    }, function () {
        $(this).css('transform', 'translateX(0)')
        $('#vk').css('transform', 'translateX(0)')
        $('#fb').css('transform', 'translateX(0)')
    })
})