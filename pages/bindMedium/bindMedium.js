// pages/bindMedium/bindMedium.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    value:'微博',
    bool:true,
    url:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    if(options.url){
      this.setData({
        url:options.url
      })
    }
    if (options.value){
      this.setData({
        value: options.value
      })
    } 
  },
  login:function(){
    this.setData({
      bool: false
    })
  },
  lian:function(){
    wx.redirectTo({
      url: this.data.url+'?value='+this.data.value,
    })
  }
})