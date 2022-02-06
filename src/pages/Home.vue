<template>
<header class="header">

  <Navegador />

  <!-- CONTENT -->
  <div class="animated fadeIn row" style="width:100vw;animation-duration: 1.5s;">
    <div class="container">
      <div class="row">
        <div class="col-md-6" id="left-hero">

          <h1 class="hero-tag">
            <span class="typer" id="main" 
                  data-words="Hi, I'm Sebastián Mena Aliaga" 
                  data-delay="100"
                  data-deleteDelay="1200" 
                  data-loop="1" 
                  style="color:blue!important;"></span>
                    &nbsp;
          </h1>

          <p class="hero-des">
              I'm an Industrial Engineer and master's student in Statistics at 
              Universidad Católica de Valparaíso, Chile.
          <br>
              My main interest is to study and investigation of the 
              Statistics and Machine Learning field.
              Also, I like design and create web and mobile apps.
          <br>
              If you want to know more about me, check my principal projects.
          </p>
          <a href="projects.html">
              <button class="animated bounce delay-4s learn-btn">
                  My projects
              </button>
          </a>
          
          <div class="center">
              <div id="contact">
                  <button class="contact-btn" onclick="show()">
                      Contact me!
                  </button>
              </div>
              
              <div id="email" class="email">
                  <span class="material-icons" style="float: left; margin-right: 10px;">forward_to_inbox</span>
                  smenaaliaga@gmail.com
              </div>
          </div>
          <div class="social-icons">
            <a target="_blank" href="mailto:smenaaliaga@gmail.com"><i class="fas fa-envelope"></i></a>
            <a target="_blank" href="https://github.com/smenaaliaga"><i class="fab fa-github"></i></a>
            <a target="_blank" href="https://www.linkedin.com/in/sebastián-mena-aliaga-93a81567/"><i class="fab fa-linkedin"></i></a>
          </div>
        </div>
        <div class="col-md-6" id="hero-right" style="margin: auto;">
          <img id="hero-img" src="../assets/3dplot2.gif"/>
        </div>
      </div>
    </div>
  </div>
</header>
  <!-- CONTENT -->
</template>

<script>
import Navegador from '../components/Navegador'

export default {
  data() {
    return { arr: ["Hi,", "I'm Sebastián Mena Aliaga"] };
  },
  components: {
    Navegador
  }
};
</script>