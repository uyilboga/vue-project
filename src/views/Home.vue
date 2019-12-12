<template>
  <div class="home">
    <intro></intro>
    <aboutUs></aboutUs>
    <services></services>
  </div>
</template>

<script>
    import Intro from '@/components/home/Intro.vue'
    import AboutUs from '@/components/common/About-us.vue'
    import Services from '@/components/common/Services.vue'

    export default {
        name: 'home',
        data: () => {
            return {
                products: [{
                    id: 1,
                    title: "computer",
                    desription: "açıklama"
                }, {
                    id: 2,
                    title: "computer",
                    desription: "açıklama"
                }, {
                    id: 3,
                    title: "computer",
                    desription: "açıklama"
                }]
            }
        },
        components: {
            Intro,
            AboutUs,
            Services
        }
    }
</script>