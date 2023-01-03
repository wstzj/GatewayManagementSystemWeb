<template>

  <v-app>
    <v-app-bar app clipped-left>
      <h2>
        网关管理系统
      </h2>
    </v-app-bar>
    <v-navigation-drawer
        clipped
        app
    >
      <v-sheet
          color="grey lighten-4"
          class="pa-4"
      >
        <div class="justify-center text-center">
          <v-avatar
              class="mb-4"
              color="grey darken-1"
              size="64"
          ></v-avatar>
        </div>


        <div class="justify-center text-center">{{ nickname }}</div>
      </v-sheet>

      <v-divider></v-divider>

      <v-list>
        <v-list-item
            v-for="[icon, text , link] in links"
            :key="icon"
            link
            :to="link"
        >
          <v-list-item-icon>
            <v-icon>{{ icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ text }}</v-list-item-title>
          </v-list-item-content>

        </v-list-item>

      </v-list>

      <template v-slot:append>
        <v-list-item link v-if="getLog" @click="Logout">
          <v-list-item-icon>
            <v-icon>mdi-logout</v-icon>
          </v-list-item-icon>
          <v-list-item-title>登出</v-list-item-title>
        </v-list-item>
      </template>

    </v-navigation-drawer>

    <v-main>
      <transition name="fade-transform" mode="out-in">
        <router-view/>
      </transition>
    </v-main>
  </v-app>
</template>

<script>

export default {
  data: () => ({
    cards: ['Today', 'Yesterday'],
    links: [],
    nickname: "管理员",
  }),
  methods:{

    checkLoginStatus(){
      // this.axios.get("")
      //     .then(res=>{
      //       let data = res.data
      //       if(data === true){
      //         this.$store.commit("Login")
      //       }else {
      //           this.changeNavigationDrawer()
      //       }
      //     })
      this.changeNavigationDrawer()
    },
    changeNavigationDrawer(){
      let isLogin = this.$store.getters.getLogin
      if (isLogin === true){
        this.links = [
          ['mdi-devices', '设备管理', '/device'],
        ]
      }else {
        this.links = [
          ['mdi-account', '登陆', '/'],
          ['mdi-account-edit', '注册', '/register'],
        ]
      }
      this.$forceUpdate()
    },
    Logout(){
      this.$store.commit("Logout")
      this.$router.push("/")
    }
  },
  created() {
    this.checkLoginStatus()
  },

  computed:{
    getLog(){
      return this.$store.getters.getLogin;
    }
  },
  watch:{
    getLog(){
      this.changeNavigationDrawer()
    }
  },
}
</script>

<style scoped>

/*
enter-active 定义进入过渡的结束状态
leave-active 定义离开过渡的结束状态
 */
.fade-transform-leave-active,
.fade-transform-enter-active {
  transition: all 0.5s;
}

/*
enter定义进入过渡的开始状态
 */
.fade-transform-enter {
  opacity: 0;
  transform: translateX(-30px);
}
/*
leave-to离场动画结束后的状态
 */
.fade-transform-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
</style>
