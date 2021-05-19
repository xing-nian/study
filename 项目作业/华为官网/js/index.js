$('.xfzyw').click(function(){
    $('.xfz-con').slideToggle(300)
    $('.xfzyw span').toggleClass('active');
})
$('.nav-lis').hover(function(){
    $(this).css('color','#999')
},function(){
    $(this).css('color','#000')
})

//点击 颜色选项
let x = 0;
$('.color-item').eq(x).css('display','block');
$('.color-select').eq(x).css('display','block')
$('.color-button').click(function(){
    $('.color-button').children().removeClass('active');
    $(this).children().addClass('active');
    let dex = $(this).parent().index();
    $('.color-item').eq(x).css('display','none');
    $('.color-item').eq(dex).css('display','block')
    $('.color-select').eq(x).css('display','none');
    $('.color-select').eq(dex).slideToggle(1000);
    x = dex;
    // let title = $(this).index()].title;
    // $('.color-title').html(title);
}) 
$('.button-reset').css('display','none')
$('.button-screen ,.icon-guanbi1').click(function(){
    $('#select-list').slideToggle(300)
    $('.button-reset').slideToggle(300)
    $(this).children().toggleClass('active');
    $(this).children().toggleClass('active1');
    
})

$('.icon-guanbi1').click(function(){
    $('.arrow2').toggleClass('active');
    $('.arrow2').toggleClass('active1');
})
$('.indexes ul li').click(function(){
   console.log( $(this).html());
   let span = $('<span>')
   span.append($(this).html())
   $('#select-con').append(span);
})