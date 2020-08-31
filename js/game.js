window.onload = () => {
    document.getElementById('start-button').onclick = () => {
      startGame();
    }
    function startGame() {

        popinoGame.init('canvas')
        }
};


const popinoGame={

    name:'Looking for a dog',
    authors:'Cynthia Gorosito / Diego Molina',
    version:'1.0.0',
    license:'',
    description:'The best game of the world',
    ctx:undefined,
    player:undefined,
    background:undefined,
    playerSpeedX:undefined,
    playerSpeedY:undefined,
    fps:60,
    canvasSize:{
        w:1024,
        h:600
        //Cómo pasar los datos de la etiqueta canvas
         
    },
    init(id){
        this.setEventListeners()
        this.canvasId=id,
        console.log(this.canvasId)
        this.ctx=document.getElementById(this.canvasId).getContext('2d')
        this.drawPlayer()
        this.drawBackground()
        setInterval(() => {
            this.drawGame()
            this.player.move()
        }, 50);
        
    },
    drawGame(){
        this.clearScreen()
        this.background.draw()
        this.moveBackground()
        this.player.draw()
    },

    drawPlayer(){
        playerSpeedX= 10
        playerSpeedY= 10
        this.player= new Players(this.ctx,100,100,200,400,this.canvasSize,3,0,100,'player.png')
        
    },
    drawBackground(){
        const img = new Image();
        const backgroundSpeed = playerSpeedX*(-0.3)
        img.src = 'https://chupacdn.s3.amazonaws.com/catalog/product/cache/4/thumbnail/1280x/17f82f742ffe127f42dca9de82fb58b1/1/0/10-vector-game-backgrounds-16253_imgs_16253_1.jpg'
        this.background= new Background(this.ctx,0,0,this.canvasSize.w,this.canvasSize.h,backgroundSpeed,img)
    },
    clearScreen(){
        this.ctx.clearRect(0,0,this.canvasSize.w,this.canvasSize.h)
    },
    moveBackground(direction){
        if(this.player.playersPosition.x<512-100) this.player.move(direction)
        else {(
            this.player.playersPosition.x=512-100) 
            this.player.move(direction)
            this.background.move(direction)
        }
        
        
    },
    setEventListeners() {
        document.onkeydown = e => {
            e.keyCode === 37 ? this.moveBackground('left') : null
            e.keyCode === 39 ? this.moveBackground('right') : null
            e.keyCode === 17 ? this.moveBackground('jump'):null
            e.keyCode === 40 ? this.moveBackground('down'):null
            e.keyCode === 38 ? this.moveBackground('up'):null

            
        }
       
        

    
}
}





























