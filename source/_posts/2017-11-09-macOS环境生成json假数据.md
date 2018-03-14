---
title: macOS环境生成json假数据 
date: 2017-11-07 09:37:41
tags: 
- mac
- json
- php
categories: 
- mac
---

&emsp;&emsp;日常开发中，难免遇到客户端开发进度比后台进度快的情况。为避免工期延误，我们往往都要制作假数据进行UI测试。

&emsp;&emsp;假数据的制作推荐的两种方式，一种是`apache`服务器与`json`文件，另一种就是`apache`服务器与`php`文件。
<!-- more -->
# apache+json
开启apache服务器

```shell
sudo apachectl start
```

在apache目录下，创建JSON文件

```shell
cd /Library/WebServer/Documents
sudo touch test.json
```

编辑JSON文件

```json
{"data":[
            {"title":"title1",
            "picUrl":"pic1"},
            {"title":"titile2",
            "picUrl":"pic2"}
        ]
}
```

网页输入<http://localhost/test.json>查看
`localhost`相当于本机IP地址，如需提供给同事测试需要提供完整的IP地址
{% asset_img WX20171115-180312.png %}

# apache+php
开启apache服务器

```shell
sudo apachectl start
```

开启PHP
前往/etc/apache2/ 找到httpd.conf文件，找到以下代码去掉`#`号

```
#LoadModule php5_module libexec/apache2/libphp5.so
```

在apache目录下，创建php文件

```shell
cd /Library/WebServer/Documents
sudo touch test.php
```

编辑php文件

```php
$jsondata = array('code'=>'1',
                  'msg'=>'success',
                  'info'=>array(array('title'=>'title1',
                                      'pic'=>'pic1'),
                                array('title'=>'title2',
                                      'pic'=>'pic2')));
echo json_encode($jsondata);
```

网页输入<http://localhost/test.php>查看
{% asset_img WX20171115-192217.png %}

# xcode调试
成功创建json文件或php文件后，将其url直接进行网络请求

```objc
// http://localhost/test.php 或者 http://localhost/test.json
NSURL *url = [NSURL URLWithString:@"http://localhost/test.php"];
NSURLSession *session = [NSURLSession sharedSession];
NSURLSessionDataTask *dataTask = [session dataTaskWithURL:url completionHandler:^(NSData * _Nullable data, NSURLResponse * _Nullable response, NSError * _Nullable error) {
    NSDictionary *result = [NSJSONSerialization JSONObjectWithData:data options:kNilOptions error:nil];
    NSLog(@"%@",result);
}];
    
[dataTask resume];
```

# apache操作
开启

```shell
sudo apachectl start
```

关闭

```shell
sudo apachectl stop
```

重启

```shell
sudo apachectl restart
```

查看版本号

```shell
sudo apachectl -v
```



