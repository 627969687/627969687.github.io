---
title: UIPickerView三级联动
date: 2017-11-08  10:21:34
tags:
- iOS
- OC
- UIPickerView
categories:
- iOS
- OC
- 控件
- UIPickerView
keywords:
description:
---
![](images/2017-11-08-UIPickerView三级联动/WX20171129-114238.png)
<!-- more -->
前几天朋友要求帮忙使用`OC`写一个<省-市-区>的`UIPickerView`控件，写完之后这里给大家讲一下思路和遇到的问题.....

[数据](files/2017-11-08-UIPickerView三级联动/files.zip)是由朋友提供，这里已经把数据保存到本地，请参考《[macOS环境生成json假数据](http://tk_jacky.gitee.io/macOS%E7%8E%AF%E5%A2%83%E7%94%9F%E6%88%90json%E5%81%87%E6%95%B0%E6%8D%AE.html)》制作假数据

# 数据
![](images/2017-11-08-UIPickerView三级联动/WX20171202-115530.png)
![](images/2017-11-08-UIPickerView三级联动/WX20171202-115530.png)

观察数据格式，我们可以发现省、市、区的名字由`name`这个键值对控制，每个省/市下有多少个市/区由`children`控制

获取数据过程中，我们可能会遇到以下问题：

- 初次运行网络问题
- text/html格式问题
- null数据处理

关于数据的处理，我们使用了[AFNetworking](https://github.com/AFNetworking/AFNetworking)和[MJExtension](https://github.com/CoderMJLee/MJExtension)框架

# 具体实现
定义省、市、区的数据源

```objc
@property(nonatomic,strong)NSArray<ProvinceModel *> *provinceArr; // 省
@property(nonatomic,strong)NSArray<CityModel *> *cityArr; // 市
@property(nonatomic,strong)NSArray<AreaModel *> *areaArr; // 区
```

省、市、区初始加载的数据源为第一个省的第一个市的第一个区

```objc
#pragma mark - 加载数据
- (void)loadData {
    AFHTTPSessionManager *mgr = [AFHTTPSessionManager js_mgr];
    // 参考假数据实现《http://192.168.11.128/getArea.html》
    [mgr GET:@"http://192.168.11.128/getArea.html" parameters:nil progress:nil success:^(NSURLSessionDataTask * _Nonnull task, NSDictionary *result) {
        // 省
        self.provinceArr = [ProvinceModel mj_objectArrayWithKeyValuesArray:result[@"resultInfo"]];
        // 市
        self.cityArr = self.provinceArr.firstObject.children;
        // 区
        self.areaArr = self.cityArr.firstObject.children;
        // 刷新
        [self.pickerView reloadAllComponents];
        // 停止网络监听
        [[AFNetworkReachabilityManager sharedManager] stopMonitoring];
    } failure:^(NSURLSessionDataTask * _Nullable task, NSError * _Nonnull error) {
        [[AFNetworkReachabilityManager sharedManager] stopMonitoring];
    }];
}
```

设置数据显示

```objc
// 列数
- (NSInteger)numberOfComponentsInPickerView:(UIPickerView *)pickerView {
    return 3;
}
// 每列有多少行
- (NSInteger)pickerView:(UIPickerView *)pickerView numberOfRowsInComponent:(NSInteger)component {
    NSInteger ret = 0;
    switch (component) {
        case 0: // 省
            ret = self.provinceArr.count;
            break;
        case 1: // 市
            ret = self.cityArr.count;
            break;
        case 2: // 区
            ret = self.areaArr.count;
            break;
    }
    return ret;
}
// 返回每一行的内容
- (NSString *)pickerView:(UIPickerView *)pickerView titleForRow:(NSInteger)row forComponent:(NSInteger)component {
    NSString *ret = @"";
    switch (component) {
        case 0:
            ret = self.provinceArr[row].name;
            break;
        case 1:
            ret = self.cityArr[row].name;
            break;
        case 2:
            ret = self.areaArr[row].name;
            break;
    }
    return ret;
}
```

选中哪一个省都要根据当前选择的第几行去更新市的数据源，同理更新区的数据源

```objc
// 滑动或点击选择，确认pickerView选中结果
- (void)pickerView:(UIPickerView *)pickerView didSelectRow:(NSInteger)row inComponent:(NSInteger)component {
    switch (component) {
        case 0: // 省
            self.cityArr = self.provinceArr[row].children;
            self.areaArr = self.cityArr.firstObject.children;
            
            [self.pickerView reloadAllComponents];
            [self.pickerView selectRow:0 inComponent:1 animated:false];
            [self.pickerView selectRow:0 inComponent:2 animated:false];
            break;
        case 1: // 市
            self.areaArr = self.cityArr[row].children;
            
            [self.pickerView reloadAllComponents];
            [self.pickerView selectRow:0 inComponent:2 animated:false];
            break;
        case 2: // 区
            break;
    }
}
```

# 参考文献
原生 | 资料
--------- | -------------
UIPickerView | [UIPickerView的使用(一)](http://www.cnblogs.com/jukaiit/p/5213499.html)

第三方库 | 资料
--------- | -------------
AFNetworking | [AFNetworking使用]()
MJExtension | [MJExtension官方文档](https://github.com/CoderMJLee/MJExtension)

其他 | 资料
--------- | -------------
假数据 | [macOS环境生成json假数据](http://tk_jacky.gitee.io/macOS%E7%8E%AF%E5%A2%83%E7%94%9F%E6%88%90json%E5%81%87%E6%95%B0%E6%8D%AE.html)

<br>
[demo下载](https://github.com/627969687/UIPickerView_three_level)

