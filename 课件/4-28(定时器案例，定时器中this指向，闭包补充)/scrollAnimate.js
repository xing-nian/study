// 1.当前页面向上滚动的高度
// 2.目标地 滚动到指定位置的值

function scrollAnimate(ST,targetST) {
    // 获取当前页面的滚动高度
    // var ST = document.scrollingElement.scrollTop;
    // 计算路程
    var S = Math.abs(ST - targetST);
    // 计算速度
    var V = (S / 300) * 20;

    if (timer == null) {
        timer = setInterval(function () {
            if (ST > targetST) {
                ST -= V;
                if (ST <= targetST) {
                    ST = targetST;
                    clearInterval(timer);
                    timer = null;
                }
            } else {
                ST += V;
                if (ST >= targetST) {
                    ST = targetST;
                    clearInterval(timer);
                    timer = null;
                }
            }

            document.scrollingElement.scrollTop = ST;
        }, 20);
    }
}
