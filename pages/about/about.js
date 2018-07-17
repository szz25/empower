Page({
  data: {
    // hidden: false
  },
  question: function (e) {
    var url = "../about/question/question";
    wx.navigateTo({
      url: url
    })
  },
  aboutUs: function (e) {
    var url = "../about/aboutUs/aboutUs";
    wx.navigateTo({
      url: url
    })
  },
  idea: function (e) {
    var url = "../about/idea/idea";
    wx.navigateTo({
      url: url
    })
  },
  // 事件处理函数
  

  onLoad: function (options) {
   
  }
})
