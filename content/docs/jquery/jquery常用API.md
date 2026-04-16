---
title: "常用API"
description: "Get CelestialDocs running locally and understand the project structure"
---
* jQuery选择器

* jQuery样式操作

* jQuery效果

* jQuery属性操作

* jQuery文本属性值

* jQuery元素操作

* jQuery尺寸、位置操作

  # jquery选择器

## jquery基础选择器

原生JS获取元素方式很多，很杂，而且兼容性情况不一致，因此jQuery给我们做了封装，使获取元素统一标准。

```js
$("选择器")  //里面选择器直接写css选择器即可，但是要加引号
```

| 名称       | 用法            | 描述                     |
| ---------- | --------------- | ------------------------ |
| ID选择器   | $("#id")        | 获取指定ID的元素         |
| 全选择器   | $('*')          | 匹配所有元素             |
| 类选择器   | $(".class")     | 获取同一类class的元素    |
| 标签选择器 | $("div")        | 获取同一类标签的所有元素 |
| 并集选择器 | $("div,p,li")   | 选取多个元素             |
| 交集选择器 | $("li.current") | 交集元素                 |

##  jquery层级选择器

| 名称       | 用法        | 描述                                                         |
| ---------- | ----------- | ------------------------------------------------------------ |
| 子代选择器 | $("ul >li") | 使用>号，获取亲儿子层级的元素;注意，并不会获取孙子层级的元素 |
| 后代选择器 | $("ul  li") | 使用空格，代表后代选择器，获取ul下的所有li元素，包括孙子等   |

##  jquery隐式迭代

jquery设置样式

```js
$("div").css('属性','值')
```

隐式迭代（重要）

遍历内部 DOM元系（伪数组形式存储)的时程就叫做`隐式迭代`
简单理解:给匹配到的所有元素进行循环遍历，执行相应的方法，而不用我们再进行循环，简化我们的操作，方便我们调用

##  jquery筛选选择器

| 语法       | 用法            | 描述                                                      |
| ---------- | --------------- | --------------------------------------------------------- |
| :first     | $('li : first') | 获取第一个li元素                                          |
| :last      | $('li : last')  | 获取最后一个li元素                                        |
| :eq(index) | $('li : eq(2)') | 获取到的li元素中，选择索引号为2的元素，索引号index从0开始 |
| :odd       | $('li : odd')   | 获取到li元素中，选择索引号为奇数的元素                    |
| :even      | $('li : even')  | 获取到li元素中，选择索引号为偶数的元素                    |

##  jquery筛选方法（重点）

| 语法                | 用法                           | 说明                                                   |
| ------------------- | ------------------------------ | ------------------------------------------------------ |
| parent()            | $("li").parent();              | 查找父级                                               |
| chaildren(selector) | $("ul").children("li");        | 相当于$("ul >li"),最近一级(亲儿子)                     |
| find(selector)      | $("ul").find("li");            | 相当于$("ul li"),后代选择器                            |
| siblings(selector)  | $(".first").siblings("li");    | 查找兄弟节点，不包括自己本身                           |
| nextAll([expr])     | $(".first").nextAll()          | 查找当前元素之后所有的同辈元素                         |
| prevtAll([expr])    | $(".last").prevAll()           | 查找当前元素之前所有的同辈元素                         |
| hasClass(class)     | $('div').hasClass("protected") | 检查当前的元素是否含有某个特定的类，如果有，则返回true |
| eq(index)           | $("li").eq(2);                 | 相当于$("li : eq(2)"),index从0开始                     |

```js
<body>
    <div class="yeye">
        <div class="father">
            <div class="son"></div>
        </div>
    </div>

    <div class="fathers">
        <p>yes</p>
        <div>
            <p>no</p>
        </div>
    </div>
    <script>
        $(function() {
            // 1. 父级 parent()  返回最近一级的父级元素  亲爸爸
            console.log($('.son').parent()); //.father
            // 2. 子  children()亲儿子  子代选择器
            // console.log($('.fathers').children('p').css('color', 'red'));
            // find()类似于后代选择器
            console.log($('.fathers').find('p').css('color', 'red'));
        })
    </script>
</body>
```

```js
   <script>
        $(function() {
            // siblings()除了自己以外所有的亲兄弟
            // $('ul  .item').siblings('li').css('color', 'red')
            // 第n个元素
            // 判断是否有某个类名
            // nextAll([expr]) 查找当前元素之后的所有同辈元素
            // $('ul .item').nextAll().css('color', 'red')
            // 选择器的方式选择
            var index = 2;
            $('ul li').eq(index).css('color', 'red')
                // hasClass(class)  检查当前的元素是否含有某个特定的类，如果有，则返回true
            console.log($("div:first").hasClass("main"));
            console.log($("div:last").hasClass("main"));
        });
    </script>
```

重点记住： `parent(),chaildren(),find(),siblings()，eq()`

##  jquery排他思想

想要多选的效果，排它思想:当前元系设查样式，其余的兄弟元素清除样式。

```js
<body>
    <button>按下</button>
    <button>按下</button>
    <button>按下</button>
    <button>按下</button>
    <button>按下</button>
    <button>按下</button>
    <button>按下</button>
    <button>按下</button>
    <script>
        $('button').click(function() {
            $(this).css('background', 'red')
            $(this).siblings('button').css('background', '')
        })
    </script>
</body>
```

## 链式编程

```js
<body>
    <button>1</button>
    <button>2</button>
    <button>3</button>
    <button>4</button>
    <button>5</button>
    <button>6</button>
    <button>7</button>
    <button>8</button>
    <script>
        $(function() {
            $('button').click(function() {
                // $(this).css('color', 'red')
                // $(this).siblings('button').css('color', '')
                //链式编程
                $(this).css('color', 'red').siblings('button').css('color', '')
            })
        })
    </script>
</body>
```

使用链式编程一定注意是哪个对象执行样式

# jquery 样式操作

## 操作css方法

jQuery可以使用css方法来修改简单元素样式;也可以操作类，修改多个样式。

1. 参数只写属性名，则是返回属性值

```js
$(this).css("color");
```

2. 参数是属性名，属性值，逗号分隔，是设置一组样式，属性必须加引号，值如果是数字可以不用跟单位和引号

```js
$(this).css("color","red");
```

3. 参数可以是对象形式，方便设置多组样式。属性名和属性值用冒号隔开，属性可以不用加引号

```js
$(this).css({"color":"white","font-size":"20px"})
```



## 设置类样式方法

作用等同于以前的classList，可以操作类样式，注意操作类里面的参数不要加点。

1. 添加类

```js
$("div").addClass("current");
```

2. 移除类

```js
$("div").removeClass("current");
```

3. 切换类

```js
$("div").toggleClass("current");
```

```js
    <style>
        .current {
            color: red;
            background-color: antiquewhite;
        }
    </style>
</head>

<body>
    <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
    </ul>

    <div class="main">
        <div>A</div>
        <div>B</div>
        <div>C</div>
    </div>
    <script>
        $('ul li').mouseover(function() {
            var index = $(this).index()
            console.log(index);
            $('.main div').eq(index).show().addClass('current').siblings().hide().removeClass('current')
        })
    </script>
</body>
```

## 类操作与calssName区别

原生js中className会覆盖原先里面的类名

jquery里面类操作知识对指定的类进行操作，不影响原先的类名

```js
<body>
    <div class="one two">1</div>
    <script>
        // var one = document.querySelector('.one');
        // one.addEventListener('click', function() {
        //     one.className = 'two';
        // })
        // $('.one').addClass("two");
        $('.one').removeClass('one')
    </script>
</body>

```

# jquery效果

| 显示隐藏 |     滑动      | 淡入淡出     | 自定义动画 |
| -------- | :-----------: | ------------ | ---------- |
| show()   |  slideDown()  | fadeln()     | animate()  |
| hide()   |   slideUp()   | fadeOut()    |            |
| toggle() | slideToggle() | fadeToggle() |            |
|          |               | fadeTo()     |            |

```js
<body>
    <button>1</button>
    <button>2</button>
    <button>3</button>
    <div>A</div>
    <script>
        $(function() {
            // $('button').eq(1).click(function() {
            //     $('div').hide(1000, function() {
            //         alert('yes')
            //     })
            // })
            // $('button').eq(0).click(function() {
            //     $('div').show(1000, function() {
            //         alert('yes')
            //     })
            // })
            $('button').eq(2).click(function() {
                $('div').toggle(1000, function() {})
            })

        })
    </script>
</body>
```

## 动画队列及其停止排队方法

1. **动画或效果排列**

动画或者效果一旦触发就会执行，如果多次触发，就会造成多个动画或者效果排队执行

2. **停止排队**

```js
stop()
```

1. stop()方法用于停止动画或效果
2. 注意： stop（）写到动画或者效果的前面、相当于停止结束上一次的动画

## 自定义动画animate

1. 语法

```js
animate(params,[speed],[easing],[fn])
```

2. 参数

1.  params:想要更改的样式属性，以对象形式传递，必须写。属性名可以不用带引号，如果是复合属性则需要采.取驼峰命名法borderLeft。其余参数都可以省略。
2.  speed :三种预定速度之一的字符串(“slow”,"normal”",or “fast”)或表示动画时长的毫秒数值(如:1000)。
3. easing : (Optional)用来指定切换效果，默认是“swing”，可用参数“linear”
4.  fn:回调函数，在动画完成时执行的函数，每个元素执行一次。

# jquery属性操作

## 设置或获取元素固有属性值prop（）

所谓元素固有属性就是元素本身自带的属性，比如<a>元素里面的href，比如<input>元素里面的type。

1. 获取属性语法 `prop("属性")`
2. 设置属性语法`prop("属性","属性")`

## 设置或获取元素自定义属性值attr()

用户自己给元素添加的属性，我们称为自定义属性。比如给div添加index = “1”。

1. 获取属性语法`attr("属性")` //类似原生getAttribute()

2. 设置属性语法`attr("属性","属性值")` //类似原生setArttribute()

   ## 数据缓存data()

   data()方法可以在指定的元素上存取数据，并不会修改DOM元素结构。一旦页面刷新，之前存放的数据都将被移除。

1. 附加数据语法`data("name","value")` //向被选元素附加数据
2. 获取数据语法`data("name")` //向被选元素获取数据
3. 同时还可以读取HTML5自定义属性data-index，得到的是数字型

## jquery内容文本值

主要针对元素的内容还有表单的值操作

普通元素内容html（）（相当于原生inner HTML）

```js
html() //获取元素的内容
html("内容")//设置元素的内容
```

普通元素文本内容text()(相当与原生innerText)

```js
text()//获取元素的文本内容
text("文本内容")//设置元素的文本内容
```

表单的值val()(相当于原生的value)

## jauery遍历元素

主要是遍历、创建、添加、删除元素 操作

jQuery隐式迭代是对同类元素做了同样的操作。如果想要给同一类元索做不同操作，就需要用到遍历。

**语法1**

```js
$('div').each(function()(index,domEle){xxx;})
```

1.each()方法遍历匹配的每一个元素。主要用DOM处理。each每一个
⒉.里面的回调函数有2个参数: index是每个元素的索引号; demEle是每个DOM元素对象,不是jquery对象
3.所以要想使用jquery方法，需要给这个dom元素转换为jquery对象$(domEle)

```js
<body>
    <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
    </ul>
    <script>
        var color= ['red','blue','pink']
        var sum = 0;
        $(function(){
            $('ul li').each(function(index ,domEle){
                // console.log(index);
                $(domEle).css('color',color[index]);
                // console.log(color[index]);
                sum +=parseInt($(domEle).text())
                // console.log($(domEle).text());
            })
            console.log(sum);
        })
        
    </script>
</body>
```

**语法2**

```js
$.each(object,function(index,element){xxx;})
```

1. $.each()方法可用于遍历任何对象，主要用于数据处理  `数组` `对象`
2. 里面的函数有2个参数:index 是每个元素的索引号element遍历内容

## 创建元素

**语法**

```js\
$("<li></li>");
```

动态创建一个<li>

## 添加元素

内部添加

```js
element.append("内容")
```

把内容放入元素内部最后面，类似原生appendChild

外部添加

```js
element.after("内容")//把内容放入目标元素后面
element.before("内容")//把内容放入目标元素前面
```

1. 内部添加元素，生成之后，他们是父子关系
2. 外部添加元素，生成之后，他们是兄弟关系

## 删除元素

```js
element.remove()//删除匹配的元素(本身)
element.empty()//删除匹配的元素集合中所有的子节点
element.html("")//清空匹配的元素内容
```

## jquery尺寸

| 语法                               | 用法                                                |
| ---------------------------------- | --------------------------------------------------- |
| width()/height()                   | 取得匹配元素宽度和高度值  只算 width /height        |
| innerWidth()/innerHieght()         | 取得匹配元素宽度和高度值 包含padding                |
| outerWidth()/outerHeight()         | 取得匹配元素宽度和高度值  包含padding border        |
| outerWidth(true)/outerHeight(true) | 取得匹配元素宽度和高度值  包含padding border margin |

* 以上参数为空，则是获取相应值，返回的是数字型
* 如果参数为数字，则是修改相应值。
* 参数可以不必写单位。

```js
<style>
    div{
        width: 100px;
        height: 100px;
        background-color: aqua;
        padding: 10px;
        border: 15px solid red;
        margin: 20px;
    }
</style>
<body>
    <div></div>
    <script>
        $(function(){
            console.log($('div').width());
            console.log($('div').innerWidth());
            console.log($('div').outerWidth());
            console.log($('div').outerWidth(true));
        })
    </script>
</body>
```

## jquery位置

位置主要有三个: offset0. position()、scrollTop()/scrollLeft()

1. **offset()设置或获取元素偏移**
   1. offset()方法设置或返回被选元素相对于<u>文档</u>的偏移坐标，跟父级没有关系。
   2. 该方法有2个属性left、top。offset().top用于获取距离文档顶部的距离，offset().left用于获取距离文档左侧的距离。
   3. 可以设置元素的偏移:offset({ top: 10, left: 30 );

2. **position()获取元素偏移**
   1. position()方法用于返回被选元素相对于带有定位的父级偏移坐标，如果父级都没有定位，则以文档为准。

3. scrollTop() / scrollLeft()设置或获取元素被卷去的头部和左侧

   1. scrollop()方法设置或返回被达元素被卷去的头部

   
