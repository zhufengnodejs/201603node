#初始化一个项目
1. 新建一个空文件夹
2. 进入此文件夹下
3. 在当前文件夹下面按shift键，右键打开命令提示符
4. 执行`npm init`初始化一个项目(包)
5. 回答一系列命令之后会生成一个项目(包)描述文件 `package.json` 

> 注意项目名称不能有大写字母或中文

#提交到github
右键打开 `git-bash`
1. 创建git忽略文件
```
touch .gitignore 
```
2. 初始化git仓库 
```
git init
```
3. 添加到暂存区
```
git add -A
```
4. 添加到历史区
```
git commit -m"init"
```
5. 添加远程仓库
```
git remote add origin https://github.com/zhufengnodejs/npmtest.git
git push -u origin master
```

#发布到npm官网上去
打开命令提示符
1. 注册用户
```
npm adduser
```
如果说以前已经注册过了，就不需要再注册了，直接登陆就可以了。
```
npm login
```
输入你的用户名 密码邮箱就可以登陆了


> 输入用户名 密码 邮箱 进行注册，用户名一定也要是别人没用过的

2. 发布项目
```
npm publish
```

> 注意此项目名一定是别人没用过的，
> 如果说项目已经发过了，需要修改版本号之后才能发布


#注意事项
1. git命令在git-bash下执行
2. npm命令在cmd或者命令提示符下执行
3. `npm whoami` 可以查看当前登陆成功的用户。


#安装第三方的模块
1. 查看一下全局安装的目录
```
npm root -g
C:\Users\Administrator\AppData\Roaming\npm\node_modules
```

2. 全局安装第三方模块
```
npm install gulp -g 
```
> 无论在哪个地方安装，都会安装到全局统一的目录下面

3. 本地安装
如果在当前目录下面安装的话，会在当前目录下面生成一个node_modules的文件夹，把下载下来的第三方模块放入其中。
然后就可以在当前项目中通过require方法进行加载
```
var mod = require('模块名')
```
> mod 等于 这个模块(项目)的package.json中的main配置项目中的
模块导出来的对象.(module.exports)
> 不能在当前项目中安装当前项目，不然会报拒绝依赖的错误
> 默认安装的是最新的版本，如果需要装老版本的话需要 `npm install mimi@1.0.0`


#模块的分类 
##内置模块 
node的核心自带模块
```
require('模块名');
```
fs http url util

##文件模块
自己写的项目的模块
```
require('相对路径')
```

##第三方模块
别人写的，并发布到npm官网上的模块
可以通过 `npm install` 来安装到`node_modules`下面
```
require('项目名');
```


#查找模块的过程
1. 查找module.paths，找到第一个路径
2. 查找对应模块，如果找不到尝试加后缀 js  json
3. 把它当作一个包来查找
4. 读取package.json配置文件，找main配置项
5. 查把包下面的index.js 或index.json
6. 查找下一个路径，也就是父路径下面的node_modules

