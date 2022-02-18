waitFor();

launchApp("QQ");
sleep(2000);

var date = new Date();
var now_time = date.getTime();

function getScreen(now_time)
{
    threads.start(function () {
        var beginBtn;
           if (beginBtn = classNameContains("Button").textContains("立即开始").findOne(2000)) {
               beginBtn.click();
           }
       });
    
    // requestScreenCapture();
    
    sleep(2000);
    
    if(requestScreenCapture()){
        toast("ok")
    }
    toast("11111111111111111")
    toast(currentActivity());
    sleep(3000);
    
    // 3、进行截图
    var img = captureScreen("/storage/emulated/0/脚本/"+now_time+".png");
}

getScreen(now_time);