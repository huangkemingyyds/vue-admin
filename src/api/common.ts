import request from "../utils/request";
import store from "../store";
import {LoginParams, UserInfo} from "../types/user";

/**
 * 上传图片
 * @param formData 图片`FormData` 这里我模拟上传，所以类型是`File`，接口上传时才是`FormData`
 */
export function uploadImg(formData: File) {
  // 模拟上传
  return new Promise<ApiResult>(function (resolve) {
    const reader = new FileReader();
    reader.onload = function () {
      setTimeout(function () {
        resolve({
          code: 1,
          data: {img: reader.result},
          msg: "上传成功"
        })
      }, 500);
    }
    reader.onerror = function () {
      resolve({
        code: -1,
        data: null,
        msg: "上传失败"
      })
    }
    reader.readAsDataURL(formData);
  })

  // return request("POST", "/uploadImg", formData);
}

/**
 * 获取天气预报数据
 * @param city 城市名
 */
export function getWeather(city: string) {
  return request("GET", "/free/day", {
        appid: "56761788",
        appsecret: "ti3hP8y9",
        city: encodeURIComponent(city)
      },
      {
        headers: {
          // TODO: 天气预报的接口不可以携带 请求头 authorization 字段，所以这里清空
          authorization: ""
        }
      })
}


/**
 * 获取用户信息
 */
export function getUserInfo(token: string) {
  return request<UserInfo>('GET', '/user-center-server/extendUser/getShiroUser', {}, {
    headers: {
      // token格式 Bearer 82561690-1f4a-49ab-aa1d-358c884bc60a
      authorization: 'Bearer' + token
    }
  })
}
