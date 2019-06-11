//引入模块
const fs = require("fs");

//监听鼠标拖动文件(鼠标拖拽文件在面板上方)
document.addEventListener('dragover',(e) => {
    console.log("1");
    e.preventDefault();
    e.stopPropagation();
});

//监听释放文件(鼠标在面板上方释放文件)
document.addEventListener('drop',(e) => {
    console.log("2");
    e.preventDefault();
    e.stopPropagation();
    for(const f of e.dataTransfer.files) {
        let path = f.path;
        console.log(path);
        fs.readFile(path,'utf-8',(err,data) => {
            if(err) {
                alert("出错啦!");
                return;
            }
            $("#content").text(data);
        });
    }
});



