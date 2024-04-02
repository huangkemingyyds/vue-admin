import { reactive } from "vue";
import { TokenInfo } from "../types/token";
import { modifyData } from "../utils";

const cacheName = "ModuleToken";

function createTokenInfo(): Readonly<TokenInfo> {
  return {
    domain: "",
    expire: 0,
    name: "",
    value: "",
  };
}

/**
 * token状态模块
 */
export default class ModuleToken {
  constructor() {
    this.init();
  }

  /** token信息（包含登录状态） */
  readonly info = reactive(createTokenInfo());

  /** 初始化缓存信息 */
  private init() {
    const value = sessionStorage.getItem(cacheName);
    try {
      if (value) {
        const info = JSON.parse(value);
        modifyData(this.info, info);
      }
    } catch (error) {
      console.log("初始化缓存信息出错 >>", error);
    }
  }

  /**
   * 更新（设置）当前的token信息并缓存到本地
   * @param value 要更新的值
   */
  update(value: Partial<TokenInfo>) {
    modifyData(this.info, value);
    sessionStorage.setItem(cacheName, JSON.stringify(this.info));
  }

  /** 重置（清空）token信息缓存信息 */
  reset() {
    modifyData(this.info, createTokenInfo());
    sessionStorage.removeItem(cacheName);
  }
}
