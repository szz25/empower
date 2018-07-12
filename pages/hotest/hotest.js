Page({
  data: {
    tabs: ["文章（20）", "图片（10）", "草稿（1）"],
    activeIndex: 0,
    sliderOffset: 0,
    sliderLeft: 0
  },
  onLoad: function () {
    var that = this;
    wx.getSystemInfo({
      success: function (res) {
        that.setData({
          sliderLeft: (res.windowWidth / that.data.tabs.length - res.sliderWidth) / 2,
          sliderOffset: res.windowWidth / that.data.tabs.length * that.data.activeIndex
        });
      }
    });
  },
  tabClick: function (e) {
    this.setData({
      sliderOffset: e.currentTarget.offsetLeft,
      activeIndex: e.currentTarget.id
    });
  },
  wen:function(){
    wx.navigateTo({
      url: '../wenArticle/wenArticle',
    })
  },
  tu: function () {
    wx.navigateTo({
      url: '../librarys/library',
    })
  }
})
