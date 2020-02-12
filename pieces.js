class Piece{
    constructor(color){
        this.color = color; //w for white b for black
    }
    
}

class King extends Piece{    
    constructor(color){
        super(color);
        
        if(this.color=="w"){
            this.img = imgTagGenerate('king_white.png');
            this.current = {x:3,y:7}
        }
        else{
            this.img = imgTagGenerate('king_black.png');
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
            this.img = imgTagGenerate('queen_white.png');
            this.current = {x:4,y:7}
        }
        else{
            this.img = imgTagGenerate('queen_black.png');
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
            this.img = imgTagGenerate('bishop_white.png');
        }
        else{
            this.img = imgTagGenerate('bishop_black.png');
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
            this.img = imgTagGenerate('knight_white.png');
        }
        else{
            this.img = imgTagGenerate('knight_black.png');
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
            this.img = imgTagGenerate('rook_white.png');
        }
        else{
            this.img = imgTagGenerate('rook_black.png');
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
            this.img = imgTagGenerate('pawn_white.png');
        }
        else{
            this.img = imgTagGenerate('pawn_black.png');
        }
    }
    setCurrent(coor){
        this.current = coor;
    }
}

function imgTagGenerate(imgName){
    return "<img src='chess_pieces/"+imgName+"'>"
}


