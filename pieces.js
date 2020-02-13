class Piece{
    constructor(color){
        this.color = color; //w for white b for black
        this.img = new Image();
    }
    
}

class King extends Piece{    
    constructor(color){
        super(color);
        
        if(this.color=="w"){
            this.img.src = imgTagGenerate('king_white.png');
            this.current = {x:3,y:7}
        }
        else{
            this.img.src = imgTagGenerate('king_black.png');
            this.current =  {x:3,y:0};
        }
        
    }

    setCurrent(coor){
        this.current = coor;
    }

    
    
}

class Queen extends Piece{    
    constructor(color){
        super(color);
        if(this.color=="w"){
            this.img.src = imgTagGenerate('queen_white.png');
            this.current = {x:4,y:7}
        }
        else{
            this.img.src = imgTagGenerate('queen_black.png');
            this.current =  {x:4,y:0};
        }
        
    }

    setCurrent(coor){
        this.current = coor;
    }
    
}

class Bishop extends Piece{
    constructor(color,current){
        super(color);
        this.current = current;
        if(this.color=="w"){
            this.img.src = imgTagGenerate('bishop_white.png');
        }
        else{
            this.img.src = imgTagGenerate('bishop_black.png');
        }
    }
    setCurrent(coor){
        this.current = coor;
    }
}

class Knight extends Piece{
    constructor(color,current){
        super(color);
        this.current = current;
        if(this.color=="w"){
            this.img.src = imgTagGenerate('knight_white.png');
        }
        else{
            this.img.src = imgTagGenerate('knight_black.png');
        }
    }
    setCurrent(coor){
        this.current = coor;
    }
}

class Rook extends Piece{
    constructor(color,current){
        super(color);
        this.current = current;
        if(this.color=="w"){
            this.img.src = imgTagGenerate('rook_white.png');
        }
        else{
            this.img.src = imgTagGenerate('rook_black.png');
        }
    }
    setCurrent(coor){
        this.current = coor;
    }
}

class Pawn extends Piece{
    constructor(color,current){
        super(color);
        this.current = current;
        if(this.color=="w"){
            this.img.src = imgTagGenerate('pawn_white.png');
        }
        else{
            this.img.src = imgTagGenerate('pawn_black.png');
        }
    }
    setCurrent(coor){
        this.current = coor;
    }

    move(){
        var arr = new Array();
        if(this.current.y == 1 || this.current == 6){
            arr.push({
                x:this.current.x+2,
                y:this.current.y
            });
        }
        arr.push({
            x:this.current.x+1,
            y:this.current.y
        })
        return arr;
    }
}



function imgTagGenerate(imgName){
    return "chess_pieces/"+imgName;
}


