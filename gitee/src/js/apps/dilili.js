/**
 * Created by 聪伟 on 2016/3/29.
 */
onload = function() {

    //轮播开始
    function lunbo() {

        var btnleft = document.getElementsByClassName("lunbo-btn")[0].
        getElementsByClassName("btnleft")[0];
        var btnright = document.getElementsByClassName("lunbo-btn")[0].
        getElementsByClassName("btnright")[0];
        var lunboContainer = document.getElementsByClassName("lunbo-container")[0];
        var lunboImgs = document.getElementsByClassName("lunbo-container")[0].
        getElementsByClassName("lunbo-img");

        lunboContainer.style.marginLeft = -lunboImgs[0].offsetWidth + "px";
        a = parseInt(lunboContainer.style.marginLeft);
        //var arrlunboImgs = jQuery.makeArray(lunboImgs);//这是jquery中将其他类型转为数组的方式
        var arrlunboImgs = Array.prototype.slice.call(lunboImgs); //可以通过这种方式将不是数组的参数转为真正的数组

        //lunbo右键
        btnright.onclick = rightclick;

        function rightclick() {
            //clearInterval(si);
            var s = setInterval(lbright, 1);

            function lbright() {
                a = a - 1;
                lunboContainer.style.marginLeft = a + "px";
                var imgWidth = lunboImgs[1].offsetWidth;
                if ((a + lunboImgs[0].offsetWidth) % (imgWidth) == 0 || (a + lunboImgs[0].offsetWidth) % (imgWidth) == 1) {
                    lunboContainer.removeChild(arrlunboImgs[0]);
                    lunboContainer.appendChild(arrlunboImgs[0]);
                    clearInterval(s);
                    arrlunboImgs.push(arrlunboImgs.shift());
                    a = -imgWidth;
                    lunboContainer.style.marginLeft = a + "px";
                }
            }
        }

        //自动轮播
        //var si = setInterval(rightclick, 5000);

        //lunbo左键
        btnleft.onclick = function() {
            //clearInterval(si);
            var s = setInterval(lbleft, 1);

            function lbleft() {
                a++;
                lunboContainer.style.marginLeft = a + "px";
                var imgWidth = lunboImgs[arrlunboImgs.length - 1].offsetWidth;
                if ((a + lunboImgs[0].offsetWidth) % (lunboImgs[0].offsetWidth) == 0) {
                    lunboContainer.removeChild(arrlunboImgs[arrlunboImgs.length - 1]);
                    lunboContainer.insertBefore(arrlunboImgs[arrlunboImgs.length - 1], arrlunboImgs[0]);
                    clearInterval(s);
                    arrlunboImgs.unshift(arrlunboImgs.pop());
                    a = -imgWidth;
                    lunboContainer.style.marginLeft = a - 2 + "px";
                }
            }
        };
    }

    lunbo();

    //lunbo结束

    //recommend开始
    function recommend() {
        var btns = document.getElementsByClassName("recommend")[0].getElementsByTagName("button");
        var imgcontents = document.getElementsByClassName("recommend")[0].getElementsByClassName("imgcontent");
        var now = 0;
        imgcontents[0].style.zIndex = "1";

        btns[1].onclick = function() {
            if (now == 0) {
                imgcontents[0].style.animation = "rtlnow .5s";
                imgcontents[0].style.animationFillMode = "forwards";
                imgcontents[1].style.animation = "rtlnext .5s";
                imgcontents[1].style.animationFillMode = "forwards";
                imgcontents[1].style.zIndex = "1";
                now = 1;
            } else {
                imgcontents[1].style.animation = "rtlnow .5s";
                imgcontents[1].style.animationFillMode = "forwards";
                imgcontents[0].style.animation = "rtlnext .5s";
                imgcontents[0].style.animationFillMode = "forwards";
                imgcontents[0].style.zIndex = "1";
                now = 0;
            }
        };

        btns[0].onclick = function() {
            if (now == 0) {
                imgcontents[0].style.animation = "ltrnow .5s";
                imgcontents[0].style.animationFillMode = "forwards";
                imgcontents[1].style.animation = "ltrnext .5s";
                imgcontents[1].style.animationFillMode = "forwards";
                imgcontents[1].style.zIndex = "1";
                now = 1;
            } else {
                imgcontents[1].style.animation = "ltrnow .5s";
                imgcontents[1].style.animationFillMode = "forwards";
                imgcontents[0].style.animation = "ltrnext .5s";
                imgcontents[0].style.animationFillMode = "forwards";
                imgcontents[0].style.zIndex = "1";
                now = 0;
            }
        };

    }

    recommend();
    //recommend结束

    //滚动监听
    onscroll = function() {
        var scrollTop = getScrollTop();
        //console.log(scrollTop);
        if (scrollTop > 866) {
            var floor1 = document.getElementsByClassName("floor1")[0];
            floor1.style.marginLeft = -15 + "px";
            floor1.style.opacity = "1";
        }
        if (scrollTop > 1450) {
            var floor2 = document.getElementsByClassName("floor2")[0];
            floor2.style.marginLeft = -15 + "px";
            floor2.style.opacity = "1";
        }
        if (scrollTop > 2000) {
            var floor3 = document.getElementsByClassName("floor3")[0];
            floor3.style.marginLeft = -15 + "px";
            floor3.style.opacity = "1";
        }
        if (scrollTop > 2570) {
            var floor4 = document.getElementsByClassName("floor4")[0];
            floor4.style.marginLeft = -15 + "px";
            floor4.style.opacity = "1";
        }
        if (scrollTop > 3040) {
            var floor5 = document.getElementsByClassName("floor5")[0];
            floor5.style.marginLeft = -15 + "px";
            floor5.style.opacity = "1";
        }
        if (scrollTop > 3700) {
            var floor6 = document.getElementsByClassName("floor6")[0];
            floor6.style.marginLeft = -15 + "px";
            floor6.style.opacity = "1";
        }
        if (scrollTop > 4270) {
            var floor7 = document.getElementsByClassName("floor7")[0];
            floor7.style.marginLeft = -15 + "px";
            floor7.style.opacity = "1";
        }
        if (scrollTop > 4840) {
            var floor8 = document.getElementsByClassName("floor8")[0];
            floor8.style.marginLeft = -15 + "px";
            floor8.style.opacity = "1";
        }
    };

    function getScrollTop() {
        return document.documentElement.scrollTop || document.body.scrollTop;
    }


};