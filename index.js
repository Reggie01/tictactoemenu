var      canvas = document.getElementById("canvas"),
           context = canvas.getContext("2d"),
               width = canvas.width
              height = canvas.height,
     chooseone = new Image(),
              arrow = new Image(),
 computerwins = new Image(),
                draw = new Image(),
       gameover = new Image(),
              oicon = new Image(),
       playagain = new Image(),
         tictactoe = new Image(),
               xicon = new Image(),
             youwin = new Image(),
             scene = 1;
        
    var timerId;
    var buttons = [
        {    
            name: "oicon",
            width: 150,
          height: 40,
                  x: 60,
                  y: 120,
        },{    
            name: "xicon",
            width: 150,
          height: 40,
                  x: 60,
                  y: 160,
        },
    ]
    
    function loadImages() {
        tictactoe.src = "Images/tictactoe.png";
        tictactoe.onload = function() {
            context.drawImage( tictactoe, 0, 0 );
        }
        chooseone.src = "Images/chooseone.png";
        chooseone.onload = function() {
            context.drawImage( chooseone, 0, 80 );
        }
        oicon.src = "Images/oicon.png";
        oicon.onload = function() {
            context.drawImage( oicon, 60, 120 );
        }
        xicon.src = "Images/xicon.png";
        xicon.onload = function() {
            context.drawImage( xicon, 60, 160 );
        }
        arrow.src = "Images/arrow.png";
        computerwins.src = "Images/computerwins.png";
        youwin.src = "Images/youwin.png";
        draw.src = "Images/draw.png";
        gameover.src = "Images/gameover.png";
        playagain.src = "Images/playagain.png";
    }
    
    function loadScene() { 
            loadImages();    
    }
    
    function clear() {
         context.fillStyle = "white";
         context.fillRect( 0, 0, width, height );
    }
    
    function init() {
         
         loadScene();
    }
    
    function createBoard() {
        clear();
        
       context.beginPath();
       context.moveTo( width/3, 0 );
       context.lineTo( width/3, height );
     
       context.moveTo( width * 2/3, 0 );
       context.lineTo( width * 2/3, height  );
     
       context.moveTo( 0, height * 1/3 );
       context.lineTo( width, height * 1/3 );
     
       context.moveTo( 0, height * 2/3 );
       context.lineTo( width, height * 2/3 );
     
       context.stroke();
       
    }
    
    function update() {
        if( scene === 2 ){
            createBoard();
        } else if( scene === 3 ) {
            console.log( "Hello..." );
        }
    }
    
    init();
    
    var frames = 30;
    timerId = setInterval(update, 1000/frames);
    update();
    
    function handleScene1( mouseX, mouseY ) {
         var button = buttons.filter( function( button ) {
             if( mouseX >=  button.x &&
                 mouseX <= ( button.x + button.width ) &&
                 mouseY >= button.y &&
                 mouseY <= button.y + button.height) {
                      return button;
                 }
        });
        
        if( button.length > 0 ) {
            if( button[0].name === "oicon" ) {
                scene = 2;
            } else if( button[0].name === "xicon" ){
                scene = 2;
            }
        }  

        console.log( "Button clicked: " + JSON.stringify( button, null, 2 ) );                
    }
    
    function createScene3() {
        
        var num = Math.random();
        
        clear();
        console.log( num );
        
        if ( num > 0.66 ) {
             context.drawImage( gameover, 0, 0 );
             context.drawImage( youwin, 0, 40 );
             context.drawImage( playagain, 0, 80 );
             console.log( youwin );
        } else if ( num > 0.33 ) {
             context.drawImage( gameover, 0, 0 );
             context.drawImage( computerwins, 0, 40 );
             context.drawImage( playagain, 0, 80 );
             console.log( computerwins );
        } else {
             context.drawImage( gameover, 0, 0 );
             context.drawImage( draw, 0, 40 );
             context.drawImage( playagain, 0, 80 );
             console.log( draw );
        }
                            
    }
    
    function handleScene2( mouseX, mouseY ) {
      scene = 3;
      createScene3();
    }
    
    function handleScene3( mouseX, mouseY ) {
        if( mouseX > 0 && mouseX < 160 && mouseY > 80 && mouseY < 120 ) {
            console.log( "Mouse x: " + mouseX );
            console.log( "Mouse y: " + mouseY );
        }
    }
    
    function handleClick( event ) {
        var mouseX,
              mouseY;
              
        if( event.pageX || event.pageY === 0 ){
            mouseX = event.pageX - this.offsetLeft;
            mouseY = event.pageY - this.offsetTop;
        } else if ( event.offsetX || event.offsetY === 0 ) {
            mouseX = event.offsetX;
            mouseY = event.offsetY;
        }
        
        if( scene === 1){
            handleScene1( mouseX, mouseY );
        } else if( scene === 2 ) {
            handleScene2();
        } else if( scene === 3 ){
            handleScene3( mouseX, mouseY );
        }
       
        console.log( "Mouse X: " + mouseX );
        console.log( "Mouse Y: " + mouseY );        
    }
    
    function handleMouseMove( event ) {
        var mouseX, mouseY;
        
        if( event.pageX || event.pageY === 0 ){
             mouseX = event.pageX - this.offsetLeft;
             mouseY = event.pageY - this.offsetTop;
        } else if( event.offsetX || event.offsetY === 0 ) {
             mouseX = event.offsetX;
             mouseY = event.offsetY;
        }
        
        console.log( "Mouse X: " + mouseX );
        console.log( "Mouse Y: " + mouseY );
    }
    
    canvas.addEventListener( "click", handleClick );
    canvas.addEventListener( "mousemove", handleMouseMove );
    
     