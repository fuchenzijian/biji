### Dom元素操作

#### 1，**Document.createElement()**

方法用于创建一个由标签名称TagName指定的html元素。

语法：var element = document.createElement(tagName[,options]);

例：

```html
<!DOCTYPE html>
<html>
<head>
  <title>||Working with elements||</title>
</head>
<body>
  <div id="div1">The text above has been created dynamically.</div>
</body>
</html>
document.body.onload = addElement;

function addElement () {
  // 创建一个新的 div 元素
  let newDiv = document.createElement("div");
  // 给它一些内容
  let newContent = document.createTextNode("Hi there and greetings!");
  // 添加文本节点 到这个新的 div 元素
  newDiv.appendChild(newContent);

  // 将这个新的元素和它的文本添加到 DOM 中
  let currentDiv = document.getElementById("div1");
  document.body.insertBefore(newDiv, currentDiv);
}
```

#### **2，Node.appendChild()** 

方法将一个节点附加到指定父节点的子节点列表的末尾处。如果将被插入的节点已经存在于当前文档的文档树中，那么 appendChild() 只会将它从原先的位置移动到新的位置（不需要事先移除要移动的节点）。



这意味着，一个节点不可能同时出现在文档的不同位置。所以，如果某个节点已经拥有父节点，在被传递给此方法后，它首先会被移除，再被插入到新的位置。若要保留已在文档中的节点，可以先使Node.cloneNode() 方法来为它创建一个副本，再将副本附加到目标父节点下。请注意，用 cloneNode 制作的副本不会自动保持同步。

语法：

element.appendChild(child);

例：

```html
// 创建一个新的段落元素 <p>，然后添加到 <body> 的最尾部
var p = document.createElement("p");
document.body.appendChild(p);
```



#### **3，Node.insertBefore()**

 方法在参考节点之前插入一个拥有指定父节点的子节点。如果给定的子节点是对文档中现有节点的引用，insertBefore() 会将其从当前位置移动到新位置（在将节点附加到其他节点之前，不需要从其父节点删除该节点）。



这意味着一个节点不能同时位于文档的两个点中。因此，如果节点已经有父节点，则首先删除该节点，然后将其插入到新位置。在将节点追加到新父节点之前，可以使用 Node.cloneNode() 复制节点。注意，使用 cloneNode() 创建的节点副本不会自动与原始节点保持同步。



如果引用节点为 null，则将指定的节点添加到指定父节点的子节点列表的末尾。



如果给定的子节点是 DocumentFragment，那么 DocumentFragment 的全部内容将被移动到指定父节点的子节点列表中。

例：

var insertedNode = parentNode.insertBefore(newNode, referenceNode);

insertedNode 被插入节点(newNode)

parentNode 新插入节点的父节点

newNode 用于插入的节点

referenceNode newNode 将要插在这个节点之前

例：

   ```html
   <div id="parentElement">
      <span id="childElement">foo bar</span>
   </div>
   
   <script>
   // 创建要插入的节点
   var newNode = document.createElement("span");
   
   // 获得父节点的引用
   var parentDiv = document.getElementById("childElement").parentNode;
   
   //实验一：referenceNode 存在 --> 正确返回
   var sp2 = document.getElementById("childElement");
   parentDiv.insertBefore(newNode, sp2);
   //实验一结束
   
   //实验二：referenceNode 为 undefined
   var sp2 = undefined; // Not exist a node of id "childElement"
   parentDiv.insertBefore(newNode, sp2); //隐式转换到节点类型
   //实验二结束
   
   //实验三：referenceNode 为字符类型的 "undefined"
   var sp2 = "undefined"; //不存在id为"childElement"的referenceNode
   parentDiv.insertBefore(newNode, sp2); // Generate "Type Error: Invalid Argument"
   //实验三结束
   </script>
   ```

#### Node.replaceChild()

 方法用指定的节点替换当前节点的一个子节点，并返回被替换掉的节点。

let oldChild = node.removeChild(child);

//OR

element.removeChild(child);

#### 案例一：

```html

<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        <title></title>
        <style type="text/css">
            *{
                padding: 0;
                margin: 0;
            }
            html,body{
                height: 100%;
            }
            #box{
                width: 100%;
                height: 100%;
                background: rgba(0,0,0,.3);
            }
            #content{
                position: relative;
                top: 150px;
                width: 400px;
                height: 200px;
                line-height: 200px;
                text-align: center;
                color: red;
                background-color: #fff;
                margin: auto;
            }
            #span1{
                position: absolute;
                background-color: red;
                top: 0;
                right: 0;
                width: 30px;
                height: 30px;
                line-height: 30px;
                text-align: center;
                color: #fff;
            }
        </style>
    </head>
    <body>
        <button id="btn">弹出</button>
    </body>
    <script type="text/javascript">
        //获取dom元素 1.获取事件源
        var oBtn = document.getElementById('btn');
        //创建弹出模态框的相关DOM对象
        var oDiv = document.createElement('div');
        var oP = document.createElement('p');
        var oSpan = document.createElement('span');
        
        
        // 设置属性
        oDiv.id = 'box';
        oP.id = 'content'
        oP.innerHTML = '模态框成功弹出'
        oSpan.innerHTML = 'X';
        oSpan.id = 'span1'
        
        // 追加元素
        oDiv.appendChild(oP);
        oP.appendChild(oSpan);
        // 点击弹出按钮 弹出模态框
        oBtn.onclick = function(){
            //动态的添加到body中一个div
            this.parentNode.insertBefore(oDiv,oBtn)
            
        }
        // 点击X 关闭模态框
        oSpan.onclick = function(){
            // 移除oDiv元素
            oDiv.parentNode.removeChild(oDiv)
           
        }   
        
    </script>
</html>
```

#### 案例二： 留言板

```js
<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        <title>留言板</title>
        <style type="text/css">
            *{
                padding: 0;
                margin: 0;
            }
            .close{
                display: inline-block;
                width: 20px;
                height: 20px;
                line-height: 20px;
                text-align: center;
                cursor: pointer;
                background-color: rgba(0,0,0,.1);
                margin-left: 20px;
            }
        </style>
    </head>
    <body>
        <h1>简易留言板</h1>
        <div id="box">
            <!--<ul>
                
            </ul>-->
            
        </div>
        <textarea id="msg"></textarea>
        <input type="button" id="btn" value="留言"/>
        <button onclick="sum()">统计</button>
    </body>
    <script type="text/javascript">
        // 0 将ul标签添加到div#box标签中
        var oUl = document.createElement('ul');
        var oBox = document.getElementById('box');
        oBox.appendChild(oUl);
        
        var oBtn = document.getElementById('btn');
        var oMsg = document.getElementById('msg')
        // 控制留言的总数量
        var count = 0;
        oBtn.onclick = function(){
            
            
            // 点击留言按钮事件操作
            // 1.创建li标签
            var oLi = document.createElement('li');        
            //2.设置内容
            oLi.innerHTML = oMsg.value + "<span class='close' >X</span>"
            
            // 3.如果想在插入的第一个li获取的前面继续添加li标签
            //3.1获取li标签
            var olis = document.getElementsByTagName('li');
             //3.2 如果是第一次添加的li标签，则直接添加到ul的后面
            if(olis.length == 0){
                oUl.appendChild(oLi);
                count++;
                
            }else{
                // 3.3 如果不是第一次添加的li标签，则插入到第一个li标签的前面
                oUl.insertBefore(oLi,olis[0]);
                count++;
            }
            // 4.添加完成之后 清空textarea的值
            oMsg.value = '';
            
            
            // 5.点击X的时候删除当前的一条数据
            //5.1先获取所有的X
            var oSpans = document.getElementsByTagName('span');
            
            // 5.2for循环 对所有的X添加点击事件
            for(var i = 0; i< oSpans.length; i++){
                oSpans[i].onclick  = function(){
                    // 5.3 移除当前的li标签
                    oUl.removeChild(this.parentNode)
                    count--;
                }
            }
        
            
        }
    
        function sum(){
            alert('一共发布了'+count+'条留言');
            
        }
        
    </script>
</html>
```

#### 案例三:

```html
<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        <title></title>
        <style type="text/css">
            *{
                padding: 0;
                margin: 0;
            }
            ul{
                list-style: none;
            }
            #tab{
                width: 480px;
                margin: 20px auto;
                border: 1px solid red;
            }
            ul{
                width: 100%;
                overflow: hidden;
            }
            ul li{
                float: left;
                width: 160px;
                height: 60px;
                line-height: 60px;
                text-align: center;
                background-color: #cccccc;
            }
            
            ul li a{
                text-decoration: none;
                color:black;
            }
            li.active{
                background-color: red;
            }
            p{
                display: none;
                height: 200px;
                text-align: center;
                line-height: 200px;
                background-color: red;
            }
            p.active{
                display: block;
                
            }
            
        </style>
    </head>
    <body>
        <div id="tab">
            <ul>
                <li class="active">
                    <a href="#">首页</a>
                </li>
                <li>
                    <a href="#">新闻</a>
                </li>
                <li>
                    <a href="#">图片</a>
                </li>        
            </ul>
            <p class="active">首页内容</p>
            <p>新闻内容</p>
            <p>图片内容</p>
            
            
        </div>
    </body>
    <script type="text/javascript">
        window.onload = function(){
            // //需求：鼠标放到上面的li上，li本身变色(添加类)，对应的p也显示出来(添加类);
                    //思路：1.点亮上面的盒子。   2.利用索引值显示下面的盒子。
            var tabli = document.getElementsByTagName('li');
            var tabContent = document.getElementsByTagName('p')
        
            for(var i = 0; i < tabli.length; i++){
                // 绑定索引值（新增一个自定义属性：index属性）
                tabli[i].index  = i;
                tabli[i].onclick = function(){
                    
                    // 1.点亮上面的盒子。   2.利用索引值显示下面的盒子。(排他思想)
                    for(var j = 0; j < tabli.length; j++){
                        tabli[j].className = '';
                        tabContent[j].className = '';
                    }    
                    this.className = 'active'
                    
                    tabContent[this.index].className = 'active';//【重要代码】
                }
        }
        }
        
    </script>
</html>
```

