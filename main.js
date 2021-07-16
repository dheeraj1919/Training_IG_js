import {Game} from "./Game.js";
//import {Sounds} from "./Sounds.js";


onload = ()=>{
    const main = document.querySelector('#main');
    const canvas = document.createElement("canvas");
    var ctx=canvas.getContext('2d');
    canvas.width = 800;
    canvas.height = 600;
    main.append(canvas);
    var mod=0;
    var startback=new Image();
    var background=new Image();
    background.src="https://noobtuts.com/content/unity/2d-arkanoid-game/hexagon_pattern.png";
   startback.src="https://www.gamewallpapers.com/img_script/wallpaper_dir/img.php?src=wallpaper_doom_eternal_20_2560x1440.jpg&height=450&width=800&fill-to-fit&sharpen";
   ctx.drawImage(startback,0,0,canvas.width,canvas.height);
   ctx.fillStyle = 'blue';
   ctx.strokeStyle = 'white';
   //ctx.textAlign = 'center';
   ctx.font = '40px Arial Bold';
   ctx.lineWidth = 3;
  // ctx.font = "30px Arial";
    //ctx.fill();
    ctx.fillText("Click Enter Button To Start Game", canvas.width/2-230, canvas.height/2);
   
    document.addEventListener("keyup",(key)=>
    {
       if(key.code=="Enter")
        {
            // this.sound=new Sounds();
            // 
            mod=1;
            //this.sound.
            click();
        }    
    });
    const game = new Game(canvas);
    game.start();

    onkeydown = game.onKeyDown.bind(game);
    onkeyup = game.onKeyUp.bind(game);
    function click (){
        ctx.drawImage(background,0,0,800,600);
        game.update();
        game.draw();
        requestAnimationFrame(click);
    }
   
}