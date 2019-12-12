<template>
    <div class="services">
        <div class="container">
            <div class="services-title">
                <h5>{{ subtitle }}</h5>
                <h3>{{ title }}</h3>
                <span>Services</span>
            </div>
            <div class="row">
                <div class="col-md-4" v-for="(item, ids) in services" :key="ids">
                    <div class="services-box">
                        <div class="icon">
                            <img :src="item.icon" alt="">
                        </div>
                        <div class="content">
                            <h3>{{item.title}}</h3>
                            <p>{{item.description}}</p>
                            <router-link to="/services">Devamını Gör</router-link>
                        </div>
                    </div>   
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'services',
        data: () => {
            return {
                title: 'Hizmetlerimiz',
                subtitle: 'Hizmet verdiğimiz alanlar',
                services: [{
                    id: 1,
                    icon: require('@/assets/artificial-inteligence.svg'),
                    title: 'Artifical Inteligence',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum sint consequatur autem dicta eius recusandae eligendi sapiente nisi doloribus impedit illo veniam exercitationem aspernatur voluptatum similique dolorum earum, necessitatibus deleniti!'
                }, {
                    id: 2,
                    icon: require('@/assets/deep-learning.svg'),
                    title: 'Machine Learning',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum sint consequatur autem dicta eius recusandae eligendi sapiente nisi doloribus impedit illo veniam exercitationem aspernatur voluptatum similique dolorum earum, necessitatibus deleniti!'
                }, {
                    id: 3,
                    icon: require('@/assets/robot.svg'),
                    title: 'Data Virtualization',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum sint consequatur autem dicta eius recusandae eligendi sapiente nisi doloribus impedit illo veniam exercitationem aspernatur voluptatum similique dolorum earum, necessitatibus deleniti!'
                }, {
                    id: 4,
                    icon: require('@/assets/data.svg'),
                    title: 'Data Science',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum sint consequatur autem dicta eius recusandae eligendi sapiente nisi doloribus impedit illo veniam exercitationem aspernatur voluptatum similique dolorum earum, necessitatibus deleniti!'
                }, {
                    id: 5,
                    icon: require('@/assets/mobile.svg'),
                    title: 'Mobile Application Development',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum sint consequatur autem dicta eius recusandae eligendi sapiente nisi doloribus impedit illo veniam exercitationem aspernatur voluptatum similique dolorum earum, necessitatibus deleniti!'
                }, {
                    id: 6,
                    icon: require('@/assets/automation.svg'),
                    title: 'Web Application Development',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum sint consequatur autem dicta eius recusandae eligendi sapiente nisi doloribus impedit illo veniam exercitationem aspernatur voluptatum similique dolorum earum, necessitatibus deleniti!'
                }, ]
            }
        }
    }
</script>

<style lang="less">
    .services {
        padding: 80px 0;
        position: relative;
        background: #222327;
        font-family: 'Poppins';
    }
    .services:before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: url('../../assets/bg-noise.gif');
        opacity: 0.02;
    }
    
    .services .services-box {
        padding: 30px;
        text-align: left;
        color: white;
        margin-bottom: 40px;
    }
    
    .services .services-box .icon {
        width: 80px;
        height: 80px;
        display: block;
        margin: 20px 0;
    }
    .services .services-box .icon img {
        width: 100%;
    }
    .services .services-box p {
        font-size: 13px;
        font-weight: 100;
        opacity: .8;
    }
    
    .services .services-box h3 {
        font-size: 16px;
        font-family: 'Poppins';
        font-weight: bold;
        text-transform: uppercase;
    }
    .services .services-box a {
        font-size: 14px;
        font-weight: 600;
        letter-spacing: -0.3px;
        color: #41B883;
    }
    
    .services .services-box i {
        display: block;
        width: 50px;
        height: 50px;
        line-height: 50px;
        font-size: 18px;
        color: #41B883;
    }
    
    .services .services-title h3 {
        font-size: 64px;
        font-weight: bold;
        color: white;
        font-family: 'Poppins',sans-serif;
    }
    .services .services-title h5 {
        font-size: 16px;
        font-weight: 100;
        color:#41b883;
    }
    .services .services-title span {
        position: absolute;
        top: 0;
        left: 10%;
        color: rgba(2555, 255, 255, 0.02);
        font-size: 160px;
        font-weight: bold;
        transform: rotate(90deg);
        transform-origin: left;
    }
</style>