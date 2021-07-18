export class Sounds{
constructor(){}
paddleHit(){
	const paddleHit = new Audio();
	paddleHit.src = "wall.mp3";
	return paddleHit;
}
brickHit(){
	const brickHit = new Audio();
	brickHit.src = "wall.mp3";
	return brickHit;
}
GameStart()
{
	const GameStart=new Audio();
	GameStart.src="gameStart.wav";
	return GameStart;
}
GameOver()
{
	const GameOver=new Audio();
	GameOver.src="gameOver.wav";
	return GameOver;
}
}