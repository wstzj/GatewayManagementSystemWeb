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
            <v-col>
              设备添加时间:{{ deviceStartTime }}
            </v-col>
            <v-col>
              设备运行时间:{{ deviceRunningTime }}
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
            @click="unRegisteredDevice"
        >
          删除设备
        </v-btn>
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
  name: "RegisteredDeviceManagementComponent",
  data: () => ({
    dialog: false,
    deviceAccessTime: "",
    deviceStartTime: "",
    deviceRunningTime:""
  }),
  mounted() {
    this.updateTime()
    let that = this;
    console.log(this.deviceStartTime)
    this.timer = setInterval(() => {
      let duration = moment().format('x') - moment(that.deviceStartTime).format('x')
      that.deviceRunningTime = moment().subtract(duration).format("HH:mm:ss")
    }, 1000)
  },
  methods: {
    updateTime() {
      this.deviceAccessTime = moment.unix(this.$props.device.deviceAccessTime).format("YYYY年M月D日HH:mm:ss")
      this.deviceStartTime = moment.unix(this.$props.device.deviceStartTime).format("YYYY年M月D日HH:mm:ss")

    },
    unRegisteredDevice() {
      this.$props.device.deviceName = "未命名设备"
      this.$store.state.unRegisteredDevice.push(this.$props.device)
      this.$store.state.registeredDevice.splice(this.$props.serialNumber, 1)
    },
  },
}
</script>

<style scoped>

</style>