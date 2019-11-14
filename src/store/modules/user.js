import Vue from 'vue'
import { login, getInfo, logout ,getCheck } from '@/api/login'
import { ACCESS_TOKEN } from '@/store/mutation-types'
import { welcome } from '@/utils/util'
import { setToken ,setBearer} from "@utils/util"
const user = {
  state: {
    token: '',
    name: '',
    welcome: '',
    avatar: '',
    roles: [],
    info: {}
  },

  mutations: {
    SET_TOKEN: (state, token) => {
      state.token = token
    },
    SET_NAME: (state, { name, welcome }) => {
      state.name = name
      state.welcome = welcome
    },
    SET_AVATAR: (state, avatar) => {
      state.avatar = avatar
    },
    SET_ROLES: (state, roles) => {
      state.roles = roles
    },
    SET_INFO: (state, info) => {
      state.info = info
    }
  },

  actions: {
    // 登录
    Login ({ commit }, userInfo) {
      return new Promise((resolve, reject) => {
        login(userInfo).then(response => {
          const result = response
          setToken(result.token);
          Vue.ls.set(ACCESS_TOKEN, result.token, 7 * 24 * 60 * 60 * 1000)
          commit('SET_TOKEN', result.token)
          resolve(result.token)
        }).catch(error => {
          reject(error)
        })
      })
    },
     // check
     Check ({ commit },token) {
      return new Promise((resolve, reject) => {
        getCheck(token).then(response => {
          let result = response
          let Bearer = result.token;
          setBearer(Bearer);
          resolve()
        }).catch(error => {
          reject(error)
        })
      })
    },

    // 获取用户信息
    GetInfo ({ commit }) {
      return new Promise((resolve, reject) => {
        getInfo(0).then(response => {
          let navList = response.nav || [];
          let info = response.userinfo || {};
          var navIds = [];
          if (navList.length > 0) {
             // 获取 Access 的数组
             const filtersNavids = function(tree) {
               tree.forEach(obj => {
                 navIds.push(Number(obj.id));
                 if (obj.child && obj.child.length) {
                   filtersNavids(obj.child);
                 }
               });
             };
             filtersNavids(navList);
             commit('SET_ROLES', navList)
             commit('SET_INFO', info)
          } else {
            reject(new Error('返回路由信息不可为空 !'))
          }

          commit('SET_NAME', { name: info.nickname, welcome: welcome() })
          commit('SET_AVATAR', '/avatar2.jpg')

          resolve(navIds)
        }).catch(error => {
          reject(error)
        })
      })
    },

    // 登出
    Logout ({ commit, state }) {
      return new Promise((resolve) => {
        commit('SET_TOKEN', '')
        commit('SET_ROLES', [])
        Vue.ls.remove(ACCESS_TOKEN)
        logout(state.info.id).then(() => {
          resolve()
        }).catch(() => {
          resolve()
        })
      })
    }

  }
}

export default user
