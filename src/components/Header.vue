<template>
    <Header class="header">
        <div class="layout-logo" @click="goHome()"></div>

        <div v-if="this.user" class="login">
           <Dropdown style="margin-left: 20px">
              <Button type="primary">
                  个人中心
                  <Icon type="ios-arrow-down"></Icon>
              </Button>
              <DropdownMenu  slot="list">
                  <DropdownItem @click.native="goPublish()" name="1" >写文章</DropdownItem>
                  <DropdownItem @click.native="goMyArticle()" name="1" >我的文章</DropdownItem>
              </DropdownMenu>
          </Dropdown>
          <!-- <i-button type="primary" shape="circle" ">个人中心</i-button> -->
        </div>
        <div v-else class="login">
          <i-button type="primary" shape="circle" @click="goSignIn()">登录</i-button>
          <i-button type="primary" shape="circle" @click="goSignUp()">注册</i-button>
        </div>
      </Header>
</template>

<script>
import { mapState } from "vuex";

export default {
    methods: {
        goSignIn(){
            this.$router.push({ name: 'Login'})
        },
        goSignUp(){
            this.$router.push({ name: 'Signup'})
        },
        goPublish(){
          this.$router.push({ name: 'PulishA'})
        },
        goMyArticle(){
          this.$router.push({ name: 'MyArticle'})
        },
        goHome(){
          this.$router.push({ name: 'Test'})
        }
    },
      computed:{
    ...mapState(['user'])
  }
}
</script>

<style>
.layout-logo {
  width: 60px;
  height: 60px;
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
.header{
     background-color: #1a2c3b;
}
.ivu-layout-header{
  /* line-height: 0px; */
  /* padding-top: 20px; */
}
.ivu-select-dropdown{
  margin-top: -14px
}
</style>