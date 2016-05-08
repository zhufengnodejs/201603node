#初始化一个项目
1. 新建一个空文件夹
2. 切换进行 cd 
3. 在当前文件夹下面右键打开git-bash
4. 执行npm init初始化一个项目(包)
5. 回答一系列命令之后会生成一个项目(包)描述文件 `package.json` 
#提交到github
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