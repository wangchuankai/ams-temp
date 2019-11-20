
import { axios } from '@/utils/request'
let api = 'api';
console.log(process.env.NODE_ENV);
let node_env = process.env.NODE_ENV;
node_env=='development'?api:api=''
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
    url: api+ '/center/login/login',
    method: 'post',
    data: parameter
  })
}
//验证登入状态接口
export const getCheck = (parameter) => {
  return axios.request({
      url: api+  '/center/login/check',
      data:parameter,
      method: 'post'
  })
}

export function getInfo (source) {
  return axios({
    url: api+ '/center/common/info',
    method: 'post',
    headers: {
      'Content-Type': 'application/json;charset=UTF-8'
    },
    data:{source}
  })
}

export function logout (uid) {
  return axios({
    url: api+ '/center/login/logout',
    method: 'post',
    headers: {
      'Content-Type': 'application/json;charset=UTF-8'
    },
    data:{uid}
  })
}
export function modPassword (data) {
  return axios({
    url: api+ '/center/home/newpwd',
    method: 'post',
    headers: {
      'Content-Type': 'application/json;charset=UTF-8'
    },
    data:data
  })
}

