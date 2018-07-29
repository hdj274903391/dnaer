<template>
  <div>
      <div class="navHeader_box" ref="header">
          <div class="navHeader">
              <h1 class="logo" @click="backIndex"><img :src="imgSrc" alt="DNAER"></h1>
              <div class="content">
                  <Menu class="menu" mode="horizontal" @on-select="getIndex" :theme="theme1" :active-name="active">
                      <MenuItem name="index" :style="'color:'+color+'!important'">
                          首页
                      </MenuItem>
                      <MenuItem name="about" :style="'color:'+color+'!important'">
                          关于DNAER
                      </MenuItem>
                      <MenuItem name="create" :style="'color:'+color+'!important'">
                          你使用、你创造、你受益
                      </MenuItem>
                      <MenuItem name="laboratory" :style="'color:'+color+'!important'">
                          DNAER创新实验室
                      </MenuItem>
                      <MenuItem name="contact" :style="'color:'+color+'!important'">
                          联系我们
                      </MenuItem>
                      <MenuItem name="recruit" :style="'color:'+color">
                          招贤纳士
                      </MenuItem>
                  </Menu>
                  <div class="content_right">
                      <button class="navHeader_button">登录</button>
                      <div class="icon iconfont icon-suosou" :style="'color:'+color+'!important'"></div>
                      <div class="icon iconfont icon-download" :style="'color:'+color+'!important'"></div>
                      <div class="icon iconfont icon-wode" :style="'color:'+color+'!important'"></div>
                      <div><img src="/static/images/china.svg" alt="" style="width:17px;height:26px;"></div>
                  </div>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
export default {
  props: {
    color: {
      type: String,
      default: '#fff'
    },
    imgSrc: {
      type: String,
      default: '/static/images/LOGO.png'
    },
    active: {
      type: String,
      default: 'index'
    }
  },
  data () {
    return {
      theme1: 'light'
    }
  },
  methods: {
    getIndex (index) {
      this.$router.push({ name: index })
    },
    backIndex () {
      this.$router.push({ name: 'index' })
    }
  },
  mounted () {
    // console.log(this.color)
  }
}
</script>
<style lang="less">
    @import '../../assets/css/Index/Index.less';
</style>
