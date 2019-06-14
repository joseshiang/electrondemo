//引入模块
const electron = require('electron');
const os = require('os');

/**
 * 打开资源管理器
 */
function openExpoler(e) {
   //打开资源管理器
   electron.shell.openItem(os.homedir());
}

let msg  = {
  title : '基本通知',
  body:'简短的通知!'
};

/**
 * 通知
 * @param e
 */
function notification(e) {
   console.log(e);
   //new window.Notification(msg.title,msg);
   if (window.Notification) {
      if (Notification.permission == "granted") {
         popNotice();
      }else if( Notification.permission != "denied"){
         Notification.requestPermission(function (permission) {
            popNotice();
         });
      }
   } else {
      alert('浏览器不支持Notification');
   }
}

function popNotice() {
   if (Notification.permission == "granted") {
      let notification = new Notification("Hi，", {
         body: '可以加你为好友吗？'
      });

      notification.onclick = function() {
         alert('***已于' + new Date().toTimeString().split(' ')[0] + '加你为好友！');
         notification.close();
      };
   }
};

