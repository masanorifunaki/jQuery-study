$(function ($) {

    'use strict';
    // セレクタ
    // > 直下の子要素
    //  それ以下のの要素
    // , 複数の要素
    // + 隣接する要素

    // フィルタ
    // :eq()
    // :gt(), :lt()
    // :even, :odd
    // :contains()
    // :first. :last
    // $('#main > li:even').css('color', 'green');
    // $('#sub > li:contains(4)').css('color', 'blue');

    // メソッドを使ったDOM要素の指定
    // parent(), children()
    // next(), prev()
    // siblings() - 兄弟要素
    // $('#sub').children().css('color', 'green');
    // $('#main > li:eq(2)').next().css('color', 'blue');

    // 属性セレクタ
    // =
    // !=
    // *=
    // ^=
    // $=
    // $('a[href="http://google.com"]').css('background', 'red');
    // $('a[href*="jp"').css('background', 'red');

    // atter HTMLの属性の値を取得したり変更する
    // console.log($('a').attr('href'));
    // console.log($('a').data('google'));

    // タグの中身を操作
    // text
    // html
    // val
    // remove, empty

    // $('p :eq(0)').text('Hello');
    // $('p :eq(1)').remove();
    // $('input').val('hello again!');

    // 要素を追加する
    // before, after -> inserBefore, insertAfter
    // prepend, append -> prependTo, appendTo

    // var li = $('<li>').text('just added');
    // li.insertBefore($('ul > li:eq(1)'));
    // $('ul').append(li);

    // エフェクト
    // hide, show
    // fadeOut, fadeIn
    // toggle
    // $('#box').toggle(800).toggle(800);
    // $('#box').fadeOut(800, function () {
    //     alert('gone!');
    // });

    // イベント
    // $('#box').click(function () {
    //     alert('h1');
    // });

    // $('#box')
    //     .mouseover(function () {
    //         $(this).css('background', 'green');
    //     })
    //     .mouseout(function () {
    //         $(this).css('background', 'red');
    //     })
    //     .mousemove(function (e) {
    //         $(this).text(e.pageX);
    //     });

    // focus､blur､change
    // $('#name')
    //     .focus(function () {
    //         $(this).css('background', 'red');
    //     })
    //     .blur(function () {
    //         $(this).css('background', 'white');
    //     });
    // $('#members').change(function () {
    //     alert('change!');
    // });

    // 動的に作られた要素にイベントを設定していく方法
    // $('button').click(function () {
    //     var p = $('<p>').text('vanish!').addClass('vanish');
    //     $(this).before(p);
    // });

    // $('body').on('click', '.vanish', function () {
    //     $(this).remove();
    // });

    // Ajax
    // $('button').click(function () {
    // // loadは非同期
    //     $('#result').load('more.html', function () {
    //         $('#message').css('color', 'red');
    //     });
    // });

    // $.post
    // $.get

    $('#greet').click(function () {

        $.get('greet.php', {
            name: $('#name').val()
        }, function (data) {
            $('#result').html(data.message + '(' + data.length + ')');
        });

    });
});