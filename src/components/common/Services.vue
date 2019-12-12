<template>
    <div class="services">
        <div class="container">
            <div class="services-title">
                <h3>{{ title }}</h3>
                <h5>{{ subtitle }}</h5>
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
                    icon: '../../assets/artificle-intelligence.svg',
                    title: 'Artifical Inteligence',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum sint consequatur autem dicta eius recusandae eligendi sapiente nisi doloribus impedit illo veniam exercitationem aspernatur voluptatum similique dolorum earum, necessitatibus deleniti!'
                }, {
                    id: 2,
                    icon: '../../assets/deep-learning.svg',
                    title: 'Machine Learning',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum sint consequatur autem dicta eius recusandae eligendi sapiente nisi doloribus impedit illo veniam exercitationem aspernatur voluptatum similique dolorum earum, necessitatibus deleniti!'
                }, {
                    id: 3,
                    icon: '../../assets/data-virtualization.svg',
                    title: 'Data Virtualization',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum sint consequatur autem dicta eius recusandae eligendi sapiente nisi doloribus impedit illo veniam exercitationem aspernatur voluptatum similique dolorum earum, necessitatibus deleniti!'
                }, {
                    id: 4,
                    icon: '../../assets/data.svg',
                    title: 'Data Science',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum sint consequatur autem dicta eius recusandae eligendi sapiente nisi doloribus impedit illo veniam exercitationem aspernatur voluptatum similique dolorum earum, necessitatibus deleniti!'
                }, {
                    id: 5,
                    icon: '../../assets/mobile.svg',
                    title: 'Mobile Application Development',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum sint consequatur autem dicta eius recusandae eligendi sapiente nisi doloribus impedit illo veniam exercitationem aspernatur voluptatum similique dolorum earum, necessitatibus deleniti!'
                }, {
                    id: 6,
                    icon: '../..//assets/automation.svg',
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
        background: #35495E;
        font-family: 'Poppins';
    }
    
    .services .services-box {
        padding: 30px;
        text-align: left;
        color: white;
    }
    
    .services .services-box p {
        font-size: 14px;
        font-weight: 100;
        opacity: .8;
    }
    
    .services .services-box h3 {
        font-size: 16px;
        font-family: 'Playfair Display';
        font-weight: bold;
        text-transform: uppercase;
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
        font-size: 36px;
        font-weight: bold;
        color: white;
    }
    
    .services .services-title span {
        position: absolute;
        top: -5%;
        left: 10%;
        color: rgba(2555, 255, 255, 0.02);
        font-size: 160px;
        font-weight: bold;
        transform: rotate(90deg);
        transform-origin: left;
    }
</style>