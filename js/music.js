/**
 * Created by Denis on 11.04.2017.
 */

var interval;
var anim;

$(document).ready(function () {
    let player = new Player()
    $('#common').load('../common/social.html')

    $('#music-page').css('top', '100px')
    $('#music-page').css('opacity', '1')
    $('#head-p').css('top', '0')
    $('#head-p').css('opacity', '1')

    let sounds = [
        'https://s3-us-west-2.amazonaws.com/s.cdpn.io/355309/G4.mp3'
    ]

    window.AudioContext = window.AudioContext || window.webkitAudioContext;

    function play( snd ) {
        var audioCtx = new AudioContext();

        var request = new XMLHttpRequest();
        request.open( "GET", snd, true );
        request.responseType = "arraybuffer";
        request.onload = function () {
            var audioData = request.response;

            audioCtx.decodeAudioData(
                audioData,
                function ( buffer ) {
                    var smp = audioCtx.createBufferSource();
                    smp.buffer = buffer;
                    smp.connect( audioCtx.destination );
                    smp.start( 0 );
                },
                function ( e ) {
                    alert( "Error with decoding audio data" + e.err );
                }
            );
        };
        request.send();
    }

    $('.btn-play').click(function () {

        // play("music/Blue%20Smoke.mp3")
        if(!$('#' + $(this).attr('about')).hasClass('active')) {
            $('.active').removeClass('active')
            $('#' + $(this).attr('about')).addClass('active')
            $('#cur').css('width', '0')
            player.Open()
            if(!player.paused) player.PauseSong()
            player.SetSong($(this).attr('about'))
        }
            if (!player.paused) {
                player.PauseSong()
                $('#cur').stop()

            }
            else {
                player.PlaySong()
                anim = $('#cur').animate({width: '100%'}, Math.round(player.audio.duration) * 1000, 'linear', {width: '0'})
            }
    })

    $('#play').click(function(){
        // if (!player.paused) {
        //     player.PauseSong()
        //     $('#cur').stop()
        //
        // }
        // else {
        //     player.PlaySong()
        //     anim = $('#cur').animate({width: '100%'}, Math.round(player.audio.duration)*1000, 'linear', {width: '0'})
        // }
    })

    $('#on-off').click(function () {
        $('#player').css('bottom', '-100px')
    })
})

function MoveProgress(){
    interval++;
    $('#cur').css('width', interval + 'px');
}


class Player {

    SetSong(song){
        if(this.audio != null) this.audio = null;

        this.audio = document.querySelector('#' + song);
        this.paused = true;

        var min = Math.floor(this.audio.duration / 60);
        var sec = Math.round(this.audio.duration % 60);

        var oldNav = $('#song-nav').html();
        $('#song-nav').html(oldNav + '<p>' + min + ':' + sec + '</p>')
    }

    Open(){
        $('#player').css('bottom', '0')
    }

    PlaySong(){

        this.audio.play();
        this.paused = false
    }

    PauseSong(){
        if(this.audio != null) this.audio.pause()
        this.paused = true
    }

    Stop(){
        this.audio.pause()
        this.audio = null
        this.paused = true
    }


}
