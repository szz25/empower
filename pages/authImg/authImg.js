// pages/authImg/authImg.js
Page({
  data: {
    authImg:'',
    value:''
  },
  onReady: function () {
    this.setData({
      authImg: wx.getStorageSync('authImg')
    })
  }, 
  takeGellay: function () {
    wx.chooseImage({
      count: 2, // 默认9
      sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
      sourceType: ['camera'], // 可以指定来源是相册还是相机，默认二者都有
      success: (res)=>{
        // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
        var tempFilePaths = res.tempFilePaths;
        console.log('kkk' + tempFilePaths)
        wx.setStorageSync('authImg', res.tempFilePaths)
        this.setData({
          authImg: wx.getStorageSync('authImg')
        })
      }
    })

  },
  next:function(){
    wx.navigateTo({
      url: '../lable/lable',
    })
  },
  inp:function(e){
    this.setData({
      value: e.detail.value
    })
  }
})