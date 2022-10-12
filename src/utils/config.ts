/**
 * 项目配置模块
 */
const config = (function () {
  const env = process.env.NODE_ENV === "development" ? "dev" : "prod";

  const url = {
    dev: "", // 走代理了，所以不需要设置域名,
    prod: "https://www.tianqiapi.com"
  }

  return {
    /** 请求超时毫秒 */
    get requestOvertime() {
      return 8000;
    },
    /** `api`请求域名 */
    get apiUrl() {
      return url[env];
    },
    /** 是否开发环境 */
    get isDev() {
      return env === "dev";
    }
  }
})();

export default config;