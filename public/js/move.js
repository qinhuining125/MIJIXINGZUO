$(document).ready(init);

var Data = {
    startX: 0,
    startY: 0,
    currentX: 0,
    currentY: 0,
    locked: true //是否设值完成, 用于完美控制不同浏览器事件解析差异
};
 
function init(){               
    addListener();
}
 
function addListener(){
    $("body").mouseover(doMouseOver).mousemove(doMouseMove);
}
 
function doMouseOver(e){
    Data.startX = e.pageX - Data.currentX;
    Data.startY = e.pageY - Data.currentY;
    Data.locked = true;               
}
 
function doMouseMove(e){
    if(Data.locked != true){return false;}
    Data.currentX = -0.2*(e.pageX - Data.startX);
    Data.currentY = -0.2*(e.pageY - Data.startY);
    $("#back").css({"background-position": Data.currentX + "px " + Data.currentY + "px"});
}
 
function doMouseOut(e){
    locked = false;
}