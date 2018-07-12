// pages/article.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    title:'',
    content:''
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
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },
  empowe:function(){
    wx.redirectTo({
      url: '../empowe/empowe',
    })
  }
})