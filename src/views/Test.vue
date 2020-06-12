<template>
  <div class="layout">
    <Layout>
      <Header class="header">
        <div class="layout-logo"></div>
        <div class="login">
          <i-button type="primary" shape="circle">登录</i-button>
          <i-button type="primary" shape="circle">注册</i-button>
        </div>
      </Header>
      <div class="inner-container scroll-line">
        <Scroll class="ivu-scroll-wrapper" :on-reach-bottom="handleReachBottom" height="700">
            <div class="list" v-for="(item, index) in list1" :key="index">
                <div class="content-text">
                    <p class="p1">ddd</p>
                    <p class="p2">dsddwddw我但是好多好多好多话还收到回电话都会挥洒和大红色的挥洒和哈哈的哈是的哈是的挥洒和大撒的啥好大；的；s</p>
                    <div class="meta">sda</div>
                </div>
                <img  class="img1" src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=204471953,2683458197&fm=26&gp=0.jpg" alt="">
            </div>
        </Scroll>
      </div>
      <Footer class="layout-footer-center">2011-2016 &copy; TalkingData</Footer>
    </Layout>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import { register } from "../api/api.js";
import { Layout } from "view-design";
const column1 = [
  { text: "剧毒", value: "剧毒" },
  { text: "蚂蚁", value: "蚂蚁" },
  { text: "幽鬼", value: "幽鬼" }
];
export default {
  name: "Home",
  data() {
    return {
      list1: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    };
  },
  components: {
    // Layout,
    // Header
  },
  mounted() {
    let param = {
      username: "刘1思龙",
      password: "123"
    };
    //    register(param).then((d)=>{
    //        console.log(d)
    //    })
  },
  methods: {
    handleReachBottom() {
      return new Promise(resolve => {
        setTimeout(() => {
          const last = this.list1[this.list1.length - 1];
          for (let i = 1; i < 11; i++) {
            this.list1.push(last + i);
          }
          resolve();
        }, 2000);
      });
    }
  }
};
</script>
<style lang="stylus" scoped>
.list
    display flex
    height 200px
    justify-content center
    .content-text
        margin-right 165px
        width: 200px;
        text-align: left;
        .p1
            // margin: -7px 0 4px;
            display: inherit;
            font-size: 18px;
            font-weight: 700;
            line-height: 1.5;
            color: #f7f7f7;
        .p2
            margin: 0 0 8px;
            font-size: 13px;
            line-height: 24px;
            color: #999;
            display: -webkit-box;
            overflow: hidden;
            white-space: normal !important;
            text-overflow: ellipsis;
            word-wrap: break-word;
            -webkit-line-clamp: 3;
            -webkit-box-orient: vertical
        .meta
            padding-right: 0!important;
            font-size: 12px;
            font-weight: 400;
            line-height: 20px;
            color: #f7f7f7;
    .img1
        width 150px
        height 150px

.layout {
  border: 1px solid #d7dde4;
  background: #f5f7f9;
  position: relative;
  border-radius: 4px;
  overflow: hidden;
//   height:100vh
}
::-webkit-scrollbar {
width: 12px;
}
::-webkit-scrollbar-track {
background-color: #eaeaea;
border-left: 1px solid #ccc;
}
::-webkit-scrollbar-thumb {
background-color: #ccc;
}
::-webkit-scrollbar-thumb:hover {
background-color: #aaa;
}
::-webkit-scrollbar-thumb:active{
background-color:#333;
}


.inner-container{
    background-color #FFF
    background-image url('../assets/demo-1-bg.jpg')
    background-size: cover;
}

.layout-logo {
  width: 60px;
  height: 60px;
  // height: 30px;
  background: #5b6270;
  border-radius: 50%;
  background-size: cover;
  float: left;
  position: relative;
  top: 2px;
  left: 20px;
  background-image: url('https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1591789263165&di=db6c57d22eb36e00cdaf529354d4c881&imgtype=0&src=http%3A%2F%2Fa2.att.hudong.com%2F36%2F48%2F19300001357258133412489354717.jpg');
}

.login {
  float: right;
}

.layout-nav {
  width: 420px;
  margin: 0 auto;
  margin-right: 20px;
}
.layout {
    border none
}
.ivu-menu-horizontal {
  height: 64px;
  line-height: 64px;
}
.layout-footer-center{
    background-color #1a2c3b;
    color: #f7f7f7;
}
.header{
     background-color #1a2c3b;
}
</style>
