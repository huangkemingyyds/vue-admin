/**
 * 用户信息
 */
export interface UserInfo {
  id: string
  /**认证用户：0-未认证，1-企业用户，2-个人用户 */
  authentication: 0 | 1 | 2
  /**是否机构认证：0-未认证，1-已认证 */
  authenticationOrg: 0 | 1 | -1
  avatar: string
  /**菜单编码 */
  codes: string[]
  /**绑定企业的eid */
  eid: string 
  email: string
  /**绑定的企业名称 */
  enterpriseName: string 
  /**会员等级编号：1-普通会员，2-黄金会员，3-白金会员，4-钻石会员 */
  memberLevel: 1 | 2 | 3 | 4
  /**会员等级名称 */
  memberLevelStr: string
  /**绑定机构的eid */
  orgEid: string 
  /**绑定服务商名称 */
  orgName: string
  /**路径资源vo */
  pathSourceVos: IPathSourceVo[]
  /**电话号码 */
  phone: string
  /**角色 */
  roles: null|number[]
  roleMap: BaseObj
  /**用户id */
  userId: number | ''
  /**用户名 */
  username: string
  /**员工id */
  staffId: string
  /**员工name */
  staffName: string
  /**未知数据 */
  workspaceId?: string
  /** 所在部门id信息 */
  deptList: Array<number>
  /** 所在部门name信息 */
  deptNameList: Array<string>
  /** 当前登录部门 */
  lastLoginDep: string
  /** 主部门 */
  mainDep: string
  /** 部门对应的swsdId */
  swsdIdList: string[]
  /** 所在部门id */
  departmentId: string
  /** 所在部门name */
  departmentName: string
  
}


/** 用户信息中用到 */
interface IPathSourceVo {
  children: IPathSourceVo[]
  /**名称 */
  name: string
  /**原名称 */
  originName: string
  /**父类名称 */
  parentName: string 
  /**访问路径 */
  uri: string
}

