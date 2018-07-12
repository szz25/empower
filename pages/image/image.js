Page({

  takeGellay: function() {
    wx.chooseImage({
      count: 2, // 默认9
      sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
      sourceType: ['camera'], // 可以指定来源是相册还是相机，默认二者都有
      success: function (res) {
        // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
        var tempFilePaths = res.tempFilePaths;
        console.log('kkk' + tempFilePaths)
        wx.setStorageSync('authImg', res.tempFilePaths)
        wx.navigateTo({
          url: '../authImg/authImg'
        })
      }
    })

  },
  onLoad() {
    this.ctx = wx.createCameraContext()
  },
  takePhoto() {
    this.ctx.takePhoto({
      quality: 'high',
      success: (res) => {
        this.setData({
          src: res.tempImagePath
        })
        console.log('pp' + res.tempImagePath)
        wx.saveImageToPhotosAlbum('res.tempImagePath');
        // this.setData({
        //   current: res.tempImagePath
        // })
        // this.setData({
        //   urls: res.tempImagePath
        // })
      }
    })
  },
  // startRecord() {
  //   this.ctx.startRecord({
  //     success: (res) => {
  //       console.log('startRecord')
  //     }
  //   })
  // },
  // stopRecord() {
  //   this.ctx.stopRecord({
  //     success: (res) => {
  //       this.setData({
  //         src: res.tempThumbPath,
  //         videoSrc: res.tempVideoPath
  //       })
  //     }
  //   })
  // },
  error(e) {
    console.log(e.detail)
  }
})