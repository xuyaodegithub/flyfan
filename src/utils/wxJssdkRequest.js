// 获取wxjssdk数据
import { Toast } from "mint-ui";
export function  wxJssdkData(merchantId,url,getWxjssdkSign,that,callback) {
  // const that = this;
  getWxjssdkSign({
    merchantId: merchantId,
    url: url
  }).then(res => {
    if (res.success === true) {
      config(res,that);
    } else {
      Toast(res.err_msg || res.errMsg || 'error');
    }
  });
  function config(res,that) {
    const sign = res.data.wxJssdkSign;
    that.$wechat.config({
      debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
      appId: res.data.appid, // 必填，公众号的唯一标识
      timestamp: sign.timestamp, // 必填，生成签名的时间戳
      nonceStr: sign.noncestr, // 必填，生成签名的随机串
      signature: sign.signature, // 必填，签名
      jsApiList: [
        'checkJsApi',
        'onMenuShareTimeline',
        'onMenuShareAppMessage',
        'onMenuShareQQ',
        'onMenuShareWeibo',
        'hideMenuItems',
        'showMenuItems',
        'hideAllNonBaseMenuItem',
        'showAllNonBaseMenuItem',
        'translateVoice',
        'startRecord',
        'stopRecord',
        'onRecordEnd',
        'playVoice',
        'pauseVoice',
        'stopVoice',
        'uploadVoice',
        'downloadVoice',
        'chooseImage',
        'previewImage',
        'uploadImage',
        'downloadImage',
        'getNetworkType',
        'openLocation',
        'getLocation',
        'hideOptionMenu',
        'showOptionMenu',
        'closeWindow',
        'scanQRCode',
        'chooseWXPay',
        'openProductSpecificView',
        'addCard',
        'chooseCard',
        'openCard',
        'onMenuShareQZone'
      ] // 必填，需要使用的JS接口列表
    });
    that.$wechat.ready(function() {
      callback()
    })
  }
}
