//引入内置模块
const electron = require('electron');
const {app,BrowserWindow,Menu,MenuItem,shell,dialog,ipcMain} = require('electron');
const path = require('path');
const url = require('url');
const fs = require("fs");

//主进程与渲染进行进程通讯
//错误框
ipcMain.on('open-error-dialog',(event) => {
    dialog.showErrorBox("错误通知","系统后台报错，请联系管理员。");
});
//消息框
ipcMain.on('open-message-diag',(event) => {
    dialog.showMessageBox({title:"通知",message:'提示信息'},(number,checkBoxChecked)=> {
        console.log('number = ' + number);
        console.log('checkBoxChecked = ' + checkBoxChecked);
    });
});
//信息对话框
ipcMain.on('open-infomation-dialog',(event) => {
    const options = {
        type:'info',
        info:'信息',
        message:'这是一个信息对话框?',
        buttons:['是','否']
    };
    dialog.showMessageBox(options,(index) => {
        event.sender.send('information-dialog-selection',index);
    });
});


//创建菜单
let menuTemplate = [
    {
      label:'文件',
      submenu : [
          {
              label:'新建',
              accelerator:'Ctrl+N'
          },
          {
              label:'保存',
              accelerator:'Ctrl+S'
          },
          {
              label:'打开',
              accelerator:'Ctrl+O'
          }
      ]
    },
    {
        label: '编辑',
        submenu: [
            {
                label: '撤销',
                accelerator: 'CmdOrCtrl+Z',
                role: 'undo'
            },
            {
                label: '重做',
                accelerator: 'Shift+Z',
                role: 'redo'
            },
            {
                type: 'separator'
            },
            {
                label: '复制',
                accelerator: 'CmdOrCtrl+C',
                role: 'copy'
            },
            {
                label: '粘贴',
                accelerator: 'CmdOrCtrl+V',
                role: 'paste'
            }
        ]
    },
    {
      label:'格式',
      submenu:[
          {
            label:'编码',
            accelerator : 'Alt+1'
          },
          {
            label:'换行',
            accelerator:'Alt+2'
          }
      ]
    },
    {
        label: '帮助',
        role: 'help',
        submenu: [
            {
                label:'关于'
            },
            {
                label: '查看',
                click: function () {
                    //打开外部连接
                    shell.openExternal('https://www.github.com')
                    //打开文件夹
                    //shell.openItem("C:/Program Files (x86)/Common Files");
                }
            }
        ]
    }
];

//保持一个全局引用的窗口对象，如果不这么做，窗口将会被js垃圾回收，导致窗口关闭
let win;
//创建窗口
function createWindow () {
    // 创建一个浏览器窗口
    win = new BrowserWindow({
        width: 800,
        height: 600,
        //透明背景
        //transparent:true,
        //无边框
        //frame:false,
        webPreferences: {
            //是否完整的支持node. 默认值为true
            nodeIntegration: true,
            //是否在Web工作器中启用了Node集成
            nodeIntegrationInWorker: false,
        }
    });

    //设置菜单栏
    let menu = Menu.buildFromTemplate(menuTemplate);
    Menu.setApplicationMenu(menu);

    // 设置任务栏进度条
    // win.setProgressBar(0.8);

    // 将index.html文件
    win.loadFile("index.html");
    //win.loadURL("https://www.baidu.com");

    // 打开开发者工具
    win.webContents.openDevTools();

    // 监听关闭窗口事件,当window窗口被关闭时候，这个事件会出发
    win.on('closed', () => {
        win = null
    })
}

//创建浏览器窗口调用这个函数，部分API在调用ready事件触发才能使用
app.on('ready', createWindow);

// 所有窗口关闭后退出
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});
