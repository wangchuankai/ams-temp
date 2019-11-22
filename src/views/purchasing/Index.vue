<template>
  <div>
    <route-view></route-view>
  </div>
</template>

<script>
import { RouteView } from '@/layouts'
import { mixinDevice } from '@/utils/mixin.js'
  export default {
     components: {
        RouteView,
      }
  }
</script>

