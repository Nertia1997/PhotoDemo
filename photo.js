class Photo{
    width = 8;
    height = 10;
    constructor(width, height){
        this.width = width;
        this.height = height;
    }
}

function price(width, height){
    var price;
    if(width == 8 && height == 10){
        price = 4;
    }else if(width == 10 && height == 12){
        price = 6;
    }else{
        price = 10;
    }
}

function toString(){
    
}