## Electron
- electron : chromium(前端) + node(后端)
- 主进程 
    - package.json里的main脚本被称作为主进程，主进行运行的脚本可以创建web页面形式展示GUI
- 渲染进程
    - electron使用chromium展示页面，chromium的多进程结构被充分利用，每个electron的页面都在运行自己的进程，这样的进程称作渲染进行
- 一般浏览器中，网页通常使用的沙盒环境sandbox下运行，并且不允许访问原生资源，然而Electron拥有在网页调用io.js的API能力，可以与底层操作系统进行直接交互

