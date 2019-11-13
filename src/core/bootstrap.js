//本地开发 右侧配置
import Vue from 'vue'
import store from '@/store/'
import {
  ACCESS_TOKEN,//访问令牌
  DEFAULT_COLOR,//默认颜色
  DEFAULT_THEME,//默认主题
  DEFAULT_LAYOUT_MODE,//默认布局模式
  DEFAULT_COLOR_WEAK,//默认颜色弱
  SIDEBAR_TYPE,//边栏类型
  DEFAULT_FIXED_HEADER,//默认的固定页眉
  DEFAULT_FIXED_HEADER_HIDDEN,//默认固定页眉隐藏
  DEFAULT_FIXED_SIDEMENU,//默认的固定菜单
  DEFAULT_CONTENT_WIDTH_TYPE,//默认内容宽度类型
  DEFAULT_MULTI_TAB //默认的“多”选项卡
} from '@/store/mutation-types'
import config from '@/config/defaultSettings'

export default function Initializer () {
  store.commit('SET_SIDEBAR_TYPE', Vue.ls.get(SIDEBAR_TYPE, true))
  store.commit('TOGGLE_THEME', Vue.ls.get(DEFAULT_THEME, config.navTheme))
  store.commit('TOGGLE_LAYOUT_MODE', Vue.ls.get(DEFAULT_LAYOUT_MODE, config.layout))
  store.commit('TOGGLE_FIXED_HEADER', Vue.ls.get(DEFAULT_FIXED_HEADER, config.fixedHeader))
  store.commit('TOGGLE_FIXED_SIDERBAR', Vue.ls.get(DEFAULT_FIXED_SIDEMENU, config.fixSiderbar))
  store.commit('TOGGLE_CONTENT_WIDTH', Vue.ls.get(DEFAULT_CONTENT_WIDTH_TYPE, config.contentWidth))
  store.commit('TOGGLE_FIXED_HEADER_HIDDEN', Vue.ls.get(DEFAULT_FIXED_HEADER_HIDDEN, config.autoHideHeader))
  store.commit('TOGGLE_WEAK', Vue.ls.get(DEFAULT_COLOR_WEAK, config.colorWeak))
  store.commit('TOGGLE_COLOR', Vue.ls.get(DEFAULT_COLOR, config.primaryColor))
  store.commit('TOGGLE_MULTI_TAB', Vue.ls.get(DEFAULT_MULTI_TAB, config.multiTab))
  store.commit('SET_TOKEN', Vue.ls.get(ACCESS_TOKEN))

  // last step
}
