// pages/auth/auth.js
var app = getApp();

function imageUrl(url){
  wx.request({
    url: app.globalData.url + 'utils/img/upload',
    method: "POST",
    header: {
      'content-type': 'multipart/form-data'
    },
    data: {
      file: url
    },
    success: (res) => {
      return res.data.data
    }
  })
}
Page({
  data: {
    files: [],
    image1:'',
    image2:'',
    name:'',
    postbox:"",
    idNum:'',
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
  chooseImage: function (e) {
    var that = this;
    wx.chooseImage({
      count: 1, // 默认9
      sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
      sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
      success: function (res) {
        // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
        that.setData({
          files: that.data.files.concat(res.tempFilePaths)
        });
        // this.upload(this,res.tempFilePaths);//上传接口
      }
    })
  },
   upload(page, path) {
    wx.showToast({
      icon: "loading",
      title: "正在上传"
    }),
    wx.uploadFile({
      url: constant.SERVER_URL + "/FileUploadServlet",
      filePath: path[0],
      name: 'file',
      header: { "Content-Type": "multipart/form-data" },
      formData: {
        //和服务器约定的token, 一般也可以放在header中
        'session_token': wx.getStorageSync('session_token')
      },
      success: function (res) {
        console.log(res);
        if (res.statusCode != 200) {
          wx.showModal({
            title: '提示',
            content: '上传失败',
            showCancel: false
          })
          return;
        }
        var data = res.data
        page.setData({  //上传成功修改显示头像
          src: path[0]
        })
      },
      fail: function (e) {
        console.log(e);
        wx.showModal({
          title: '提示',
          content: '上传失败',
          showCancel: false
        })
      },
      complete: function () {
        wx.hideToast();  //隐藏Toast
      }
    })
  },
  previewImage: function (e) {
    wx.previewImage({
      current: e.currentTarget.id, // 当前显示图片的http链接
      urls: this.data.files // 需要预览的图片http链接列表
    })
  },
  sure: function(e) {
    var url = '../authSuccess/authSuccess';
    this.setData({
      image1: '/upload/76b8ea761af28b4e08d23e9e0679cf87.png'
    })
    this.setData({
      image2: '/upload/76b8ea761af28b4e08d23e9e0679cf87.png'
    })
    wx.request({
      url: app.globalData.url+'authentication',
      method: "POST",
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      data:{
        name:this.data.name,
        number: this.data.idNum,
        picFront: this.data.image1,
        picBack: this.data.image2,
        sessionId: this.data.sessionId
      },
      success:function(res){
        if(res.data.success){
          wx.navigateTo({
            url: url
          })
        }
      }
    })
  },
  //获取姓名
  getName: function (e) {
    this.setData({
      name: e.detail.value
    })
  },
  //获取身份证号
  getIdNum: function (e) {
    this.setData({
      idNum: e.detail.value
    })
  },
  //获取邮箱
  getPostbox: function (e) {
    this.setData({
      postbox: e.detail.value
    })
  }
})