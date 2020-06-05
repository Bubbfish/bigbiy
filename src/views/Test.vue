<template>
  <div class="home">
    <!-- <cube-button @click="showPicker">Picker</cube-button> -->
    <div class="container">
      <div class="container-item">
        <span class="label">用户名：</span>
        <span class="txt">yiyangqianxi</span>
      </div>
      <div class="container-item">
        <span class="label">孩子姓名：</span>
        <span class="txt">易烊千玺</span>
      </div>
       <div class="container-item">
        <span class="label">手机号码：</span>
        <span class="txt">17310827263</span>
      </div>
    </div>
    

  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import { register } from '../api/api.js'
const column1 = [{ text: '剧毒', value: '剧毒'}, { text: '蚂蚁', value: '蚂蚁' },
  { text: '幽鬼', value: '幽鬼' }]
export default {
  name: 'Home',
  data() {
    return {
      items: [1, 2, 3, 4, 5, 6],
      options: {
        probeType: 3,
        listenScroll: true
      },
      scrollEvents: ['scroll', 'scroll-end']
    }
  },
  components: {
    // HelloWorld,
    // Slider
  },
  mounted() {
      let param ={
          username:'刘1思龙',
          password:'123'
      }
       register(param).then((d)=>{
           console.log(d)
       })
  },
  methods: {
    handleScrollEnd(obj) {
      // console.log(obj)
    },
  }
}
</script>
<style lang="stylus" scoped>
  .home
    height 100%
    display flex
    box-sizing border-box
    flex-direction column
    padding 35px
    background-color #F6F6F6
    .container
      background-color #ffffff
      box-shadow 0px 0px 16px 0px rgba(181,181,181,0.2)
      border-radius 24px
      padding 0 36px
      .container-item
        display flex
        padding: 35px 0
        border-bottom 1px solid #F3F3F3
        .label
          font-size 28px
          color #646464
        .txt
          flex 1
          color #191919
          font-size 28px
    .slider-wrapper 
      width 100%
      height 200px
      background-color red
      .horizontal-scroll-list-wrap
        border: 1px solid rgba(0, 0, 0, 0.1)
        border-radius: 5px
        /deep/ .cube-scroll-content
          display: inline-block
        .list-wrapper
          padding: 0 10px
          line-height: 60px
          white-space: nowrap
        .list-item
          display: inline-block
          width 200px
          height 200px
          line-height 200px
          background-color pink
          margin-right 10px
</style>
