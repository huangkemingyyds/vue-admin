import { reactive } from "vue";
import { UserInfo } from "../types/user";
import { modifyData } from "../utils";

const cacheName = "ModuleUser";

function createUserInfo(): Readonly<UserInfo> {
  return {
    id: "",
    authentication: 0,
    authenticationOrg: 0,
    avatar: "",
    codes: [],
    deptList: [],
    deptNameList: [],
    lastLoginDep: "",
    mainDep: "",
    swsdIdList: [],
    departmentId: "",
    departmentName: "",
    eid: "",
    email: "",
    enterpriseName: "",
    memberLevel: 1,
    memberLevelStr: "",
    orgEid: "",
    orgName: "",
    pathSourceVos: [],
    phone: "",
    roles: [],
    roleMap: {},
    userId: 0,
    username: "",
    staffId: "",
    staffName: "",
  };
}

/**
 * 用户状态模块
 */
export default class ModuleUser {
  constructor() {
    this.init();
  }

  /** 用户信息（包含登录状态） */
  readonly info = reactive(createUserInfo());

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
   * 更新（设置）当前的用户信息并缓存到本地
   * @param value 要更新的值
   */
  update(value: Partial<UserInfo>) {
    modifyData(this.info, value);
    sessionStorage.setItem(cacheName, JSON.stringify(this.info));
  }

  /** 重置（清空）用户信息缓存信息 */
  reset() {
    modifyData(this.info, createUserInfo());
    sessionStorage.removeItem(cacheName);
  }
}
