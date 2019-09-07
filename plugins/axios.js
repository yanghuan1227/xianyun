// 用于处理axios请求的拦截插件
import { Message} from 'element-ui'

export default ({ $axios}) => {
  // 错误拦截
    $axios.onError(res=>{
        // 返回的res是一个错误的对象，Error对象下都有一个response属性可以访问错误信息
        // 解构出错误信息和代码
        const {message,statusCode} = res.response.data;

        if(statusCode === 400){
            // Message = this.$message
            Message.error(message)
        }
    })
}
