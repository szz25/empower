// pages/success/success.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    bool:false,
    data:'',
    time:''
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      data: JSON.parse(options.data)
    })
    this.setData({
      time: this.data.data.date.substring(0, 10)
    })
  },
  more:function(){
    this.setData({
      bool:true
    })
  },
  //继续认证
  continue:function(){
    wx.reLaunch({
      url: '../latest/latest',
    })
  },
  //一键同步
  synchronization:function(){
    wx.navigateTo({
      url: '../select/select',
    })
  },
  library:function(){
    wx.navigateTo({
      url: '../hotest/hotest',
    })
  }
})