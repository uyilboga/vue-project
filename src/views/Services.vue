<template>
  <div class="about">
    <pageServices></pageServices>
  </div>
</template>
<script>
  import PageServices from '@/components/common/Services.vue'

  export default {
    name:'services',
    data: ()=> {
      return {

      }
    },
    components: {
        PageServices
    }
  }
</script>
