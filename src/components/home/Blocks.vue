<template>
    <div class="blocks">
        <div class="container">
            <div class="row">
                <div class="col-md-4" v-for="(item, idb) in boxes" :key="idb">
                    <div class="block-box">
                        <div class="icon">
                            <i :class="item.icon"></i>
                        </div>
                        <div class="content">
                            <h3>{{item.title}}</h3>
                            <p>{{item.description}}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name: "blocks",
        data: () => {
            return {
                boxes: [{
                    icon: "fa fa-home",
                    title: "uppercase title",
                    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque reprehenderit dolores totam nulla amet"
                }, {
                    icon: "fa fa-trash",
                    title: "uppercase title 2",
                    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque reprehenderit dolores totam nulla amet"
                }, {
                    icon: "fa fa-edit",
                    title: "uppercase title 3",
                    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque reprehenderit dolores totam nulla amet"
                }]
            }
        }
    }
</script>
<style lang="less" scoped>
    .blocks {
        padding: 50px 0;
    }
    
    .block-box {
        padding: 30px;
        display: flex;
        align-items: flex-start;
    }
    
    .icon {
        width: 30%;
    }
    
    .icon i {
        display: block;
        font-size: 24px;
        color: #41b883;
        padding: 7px 0;
    }
    
    .content {
        padding: 0 20px;
    }
    
    .content h3 {
        font-size: 16px;
        line-height: 36px;
        font-weight: 700;
        text-transform: uppercase;
        padding: 0 10px;
        position: relative;
    }
    
    .content h3:before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 3px;
        height: 100%;
        background: #41b883;
    }
    
    .content p {
        font-size: 14px;
        font-weight: 300;
    }
</style>