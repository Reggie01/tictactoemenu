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
       restart = new Image(),
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
        {
           name: "restart",
           width: 150,
           height: 40,
           x: 0,
           y: 80
        }
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
        restart.src = "Images/playagain.png";
    }
    
    function loadScene() { 
            loadImages();    
           // loadArrow( 0, 170 );
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
    
    function filterButton( mouseX, mouseY ) {
        var button = buttons.filter( function( button ) {
             if( mouseX >=  button.x &&
                 mouseX <= ( button.x + button.width ) &&
                 mouseY >= button.y &&
                 mouseY <= button.y + button.height) {
                      return button;
                 }
        });
        
        return button;
    }
    
    function handleScene1( mouseX, mouseY ) {
         var button = filterButton( mouseX, mouseY );
        
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
        
        context.drawImage( gameover, 0, 0 );
        if ( num > 0.66 ) {
             context.drawImage( youwin, 0, 40 );
             console.log( youwin );
        } else if ( num > 0.33 ) {
             context.drawImage( computerwins, 0, 40 );
             console.log( computerwins );
        } else {
             context.drawImage( draw, 0, 40 );
             console.log( draw );
        }
        
        context.drawImage( restart, 40, 80 );
                            
    }
    
    function handleScene2( mouseX, mouseY ) {
      scene = 3;
      createScene3();
    }
    
    function handleScene3( mouseX, mouseY ) {
        if( mouseX > 0 && mouseX < 160 && mouseY > 80 && mouseY < 120 ) {
            
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
    
    function loadArrow( x, y ) {
        console.log( "loading arrow" );
        arrow.onload = function() {
            console.log( "arrow loaded" );
            context.drawImage( arrow, x, y );
        }
    }
    
    function handleMouseMoveScene1( mouseX, mouseY ) {
         var button = filterButton( mouseX, mouseY );
         
         if( button.length > 0 ) {
            if( button[0].name === "oicon" ) {
                context.drawImage( arrow, 0, 130 );
                console.log( "oicon button" );
            } else if( button[0].name === "xicon" ){
                context.drawImage( arrow, 0, 170 );
                console.log( "xicon button" );
            } 
         }
    }
    
    function handleMouseMoveScene3( mouseX, mouseY ) {
         
         var button = filterButton( mouseX, mouseY );
         
         if( button.length > 0 ) {
             if( button[0].name === "restart" ){
                 console.log( "restart button" );
             }
         }
         
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
        
        if( scene === 1 ) {
            handleMouseMoveScene1( mouseX, mouseY );
        } else if( scene === 3 ) {
            handleMouseMoveScene3( mouseX, mouseY );
        }
        
    }
    
    canvas.addEventListener( "click", handleClick );
    canvas.addEventListener( "mousemove", handleMouseMove );
    
     