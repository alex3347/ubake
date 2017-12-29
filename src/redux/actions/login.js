export const TIP = "mine/TIP";


function tip() {
    return {
        type: TIP
    }
}

export function request(refs,context) {
    return function (dispatch) {

        //判断输入是否为空
        if(!(refs.name.value && refs.pwd.value)){
            dispatch(tip());
        }else{

            return fetch('',{
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: refs.name.value,
                    pwd: refs.pwd.value,
                })
            })
                .then((response => {
                    return response.json()
                }))
                .then((json) => {
                    if(json.token){
                        //将token存储在localStorage
                        localStorage.setItem('token',json, function (error) {
                            if (error) {
                                console.log('存储失败')
                            }
                        })
                    }

                    context.router.history.replace('/')

                    }
                ).catch(
                    () => {
                        //默认跳转成功,存储token
                        context.router.history.replace('/')
                        localStorage.setItem('token','121', function (error) {
                            if (error) {
                                console.log('存储失败')
                            }
                        })
                    }
                )
        }

    }
}