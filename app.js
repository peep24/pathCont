/////
import { Particle } from './particle.js'

class App {
    constructor() {
        this.canvas = document.createElement('canvas');
        this.target = document.getElementById("target")
        this.target.appendChild(this.canvas);
        this.ctx = this.canvas.getContext('2d');

        this.pixelRatio = window.devicePixelRatio > 1 ? 2 : 1;

        this.particles = [];
        this.outerParticles = [];
        this.sortedParticles = [];
        this.reducedParticles = [];
        this.centeredParticles = [];

        this.speed = 3;

    this.ball = {
        x:  30,
        y:  30,
        radius: 30,
        direction: 1,
    };

    this.ballIndex = 0;


    this.particleColors = ["red", "green", "blue", "orange", "#e72176", "yellow", "darkcyan", "black"]

    this.colorIndex = 0

    this.colorOne = this.particleColors.slice(-1)[0] 
    
    this.colorTwo = this.particleColors[0]


    //Stuff from Resize!
    // this.stageWidth = document.body.clientWidth;
    // this.stageHeight = document.body.clientHeight;

    // this.stageHeight = this.target.clientHeight;
    // this.stageWidth = this.target.clientWidth;
    
    // this.canvas.width = this.stageWidth * this.pixelRatio;
    // this.canvas.height = this.stageHeight * this.pixelRatio;
    // this.ctx.scale(this.pixelRatio, this.pixelRatio);

    window.addEventListener('resize', this.resize.bind(this), false);
    this.resize();

    this.createParticles();

    // this.drawGrid(800, 1000, "grid");

    this.mouse = {
        x: 0,
        y: 0,
    };

    // document.addEventListener('pointermove', this.onMove.bind(this), false)

    }//////End of constructor

    
    // onMove(e) {
    //     this.mouse.x = e.clientX;
    //     this.mouse.y = e.clientY;
    //     this.mouseDistance(this.mouse, this.reducedParticles.slice(-1)[0])
    // }

    mouseDistance(mouse, item,) {
        // console.log(this.mouse, item)
        let dx = mouse.x - item.x;
        let dy = mouse.y - item.y;
        let distance = Math.sqrt(dx * dx + dy * dy);
        if (distance > 38 && distance < 42) {
            console.log(distance, "x", mouse.x, "y", mouse.y)
        }
        
    }



    

    resize() {
        this.stageHeight = this.target.clientHeight;
        this.stageWidth = this.target.clientWidth;
        
        this.canvas.width = this.stageWidth * this.pixelRatio;
        this.canvas.height = this.stageHeight * this.pixelRatio;
        this.ctx.scale(this.pixelRatio, this.pixelRatio);

        this.colorIndex = 0;
        this.colorOne = this.particleColors.slice(-1)[0] 
        this.colorTwo = this.particleColors[0]
        this.ballIndex = 0;
        this.ball.direction = 1;

        this.createParticles();
  
    }

    getColors(colorIndex) {
        return this.particleColors[colorIndex]
    }

    createParticles() {

        //Empty the existing array.
        this.particles = [];
        this.outerParticles = [];
        this.pos = cachedParticles

        this.outerPos = finishedPath

        for (let i = 0; i < this.outerPos.length; i++) {
            const item = new Particle(this.outerPos[i]);
            this.outerParticles.push(item);

        }

        for (let j = 0; j < this.pos.length; j++) {
            const item = new Particle(this.pos[j]);
            this.particles.push(item);

        }

        this.ctx.clearRect(0, 0, this.stageWidth, this.stageHeight);
        // this.drawparticles()

        this.reducedParticles = this.outerParticles
    
        // this.reducelist(this.outerParticles)
   
        // this.drawOuterParticles();

        this.animate() 
    
    }

    // drawparticles(){
       
    //     if (this.particles.length > 0 ) {
           
    //         for (let i = 0; i < this.particles.length; i++) {  
    //             const item = this.particles[i];
    //             const nextItem = this.particles[i+1];
    //             console.log(this.stageWidth, this.stageHeight)
    //             item.drawParticles(i, this.ctx, this.colorOne, this.colorTwo);
    //         }
    //     }
       
         
    // }





    drawOuterParticles() {
        // var item = this.reducedParticles[0]
    
        // item.drawOuterParticleRadius(this.ctx, this.reducedParticles[0]);

        if (this.reducedParticles.length > 0 ) {
            for (let i = 0; i < this.reducedParticles.length-1; i++) {  
                const item = this.reducedParticles[i];
                const nextItem = this.reducedParticles[i+1];
                // console.log(item)
                item.drawOuterParticles(i, this.ctx, nextItem);
            }
        }
    }



    updateBallPosition() {     
 
        if (this.ball.direction === 1) {
            // console.log("Forwards")
            if (this.ballIndex <= this.reducedParticles.length-1) {
                this.ball.x = this.reducedParticles[this.ballIndex].x;
                this.ball.y = this.reducedParticles[this.ballIndex].y;
                this.ballIndex += this.speed;
                // console.log(this.ballIndex)
            } else {

                this.ball.direction = 1 - this.ball.direction
                this.ballIndex -= 2;
                
                //Increment Color
                if (this.colorIndex < this.particleColors.length-2) {
                    this.colorIndex +=1
                this.colorOne = this.getColors(this.colorIndex)
                } else {
                    this.colorIndex = 0
                    this.colorOne = this.getColors(this.colorIndex)
                }
            }

        } else {

            if (this.ballIndex > 0) {
                this.ball.x = this.reducedParticles[this.ballIndex-1].x;
                this.ball.y = this.reducedParticles[this.ballIndex-1].y;
                this.ballIndex -= this.speed;
            

            } else {
                this.ball.direction = 1 - this.ball.direction
                this.ballIndex += 2;

                  //Increment Color
                if (this.colorIndex < this.particleColors.length-2) {
                    this.colorIndex +=1
                    this.colorTwo = this.getColors(this.colorIndex)
                    
                } else {
                    this.colorIndex = 0
                    this.colorTwo = this.getColors(this.colorIndex)
                    
                }
                
            }
        }
        // this.drawBall()

    }

    // drawBall() {
    //     // this.ctx.fillStyle = "transparent"
    //     this.ctx.fillStyle = "green"
    //     this.ctx.beginPath();
    //     this.ctx.arc(this.ball.x,this.ball.y,this.ball.radius-20,0,Math.PI * 2,false);
    //     // this.ctx.rect(this.ball.x, this.ball.y, 150, 100);
    //     this.ctx.fill();
    // }


    animate() {

        requestAnimationFrame(this.animate.bind(this));

        this.ctx.clearRect(0, 0, this.stageWidth, this.stageHeight);

        

        if (this.particles.length > 0 ) {
           
            
            for (let i = 0; i < this.particles.length; i++) {  
                const item = this.particles[i];
                const nextItem = this.particles[i+1]
                let dx = this.ball.x - item.x;
                let dy = this.ball.y - item.y;
                let distance = Math.sqrt(dx * dx + dy * dy);
                let forceDirectionX = dx / distance;
                let forceDirectionY = dy / distance;
                let maxDistance = this.ball.radius;
                let force = (maxDistance - distance) / maxDistance;
                let directionX = forceDirectionX * force * item.weight;
                let directionY = forceDirectionY * force * item.weight;

                if(distance < this.ball.radius) {
                    item.x -= directionX;
                    item.y -= directionY;
                    if (item.collision != this.ball.direction) {
                        item.collision = !item.collision;
                        
                    }
                   
                  
            
                } else {
                    if (item.x !== item.baseX) {
                        let dx = item.x - item.baseX;
                        item.x -= dx/5;
                        
                        
                    }
                    if (item.y !== item.baseY) {
                        let dy = item.y - item.baseY;
                        item.y -= dy/5;
                    }

                }

                item.index = i;


                item.drawParticles(i, this.ctx, this.colorOne, this.colorTwo, this.stageWidth, this.stageHeight)        
                
            }
        }
        this.updateBallPosition();
    }

   
   
}



window.onload = () => {
    new App();
 
}

