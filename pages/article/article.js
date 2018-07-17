// pages/article.js
var app = getApp();
Page({
  data: {
    title:'',
    content:'',
    sessionId:''
  },
  onLoad:function(){
    wx.getStorage({
      key: 'sessionId',
      success: (res)=> {
        console.log(res.data)
        this.setData({
          sessionId:res.data
        })
      },
    })
  },
  //获取用户输入的标题
  userTitleInput: function (e) {
    this.setData({
      title: e.detail.value
    })
    wx.setStorageSync('title', this.data.title)
  },
  //获取用户输入的内容
  userContent: function (e) {
    this.setData({
      content: e.detail.value,
    })
    wx.setStorageSync('content', this.data.content)
  },
  //预览
  preview:function(e){
    var url = '../preview/preview';
    wx.navigateTo({
      url: url
    })
  },
  deposit:function(){
    wx.request({
      url: app.globalData.url + 'prove',
      method: "POST",
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      data: {
        tid:3,
        content:this.data.content,
        title:this.data.title,
        sessionId: this.data.sessionId
      },
      success:function(res){
        console.log(res)
        if(res.data.success){
          wx.showToast({
            title: '存稿成功',
            icon: 'success',
            duration: 1500
          })
        }else{
          wx.showToast({
            title: "存稿失败",
            icon: 'loading',
            duration: 1500
          })
        }
      }
    })
  },
  empowe:function(){
    wx.redirectTo({
      url: '../lable/lable',
    })
  }
})