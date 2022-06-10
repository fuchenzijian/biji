# 1.   map 和 arr 和 json 的区别

## 	获取方法不一样:  map.get()    map.set();

## 	map   json 以外的键   let json = Object.create(null)   map中的键是纯粹的

## 	arr json arr[index]   json[key]; arr[10000]   数组的长度10000  json{'10000':'xiaoming'};

## 	数组这样的话,直接就是数组的长度是10000;

## 	而json的话，只会把10000当场key的值;

## 	

## 	map中的key可以使任意的;   而 json中的key只能是字符串;



## 	map这个对象,可以解析成数组，方便使用数组的方法;



## 	map和arr 的区别:   map.get(1)   arr[1]   性能上map要高于arr;



## 	map的底层 是二维数组;