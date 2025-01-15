<script lang="ts" setup>
import type { Ref } from 'vue'
import { ImagePreview } from 'vant'

import type { Balls } from '~/api'
import { getAllBallList } from '~/api'

const balls: Ref<Balls[]> = ref([])
const detailBalls: Ref<Balls[]> = ref([])
const centerLngLat = ref({ lng: 120.665031, lat: 27.775513 })
onMounted(() => {
  fetchData()
})
function changeCenter(lng: number, lat: number) {
  centerLngLat.value.lng = lng
  centerLngLat.value.lat = lat
}
function reset() {
  fetchData()
}

function fetchData() {
  getAllBallList().then((res) => {
    if (res.code === 200) {
      balls.value = res.data
      detailBalls.value = res.data
    }
  })
}
function clickPic(id: number) {
  ImagePreview(['https://fastly.jsdelivr.net/npm/@vant/assets/apple-1.jpeg'])
}
</script>

<template>
  <div>
    <van-sticky>
      <baidu-map w-full class="h-[70vh]" :center="centerLngLat" :zoom="15">
        <bm-marker v-for="item in balls" :key="item.id" :position="{ lng: item.lng, lat: item.lat }" @click="detailBalls = [item]">
          <!-- <bm-label :content="item.name" :label-style="{ color: 'red', fontSize: '24px' }" :offset="{ width: -35, height: 30 }" /> -->
        </bm-marker>
      </baidu-map>
    </van-sticky>
    <van-divider> 瑞安网球地图 </van-divider>
    <div w-full class="bg-[#F7F8FA]">
      <van-cell-group inset>
        <div v-for="(item, index) in detailBalls" :key="item.id">
          <van-card
            :price="item.price"
            :desc="item.address"
            :title="item.name"
            :thumb="item.imgurl"
            bg-white
            @click="changeCenter(item.lng, item.lat)"
            @click-thumb="clickPic(item.id)"
          >
            <template #tags>
              <span mt-5>{{ item.openingHours }}</span>
            </template>
          </van-card>
          <van-divider v-if="detailBalls.length > 1 && index !== detailBalls.length - 1" />
        </div>
      </van-cell-group>
      <van-sticky v-if="detailBalls.length === 1" :offset-bottom="50" position="bottom">
        <van-button round type="success" @click="reset">
          重置
        </van-button>
      </van-sticky>
    </div>
  </div>
</template>

<style lang="scss" scoped>

</style>
