## 弹性布局flex

Fl**ex是Flexible Box的缩写，意为”弹性布局”，用来为盒状模型提供最大的灵活性。**



**任何一个容器都可以指定为Flex布局。(块级 行内元素都用)**





#### 1.flex-derection 

#### 决定主轴方向

row 横向 从左到右

row-reverse  横向 从右到左

column 纵向(列) 从上到下

column-reverse 纵向(列) 从下到上  

#### 2.flex-wrap 

#### 决定换行的方式

nowrap   不换行

wrap  换行,正常换行,第一行在上方

wrap-reverse   换行,第一行在下面,从下往上

#### 3.flex-flow 

####  flex-direction和flex-wrap的合并简写

flex-flow属性是flex-direction属性和flex-wrap属性的简写形式，默认值为row nowrap。

flex-flow:<flesx-direction><flex-wrap>

#### 4.justify-content 

#### 决定了在主轴方向上的对齐方式(水平方向)

对应的值

1. flex-start(默认) 左对齐
2. center 居中对齐
3. flex-end 右对齐
4. space-between 两端对齐,均分空白
5. space-around 每个子项目的两边间距均分空白位置

#### 5. align-items

####   决定了子元素在交叉轴上的对齐方式(垂直方向) 

####    只是对每行元素都会做平分空白区域去对齐

1. flex-start：交叉轴的起点对齐,垂直方向上,从上到下
2. flex-end：交叉轴的终点对齐,垂直方向上,从下到上
3. center：交叉轴的中点对齐
4. baseline: 根据第一行文字的基线对齐
5. stretch（    默认值）：如果子元素未设置高度或设为auto，将子元素高度充满整个容器

###   6. align-content  

###   定义了多根轴线的对齐方式,也就是如果是多行元素,将多行元素看做一个整体来作位置对齐

1. flex-start：与交叉轴的起点对齐。
2. flex-end：与交叉轴的终点对齐。
3. center：与交叉轴的中点对齐。
4. space-between：与交叉轴两端对齐，轴线之间的间隔平均分布。
5. space-around：每根轴线两侧的间隔都相等。所以，轴线之间的间隔比轴线与边框的间隔大一倍。
6. stretch（默认值）：轴线占满整个交叉轴。

### 对子元素的设定

#### order:

#### 对子元素位置排序,值是int(整数)型,值越小,越靠前     

#### flex-grow:

#### 决定元素在有剩余空间时的放大比例  默认是0

#### flex-shrink:

#### 决定元素在空间不足的时候缩小比例   默认为1   如果设置为0,则不缩小

#### flex-basis

#### 在分配多余空间之前,子元素占据的主轴空间.默认值为auto,auto其实就是元素的大小

#### flex

#### 合并了flex-grow,flex-shrink和flex-basis三个属性的简写

```
flex:<flex-grow><flex-shrink><flex-basis>
```



#### align-self

#### 允许单个项目(子元素)有不一样的对齐方式,可以覆盖父元素统一加在align-items上的对齐方式



​            