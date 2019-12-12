<template>
  <header>
    <div class="header-top">
      <div class="container-fluid">
        <div class="row">
          <div class="col-md-9">
            <div class="header-contact">
              <ul>
                <li><span> <i class="fa fa-map"></i> {{contactInfo.address}}</span></li>
                <li><span>  <i class="fa fa-phone"></i> {{contactInfo.phone}}</span></li>
                <li><span> <i class="fa fa-envelope"></i> {{contactInfo.email}}</span></li>
              </ul>
            </div>
          </div>
          <div class="col-md-3">
            <div class="social">
              <ul>
                <li><a :href="social.facebook"><i class="fab fa-facebook"></i></a></li>
                <li><a :href="social.twitter"><i class="fab fa-twitter"></i></a></li>
                <li><a :href="social.youtube"><i class="fab fa-youtube"></i></a></li>
                <li><a :href="social.linkedin"><i class="fab fa-linkedin"></i></a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container-fluid">
      <div class="header-wrapper">
        <div class="logo">
          <img src="@/assets/logo.png" alt="">
        </div>
        <div class="menu">
          <ul>
            <li><router-link to="/">Anasayfa</router-link></li>
            <li><router-link to="/hakkimizda">Hakkımızda</router-link></li>
            <li><router-link to="/hizmetlerimiz">Hizmetlerimiz</router-link></li>
            <li><router-link to="/projelerimiz">Projelerimiz</router-link></li>
            <li><router-link to="/blog">Blog</router-link></li>
            <li><router-link to="/iletisim">İletişim</router-link></li>
          </ul>
        </div>
        <div class="contact-btn">
          <a href="">İletişime Geçin</a>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
    export default {
        name: 'Navbar',
        data: () => {
            return {
                social: {
                    facebook: 'https://www.facebook.com/ufuk',
                    twitter: 'https://www.twitter.com/ufuk',
                    youtube: 'https://www.youtube.com/ufuk',
                    linkedin: 'https://www.linkedin.com/ufuk',
                },
                contactInfo: {
                    address: 'Tarabya Mahallesi Sarıyer / İstanbul',
                    phone: '0507 121 24 56',
                    email: 'info@ufukyilboga.com'
                }
            }
        }
    }
</script>

<style lang="less" scoped>
    header {
        position: relative;
        width: 100%;
        background: white;
        box-shadow: 0px 7px 15px 0px rgba(0, 0, 0, .07);
        font-family: 'Poppins', serif;
    }
    
    .header-top {
        position: relative;
        width: 100%;
        height: 50px;
        display: flex;
        align-items: center;
        background: #222327;
        font-family: 'Poppins', sans-serif;
    }
    
    .header-contact ul li {
        margin: 0 15px;
    }
    
    .header-contact ul li span {
        color: white;
        padding: 15px 5px;
        font-size: 14px;
    }
    
    .header-wrapper {
        position: relative;
        height: 80px;
        display: grid;
        grid-template-columns: 1fr 6fr 1fr;
        align-items: center;
        justify-content: space-around;
    }
    
    .logo {
        margin: 0 auto;
    }
    
    .logo img {
        width: auto;
        height: 80px;
        margin: 0 auto;
    }
    
    .menu ul,
    .social ul,
    .header-contact ul {
        margin: 0;
        padding: 0;
    }
    
    .menu ul li,
    .social ul li,
    .header-contact ul li {
        display: inline-block;
    }
    
    .menu ul li a {
        padding: 30px 10px;
        color: #222327;
        font-weight: bold;
        font-size: 14px;
        text-transform: uppercase;
        position: relative;
        transition: .4s;
    }
    
    .menu ul li a:hover {
        text-decoration: none;
        color: #41B883;
    }
    
    .menu ul li a:before {
        content: "";
        position: absolute;
        bottom: 0;
        left: 0;
        width: 50px;
        transform: scale(0);
        transform-origin: left;
        transition: .4s;
        height: 4px;
        background: #41B883;
    }
    
    .menu ul li a:hover:before {
        transform: scale(1);
    }
    
    .social ul {
        text-align: right;
    }
    
    .social ul li a {
        color: white;
        padding: 10px;
        font-size: 16px;
    }
    
    .contact-btn a {
        display: inline-block;
        height: 40px;
        line-height: 40px;
        padding: 0 30px;
        text-align: center;
        background: #41B883;
        color: white;
        font-size: 14px;
        font-weight: 600;
        font-family: 'Poppins', sans-serif;
        -webkit-transition: 0.4s;
        transition: 0.4s;
    }
    
    .contact-btn a:hover {
        background: #222327;
        text-decoration: none;
    }
</style>