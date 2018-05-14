---
title: Python-mac多python版本
date: 2018-03-28 16:02:08
tags:
- Python3
- Python2
- mac
- shell
categories:
- Python
---

{% asset_img demo.png %}
<!-- more -->
# 运行环境

环境 | 描述
--------- | -------------
系统 | `macOS 10.13`
命令行 | `Oh My Zsh`
工具 | `homebrew` <br>`pip`<br>`pyenv`<br>`virtualenv`<br>`Virtaulenvwrapper`<br>

---

# 配置环境
## 安装`homebrew`
```shell
$ /usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
```

## 安装`zsh`
[Mac下安装zsh（Oh My ZSH）的shell，替代原有的bash](https://www.cnblogs.com/EasonJim/p/6283247.html)

## 安装`pip`
[macOS安装pip](https://www.jianshu.com/p/3111c42483df)

## 安装`pyenv`
```shell
$ brew install pyenv
```

.zshrc配置文件添加配置

```javascript
if which pyenv > /dev/null; then eval "$(pyenv init -)"; fi
export PYENV_ROOT=/usr/local/var/pyenv
```

## 安装`virtualenv&&virtualenvwrapper`
```shell
$ pip install virtualenv
$ pip install virtualenvwrapper
$ mkdir $HOME/.virtualenvs
```

.zshrc配置文件添加配置

```javascript
export WORKON_HOME=$HOME/.virtualenvs
source /usr/local/bin/virtualenvwrapper.sh
```

重新加载配置文件

```shell
$ source ~/.zshrc
```

## 搭建和使用不同的环境
创建虚拟环境并指定版本

```python
# 安装Python3.6.4
$ pyenv install 3.6.4
$ pyenv rehash
# 切换到刚安装的版本
$ pyenv local 3.6.4
$ source .zshrc
# 验证版本
$ python -V
# 在新的python环境里安装virtualenv&&virtualenvwrapper
$ pip install virtualenv
$ pip install virtualenvwrapper
$ source .zshrc
# 创建开发环境
$ mkvirtualenv py3dev
# 创建完开发环境，即可退出
$ deactivate
$ pyenv local --unset 3.6.4
$ source .zshrc
```

同理安装其他python环境也是一样的操作

使用方法

```bash
# 使用python 3.6.4
$ workon py3dev
# 切换其他版本记得退出当前虚拟环境
$ deactivate
```

