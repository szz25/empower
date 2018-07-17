// pages/lable/lable.js
Page({
  data: {
    checkboxItems: [
      { name: '摄影', value: '摄影', checked: true },
      { name: '旅行', value: '旅行' },
      { name: '历史', value: '历史' },
      { name: '新闻', value: '新闻' },
      { name: '比特币', value: '比特币' },
      { name: '区块链', value: '区块链' },
      { name: '以太坊', value: '以太坊' },
      { name: 'PST', value: 'PST' },
      { name: '音乐', value: '音乐' },
      { name: '笑话', value: '笑话' },
      { name: '游戏', value: '游戏' }
    ],
    item:[]
  },
  next:function(){
    wx.navigateTo({
      url: '../empowe/empowe?lable=' + JSON.stringify(this.data.item),
    })
  },
  checkboxChange: function (e) {
    console.log('checkbox发生change事件，携带value值为：',);

    var checkboxItems = this.data.checkboxItems, values = e.detail.value;
    for (var i = 0, lenI = checkboxItems.length; i < lenI; ++i) {
      checkboxItems[i].checked = false;

      for (var j = 0, lenJ = values.length; j < lenJ; ++j) {
        if (checkboxItems[i].value == values[j]) {
          checkboxItems[i].checked = true;
          break;
        }
      }
    }
    this.setData({
      checkboxItems: checkboxItems
    });
    this.setData({
      item: e.detail.value
    })
  }
})