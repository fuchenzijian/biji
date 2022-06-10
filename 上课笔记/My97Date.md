### My97Date

#### 引用

解压到 public 文件夹里的My97DatePicker 把文件夹放入到服务端

```html
<script src="./public/My97DatePicker/WdatePicker.js"></script>
<link rel="stylesheet" href="./public/My97DatePicker/skin/WdatePicker.css">
```



#### 获取年月：

```js
<input class="Wdate col-sm-2" type="text" id="month"   onclick="selectmonth()" />

function selectmonth() {
            WdatePicker({
                dateFmt: 'yyyy-MM',   //显示格式：年-月
				// dateFmt: 'yyyy-MM-dd',   //显示格式：年-月-日
                isShowToday: false,		//是否展示今天按钮
                isShowClear: true,		//是否展示清空按钮
                readOnly: true			//是否设置为只读模式 
            });
        }
```



#### 获取日：

```js
<input class="Wdate col-sm-1" type="text" id="day" onclick="selectDay()" />

 function selectDay() {
            WdatePicker({
                dateFmt: 'dd',		//显示格式：日
                isShowToday: false,
                isShowClear: true,
                readOnly: true
            });
        }
```

