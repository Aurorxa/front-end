<template>
  <div class="comment">
    <detail-section :more-text="`查看全部${commentInfo.totalCount}条评论`" title="热门评论">
      <div class="comment-inner">
        <div class="header">
          <div class="left">
            <div class="score">
              <span class="text">{{ commentInfo.overall }}</span>
              <div class="line"></div>
            </div>
            <div class="info">
              <div class="title">{{ commentInfo.scoreTitle }}</div>
              <div class="count">{{ commentInfo.totalCount }}条评论</div>
              <div class="star">
                <van-rate v-model="commentInfo.overall" allow-half color="#ff9645" readonly size="12"/>
              </div>
            </div>
          </div>
          <div class="right">
            <template v-for="(item, index) in commentInfo.subScores" :key="item">
              <span class="item">{{ item }}</span>
            </template>
          </div>
        </div>
        <div class="tags">
          <template v-for="(item, index) in commentInfo.commentTagVo" :key="index">
            <span :style="{ color: item.color, background: item.backgroundColor }"
                  class="item">
              {{ item.text }}
            </span>
          </template>
        </div>
        <div class="content">
          <div class="user">
            <div class="avatar">
              <img :src="commentInfo.comment.userAvatars" alt="">
            </div>
            <div class="profile">
              <div class="name">{{ commentInfo.comment.userName }}</div>
              <div class="date">{{ commentInfo.comment.checkInDate }}</div>
            </div>
          </div>
          <div class="text">
            {{ commentInfo.comment.commentDetail }}
          </div>
        </div>
      </div>
    </detail-section>
  </div>
</template>

<script setup>
import DetailSection from "@/components/detail-section/index.vue"

defineProps({
  commentInfo: {
    type: Object,
    default: () => ({})
  }
})

</script>

<style lang="less" scoped>
.comment-inner {
  padding: 10px 0;

  .header {
    display: flex;

    .left {
      display: flex;
      align-items: center;

      .score {
        width: 65px;
        height: 100%;
        color: #333;
        position: relative;
        font-weight: 600;

        .text {
          font-size: 48px;
          position: relative;
          z-index: 9;
        }

        .line {
          width: 66px;
          height: 6px;
          background: linear-gradient(90deg, #fa8c1d, #fcaf3f);
          border-radius: 3px;
          position: absolute;
          bottom: 6px;
          z-index: 5;
        }
      }

      .info {
        margin-left: 19px;
        font-size: 12px;
        color: #333;

        .count {
          margin: 3px 0;
          color: #999;
        }
      }
    }

    .right {
      display: flex;
      flex-wrap: wrap;
      flex: 1;
      justify-content: flex-end;

      .item {
        margin-left: 5px;
        font-size: 12px;
        color: #666;
      }
    }
  }

  .tags {
    display: flex;
    margin: 10px 0;
    flex-wrap: wrap;

    .item {
      padding: 3px 5px;
      margin-right: 8px;
      margin-top: 5px;
      border-radius: 8px;
      font-size: 12px;
    }
  }

  .content {
    padding: 10px;
    border-radius: 6px;
    background-color: #f7f9fb;

    .user {
      display: flex;

      .avatar {
        img {
          width: 32px;
          height: 32px;
          border-radius: 50%;
        }
      }

      .profile {
        margin-left: 8px;

        .date {
          margin-top: 3px;
          font-size: 12px;
          color: #999;
        }
      }
    }

    .text {
      font-size: 12px;
      line-height: 16px;
      color: #333;
      margin-top: 16px;
    }
  }
}
</style>
