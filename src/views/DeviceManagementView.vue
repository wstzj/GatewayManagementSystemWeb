<template>
  <v-card elevation="0">
    <v-tabs
        v-model="tab"
        background-color="transparent"
        primary
        grow
    >
      <v-tab
          v-for="item in items"
          :key="item"
      >
        {{ item }}
      </v-tab>
    </v-tabs>
    <v-card
        class="ml-2 mr-2 pr-4 pl-4"
        elevation="0"
    >
      <v-tabs-items v-model="tab">
        <v-tab-item class="mb-4">
          <v-row>
            <v-col cols="1">
              <v-btn
                  class="mt-6"
                  color="primary"
                  @click="none1"
              >
                收起设备面板
              </v-btn>
            </v-col>
            <v-col cols="1">
              <v-btn
                  class="mt-6"
                  color="primary"
                  @click="none1"
              >
                刷新设备列表
              </v-btn>
            </v-col>
          </v-row>

          <v-expansion-panels
              inset
              multiple
              focusable
              class="mt-6"
              v-model="panel1"
          >
            <registered-device-management-component
                v-for="(item,i) in registered_device"
                :key="i"
                :device=item
                :serial-number="i"
            />
          </v-expansion-panels>
        </v-tab-item>
        <v-tab-item class="mb-4">
          <v-row>
            <v-col cols="1">
              <v-btn
                  class="mt-6"
                  color="primary"
                  @click="none2"
              >
                收起设备面板
              </v-btn>
            </v-col>
            <v-col cols="1">
              <v-btn
                  class="mt-6"
                  color="primary"
                  @click="none2"
              >
                刷新设备列表
              </v-btn>
            </v-col>
          </v-row>
          <v-expansion-panels
              inset
              multiple
              focusable
              class="mt-6"
              v-model="panel2"
          >
            <unregistered-device-management-component
                v-for="(item,i) in unregistered_device"
                :key="i"
                :device=item
                :serial-number="i"
            />
          </v-expansion-panels>
        </v-tab-item>
      </v-tabs-items>
    </v-card>
  </v-card>


</template>

<script>


import RegisteredDeviceManagementComponent from "@/components/RegisteredDeviceManagementComponent";
import UnregisteredDeviceManagementComponent from "@/components/UnregisteredDeviceManagementComponent";
export default {
  name: "DeviceManagementView",
  components: {UnregisteredDeviceManagementComponent, RegisteredDeviceManagementComponent},
  data: () => ({
    panel1: [],
    panel2: [],
    tab: null,
    items: [
      '已启动设备', '未启动设备'
    ],
    registered_device: [],
    unregistered_device: [],

  }),
  created() {
    this.registered_device = this.$store.state.registeredDevice
    this.unregistered_device = this.$store.state.unRegisteredDevice
  },
  methods: {
    none1() {
      this.panel1 = []
    },
    none2() {
      this.panel2 = []
    },
  },
  computed:{
    getRegisteredDevice(){
      return this.$store.state.registeredDevice
    },
    // getUnRegisteredDevice(){
    //   return this.$store.state.unRegisteredDevice
    // },
  },
  watch:{
    getRegisteredDevice(){
      if (this.tab){
        this.tab = 0
      }else {
        this.tab = 1
      }
      this.none1()
      this.none2()
      this.registered_device = this.$store.state.registeredDevice
      this.unregistered_device = this.$store.state.unRegisteredDevice
      this.$forceUpdate()
    },
    // getUnRegisteredDevice(){
    //   this.tab = 1
    //   this.none1()
    //   this.none2()
    //   this.$forceUpdate()
    // }
  }
}
</script>

<style scoped>

</style>