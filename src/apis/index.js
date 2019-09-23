/**
 * Created by Yan on 2019-06-01
 **/
import https from './request'
/**
 * 首页
 **/
 export const indexData=data=> https.get('/product/hot',data);
/**
 * 首页公告
 **/
 export const indexNotice=data=> https.get('/notice/hot',data);
/**
 * 注册
 **/
 export const userRegister=data=> https.post('/Reg/index',data);
/**
 * 登录
 **/
 export const userLogin=data=> https.post('/login/index',data);
/**
 * 用户信息
 **/
 export const userInfo=data=> https.get('/user/info',data);
/**
 * 我的代理
 **/
 export const userAgent=data=> https.get('/user/son',data);
/**
 *下款记录
 **/
 export const userRecord=data=> https.get('/user/water',data);
 /**
  * 产品模块开始
  * **/
/**
 * 产品列表
 **/
export const productList=data=> https.get('/product/all',data);
/**
 * 产品详情
 **/
export const productDetial=data=> https.get('/product/detail',data);
/**
 * 推荐贷款
 **/
export const productQr=data=> https.get('/product/tjdk',data);
/**
 * 产品大纲
 **/
export const productBg=data=> https.get('/product/cpdg',data);
/**
* 个人中心
* */
/**
 * 推广二维码
 **/
export const userPutQr=data=> https.get('/user/ewm',data);
/**
 * 退出
 **/
export const userLogout=data=> https.get('/login/logout',data);
/**
 * 意见反馈
 **/
export const userFeedback=data=> https.post('/user/yjfk',data);
/**
 * 绑定银行卡
 **/
export const userBindCard=data=> https.post('/user/yhk',data);
/**
 * 银行卡解绑
 **/
export const userCancelBank=data=> https.post('/user/yhkjb',data);

/**
 * 我的消息
 **/
export const userNews=data=> https.get('/user/msg',data);
/**
 * 修改密码
 **/
export const userChangePass=data=> https.post('/user/changepwd',data);
/**
 * 佣金明细
 **/
export const userDetailCom=data=> https.get('/user/yjmx',data);
/**
 * 根据phone获取用户信息
 **/
export const shareUserInfo=data=> https.post('/product/shareuser',data);
