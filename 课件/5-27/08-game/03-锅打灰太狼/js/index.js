/*
 * @Description: 微信 YZS43507802
 * @version: 1.0
 * @Company: 
 * @Author: yinZhaoSheng
 * @Date: 2021-01-20 15:53:17
 * @LastEditors: yinZhaoSheng
 * @LastEditTime: 2021-01-20 15:54:12
 * @FilePath: /尹照胜JS完整/锅打灰太狼/index.js
 */
//1: 获取元素：得分，狼，时间条，开始游戏，游戏说明，结束结束，游戏开始；
// 2:点击游戏说明按钮，出现对应界面；
// 3:点击开始游戏，游戏界面消失，倒计时开始，狼开始出现；
// 4:狼出现：1:狼的位置随机，实现狼出现和狼消失的动画，当狼消失的时候，该元素从界面上消失；
            // 2:当狼呗点击时，实现狼被打的动画，狼出现和狼消失的动画停止，当狼被打的动
            // 画执行完后，该元素从界面上消失；
            // 3:当狼被点击时，判断点击的狼的类型，是灰太狼则加十分，是小灰灰则减十分；
            // 5:当点击倒计时结束游戏，显示游戏结束节面；
            // 6:点击冲新开始游戏，游戏重新开始；

            var scoreDiv = document.querySelector('.scoreDiv');
            var timeDiv = document.querySelector('.timeDiv');
            var wolvesDiv = document.querySelector('.wolvesDiv');
            var text1 = document.querySelector('.text1');
            var startDiv = document.querySelector('.startDiv');
            var introDiv = document.querySelector('.introDiv');
            var introGame = document.querySelector('.introGame');
            var text2 = document.querySelector('.text2');
            var endDiv = document.querySelector('.endDiv');
            var newStartDiv = document.querySelector('.newStartDiv');
            var posArr = [['98px','115px'],
                          ['17px','160px'],
                          ['15px','220px'],
                          ['30px','293px'],
                          ['122px','273px'],
                          ['207px','295px'],
                          ['200px','211px'],
                          ['187px','141px'],
                          ['100px','185px']];//二维数组[[left,top],[left,top]...]
            var carateTimer;//创建多个狼的计时器；
            var score = 0;//记录分数；
            
            // 游戏说明
            introDiv.onclick = function(){
                introGame.style.display = 'block';
            }
            introGame.onclick = function(){
                this.style.display = 'none';
            }
            
            //游戏开始
            startDiv.onclick =function(){
                text1.style.display = 'none';
                //倒计时开始；
                changeTiming();
                //创建狼
                creatMoreWolvev()
            }
            
            function changeTiming(){
                var timer = setInterval(function(){
                    var timeWidth = timeDiv.offsetWidth;
                    //当timeDiv的宽度小于0时需要停止计时器；
                    if (timeWidth > 0) {
                        timeDiv.style.width = timeWidth - 1 + 'px';
                    }else {
                        clearInterval(timer);
                        // 游戏结束
                        gameOverFn();
                    }
                },100);
            }
            
            //游戏结束函数
            function gameOverFn(){
                //停止狼的计时器
                clearInterval(carateTimer);
                //清除页面所有的计时器；
                var timer = setInterval(function(){},1000);
                for(i = 0;i < timer;i++){
                    clearInterval(i)
                }
                //显示游戏界面；
                text2.style.display = 'block';
            }
            /*
            狼对象的属性：
            类型：h(灰太狼) x(小灰灰)；
            src：图片地址；
            狼显示的动画：
            狼消失的动画；
            狼被打的动画；
            狼只能被打一次；
            */
            //先创建一个狼；
            function createWolf(){
                var wolf = new Image();
                wolf.type = randomFn(1,100) > 80 ? 'x' : 'h';
                wolf.index = 0;//狼显示图片的下标；
                wolf.src = 'img/' + wolf.type + wolf.index + '.png';
                wolf.clickAble = true;//狼能否被点击，默认是true；
                wolf.style.position = 'absolute';
                //随机狼的位置的下标；
                var posInd;
                var isHave = true;
                //选择没有狼的位置
                while(isHave){
                    posInd = randomFn(0,8);
                    var wolvesArr = wolvesDiv.children;
                    for(var i = 0; i < wolvesArr.length;i++){
                        if(wolvesArr[i].style.left == posArr[posInd][0]){
                            //表示该位置没有狼，需要重新随机
                            break;
                        }
                    }
                    
                    if (i == wolvesArr.length) {
                        //表示该位置上没有狼，则结束while循环
                        isHave = false;
                    }
                }
                wolf.style.left = posArr[posInd][0];
                wolf.style.top = posArr[posInd][1];
                wolvesDiv.appendChild(wolf);
                return wolf;
            }
            function randomFn(n1,n2){
                return Math.round(Math.random() * (n2 - n1) + n1);
            }
            
            //狼显示和消失的动画；
            function wolfAnimateFn(){
                var wolf = createWolf();
                //狼显示的动画；
                wolf.appearTimer = setInterval(function(){
                    if (wolf.index < 5) {
                        wolf.index++;
                        wolf.src = 'img/' + wolf.type + wolf.index + '.png';
                    }else{
                        //停止狼显示的动画,创建狼消失的动画；
                        clearInterval(wolf.appearTimer);
                        wolf.disappearTimer = setInterval(function(){
                            if (wolf.index > 0) {
                                wolf.index--;
                                wolf.src = 'img/' + wolf.type + wolf.index + '.png';
                            }else{
                                wolf.remove();
                                //停止狼消失动画的计时器；
                                clearInterval(wolf.disappearTimer);
                            }
                        },150);
                    }
                },150);
                // 执行狼被打的函数
                clickWolf(wolf);
            }
            
            //创建多头狼
            function creatMoreWolvev(){
                carateTimer = setInterval(wolfAnimateFn,1000);
            }
            // 狼被点击的函数
            function clickWolf(wf){
                wf.onclick = function (){
                    if(wf.clickAble){
                        // 停止狼出现和消失的计时器
                        clearInterval(wf.appearTimer);
                        clearInterval(wf.disappearTimer);
                        // 创建狼被打的动画
                        wf.index = 6;
                        wf.src = 'img/' + wf.type + wf.index + '.png';
                        wf.clickTimer = setInterval(function(){
                            if (wf.index < 9) {
                                wf.index++;
                                wf.src = 'img/' + wf.type + wf.index + '.png';
                            }else {
                                clearInterval(wf.clickTimer);
                                wf.remove();
                            }
                        },200);
                        // 狼被点击后，判断点击狼的类型
                        if(wf.type == 'h'){
                            score += 10;
                        }else{
                            score -= 10;
                        }
                        scoreDiv.innerText = score;
                    }
                    wf.clickAble = false;//禁止狼再次被打
                }
            
            }
            //重新开始
            newStartDiv.onclick = function(){
                // 强制刷新当前页面
                history.go(0);
            }