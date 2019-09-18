import https from '../apis/request'
import { userInfo } from '@/apis/index'
const actions={
    userInfoAction(context,data){
        userInfo(data).then(res=>{
            if(!res.code)context.commit('SET_USER_INFO',res.msg)
        })
    }
}
export default actions
