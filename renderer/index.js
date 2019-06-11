/**
 * 拖拽进入
 * @param e
 */
function dragEnter(e) {
    //设置允许放置，阻止对元素默认处理
    e.preventDefault();
}

/**
 * 放置位置
 * @param e
 */
function dragover(e) {
    //设置允许放置，阻止对元素默认处理
    e.preventDefault();
}

/**
 * 进行放置
 * @param e
 */
function drop(e) {
    console.log(e);
    console.log(e.dataTransfer);
    //let file = e.dataTransfer.files[0];
}

