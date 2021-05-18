$('.xfzyw').click(function(){
    $('.xfz-con').slideToggle(300)
    $('.xfzyw::after').animate({
        rotate:360 ,
    })
})
$('.nav-lis').hover(function(){
    $(this).css('color','#999')
},function(){
    $(this).css('color','#000')
})

$()