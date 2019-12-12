<template>
    <div class="slider">
        <carousel :items="1" :autoplay="true" :nav="false" :autoplaySpeed="1000" :loop="false" :rewind="true">
            <div class="item" v-for="(item, idx) in slider" :key="idx" :style="{ backgroundImage: `url(${backgroundUrl})` }">
                <div class="caption">
                    <h5>{{item.subtitle}}</h5>
                    <h3>{{item.title}}</h3>
                    <p>{{item.paragraph}}</p>
                    <router-link to="/hakkimizda">{{item.buttonCaption}}</router-link>
                </div> 
            </div>
        </carousel>
    </div>
</template>

<script>
    import backgroundUrl from '@/assets/slide01.jpg'

    export default {
        name: 'intro',
        data: () => {
            return {
                backgroundUrl,
                slider: [{
                    title: "This is a Title",
                    subtitle: "This is Subtitle",
                    paragraph: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora autem odit fugit vitae consequuntur, saepe dicta officia animi",
                    buttonCaption: "Hakkımızda",
                },
                {
                    title: "This is a Second Title",
                    subtitle: "This is Second Subtitle",
                    paragraph: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora autem odit fugit vitae consequuntur, saepe dicta officia animi",
                    buttonCaption: "hizmetlerimiz",
                },
                {
                    title: "This is a Third Title",
                    subtitle: "This is Third Subtitle",
                    paragraph: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora autem odit fugit vitae consequuntur, saepe dicta officia animi",
                    buttonCaption: "iletisim",
                },
                ],
            }
        }
    }
</script>

<style lang="less" scope>
    @clrDark: #35495E;
    @clrMain: #41B883;
    .slider {
        position: relative;
        width: 100%;
        font-family: 'Poppins', sans-serif;
        .item {
            height: 70vh;
            position:relative;
            background-repeat: no-repeat;
            background-size: cover;
            overflow: hidden;
            background-position: center top;
            &:before {
                content:"";
                position: absolute;
                top:0;
                left: -50%;
                width: 100%;
                height: 100%;
                transform: skewX(-30deg);
                background: rgba(65,184,129,.8);
                z-index: 1;
            }
            .caption {
                position: absolute;
                top: 50%;
                width: 33%;
                left: 12%;
                transform: translateY(-50%);
                z-index: 2;
                h5 {
                    font-size: 36px;
                    font-weight: 100;
                    color: @clrDark;
                    text-transform: uppercase;
                }
                h3 {
                    font-size: 90px;
                    color: white;
                    font-weight: 900;
                }
                p {
                    color: #f1f1f1;
                    font-size: 16px;
                }
                a {
                    display: inline-block;
                    height: 40px;
                    line-height: 40px;
                    padding: 0 30px;
                    text-align: center;
                    background: @clrDark;
                    color: white;
                    font-size: 14px;
                    font-weight: 600;
                    transition: .4s;
                    &:hover {
                        background: white;
                        color: @clrDark;
                        text-decoration: none;
                    }
                }
            }
        }
        .owl-theme .owl-dots {
            position: absolute !important;
            bottom: 20px;
            left: 50%;
            transform: translateX(-50%);
            z-index: 1;
            .owl-dot {
                span {
                    display: inline-block;
                    width: 10px;
                    height: 10px;
                    border-radius: 10px;
                    background: white;
                    transition: .4s;
                }
                &.active {
                    span {
                        background: @clrMain;
                        width: 30px;
                        transform: translateY(10px);
                    }
                }
                &:focus {
                    outline: 0;
                    border: none;
                }
            }
        }
    }
</style>