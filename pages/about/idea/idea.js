// pages/about/idea/idea.js
var app = getApp();
Page({
  data: {
    email:'',
    content:'',
    sessionId:''
  },
  onLoad:function(){
    wx.getStorage({
      key: 'sessionId',
      success: (res)=>{
        this.setData({
          sessionId:res.data
        })
      }
    })
  },
  showTopTips:function(){
    wx.request({
      url: app.globalData.url + 'feedback', 
      method: "POST",
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      data:{
        email:this.data.email,
        content:this.data.content,
        sessionId: this.data.sessionId
      },
      success:function(res){
        console.log(res)
        if(res.data.success){
          wx.showToast({
            title: '反馈成功',
            icon: 'success',
            duration: 1500
          })
        }else{
          wx.showToast({
            title: '反馈失败',
            icon: 'loading',
            duration: 1500
          })
        }
      }
    })
  },
  emailInput: function (e) {
    this.setData({
      email: e.detail.value
    })
  },
  contentInput:function(e){
    this.setData({
      contents: e.detail.value
    })
  }
})