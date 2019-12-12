<template>
  <div id="app">
    <navbar></navbar>
    <router-view/>
    <Footer></Footer>
  </div>
</template>

<script>
    import Navbar from '@/components/includes/Navbar.vue'
    import Footer from '@/components/includes/Footer.vue'

    export default {
        name: 'app',
        data: () => {
            return {

            }
        },
        components: {
            Navbar,
            Footer,
        }
    }
</script>

<style lang="less">

</style>