export interface IResponseType<P = {}> {
  errorMessage: string
  success: boolean
  stateCode:number
  data: P
}

// 用户信息
export interface IUserInfo {
  author?: string
  avator?: string
  projectAddress?: string
  demoUrl?: string
  demoCodeUrl?: string
}

// jssdk配置信息
export interface IJsSdk {
  signature: string
  nonceStr: string
  timestamp: string
  appId: string
}
