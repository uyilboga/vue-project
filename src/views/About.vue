<template>
  <div class="about">
    <aboutUs></aboutUs>
  </div>
</template>
<script>
    import AboutUs from '@/components/common/About-us.vue'

    export default {
        name: "about",
        data: () => {
            return {

            }
        },
        components: {
            AboutUs
        }
    }
</script>