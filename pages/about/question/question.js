// pages/about/question/question.js
var app = getApp();
Page({
  data: {
    data:[]
  },
  onLoad: function (options) {
    let that = this;
    wx.request({
      url: app.globalData.url + 'problem',
      success:function(res){
        console.log(res)
        that.setData({
          data: res.data.data
        })
      }
    })
  }
})