<template>
  <div class="user-wrapper">
    <a-dropdown>
      <span class="action ant-dropdown-link user-dropdown-menu">
        <a-avatar class="avatar" size="small" :src="avatar()"/>
        <span>{{ nickname() }}</span>
      </span>
      <a-menu slot="overlay" class="user-dropdown-menu-wrapper">
        <a-menu-item key="2">
          <a-icon type="setting"/>
          <span @click="showModal">修改密码</span>
        </a-menu-item>
        <a-menu-divider/>
        <a-menu-item key="3">
          <a href="javascript:;" @click="handleLogout">
            <a-icon type="logout"/>
            <span>退出登录</span>
          </a>
        </a-menu-item>
      </a-menu>
    </a-dropdown>
    <div>
      <a-modal
        title="修改密码"
        :visible="visible"
        @ok="handleOk"
        :confirmLoading="confirmLoading"
        @cancel="handleCancel"
      >
      <a-form id="formPwd" class="" ref="formPwd" :form="form" @submit="handleSubmit">
      <a-form-item label="原密码"  :label-col="{ span: 4 }" :wrapper-col="{ span: 20 }">
        <a-input
          type="text"
          placeholder="请输入原密码"
          v-decorator="[
            'username',
            {
              rules: [{ required: true, message: '原密码不可为空' }],
              validateTrigger: 'blur'
            }
          ]"
        >
        </a-input>
      </a-form-item>

      <a-form-item label="新密码"  :label-col="{ span: 4 }" :wrapper-col="{ span: 20 }" >
        <a-input
          type="text"
          autocomplete="false"
          placeholder="请输入密码"
          v-decorator="['password', { rules: [{ required: true, message: '请输入密码' }], validateTrigger: 'blur' }]"
        >
        </a-input>
      </a-form-item>
      <a-form-item label="确认密码"  :label-col="{ span: 4 }" :wrapper-col="{ span: 20 }" >
        <a-input
          type="text"
          autocomplete="false"
          placeholder="请输入确认密码"
          v-decorator="['password', { rules: [{ required: true, message: '请输入确认密' }], validateTrigger: 'blur' }]"
        >
        </a-input>
      </a-form-item>
    </a-form>

    </a-modal>
    </div>
  </div>
</template>

<script>
import NoticeIcon from '@/components/NoticeIcon'
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'UserMenu',
  components: {
    NoticeIcon
  },
  data(){
    return {
      visible:false,
      confirmLoading:false,
      form: this.$form.createForm(this),
    }
  },
  methods: {
    ...mapActions(['Logout','ChangePassworld']),
    ...mapGetters(['nickname', 'avatar']),
    handleLogout () {
      const that = this
      this.$confirm({
        title: '提示',
        content: '真的要注销登录吗 ?',
        onOk () {
          return that.Logout({}).then(() => {
            window.location.reload()
          }).catch(err => {
            that.$message.error({
              title: '错误',
              description: err.message
            })
          })
        },
        onCancel () {
        }
      })
    },
    showModal() {
      this.visible = true;
    },
    handleOk(e) {
      this.confirmLoading = true;
      setTimeout(() => {
        this.visible = false;
        this.confirmLoading = false;
      }, 2000);
    },
    handleCancel(e) {
      console.log('Clicked cancel button');
      this.visible = false;
    },
    handleSubmit(e) {
      e.preventDefault()
      const {
        form: { validateFields },
        ChangePassworld
      } = this

      state.loginBtn = true

      const validateFieldsKey = ['username', 'password']

      validateFields(validateFieldsKey, { force: true }, (err, values) => {
        if (!err) {
          console.log('login form', values)
          const loginParams = { ...values }
          // loginParams.password = md5(values.password)
          // Login(loginParams)
          //   .then(res => {
          //     Check({cookie:res}).then(res=>{
          //       this.loginSuccess(res);
          //     })
          //   })
          //   .catch(err => this.requestFailed(err))
          //   .finally(() => {
          //     state.loginBtn = false
          //   })
        } else {
          setTimeout(() => {
            // state.loginBtn = false
          }, 600)
        }
      })
    },

    loginSuccess(res) {
      this.$router.push({ name: 'index' })
      // 延迟 1 秒显示欢迎信息
      setTimeout(() => {
        this.$notification.success({
          message: '欢迎',
          description: `${timeFix()}，欢迎回来`
        })
      }, 1000)
    },
    requestFailed(err) {
      this.$notification['error']({
        message: '错误',
        description: ((err.response || {}).data || {}).message || '请求出现错误，请稍后再试',
        duration: 4
      })
    }
  }
}
</script>
