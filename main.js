//Criar uma referência para tela
canvas = document.getElementById('canvas');
ctx = canvas.getContext("2d");
//Dê altura e largura específicas para a imagem do carro
	greencar_Width = 75;
	greencar_height = 100;
	backgroundImage = "parkingLot.jpg";
	greencarImage = "car2.png";

//Defina a posição inicial para uma imagem de carro.
greencar_x = 75;
greencar_y = 325;
function add() {
	//carregar carro e imagens de fundo na tela.
	background_imgTag = new Image();
	background_imgTag.onload = uploadBackground;
	background_imgTag.src = backgroundImage;

	greencar_imgTag = new Image();
	greencar_imgTag.onload = uploadGreenCar;
	greencar_imgTag.src = greencarImage;

}
function uploadBackground() {
	ctx.drawImage(background_imgTag, 0 ,0 , canvas.width , canvas.height);

}

function uploadGreenCar() {
	//Defina a função ‘uploadGreenCar’.
	ctx.drawImage(greencar_imgTag, greencar_y ,greencar_x, greencar_Width , greencar_height);
	
}


window.addEventListener("keydown", myKeyDown);

function myKeyDown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
	
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
	
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
		
		
}

function up()
{
	if(greencar_y >=0)
	{
		greencar_y=greencar_y - 10;
		console.log("cima precionado , x = " + greencar_x + "|y = " + greencar_y);
		uploadBackground();
		uploadGreenCar();

	}
}

function down()
{
	if(greencar_y <=350)
	{
		greencar_y=greencar_y +10;
		console.log("cima precionado , x = " + greencar_x + "|y = " + greencar_y);
		uploadBackground();
		uploadGreenCar();

	}
}
function left()
{
	if(greencar_x >=0)
	{
		greencar_x=greencar_x + 10;
		console.log("cima precionado , x = " + greencar_x + "|y = " + greencar_y);
		uploadBackground();
		uploadGreenCar();

	}
}

function right()
{
	if(greencar_x <=750)
	{
		greencar_x=greencar_x - 10;
		console.log("cima precionado , x = " + greencar_x + "|y = " + greencar_y);
		uploadBackground();
		uploadGreenCar();

	}
}
