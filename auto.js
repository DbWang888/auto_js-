auto.waitFor(); //检测是否打开无障碍

//唤醒开启屏幕

device.wakeUpIf();

sleep(1000);

//上滑进入页面
setScreenMetrics(1080,2340);

swipe(550,2200,550,1510,1000);

sleep(3000);

//打开钉钉APP
var appName = "钉钉";
launchApp(appName);
sleep(5000); 

//打卡操作
press(520,2120,1000); //工作台
sleep(10000); 
press(131,1170,10);  //我的考勤
sleep(10000);
press(543,1268,500); // 打卡
sleep(10000)

//发送打卡成功
appName.sendEmail({
    email:["45241397@qq.com"],
    subject:"打卡成功",
    text:"打卡成功"
});

press(195,1636,500);//选择QQ邮箱

sleep(10000)

press(953,2687,500);//点击发送

sleep(2000);
//返回主页面
if(home()){
    sleep(3000);
    toast("1111111")
}

//最近任务
recents();
sleep(2000);

//清除最近任务释放内存

press(551,2121,500); 
sleep(500); 


home();

exit();
