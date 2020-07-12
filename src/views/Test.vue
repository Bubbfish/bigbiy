<template>
  <div class="layout">
    <Layout>
      <!-- <Header class="header">
        <div class="layout-logo"></div>
        <div class="login">
          <i-button type="primary" shape="circle">登录</i-button>
          <i-button type="primary" shape="circle">注册</i-button>
        </div>
      </Header>-->
      <Header></Header>
      <div class="inner-container scroll-line">
        <Scroll
          class="ivu-scroll-wrapper"
          :on-reach-bottom="handleReachBottom"
          :height="contentHeight"
        >
          <div class="router-box">
            <div class="router-box-item" @click="handleNewArticle()">最新文章</div>
            <div class="router-box-item hot" @click="handleHotArticle(item)">最热文章</div>
          </div>
          <div class="list" v-for="(item, index) in list" :key="index">
            <div class="content-text" @click="goArticleDetaile(item)">
              <p class="p1">{{item.title}}</p>
              <p class="p2">{{item.short_text}}</p>
              <div class="meta">{{item.createtime}}</div>
            </div>
            <img
              class="img1"
              src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=204471953,2683458197&fm=26&gp=0.jpg"
              alt
            />
          </div>
          <div v-if="this.list.length >= this.countNum" class="noarticle">
            没有更多文章了
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
import { getHomeArticle } from "../api/api.js";
import { Layout } from "view-design";
import Header from "../components/Header";
import { mapState } from "vuex";

export default {
  name: "Home",
  data() {
    return {
      list: [],
      contentHeight: 0,
      currentIndex: 1,
      countNum: 0
    };
  },
  components: {
    // Layout,
    Header
  },
  mounted() {
    // console.log(this.user);
    this.contentHeight = window.innerHeight - 64 - 69;
    let param = {
      kind: 1,
      page_size: 10
    };
    getHomeArticle(param).then(res => {
      if (res.data.code === 200) {
        this.list = res.data.data.res;
        this.countNum = res.data.data.count_num;
      }
    });
  },
  methods: {
    handleNewArticle(){
      this.list = []
        this.currentIndex =1;
        let param = {
          kind: 1,
          page: this.currentIndex,
          page_size: 10
        };
        getHomeArticle(param).then(res => {
          if (res.data.code === 200) {
            this.list.push(res.data.data.res);
          }
        });
    },
        handleHotArticle(){
      this.list = []
        this.currentIndex =1;
        let param = {
          kind: 2,
          page: this.currentIndex,
          page_size: 10
        };
        getHomeArticle(param).then(res => {
          if (res.data.code === 200) {
            this.list.push(res.data.data.res);
          }
        });
    },
    goArticleDetaile(item) {
      this.$router.push({ name: "ArtDetaile", params: { articleInfo: item } });
    },
    handleReachBottom() {
      if (this.list.length < this.countNum) {
        this.currentIndex += this.currentIndex;
        let param = {
          kind: 1,
          page: this.currentIndex,
          page_size: 10
        };
        getHomeArticle(param).then(res => {
          if (res.data.code === 200) {
            this.list.push(res.data.data.res);
          }
        });
      }
    }
  },
  computed: {
    ...mapState(["user"])
  }
};
</script>
<style lang="stylus" scoped>
.list {
  display: flex;
  height: 200px;
  justify-content: center;

  .content-text {
    margin-right: 165px;
    width: 200px;
    text-align: left;

    .p1 {
      // margin: -7px 0 4px;
      display: inherit;
      font-size: 18px;
      font-weight: 700;
      line-height: 1.5;
      color: #f7f7f7;
    }

    .p2 {
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
      -webkit-box-orient: vertical;
    }

    .meta {
      padding-right: 0 !important;
      font-size: 12px;
      font-weight: 400;
      line-height: 20px;
      color: #f7f7f7;
    }
  }

  .img1 {
    width: 150px;
    height: 150px;
  }
}

.layout {
  border: 1px solid #d7dde4;
  background: #f5f7f9;
  position: relative;
  border-radius: 4px;
  overflow: hidden;
}

.inner-container {
  background-color: #FFF;
  background-image: url('../assets/demo-1-bg.jpg');
  background-size: cover;
  // padding: 0 300px;
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
  border: none;
}

.ivu-menu-horizontal {
  height: 64px;
  line-height: 64px;
}

.layout-footer-center {
  background-color: #1a2c3b;
  color: #f7f7f7;
}

.header {
  background-color: #1a2c3b;
}

.router-box {
  display: flex;
  justify-content: center;
}

.router-box-item {
  // display: block;
  height: 34px;
  line-height: 34px;
  border-radius: 4px;
  // padding-left: 10px;
  color: #ccc;
  text-decoration: none;
  margin-bottom: 1px;
  border: 1px solid #4F4F4F;
}

.hot {
  margin-left: 10px;
}
.noarticle{
  color #ffffff
  margin 15px
}
</style>
