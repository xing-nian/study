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
$('.color-select').eq(x).css('opacity',1)
$('.color-button').click(function(){
    $('.color-button').children().removeClass('active');
    $(this).children().addClass('active');
    let dex = $(this).parent().index();
    $('.color-item').eq(x).css('display','none');
    $('.color-item').eq(dex).css('display','block')
    

          // 手机动画
      $(".color-select").eq(x).animate({
            top: 150,
            opacity: 0,
          },300,function () {
          $(this).css("top", 0); 
          console.log($(this));
          //注意将原来那组手机的位置复原
            // 原来显示的那组手机动画结束
            // 当前应该显示的这组手机要开始动画
            console.log($(".color-select").eq(dex).children().eq(1));
        $(".color-select").eq(dex).css("opacity", 1).children().css("opacity", 0).eq(1).css({ top: 80 })
              .animate({
                top: 100,
                opacity: 1,
              });

            // phone-left 延迟动画
            setTimeout(() => {
              $(".color-select")
                .eq(dex)
                .children()
                .eq(0)
                .css({ top: 270 })
                .animate({
                  top: 190,
                  opacity: 1,
                });
            }, 250);
            x = dex;
          }
        );
    
    // let title = $(this).index()].title;
    // $('.color-title').html(title);
}) 


//3.监听页面滚动事件
$(window).scroll(function () {
    // 获取页面滚动高度
    let st = $("body,html").scrollTop();
    // console.log(st);

    let top = st / 1.1;
    if (st >= 104) {
      $("#ware-mask").css(
        {
          top: top - 52,
        }
      );
      $('#mask').css({opacity:(st-104)/970})
    }else{
      $("#ware-mask").css(
        {
          top: 100,
        }
      );
      $('#mask').css({opacity:0})

    }
  });


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
//    console.log( $(this).html());
   let span = $('<span>')
   span.append($(this).html()+'  ×')
   $('#select-con').append(span);
})
// $('.button-reset').click(function(){
//     $('#select-con').remove('span')
// })
$('#select-con').children().click(function(){
    console.log($(this));
    $(this).remove();
})