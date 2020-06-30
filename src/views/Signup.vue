<template>
  <div id="register">
    <Header></Header>
    <div class="box">
      <form @submit.prevent="onSubmit">
        <p>
          <span>账号:</span>
          <Input
            v-model="username"
            prefix="ios-contact"
            placeholder="请输入你的账号"
            style="width: 400px"
          />
        </p>
        <p>
          <span>请输入密码:</span>
          <Input v-model="password" type="password" placeholder="请输入你的密码" style="width:400px" />
          <span>再次输入密码:</span>
          <Input v-model="confirmPassword" placeholder="再次输入密码" style="width:400px" />
        </p>
        <Button type="success" html-type="submit" style="width:200px">注册</Button>
      </form>
    </div>
  </div>
</template>

<script>
import Header from "../components/Header";
import { register } from "../api/api.js";
export default {
  data() {
    return {
      username: "",
      password: "",
      confirmPassword: ""
    };
  },
  methods: {
    onSubmit() {
      if (this.password !== this.confirmPassword) {
        this.$Message.error("重复密码和初始密码不一样");
        return;
      }
      let param = {
        username: this.username,
        password: this.password
      };
      register(param).then(res => {
        console.log(res);
        if (res.data.code === 200) {
          this.$router.push({ name: "Login" });
        }else{
           this.$Message.error({content:"注册失败",duration:2});
        }
      });
    }
  },
  components: {
    Header
  }
};
</script>

<style scoped>
#register {
  width: 100vw;
  background-color: black;
  text-align: center;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
}
p {
  margin: 10px 0;
  line-height: 40px;
}
.box {
  padding: 10px;
  background-color: rgba(255, 255, 255, 0.5);
  width: 440px;
  margin: 150px auto;
  border-radius: 10px;
}
span {
  margin: 0 10px;
  font-size: 16px;
  color: #fff;
}
</style>