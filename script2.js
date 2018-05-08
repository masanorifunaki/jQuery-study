$(function ($) {
    'use strict';
    // const sub = $('#sub');
    // sub.css('color', 'red');

    // const mainItem = $('#main > .item');
    // mainItem.css('color', 'blue');

    // // .item の横にある .item
    // const sub = $('.item + .item');
    // sub.css('color', 'red');

    // $('#sub > li:last').css('color', 'green');
    // $('#sub > li:even').css('color', 'green');
    // $('#sub > li:contains(1)').css('color', 'green');

    // 兄弟要素のDOM要素を指定 .siblings()
    // $('#sub > li:eq(2)').siblings().css('color', 'green');

    // $('a[href$="jp"]').css('background', 'red');
    // $('a[href$="jp"]').addClass('myStyle');
    // console.log($('p').css('color'));
    // $('a[href$="jp"]').removeClass();

    // $('a').attr('href', 'http://google.co.jp');
    // console.log($('a').data('sitename'));

    // console.log($('input').val());
    // $('input').val('hello World');

    // $('p').remove();

    // var li = $('<li>').text('just');
    // $('#sub > li:eq(1)').before(li);
    // li.appendTo($('#sub > li:last'));

    // $('#box').fadeOut(1000, () => {
    //     alert('OK');
    // });

    // $('#box')
    //     .mouseover(function () {
    //         $(this).css('background', 'green');
    //     })
    //     .mouseout(function () {
    //         $(this).css('background', 'red');
    //     }).mousemove(function (e) {
    //         $(this).text(e.pageX);
    //     });

    // $('#name')
    //     .focus(function () {
    //         $(this).css('background', 'red');
    //     })
    //     .blur(function () {
    //         $(this).css('background', 'white');
    //     });
    // $('#members').change(function () {
    //     alert('OK');
    // });

    // $('button').click(function () {
    //     var p = $('<p>').text('vanish').addClass('vanish');
    //     $(this).before(p);
    // });

    // $('body').on('click', '.vanish', function () {
    //     $(this).remove();
    // });

    // $('button').click(function () {
    //     $('#result').load('more.html', function () {
    //         $('#message').css('color', 'red');
    //     });
    // });

    $('#greet').click(function () {
        $.get('greet.php', {
            name: $('#name').val()
        }, function (data) {
            $('#result').html(data);
        });
    });

});