import axios from "axios";
import {Message} from "@arco-design/web-vue";

export const useAxios = axios.create({
    timeout: 6000,
    baseURL: ""//如果使用了前端代理，请将baseURL设置为""，不然跨域
})

// 请求拦截器
useAxios.interceptors.request.use( (config)=>{
    config.headers.set("token", "xxx")
    return config
})

// 响应拦截器
useAxios.interceptors.response.use( (res)=>{
    if (res.status === 200){
        return res.data
    }
    return res
}, (res)=>{
    Message.error(res.message)
})