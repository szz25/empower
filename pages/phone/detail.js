// pages/phone/detail.js
var app = getApp();

Page({
  data: {
    phone:"",
    code:"",
    key:''
  },
  nextStep: function (e) {
    var url = '../auth/auth';
      wx.request({
        url: app.globalData.url +'user/register',
        method:"POST",
        header:{
          'content-type': 'application/x-www-form-urlencoded'
        },
        data:{
          phone:this.data.phone,
          code:this.data.code
        },
        success:(res)=>{
          if(res.data.success){
            console.log(res)
            wx.setStorage({
              key: 'sessionId',
              data: res.data.data,
            })
            wx.setStorage({
              key: 'phone',
              data: this.data.phone,
            })
            wx.navigateTo({
              url: url
            })
          }else{
            wx.showToast({
              title: JSON.stringify(res.data.success),
              icon: 'loading',
              duration: 1500
            })
          }
        }
      })
  },
  //获取用户输入的标题
  userPhoneInput: function (e) {
    this.setData({
      phone: e.detail.value
    })
    // wx.setStorageSync('title', this.data.title)
  },
  userCodeInput: function (e) {
    this.setData({
      code: e.detail.value
    })
    // wx.setStorageSync('title', this.data.title)
  },
  code:function(){
    let myreg = /^(13[0-9]|14[579]|15[0-3,5-9]|16[6]|17[0135678]|18[0-9]|19[89])\d{8}$/;
    let that = this;
    if (this.data.phone) {
      if (!myreg.test(this.data.phone)) {
        wx.showToast({
          title: '手机号有误！',
          icon: 'loading',
          duration: 1500
        })
        return false;
      } else {
        wx.request({
          url: app.globalData.url + 'utils/checkCode/'+this.data.phone,
          success: function (res) {
            if(res.data.success){
              that.setData({
                key:res.data.data
              })
              wx.showToast({
                title: res.data.data,
                icon: 'loading',
                duration: 1500
              })
            }
          }
        })
      }
    } else {
      wx.showToast({
        title: '手机号为空',
        icon: 'loading',
        duration: 1500
      })
      return false;
    }
  }
})