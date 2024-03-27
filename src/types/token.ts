/**
 * token 信息
 * "domain": ".ifuhua.com.cn",
 * "expire": 28799,
 * "name": "login_boshiyunconsole_ticket",
 * "value": "82561690-1f4a-49ab-aa1d-358c884bc60a"
 */
export interface TokenInfo {
  /** 登录接口中返回的`domain`字段 */
  domain: string
  /** 过期时间 */
  expire: number
  /** 登录接口中返回的`name`字段 */
  name: string
  /** 登录接口中返回的`value`字段 */
  value: string

}

/** 登录接口传参 */
export interface LoginParams {
  type: string | "RAM-MAIN"
  username: string
  password: string
}