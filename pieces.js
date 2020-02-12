class Piece{
    constructor(color,img){
        this.color = color; //w for white b for black
        this.img = imgTagGenerate(img);
    }
    
}

class King extends Piece{  
    
    constructor(color,img){
        super(color,img);
        if(this.color=="w"){
            this.current = {x:3,y:0}
        }
        else{
            this.current =  {x:3,y:7};
        }
        
    }
    startingPosition(){
        if(this.color=="w"){
            return {x:3,y:0};
        }
        else{
            return {x:3,y:7};
        }
    }
    
    setCurrent(coor){
        this.current = coor;
    }
    
}

function imgTagGenerate(imgName){
    return "<img src='chess_pieces/"+imgName+"'>"
}


