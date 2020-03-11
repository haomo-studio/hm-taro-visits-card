> 官网: [https://haomo-tech.com](https://haomo-tech.com)

> 作者: 毫末科技

> 邮箱: hxg@haomo-studio.com

## 预览

![预览图片](http://downloads.haomo-tech.com/taro/{{component}}.png)

[在线效果预览](http://template.taro.haomo-tech.com/#/pages/test-component/{{component}})

更多毫末科技的Taro跨端模板，请见[毫末科技Taro跨端模板](https://haomo-tech.com/sale.html)

## 技术支持

* [Taro物料市场](https://taro-ext.jd.com/plugin/view/)

* [npm包](https://www.npmjs.com/package/{{projectName}})

* [github地址](https://github.com/haomo-studio/{{projectName}})

* [gitee地址](https://gitee.com/haomo/{{projectName}})

毫末科技将长期迭代本组件。需要技术支持，请进钉钉群：

<img width="250" src="http://downloads.haomo-tech.com/毫末Taro组件技术支持.jpg">

## 概述

毫末Taro{{componentName}}组件。支持H5/小程序(微信、支付宝、头条、百度、QQ)/App；组件可自适应各种屏幕大小的手机。

## 使用

```jsx
import Taro, { Component } from '@tarojs/taro'
import { View, Text, Button } from '@tarojs/components'

import {{componentUpperCamelCase}} from '../src/components/hm/{{component}}/index.jsx'

export default class Index extends Component {

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  config = {
    navigationBarTitleText: '毫末Taro{{componentName}}组件'
  }

  render () {
    return (
      <View className='index'>
        <{{componentUpperCamelCase}}/>
      </View>
    )
  }
}
```

## 属性说明

| 属性名        | 类型     | 默认值 | 说明                                                                       |
|-----------   |---------|--------|----------------------------------------------------------------------------|
| options        | Object  | -      | 卡片属性                                                                   |

options对象各个属性说明如下：

| 属性名        | 类型     | 默认值 | 说明                                                                       |
|-----------   |---------|--------|----------------------------------------------------------------------------|
| title        | String  | -      | 标题文字                                                                   |
| img          | String  | -  | 新闻图片                                                     |

## 事件说明

| 事件称名   | 事件说明           | 返回参数 |
|----------|--------------------|----------|
| @click   | 点击 Card 触发事件 | -        |

## 更新日志

### 0.0.1(2020-03-07)

* 完成第一个版本
