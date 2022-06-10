# 概念vuex是为了让a.vue或者,b.vue的两个页面公共数据放到这里面,达到存放公共数据的效果;

# 正则^开始

# commit的是干什么的?

## commit是同步的方法,我们是用于修改stata里面的数据;

### 语法:this.$store.state.username;(这个是state里面有的);   修改 :  this.$store.commit('USERNAME','xiaoming')

# 如果有需求是获取异步的,

## 用dispath;

## 咱们为什么没有用;

## //...mapActions(['signin','getUserInfo']) //映射为this.$store.dispatch('signin');