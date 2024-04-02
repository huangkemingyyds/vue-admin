/**
 * 项目配置模块
 */
const config = (function () {
  const env = process.env.NODE_ENV === "development" ? "dev" : "prod";

  const url = {
    // dev: "https://www.tianqiapi.com", // `http://${location.host}`,
    // dev: "http://localhost:8080/api",
    dev: "/api",
    // dev: "https://szhgg.ifuhua.com.cn",
    prod: "https://szhgg.ifuhua.com.cn"
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