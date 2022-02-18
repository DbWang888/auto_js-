auto.waitFor();

launchApp("QQ");
sleep(1000);
setScreenMetrics(1080,2340);
sleep(1000);

app.sendEmail({
    email: ["45241397@qq.com"],
    subject: "阿狸的程序报告",
    text: "hello world"
    // attachment:"/storage/emulated/0/DCIM/Screenshots/IMG_20220213_230027.jpg"
});
sleep(2000);
// 点击通过邮件发送
// var email_send = text("通过邮件发送").findOne().bounds();
// click(email_send.centerX(), email_send.centerY());
// toast("ok222222222222");
// sleep(2000);

waitForActivity(activity = "com.tencent.qqmail.activity.compose.ComposeMailActivity",period = 200);
sleep(3000);
id("ae_").findOne().click();
// toast(currentPackage());
// sleep(2000);
// toast(currentActivity());


//点击发送
// toast("1111111111111111111111")
// click(877,172,1053,303);
// packageName(com.tencent.androidqqmail).text("发送").waitFor()
// toast("1111");
// var just_send = text("发送").findOne().bounds();
// click(just_send.centerX(), just_send.centerY());

// waitForActivity(activity = "com.kingsoft.mail.compose.ComposeActivity",period = 200);
// id("compose_send_btn").findOne().click();

// var xiaoxi = text("消息").parent().findOne()
// var xiaoxi = text("消息").findOne().bounds();
// if (xiaoxi){
//     toast("cunzai");
//     click(xiaoxi.centerX(), xiaoxi.centerY())
// }
// else{
//     toast("不存在");
// }

exit();