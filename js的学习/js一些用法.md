# 1.document.write(“<div>内容</div>”);

## 	用法:document.write()这个是把()里面的内容,加载到,网页上面;

## 	弊端:这个会替换全部的内容;

# 2.onclick=""点击事件,这个里面还能写什么如下!

```html
<button onclick="let a = '1'; a++;if(a%2==0){this.setAttribute('class','red')}else{this.setAttribute('class','blue')}">这是一个按钮</button>

```

# 3.window.alert(“内容”)弹出警告框

## 这个的简写是alert("内容");

# 4.document.innerHTML="这个同样是类似document.write()";

## 用法:document.innerHTML="<span>内容</span>"这个的话,其实也是能够添加html代码

## 好处:这个是能够,把内容加载到网页上，并且不会和document.wirte()一样影响整个页面



