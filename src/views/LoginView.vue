<template>
  <v-container class="pa-0">
    <v-img width="100%" height="93vh" src="../assets/LoginBackGround.jpg">
      <v-row>
        <v-col class="mt-12">
          <v-row justify="center" class="mt-12">
            <v-card
                width="400px"
                height="450px"
                class="pa-8 mt-12"
                color="rgb(255,255,255,0.9)"
            >
              <v-card-title class="justify-center text-center">欢迎登陆</v-card-title>
              <v-text-field
                  v-model="account"
                  class="mt-6"
                  label="请输入您的账号"
                  prepend-icon="mdi-account"
              ></v-text-field>
              <v-text-field
                  v-model="password"
                  class="mt-6"
                  label="请输入您的密码"
                  prepend-icon="mdi-lock"
                  :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                  :type="show1 ? 'text' : 'password'"
                  @click:append="show1 = !show1"
              ></v-text-field>

              <v-btn
                  class="mt-12"
                  width="100%"
                  color="primary"
                  @click="Login"
              >登陆</v-btn>
            </v-card>
          </v-row>
        </v-col>
      </v-row>
    </v-img>
  </v-container>
</template>

<script>
export default {
  name: "LoginView",
  data: () => ({
    show1: false,
    account: "",
    password: "",
  }),
  methods: {
    Login() {
      // this.axios.post("/111",
      //     {
      //       account: this.account,
      //       password: this.password
      //     }).then((res) => {
      //   let data = res.data
      //   if (data === "success"){
      //     this.$router.push("/management-view")
      //     this.$store.commit("Login")
      //   }else{
      //     alert("密码错误")
      //   }
      // })
      this.$store.commit("Login")
      this.$router.push("/device")

    }
  }

}
</script>

<style scoped>

</style>