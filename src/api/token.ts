import request from "../utils/request";
import { LoginParams} from "../types/user";
import {jsonToFormData} from "@/utils";
import {TokenInfo} from "@/types/token";



/**
 * 登录
 * @param params 登录信息
 */
export async function login(params: LoginParams) {
  return request<TokenInfo>("POST", "/ram/auth/oauth", jsonToFormData(params))
}
