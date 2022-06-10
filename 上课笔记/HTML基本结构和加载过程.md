### **HTML基本结构和加载过程** 

#### **1，html和网页有什么关系？** 

**html由一系列的元素组成，通常称为HTML元素，** 

**Html元素通常被用来定义一个网页的结构 ** 

**网页里我们通用的结构：** 

<html>

<head></head>
<body></body>
</html>

**head元素里包含了想包含在网页里，但是又不想直接展示在网页里的内容** 

**body元素包裹了所有用户访问页面时可以看到的内容** 

**同时网页中还可以包含自定义元素** 

#### **浏览器页面加载过程：** 

**大多数出现长时间空白页面加载的网页有一部分原因就是因为页面设计不合理导致的，而且重点** 

**都锁定在了：**<script>  和 <style>元素里面的结构设计

![img](D:\学习\上课笔记\浏览器.png)  

#### 可以找一个网站分析下解析： 

1，浏览器会从服务器获取HTML的内容

2，从上到下解析所有内容

3，元素里的内容会先被解析出来，这时候浏览器还没有渲染界面

4，当浏览器在head里遇到<sprict>标签的时候，会暂停解析并下载js脚本，当js脚本下载完成后，浏览器的控制权会交给javascript引擎，当脚本执行完成后，又会把控制权交回给渲染引擎，浏览器继续往下解析

5，这时候解析到body，浏览器开始渲染页面,

从这里可以看出一个问题，页面加载里有一个比较占用时间的操作就是在head里下载js脚本，如果外部脚本加载时间很长的话，就会造成网页长时间失去响应，浏览器会造成“假死”状态，用户体验会变得很糟糕。

如果对性能要求比较高，需要快速把内容呈现给用户的网站，会将js脚本放在body的最后面，当然之前我们在没有使用ready、window.onload等的时候，也可以通过这种方式来实现dom加载后再执行脚本。

当然除了这个方法，也还有其他办法，比如，可以在script标签上使用defer/async/preload等属性标记<sprict>标签

可以参照下百度的页面，里面一些占用下载资源的script标签里都加了async属性。

在解析页面的时候

![https://note.youdao.com/yws/public/resource/8e9426e2e76c19ce5f7967736d41c0a7/xmlnote/5E03A2732B3B464B8C965A0CCA0307AF/6117](https://note.youdao.com/yws/public/resource/8e9426e2e76c19ce5f7967736d41c0a7/xmlnote/5E03A2732B3B464B8C965A0CCA0307AF/6117) 

浏览器会先解析html的dom树和css的规则树，两者结合以后才是网页的渲染树

#### **2，HTML和DOM有什么不同？** 



![https://note.youdao.com/yws/public/resource/8e9426e2e76c19ce5f7967736d41c0a7/xmlnote/BD365D6DC82040B5B883B65A82CAB085/6123](https://note.youdao.com/yws/public/resource/8e9426e2e76c19ce5f7967736d41c0a7/xmlnote/BD365D6DC82040B5B883B65A82CAB085/6123) 

![https://note.youdao.com/yws/public/resource/8e9426e2e76c19ce5f7967736d41c0a7/xmlnote/A4A8413645FD451CADB79B902D7F5E23/6125](https://note.youdao.com/yws/public/resource/8e9426e2e76c19ce5f7967736d41c0a7/xmlnote/A4A8413645FD451CADB79B902D7F5E23/6125) 

![https://note.youdao.com/yws/public/resource/8e9426e2e76c19ce5f7967736d41c0a7/xmlnote/29BD011779A547F18FD00CB22ABFF31F/6129](https://note.youdao.com/yws/public/resource/8e9426e2e76c19ce5f7967736d41c0a7/xmlnote/29BD011779A547F18FD00CB22ABFF31F/6129) 

  