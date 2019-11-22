
import { axios } from '@/utils/request'
let API = process.env.VUE_APP_WEB_API;
let MOCK = process.env.VUE_APP_WEB_API_MOCK;

console.log(process.env.NODE_ENV);

/**
 * login func
 * parameter: {
 *     username: '',
 *     password: ''
 * }
 * @param parameter
 * @returns {*}
 */
export function login (parameter) {
  return axios({
    url: API+ '/center/login/login',
    method: 'post',
    data: parameter
  })
}
//验证登入状态接口
export const getCheck = (parameter) => {
  return axios.request({
      url: API+  '/center/login/check',
      data:parameter,
      method: 'post'
  })
}

export function getInfo (source) {
  return axios({
    url: API+ '/center/common/info',
    method: 'post',
    headers: {
      'Content-Type': 'application/json;charset=UTF-8'
    },
    data:{source}
  })
}

export function logout (uid) {
  return axios({
    url: API+ '/center/login/logout',
    method: 'post',
    headers: {
      'Content-Type': 'application/json;charset=UTF-8'
    },
    data:{uid}
  })
}
export function modPassword (data) {
  return axios({
    url: API+ '/center/home/newpwd',
    method: 'post',
    headers: {
      'Content-Type': 'application/json;charset=UTF-8'
    },
    data:data
  })
}

