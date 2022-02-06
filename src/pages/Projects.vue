<template>
<header class="header">

  <Navegador />

    <div class="animated fadeIn row" style="width:100vw;animation-duration: 1.5s;">
        <div class="col-md-6" id="left-hero">
            <h1 class="hero-tag"><span class="typer" id="main" data-words="My projects" data-delay="100"
                    data-deleteDelay="1200" data-loop="1" style="color:blue!important;"></span>
                &nbsp;</h1>
            <p class="hero-des">
                I'm Sebastián Mena Aliaga and I'm Industrial Engineer and master's 
                student in Statistics at Universidad Católica de Valparaíso, Chile.
            </p>
            <br>
            <button class="animated bounce delay-2s learn-btn selector">
                <a href="#projects"> 
                    See the projects
                    <span class="material-icons">expand_more</span>
                </a>
            </button>
        </div>

        <div class="col-md-6" id="hero-right">
            <!-- <img id="hero-img" src="assets/img/undraw_code_review_l1q9.svg"> -->
            <img id="hero-img" src="assets/gif/3dplot2.gif"/>

        </div>

    </div>

    <div class="section" id="projects">
        <div class="row work-double-row">
            <div class="col-md-6 col-sm-12  bounceInLeft delay-3s">
                
                <div class="work-hero-card">

                    <img class="work-card-hero-img" src="assets/img/work/mehak/hero.png">
                    <h1>mehaksharma.co</h1>
                    <div id="work-text">PORTFOLIO</div>
                </div>

            </div>
            <div class="col-md-6 col-sm-12  bounceInRight delay-3s">
                <div class="work-hero-card">
                    <img class="work-card-hero-img" src="assets/img/work/ishandeveloper/hero.png">
                    <h1>ishandeveloper.com</h1>
                    <div id="work-text">PORTFOLIO</div>
                </div>
            </div>
        </div>
        <div class="row work-double-row" id="row-3">
            <div class="col-md-6 col-sm-12  bounceInLeft delay-3s">

                <div class="work-hero-card">
                    <img class="work-card-hero-img" src="assets/img/work/url/url-bar.png">
                    <h1>URL Shortener</h1>
                    <div id="work-text">WEB APP</div>                        
                </div>

            </div>
            <div class="col-md-6 col-sm-12  bounceInRight delay-3s">
                <div class="work-hero-card">

                    <img class="work-card-hero-img" src="assets/img/work/news/hero.png">
                    <h1>News App  [GoLang]</h1>
                    <div id="work-text">WEB APP</div>
                </div>
            </div>
        </div>
        <div class="row work-double-row" id="row-3">
            <div class="col-md-6 col-sm-12  bounceInLeft delay-3s">

                <div class="work-hero-card">

                    <img class="work-card-hero-img" src="assets/img/work/foodfuel/food.png">
                    <h1>FoodFuel</h1>
                    <div id="work-text">WEB APP</div>
                </div>

            </div>
            <div class="col-md-6 col-sm-12  bounceInRight delay-3s">
                <div class="work-hero-card">

                    <img class="work-card-hero-img" src="assets/img/work/timestamp/hero.png">
                    <h1>Timestamp Microservice</h1>
                    <div id="work-text">API</div>
                </div>
            </div>
        </div>
        <div class="row work-double-row" id="row-3">
            <div class="col-md-6 col-sm-12  bounceInLeft delay-3s">

                <div class="work-hero-card">

                    <img class="work-card-hero-img" src="assets/img/work/todo/hero.png">
                    <h1>Task-To-Do</h1>
                    <div id="work-text">WEB APP</div>
                </div>

            </div>
            <div class="col-md-6 col-sm-12  bounceInRight delay-3s">
                <div class="work-hero-card">

                    <img class="work-card-hero-img" src="assets/img/work/basketball/hero.png">
                    <h1>Basketball Tournament</h1>
                    <div id="work-text">WEB TEMPLATE</div>
                </div>
            </div>
        </div>
        <div class="row work-double-row" id="row-3">
            <div class="col-md-6 col-sm-12  bounceInLeft delay-3s">

                <div class="work-hero-card">

                    <img class="work-card-hero-img" src="assets/img/work/dictionary/hero.png">
                    <h1>Dictionary</h1>
                    <div id="work-text">FLUTTER APP</div>
                </div>

            </div>
            <div class="col-md-6 col-sm-12  bounceInRight delay-3s">
                <div class="work-hero-card">

                    <img class="work-card-hero-img" src="assets/img/work/pokemon/hero.png">
                    <h1>PokemonPedia</h1>
                    <div id="work-text">FLUTTER APP</div>
                </div>
            </div>
        </div>
        <div class="row work-double-row" id="row-3">
            <div class="col-md-6 col-sm-12  bounceInLeft delay-3s">

                <div class="work-hero-card">

                    <img class="work-card-hero-img" src="assets/img/work/calculator/hero.png">
                    <h1>Calculator</h1>
                    <div id="work-text">FLUTTER APP</div>
                </div>

            </div>
            <div class="col-md-6 col-sm-12  bounceInRight delay-3s">
                <div class="work-hero-card">

                    <img class="work-card-hero-img" src="assets/img/work/qr/hero.png">
                    <h1>QR Code Scanner</h1>
                    <div id="work-text">FLUTTER APP</div>
                </div>
            </div>
        </div>
        <div class="row work-double-row" id="row-3">
            <div class="col-md-6 col-sm-12  bounceInLeft delay-3s">

                <div class="work-hero-card">

                    <img class="work-card-hero-img" src="assets/img/work/ppt/2.png">
                    <h1>Presentations in Browser</h1>
                    <div id="work-text">WEB APP</div>
                </div>

            </div>
            <div class="col-md-6 col-sm-12  bounceInRight delay-3s">
                <div class="work-hero-card">

                    <img class="work-card-hero-img" src="assets/img/work/food/hero.png">
                    <h1>SeeFood</h1>
                    <div id="work-text">UI/UX</div>
                </div>
            </div>
        </div>
    </div>

</header>
</template>

<script>
export default {

}
</script>

