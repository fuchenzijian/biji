```html
<!-- text 文本框 用户可以在里面输入任何文字 -->

    用户名:<input type="text"> <br>

    <!-- password 密码框 用户看不见输入的密码 -->

  密码:<input type="password"><br>

    <!-- radio 单选按钮 可以实现单选 -->

   <!-- name 是表单元素名字 这里性别单选按钮必须有相同的名字name 才可以实现多选1 -->

   <!-- 单选按钮和复选框可以设置checked 属性,当页面打开的时候就可以默认选中这个按钮 -->

    性别: 男 <input type="radio" name="sex" value="男"> 女 <input type="radio" name="sex" value="女"><br>

    <!-- CheckBox 复选框 可以实现多选 -->

    爱好:吃饭<input type="checkbox"  value="吃饭"> 睡觉<input type="checkbox"  value="睡觉"> 
```



select  下拉框

selected   默认选择项



```html
<select>
        				<option hidden></option>
                        <option>总体</option>
                        <option>手机</option>
                        <option>固网</option>
</select>
```

button    按钮

reset           重置

submit     提交

textarea      文本域

#### placeholder的颜色更改

不同浏览器私有属性写法：
-moz- 代表firefox 浏览器的私有属性
-ms- 代表ie浏览器的私有属性
-webkit-代表Safari、chrome 浏览器的私有属性
-o-代表opera浏览器的私有属性

```
.input::-webkit-input-placeholder{

    color:#fff;

   }
```



