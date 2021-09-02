const FRICTION = 0.98;
const MOVE_SPEED = 0.2;

export class Particle {
    constructor(pos) {

        this.savedX = pos.x;
        this.savedY = pos.y;
        this.x = pos.x;
        this.y = pos.y;
        this.vx = 0;
        this.vy = 0;
        this.radius = 1;
        this.closeParticles = []
        this.baseX = this.x;
        this.baseY = this.y;

        // this.weight = (Math.random() * 10) + 5;
        // this.weight = (Math.random());
        this.weight = (Math.random() * 10) + 15;

        this.collision = false;
        
        this.connected = false;

        
    }

    drawParticles(i, ctx, colorOne, colorTwo, stageWidth, stageHeight) {
        // console.log(stageWidth, stageHeight)
        // ctx.fillStyle = "#e72176"

        if (this.collision == false) {
            ctx.fillStyle = colorOne
        } else {
            ctx.fillStyle = colorTwo
        } 

        ctx.beginPath();
        // console.log(stageWidth, stageHeight)
        let scaler = 600
        // ctx.arc((this.x*(stageWidth/scaler)-100), (this.y*(stageHeight/scaler)-180), this.radius, 0, 2 * Math.PI);
        ctx.arc(this.x+(stageWidth/2.5), this.y-230, this.radius, 0, 2 * Math.PI);

        ctx.closePath();
        ctx.fill();



    }

    //for Reference
    // drawImage() {
    //     this.ctx.drawImage(this.image, (this.stageWidth - this.image.width)/2, (this.stageHeight - this.image.height)/2, this.image.width, this.image.height);
    //     this.show()

    // }

    drawOuterParticles(i, ctx) {
 
        // ctx.fillStyle = "#e72176"
        if (this.collision == false) {
       
            ctx.fillStyle = "green"
        } else {
            ctx.fillStyle = "red"
        } 

        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
        
        ctx.closePath();
        ctx.fill();

        // ctx.fillStyle = "purple";
        // var text = i
        // ctx.font = '30px serif';
        // ctx.fillText(text, this.x, this.y);

    }

    drawOuterParticleRadius(ctx, other) {
        // ctx.fillStyle = "green"
        // ctx.beginPath();
        // ctx.arc(this.x-100, this.y-200, this.radius+50, 0, 2 * Math.PI);
        // ctx.closePath();
        // ctx.fill();


        ctx.fillStyle = "blue"
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius+5, 0, 2 * Math.PI);
        ctx.closePath();
        ctx.fill();

        // ctx.fillStyle = "yellow"
        // ctx.beginPath();
        // ctx.arc(other.x-100, other.y-200, this.radius+5, 0, 2 * Math.PI);
        // ctx.closePath();
        // ctx.fill();

    }


    drawCenteredOuterParticles(ctx) {
        ctx.fillStyle = "red"
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius+5, 0, 2 * Math.PI);
        ctx.closePath();
        ctx.fill();

    }

    

}
