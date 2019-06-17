//引入模块
const electron = require('electron');
const {dialog,shell,ipcRenderer} = require("electron");
const os = require('os');

/**
 * 打开资源管理器
 */
function openExpoler(e) {
   //打开资源管理器
   electron.shell.openItem(os.homedir());
}


function handleClick(e) {
   //console.log(e);
   //错误框
   //ipcRenderer.send('open-error-dialog');
   //消息框
   //ipcRenderer.send("open-message-diag");
   //信息对话框
   ipcRenderer.send('open-infomation-dialog');
   ipcRenderer.on('information-dialog-selection',(event,index) => {
      let msg = index === 0 ? '是':'否';
      $("#content").text('你已经选择 --->' + msg);
   });
}

