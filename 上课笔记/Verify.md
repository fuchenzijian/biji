### Verify的class

```js
 class Verify{
    constructor(value){
      this.obj = value;
    }
    get type(){
    return Array.prototype.toString.call(this.obj).slice(8,-1);
    }
    get isFunction(){											//检查是不是function
      return this.type == 'Function'
    }
    get isString(){												//检查是不是String
     return this.type == 'String' 
    }
    get isArray(){
      return Array.isArray(this.obj);							//检查是不是Array
    }
     get  isObject(){
            return this.type == 'Object' 						//检查是不是Object
        }
     get  isNumber(){
            return this.type == 'Number' 						//检查是不是Number
        }

    static isArray(){
      // 这种方法是没有this指向的;
      console.log('exec')
    }
  }
  
   let verify = new Verify('function(){}'); //
    console.log(verify.isFunction) //false;
    console.log(verify.isString) //true;
```



#### get方法

```js
 let json = {
        name:'xiaoming',
        get age (){
            return `${this.name}已经18啦`
        }
    }
    //这种get方法，被 称为计算属性；
    console.log(json.name);
    console.log(json.age);
    json.name = 'xiaohong';
    console.log(json.name);
    console.log(json.age);
```



