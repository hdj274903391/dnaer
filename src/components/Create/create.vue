<template>
  <div>
    <nav-header :color="color" :imgSrc="imgSrc" :active="active"></nav-header>
    <div class="about_box">
      <div class="about_content">
        <div class="bread">
          <Breadcrumb>
            <BreadcrumbItem to="/">首页</BreadcrumbItem>
            <BreadcrumbItem to="/create">你使用、你创造、你受益</BreadcrumbItem>
          </Breadcrumb>
        </div>
        <div class="about_bottom">
          <div class="bottom_left">
            <h1><i class="icon iconfont icon-fangchan"></i>你创造、你使用、你受益</h1>
            <Menu mode="vertical" class="left_menu" @on-select="getIndex" :theme="theme1" active-name="create" style="height:300px;">
              <MenuItem name="create" class="menu_item">
                你创造
              </MenuItem>
              <MenuItem name="use" class="menu_item">
                你使用
              </MenuItem>
              <MenuItem name="benefit" class="menu_item">
                你受益
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
      active: 'create'
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
