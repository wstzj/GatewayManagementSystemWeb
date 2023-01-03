<template>
  <v-container class="pa-0">
    <v-img width="100%" height="93vh" src="../assets/LoginBackGround.jpg">
      <v-row>
        <v-col class="mt-12">
          <v-row justify="center" class="mt-12">
            <v-card
                width="400px"
                height="500px"
                class="pa-8 mt-12"
                color="rgb(255,255,255,0.9)"
            >
              <v-card-title class="justify-center text-center">
                注册账号
              </v-card-title>
              <v-text-field
                  class="mt-6"
                  label="请输入您的账号"
                  prepend-icon="mdi-account"
              ></v-text-field>

              <v-text-field
                  class="mt-6"
                  label="请输入您的密码"
                  prepend-icon="mdi-lock"
                  :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                  :type="show1 ? 'text' : 'password'"
                  @click:append="show1 = !show1"
              ></v-text-field>

              <v-text-field
                  class="mt-6"
                  label="请输入管理员密码"
                  prepend-icon="mdi-lock"
                  :append-icon="show2 ? 'mdi-eye' : 'mdi-eye-off'"
                  :type="show1 ? 'text' : 'password'"
                  @click:append="show2 = !show2"
              >
                <v-btn class="" color="primary">获取验证码</v-btn>
              </v-text-field>

              <v-btn class="mt-12" width="100%"  color="primary">注册</v-btn>
            </v-card>
          </v-row>
        </v-col>
      </v-row>
    </v-img>
  </v-container>
</template>

<script>
export default {
  name: "RegisterView",
  data:()=>({
    show1 : false,
    show2 : false
  })
}
</script>

<style scoped>

</style>