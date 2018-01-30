
Ubake - react框架练手项目
==========================
![license](https://img.shields.io/badge/license-MIT-green.svg)



##### 一个相对完整，功能较全的react项目，欢迎star、fork、issue ：）

##### 

技术栈
---

React 16.1 + react-router V4 + Redux + flexible +fetch + sass



项目重点内容
---

##### 1、登录拦截

localStorage存储token,link组件的to属性中判断跳转路由,componentDidMount中根据token判断login状态

##### 2、loading功能

fetch请求获取到数据后更改state中的loading状态，部分页面使用promise.all 等待所有请求完成 

##### 3、路由返回时通过context对象进行操作

##### 4、使用RAP2数据mock接口

##### 5、登录检测采用正则校验

##### 6、使用redux-thunk中间件

##### 7、购物车功能采用localStorage存储中间值，使购物车与多页面数据关联

##### 8、找回密码、立即注册组件实现复用

##### 9、使用flexible适配移动端

##### 10、部分页面使用了无状态组件

##### 11、上传图片本地预览功能

监听input:file的change事件，通过fileReader将图片转为dataUrl,再更新state使组件正确显示



需求配置
---

* node ^6.10.0
* npm ^3.10.2

开始
---

确认好你的环境配置，然后就可以开始以下步骤。

```bash
$ git clone https://github.com/alex3347/ubake
$ cd react-cli
$ npm install                   # Install project dependencies
$ npm start                     # Compile and launch
```
相关命令

| `npm <script>`  | 解释                                       |
| --------------- | ---------------------------------------- |
| `start`         | 服务启动在3000端口，代码热替换开启。                     |
| `run dev-build` | 编译程序到dist目录下（程序会自动创建）,开发环境的打包文件，包含source-map，未开启压缩。 |
| `run build`     | 编译目录与`run dev-build`相同,正式的上线前打包文件。       |

`npm start`后，浏览器打开` http://localhost:8080/`查看效果



To Do List
---
- 增加公共组件数量
- 使用高阶组件HOC
- 性能优化



项目中使用的脚手架
---

[脚手架地址](https://github.com/alex3347/react-cli/tree/mobile-adaptive)


