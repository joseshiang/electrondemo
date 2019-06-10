//引入模块
const fs = require("fs");

//导入数据
function importData(e) {
    fs.readFile("../package.json",(err,data) => {
        if(err) {
            alert("出错啦!");
            console.log(err);
        }
        //赋值
        $("#content").text(data.toString());
    });
}