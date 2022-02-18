auto.waitFor();

launchApp("QQ");
sleep(1000);
setScreenMetrics(1080,2340);
sleep(1000);

waitFor();

launchApp("QQ");
sleep(2000);



var date = new Date();
var now_time = date.getTime();

var png_ad = "/storage/emulated/0/脚本/"+now_time+".png"

function getScreen(now_time)
{
    threads.start(function () {
        var beginBtn;
           if (beginBtn = classNameContains("Button").textContains("立即开始").findOne(2000)) {
               beginBtn.click();
           }
       });
    
    sleep(2000);
    
    if(requestScreenCapture()){
        toast("ok")
    }
    sleep(3000);
    // 3、进行截图
    var img = captureScreen(now_time);

    requestScreenCapture(false);
//截图
var im = captureScreen();
var path = "/sdcard/screenshot.png";
//保存图片
im.saveTo(path);
//把图片加入相册
media.scanFile(path);
}

function send_emai(){
    app.sendEmail({
        email: ["45241397@qq.com"],
        subject: "阿狸的程序报告",
        text: "hello world",
        attachment:"/storage/emulated/0/脚本/1644852279250.png"
    });
    sleep(2000);
    //点击通过邮件发送
    var email_send = text("电子邮件").findOne().bounds();
    click(email_send.centerX(), email_send.centerY());
    toast("ok222222222222");
    sleep(2000);
    
    print(currentActivity());
    
    waitForActivity(activity = "com.huawei.email.activity.MessageCompose",period = 200);
    sleep(3000);
    id("send_email_btn").findOne().click();
}

getScreen(png_ad);

exit();