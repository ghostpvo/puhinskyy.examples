<div id="animation_container">
    <canvas id="canvas" width="300px" height="200px" style="position: absolute; display: block; background-color:rgba(255, 255, 255, 1.00);"></canvas>
    <div id="dom_overlay_container" style="pointer-events:none; overflow:hidden; width:100%; height:100%; position: absolute; left: 0px; top: 0px; display: block;"></div>
</div>

<script>
  var canvas, stage, exportRoot, anim_container, dom_overlay_container, fnStartAnimation;

  function init() {
    canvas = document.getElementById("canvas");
    anim_container = document.getElementById("animation_container");
    dom_overlay_container = document.getElementById("dom_overlay_container");
    handleComplete();
  }

  function handleComplete() {
    //This function is always called, irrespective of the content. You can use the variable "stage" after it is created in token create_stage.
    exportRoot = new lib.ELS_logo();
    stage = new createjs.Stage(canvas);
    stage.addChild(exportRoot); 
    //Registers the "tick" event listener.
    fnStartAnimation = function() {
      createjs.Ticker.setFPS(lib.properties.fps);
      createjs.Ticker.addEventListener("tick", stage);
    }
    //Code to support hidpi screens and responsive scaling.
    function makeResponsive(isResp, respDim, isScale, scaleType) {
      var lastW, lastH, lastS=1;    
      window.addEventListener('resize', resizeCanvas);    
      resizeCanvas();   
      function resizeCanvas() {     
        var w = lib.properties.width, h = lib.properties.height;      
        var iw = window.innerWidth, ih=window.innerHeight;      
        var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;      
        if(isResp) {                
          if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
            sRatio = lastS;                
          }       
          else if(!isScale) {         
            if(iw<w || ih<h)            
              sRatio = Math.min(xRatio, yRatio);        
          }       
          else if(scaleType==1) {         
            sRatio = Math.min(xRatio, yRatio);        
          }       
          else if(scaleType==2) {         
            sRatio = Math.max(xRatio, yRatio);        
          }     
        }     
        canvas.width = w*pRatio*sRatio;     
        canvas.height = h*pRatio*sRatio;
        canvas.style.width = dom_overlay_container.style.width = anim_container.style.width =  w*sRatio+'px';       
        canvas.style.height = anim_container.style.height = dom_overlay_container.style.height = h*sRatio+'px';
        stage.scaleX = pRatio*sRatio;     
        stage.scaleY = pRatio*sRatio;     
        lastW = iw; lastH = ih; lastS = sRatio;   
      }
    }
    makeResponsive(false,'both',false,1); 
    fnStartAnimation();
  }

  init();
</script>

<header class="m-top-bar">
    <div class="b-wrap">
        <span class="mob-nav-togler">
            <i class="icon-menu-bars"></i>
        </span>
        <a href="home.php" class="logo-el">
            <i class="icon-headerlogo"></i>
        </a>
        <a href="tel:88002224901" class="mob-phonecall">
            <i class="icon-phone"></i>
        </a>
        <div class="no-logoplace">
            <div class="contacts-row">
                <p class="call-center">Круглосуточный call-центр юридической поддержки</p>
                <a href=".last-screen .all-servives" class="hdr-btn scroll-to-anch">Оформить карту</a>
                <a href="" class="phone-number">
                    <i class="icon-phone"></i>
                    <span>8 800 222 49 01</span>
                </a>
                <!-- <ul class="lang-select">
                    <li class="active"><a href="">RU</a></li>
                    <li><a href="">UA</a></li>
                    <li><a href="">EN</a></li>
                </ul> -->
            </div>
            <div class="menu-row">
                <ul class="main-menu">
                    <li><a href="lawers.php">Наши юристы</a></li>
                    <li><a href="historys.php">Истории клиентов</a></li>
                    <li><a href="tarifs.php">Тарифы</a></li>
                    <li><a href="partners-program.php">Партнёрская программа</a></li>
                    <li><a href="knowleges-base.php">База знаний</a></li>
                    <li><a href="about.php">О компании</a></li>
                </ul>
                <div class="login-logout">
                    <a href="">
                        <i class="icon-logout"></i>
                        <span>Войти</span>
                    </a>
                </div>
            </div>
        </div>
    </div>
</header>