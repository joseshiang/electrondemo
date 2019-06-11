//引入模块
const fs = require("fs");

//导入数据
//注意文件路径path指的是引入html之后的相对路径，而不是当前js文件的路径!
function importData() {
    fs.readFile("./package.json",(err,data) => {
        if(err) {
            alert("出错啦!");
            console.log(err);
        }
        //赋值
        $("#content").text(data);
    });
}
