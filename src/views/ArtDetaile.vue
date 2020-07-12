<template>
  <div class="layout">
    <Header></Header>
    <div class="inner-container scroll-line">
      <div class="list">
        <div class="content-text">
          <p class="p1">{{articleInfo.title}}</p>
          <div class="ql-container ql-snow">
            <div class="ql-editor" v-html="articleInfo.text"></div>
          </div>
          <!-- <div class="p2" v-html="articleInfo.text"></div> -->
          <div class="meta">{{articleInfo.createtime}}</div>
        </div>
      </div>
    </div>
    <div class="card">
      <div class="card-body">
        <div class="comment">
          <Input v-model="commentValue" placeholder="写评论..." style="width: 80%;" />
          <i-button class="button-pubC" type="primary" shape="circle" @click="pubComment()">发表评论</i-button>
        </div>
        <div class="other-comment" v-for="(item,index) in commentList" :key="index">
          <p>
            {{item.id}}:
            <span>{{item.text}}</span>
          </p>
        </div>
      </div>
    </div>
    <Footer class="layout-footer-center">2011-2016 &copy; TalkingData</Footer>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import {
  getArticle,
  postComment,
  getCommentList,
  getArticleDetail
} from "../api/api.js";
import { Layout } from "view-design";
import Header from "../components/Header";
import { mapState } from "vuex";

export default {
  name: "Home",
  data() {
    return {
      list1: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      contentHeight: 0,
      list: [],
      articleInfo1: {},
      articleInfo: {},
      commentValue: "",
      commentList: []
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
    this.articleInfo1 = this.$route.params.articleInfo;
    console.log(this.articleInfo1);
    this.getComment();
    this.getArtDetail();
    // this.contentHeight = window.innerHeight - 64 - 69;
  },
  methods: {
    getArtDetail() {
      let param = {
        article_id: this.articleInfo1.id
      };
      getArticleDetail(param).then(res => {
        if (res.data.code === 200) {
          this.articleInfo = res.data.data;
        }
      });
    },
    pubComment() {
      let param = {
        article_id: this.articleInfo1.id,
        comment_id: 0,
        comment_userid: this.user.id,
        text: this.commentValue
      };
      postComment(param).then(res => {
        if (res.data.code === 200) {
          this.$Message.success({ content: "发表成功", duration: 2 });
          this.getComment();
        }
      });
    },
    getComment() {
      let param = {
        article_id: this.articleInfo1.id,
        comment_id: 0
      };
      getCommentList(param).then(res => {
        if (res.data.code === 200) {
          this.commentList = res.data.data.res;
        }
      });
    }
  },
  computed: {
    ...mapState(["user"])
  }
};
</script>
<style lang="stylus" scoped>
.card {
  padding: 10px 20px;
}

.comment {
  padding: 10px 20px;
  text-align: left;
}

.other-comment {
  padding: 10px 20px;
  text-align: left;
}

.button-pubC {
  margin-left: 5px;
}
</style>
