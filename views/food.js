// pages/food/food.js
var WxParse = require('../../wxParse/wxParse.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      console.log(options)
      this.requestData(options.id)
  },
  requestData(id){
    var that=this;
    var api ="http://www.phonegap100.com/appapi.php?a=getPortalArticle&aid="+id
    wx.request({
      url: api, // 仅为示例，并非真实的接口地址
      header: {
        'content-type': 'application/json' // 默认值
      },
      success(res) {
        console.log(res.data.result[0]);
        var data = res.data.result[0]

        var article = data.content;
        WxParse.wxParse('article', 'html', article, that, 5);

        that.setData({
          list:data
        })
      }
     
    })
  }

})