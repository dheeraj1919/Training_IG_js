import {Game} from "./Game.js";

onload = ()=>{
    const main = document.querySelector('#main');
    const canvas = document.createElement("canvas");
    var ctx=canvas.getContext('2d');
    canvas.width = 800;
    canvas.height = 600;
    main.append(canvas);
    var mod=0;
    var background=new Image();
    background.src="https://noobtuts.com/content/unity/2d-arkanoid-game/hexagon_pattern.png";
    
    ctx.font = "30px Arial";
    //ctx.fill();
    ctx.fillText("Click Enter Button To Start Game", canvas.width/2-230, canvas.height/2);
   
    document.addEventListener("keyup",(key)=>
    {
       if(key.code=="Enter")
        {
            mod=1;
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