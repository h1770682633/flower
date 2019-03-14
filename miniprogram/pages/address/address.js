// pages/my/my.js
//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    // 组件所需的参数
    nvabarData: {
      showCapsule: 1, //是否显示左上角图标   1表示显示    0表示不显示
      title: '花卉商城', //导航栏 中间的标题
    },
    cloudUrl: app.globalData.cloudUrl,

    // 此页面 页面内容距最顶部的距离
    height: app.globalData.height * 2 + 20,
    addressList:[
      {
        name:"hhh",
        address:"湖北省武汉市光谷大道当代国际花园1",
        phoneNumber:"12345678900",
      },
      {
        name: "zzz",
        address: "湖北省武汉市光谷大道当代国际花园2",
        phoneNumber: "12345678900",
      },
      {
        name: "rrr",
        address: "湖北省武汉市光谷大道当代国际花园3",
        phoneNumber: "12345678900",
      },
    ],
    bl:"1",//初始化默认地址选项
  },
  onLoad() {
    console.log(this.data.height)
  },
  changeSelect:function(e){
    var bl = e.currentTarget.dataset.num;
    // console.log(e);
    this.setData({
      bl:bl,
    })
  },
  deleteItem: function (e){
    var num = Number(e.target.dataset.num);
    var bl = num==this.data.bl?"0":this.data.bl;
    var addressList = this.data.addressList;
    addressList.splice(num, 1)
    this.setData({
      addressList:addressList,
      bl:bl,
    })
  }
})