### **CSS border实现三角形**  

**1，border在css中实际上并不是直线，** 

​    ![0](https://note.youdao.com/yws/public/resource/efc4501ecd12600b721e4e42498bbd09/xmlnote/55415739DAAC49AA86F88F3B32AB4008/5923) 

边框是梯形构成，根据标准盒子模型，中间空白矩形是content部分，也就是我们的width和height，所以把width和height设置为0；

​    ![0](https://note.youdao.com/yws/public/resource/efc4501ecd12600b721e4e42498bbd09/xmlnote/8A40D2885F934F8B898B3EA1AE4F989A/5936) 

这时候四个border就变成四个三角形，我们目标是只要一个三角形，因为border是可以单独设置，我们只需要把其他任意三个三角形颜色设置成透明也就是和大背景色一致就可以完成三角形任务

**.sj{**  

**width:0px;** 

**height:0px;** 

**border:100px solid;** 

**border-color:transparent transparent  yellow transparent;** 

**}**

​    ![0](https://note.youdao.com/yws/public/resource/efc4501ecd12600b721e4e42498bbd09/xmlnote/FD634FF671A34401B10397051F5BCC6B/5946)

现在虽然实现了一个三角形，但是因为只是把上边的border做了颜色隐藏，它们还占着位置，所以需要把它们的位置去掉，border-width拆出来写，也是可以控制四个边



```css
.sj{ 

width:0px;

height:0px;

border-width：0 100px 100px 100px;

border-style:solidl;

border-color:transparent transparent  yellow transparent;

}
```

​    ![0](https://note.youdao.com/yws/public/resource/efc4501ecd12600b721e4e42498bbd09/xmlnote/65A548D42D55495D85165E1305DC7A7F/5959)

这样就完成了三角形







#### 微信对话框的实现

```html
<div class="cfx"></div>
```

```css
.cfx{
    width: 150px;
    height: 50px;
    background-color: springgreen;
    border-radius: 5px;
  }
.cfx:before{
    content: "";
    display: inline-block;
    
    border-width: 10px 10px 10px 0px;
    border-style: solid;
    border-color: transparent  springgreen transparent transparent;
    position: relative;
    left: -10px;
    top: 12.5px;

}
```

