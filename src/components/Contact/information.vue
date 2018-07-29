<template>
    <div>
      <div class="inform_content">
        <h2>联系方式</h2>
        <div class="address_icon"><i class="icon iconfont icon-location"></i></div>
        <div style="margin-top:30px;">
          <p class="address_detail">上海市</p>
          <p class="address_detail">闵行区联航路复地中心3号楼2楼</p>
        </div>
        <p class="inform_phone"><i class="icon iconfont icon-dianhua"></i> +021 654 476 012</p>
        <p class="inform_email"><i class="icon iconfont icon-youxiang"></i> xingqige@hotmail.com</p>
        <div class="inform_btn">
          <Button type="ghost">联系电话</Button>
          <Button type="ghost">联系地址</Button>
        </div>
        <div class="inform_area">
          <Input class="area" placeholder="请输入您的宝贵意见" style="width: 300px"></Input>
        </div>
        <div class="inform_submit">
          <Button class="submit" type="ghost">提交</Button>
        </div>
      </div>
    </div>
</template>
<style lang="less">
  .inform_content {
    width:882px;
    margin:0 auto;
    h2 {
      text-align: center;
      font-size:18px;
      font-weight: bold;
      margin:80px 0 10px 0;
    }
    .address_icon {
      width:100%;
      text-align: center;
      margin:20px 0;
    }
    .address_detail {
      text-align: center;
    }
    .inform_phone {
      text-align: center;
      i {
        font-size:18px;
        color:#000;
      }
    }
    .inform_email {
      text-align: center;
      i {
        font-size:18px;
        color:#000;
      }
    }
    .inform_btn {
      display:flex;
      justify-content: space-between;
      margin-top:50px;
      button {
        width:48%;
        border:1px solid #000;
        border-radius: 0 0 0;
        &:hover {
          color:#000;
        }
      }
    }
    .inform_area {
      margin-top:40px;
      .area {
        width:100% !important;
        .ivu-input {
          height:230px;
          text-align: center;
          border:1px solid #000;
          border-radius: 0 0 0;
        }
      }
    }
    .inform_submit {
      display: flex;
      justify-content: center;
      margin:20px 0 60px 0;
      .submit {
        background:#000;
        color:#fff;
        border-radius: 0 0 0;
      }
    }
  }
</style>
