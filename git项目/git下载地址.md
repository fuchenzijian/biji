### Git下载地址

https://npm.taobao.org/mirrors/git-for-windows/

### 1.选最后一个版本

## 2.下载时候，选择Git开头,以

### 如何判断Git安装是否成功

鼠标右键出现 Git Bash Here 选项



###  git是干啥用的？ 

用来管理项目代码



### github官网地址

https://github.com/



### github网址速度慢怎么解决？

下载佛跳墙 https://www.qingfengwuhan.com/cn/?a=gi9cp



### 如何拉取项目

1. git init    初始化项目
2. git remote add origin git@github.com:bo-ddd/project-demo123.git    关联线上代码仓库；
3. git pull   拉取线上代码
4. git checkout -b master origin/master    在本地新创建一个master分支，并和线上分支（origin/master）进行关联

# GitHub如何配置SSH Key

https://blog.csdn.net/u013778905/article/details/83501204	





### 提交流程

1.  git add .     添加所有的修改文件；
2.  git commit -m "添加了一个index.html文件"      备注信息
3.  git pull
4.  git push



// git status  查看git修改记录状态；

在我们在提交git时有时候会出现错误[rejected] master -> master (fetch first)

此时我们可以输入：git push -f 进行解决错误

如果上述解决方式不管用也可以输入：git pull --rebase origin master 之后再进行git push 即可。



git@github.com:bo-ddd/student_task.git

git笔记地址： https://github.com/bo-ddd/courseware

student_task项目地址： https://github.com/bo-ddd/student_task

