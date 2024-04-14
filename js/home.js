let btnBack = $("#back");
let btnNext = $("#next");
let count = 0;
const listBg = [
    "./img/Image2.png",
    "./img/food/1.jfif",
    "./img/food/2.jfif",
    "./img/food/3.jfif",
    "./img/food/4.jfif"
]
function time(){
    $('#next').click();
}
window.setInterval(function() {
    time();
}, 3200);
btnBack.on('click',function(){
    if(count <=0){
        count =listBg.length;
    }else{
   $("#bg-img").attr('src',listBg[count--]);
    }
})
btnNext.on('click',function(){
    if(count >= listBg.length){
        count =0;
    }else{
   $("#bg-img").attr('src',listBg[count++]);
    }
})
// function changeBg(){
//    $("#bg-img").attr('src',);
//    console.log(vb);

// }
// changeBg()


let hour = $("#hour")
let minute =$("#minute");
let second = $("#second");
let btnPre = $("#run");
let c1 = 0;
let c2 = 1;
let c3 = 1;
function time2(){
        $('#run').click();
}
btnPre.on('click',function(){
    if(c2 > 60){
        hour.text(c3++);
        c2 = 0
    }
    if(c1 > 60){
        minute.text(c2++);
        c1 = 0;
    }else{
        second.text(c1++);
    }
})
window.setInterval(function() {
    time2();
}, 700);
