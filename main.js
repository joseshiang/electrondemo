//引入内置模块
const {app, BrowserWindow} = require('electron');
const path = require('path');
const url = require('url');

//保持一个全局引用的窗口对象，如果不这么做，窗口将会被js垃圾回收，导致窗口关闭
let win;

//创建窗口
function createWindow () {
    // 创建一个浏览器窗口
    win = new BrowserWindow({width: 800, height: 600});

    // 将index.html加载到app中
    win.loadURL(url.format({
        pathname: path.join(__dirname, 'index.html'),
        protocol: 'file:',
        slashes: true
    }));

    // 打开开发者工具
    //win.webContents.openDevTools();

    // 监听关闭窗口事件
    win.on('closed', () => {
        // 取消引用 window 对象，如果你的应用支持多窗口的话，
        // 通常会把多个 window 对象存放在一个数组里面，
        // 但这次不是。
        win = null
    })
}
app.on('ready', createWindow);

app.on('activate', () => {
    if (win === null) {
        console.log("hi11");
        createWindow();
    }
});

// 所有窗口关闭后推出
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});