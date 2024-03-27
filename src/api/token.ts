import request from "../utils/request";
import store from "../store";
import { LoginParams, UserInfo} from "../types/user";
import { getShiroUser} from "../api/user";



/**
 * 登录
 * @param params 登录信息
 */
export async function login(params: LoginParams) {

  const res = await request("POST", "/ram/auth/oauth", params)
  if (res.code === 1) {
    // 录成功后缓存用户信息
    const u = getShiroUser()
    console.log("user", u)
    store.user.update(res.data);
  }
  return res;
}
