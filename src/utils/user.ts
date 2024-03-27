// import { getUserInfo } from '@/api/common';
// import { reactive, ref } from 'vue';
// import { UserInfo } from '../types/user';
// import { jsonParse, modifyData, setData } from '../utils';
//
// const cacheName = 'ModuleUser';
//
// function useUserInfo(): Readonly<UserInfo> {
//   return {
//     id: '',
//     authentication: 0,
//     authenticationOrg: 0,
//     avatar: '',
//     codes: [],
//     deptList: [],
//     deptNameList: [],
//     lastLoginDep: '',
//     mainDep: '',
//     swsdIdList: [],
//     departmentId: '',
//     departmentName: '',
//     eid: '',
//     email: '',
//     enterpriseName: '',
//     memberLevel: 1,
//     memberLevelStr: '',
//     orgEid: '',
//     orgName: '',
//     pathSourceVos: [],
//     phone: '',
//     roles: [],
//     roleMap: {},
//     userId: 0,
//     username: '',
//     staffId: '',
//     staffName: '',
//     workspaceId: '',
//     fdd: {
//       enterpriseId: '',
//       enterpriseName: ''
//     },
//     counter: {
//       id: '',
//       typeId: '',
//       idType: '',
//       corpOpenId: '',
//       name: '',
//       authUsers: []
//     }
//   }
// }
//
// /**
//  * 用户状态模块
//  */
// export default class ModuleUser {
//   constructor() {
//     const value = jsonParse(sessionStorage.getItem(cacheName), {});
//     if (value.userId) {
//       this.setUserInfo(value)
//     }
//     // TODO: 需要电子合同功能时再打开
//     // 每次刷新且有登录情况下都更新法大大信息
//     // token && this.updateFddInfo();
//   }
//
//   /** 用户信息（包含登录状态） */
//   readonly info = reactive(useUserInfo());
//
//   /** 用户加载中 */
//   loading = ref(true)
//
//   /** 写入用户信息并设置缓存 */
//   setUserInfo(value: Partial<UserInfo>) {
//
//     modifyData(this.info, value);
//     // 用setData写入不确定的对象
//     setData(this.info.roleMap, value.roleMap || {})
//     sessionStorage.setItem(cacheName, JSON.stringify(this.info));
//   }
//
//   /** 重置（清空）用户信息缓存信息 */
//   reset() {
//     modifyData(this.info, useUserInfo());
//     sessionStorage.removeItem(cacheName);
//   }
// }
