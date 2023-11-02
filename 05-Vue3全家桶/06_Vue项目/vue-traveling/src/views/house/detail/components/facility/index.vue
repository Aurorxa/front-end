<template>
  <div class="house-facility">
    <DetailSection more-text="查看全部设施" title="房屋设施">
      <div class="facility-inner">
        <template v-for="(item, index) in facilityInfo?.houseFacilitys" :key="index">
          <div v-if="facilityInfo?.facilitySort?.includes(index)" class="item">
            <div class="head">
              <img :src="item?.icon" alt="">
              <div class="text">{{ item?.groupName }}</div>
            </div>
            <div class="list">
              <template v-for="(item2, indey) in item?.facilitys.slice(0, 4)" :key="indey">
                <div class="item2">
                  <i class="icon_check icon"></i>
                  <span>{{ item2?.name }}</span>
                </div>
              </template>
            </div>
          </div>
        </template>
      </div>
    </DetailSection>
  </div>
</template>

<script setup>
import DetailSection from "@/components/detail-section/index.vue";

defineProps({
  facilityInfo: {
    type: Object,
    default: () => ({})
  }
})
</script>

<style lang="less" scoped>
.house-facility {
  .facility-inner {
    padding: 5px 0;
    border-radius: 6px;
    font-size: 12px;
    background-color: #f7f9fb;

    .item {
      display: flex;
      margin: 25px 0;

      .head {
        width: 90px;
        text-align: center;

        img {
          width: 20px;
          height: 20px;
        }

        .text {
          margin-top: 5px;
          color: #000;
        }
      }

      .list {
        flex: 1;
        display: flex;
        flex-wrap: wrap;
        align-items: center;

        .item2 {
          display: flex;
          align-items: center;
          box-sizing: border-box;
          width: 50%;
          margin: 4px 0;

          .icon {
            margin: 0 6px;
          }

          .text {
            color: #333;
          }
        }
      }
    }
  }
}
</style>