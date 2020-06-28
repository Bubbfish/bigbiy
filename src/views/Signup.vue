<template>
  <div id="register">
    <Header></Header>
    <div class="box">
      <form @submit.prevent="onSubmit">
        <p>
          <span>账号:</span>
          <Input v-model="email" prefix="ios-contact" placeholder="请输入你的账号" style="width: 400px" />
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
export default {
  data() {
    return {
      email: "",
      password: "",
      confirmPassword: ""
    };
  },
  methods: {
    onSubmit() {
      this.$router.push({ name: "Test" });
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