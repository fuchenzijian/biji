image里 alt 和titel的区别


	alt 图片消失是显示


	title 鼠标移上去是显示


h5新特性


	video视频，audio 音频，canvas动画  svg矢量图  


css3新特性


重绘和回流
重绘(repaint)：
	当元素样式的改变不影响布局时，浏览器将使用重绘对元素进行更新，此时由于只需要 UI 层面的重新像素绘制，因此损耗较少。
常见的重绘操作有：改变元素颜色改变、元素背景色


回流(reflow)：又叫重排(layout)。
	当元素的尺寸、结构或者触发某些属性时，浏览器会重新渲染页面，称为回流。此时，浏览器需要重新经过计算，计算后还需要重新页面布局，因此是较重的操作。
常见的回流操作有：页面初次渲染、浏览器窗口大小改变、元素尺寸/位置/内容发生改变、元素字体大小变化、添加或者删除可见的 DOM 元素、激活 CSS 伪类（:hover……）


重点：回流必定会触发重绘，重绘不一定会触发回流。重绘的开销较小，回流的代价较高。




css隔行变色
:nth-child（odd ）  :nth-child（even ）
里面有两个参数
odd 奇数行
even 偶数行


垂直居中的方法
margin: 0 auto
line-height
align-items ：center 
水平居中
Justify-content：center  水平居中  
text-align:center
margin: 0 auto;




UI给的图片设计图   sketch   死kai chi




css3用过的动画
过度（transiton）、动画（animation）
形状转换：
1.transform:适用于2D或3D转换的元素
2.transform-origin：转换元素的位置（围绕那个点进行转换）。默认(x,y,z)：(50%,50%,0)）
阴影（box-shadow）、
边框（box-border）：
1.border-radius（边框圆角）
2、border-image（边框图片）
反射：倒影（reflect）、颜色（提供了rgba和hsla的方法来显示颜色）、渐变、滤镜（filter）、
布局
1.flex弹性布局
2.grid栅格化布局
3.column-count多列布局
盒模型、媒体查询（一般用来做自适应布局，与rem布局结合使用可以有巧妙地效果）






如何让第一个页面样式不影响第二个？
	sco  ped
	
	
	
	margin的百分比现对于谁 
	父元素的宽度



       元素的顶部对齐
      display: inline-block;
      vertical-align: top;     


IE 盒子模型范围的 content 部分包含了 border 和 pading。
W3C 盒子模型的范围包括 margin、border、padding、content，并且 content 部分不包含其他部分
可以通过属性box-sizing来设置盒子模型的解析模式：
content-box时  ie
border-box时   标准


​       
     自适应的计算





  渲染页面的过程中发生了什么
1.解析HTML文件，创建DOM树
2.解析CSS
3.将CSS与DOM合并，构建渲染树（renderingtree）
4.布局和绘制，重绘（repaint）和重排（reflow）