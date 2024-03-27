import request from "../utils/request";
import store from "../store";



/**
 * 登录
 * @param params 登录信息
 */
export async function getShiroUser() {

  const res = await request("GET", "/user-center-server/extendUser/getShiroUser")
  if (res.code === 1) {
    // 录成功后缓存用户信息
    store.user.update(res.data);
  }
  return res;
}
