### echarts  图表

#### 引用

在终端输入  npm install echarts --save

在 文件夹node_modules里面找到  echarts文件夹  dist 文件夹里的  echarts.min.js  文件

把  echarts.min.js  文件 复制到 public 文件夹里面的  echarts 文件夹

```html
<script src="./public/echarts/echarts.min.js"></script>
```

```js

var chartDom = document.getElementById('main');
var myChart = echarts.init(chartDom);
var option;

option = {
    title: {
            text: '学生签到次数统计'   //标题
        },
        tooltip: {},
        legend: {
            data: ['次数']		//单位
        },
        xAxis: {				//x轴
            data: uname,
            axisTick: {
                interval: 0
            }
        },
        yAxis: {},
        series: [{
            name: '次数',			//单位
            type: 'bar',		 //柱图  line 线图  pie  饼图
            data: unum
        }]
};

myChart.setOption(option);
```

