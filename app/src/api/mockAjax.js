//对于axios二次封装
import axios from 'axios'
// 引入进度条
import nprogress from 'nprogress'
//引入进度条的样式
import 'nprogress/nprogress.css'


//利用axios create方法创建一个axios实例
const requests = axios.create({
    baseURL:'/mock',
    timeout:5000
})

//请求拦截器
requests.interceptors.request.use((config)=>{
    nprogress.start()
    return config
   
})

// 响应拦截器
requests.interceptors.response.use((res)=>{
    // 成功的回调
    nprogress.done()
    return res.data
},(error)=>{
    // 失败的回调
    return Promise.reject(new Error("faile"))
})


export default requests;