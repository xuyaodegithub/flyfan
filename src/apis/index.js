/**
 * Created by Yan on 2019-06-01
 **/
import https from './request'
/**
 * 首页
 **/
 export const indexData=data=> https.get('/index.php',data);




