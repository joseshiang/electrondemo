//引入模块
const electron = require('electron');
const {dialog,shell,ipcRenderer,clipboard} = require("electron");
const os = require('os');

/**
 * 打开资源管理器
 */
function openExpoler(e) {
   //打开资源管理器
   electron.shell.openItem(os.homedir());
}

/**
 * 点击按钮
 * @param e
 */
function handleClick(e) {
   //错误框
   //ipcRenderer.send('open-error-dialog');
   //消息框
   //ipcRenderer.send("open-message-diag");
   //信息对话框
   //ipcRenderer.send('open-infomation-dialog');
   //ipcRenderer.on('information-dialog-selection',(event,index) => {
      //let msg = index === 0 ? '是':'否';
      //$("#content").text('你已经选择 --->' + msg);
   //});
   //获取应用程序信息
   //ipcRenderer.send('get-app-info');
   //ipcRenderer.on('got-app-info',(event,path)=> {
      //console.log('当前应用程序位于:'+path);
   //});
   //获取环境版本信息
   //console.log("V8 = " + process.versions.v8);
   //console.log("Node = " + process.versions.node);
   //console.log("chrome = " + process.versions.chrome);
   //获取系统信息
   //console.log(os.homedir());
   //console.log(os.hostname());
   //console.log(os.cpus());
   //console.log(os.platform());
   //console.log(os.userInfo());
   //复制
   //clipboard.writeText("1111哈哈");
   //粘贴
   //console.log(clipboard.readText());
}

