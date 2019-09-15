/**
 * Created by Yan on 2019-06-01
 **/
import https from './request'
/**
 * 首页
 **/
 export const indexData=data=> https.get('/index.php',data);
/**
 * 产品列表
 **/
 export const productList=data=> https.get('/ajax/query/product',data);
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




