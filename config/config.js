module.exports = {
  wx_config: {
    aotu: {
      token: 'tomWeiXinCourse',
      appid: 'wx5286fb575f081a6b',
      secret: '657e9d50a912af81c26f56c50e5855d5',
      cached: {}
    },
    menu: {
      'button': [{
        "name": "关于我",
        "sub_button": [{
          "type": "view",
          "name": "博客",
          "url": "http://www.cnblogs.com/tom-zhu",
          "sub_button": []
        }]
      }, {
        "name": "生活工具",
        "sub_button": [{
          "type": "view",
          "name": "天气",
          "url": "http://www.baidu.com",
          "sub_button": []
        }]
      }, {
        "name": "开发小工具",
        "sub_button": [{
          "type": "view",
          "name": "扫一扫",
          "url": "http://www.baidu.com",
          "sub_button": []
        }]
      }]
    },
    tq: {
      "ipURL": "http://whois.pconline.com.cn/ipJson.jsp?json=true",
      "ipToCityNameURL": "http://apis.baidu.com/apistore/iplookupservice/iplookup?ip=",
      "ipToCityNameApiKey": "7328474baf90532437b4becdc5f65706",
      'cityUrl': 'http://apistore.baidu.com/microservice/cityinfo?cityname=',
      'weatherApikey': '7328474baf90532437b4becdc5f65706',
      'weatherUrl': 'http://apis.baidu.com/apistore/weatherservice/recentweathers?cityid='
    }
  }
};
