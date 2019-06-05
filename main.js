//引入内置模块
const {app, BrowserWindow} = require('electron');
const path = require('path');
const url = require('url');

//保持一个全局引用的窗口对象，如果不这么做，窗口将会被js垃圾回收，导致窗口关闭
let win1;
let win2;

//创建窗口
function createWindow1 () {
    // 创建一个浏览器窗口
    win1 = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true
        }
    });

    // 将index.html文件
    win1.loadFile("index.html");

    // 打开开发者工具
    //win.webContents.openDevTools();

    // 监听关闭窗口事件,当window窗口被关闭时候，这个事件会出发
    win1.on('closed', () => {
        win1 = null
    })
}

//创建窗口
function createWindow2 () {
    // 创建一个浏览器窗口
    win2 = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true
        }
    });

    // 将index.html文件
    win2.loadFile("index.html");

    // 打开开发者工具
    //win.webContents.openDevTools();

    // 监听关闭窗口事件,当window窗口被关闭时候，这个事件会出发
    win2.on('closed', () => {
        win1 = null
    })
}

//创建浏览器窗口调用这个函数，部分API在调用ready事件触发才能使用
app.on('ready', createWindow1);
app.on('ready', createWindow2);

// 所有窗口关闭后退出
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});
