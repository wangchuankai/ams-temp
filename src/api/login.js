
import { axios } from '@/utils/request'
let api = 'api';
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
    url: '/center/login/login',
    method: 'post',
    data: parameter
  })
}
//验证登入状态接口
export const getCheck = (parameter) => {
  return axios.request({
      url:  '/center/login/check',
      data:parameter,
      method: 'post'
  })
}

export function getInfo (source) {
  return axios({
    url: '/center/common/info',
    method: 'post',
    headers: {
      'Content-Type': 'application/json;charset=UTF-8'
    },
    data:{source}
  })
}

export function logout (uid) {
  return axios({
    url: '/center/login/logout',
    method: 'post',
    headers: {
      'Content-Type': 'application/json;charset=UTF-8'
    },
    data:{uid}
  })
}


