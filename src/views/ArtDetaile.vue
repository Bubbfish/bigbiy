<template>
  <div class="layout">

      <Header></Header>
      <div class="inner-container scroll-line" :style="{'height': contentHeight + 'px'}">
          <div class="list">
            <div class="content-text">
              <p class="p1">{{articleInfo.title}}</p>
              <div class="p2" v-html="articleInfo.text"></div>
              <div class="meta">{{articleInfo.createtime}}</div>
            </div>
          </div>
      </div>
      <Footer class="layout-footer-center">2011-2016 &copy; TalkingData</Footer>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import { getArticle } from "../api/api.js";
import { Layout } from "view-design";
import Header from "../components/Header";
import { mapState } from "vuex";

export default {
  name: "Home",
  data() {
    return {
      list1: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      contentHeight: 0,
      list:[],
      articleInfo:{}
    };
  },
//     props: {
//       appointData: {
//         default: () => {},
//         type: Object
//       }
//   },
  components: {
    // Layout,
    Header
  },
  mounted() {
    this.articleInfo = this.$route.params.articleInfo;
    console.log(this.articleInfo)
    this.contentHeight = window.innerHeight - 64 - 69;
  },
  methods: {
   
  },
  computed:{
    ...mapState(['user'])
  }
};
</script>
<style lang="stylus" scoped>

</style>
