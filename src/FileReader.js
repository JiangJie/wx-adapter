export default class FileReader {
    constructor() {

    }

    onerror() {

    }

    onload() {

    }

    /**
     * 读取文件的二进制内容
     *
     * @param {*} file 文件路径
     * @memberof FileReader
     */
    readAsBinaryString(file) {
        if (!file) return;

        wx.readFile({
            filePath: file,
            // {errMsg}
            fail(err) {
                console.error(`readAsBinaryString error: ${err.errMsg}`);
                this.onerror(err);
            },
            // {data}
            success(res) {
                this.onload(res);
            }
        });
    }
}