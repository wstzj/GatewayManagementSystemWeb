<template>
  <v-expansion-panel>
    <v-expansion-panel-header>
      {{ device.deviceName }}
    </v-expansion-panel-header>
    <v-expansion-panel-content color="#F5F5F5">
        <v-row no-gutters class="pl-4 pr-4">
          <v-col cols="9">
            <v-row class="mt-4">
              <v-col>
                设备类型:{{ device.deviceType }}
              </v-col>
              <v-col>
                设备编号：{{ device.deviceNumber }}
              </v-col>
            </v-row>
            <v-row class="mt-4">
              <v-col>
                设备接入日期:
              </v-col>
              <v-col>
                设备运行时间:
              </v-col>
            </v-row>

          </v-col>
          <v-divider
              vertical
              class="mx-4"
          />
          <v-col cols="2">
            查看产品更多信息？
            <br>
            <a href="javascript:void(0)">了解更多</a>
          </v-col>
        </v-row>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-dialog
            v-model="dialog"
            width="600px"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-btn
                text
                color="#1E88E5"
                v-bind="attrs"
                v-on="on"
            >
              查看详情
            </v-btn>
          </template>
          <iframe width="560"
                  height="315"
                  v-if="dialog"
                  :src="device.deviceStreamingAddress"
                  frameborder="0"
                  allowfullscreen></iframe>
        </v-dialog>
          <v-btn
              text
              color="#1E88E5"
              @click="registerDevice"
          >
            添加设备
          </v-btn>
        </v-card-actions>
    </v-expansion-panel-content>
  </v-expansion-panel>
</template>

<script>
export default {
  props: {
    device: {},
    serialNumber:Number,
  },
  name: "UnregisteredDeviceManagementComponent",
  data: () => ({
    dialog: false,
  }),
  methods:{
    registerDevice(){
      this.$store.state.registeredDevice.push(this.device)
      this.$store.state.unRegisteredDevice.splice(this.serialNumber,1)
    }
  }
}
</script>

<style scoped>

</style>