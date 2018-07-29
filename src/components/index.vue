<template>
  <div>
      <nav-header></nav-header>
      <!--轮播开始-->
      <Carousel :dots="setting.dots" v-model="setting.value" loop>
          <CarouselItem>
              <img src="/static/images/banner.jpg" alt="dnaer">
          </CarouselItem>
          <CarouselItem>
              <img src="/static/images/banner.jpg" alt="dnaer">
          </CarouselItem>
          <CarouselItem>
              <img src="/static/images/banner.jpg" alt="dnaer">
          </CarouselItem>
          <CarouselItem>
              <img src="/static/images/banner.jpg" alt="dnaer">
          </CarouselItem>
      </Carousel>
      <!--轮播结束-->
      <!--轮播开始-->
      <div class="second_carousel">
        <div class="second_carousel_content">
          <ul class="tab_click">
            <li class="tab_list" v-for="(item,index) in tabs" :key="index" :class="{active:index == num}" @click="tab(index)">
              <div class="tab_border_up" v-show="index == num"></div>
              <div class="tab_content">
                <h3>{{item.title}}</h3>
                <p>{{item.subTitle}}</p>
              </div>
            </li>
          </ul>
          <div class="tabCon">
            <div v-for='(itemCon,index) in tabContents' :key="index" v-show=" index == num">
              <img :src="itemCon" alt="">
            </div>
          </div>
        </div>
      </div>
      <!--轮播结束-->
      <!--简介开始-->
      <div class="detail_dnaer">
          <div class="detail">
              <img src="/static/images/dnaer_01.png" alt="dnaer">
              <h3 class="detail_title">关于DNAER平台</h3>
              <p>DNAER平台是基于新社交科技的智能平台在DNAER，你可以</p>
          </div>
          <div class="detail">
              <img src="/static/images/dnaer_02.png" alt="dnaer">
              <h3 class="detail_title">DNAER币规则</h3>
              <p>在DNAER平台，你们每一次操作都是你的数据资产，我们将其变为价值</p>
          </div>
          <div class="detail">
              <img src="/static/images/dnaer_03.png" alt="dnaer">
              <h3 class="detail_title">超级节点</h3>
              <p>成为DNAER的超级节点，享受更多超级待遇超级节点规则</p>
          </div>
          <div class="detail">
              <img src="/static/images/dnaer_04.jpg" alt="dnaer">
              <h3 class="detail_title">新社交科技</h3>
              <p>基于SNA智能社交科技的新型社交平台采用分布式</p>
          </div>
      </div>
      <!--简介结束-->
      <!--简介2开始-->
      <div class="dnaer_use">
          <h3 class="use_title">你使用, 你创造, 你受益</h3>
          <div class="use_content">
              <div class="use_content_detail">
                  <div class="use_content_box">
                      <img src="/static/images/dnaer_home.png" alt="">
                      <h3>基于各种形式价值裂变引擎</h3>
                      <p>DNAERER的核心DNAER是高质量用户产生的高质量内容，内容形式可以包括图片、文章、语音、视频、富媒体等等。这些内容可以使专家的专业内容，也可以是普通用户自发产生的内容。DANER通过将区块链社交和股东价值与用户的内容创作、互动、分享有机结合.....</p>
                  </div>
              </div>
              <div class="use_content_detail">
                  <div class="use_content_box">
                      <img src="/static/images/dnaer_building.png" alt="">
                      <h3>产品与服务应用引擎</h3>
                      <p>在DNAERER，用户可以搜索内容、人、知识；可以创作、编辑素材和内容，形成自己的自媒体，可以学习、咨询、整合资源；可以在线与朋友、大咖、专家、明星实时沟通、互动；可以在线购物、打车、听音乐、发朋友圈；可以在线支付现金，进行资产管理。</p>
                  </div>
              </div>
              <div class="use_content_detail">
                  <div class="use_content_box">
                      <img src="/static/images/dnaer_tree.png" alt="">
                      <h3>百亿级TOKEN裂变器</h3>
                      <p>基于区块链技术的DNAERER网络，让每一个参与其中的用户都能够获得技术革新带来的红利，DNAER的每一位用户都是这个网络的股东，DNAER平台将发行100亿DNAER币，管理和技术团队将拥有10亿DNAER币，剩下的90亿枚DNAER币将由DNAER的所用用户共同.....</p>
                  </div>
              </div>
          </div>
      </div>
      <!--简介2结束-->
      <!--新闻开始-->
      <div class="dnaer_news">
          <h3 class="news_title">DNAER新闻</h3>
          <div class="news_content">
              <div class="news_left">
                  <h2>DNAER1.0系统正式发布</h2>
                  <h2>DNAER企业服务入口开启</h2>
                  <h2>DNAER团队规模突破百人</h2>
                  <h2>DNAER百亿TOKEN裂变器</h2>
                  <h2>DNAER接受36KR采访</h2>
                  <button class="news_button">查看全部内容</button>
              </div>
              <div class="news_middle">
                  <img src="/static/images/news_img.jpg" alt="">
                  <div class="news_detail">
                      <h3>DNAER1.0系统正式发布</h3>
                      <p>English title</p>
                  </div>
              </div>
              <div class="news_middle">
                  <img src="/static/images/news_img.jpg" alt="">
                  <div class="news_detail">
                      <h3>DNAER1.0系统正式发布</h3>
                      <p>English title</p>
                  </div>
              </div>
          </div>
      </div>
      <!--新闻结束-->
      <!--招聘开始-->
      <div class="recruit">
            <!--注释备用-->
          <div class="triangle_border_up"></div>
          <Carousel v-model="three_carousel.value" :dots="three_carousel.dots" loop>
              <CarouselItem>
                  <div class="demo-carousel">
                    <img src="/static/images/1.jpg" alt="">
                  </div>
              </CarouselItem>
              <CarouselItem>
                  <div class="demo-carousel">
                    <img src="/static/images/2.jpg" alt="">
                  </div>
              </CarouselItem>
          </Carousel>
      </div>
      <!--招聘结束-->
      <nav-footer></nav-footer>
  </div>
</template>
<script>
import NavHeader from '@/components/common/NavHeader.vue'
import NavFooter from '@/components/common/NavFooter.vue'
export default {
  data () {
    return {
      tabs: [{
        title: '标题一',
        subTitle: '副标题1'
      }, {
        title: '标题二',
        subTitle: '副标题2'
      }, {
        title: '标题三',
        subTitle: '副标题3'
      }],
      tabContents: ['/static/images/second_test_01.png', '/static/images/second_test_02.png', '/static/images/secound_test_03.png'],
      num: 0,
      second_carousel: {
        value: 1,
        dots: 'none'
      },
      setting: {
        value: 0,
        dots: 'none'
      },
      three_carousel: {
        value: 0,
        dots: 'outside'
      }
    }
  },
  components: {
    NavHeader,
    NavFooter
  },
  methods: {
    tab (index) {
      this.num = index
    }
  }
}
</script>
<style lang="less">
  @import './../assets/css/Index/Index.less';
</style>
