// pages/empowe/empowe.js
var app = getApp();
Page({
  data: {
    radioItems: [
      { name: '../../images/hotest.png', value: '0', checked: true, license:'KnowledgeSharing' },
      { name: '../../images/hotest.png', value: '1', license:'business'}
    ],
    items: [
      { value: '1', name: '是', checked: 'true' },
      { value: '2', name: '否' }
    ],
    item: [
      { value: '1', name: '是', checked: 'true', business:true },
      { value: '2', name: '否', business: false }
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
    num:'10',
    lable:'',
    title:'',
    content:'',
    sessionId:''
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      lable: options.lable
    })
    wx.getStorage({
      key: 'title',
      success: (res) => {
        this.setData({
          title:res.data
        })
      }
    })
    wx.getStorage({
      key: 'content',
      success: (res) => {
        this.setData({
          content: res.data
        })
      }
    })
    wx.getStorage({
      key: 'sessionId',
      success: (res) => {
        this.setData({
          sessionId: res.data
        })
      }
    })
  },
  radioChange: function (e) {
    this.setData({
      radioItems: gai(this.data.radioItems, this,e)
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
    this.setData({
      items: gai(this.data.items, this,e)
    });
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
    this.setData({
      price: gai(this.data.price, this,e),
      num: e.detail.value
    });
  },
  radioChange4: function (e) {
    this.setData({
      item: gai(this.data.item, this,e),
    });
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
    let agreement={};
    let that = this;
    this.data.radioItems.map((v)=>{
      if(v.checked){
        if(v.value == 0){
          agreement.license = v.license
          that.data.items.map((v) => {
            if (v.checked) {
              agreement.modify = parseInt(v.value);
            }
            agreement.modify = 3
          })
          that.data.item.map((v)=>{
            if(v.checked){
              agreement.business = v.business
            }
          })
        }else{
          agreement.license = v.license
          that.data.items.map((v) => {
            if (v.checked) {
              agreement.modify = parseInt(v.value)
            }
          })
          that.data.price.map((v)=>{
            if(v.checked){
              agreement.price = parseInt(v.value)
            }
          })
        }
      }
    })
    console.log(agreement)
    wx.request({
      url: app.globalData.url + 'prove',
      method: "POST",
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      data: {
        tid: 2,
        agreement: JSON.stringify(agreement),
        label: that.data.lable,
        title: that.data.title,
        content:that.data.content,
        sessionId: that.data.sessionId
      },
      success:function(res){
        console.log(res)
        if(res.data.success){
          wx.navigateTo({
            url: '../success/success?data='+JSON.stringify(res.data.data),
          })
        }else{
          wx.showToast({
            title: '失败',
            icon: 'loading',
            duration: 1500
          })
        }
      }
    })
  }
})
function gai(val,that,e){
  var radioItems = val;
  for (var i = 0, len = radioItems.length; i < len; ++i) {
    radioItems[i].checked = radioItems[i].value == e.detail.value;
    if (radioItems[i].license){
      that.setData({
        bool: !radioItems[i].checked
      })
    }
  }
  return radioItems
}