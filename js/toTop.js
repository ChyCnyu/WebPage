$(function() {
    'use strict';
    function showSidebar() {
        $('.mask').fadeIn();
        $('#sidebar2').css('right', 0);
    }

    function hideSidebar() {
        $('.mask').fadeOut();
        $('#sidebar2').css('right', -$('#sidebar2').width());
    }

    $('#sidebar').on('click', showSidebar);
    $('.mask').on('click', hideSidebar);
    $('#back').on('click', function() {
        $('html,body').animate({
            scrollTop:0
        }, 800)
    })

    $('#btn').click(function() {
        $('.mask').fadeIn();
    })

    $(window).on('scroll', function() {
        if($(window).scrollTop() > $(window).height()) {
            $('#back').fadeIn();
        } else {
            $('#back').fadeOut();
        }
    })

    $(window).trigger('scroll');
})