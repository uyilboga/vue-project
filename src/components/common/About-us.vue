<template>
    <div class="about-us">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-md-7">
                    <div class="content">
                        <h3>{{aboutUs.title}} <span>{{aboutUs.childTitle}}</span></h3>
                        <h5>{{aboutUs.subtitle}}</h5>
                        <p>{{aboutUs.description}}</p>
                        <p>{{aboutUs.content}}</p>
                        <router-link to="/hakkimizda">Devamını Gör</router-link>
                    </div>
                </div>
                <div class="col-md-5">
                    <div class="image">
                        <img src="@/assets/about1.jpg" alt="">
                        <img src="@/assets/about2.jpg" alt="">
                    </div>
                </div>
                
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name: "about-us",
        data: () => {
            return {
                aboutUs: {
                    title: "About the",
                    childTitle: "Agency",
                    subtitle: "About Our Works",
                    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates iusto odit quaerat dignissimos nostrum fuga reiciendis ducimus",
                    content: "animi eligendi, accusantium, aut qui. Nemo, atque qui? Libero ducimus provident corporis voluptatum.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates iusto odit quaerat dignissimos nostrum fuga reiciendis ducimus animi eligendi, accusantium, aut qui. Nemo, atque qui? Libero ducimus provident corporis voluptatum."
                }
            }
        }
    }
</script>
<style lang="less">
    .about-us {
        padding: 80px 0;
        position:relative;
        .image {
            position: relative;
            img {
                position: relative;
                width: 100%;
                &:nth-child(1) {
                    position: absolute;
                    width: 100%;
                    height: auto;
                    top: 30%;
                    left: 50%;
                    transform: translateX(-30%);
                    z-index: 1;
                }
            }
        }
        .content {
            padding: 0 40px;
            h3 {
                font-size: 56px;
                display: inline-block;
                font-weight: bold;
                color: #333;
                position: relative;
                font-family: 'Poppins';
                span {
                    color: #41b883;
                }
            }
            h5 {
                font-size: 24px;
                text-transform: uppercase;
                font-weight: 400;
                color: #41b883;
                margin: 20px 0;
            }
            p {
                font-weight: 400;
                letter-spacing: 1px;
            }
            a {
                display: inline-block;
                height: 40px;
                line-height: 35px;
                padding: 0 30px;
                text-align: center;
                border: 2px solid #333;
                color: #333;
                margin-top: 30px;
                font-size: 14px;
                font-weight: 600;
                -webkit-transition: 0.4s;
                transition: 0.4s;
                &:hover {
                    background: #333;
                    color: white;
                    text-decoration: none;
                }
            }
        }
        &:before {
            content: "";
            position: absolute;
            top: 0;
            right: 0;
            width: 64%;
            height: 100%;
            background: rgba(65, 184, 129, 0.1);
        }
    }
</style>