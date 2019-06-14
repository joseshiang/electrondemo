## Electron
- electron : chromium(前端) + node(后端)
- 主进程 
    - package.json里的main脚本被称作为主进程，主进行运行的脚本可以创建web页面形式展示GUI
- 渲染进程
    - electron使用chromium展示页面，chromium的多进程结构被充分利用，每个electron的页面都在运行自己的进程，这样的进程称作渲染进行
- 一般浏览器中，网页通常使用的沙盒环境sandbox下运行，并且不允许访问原生资源，然而Electron拥有在网页调用io.js的API能力，可以与底层操作系统进行直接交互
- 一个Electron应用只有一个主进程
- Electron使用Chromium来展示web页面，所有chromium的多进程架构也被充分的使用，每个Electron中的web页面运行在他自己的渲染进程中
- 使用Electron的用户在Node.js的API支持下可以在页面中与操作系统进行交互
- 主进程使用BrowserWindow实例创建一个页面，每个BrowserWindow实例都在自己页面的渲染进程里运行页面，当BrowserWindow实例被销毁时，相应的渲染进程也会被终止
- 主进程管理所有的渲染进程，每个渲染进程都是独立的，它只关系自己所运行的web页面
- web页面中如何调用原生的GUI API？
    - 由于web页面操作原生GUI资源非常危险，容易造成资源泄露，使用渲染进程与主进程进行通讯，从而调用原生GUI API
    - 主进程 main process
    - 渲染进程 renderer processes
- 打包命令:`npm run electron-build`



