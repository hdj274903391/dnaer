<template>
  <div>
    <nav-header :color="color" :imgSrc="imgSrc" :active="active"></nav-header>
    <div class="about_box">
      <div class="about_content">
        <div class="bread">
          <Breadcrumb>
            <BreadcrumbItem to="/">首页</BreadcrumbItem>
            <BreadcrumbItem to="/laboratory">实验室</BreadcrumbItem>
          </Breadcrumb>
        </div>
        <div class="about_bottom">
          <div class="bottom_left">
            <h1><i class="icon iconfont icon-fangchan"></i>DNAER创新实验室</h1>
            <Menu mode="vertical" class="left_menu" @on-select="getIndex" :theme="theme1" active-name="laboratory" style="height:300px;">
              <MenuItem name="laboratory" class="menu_item">
                新社交科技
              </MenuItem>
              <MenuItem name="bigData" class="menu_item">
                大数据推荐系统
              </MenuItem>
              <MenuItem name="experience" class="menu_item">
                用户体验研究
              </MenuItem>
              <MenuItem name="distributed" class="menu_item">
                分布式数据系统
              </MenuItem>
            </Menu>
          </div>
          <Card class="bottom_right">
            <div class="right_content">
              <router-view></router-view>
            </div>
          </Card>
        </div>
      </div>
    </div>
    <nav-footer></nav-footer>
  </div>
</template>
<script>
import NavHeader from '@/components/common/NavHeader'
import NavFooter from '@/components/common/NavFooter'
export default {
  data () {
    return {
      theme1: 'dark',
      color: '#000',
      imgSrc: '/static/images/LOGO-2.png',
      active: 'laboratory'
    }
  },
  components: {
    NavHeader,
    NavFooter
  },
  methods: {
    getIndex (index) {
      this.$router.push({ name: index })
    }
  }
}
</script>
<style lang="less">
  @import './../../assets/css/about.less';
</style>
