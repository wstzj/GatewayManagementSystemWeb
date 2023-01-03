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
              设备接入日期:{{ deviceAccessTime }}
            </v-col>
            <!--              <v-col>-->
            <!--                设备运行时间:-->
            <!--              </v-col>-->
          </v-row>

        </v-col>
        <v-divider
            vertical
            class="mx-4"
        />
        <v-col cols="2">
          <v-container class="mt-4">
            查看设备更多信息？
            <br>
            <a href="javascript:void(0)">了解更多</a>
          </v-container>

        </v-col>
      </v-row>
      <v-card-actions>
        <v-spacer></v-spacer>
<!--        <v-dialog-->
<!--            v-model="dialog"-->
<!--            width="600px"-->
<!--        >-->
<!--          <template v-slot:activator="{ on, attrs }">-->
<!--            <v-btn-->
<!--                text-->
<!--                color="#1E88E5"-->
<!--                v-bind="attrs"-->
<!--                v-on="on"-->
<!--            >-->
<!--              查看详情-->
<!--            </v-btn>-->
<!--          </template>-->
<!--          <iframe width="560"-->
<!--                  height="315"-->
<!--                  v-if="dialog"-->
<!--                  :src="device.deviceStreamingAddress"-->
<!--                  frameborder="0"-->
<!--                  allowfullscreen></iframe>-->
<!--        </v-dialog>-->
        <v-dialog
            v-model="dialog1"
            width="600px"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-btn
                text
                color="#1E88E5"
                v-bind="attrs"
                v-on="on"
            >
              启动设备
            </v-btn>
          </template>
          <v-card>
            <v-card-title>
              设备启动
            </v-card-title>
            <v-card-text>
              <v-text-field
                  v-model="deviceName"
                  label="设备命名"
                  outlined
                  clearable
              ></v-text-field>
              <v-text-field
                  v-model="deviceStreamingAddress"
                  label="设备推流地址"
                  outlined
                  disabled
              ></v-text-field>
            </v-card-text>
            <v-card-actions>
              <v-spacer/>
              <v-btn
                  color="primary"
                  @click="registerDevice"
              >
                添加
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>

      </v-card-actions>
    </v-expansion-panel-content>
  </v-expansion-panel>
</template>

<script>
let moment = require('moment');
moment().format();

export default {
  props: {
    device: {},
    serialNumber: Number,
  },
  name: "UnregisteredDeviceManagementComponent",
  data: () => ({
    deviceName: "",
    dialog: false,
    dialog1: false,
    deviceAccessTime: "",
    deviceStreamingAddress:""
  }),
  mounted() {
    this.deviceAccessTime = moment.unix(this.$props.device.deviceAccessTime).format("YYYY年M月D日HH:mm:ss")
    this.deviceStreamingAddress = this.$props.device.deviceStreamingAddress
  },
  methods: {
    registerDevice() {
      this.dialog1 = false
      this.$props.device.deviceStartTime = moment().unix().toString()
      this.$props.device.deviceName = this.deviceName
      this.$store.state.registeredDevice.push(this.device)
      this.$store.state.unRegisteredDevice.splice(this.serialNumber, 1)
    }
  }
}
</script>

<style scoped>

</style>