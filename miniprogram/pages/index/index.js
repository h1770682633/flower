//index.js
const app = getApp();
Page({
  data:{
    siwperImgUrl: [
      "http://192.168.1.109:8080/wx-img/banner.png", 
      "http://192.168.1.109:8080/wx-img/banner.png",
      "http://192.168.1.109:8080/wx-img/banner.png"
    ],
    indicatorDots: true,
    vertical: false,
    autoplay: true,
    circular: true,
    interval: 2000,
    duration: 500,
    previousMargin: 0,
    nextMargin: 0,
    cloudUrl: app.globalData.cloudUrl,
  },
  onReady:function(){
    console.log("cloudUrl:",this.data.cloudUrl);
  },
  bindchange:function(e){
    // console.log("current:", e.detail.current);//第一个执行
    // console.log("source:", e.detail.source);//source 代表的是触发当前变化的是手动滑动touch，还是autoplay触发的
  },
  bindanimationfinish:function(e){
    // console.log("动画结束后当前的index:", e.detail.current);//第三个执行
  },
  bindtransition:function(e){
    // console.log("位置发生改变时触发:", e.detail.dx);//第二个执行
  }
})
