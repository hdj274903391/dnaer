<template>
    <div>
      <nav-header :color="color" :imgSrc="imgSrc" :active="active"></nav-header>
      <div class="about_box">
        <div class="about_content">
          <div class="bread">
            <Breadcrumb>
              <BreadcrumbItem to="/">首页</BreadcrumbItem>
              <BreadcrumbItem to="/about">关于DNAER</BreadcrumbItem>
            </Breadcrumb>
          </div>
          <div class="about_bottom">
            <div class="bottom_left">
              <h1><i class="icon iconfont icon-fangchan"></i>关于DNAER</h1>
              <Menu mode="vertical" class="left_menu" @on-select="getIndex" :theme="theme1" active-name="about" style="height:300px;">
                <MenuItem name="about" class="menu_item">
                  DNAER简介
                </MenuItem>
                <MenuItem name="team" class="menu_item">
                  DNAER团队
                </MenuItem>
                <MenuItem name="target" class="menu_item">
                  DNAER的目标和使命
                </MenuItem>
                <MenuItem name="culture" class="menu_item">
                  DNAER的企业文化
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
      active: 'about'
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
