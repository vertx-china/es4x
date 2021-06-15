# 安装

假设你已经安装了 [Node.js](https://nodejs.org/) ，同时你需要一个有效的JVM。你需要安装 ([Java](https://adoptopenjdk.net/) 或[GraalVM](http://www.graalvm.org/)) 中的其中一个。

```bash
$ java -version
openjdk version "1.8.0_265"
OpenJDK Runtime Environment (build 1.8.0_265-8u265-b01-0ubuntu2~20.04-b01)
OpenJDK 64-Bit Server VM (build 25.265-b01, mixed mode)

If you see a similar output, this means your system currently has `java` **8**, which is not the best option as it will
not benefit from the high performance engine `es4x` uses.

## GraalVM/OpenJDK

In order to have a compatible runtime it is recommended to install a higher runtime (for example using
[jabba](https://github.com/shyiko/jabba)). For instructions on installing `jabba`, please refer to the official
[manual](https://github.com/shyiko/jabba#installation).

::: tip
Using `jabba` you can install `openjdk 11` and/or `graalvm` (once) as:

```bash
jabba install openjdk@1.11.0
jabba install graalvm@20.2.0
```

And later switch to the desired runtime by executing:

```bash
jabba use openjdk@1.11 # OR jabba use graalvm@20.2
```
:::

Once a valid JVM is installed you can optionally install the project management utilities development tool.

## Project Tools

```bash
npm install -g @es4x/create # OR yarn global add @es4x/create
```

The package will install a `es4x` command globally that can be used to create projects and perform other tasks. To know
more about the tool:

```bash
es4x --help
```

### Using NPX

The same package can be used as a one-shot operation with `npx`. In this case refer to it as:

```bash
npx @es4x/create --help
```

## 操作系统打包

当在有包数量限制的持续集成环境中工作时，可以解压预先打包好的tar/zip文件来安装包管理器（pm）。

```bash
ES4X='0.9.0' \
  curl -sL \
  https://github.com/reactiverse/es4x/releases/download/$ES4X/es4x-pm-$ES4X-bin.tar.gz \
  | tar zx --strip-components=1 -C /usr/local
```

对于Windows操作系统可以用`zip`文件来取而代之用以做同样的事情。

::: tip
Using `npm` should be the preferred way to install as it allows easy upgrades and should be portable across different
*Operating Systems*.
:::


## 验证

此时在你的path里面应该存在一个`es4x`命令，你可以按如下指示进行测试：

```
$ es4x --help

Usage: java -jar /usr/local/bin/es4x-bin.jar [COMMAND] [OPTIONS]
            [arg...]

Commands:
    bare         Creates a bare instance of vert.x.
    dockerfile   Creates a generic Dockerfile for building and deploying the
                 current project.
    project         Initializes the 'package.json' to work with ES4X.
    install      Installs required jars from maven to 'node_modules'.
    list         List vert.x applications
    run          Runs a JS script called <main-verticle> in its own instance of
                 vert.x.
    start        Start a vert.x application in background
    stop         Stop a vert.x application
    version      Displays the version.

Run 'java -jar /usr/local/bin/es4x-bin.jar COMMAND --help' for
more information on a command.
```

::: warning
为了达到最佳的实验效果和性能表现，请安装[GraalVM](https://www.graalvm.org)。在使用标准JDK时，小于Java11的版本将在`解释`模式（`Interpreted` mode）下运行，这种模式不利于性能提升也不适合用于生产环境。
:::
