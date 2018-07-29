<template>
  <div>
    <nav-header :color="color" :imgSrc="imgSrc" :active="active"></nav-header>
    <div class="about_box">
      <div class="about_content">
        <div class="bread">
          <Breadcrumb>
            <BreadcrumbItem to="/">首页</BreadcrumbItem>
            <BreadcrumbItem to="/contact">联系我们</BreadcrumbItem>
          </Breadcrumb>
        </div>
        <div class="about_bottom">
          <div class="bottom_left">
            <h1><i class="icon iconfont icon-fangchan"></i>联系我们</h1>
            <Menu mode="vertical" class="left_menu" @on-select="getIndex" :theme="theme1" active-name="contact" style="height:300px;">
              <MenuItem name="contact" class="menu_item">
                公司地址
              </MenuItem>
              <MenuItem name="information" class="menu_item">
                联系方式
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
      active: 'contact'
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
  @import './../../assets/css/contact.less';
</style>
