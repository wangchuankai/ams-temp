//该文件按需引入 Antd 等；
import Vue from 'vue'
import VueStorage from 'vue-ls'
import config from '@/config/defaultSettings'

// base library
import '@/core/lazy_lib/components_use'
import Viser from 'viser-vue'
import 'ant-design-vue/dist/antd.less'
import '../style/common.less'
// ext library
//import VueClipboard from 'vue-clipboard2'
import PermissionHelper from '@/utils/helper/permission'

//VueClipboard.config.autoSetContainer = true

Vue.use(Viser)

Vue.use(VueStorage, config.storageOptions)
//Vue.use(VueClipboard)
Vue.use(PermissionHelper)
