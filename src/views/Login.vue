<template>
  <div id="home">
    <Header></Header>
    <div class="box">
      <form>
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
import { mapMutations } from "vuex";
import { login } from "../api/api.js";
export default {
  data() {
    return {
      username: "",
      password: ""
    };
  },
  methods: {
    LOGIN() {
      let param = {
        username: this.username,
        password: this.password
      };
      login(param).then(res => {
        console.log(res);
        if(res.data.code === 200){
            this.setUser(res.data.data)
                  this.$router.push({ name: "Test" });
        }else if(res.data.code === 401){
            this.$Message.error("用户名或密码错误");
        }
      });
    },
    ...mapMutations(["setUser"])
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
  /* height: 100vh; */
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