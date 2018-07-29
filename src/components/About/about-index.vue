<template>
  <div>
    <div class="detail_content">
      <h1>DNAER平台简介</h1>
      <div class="detail_text">
        <p>DNAER是基于区块链与新社交科技、移动互联网大数据关系推荐引擎，是小而精、高价值内容的用户强链接平台</p>
        <p>在DNAER，你可以查看、搜索、创作、分享高质量的短视频、新闻、音乐、图文等内容。</p>
        <p>在DNAER，你可以查看别人直播，或者成为主播，与他人分享你的精彩。</p>
        <p>在DNAER，你可以与好友、附近的人、兴趣相投的陌生人进行联系与沟通，查看他们的朋友圈，发送文字、语音、视频、红包等等。</p>
      </div>
      <div class="detail_img">
        <img src="/static/images/detail_test.png" alt="">
      </div>
      <div class="detail_text">
        <p>在DNAER，你可以与你感兴趣的内容创作者直接联络，查看他创作的内容，购买他提供的产品和服务，进行打赏。</p>
        <p style="line-height: 35px;">在DNAER，你可以加入你感兴趣的任意一个频道，与千万同频的人，分享自己的经验、见解、作品，并收货他们的认同，提供自己的产品与服务，并获得他们的认可。</p>
      </div>
      <div class="part-two">
        <h2>DNAER股东</h2>
        <p>在DNAERER，你的每一次参与都将被记录，你的每一次成长、每一个点赞、每一次分享、每一次消费、获得多少认同、收获多少打赏、认识多少朋友、又被多少人追随... 你的所有数据都将被记录在DNAERER网络，讲转化为一个段时间内的贡献值，我们将根据你的贡献值，向你分配DNAER币，1个DNAER币相当于DNAER体系内的1股，代表着你成为了DNAER的股东，享受股份的分红与升值。</p>
      </div>
      <div class="part-three">
        <h2>分红</h2>
        <div class="three-top">
          <p>在DNAER：</p>
          <p>我们将每季度公司盈利的80%，面向持有DNAER币的股东进行分红。</p>
        </div>
        <div class="part-three-img">
          <img src="/static/images/detail-three-test.png" alt="">
          <img src="/static/images/detail-three-test.png" alt="">
          <img src="/static/images/detail-three-test.png" alt="">
        </div>
        <div class="three-bottom">
          <p>在DNAER:</p>
          <p>你既是粉丝，又是创作者；既是消费者，又是创业者；既是专家，又是小白；既是领袖，又是追随者；既是用户，又是股东...</p>
          <p>在DNAER:</p>
          <p>去发现你的知音；去发现你的未知；去发现你的新大陆；去发现你的小宇宙；去发现你的那个ta；去发现你的EVERYTHING...</p>
          <p>活着，就要去发现更多； </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {}
  }
}
</script>
<style lang="less">
  .detail_content {
    h1 {
      text-align: center;
      font-size:18px;
      font-weight: bold;
      color:#464646;
      margin-bottom:75px;
    }
    .detail_text {
      p {
        text-align: center;
        margin:15px 0;
        color:#858585;
      }
    }
    .detail_img {
      width:100%;
      margin:45px 0 70px 0;
      img {
        background-size:cover;
        width:100%;
      }
    }
    .part-two {
      width:100%;
      margin-top:100px;
      h2 {
        text-align: center;
        margin-bottom:65px;
        font-size:18px;
        font-weight: bold;
      }
      p {
        color:#858585;
        text-align: center;
        line-height: 37px;
        font-weight: bold;
      }
    }
    .part-three {
      width:100%;
      margin:100px 0 127px 0;
      h2 {
        text-align: center;
        font-size:18px;
        font-weight: bold;
      }
      .three-top {
        width:100%;
        margin-top:20px;
        p {
          text-align: center;
          color:#858585;
          line-height: 37px;
          font-weight: bold;
        }
      }
      .three-bottom {
        width:100%;
        p {
          text-align: center;
          color:#858585;
          line-height: 37px;
          font-weight: bold;
        }
      }
      .part-three-img {
        display:flex;
        width:100%;
        margin:100px 0;
        justify-content: space-between;
        img {
          background-size:cover;
        }
      }
    }
  }
</style>
