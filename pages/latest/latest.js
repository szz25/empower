// latest.js
Page({
  data: {
    title: '最新话题',
    latest: [],
    hidden: false
  },
  openConfirm: function() {
    wx.showModal({
      title: '请先进行身份认证',
      content: '绑定手机后并进行身份认证后方可进行作品认证',
      confirmText: "确定",
      cancelText: "取消",
      success: function(res) {
        console.log(res);
        if (res.confirm) {
            //保留当前页面，跳转到应用内的某个页面（最多打开5个页面，之后按钮就没有响应的）
          wx.navigateTo({ 
            url: "../phone/detail"
          })
        } else {
          console.log('用户点击辅助操作')
        }
      }
    });
  },
  images: function(e) {
    var  url = "../image/image"
    wx.navigateTo({
      url: url
    })
  },
  onLoad: function() {
    
  },
  lead:function(){
    wx.navigateTo({
      url: '../lead/lead',
    })
  }
})