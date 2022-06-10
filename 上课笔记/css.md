# CSS

选择器通常是您需要改变样式的 HTML 元素。

每条声明由一个属性和一个值组成。

属性（property）是您希望设置的样式属性（style attribute）。每个属性有一个值。属性和值被冒号分开。

CSS声明总是以分号(;)结束，声明总以大括号({})括起来:

p{color:#ccc;font-size:20px}

css的注释： /*     */

#### css 选择器：id选择器和类选择器

id选择器：d 选择器可以为标有特定 id 的 HTML 元素指定特定的样式。

HTML元素以id属性来设置id选择器,CSS 中 id 选择器以 "#" 来定义

\#aa{color:#ccc}

class 选择器：

class 选择器用于描述一组元素的样式，class 选择器有别于id选择器，class可以在多个元素中使用。

class 选择器在HTML中以class属性表示, 在 CSS 中，类选择器以一个点"."号显示

.aa{color:#fff}

id的唯一性，不是说id有两个会报错，这个衍射到css上，多个同名id的样式依旧会同时生效，但是js只能拿到一个有效元素。所以性和合理性来考虑，id是需要唯一的，不唯一的事情留给class来做

标签选择器

群组选择器

#### 创建css的三种方式： 

1，内联样式，行内样式

2，内部样式  

3，外联样式

##### **多重样式的优先级** 

就近原则





#### css选择器	 > + ~ ,

##### 后代选择器	.cs div{}

后代选择器选择的不一定是直接选择子元素(儿子),而是只要是后代都可以,儿子,孙子,重孙.......都会加的样式

##### 子元素选择器	.cs>div{}

与后代选择器相比,子元素选择器一定选取的是直接子元素(儿子)	直接关系的div会加	

##### 相邻兄弟选择器	.cs+div{}

选取该元素相邻的兄弟元素	相邻的唯一的一个兄弟元素会加的样式	只有后面没有前面

span+p	span相邻的唯一的一个p元素会加的样式	只有后面的没有前面

##### 后续兄弟选择器	.cs~div{}

选取该元素后面的所有符合条件的兄弟元素	后面的兄弟元素里面的div都会加的样式

span~p	span后面的兄弟元素里面的p标签都会加的样式

##### 同时应用css样式,用逗号隔开

span,p	相当于两个标签选择器简写











## **background：** 

##### background-image:

url('img_tree.png');

##### background-repeat:

no-repeat;  值：no-repeat;不重复 

  repeat-x x轴重复

repeat-y y轴重复  

 revert 铺满容器的重复（会允许图片不完整） 

round，重复的时候维持图片完整，可以不全部铺满  

space,通过拉伸图片，来保证铺满和图片完整  

##### background-position:

left top;多用于雪碧图

简写：

**background:#ffffff url('img_tree.png') no-repeat right top;** 

##### background-attachment 

属性设置背景图像是否固定或者随着页面的其余部分滚动(滚动条是浏览器的滚动条)。

| scroll  | 默认值。背景图像会随着页面其余部分的滚动而移动。        |
| ------- | ------------------------------------------------------- |
| fixed   | 当页面的其余部分滚动时，背景图像不会移动。              |
| inherit | 规定应该从父元素继承 background-attachment 属性的设置。 |

#### background样式：

##### background-size:

设置图片的展示大小，值：

auto:按照图片原来的大小展示

cover:按照给定容器的大小铺满，可能会导致图片变形，但是会铺满容器

contain：在保证图片原有宽高比例的前提下，会优先铺满最容易满足的宽或者高

### 渐变：

**渐变属性需要放在background-image下**

##### 1，线性渐变：

background-image: linear-gradient(direction, color-stop1, color-stop2, ...);
默认如果只写两个颜色参数，是从上到下渐变

background-image: linear-gradient(orange,green);

**direction方向**的参数值有：
to left:从右往左渐变
to right:从左往右渐变
to top:从下往上渐变
to bottom:从上往下渐变

background-image: linear-gradient(to left,orange,green);

**方向参数这里除了上下左右以外，还可以写成角度**

如：background-image: linear-gradient(45deg,orange,green);

这里的颜色参数可以写多个，写多个时，平均分配色域的渐变
background-image: linear-gradient(to left,orange,green,blue,yellow);

有平均就有自定义，我们可以传入渐变色的位置参数：
 01，**位置可以是百分比**
background: linear-gradient(#f00 0%,#ff0 50%,#0f0 100%);
02，**也可以是具体像素值**

background: linear-gradient(#f00 0,#ff0 75px,#0f0 150px);

**当然配合方向可以做一些特殊的样式：**
background: linear-gradient(45deg,#f00 0%,#f00 33.33%,#ff0 33.33%,#ff0 66.66%,#0f0 66.66%,#0f0 100%);

对于**重复性渐变**，可以使用
background: repeating-linear-gradient(#f00 0,#f00 10%,#ff0 10%,#ff0 20%);
可以通过写重复性的部分，剩下的交给浏览器平铺

##### 2，径向渐变：

**径向渐变是由中心决定的**

background-image: radial-gradient(shape size at position, start-color, ..., last-color);

01，均匀分布的渐变：
 background-image: radial-gradient(red, yellow, green);
02，自定义渐变分布
 background-image: radial-gradient(red 5%, yellow 30%, green 40%);

03，设置形状，参数中shape位置就是设置形状，circle表示圆形，ellipse表示椭圆（默认）
background-image: radial-gradient(circle, red, yellow, green);

04，设置渐变位置：
background-image: radial-gradient(circle at center, red, yellow, green);
background-image: radial-gradient(circle at top, red, yellow, green);
background-image: radial-gradient(circle at left, red, yellow, green);

left top right bottom 可以组合
background-image: radial-gradient(circle at top right, red, yellow, green);

05，不同尺寸大小
closest-side
farthest-side
closest-corner
farthest-corner

background-image: radial-gradient(closest-side at 60% 55%, red, yellow, black);
background-image: radial-gradient(farthest-side at 60% 55%, red, yellow, black);

此外，还可以在第一个参数前增加大小，需要用像素值
background-image: radial-gradient(30px circle at center, red, yellow, green);

这时，如果写两个px的值，则为x 和y
background-image: radial-gradient(30px 20px circle at center, red, yellow, green);



### box-shadow    阴影

box-shadow: h-shadow v-shadow blur spread color inset;
h-shadow  必需的。水平阴影的位置。允许负值
v-shadow  必需的。垂直阴影的位置。允许负值
blur  可选。模糊距离
spread  可选。阴影的大小
color  可选。阴影的颜色。在CSS颜色值寻找颜色值的完整列表
inset  可选。(默认outset)从外层的阴影（开始时）改变阴影内侧阴影



#### **input首行缩进处理方案：** 

**01，padding-left** 

**02，text-indent** 



#### 盒模型

**CSS 盒子模型(Box Model)** 

所有HTML元素可以看作盒子，在CSS中，"box model"这一术语是用来设计和布局时使用。

CSS盒模型本质上是一个盒子，封装周围的HTML元素，它包括：边距，边框，填充，和实际内容。

盒模型允许我们在其它元素和周围元素边框之间的空间放置元素。

盒子模型分为：标准盒模型和IE盒模型

##### **IE模型**： 

width = content的宽+左边框+左padding+右边框+右padding；    

 height=content的高+上边框+上padding+下边框+下padding；  

##### **标准盒模型**： 

​						 width = content 的宽

​                         height = content 的高

##### 盒模型的切换  

box-sizing{

​	border-box    IE盒模型

​	content-box    标准盒模型

}

**border   设置边框** 

**outline 轮廓** 

![https://note.youdao.com/yws/public/resource/40f1294391bee23c9b4dc735ac7631fe/xmlnote/WEB525ac8f2ae666c0a608faa408d049365/27AF8053C33D42B8B6865EF47CAA0FF5/5576](https://note.youdao.com/yws/public/resource/40f1294391bee23c9b4dc735ac7631fe/xmlnote/WEB525ac8f2ae666c0a608faa408d049365/27AF8053C33D42B8B6865EF47CAA0FF5/5576) 



**p** 

**{** 

**outline:#00FF00 dotted thick;** 

**}** 

| outline                                                      | 在一个声明中设置所有的轮廓属性 | outline-color
outline-style
outline-width
inherit               |

| [outline-color](https://www.runoob.com/cssref/pr-outline-color.html) | 设置轮廓的颜色 | color-name<br/>hex-number<br/>rgb-number<br/>invert<br/>inherit |
| ------------------------------------------------------------ | -------------- | ------------------------------------------------------------ |
|                                                              |                |                                                              |
 [outline-style](https://www.runoob.com/cssref/pr-outline-style.html)   设置轮廓的样式                 

 none<br/>dotted<br/>dashed<br/>solid<br/>double<br/>groove<br/>ridge<br/>inset<br/>outset<br/>inherit 
 [outline-width](https://www.runoob.com/cssref/pr-outline-width.html)   设置轮廓的宽度                 

thin<br/>medium<br/>thick<br/>

+length

inherit           



#### **ss分组和嵌套选择器** 

**多个不同元素有相同的样式，可以使用分组选择器** 

h1 {   color:green; } h2 {   color:green; } p {   color:green; }

可以写成：

h1,h2,p{

color:green

}

#### 嵌套元素 

- **p{ }**: 为所有 **p** 元素指定一个样式。
- **.marked{ }**: 为所有 **class="marked"** 的元素指定一个样式。
- **.marked p{ }**: 为所有 **class="marked"** 元素内的 **p** 元素指定一个样式。
- **p.marked{ }**: 为所有 **class="marked"** 的 **p** 元素指定一个样式。

元素尺寸

| [height](https://www.runoob.com/cssref/pr-dim-height.html)   | 设置元素的高度。     |
| ------------------------------------------------------------ | -------------------- |
| [line-height](https://www.runoob.com/cssref/pr-dim-line-height.html) | 设置行高。           |
| [max-height](https://www.runoob.com/cssref/pr-dim-max-height.html) | 设置元素的最大高度。 |
| [max-width](https://www.runoob.com/cssref/pr-dim-max-width.html) | 设置元素的最大宽度。 |
| [min-height](https://www.runoob.com/cssref/pr-dim-min-height.html) | 设置元素的最小高度。 |
| [min-width](https://www.runoob.com/cssref/pr-dim-min-width.html) | 设置元素的最小宽度。 |
| [width](https://www.runoob.com/cssref/pr-dim-width.html)     | 设置元素的宽度。     |



#### css Hack

CSS hack由于不同厂商的浏览器，比如Internet Explorer,Safari,Mozilla Firefox,Chrome等，或者是同一厂商的浏览器的不同版本，如IE6和IE7，对CSS的解析认识不完全一样，因此会导致生成的页面效果不一样，得不到我们所需要的页面效果。 这个时候我们就需要针对不同的浏览器去写不同的CSS，让它能够同时兼容不同的浏览器，能在不同的浏览器中也能得到我们想要的页面效果。
简单的说，CSS hack的目的就是使你的CSS代码兼容不同的浏览器。当然，我们也可以反过来利用CSS hack为不同版本的浏览器定制编写不同的CSS效果。
如：
 div { background:green;/*forfirefox*/ *background:red;/*forIE6*/}
在ie6里面，width是和其他浏览器不一样的，所以会使用width和_width来完成适配



#### css将多出的文字改成...

```css
	width: 65px;             	设置一个宽度
    overflow: hidden;			超出的部分隐藏
    text-overflow: ellipsis;	超出的部分设置为...
    white-space: nowrap;		不换行
```

