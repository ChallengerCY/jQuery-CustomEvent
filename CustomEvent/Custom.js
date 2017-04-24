/**
 * Created by Administrator on 2017/4/6 0006.
 */
var bid;
$(document).ready(function(){
    bid=$("#b1");
    bid.click(function(){
        var a=jQuery.Event("myEvent"); //自定义事件
        bid.trigger(a); //给事件起名称
    })

    bid.on("myEvent",function(event){
                console.log(event);    })
})