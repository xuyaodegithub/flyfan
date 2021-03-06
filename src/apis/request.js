import axios from 'axios';
import qs from 'qs'
import { getToken,removeToken,clearCookie } from "../utils/auth";
import { Toast } from 'vant'
import router from '../router'
// axios.defaults.timeout=10000;//设置请求时间，超过时间报超时错位
// axios.defaults.headers={'X-Custom-Header': 'foobar'}//全局设置请求头
// instance.defaults.headers['Content-Type']='application/x-www-form-urlencoded;charset=UTF-8'
// axios.defaults.headers.post['Content-Type']='application/x-www-form-urlencoded;charset=UTF-8';//全局设置请求头//表示跨域请求时是否需要使用凭证默认false
// axios.defaults.baseURL='http://test-admin-h5.olquan.cn'//设置域名
  axios.defaults.withCredentials=true//表示跨域请求时是否需要使用凭证,默认false，一般请求携带cookie是设置为true
// })
const instance  =axios.create({
  // timeout:10000,
  baseURL:process.env.VUE_APP_BASEURL,//process.env.NODE_ENV === 'development' ?  '/api' :
  // headers:{'Content-Type':'application/x-www-form-urlencoded;charset=UTF-8'}
});//自定义axios对象
instance.interceptors.request.use(function (config) {//为自定义axios设置请求拦截器
  // 在发送请求之前做些什么config是axios请求实例 里面包含axios各种配置项和相关属性信息
  // if(getToken()) config.headers['token']=getToken()
  //   console.log(config.data)
    const toast = Toast.loading({
        duration: 0,       // 持续展示 toast
        forbidClick: true, // 禁用背景点击
        // loadingType: 'spinner',
    });
  return config
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error)
});
instance.interceptors.response.use(function (response) {//为自定义axios设置响应拦截器
  // 对响应数据做点什么
  const res=response.data;
    Toast.clear();
    if(res.code===0){
      return res
  }else if(res.code===100){
      router.replace('/login')
      return Promise.reject(response.data)
  }/* else if(res.code===900){
      window.location.href=res.url
  }*/else{
      Toast(response.data.msg)
      return res
  //   // return Promise.reject(response.data)
  }
}, function (err) {
    Toast.clear();
  // 对请求错误做些什么
  if (!navigator.onLine) {
    Toast('网络异常，请查看你的网络状态')
    return 'networkdisconnect';
  }
  // 根据你设置的timeout/真的请求超时 判断请求现在超时了，你可以在这里加入超时的处理方案
  if (err.code === 'ECONNABORTED' && err.message.indexOf('timeout') !== -1) {
    // return axios.request(originalRequest) // 再重复请求一次
    Toast('网络超时，请重新尝试')

    return 'timeout';
  }
  return Promise.reject(err.response);
});
// instance.interceptors.request.eject(beforask);//移除请求拦截器方法
// instance.interceptors.response.eject(afterask);//移除响应拦截器方法

 const post = (url,data)=>{//post请求
  return instance({
    method:'post',
    url:url,
    dataType:'JSON',
    data:qs.stringify(data)
  })
}
const paramspost = (url,data)=>{//post请求  params参数
  return instance({
    method:'post',
    url:url,
    dataType:'JSON',
    params:data
  })
}
const get=(url,data)=> {//get请求
   return instance({
     method:'get',
     url:url,
     dataType:'JSON',
     params:data
   })
}
const upPost=(url,data)=> {//图片上传请求
  return instance({
    method:'post',
    url:url,
    dataType:'JSON',
    data:data,
  })
}



export default {
  post,
  get,
  upPost,
  paramspost
}
