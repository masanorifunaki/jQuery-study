$(function ($) {

    'use strict';

    $('a[target="_blank"]').css('color', 'red');
    // 部分一致
    $('input[name*="cat"').css('height', '100px');
    // 完全一致
    $('input[name~="cat"').css('height', '50px');
    // 後方一致
    $('a[href$="masanorifunaki"').css('color', 'black');
    // 子セレクター
    $('body > h2').css('color', 'blue');
    // 隣接兄弟セレクター
    $('h3 + p').fadeOut();
    // 一般兄弟セレクター
    $('h4 ~ p').fadeOut();
});