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
   ipcRenderer.send('open-file-dialog');
   ipcRenderer.on('selected-dictronary',(event,path) => {
      $("#content").text(path);
   });
}

