<template>
  <div>
    <nav-header :color="color" :imgSrc="imgSrc" :active="active"></nav-header>
    <div class="about_box">
      <div class="about_content">
        <div class="bread">
          <Breadcrumb>
            <BreadcrumbItem to="/">首页</BreadcrumbItem>
            <BreadcrumbItem to="/recruit">招贤纳士</BreadcrumbItem>
          </Breadcrumb>
        </div>
        <div class="about_bottom">
          <div class="bottom_left">
            <h1><i class="icon iconfont icon-fangchan"></i>招贤纳士</h1>
            <Menu mode="vertical" class="left_menu" @on-select="getIndex" :theme="theme1" active-name="recruit" style="height:300px;">
              <MenuItem name="recruit" class="menu_item">
                职能类
              </MenuItem>
              <MenuItem name="design" class="menu_item">
                设计类
              </MenuItem>
              <MenuItem name="dev" class="menu_item">
                技术类
              </MenuItem>
            </Menu>
          </div>
          <Card class="bottom_right">
            <div class="content_right">
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
      active: 'recruit'
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
  @import './../../assets/css/recruit.less';
</style>
