# GraalVM

ES4X 使用的是Graalvm，但同样的代码可用 Java8，9，10 及 OpenJ9 **解释执行**。

使用 JDK >=11 (支持 JVMCI) 和 GraalVM **编译执行**。

::: tip
In order words, please use Java >= 11 or GraalVM.
:::

推荐使用GraalJS，因其提供支持 ES版本 >= 6的JS 及提供开箱即用的generators，promises等工具。

## Differences to Nashorn

不同于 `Nachorn`，在 `GraalJS` 中与Java交互需**严格**遵循Java中类/方法的名称。
例如获取类的属性时，必需使用getter和setter。举个例子：

```java
class Hello {
  private String name;

  public String getName() {
    return name;
  }

  public void setName(String name) {
    this.name = name;
  }
}
```

当您在Graal中使用Java对象时，下面的代码将是无效的：

```js
var hello = new Hello();
// get the name
var name = hello.name; // FAIL
// set the name
hello.name = 'Paulo';  // FAIL
```

在Graal中您应该这样写：

```js
var hello = new Hello();
// get the name
var name = hello.getName();
// set the name
hello.setName('Paulo');
```

## Threading

GraalJS is very strict with only a single thread on the JS context at a time. When working with only Asynchronous Vert.x
APIs this shall not be an issue. However other libraries can cause problems. To avoid this limitation, it is advised to
use the `Worker` API or the `EventBus`.

::: warning
GraalJS 不允许多线程访问同一个脚本上下文。如果您需要多线程，请移步[Worker API](./worker).
:::

## Native Images

目前我们还不能生成ES4X的native镜像，这是因为AOT编译器做静态分析时无法触及那些被脚本调用的java代码（也就没办法获取到java类），
此外，编译器目前还不支持运行时的JVM互操作。

这方面的工作正在进行中，相信在不久的将来就会与大家见面。

