<template>
    <div>
        <div class="works">
            <div class="container">
                <div class="works-title">
                    <h5>{{subtitle}}</h5>
                    <h3>{{title}}</h3>
                    <span>{{childTitle}}</span>
                </div>
                <div class="row">
                    <div class="col-md-6 items" v-for="(item, idw) in works" :key="idw">
                        <div class="image">
                            <img :src="item.imagePath" :alt="item.alt">
                        </div>
                        <div class="content">
                            <h2>{{ item.title }}</h2>
                            <router-link to="/projects">Projeyi Gör</router-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "works",
        data: () => {
            return {
                title: "Projelerimiz",
                subtitle: "Yaptığımız İşler",
                childTitle: "Works",
                works: [{
                    title: 'Void Creative',
                    imagePath: require('@/assets/works/1.jpg'),
                    alt: 'Void Creative'
                }, {
                    title: 'Virtouso Law & Consulting',
                    imagePath: require('@/assets/works/4.jpg'),
                    alt: 'Virtouso Law & Consulting'
                }, {
                    title: 'Medium Digital',
                    imagePath: require('@/assets/works/5.jpg'),
                    alt: 'Medium Digital'
                }, {
                    title: 'Codix Dev',
                    imagePath: require('@/assets/works/6.jpg'),
                    alt: 'Codix Dev'
                }, ]
            }
        }
    }
</script>

<style lang="less">
    .works {
        padding: 120px 0;
        position: relative;
        .items {
            height: 450px;
            overflow: hidden;
            margin-bottom: 20px;
            .image {
                width: 100%;
                img {
                    width: 100%;
                }
            }
            .content {
                position: absolute;
                bottom: 0;
                left: 0;
                width: 100%;
                padding: 50px;
                h2 {
                    color: white;
                    font-weight: bold;
                    font-size: 45px;
                }
                a {
                    color: #41B883;
                    font-weight: 600;
                    border-bottom: 2px solid #41B883;
                    &:hover {
                        text-decoration: none;
                    }
                }
            }
        }
        .items:nth-child(2n) {
            margin-top: 20px;
        }
        .works-title {
            margin-bottom: 50px;
            text-align: right;
            h3 {
                font-size: 64px;
                font-weight: bold;
                color: #333;
                font-family: 'Poppins', sans-serif;
            }
            h5 {
                font-size: 18px;
                font-weight: 100;
                text-transform: uppercase;
                color: #41b883;
            }
            span {
                position: absolute;
                top: 0;
                left: 10%;
                color: rgba(0, 0, 0, 0.03);
                font-size: 160px;
                font-weight: bold;
                transform: rotate(90deg);
                transform-origin: left;
            }
        }
        &:before {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            width: 60%;
            height: 60%;
            z-index: -1;
            background: rgba(65, 184, 129, 0.1);
        }
    }
</style>