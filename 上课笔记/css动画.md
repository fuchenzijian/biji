# CSS	动画

#### @keyframes

@keyframes和animation-name必须一一对应，keyframes定义的规则是针对animation-name所选择的元素

.div{
Animation-name:ceshi;
}
@keyframes ceshi{
动画规则，如果要做left,right等位移，需要将元素         **position设为relative**
}

#### animation-iteration-count	重复

用来规定动画需要重复执行多少次，如果需要一直执行:值是infinite

也可以指定具体的次数，n   默认执行一次

#### animation-direction	方向

规定动画运行的方向
取值：

normal(默认值),按照正常方向从头向后走

reverse，设定规则的反方向，从后往前走

alternate:先正着来一遍然后倒着来一遍

alternate-reverse:先倒着来一遍然后正着来

#### animation-duration:	执行时间间隔

单次动画执行的时间间隔，后面跟的值：1s；

#### animation-delay:		延时

动画延时多久开始执行，后面跟的值：1s,默认不延迟

#### animation-timing-function:	速度

决定动画运行的速度，值：

1. linear:动画从头到尾都是以相同速度运行
2. ease:(默认)动画以低速开始，然后加速，然后以低速结束
3. ease-in:动画以低速开始
4. ease-out:动画以低速结束
5. easy-in-out:动画以低速开始，以低速结束
6. cubic-bezier(n,n,n,n),自定义速度，值0-1之间

Animal-fill-mode:forwards;执行一次，不在出行



#### 转动transform:rotate(360deg);





