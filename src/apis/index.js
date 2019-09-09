/**
 * Created by Yan on 2019-06-01
 **/
import https from './request'
/**
 * 上传图片
 **/
 export const uploadImgApi=data=> https.upPost('/webMatting/matting2',data);




