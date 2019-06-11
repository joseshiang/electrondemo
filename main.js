//引入内置模块
const {app,BrowserWindow,Menu,MenuItem} = require('electron');
const path = require('path');
const url = require('url');
const fs = require("fs");

//保持一个全局引用的窗口对象，如果不这么做，窗口将会被js垃圾回收，导致窗口关闭
let win;

//创建窗口
function createWindow () {

    // 创建一个浏览器窗口
    win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            //是否完整的支持node. 默认值为true
            nodeIntegration: true,
            //是否在Web工作器中启用了Node集成
            nodeIntegrationInWorker: false,
        }
    });

    // 设置任务栏进度条
    // win.setProgressBar(0.8);

    // 将index.html文件
    win.loadFile("index.html");
    //win.loadURL("https://www.baidu.com");

    // 打开开发者工具
    //win.webContents.openDevTools();

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
