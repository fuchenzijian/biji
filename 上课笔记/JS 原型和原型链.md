## **原型和原型链**

### **面向对象编程：**

#### **1，对象：**

​        面向对象编程（oop）是目前主流的编程范式，它将真实世界各种复杂的关系，抽象为一个个对象，然后由对象之间分工与合作，完成对真实世界的模拟。

​       每一个对象都是功能中心，具有明确分工，可以完成接收信息，处理数据，发出信息等任务。对象可以复用，通过继承机制还可以定制。因此，面向对象编程具有灵活、代码可复用、高度模块化等特点，容易维护和开发，比起由一些列函数或指令组成的传统的过程是编程更适合多人合作的大型软件项目。

   根据我们以往经验，如果学习过java的话，对于类和对象就很容易理解了

01，对象是单个实物的抽象

02，对象是一个容器，封装了属性（property）和方法（method），属性就是描述对象的特征，方法则表示对象的一系列行为动作。

#### **2，构造函数：**

面向对象编程的第一步，就是要生成对象。我们在面向对象语言（java）中说过，对象是一个具体的、单个实物的抽象。通常需要一个模板，表示某一类实物的共同特征，然后对象根据这个模板生成，这个模板在面向对象语言中，都有一个class（类）的概念在里面，但是在JavaScript语言的对象体系，是基于构造函数（constructor）和原型链（prototype）。

JavaScript中，所谓的构造函数，就是专门用来生成实例对象的函数。他就是对象的模板，描述实例对象的基本结构。一个构造函数，可以生成多个实例对象，这些实例对象都有相同的结构。

let Good = function(){

  this.price = 100;

}

Good 就是构造函数，为了与之前学的普通函数区别，构造函数首字母通常大写。

##### 构造函数的特点：

01，函数体内部使用了this关键字，代表了所要生成的对象实例

02，生成对象的时候，必须使用new关键字

#### **3，new：**

 01，new命令的作用就是执行构造函数，返回一个实例对象。在我们刚才的构造函数基础上

let good1 = new Good();

good1.price //100

此时我们分析this的指向，之前我们this的词法作用域分析，this指向调用this所在的函数对象。在构造函数中，this代表的是新生成的实例对象。

构造函数也可以接受参数。

这里在有一种不被推荐但是仍正确的写法：

let good = new good；

new本身就可以执行构造函数，所以后面的括号可以不带，但是推荐使用括号。

同时，我们可以关注一个问题，如果我们不写new

此时就 变成了一个普通函数，这时候，我们关注下this指向

let Good = function(){

this.price = 100;

}

 let good = Good();

 good //undefined

  price // 1000

调用的时候没有写new，this指向变化，price变成了全局变量

如果还有印象，我们java里有一个判断实例对象所属类，instanceof，同时在js里一样的

good instanceof Good

##### 02,分析new命令执行时，函数执行步骤：

​     （1）创建一个空对象，作为将要返回的对象实例。

​      （2）将这个空对象的原型，指向构造函数的prototype属性。

​      （3）将这个空对象赋值给函数内部的this的关键字

​       （4）开始执行构造函数内部的代码

​          构造函数内部，this指的是一个新生成的空对象，所有针对this的操作，都会发生在这个空对象上。构造函数之所以叫构造函数，是说这个函数的目的就是操作一个空对象（即this对象），将其构造为需要的样子。

​        *如果构造函数内部有return语句，而且return语句后面跟着一个对象，new命令会返回return语句指定的对象；否则，就会不管return语句，返回this对象;

let Good =function(){

​    this.price =100;

​    return 100;

}

 new Good();

let Good =function(){

​    this.price =100;

​    return {"aa":1};

}

new Good();

*如果普通函数（没有this关键字），使用new命令，则返回一个空对象。

#### **4,Object.create()创建实例对象：**

构造函数作为模板，可以生成实例对象，但是有时拿不到构造函数，只能拿到一个现有的对象。我们希望以这个现有的对象作为模板，生成新的实例对象，这时就可以使用Object.create()方法

let person1 ={

​    name:"张三",

age:20,

sayHello:function(){

   console.log("我是"+this.name)

 }

};

   let person2 = Object.create(person1);

   person2.name //张三

   person2.sayHello() //我是张三

对象person1是person2的模板，后者继承了前者的属性和方法

这里补充点**Object.create()**方法的知识。这个方法创建一个拥有指定原型和若干个指定属性的对象，我们之前只学了他的前半句。现在补充下

第一个参数：新对象的原型对象

第二个参数：新对象指定的属性，是一个对象形式的配置

value:属性的默认值，默认为undefined

congigurable:能否使用delete、能否修改属性特性、或能否修改访问器属性，false为不可重新定义，默认是true

writeable：对象属性是否可修改，默认为true，可修改，设施false可以理解为不可修改的常量

#### **5,构造函数的缺点**

JavaScript 通过构造函数生成新对象，因此构造函数可以视为对象的模板。实例对象的属性和方法，可以定义在构造函数内部

function Cat(name,color){

​      this.name =name;

​      this.color = color;

}

let cat = new Cat("小花","花色");

cat.name

cat.color

Cat 函数是一个构造函数，函数内部定义了name属性和color属性，所有实例对象都会生成这两个属性。

通过构造函数 为实例对象定义属性，虽然方便，但是有一个缺点。**同一个构造函数的多个实例之间，无法共享属性，从而造成对系统资源的浪费。**

function Cat(name,color){

this.name = name;

this.color=color;

this.meow = function(){

  console.log("喵喵");

};

}

let cat1 = new Cat("大毛","黄色");

let cat2 = new Cat("二毛","灰色");

cat1.meow === cat2.meow //false

这段代码里，cat1和cat2是同一个构造函数的两个实例，它们都具有meow()方法。由于meow方法是生成在每个实例对象上面，所以两个实例就生成了两次。也就是说，每新生成一个实例，就会新建一个meow方法。这即没有必要，又浪费系统资源，因为所有meow方法都是同样的行为，完全应该共享。

这个问题的解决方法，就是JavaScript的原型对象（prototype）

#### **6,prototype属性的作用** 

JavaScript 继承机制的设计思想就是，**原型对象的所有属性和方法，都能被实例对象共享，也就是说，如果属性和方法定义在原型上，那么所有的实例对象就能共享，不仅节省了内存，还体现了实例对象之间的联系。**

JavaScript规定，每个函数都有一个prototype属性指向一个对象

function f(){

  typeof f.protype //object

}

上面代码中，函数f默认具有protype属性，指向一个对象。

对于普通函数来说，该属性基本无用。但是，对于构造函数来说，生成实例的时候，该属性会自动称为实例对象的原型。

function Animal(name){

​     this.name = name;

}

Animal.prototype.color = 'white';

let cat1 = new Animal('大毛');

let cat2 = new Animal('二毛')；

cat1.color 

cat2.color

上面代码里，构造函数Animal的prototype属性，就是实例对象cat1和cat2的原型对象。原型对象上添加一个color属性，所有的实例对象都共享了该属性。

我们通过prototype来改写下之前构造函数缺陷的问题：

function Cat(name,color){

this.name = name;

this.color=color;

}

Cat.prototype.meow = function(){

  console.log("喵喵"); 

};

let cat1 = new Cat("大毛","黄色");

let cat2 = new Cat("二毛","灰色");

cat1.meow === cat2.meow 

**原型对象的属性不是实例对象自身的属性。只要修改原型对象，变动就会立刻体现在所有的实例对象上**

function Animal(name){

​     this.name = name;

}

Animal.prototype.color = 'white';

let cat1 = new Animal('大毛');

let cat2 = new Animal('二毛')；

cat1.color 

cat2.color

Animal.protype.color ='yellow';

cat1.color 

cat2.color

原型对象的color属性值变为yellow，两个实例对象的color属性立刻跟着变了。这是因为实例对象其实没有color属性，都是读取原型对象的color属性。也就是说，当实例对象本身没有某个属性或方法的时候，它会到原型对象去寻找该属性或方法。这就是原型对象的特殊之处

如果实例对象自身就有某个属性或方法，它就不会再去原型对象寻找这个属性或方法。

cat1.color ='black';

cat1.color

cat2.color

Animal.prototype.color

由此可见，**原型对象的作用，就是定义所有实例对象共享的属性和方法。**这也是它被称为原型对象的原因，而实例对象可以视作从原型对象衍生出来的子对象。

1.3原型链

JavaScript 规定，所有对象都有自己的原型对象（prototype）。**一方面，任何一个对象，都可以充当其他对象的原型；另一方面，由于原型对象也是对象，所以它也有自己的原型**。因此，就会形成一个“原型链”（prototype chain）:对象到原型，再到原型的原型...

如果一层层的上溯，所有对象的原型最终都可以上溯到Object.protype，即Object构造函数的portotype属性。也就是说，所有对象都继承了Object.prototype的属性。这就是所有对象都有valueof和toString 方法的原因，因为这是从Object.prototype继承的。

Object.prototype 对象的原型是null，由于null没有任何属性，所以原型链到此为止。Object.getPrototypeOf 方法返回参数对象的原型。

object.getPrototypeof(Object.protoype)

读取对象的某个属性时，JavaScript引擎先寻找对象本身的属性，如果找不到，就到他的原型去找，如果还是找不到，就到原型的原型去找。如果知道最顶层的Object.prototype还是找不到，则返回undefined 如果对象自身和他的原型，都定义了一个同名属性，那么优先读取对象自身的属性，这在js里可以被翻译为“覆盖”，即overriding，在java、c++这些严格面向对象语言里，我们很熟悉，就是重写

*注意，一级级向上，在整个原型链上寻找某个属性，对性能是有影响的，所寻找的属性在越上层的原型对象，对性能的影响越大。如果寻找某个不存在的属性，将会遍历整个原型链。

可以通过分析一段代码看下：

let MyArr = function(){};

MyArr.prototype = new Array();

MyArray.prototype.constructor = MyArray;

let mine = new MyArr();

mine.push(1,2,3);

mine.length

nie instanceof Array

分析这段代码，mine是构造函数MyArr的实例对象，由于MyArr.prototype指向一个数组实例，使得mine可以调用数组方法（这些方法定义在数组实例的prototype对象上面）。最后的instanceof表达式，用来比较一个对象是否是某个构造函数的实例，结果就证明，mine是Array的实例

#### **7，constructor属性**

 prototype对象有一个constructor属性，默认指向prototype对象所在的构造函数。

function P(){}

P.prototype.constructor === P

由于constructor属性定义在prototype对象上面，意味着可以被所有实例对象继承

function P(){}

let p =new P();

p.constructor === P

p.constructor === P.prototype.constructor

p.hasOwnProperty('constructor')  //检测p自身是否有constructor

p是构造函数P的实例对象，但是p自身没有constructor属性，该属性其实是读取原型链上面的P.prototype.constructor属性

constructor属性的作用是，可以得知某个实例对象，到底是哪一个构造函数产生的。

function F(){}

let f = new F();

f.constructor === F

f.constructor ===RegExp

constructor属性确定了对象f的构造函数是F而不是RegExp

有了constructor属性，就可以从一个实例对象创建另一个实例

function Constr(){}

let x = new Constr();

let y = new x.constructor();

y.instanceof Constr //true

x是构造函数Constr的实例，可以从x.constructor

间接调用构造函数。这使得在实例方法中，调用自身的构造函数成为可能。

Constr.prototype.createCopy = function(){

return new this.constructor();

}

这里createCopy方法调用构造函数，新建另一个实例。

constructor属性标识原型对象与构造函数之间的关联关系，如果修改了原型对象，一般会同时修改constructor属性，防止引用的时候出错。

function Person(name){

  this.name = name;

}

Person.prototype.constructor === Person

Person.prototype ={

   method:function(){}

};

Person.prototype.constructor === Person

Person.prototype.constructor === Object

这段代码里，构造函数Person的原型对象改掉了，但是没有修改constructor属性，导致这个属性不在指向Person。由于Person的新原型是一个普通对象，而普通对象的constructor属性指向object构造函数，导致Person.prototype.constructor变成了Object。

所以，修改原型对象时，一般都要同时修改constructor属性的指向。

//有问题的写法

C.prototype ={

method1:function(...){...},

}  

//正确的写法

C.prototype ={

​    constructor:C,

​     method1:function(...){...}

};

//更好的写法

C.prototype.method1 = function(...){...};

可以看到上面的写法里，要么将constructor属性重新指向原来的构造函数，要么只在原型对象上添加方法，这样可以保证instanceof运算符不会失真

#### **8，构造函数的继承**

 让一个构造函数继承另一个构造函数，是非常常见的需求。这可以分成两步实现。第一步是在子类的构造函数中调用父类的构造函数。

function Sub(value){

Super.call(this);

this.prop = value;

}

Sub是子类的构造函数，this是子类的实例，在实例上调用父类的构造函数Super，就会让子类实例具有父类实例的属性。

第二步，让子类的原型指向父类的原型，这样子类就可以继承父类的原型。

Sub.prototype = Object.create(Super.prototype);

Sub.prototype.constructor = Sub;

Sub.prototype.method ='...';

Sub.prototype是子类的原型，要将它直接赋值为Object.create(Super.prototype),而不是直接等于Super.prototype。否则后面两行对Sub.prototype的操作，会连父类的原型Super.prototype一起修改掉。

//动物的构造函数

function Animal(name,age){

​      this.name = name;

  this.age = age;

}

//猫的构造函数

function Cat(name,age,sex){

​         this.name = name;

this.age = age;

this.sex = sex;

}

我们使用继承的一个重要的原因就是可以省略很多重复性的代码，现在作为猫，它本身属于动物，因此猫的name和age如果我们可以从动物上继承就可以不用在猫里重复写了。

我们先根据我们往常的经验进行一波改造

function Cat (name,age,sex){

​     Animal(name,age);

 this.sex = sex;

}

let miao = new Cat('miaomiao',2,'boy');

miao.sex

miao.name 

miao.age

运行可以看下结果

这里我们可以按照词法作用域来分析下，这个name和age实际上是在window上了

所以这个思路实际 上是有问题的，问题就是在执行Animal的时候里面this的指向出了问题。

思考一下，我们其实有一种强制扭转this指向的东西，call和apply。根据这个思路修改下代码

function Cat (name,age,sex){

​     Animal.call(this,name,age);

 this.sex = sex;

}

let miao = new Cat('miaomiao',2,'boy');

miao.sex

miao.name

miao.age

但是我们现在再回归我们的主题，现在我们的代码是真正意义上的继承么？其实只是伪继承，只是借用call来执行了下Animal，甚至都没有把两个构造函数关联起来。我们真正的继承一定是通过原型去做继承的。因此我们的任务还是没有完成。

//把子类的原型指向父类的原型，并把子类的构造函数改回成子类

Cat.prototype = Object.create(Animal.prototype);

也可以直接：

Cat.prototype = new Animal();

Cat.prototype.constructor = Cat

这就是目前通用的组合继承





#### **9,Object.getPrototypeOf()**

 让Object.getPrototypeOf方法**返回参数对象的原型**。**这是获取原型对象的标准方法。**

let F = function(){}

let f = new F();

Object.getPrototypeOf(f) === F.prototype



空对象的原型是Object.prototype

Object的原型是null

函数的原型是Function.prototype

#### **10,Object.setPrototypeOf()**

Object.setPrototypeOf 方法**为参数对象设置原型，返回该参数对象**。它接受两个参数，第一个是现有对象，第二个是原型对象。

let a = {};

let b = {x:1};

Object.setPrototypeOf(a,b);

Object.getPrototypeOf(a) === b

new 命令可以使用Object.setPrototypeOf方法模拟

let F = function(){

   this.foo ="bar";

};

下面两个代码相当于：let f = new F();

let f = Object.setPrototypeOf({},F.prototype);

F.call(f);   

第一步，将一个空对象的原型设为构造函数的prototype属性，

setPrototypeof方法返回设置好的对象，赋值给f

第二部，将构造函数内部的this绑定这个空对象，然后执行构造函数，使得定义在this上面的方法和属性都转移到空对象上

#### **11，Object.create()**

生成实例对象的常用方法是，使用new命令让构造函数返回一个实例。但是很多时候，只能拿到一个实例对象，它可能根本不是由构建函数生成的，所以借助create可以从一个实例对象生成另一个实例对象。

该方法接受一个对象作为参数，然后以它为原型，返回一个实例对象。该实例完全继承原型对象的属性。

let A = {

   print:function(){

​     console.log("hello,world"); 

 }

}

let B = Object.create(A);

Object.getPrototypeOf(B) ===A

B.print === A.print

#### **12,Object.prototype.isPrototypeOf()**

实例对象的isPrototypeOf方法，用来判断该对象是否为参数对象的原型

let a1 = {};

let a2 =Object.create(a1);

let a3 = Object.create(a2);

a2.isPrototypeOf(a3)

a1.isPrototypeOf(a3)

a1和a2都是a3的原型

#### 13,Object.prototype. `__proto__`

实例对象`__proto__`属性，前后各两个下划线，返回该对象的原型。改属性可读写。

let obj = {};

let p ={};

obj.`__proto__`=p;

Object.getPrototypeOf(obj) === p

上面代码通过`__proto__`属性，将p对象设为obj对象的原型。

根据语言标准，__prototype__属性只有浏览器才需要部署，其他环境可以没有这个属性。他前后的两根下划线，表明他本质是一个内部属性，不应该对使用者暴露，因此，应该尽量少用这个属性。而是用，Object.getPrototypeOf()和Object.setPrototype(),进行原型对象的读写操作

原型链可以用`__proto__`很直观的表示

let A ={

​      name:'张三'

}

let B ={

​    name:'李四'

}

let proto = {

​     print:function(){

​       console.log(this.name);

​    }

}

A.`__proto__`= proto;

B`__proto__` = proto;

A.print();

B.print();

A.print === B.print

A.print === proto.print

B.print ===proto.print

A对象和B对象的原型都是proto对象，他们都共享proto对象的print方法，也就是说，A和B的print方法，都是在调用proto对象的print方法

let obj = new Object();

obj.`__proto__` ===Object.prototype

obj.`__proto__`=== obj.constructor.prototype

上面的代码新建了obj对象，他的`__proto__`属性，指向构造函数（object或obj.constructor）的prototype属性。

因此，获取实例对象obj的原型对象有三种方法：

01，obj.`__proto__`

02，obj.constructor.prototype

03，Object.getPrototypeOf(obj)

上面三个方法里面，前两种都不是很可靠，`__proto__`属性只有浏览器才需要部署，其他环境可以不部署。而obj.constructor.prototype在手动改变原型对象时，可能会失效。比如下面的例子：

let P=function(){};

let p = new P();

let C =function(){};

C.prototype = P；

let c = new C();

c.constructor.prototype === p   //false

#### **14,Object.getOwnPropertyNames()**

Object.getOwnPropertyNames()方法返回一个数组，成员是参数对象本身所有属性的键名，不不含继承属性键名。

Object.getOwnPropertyNames(String);

String.prototype

对象本身的属性里，有的是可以遍历的，有的是不可以遍历的，这取决于内部关于他们属性的访问特性，类似于java的访问修饰符，js里分别是：readonly，dontEnum，dontDelete,internal.我们这里这个方法返回所有的键名，不管是否可以遍历。

如果需要只获取可以遍历的属性，需要使用Object.keys方法

Object.keys(String)

可以发现，String对象所有自身的属性是不可以遍历的

#### **15,Object.prototype.hasOwnProperty()**

对象实例hasOwnProperty方法返回一个布尔值，用于判断某个属性是定义在对象自身上还是定义在原型链上

String.hasOwnProperty("length")  //true

String.hasOwnProperty("substring")  //false

#### **16,in运算符和for...in循环**

in运算符返回一个布尔值，标识一个对象是否具有某个属性。它不区分该属性是对象自身的属性，还是继承的属性。

’length' in String       //true

'substring' in String      //false

##### in用于检查一个属性是否存在

因此，获得对象的所有可遍历属性（不管是自身的还是继承的），可以使用for...in循环

let a1 ={p1:123};

let a2 =Object.create(a1,{p2:{value:"abc",enumerable:true}};

##### for...in遍历  a2里的key

for(key in a2){

  console.log(key)；

}

##### for...in遍历  a2里的值

for(key in a2){

  console.log(a2.key)；或者console.log(a2[key])；

}

#### **17，对象的拷贝**

如果要拷贝一个对象，需啊哟做到下面两件事。

01，确保拷贝后的对象，与原对象具有同样的原型

02，确保拷贝后的对象，与原对象具有同样的实例属性。



引用数据类型在内存中：名存在栈内存中，值存在堆内存里，但是栈内存会提供一个引用地址指向堆内存里的值

let a = [1,2,3];

let b = a;

b[1]=5;

a[1]

这里可以看到[1,2,3]在堆内存里只有一份，被a和b共享着，所以a和b只是地址指向堆内存里，并且b=a的时候，只是a把地址告诉了b，这就是**浅拷贝**

##### **深拷贝：**

一个变量对另外一个变量的值进行拷贝，并且两个对象值改变相互没有影响,深拷贝针对的是引用数据类型。

补充知识：

##### 递归算法



有个讲故事的例子可以浅显的说明递归：

从前有座山，山里有个庙，庙里有个老和尚讲故事，讲的是从前有座山，山里有个庙，庙里有个老和尚在给小和尚讲故事，讲的是.....

这就是一个典型的递归算法思路，但是是一个失败的递归，因为这个递归是个死胡同，永远没有出口，也就是终止条件。

  递归本质上是将原来的问题，转换成为一个更小的同一问题。也就是一个函数不断的调用自己，直到把问题解决完。

 最经典的应用就是斐波那契数列：

1、1、2、3、5、8、13、21、34...

 ![http://note.youdao.com/yws/public/resource/40f1294391bee23c9b4dc735ac7631fe/xmlnote/WEBd6696da29e22ad8984974cf4d6eb8bd4/FFDE74A1F6564D55BFDBA67F32806F27/7844](http://note.youdao.com/yws/public/resource/40f1294391bee23c9b4dc735ac7631fe/xmlnote/WEBd6696da29e22ad8984974cf4d6eb8bd4/FFDE74A1F6564D55BFDBA67F32806F27/7844) 

这个通项可以使用线性代数里的特征方程推导。

F(0) =0,F(1)=1，F(n)=F(n-1)+F(n-2)  (n>=2)

转换成代码：

```js
function Fibonacci(n){

       if(n<=2){ return 1};

       return Fibonacci(n-1)+Fibonacci(n-2);

}


function deepClone(obj) {

    let objClone = Array.isArray(obj) ? [] : {};

    if(obj && typeof obj === "object") {

        for(key in obj) {

            if(obj.hasOwnProperty(key)) {

                //判断ojb子元素是否为对象，如果是，递归复制

                if(obj[key] && typeof obj[key] === "object") {

                    objClone[key] = deepClone(obj[key]);

                } else {

                    //如果不是，简单复制

                    objClone[key] = obj[key];

                }

            }

        }

    }

    return objClone;

}
```

##### 递归1~100的求和

```js

	function find(a){
        	if(a==1){
                return 1
            }
        	return find(a-1)+a;
    	}
```

##### 递归求1-100的乘

```js

	function find(a){
        	if(a==1){
                return 1
            }
        	return find(a-1)*a;
    	}
```



##### 深拷贝的写法

```JS
 let obj={
    name:'aa',
    age:18,
    child:{
        name:'aa',
        age:18,
    }
}

function copy(obj){
            let obj1={};
            for (let key in obj) {
                if (typeof obj[key] == 'object') {
                    obj1[key] = copy(obj[key]);
                    
                }else{
                    obj1[key] = obj[key];
                }
            }
            return obj1;
        }
```



#### **对象原型**

"`__proto__`"是每一个对象都有的特殊属性

"`__proto__`"属性引用的就是对象原型

对象原型也是一个对象；

对象原型的属性/方法同样可以通过对象调用，被称为对象的原型属性/方法

随便创建一个对象，看下他的原型

   let obj ={

name:"obj"

}

console.log(obj.`__proto__`) ;

在原型上添加的属性

obj.`__proto__`.age=13;

console.log(obj.name+","+obj.age)

在实例上直接添加的属性和方法叫：实例属性和实例方法

通过或在原型上添加的属性和方法叫：原型属性和原型方法

### **原型链**

 

#### 继承

```js

    function Parent(){
        this.name = 'xiaoming';
        this.age = 18
    }
    function Fn(){
        Parent.apply(this,arguments);
    }
    function extend(obj1,obj2){
        for(let key in obj2){
            obj1[key] = obj2[key]
        }
    }
    extend(Fn.prototype,Parent.prototype)
    // Fn.prototype.constructor = Parent.prototype.constructor
    Fn.prototype.constructor = Fn.prototype.constructor;
```



#### 写法

```js
原生js
 function Cat(name, color) {
        this.name = name;
        this.color = color;

    }
    Cat.prototype.meow = function meow() {
        console.log("喵喵");
    }

    let cat1 = new Cat("大毛", "黄色");
    cat1.meow();


//class写法：
class Cat8 {
            constructor(name, color) {

              this.name = name;
              this.color = color;
              this.meow()
        }
        meow(){
            console.log("喵喵")
        }
    }

    let cat8 = new Cat8("大毛", "黄色")
    cat8.meow();
```

