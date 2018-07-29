<template>
    <div>
      <div class="footer">
        <div class="footer_content">
          <div class="footer_box">
            <div class="footer_top">
              <div class="footer_left">
                <img src="/static/images/LOGO-2.png" alt="">
                <div class="footer_icon">
                  <i class="icon iconfont icon-gugegoogle115"></i>
                  <i class="icon iconfont icon-instagram"></i>
                  <i class="icon iconfont icon-pinterest"></i>
                  <i class="icon iconfont icon-twitterlogo"></i>
                  <i class="icon iconfont icon-facebook"></i>
                </div>
              </div>
              <div class="footer_right">
                <div class="right_href">
                  <h3>关于</h3>
                  <p><router-link :to="{name:'index'}">内容文字</router-link></p>
                  <p><router-link :to="{name:'index'}">内容文字</router-link></p>
                  <p><router-link :to="{name:'index'}">内容文字</router-link></p>
                  <p><router-link :to="{name:'index'}">内容文字</router-link></p>
                </div>
                <div class="right_href">
                  <h3>商务合作</h3>
                  <p><router-link :to="{name:'index'}">内容文字</router-link></p>
                  <p><router-link :to="{name:'index'}">内容文字</router-link></p>
                  <p><router-link :to="{name:'index'}">内容文字</router-link></p>
                  <p><router-link :to="{name:'index'}">内容文字</router-link></p>
                </div>
                <div class="right_href">
                  <h3>联系我们</h3>
                  <p><router-link :to="{name:'index'}">内容文字</router-link></p>
                  <p><router-link :to="{name:'index'}">内容文字</router-link></p>
                  <p><router-link :to="{name:'index'}">内容文字</router-link></p>
                  <p><router-link :to="{name:'index'}">内容文字</router-link></p>
                </div>
                <div class="right_sub">
                  <h3>订阅</h3>
                  <p>第一时间了解我们的最新信息</p>
                  <Input v-model="value" placeholder="请输入您的有邮箱" style="width:155px"></Input>
                  <Button type="primary" class="sub_button">订阅</Button>
                </div>
              </div>
            </div>
            <div class="footer_bottom">
              <p>Copyright © 2018 DNAER 版权所有 | <router-link :to="{name:'index'}">隐私权政策</router-link> | <router-link :to="{name:'index'}">使用条款</router-link> | <router-link :to="{name:'index'}">疆湖名录</router-link> | <router-link :to="{name:'index'}">网站地图</router-link><img src="/static/images/china.svg" alt="" style="width:17px;height:26px;margin:10px 0 -9px 12px;"></p>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>
<script>
export default {
  data () {
    return {
      value: ''
    }
  }
}
</script>
<style lang="less">
  .footer {
    width:100%;
    height:436px;
    background:#fff;
    position: relative; /*保持底部，不脱离文档流*/
    bottom:0;
    .footer_content {
      width:1364px;
      height:436px;
      margin:0 auto;
      border:1px solid #fff;
      box-sizing: border-box;
      .footer_box {
        width:100%;
        height:330px;
        margin-top:77px;
        display: flex;
        flex-wrap: wrap;
        flex-direction: column;
        justify-content: space-between;
        .footer_top {
          display:flex;
          justify-content: space-between;
          .footer_left {
            width:335px;
            height:150px;
            display: flex;
            flex-wrap: wrap;
            flex-direction: column;
            justify-content: space-between;
            img {
              width:94px;
              height:24px;
            }
            .footer_icon {
              width:100%;
              height:25px;
              /*background:red;*/
              display: flex;
              justify-content: space-between;
              i {
                color:#dcdcdc;
                font-size:18px;
              }
            }
          }
          .footer_right {
            width:752px;
            height:150px;
            display:flex;
            justify-content: space-between;
            .right_href {
              display:flex;
              flex-direction: column;
              justify-content: space-between;
              min-width:80px;
              height:150px;
              h3 {
                color:#464646;
                font-size:15px;
                font-weight: bold;
              }
              p {
                a {color:#8c8c8c;}
              }
            }
            .right_sub {
              width:160px;
              height:150px;
              display:flex;
              flex-direction: column;
              justify-content: space-between;
              h3 {
                color:#464646;
                font-size:15px;
                font-weight: bold;
              }
              .sub_button {
                width:58px;
                height:28px;
                background:#464646;
                border-color:#464646;
                &:hover {
                  border-color:#464646;
                }
              }
            }
          }
        }
        .footer_bottom {
          width:100%;
          height:100px;
          p {
            margin-top:70px;
            height:45px;
            a {color:#676767;}
          }
        }
      }
    }
  }
</style>
