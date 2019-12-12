<template>
    <div class="references">
        <div class="container">
            <div class="row">
                <div class="col-md-2" v-for="(item, idb) in images" :key="idb">
                    <div class="img">
                        <img class="img-responsive" :src="item.url" :alt="item.alt">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name: "references",
        data: () => {
            return {
                images: [
                    {
                        url: require('@/assets/references/logo01.jpg'),
                        alt: "table",
                    },
                    {
                        url: require('@/assets/references/logo02.jpg'),
                        alt: "plane",
                    },
                    {
                        url: require('@/assets/references/logo03.jpg'),
                        alt: "connect",
                    },
                    {
                        url: require('@/assets/references/logo04.jpg'),
                        alt: "glasses",
                    },
                    {
                        url: require('@/assets/references/logo05.jpg'),
                        alt: "pixel",
                    },
                    {
                        url: require('@/assets/references/logo06.jpg'),
                        alt: "attach",
                    }
                ]
            }
        }
    }
</script>
<style lang="less" scoped>
    .references {
        padding: 30px 0;
    }
    .references .img img {
        width: 100%;
    }
   
</style>