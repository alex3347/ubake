export const CHANGE_PIC_LIST = "mineUpload/CHANGE_PIC_LIST";

function changeType(payload) {
    console.log(payload)
    return {
        type: CHANGE_PIC_LIST,
        payload: payload
    }
}

export function change(ref) {
    return function (dispatch) {
        //允许上传的图片类型
        let upLoadType = '.jpg,.gif,.bmp,.png'
        //获取已上传文件files对象
        let files = ref.files
        //用于储存fileReader后的url
        let picList = []

        if (files.length !== 0) {
            //files解构赋值为数组进行操作
            Promise.all([...files].map((item)=>{
                let address = item.name
                //截取文件扩展名进行类型判断
                let fileCatergory = address.substr(address.lastIndexOf('.')).toLowerCase()

                if(upLoadType.indexOf(fileCatergory) !== -1){
                    let FR = new FileReader()
                    FR.readAsDataURL(item)
                    return new Promise(function (resolve) {
                        FR.onload = function (event) {
                            picList.push(event.target.result)
                            resolve();
                        }
                    })
                }
            })).then(function () {
                dispatch(changeType(picList))
            })
        }

    }
}
