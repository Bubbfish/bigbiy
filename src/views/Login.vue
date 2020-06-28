<template>
  <div id="home">
    <Header></Header>
    <div class="box">
      <form>
        <p>
          <span>账号:</span>
          <Input
            type="email"
            v-model="email"
            prefix="ios-contact"
            placeholder="请输入你的账号"
            style="width: 400px"
          />
        </p>
        <p>
          <span>密码:</span>
          <Input
            type="password"
            prefix="ios-lock"
            v-model="password"
            placeholder="请输入你的密码"
            style="width:400px"
          />
        </p>
        <Button type="success" style="width:200px" @click="LOGIN">登录</Button>
      </form>
    </div>
  </div>
</template>

<script>
import Header from "../components/Header";
export default {
  data() {
    return {
      email: "2462.com",
      password: "123"
    };
  },
  methods: {
    LOGIN() {
      this.$router.push({ name: "Test" });
    }
  },
  components: {
    Header
  }
};
</script>

<style scoped>
#home {
  width: 100vw;
  background-color: black;
  text-align: center;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  /* z-index: 10000000; */
}
p {
  margin: 30px 0;
  line-height: 30px;
}
.box {
  padding: 10px;
  background-color: rgba(255, 255, 255, 0.5);
  width: 440px;
  margin: 150px auto;
  border-radius: 10px;
}
p span {
  margin: 0 10px;
  font-size: 16px;
  color: black;
  display: inline-block;
}
h1 {
  color: aliceblue;
  padding: 20px;
}
</style>