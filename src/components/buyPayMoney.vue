<template>
    <div class="buyPayMoney">
      <van-nav-bar title="买家打款" left-text="返回" left-arrow @click-left="onClickLeft"/>
      <div class="details">
        <ul class="dingdan">
          <li class="state">合计</li>
          <li class="money">{{orderDetail.price}}</li>
        </ul>
          <div class="content">
            <ul class="price">
              <li class="state">钱包地址</li>
              <li class="money">{{orderDetail.walletAddress}}</li>
            </ul>
            <div class="button" @click="copyToClipboard">
              复制该地址
            </div>
          </div>

        <div class="bottom">
          <div class="photobox">
              <div class="photo" v-for="(item,idx) in photoList" :key="idx">
                <img class="photo_img" :src="item.content">
                <img class="photo_del" src="../assets/shanchu.png" @click="()=>{removeFile(idx)}"/>
              </div>
              <van-uploader :after-read="afterFileAdd" accept="image/*" class="photo" v-if="photoList.length < 6">
                <div class="photo_img">
                  <img class="photo_add" src="@/assets/add-pic-icon@2x.png">
                  <p class="upload_title">上传凭证</p>
                </div>
              </van-uploader>
          </div>
          <span>*凭证图片最多可上传6张</span>
        </div>
        <div class="submit-bottom">
          <div class="submit-button" @click="requestSubmit">提交</div>
        </div>
        <pass @inputEnd="onPasswdInputEnd" ref="c1"></pass>
      </div>
    </div>
</template>

<script>
import { Toast } from 'vant'
import pass from '@/components/intpassword.vue'
const uploadedImgs = []
export default {
  name: 'buyPayMoney',
  components: {
    pass
  },
  data() {
    return {
      isShow: false,
      orderDetail: {},
      photoList: []
    }
  },
  mounted() {
    const orderId = this.$route.query.orderId
    this.queryOrderDetail(orderId)
  },
  methods: {
    onClickLeft() {
      history.go(-1)
    },
    copyToClipboard() {
      // todo
    },
    async onPasswdInputEnd(data) {
      const imageTasks = []
      for (let i = 0; i < this.photoList.length; i++) {
        imageTasks.push(this.uploadFile(this.photoList[i]))
      }
      // 上传图片结果
      const resp = await Promise.all(imageTasks)
      const images = resp.map(d => {
        if (d.data && d.data.code === 0) {
          return d.data.data
        }
        return null
      })

      this.requestUpdateOrder(images.join(','), data.passWord)
    },
    removeFile(idx) {
      this.photoList.splice(idx,1);
    },
    afterFileAdd(file) {
      console.log(file)
      this.photoList.push(file)
      if (this.photoList.length > 1) {
        const fileToUpload = this.photoList[this.photoList.length - 2]
        this.uploadFile(fileToUpload).then(d => {
          if (d.data && d.data.code === 0) {
            fileToUpload.content = `${d.data.data}`
            this.photoList = this.photoList
          }
        })
      }
    },
    // 提交
    requestUpdateOrder(images, payPassword) {
      const orderId = this.$route.query.orderId
      this.$axios({
        url: '/api/app/prebuyOrder/updateMatchingOrder',
        method: 'POST',
        data: JSON.stringify({
          orderId: orderId,
          images,
          payPassword
        })
      }).then(res => {
        if (res.data.code == 0) {
          this.orderDetail = res.data.data
        } else {
          Toast(res.data.msg || '查询失败')
        }
      })
    },
    // 查询订单详情
    queryOrderDetail(orderId) {
      this.$axios({
        url: '/api/app/prebuyOrder/getMatchingOrder',
        method: 'POST',
        data: JSON.stringify({
          orderId: orderId
        })
      }).then(res => {
        if (res.data.code == 0) {
          this.orderDetail = res.data.data
        } else {
          Toast(res.data.msg || '查询失败')
        }
      })
    },
    getBlob(buffer, format) {
      try {
        return new window.Blob(buffer, { type: format })
      } catch (e) {
        const bb = new (window.BlobBuilder ||
          window.WebKitBlobBuilder ||
          window.MSBlobBuilder)()
        buffer.forEach(buf => {
          bb.append(buf)
        })
        return bb.getBlob(format)
      }
    },
    uploadFile(file) {
      return new Promise(reslove => {
        if (uploadedImgs && uploadedImgs[file.file.name]) {
          reslove(uploadedImgs[file.file.name])
          return
        }
        const { type } = file.file
        const text = window.atob(file.content.split(',')[1])
        const buffer = new Uint8Array(text.length)
        for (let i = 0; i < text.length; i++) {
          buffer[i] = text.charCodeAt(i)
        }
        const blob = this.getBlob([buffer], type)
        const param = new window.FormData()
        param.append('imagefile', blob, file.file.name)
        const config = {
          headers: { 'Content-Type': 'multipart/form-data' }
        }
        this.$axios.post('/api/app/prebuyOrder/uploadFile', param, config).then(
          response => {
            uploadedImgs[file.file.name] = response
            reslove(response)
          },
          () => {
            reslove({})
          }
        )
      })
    },
    requestSubmit() {
      this.$refs.c1.check()
    }
  }
}
</script>

<style scoped>
.photobox {
  flex-wrap: wrap;
  display: flex;
  flex-direction: row;
  margin-bottom: 0.3rem;
}
.photo {
  position: relative;
  width: 1.8rem;
  height: 1.8rem;

  margin-right: 0.1rem;
  margin-top: 0.1rem;
}
.photo_del {
  position: absolute;
  width: 0.4rem;
  height: 0.4rem;
  right: 0;
  top: 0;
}
.photo_add {
  width: 0.6rem;
  height: 0.6rem;
}
.upload_title {
  color: #999999;
  font-size: 0.24rem;
  text-align: center;
  margin-top: 0.2rem;
}
.photo_img {
  flex-direction: column;
  align-items: center;
  justify-content: center;
  display: flex;
  width: 1.6rem;
  height: 1.6rem;
  top: 0.2rem;
  right: 0.2rem;
  left: 0;
  bottom: 0;
  position: absolute;
  border: 0.01rem solid #f4f4f4;
  box-shadow: 0 2px 3px 0 rgba(239, 239, 239, 0.5);
}
ul li {
  width: 50%;
  height: 100%;
  display: inline-block;
  float: left;
  box-sizing: border-box;
}
ul li:nth-of-type(odd) {
  font-size: 0.28rem;
  color: #999999;
}
.details {
  background-color: #ffffff;
  padding: 0rem 0.3rem;
}
.dingdan {
  width: 100%;
  height: 0.68rem;
  line-height: 0.6rem;
  border-bottom: 2px dashed #dddddd;
}
.price {
  height: 0.7rem;
  line-height: 0.7rem;
}
.button {
  width: 1.7rem;
  height: 0.56rem;
  line-height: 0.56rem;
  background: linear-gradient(left, #ff9400, #ff6808);
  margin: 0 auto;
  border-radius: 0.44rem;
  color: #ffffff;
  font-size: 0.24rem;
  text-align: center;
  margin-left: 0.2rem;
  /*position: absolute;*/
  /*top: .2rem;*/
  /*left: .5rem;*/
}
.content {
  height: 1.6rem;
  border-bottom: 2px dashed #dddddd;
}
.bottom span {
  display: block;
  width: 2.7rem;
  height: 0.44rem;
  color: #ff545d;
  font-size: 0.24rem;
}
.submit-bottom {
  width: 100%;
  height: 1.4rem;
  background-color: white;
  text-align: center;
  position: fixed;
  bottom: 0;
  left: 0;
}
.submit-button {
  width: 6.5rem;
  height: 0.88rem;
  font-size: 0.32rem;
  color: white;
  /*corner-radius: .44rem;*/
  background: linear-gradient(left, #ff9400, #ff6808);
  line-height: 0.88rem;
  text-align: center;
  border-radius: 0.44rem;
  position: absolute;
  top: 0.2rem;
  left: 0.5rem;
}
.pop-bottm {
  text-align: center;
  padding-top: 0.3rem;
}
.van-popup {
  width: 6.3rem;
  height: 3.9rem;
  margin: 0 auto;
  border-radius: 12px;
}
.line {
  width: 6.3rem;
  height: 1px;
  background-color: #dddddd;
  margin-top: 0.25rem;
}
.will-pay {
  width: 2.4rem;
  height: 0.8rem;
  line-height: 0.8rem;
  color: #ff6d0c;
  font-size: 0.32rem;
  border: 1px solid #ff6d0c;
  border-radius: 0.44rem;
  margin-left: 0.48rem;
  margin-top: 0.46rem;
}
.delay {
  width: 2.4rem;
  height: 0.8rem;
  line-height: 0.8rem;
  color: white;
  font-size: 0.32rem;
  background: linear-gradient(left, #ff9400, #ff6808);
  border-radius: 0.44rem;
  margin-left: 0.52rem;
  margin-top: 0.46rem;
}
.pop-p1 {
  margin-top: 0.58rem;
}
</style>
