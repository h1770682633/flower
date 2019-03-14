// pages/classList/classList.js
//获取应用实例
const app = getApp()

Page({
  data: {
    // 组件所需的参数
    nvabarData: {
      showCapsule: 1, //是否显示左上角图标   1表示显示    0表示不显示
      title: '花卉商城', //导航栏 中间的标题
    },

    // 此页面 页面内容距最顶部的距离
    height: app.globalData.height * 2 + 20,
    bl:'0',
    cloudUrl: app.globalData.cloudUrl,
    listData:[
      [
        {
          imgUrl: "http://192.168.1.109:8080/wx-img/img1.jpg",
          name: "红粉佳人(鲜切花)",
          price: "￥447",
          num: "暂无",
          url:"../detailList/detailList",
        },
        {
          imgUrl: "http://192.168.1.109:8080/wx-img/img2.jpg",
          name: "泡茶菊花",
          price: "￥52",
          num: "暂无",
          url: "../detailList/detailList",
        },
        {
          imgUrl: "http://192.168.1.109:8080/wx-img/img3.jpg",
          name: "绿植(绿植1)",
          price: "￥8.88",
          num: "暂无",
          url: "../detailList/detailList",
        },
        {
          imgUrl: "http://192.168.1.109:8080/wx-img/img4.jpg",
          name: "绿植(绿植2)",
          price: "￥8.88",
          num: "暂无",
          url: "../detailList/detailList",
        },
      ],
      [
        {
          imgUrl: "http://192.168.1.109:8080/wx-img/img3.jpg",
          name: "绿植(绿植1)",
          price: "￥8.88",
          num: "暂无",
          url: "../detailList/detailList",
        },
        {
          imgUrl: "http://192.168.1.109:8080/wx-img/img4.jpg",
          name: "绿植(绿植2)",
          price: "￥8.88",
          num: "暂无",
          url: "../detailList/detailList",
        },
        {
          imgUrl: "http://192.168.1.109:8080/wx-img/img1.jpg",
          name: "红粉佳人(鲜切花)",
          price: "￥447",
          num: "暂无",
          url: "../detailList/detailList",
        },
        {
          imgUrl: "http://192.168.1.109:8080/wx-img/img2.jpg",
          name: "泡茶菊花",
          price: "￥52",
          num: "暂无",
          url: "../detailList/detailList",
        },
      ],
      [
        {
          imgUrl: "http://192.168.1.109:8080/wx-img/img1.jpg",
          name: "红粉佳人(鲜切花)",
          price: "￥447",
          num: "暂无",
          url: "../detailList/detailList",
        },
        {
          imgUrl: "http://192.168.1.109:8080/wx-img/img4.jpg",
          name: "绿植(绿植2)",
          price: "￥8.88",
          num: "暂无",
          url: "../detailList/detailList",
        },
        {
          imgUrl: "http://192.168.1.109:8080/wx-img/img2.jpg",
          name: "泡茶菊花",
          price: "￥52",
          num: "暂无",
          url: "../detailList/detailList",
        },
        {
          imgUrl: "http://192.168.1.109:8080/wx-img/img3.jpg",
          name: "绿植(绿植1)",
          price: "￥8.88",
          num: "暂无",
          url: "../detailList/detailList",
        },
      ],
    ]
  },
  onLoad() {
    console.log(this.data.height)
  },
  changeTab:function(e){
    var bl = e.target.dataset.num;
    this.setData({
      bl : bl,
    })
  },
})