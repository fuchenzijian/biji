**vue脚手架搭建**

​    ![0](https://note.youdao.com/yws/public/resource/672070bb76dc7422468a424164d04b27/xmlnote/E837D7DC979C49E19C9E5DCDFEFC65D0/4607)

先检测node 和 npm全局安装是否正确，如果不正确，需要在环境变量里添加path

C:\Program Files\nodejs\node_global

 

然后在cmd下使用npm先安装webpack

 

npm install webpack -g

 

使用webpack -v测试

​    ![0](https://note.youdao.com/yws/public/resource/672070bb76dc7422468a424164d04b27/xmlnote/B2523586F36D44448D337EA6499D0685/4606)

 

然后根据提示安装webpack-cli

 

​    ![0](https://note.youdao.com/yws/public/resource/672070bb76dc7422468a424164d04b27/xmlnote/B33C4CAD3AE74844B914136AC2A5C141/4608)

 

 

然后cmd下继续全局安装vue-cli

npm install --global vue-cli

 

然后输入vue -V 检测安装是否正常，需要注意其中V大写

如果出现在CMD下面可以vue -V但是在vscode终端缺报错

vue : 无法加载文件 C:\Users\lenovo\AppData\Roaming\npm\vue.ps1，因为在此系统上禁止运行脚本。有关详细信息，请参阅 https:/go.microsoft.com/fwlink/?LinkID=135170 中的 about_Execution_ Policies

是电脑权限设置问题，需要用管理员身份运行power shell ，然后输入 set-ExecutionPolicy RemoteSigned      回车后，输入Y 重新打开vscode就可以

 

然后新建一个文件夹，拖进vscode编辑器里ctrl+` 快捷键打开命令行

输入： vue init webpack myvue

其中myvue  是你新建的项目名字，要注意不能有中文和大写字母

 

 

然后按部就班

 

最终一定要进入到最内层的文件夹去运行npm run dev