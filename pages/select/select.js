// pages/select/select.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    items: [
      { name: 'wb', value: '微博', bool: false, checked: false },
      { name: 'tt', value: '头条', bool: false, checked: false },
      { name: 'zh', value: '知乎', bool: false, checked: false },
      { name: 'wx', value: '微信', bool: false, checked: false }
    ]
  },
  onLoad: function (options) {
    let that = this;
    wx.getStorage({
      key: 'value',
      success:function (res) {
        if (options.value) {
          wx.getStorage({
            key: 'value',
            success: (res) => {
              let data = typeof res.data == "string" ? JSON.parse(res.data) : res.data;
              data.map((v, i) => {
                if (v.value == options.value) {
                  v.checked = true
                  v.bool = true
                }
              })
              that.setData({
                items: data
              })
              wx.setStorage({
                key: 'value',
                data: JSON.stringify(data)
              })
            },
          })
        } else {
          that.setData({
            items:typeof res.data == "string"?JSON.parse(res.data):res.data
          })
        }
      },
      fail:function(res){
        console.log(res)
        wx.setStorage({
          key: 'value',
          data: JSON.stringify(that.data.items)
        })
      }
    })
  },
  checkboxChange: function (e) {
    this.data.items.map((v,i)=>{
      if (e.detail.value.indexOf(v.name)!==-1){
        v.checked = true
      }else{
        v.checked = false
      }
    })
    this.setData({
      items: this.data.items
    })
  },
  bind:function(e){
    wx.navigateTo({
      url: '../bindMedium/bindMedium?value=' + e.currentTarget.dataset.value + '&url=../select/select',
    })
  },
  publish:function(){
    let arr = [];
    this.data.items.map((v)=>{
      if(v.checked){
        arr.push(v.value)
      }
    })
    wx.navigateTo({
      url: '../publishSuccess/publishSuccess?value=' + JSON.stringify(arr),
    })
  }
})