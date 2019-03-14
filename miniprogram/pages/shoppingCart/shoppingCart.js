// pages/shoppingCart/shoppingCart.js
const app = getApp();
var cloudUrl = app.globalData.cloudUrl;
Page({
  data: {
    // 使用data数据对象设置样式名
    price: 0,
    cloudUrl: app.globalData.cloudUrl,
    dataArr:[
      {
        blNum:false,
        imgSrc: cloudUrl+"img4.jpg",
        flowerName:"绿植（绿植）",
        flowerPrice:"8.88",
        minusStatus: 'disabled',
        num:1,
      },
      {
        blNum: false,
        imgSrc: cloudUrl+"img2.jpg",
        flowerName: "泡茶菊花",
        flowerPrice: "52",
        minusStatus: 'disabled',
        num: 1,
      },
      ]
  },
  /* 点击减号 */
  bindMinus: function (e) {
    var index = e.currentTarget.dataset.num;
    var num = this.data.dataArr[index].num;
    var jsonArr = this.data.dataArr;
    var length = jsonArr.length;
    var price = 0;
    for (var i = 0; i < length; i++) {
      if (jsonArr[i].blNum && i !== index) {
        price += jsonArr[i].num * jsonArr[i].flowerPrice;
      }
    }
    // 如果大于1时，才可以减
    if (num > 1) {
      num--;
    }
    if (jsonArr[index].blNum) {
      price += num * jsonArr[index].flowerPrice;
    }
    
    var dataString1 = 'dataArr[' + index + '].minusStatus';
    var dataString2 = 'dataArr[' + index + '].num';
    // 只有大于一件的时候，才能normal状态，否则disable状态
    var minusStatus = num <= 1 ? 'disabled' : 'normal';
    // 将数值与状态写回
    this.setData({
      // num: num,
      [dataString1]: minusStatus,
      [dataString2]: num,
      price:price
    });
    return false;
  },
  /* 点击加号 */
  bindPlus: function (e) {
    var index = e.currentTarget.dataset.num
    var num = this.data.dataArr[index].num;
    var jsonArr = this.data.dataArr;
    var length = jsonArr.length;
    var price = 0;
    // 不作过多考虑自增1
    num++;
    for (var i = 0; i < length; i++) {
      if (jsonArr[i].blNum&&i!==index) {
        price += jsonArr[i].num * jsonArr[i].flowerPrice;
      }
    }
    if(jsonArr[index].blNum){
      price += num * jsonArr[index].flowerPrice;
    }
    // 只有大于一件的时候，才能normal状态，否则disable状态
    var minusStatus = num < 1 ? 'disabled' : 'normal';
    // 将数值与状态写回
    var dataString1 = 'dataArr[' + index +'].minusStatus';
    var dataString2 = 'dataArr[' + index + '].num';
    // console.log("price:", price);
    this.setData({
      [dataString1]: minusStatus,
      [dataString2]: num,
      price:price
    });
    
    return false;
  },
  /* 输入框事件 */
  bindManual: function (e) {
    var num = e.detail.value;
    var index = e.currentTarget.dataset.num;
    var jsonArr = this.data.dataArr;
    var length = jsonArr.length;
    var price = 0;
    var dataString = 'dataArr[' + index + '].num';
    if(num<=0){
      wx.showModal({
        title: '提示',
        content: '请输入大于0的整数',
        success: function (res) {
          if (res.confirm) {
            console.log('用户点击确定')
          } else {
            console.log('用户点击取消')
          }
        }
      })
      num = 1;
    }
    for (var i = 0; i < length; i++) {
      if (jsonArr[i].blNum && i !== index) {
        price += jsonArr[i].num * jsonArr[i].flowerPrice;
      }
    }
    if (jsonArr[index].blNum) {
      price += num * jsonArr[index].flowerPrice;
    }
    // 将数值与状态写回
    this.setData({
      [dataString]: num,
      price: price
    });
    return false;
  },
  // 改变选中状态
  changeSelected:function (e) {
    var index = e.currentTarget.dataset.num;
    var bl = this.data.dataArr[index].blNum;
    bl = !bl;
    var dataString = 'dataArr[' + index + '].blNum';
    var jsonArr = this.data.dataArr;
    var length = jsonArr.length;
    var price = 0;
    for (var i = 0; i < length; i++) {
      if (jsonArr[i].blNum && i !== index) {
        price += jsonArr[i].num * jsonArr[i].flowerPrice;
      }
    }
    if (bl) {
      price += jsonArr[index].num * jsonArr[index].flowerPrice;
    }
    this.setData({
      [dataString]:bl,
      price:price
    });
  },
  
})