export default {
  //package.json eslint 的配置  vue.config.js lintOnSave: false,
  "eslintConfig": {
    "root": true,
    "env": {
      "node": true
    },
    "extends": [
      "plugin:vue/strongly-recommended",
      "@vue/standard"
    ],
    "parserOptions": {
      "parser": "babel-eslint"
    },
    "rules": {
      "generator-star-spacing": "off",
      "no-mixed-operators": 0,
      "vue/max-attributes-per-line": [
        2,
        {
          "singleline": 5,
          "multiline": {
            "max": 1,
            "allowFirstLine": false
          }
        }
      ],
      "vue/attribute-hyphenation": 0,
      "vue/html-self-closing": 0,
      "vue/component-name-in-template-casing": 0,
      "vue/html-closing-bracket-spacing": 0,
      "vue/singleline-html-element-content-newline": 0,
      "vue/no-unused-components": 0,
      "vue/multiline-html-element-content-newline": 0,
      "vue/no-use-v-if-with-v-for": 0,
      "vue/html-closing-bracket-newline": 0,
      "vue/no-parsing-error": 0,
      "no-console": 0,
      "no-tabs": 0,
      "quotes": [
        2,
        "single",
        {
          "avoidEscape": true,
          "allowTemplateLiterals": true
        }
      ],
      "semi": [
        2,
        "never",
        {
          "beforeStatementContinuationChars": "never"
        }
      ],
      "no-delete-var": 2,
      "prefer-const": [
        2,
        {
          "ignoreReadBeforeAssign": false
        }
      ]
    }
  },
  //路由config
  router:[
    // dashboard
    {
      path: '/dashboard',
      name: 'dashboard',
      redirect: '/dashboard/workplace',
      component: RouteView,
      meta: { title: '仪表盘', keepAlive: true, icon: bxAnaalyse, permission: [ 'dashboard' ] },
      children: [
        {
          path: '/dashboard/analysis',
          name: 'Analysis',
          component: () => import('@/views/dashboard/Analysis'),
          meta: { title: '分析页', keepAlive: false, permission: [ 'dashboard' ] }
        },
        // 外部链接
        {
          path: 'https://www.baidu.com/',
          name: 'Monitor',
          meta: { title: '监控页（外部）', target: '_blank' }
        },
        {
          path: '/dashboard/workplace',
          name: 'Workplace',
          component: () => import('@/views/dashboard/Workplace'),
          meta: { title: '工作台', keepAlive: true, permission: [ 'dashboard' ] }
        }
      ]
    },
          // forms
          {
            path: '/form',
            redirect: '/form/base-form',
            component: PageView,
            meta: { title: '表单页', icon: 'form', permission: [ 'form' ] },
            children: [
              {
                path: '/form/base-form',
                name: 'BaseForm',
                component: () => import('@/views/form/BasicForm'),
                meta: { title: '基础表单', keepAlive: true, permission: [ 'form' ] }
              },
              {
                path: '/form/step-form',
                name: 'StepForm',
                component: () => import('@/views/form/stepForm/StepForm'),
                meta: { title: '分步表单', keepAlive: true, permission: [ 'form' ] }
              },
              {
                path: '/form/advanced-form',
                name: 'AdvanceForm',
                component: () => import('@/views/form/advancedForm/AdvancedForm'),
                meta: { title: '高级表单', keepAlive: true, permission: [ 'form' ] }
              }
            ]
          },
    
          // list
          {
            path: '/list',
            name: 'list',
            component: PageView,
            redirect: '/list/table-list',
            meta: { title: '列表页', icon: 'table', permission: [ 'table' ] },
            children: [
              {
                path: '/list/table-list',
                name: 'TableListWrapper',
                hideChildrenInMenu: true, // 强制显示 MenuItem 而不是 SubMenu
                component: () => import('@/views/list/TableList'),
                meta: { title: '查询表格', keepAlive: true, permission: [ 'table' ] }
              },
              {
                path: '/list/basic-list',
                name: 'BasicList',
                component: () => import('@/views/list/StandardList'),
                meta: { title: '标准列表', keepAlive: true, permission: [ 'table' ] }
              },
              {
                path: '/list/card',
                name: 'CardList',
                component: () => import('@/views/list/CardList'),
                meta: { title: '卡片列表', keepAlive: true, permission: [ 'table' ] }
              },
              {
                path: '/list/search',
                name: 'SearchList',
                component: () => import('@/views/list/search/SearchLayout'),
                redirect: '/list/search/article',
                meta: { title: '搜索列表', keepAlive: true, permission: [ 'table' ] },
                children: [
                  {
                    path: '/list/search/article',
                    name: 'SearchArticles',
                    component: () => import('../views/list/TableList'),
                    meta: { title: '搜索列表（文章）', permission: [ 'table' ] }
                  },
                  {
                    path: '/list/search/project',
                    name: 'SearchProjects',
                    component: () => import('../views/list/TableList'),
                    meta: { title: '搜索列表（项目）', permission: [ 'table' ] }
                  },
                  {
                    path: '/list/search/application',
                    name: 'SearchApplications',
                    component: () => import('../views/list/TableList'),
                    meta: { title: '搜索列表（应用）', permission: [ 'table' ] }
                  }
                ]
              }
            ]
          },
    
          // profile
          {
            path: '/profile',
            name: 'profile',
            component: RouteView,
            redirect: '/profile/basic',
            meta: { title: '详情页', icon: 'profile', permission: [ 'profile' ] },
            children: [
              {
                path: '/profile/basic',
                name: 'ProfileBasic',
                component: () => import('@/views/profile/basic/Index'),
                meta: { title: '基础详情页', permission: [ 'profile' ] }
              },
              {
                path: '/profile/advanced',
                name: 'ProfileAdvanced',
                component: () => import('@/views/profile/advanced/Advanced'),
                meta: { title: '高级详情页', permission: [ 'profile' ] }
              }
            ]
          },
    
          // result
          {
            path: '/result',
            name: 'result',
            component: PageView,
            redirect: '/result/success',
            meta: { title: '结果页', icon: 'check-circle-o', permission: [ 'result' ] },
            children: [
              {
                path: '/result/success',
                name: 'ResultSuccess',
                component: () => import(/* webpackChunkName: "result" */ '@/views/result/Success'),
                meta: { title: '成功', keepAlive: false, hiddenHeaderContent: true, permission: [ 'result' ] }
              },
              {
                path: '/result/fail',
                name: 'ResultFail',
                component: () => import(/* webpackChunkName: "result" */ '@/views/result/Error'),
                meta: { title: '失败', keepAlive: false, hiddenHeaderContent: true, permission: [ 'result' ] }
              }
            ]
          },
          // other
      {
        path: '/other',
        name: 'otherPage',
        component: PageView,
        meta: { title: '其他组件', icon: 'slack', permission: [ 'dashboard' ] },
        redirect: '/other/icon-selector',
        children: [
          {
            path: '/other/icon-selector',
            name: 'TestIconSelect',
            component: () => import('@/views/other/IconSelectorView'),
            meta: { title: 'IconSelector', icon: 'tool', keepAlive: true, permission: [ 'dashboard' ] }
          },
          {
            path: '/other/list',
            component: RouteView,
            meta: { title: '业务布局', icon: 'layout', permission: [ 'support' ] },
            redirect: '/other/list/tree-list',
            children: [
              {
                path: '/other/list/tree-list',
                name: 'TreeList',
                component: () => import('@/views/other/TreeList'),
                meta: { title: '树目录表格', keepAlive: true }
              },
              {
                path: '/other/list/edit-table',
                name: 'EditList',
                component: () => import('@/views/other/TableInnerEditList'),
                meta: { title: '内联编辑表格', keepAlive: true }
              },
              {
                path: '/other/list/user-list',
                name: 'UserList',
                component: () => import('@/views/other/UserList'),
                meta: { title: '用户列表', keepAlive: true }
              },
              {
                path: '/other/list/role-list',
                name: 'RoleList',
                component: () => import('@/views/other/RoleList'),
                meta: { title: '角色列表', keepAlive: true }
              },
              {
                path: '/other/list/system-role',
                name: 'SystemRole',
                component: () => import('@/views/role/RoleList'),
                meta: { title: '角色列表2', keepAlive: true }
              },
              {
                path: '/other/list/permission-list',
                name: 'PermissionList',
                component: () => import('@/views/other/PermissionList'),
                meta: { title: '权限列表', keepAlive: true }
              }
            ]
          }
        ]
      },
      // account
      {
        path: '/account',
        component: RouteView,
        redirect: '/account/center',
        name: 'account',
        meta: { title: '个人页', icon: 'user', keepAlive: true, permission: [ 'user' ] },
        children: [
          {
            path: '/account/center',
            name: 'center',
            component: () => import('@/views/account/center/Index'),
            meta: { title: '个人中心', keepAlive: true, permission: [ 'user' ] }
          },
          {
            path: '/account/settings',
            name: 'settings',
            component: () => import('@/views/account/settings/Index'),
            meta: { title: '个人设置', hideHeader: true, permission: [ 'user' ] },
            redirect: '/account/settings/base',
            hideChildrenInMenu: true,
            children: [
              {
                path: '/account/settings/base',
                name: 'BaseSettings',
                component: () => import('@/views/account/settings/BaseSetting'),
                meta: { title: '基本设置', hidden: true, permission: [ 'user' ] }
              },
              {
                path: '/account/settings/security',
                name: 'SecuritySettings',
                component: () => import('@/views/account/settings/Security'),
                meta: { title: '安全设置', hidden: true, keepAlive: true, permission: [ 'user' ] }
              },
              {
                path: '/account/settings/custom',
                name: 'CustomSettings',
                component: () => import('@/views/account/settings/Custom'),
                meta: { title: '个性化设置', hidden: true, keepAlive: true, permission: [ 'user' ] }
              },
              {
                path: '/account/settings/binding',
                name: 'BindingSettings',
                component: () => import('@/views/account/settings/Binding'),
                meta: { title: '账户绑定', hidden: true, keepAlive: true, permission: [ 'user' ] }
              },
              {
                path: '/account/settings/notification',
                name: 'NotificationSettings',
                component: () => import('@/views/account/settings/Notification'),
                meta: { title: '新消息通知', hidden: true, keepAlive: true, permission: [ 'user' ] }
              }
            ]
          }
        ]
      },
  ]
}