<template>
  <div class="footer">
    <div class="links">
      <a
        href="http://user.piaoliusan.com/"
        target="_blank"
      >用户中心</a>
      <a
        href="http://crm.piaoliusan.com/"
        target="_blank"
      >
        <!-- <a-icon type="github" /> -->
          CRM系统
        </a>
      <a href="http://css.piaoliusan.com/">客服系统</a>
      <a href="http://bi.piaoliusan.com/">BI系统</a>
    </div>
    <div class="copyright">
      Copyright
      <a-icon type="copyright" />  2017-2018 深圳市漂流伞科技有限公司 粤ICP备17058669号
    </div>
  </div>
</template>

<script>
export default {
  name: 'GlobalFooter',
  data () {
    return {}
  }
}
</script>

<style lang="less" scoped>
.footer {
  padding: 0 16px;
  margin: 48px 0 24px;
  text-align: center;

  .links {
    margin-bottom: 8px;

    a {
      color: rgba(0, 0, 0, 0.45);

      &:hover {
        color: rgba(0, 0, 0, 0.65);
      }

      &:not(:last-child) {
        margin-right: 40px;
      }
    }
  }
  .copyright {
    color: rgba(0, 0, 0, 0.45);
    font-size: 14px;
  }
}
</style>
