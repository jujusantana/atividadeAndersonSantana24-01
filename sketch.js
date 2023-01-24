//criar variáveis

var tPato;

var chao;


//função que carrega imagens
function preload()
{
    //carregar imagens
    tPatoImg = loadImage("img/pato.png");

}


//função que inicializa o arquivo
function setup()
{
    //cria tamanho do fundo da tela
    createCanvas(800,800);
    //criar sprites
    tPato = createSprite(500,800,10,10);
    //carregar imagem
    tPato.addImage("tPato",tPatoImg);
    //colocar tamanho
    tPato.scale = 0.3;
    chao = createSprite(500, 810, 150, 20);
    

}


//função que executa o programa até que seja parado
function draw()
{
    
    background("#BFBFBF");

  
    if(keyDown("space"))
    {
        tPato.velocityY = -10;
    }
    
    tPato.velocityY = tPato.velocityY + 0.8;
    tPato.collide(chao)
    drawSprites();

}
