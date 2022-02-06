<template>
<header class="header">

    <Navegador />

    <div class="animated fadeIn row" style="width:100vw;animation-duration: 1.5s;">
        <div class="col-md-6" id="left-hero">

            <h1 class="hero-tag">
            <span class="typer" id="main" 
                  data-words="Let's Get In Touch" 
                  data-delay="100"
                  data-deleteDelay="1200" 
                  data-loop="1" 
                  style="color:blue!important;">
            </span>
              &nbsp;
          </h1>

            <p class="hero-des contact-des animated fadeIn delay-1s">
                <br />
                Want to discuss a project, an idea, an opportunity? 
                Just fill up this form or write me an email:
            </p>
            <h4 class="animated fadeIn delay-2s">
                smenaaliaga@gmail.com
            </h4>
            <br>
        </div>
        <div class="col-md-6" id="hero-right" style="margin: auto;">
            <img id="hero-img" src="../assets/3dplot2.gif"/>
        </div>
    </div>

</header>
</template>

<script>
import Navegador from '../components/Navegador'

export default {
  components: {
    Navegador
  }
};
</script>