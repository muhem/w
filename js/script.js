// event pada saat link di klik
$('.page-scroll').on('click', function (e) {

    // ambil isi href
    var tujuan = $(this).attr('href');
    // tangkap elemen ybs 
    var elemenTujuan = $(tujuan);

    // pindahkan scroll
    $('html,body').animate({
        scrollTop: elemenTujuan.offset().top
    }, 1250, 'easeInOutExpo');

    e.preventDefault();

});


// paralax
$(window).scroll(function () {

    var wScroll = $(this).scrollTop();

    // motion
    if (wScroll > $('.pencegahan').offset().top - 10) {
        $('.pencegahan .motion').each(function (i) {
            setTimeout(function () {
                $('.pencegahan .motion').eq(i).addClass('muncul');
            }, 300 * i + 1);
        });

    }

});

// scrollTop
$(document).ready(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('#topBtn').fadeIn();
        } else {
            $('#topBtn').fadeOut();
        }
    });

    $("#topBtn").click(function () {
        $('html, body').animate({
            scrollTop: 0
        }, 1250, 'easeInOutExpo');
    });
});