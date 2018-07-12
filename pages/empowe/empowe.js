// pages/empowe/empowe.js
Page({
  data: {
    radioItems: [
      { name: '../../images/hotest.png', value: '0', checked: true },
      { name: '../../images/hotest.png', value: '1'}
    ],
    items: [
      { value: '1', name: '是', checked: 'true' },
      { value: '2', name: '否' }
    ],
    item: [
      { value: '1', name: '是', checked: 'true' },
      { value: '2', name: '否' }
    ],
    price: [
      { name: '10元', value: '10', checked: 'true' },
      { name: '50元', value: '50' },
      { name: '100元', value: '100' },
      { name: '500元', value: '500'}
    ],
    bool: true,
    array:{
      item:["允许复制、发行、展览和表演作品，但必须按照指定的方式对作品进行署名","允许复制、发行、展览和表演作品，包括出于商业目的进行上述活动","允许复制、发行、展览和表演作品，也允许基于该作品创作演绎作品"
    ],
      title: "本作品采用 知识共享署名4.0 国际许可协议 进行许可。"
    },
    num:'10'
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },
  radioChange: function (e) {
    var radioItems = this.data.radioItems;
    for (var i = 0, len = radioItems.length; i < len; ++i) {
      radioItems[i].checked = radioItems[i].value == e.detail.value;
      this.setData({
        bool: !radioItems[i].checked
      })
    }
    this.setData({
      radioItems: radioItems
    });
    if (e.detail.value == '0') {
      this.setData({
        array: {
          item: ["允许复制、发行、展览和表演作品，但必须按照指定的方式对作品进行署名", "允许复制、发行、展览和表演作品，包括出于商业目的进行上述活动", "允许复制、发行、展览和表演作品，也允许基于该作品创作演绎作品"
          ],
          title: "本作品采用 知识共享署名4.0 国际许可协议 进行许可。"
        }
      })
    } else {
      this.setData({
        array: {
          item: ["允许修改原作品和再创作"
          ],
          title: "本作品使用商业转载授权协议发布"
        }
      })
    }
  },
  radioChange2: function (e) {
    this.data.radioItems.map((v)=>{
      if(v.checked){
        if(v.value=='0'){
          this.data.item.map((j) => {
            if(v.checked){
              if(j.value =="1"){
                switch(e.detail.value){
                  case '1':this.setData({
                    array: {
                      item: ["允许复制、发行、展览和表演作品，但必须按照指定的方式对作品进行署名", "允许复制、发行、展览和表演作品，包括出于商业目的进行上述活动", "允许复制、发行、展览和表演作品，也允许基于该作品创作演绎作品"
                      ],
                      title: "本作品采用 知识共享署名4.0 国际许可协议 进行许可。"
                    }
                  })
                  break;
                  case '2': this.setData({
                    array: {
                      item: ["允许复制、发行、展览和表演作品，但必须按照指定的方式对作品进行署名", "允许复制、发行、展览和表演作品，包括出于商业目的进行上述活动", "允许复制、发行、展览和表演作品，也允许基于该作品创作演绎作品"
                      ],
                      title: "本作品采用 知识共享署名-禁止演绎 4.0 国际许可协议 进行许可。 "
                    }
                  })
                  break;
                  case '3': this.setData({
                    array: {
                      item: ["允许复制、发行、展览和表演作品，但必须按照指定的方式对作品进行署名", "允许复制、发行、展览和表演作品，包括出于商业目的进行上述活动", "允许复制、发行演绎作品，但演绎作品必须采用与本协议相同或兼容的协议进行许可"
                      ],
                      title: "本作品采用 知识共享署名-相同方式共享 4.0 国际许可协议 进行许可。"
                    }
                  })
                    break;
                }
              } else if (j.value == "2"){
                switch (e.detail.value) {
                  case '1': this.setData({
                    array: {
                      item: ["允许复制、发行、展览和表演作品，但必须按照指定的方式对作品进行署名", "允许出于非商业目的复制、发行、展览和表演作品", "允许复制、发行、展览和表演作品，也允许基于该作品创作演绎作品"
                      ],
                      title: "本作品采用 知识共享署名-非商业性使用 4.0 国际许可协议 进行许可。"
                    }
                  })
                    break;
                  case '2': this.setData({
                    array: {
                      item: ["允许复制、发行、展览和表演作品，但必须按照指定的方式对作品进行署名", "允许出于非商业目的复制、发行、展览和表演作品", "允许复制、发行、展览和表演作品，但不允许基于该作品创作演绎作品"
                      ],
                      title: "本作品采用 知识共享署名-非商业性使用-禁止演绎 4.0 国际许可协议 进行许可。"
                    }
                  })
                    break;
                  case '3': this.setData({
                    array: {
                      item: ["允许复制、发行、展览和表演作品，但必须按照指定的方式对作品进行署名", "允许出于非商业目的复制、发行、展览和表演作品", "允许复制、发行演绎作品，但演绎作品必须采用与本协议相同或兼容的协议进行许可"
                      ],
                      title: "本作品采用 知识共享署名-非商业性使用-相同方式共享 4.0 国际许可协议 进行许可。"
                    }
                  })
                    break;
                }
              }
            }
          })
        }else{
          switch (e.detail.value) {
            case '1': this.setData({
              array: {
                item: ["允许修改原作品和再创作"
                ],
                title: "本作品使用商业转载授权协议发布"
              }
            })
              break;
            case '2': this.setData({
              array: {
                item: ["本作品使用商业转载授权协议发布"
                ],
                title: "不允许修改原作品，不允许再创作"
              }
            })
              break;
          }
        }
      }
    })
  },
  radioChange3: function (e) {
    var radioItems = this.data.price;
    for (var i = 0, len = radioItems.length; i < len; ++i) {
      radioItems[i].checked = radioItems[i].value == e.detail.value;
    }
    this.setData({
      price: radioItems,
      num: e.detail.value
    });
  },
  radioChange4: function (e) {
    this.data.radioItems.map((v) => {
      if (v.checked) {
        if (v.value == '0') {
          this.data.item.map((j) => {
            if (v.checked) {
              if (e.detail.value == "1") {
                switch (j.value) {
                  case '1': this.setData({
                    array: {
                      item: ["允许复制、发行、展览和表演作品，但必须按照指定的方式对作品进行署名", "允许复制、发行、展览和表演作品，包括出于商业目的进行上述活动", "允许复制、发行、展览和表演作品，也允许基于该作品创作演绎作品"
                      ],
                      title: "本作品采用 知识共享署名4.0 国际许可协议 进行许可。"
                    }
                  })
                    break;
                  case '2': this.setData({
                    array: {
                      item: ["允许复制、发行、展览和表演作品，但必须按照指定的方式对作品进行署名", "允许复制、发行、展览和表演作品，包括出于商业目的进行上述活动", "允许复制、发行、展览和表演作品，也允许基于该作品创作演绎作品"
                      ],
                      title: "本作品采用 知识共享署名-禁止演绎 4.0 国际许可协议 进行许可。 "
                    }
                  })
                    break;
                  case '3': this.setData({
                    array: {
                      item: ["允许复制、发行、展览和表演作品，但必须按照指定的方式对作品进行署名", "允许复制、发行、展览和表演作品，包括出于商业目的进行上述活动", "允许复制、发行演绎作品，但演绎作品必须采用与本协议相同或兼容的协议进行许可"
                      ],
                      title: "本作品采用 知识共享署名-相同方式共享 4.0 国际许可协议 进行许可。"
                    }
                  })
                    break;
                }
              } else if (e.detail.value == "2") {
                switch (j.value) {
                  case '1': this.setData({
                    array: {
                      item: ["允许复制、发行、展览和表演作品，但必须按照指定的方式对作品进行署名", "允许出于非商业目的复制、发行、展览和表演作品", "允许复制、发行、展览和表演作品，也允许基于该作品创作演绎作品"
                      ],
                      title: "本作品采用 知识共享署名-非商业性使用 4.0 国际许可协议 进行许可。"
                    }
                  })
                    break;
                  case '2': this.setData({
                    array: {
                      item: ["允许复制、发行、展览和表演作品，但必须按照指定的方式对作品进行署名", "允许出于非商业目的复制、发行、展览和表演作品", "允许复制、发行、展览和表演作品，但不允许基于该作品创作演绎作品"
                      ],
                      title: "本作品采用 知识共享署名-非商业性使用-禁止演绎 4.0 国际许可协议 进行许可。"
                    }
                  })
                    break;
                  case '3': this.setData({
                    array: {
                      item: ["允许复制、发行、展览和表演作品，但必须按照指定的方式对作品进行署名", "允许出于非商业目的复制、发行、展览和表演作品", "允许复制、发行演绎作品，但演绎作品必须采用与本协议相同或兼容的协议进行许可"
                      ],
                      title: "本作品采用 知识共享署名-非商业性使用-相同方式共享 4.0 国际许可协议 进行许可。"
                    }
                  })
                    break;
                }
              }
            }
          })
        }
      }
    })
  },
  ok:function(e){
    wx.navigateTo({
      url: '../success/success',
    })
  }
})