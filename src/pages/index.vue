<script lang="ts" setup>
const ready = ({ BMap, map }) => {
  //  对地图进行自定义操作
}
</script>

<template>
  <div>
    <img src="/favicon.svg" text-black mt-5>
    <a href="" target="_blank" block mt-2 text-black dark:text-white>瑞安网球地图</a>
    <div mt-2>
      <baidu-map class="map" :center="{ lng: 118.454, lat: 32.955 }" :zoom="10" @ready="ready" />
    </div>
    <Footer />
  </div>
</template>

<style lang="scss" scoped>
.map {
  width: 100%;
  height: 1024px;
}
</style>
