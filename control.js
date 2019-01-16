







var bd = document.getElementsByTagName("body")[0];
var heroBtn = document.querySelectorAll(".hero-btn");
var girl = document.getElementById("girl");
var boy = document.getElementById("boy");
var play = document.getElementById("play");
var sign = document.getElementById("sign");
var menu = document.querySelector(".menu");
var canvvv = document.getElementById("C1");
var hero;

heroBtn[0].addEventListener("click", () => {
    hero = girl.getAttribute("src");
    heroBtn.forEach((el) => {
        el.style.transform = "scale(1)";
    });
    heroBtn[0].style.transform = "scale(1.5)";
    console.log(hero);
});
heroBtn[1].addEventListener("click", () => {
    hero = boy.getAttribute("src");
    heroBtn.forEach((el) => {
        el.style.transform = "scale(1)";
    });
    heroBtn[1].style.transform = "scale(1.5)";
    console.log(hero);
});


play.addEventListener("click", () => {
    if (hero != null) {
        menu.style.display = "none";
        // body.style.color="100%";
        bd.style.background  = "none";
        bd.style.backgroundColor="#202830";
        bd.style.height="100%";

        canvvv.style.display="block";
        (function() { "use strict"





var lvlconter=0;
var controller, display, game;
var canvas = document.querySelector("canvas"),
ctx = canvas.getContext("2d");
var heroo = new Image();
heroo.src =hero;




function sound(src) {
  this.sound = document.createElement("audio");
  this.sound.src = src;
  this.sound.setAttribute("preload", "auto");
  this.sound.setAttribute("controls", "none");
  this.sound.style.display = "none";
  document.body.appendChild(this.sound);
  this.play = function(){
      this.sound.play();
  }
  this.stop = function(){
      this.sound.pause();
  }    
}



// a basic controller object that handles key input
controller = {

  left:false,
  right:false,
  up:false,

  keyUpDown:function(event) {

    var key_state = (event.type == "keydown")?true:false;

    switch(event.keyCode) {

      case 37: controller.left = key_state; break; // left key
      case 38: controller.up = key_state; break; // up key
      case 39: controller.right = key_state; break; // right key

    }

  }

};



// draws everything and handles html elements
display = {

  buffer:document.querySelector("canvas").getContext("2d"),
  context:document.querySelector("canvas").getContext("2d"),
 


  render:function() {


    //new hero 3 lines
    this.buffer.clearRect(0, 0, this.buffer.canvas.width,this.buffer.canvas.height);
    this.buffer.imageSmoothingEnabled = false;
    this.buffer.drawImage(heroo ,game.player.x,game.player.y,60,60);


 
  },

};


// the game object holds all of our awesome game logic
game = {

  // there's something different about the player object, and its old_x and

  player: {

    color:"blue",
    height:50,
    jumping:false,
    old_x:160,// used for tracking last position for collision detection
    old_y:160,
    velocity_x:0,
    velocity_y:0,
    width:50,
    x:10,
    y:10

  },

  // the world object holds information about our tile map
  world: {

    columns:34,// just some basic info. no worries
    rows:23,
    tile_size:40,

    map:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
         0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
         0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
         0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
         0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
         0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
         0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,4,4,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
         0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
         0,0,0,0,0,0,0,0,0,0,0,0,4,4,4,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
         0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,4,4,4,
         0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
         0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,4,4,4,4,0,0,0,0,
         0,0,0,0,0,4,4,4,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,4,0,0,0,0,0,
         0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,4,0,0,0,0,0,
         4,4,4,0,0,0,0,4,4,4,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,4,4,0,0,0,0,0,
         0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,4,0,0,0,0,0,
         0,0,0,0,0,0,0,0,0,0,4,4,4,4,0,0,4,4,4,4,4,0,0,0,0,0,0,4,4,0,4,4,4,4,
         0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,4,0,0,0,0,0,
         0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,4,4,0,0,0,0,0,
         0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
         0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
         1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,4,4,4,4,4,1,1,1,1,1,1,1,1,
        //  0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,

      ]

  },

  collision: {


    1:function(object, row, column) {
      // alert('looost')
      var mySound = new sound("Eating.mp3");
      mySound.play();
game.player.old_x = game.player.x = 0;
game.player.old_y = game.player.y = 0;
      // if (this.topCollision(object, row)) { return; }// if no  collision
      // this.rightCollision(object, column);           // try right side collision

    },

    // the 2 tile type has a top and a left side to collide with
    2:function(object, row, column) {

      if (this.topCollision(object, row)) { return; }
      this.leftCollision(object, column);

    },

    // the 3 tile type only blocks movement through the right side
    3:function(object, row, column) {

      this.rightCollision(object, column);

    },

    // the 4 tile type has collision on all sides but the bottom
    4:function(object, row, column) {
      heroo.src=hero
      if (this.topCollision(object, row)) { return; }// you only want to do one
      if (this.leftCollision(object, column)) { return; }// of these collision
      this.rightCollision(object, column);// responses. that's why there are if statements

    },

    // the 5 tile only does collision if the object falls through the top
    5:function(object, row, column) {

      this.topCollision(object, row);

    },

 
    leftCollision(object, column) {

      if (object.velocity_x > 0) {// If the object is moving right

        var left = column * game.world.tile_size;// calculate the left side of the collision tile

        if (object.x + object.width * 0.5 > left && object.old_x <= left) {// If the object was to the right of the collision object, but now is to the left of it

          object.velocity_x = 0;// Stop moving
          object.x = object.old_x = left - object.width * 0.5 - 0.001;// place object outside of collision
          return true;

        }

      }

      return false;

    },

    // these are all basically the same concept as the leftCollision function,
    // only for the different sides.

    rightCollision(object, column) {

      if (object.velocity_x < 0) {

        var right = (column + 1) * game.world.tile_size;

        if (object.x + object.width * 0.5 < right && object.old_x + object.width * 0.5 >= right) {

          object.velocity_x = 0;
          object.old_x = object.x = right - object.width * 0.5;

          return true;

        }

      }

      return false;

    },

    topCollision(object, row) {

      if (object.velocity_y > 0) {

        var top = row * game.world.tile_size;

        if (object.y + object.height > top && object.old_y + object.height <= top) {

          object.jumping = false;
          object.velocity_y = 0;
          object.old_y = object.y = top - object.height - 0.01;

          return true;

        }

      }

      return false;

    }

  },

  // Here's the game loop
  loop:function() {

    var flag1= true;
    
    // get and use keyboard input
    if (controller.left) {

      game.player.velocity_x -= 0.5;

    }

    if (controller.right) {
      game.player.velocity_x += 0.5;
      heroo.src=hero;

    }

    if (controller.up && !game.player.jumping) {
     var mySound = new sound("jump.mp3");
     mySound.play();
    heroo.src=hero
      game.player.velocity_y = -35;
      game.player.jumping = true;

    }

    game.player.velocity_y += .5; // add gravity

    game.player.old_x = game.player.x;// store the last position of the player
    game.player.old_y = game.player.y;// before we move it on this cycle

    game.player.x += game.player.velocity_x;// move the player's current position
    game.player.y += game.player.velocity_y;

    // do collision detection with the level boundaries so the player can't leave
    // the screen. 
    if (game.player.x < 0) {

      game.player.velocity_x = 0;
      game.player.old_x = game.player.x = 0;

    } else if (game.player.x + game.player.width > display.buffer.canvas.width) {
      // alert("won");
lvlconter++;
if(lvlconter<2){
game.player.velocity_x =10;
console.log(game.world.map[17][8]);

if( flag1==true){
      game.world.map=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
                      0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
                      0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
                      0,4,4,4,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,4,4,4,0,4,
                      0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
                      0,0,0,0,0,0,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,0,0,0,0,0,0,0,
                      0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
                      0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
                      0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
                      0,0,0,0,0,0,0,4,4,0,0,0,0,0,0,0,4,4,0,0,0,0,0,0,0,0,0,0,4,4,0,0,0,0,
                      0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
                      0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,4,0,0,0,0,0,0,0,0,
                      0,4,4,4,4,4,4,0,4,0,0,0,0,0,0,0,4,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
                      0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
                      0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,4,0,0,0,0,
                      0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
                      0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,4,4,4,4,4,4,0,0,0,0,0,0,
                      0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
                      1,1,1,1,1,1,1,1,1,4,4,4,4,4,4,4,4,4,4,4,4,4,1,1,1,1,1,1,1,1,1,1,1,1,1
         
     ];
     var elem = document.getElementById('lvl1');
     elem.parentNode.removeChild(elem);
 
    //  mySound.stop();
     var mylvl2sound = new sound("lvl2song.mp3");
     mylvl2sound.play();
      
     document.getElementById("C1").style.backgroundImage = "url('level2.png')";
     display.render();
     game.player.velocity_x = 0;
     game.player.old_x = game.player.x = display.buffer.canvas.width -700 ;
     game.player.old_y = game.player.y = display.buffer.canvas.height -10;


     flag1=false;
    }
  }
  else{
   alert( 'your score is ' + finalScore);
  }

    }

    if (game.player.y < 0) {
      

      game.player.velocity_y = 0;
      game.player.old_y = game.player.y = 0;

    } else if (game.player.y + game.player.height > display.buffer.canvas.height) {
      // document.canvas.style.backgroundImage = "url('level2.png')";

      // document.querySelector("canvas").style.backgroundColor = "#f3f3f3";
    
      // alert("try again")
      game.player.y = 10;
      game.player.x = 10;
     
      // game.player.velocity_y = 0;
      // game.player.old_y = game.player.y = display.buffer.canvas.height - game.player.height;

    }

   
    // calculate the player's x and y tile position in the tile map
    var tile_x = Math.floor((game.player.x + game.player.width * 0.5) / game.world.tile_size);
    var tile_y = Math.floor((game.player.y + game.player.height) / game.world.tile_size);
    // get the value at the tile position in the map
    var value_at_index = game.world.map[tile_y * game.world.columns + tile_x];
    
    
    // if it's not an empty tile, we need to do narrow phase collision detection and possibly response!
    if (value_at_index != 0) {

      // simply call one of the routing functions in the collision object and pass
      // in values for the collision tile's location in grid/map space
      game.collision[value_at_index](game.player, tile_y, tile_x);

    }
   

 
    tile_x = Math.floor((game.player.x + game.player.width * 0.5) / game.world.tile_size);
    tile_y = Math.floor((game.player.y + game.player.height) / game.world.tile_size);
    value_at_index = game.world.map[tile_y * game.world.columns + tile_x];

    if (value_at_index != 0) {

      game.collision[value_at_index](game.player, tile_y, tile_x);

    } //  checked twice and resolved any collisions with the map!

    game.player.velocity_x *= 0.9;// apply some friction to the player's velocity
    game.player.velocity_y *= 0.9;// the reason we do this after the collision code


    display.render();

    window.requestAnimationFrame(game.loop);

  }

};

// basic setup and initialization
display.context.canvas.height = 1065;
display.context.canvas.width = 1340;

window.addEventListener("resize", display.resize);
window.addEventListener("keydown", controller.keyUpDown);
window.addEventListener("keyup", controller.keyUpDown);

display.render();

game.loop();

})();
    }
});



sign.addEventListener("click",()=>{
  how.style.display="block";
  exit.style.display="block";
  })
  
  exit.addEventListener("click",()=>{
      how.style.display="none";
      exit.style.display="none";
  })




function start()
{
  
   finalScore = 0;
    count = setInterval(()=>{
        finalScore+=1;
    },100);
};
start();
function stoptimer(){
  clearInterval(count);
  console.log(finalScore);
 }



// window.addEventListener("resize", display.resize);
