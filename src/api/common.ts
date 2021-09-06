import request from "../utils/request";
import utils from "../utils";
import store from "../store";
import { ApiResult } from "../types";
import { LoginParams, UserInfo } from "@/types/user";

/**
 * 上传图片
 * @param formData 图片`FormData` 这里我模拟上传，所以类型是`File`，接口上传时才是`FormData`
 */
export function uploadImg(formData: File) {
    // 模拟上传
    return new Promise<ApiResult>(function(resolve) {
        const reader = new FileReader();
        reader.onload = function() {
            setTimeout(function() {
                resolve({
                    code: 1,
                    data: { img: reader.result },
                    msg: "上传成功"
                })
            }, 500);
        }
        reader.onerror = function() {
            resolve({
                code: -1,
                data: null,
                msg: "上传失败"
            })
        }
        reader.readAsDataURL(formData);
    })
    
    // return request("POST", "/uploadImg", {}, formData);
}

/**
 * 获取天气预报数据
 * @param city 城市名
 */
export function getWeather(city: string) {
    return request("GET", "/weather_mini", {
        city: encodeURIComponent(city)
    })
}

/**
 * 提交表单数据
 * @param params 
 */
export function submitForm(params: { id: number, name: string, age: number }) {
    return request("POST", "/submitForm", {}, utils.jsonToFormData(params))
}

/**
 * 登录
 * @param params 登录信息
 */
export async function login(params: LoginParams) {
    // 模拟登录
    return new Promise<ApiResult>(function(resolve) {
        const info: UserInfo = {
            id: Math.random().toString(36).substr(10),
            type: "",
            name: "",
            token: Math.random().toString(36).substr(2),
            account: params.account,
            password: params.password
        }
        setTimeout(() => {
            switch (params.account) {
                case "admin":
                    info.type = 0;
                    info.name = "超级管理员";
                    store.user.update(info);
                    resolve({ code: 1, msg: "ok", data: info });
                    break;

                case "normal":
                    info.type = 1;
                    info.name = "普通成员";
                    store.user.update(info);
                    resolve({ code: 1, msg: "ok", data: info });
                    break;

                default:
                    resolve({ code: -1, msg: "账户不存在", data: null });
                    break;
            }
        }, 600);
    })
    
    // const res = await request("POST", "/login", params)
    // if (res.code === 1) {
    //     // 录成功后缓存用户信息
    //     res.data.name = params.username;
    //     store.user.update(res.data);
    // }
    // return res;
}