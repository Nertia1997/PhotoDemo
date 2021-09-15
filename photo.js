class Photo{
    constructor(width = 8, height = 10){
        this.width = width;
        this.height = height;
    }

    price(){
        let finalPrice;
        if(this.width == 8 && this.height == 10){
            finalPrice = 4;
        }else if(this.width == 10 && this.height == 12){
            finalPrice = 6;
        }else{
            finalPrice = 10;
        }

        return finalPrice;
    }

    toString(){
        return `This is a ${this.width} by ${this.height} photo and it costs ${this.price()}.`
    }
}

class MattedPhoto extends Photo{
    constructor(width, height, color){
        super(width, height);
        this.color = color;
    }

    price(){
        this.finalPrice = super.price() + 10;
        return this.finalPrice;
    }

    toString(){
        return `This is a ${this.width} by ${this.height} matted ${this.color} photo and it costs ${this.price()}.`
    }
}

class FramedPhoto extends Photo{
    constructor(width, height, frameMaterial, frameStyle){
        super(width, height);
        this.frameMaterial = frameMaterial;
        this.frameStyle = frameStyle;
    }

    price(){
        this.finalPrice = super.price() + 25;
        return this.finalPrice;
    }

    toString(){
        return `This is a ${this.width} by ${this.height} ${this.frameMaterial} framed photo. The style is ${this.frameStyle} and it costs ${this.price()}.`
    }
}

let framedPhoto1 = new FramedPhoto(8, 10, "Silver", "Modern");
console.log(framedPhoto1.toString());

let mattedPhoto1 = new MattedPhoto(10, 12, "Red");
console.log(mattedPhoto1.toString());

let framedPhoto1 = new FramedPhoto(15, 15, "Wood", "Old Fashion");
console.log(framedPhoto1.toString());