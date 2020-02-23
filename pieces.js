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
            this.img.alt = "white";
            this.current = {x:3,y:7}
        }
        else{
            this.img.src = imgTagGenerate('king_black.png');
            this.img.alt = "black";
            this.current =  {x:3,y:0};
        }
        
    }

    setCurrent(coor){
        this.current = coor;
    }

    move(){
        return "move";
    }
    
}

class Queen extends Piece{    
    constructor(color){
        super(color);
        if(this.color=="w"){
            this.img.src = imgTagGenerate('queen_white.png');
            this.img.alt = "white";
            this.current = {x:4,y:7}
        }
        else{
            this.img.src = imgTagGenerate('queen_black.png');
            this.img.alt = "black";
            this.current =  {x:4,y:0};
        }
        
    }

    setCurrent(coor){
        this.current = coor;
    }

    move(){
        return "move";
    }
    
}

class Bishop extends Piece{
    constructor(color,current){
        super(color);
        this.current = current;
        if(this.color=="w"){
            this.img.src = imgTagGenerate('bishop_white.png');
            this.img.alt = "white";

        }
        else{
            this.img.src = imgTagGenerate('bishop_black.png');
            this.img.alt = "black";
        }
    }
    setCurrent(coor){
        this.current = coor;
    }

    move(){
        return "move";
    }
}

class Knight extends Piece{
    constructor(color,current){
        super(color);
        this.current = current;
        if(this.color=="w"){
            this.img.src = imgTagGenerate('knight_white.png');
            this.img.alt = "white";
        }
        else{
            this.img.src = imgTagGenerate('knight_black.png');
            this.img.alt = "black";
        }
    }
    setCurrent(coor){
        this.current = coor;
    }
    move(){
        return "move";
    }
}

class Rook extends Piece{
    constructor(color,current){
        super(color);
        this.current = current;
        if(this.color=="w"){
            this.img.src = imgTagGenerate('rook_white.png');
            this.img.alt = "white";
        }
        else{
            this.img.src = imgTagGenerate('rook_black.png');
            this.img.alt = "black";
        }
    }
    setCurrent(coor){
        this.current = coor;
    }

    move(){
        return "move";
    }
}



class Pawn extends Piece{
    constructor(color,current){
        super(color);
        this.current = current;
        if(this.color=="w"){
            this.img.src = imgTagGenerate('pawn_white.png');
            this.img.alt = "white";
        }
        else{
            this.img.src = imgTagGenerate('pawn_black.png');
            this.img.alt = "black";
        }
    }
    setCurrent(coor){
        this.current = coor;
    }

    move(){
        let korak = -2;;
        if(this.color==='b'){
            korak = -korak;
        }
        
        var arr = new Array();
        
        if(this.current.y+korak>7 || this.current.y+korak<0){
            return null;
        }

        arr.push({
            x:this.current.x,
            y:this.current.y+korak + (korak<0 ? 1:-1)
        })

        if( (this.current.y == 1 && this.color=='b')  || (this.current.y == 6 && this.color=='w')){
            arr.push({
                x:this.current.x,
                y:this.current.y+korak
            });
        }

        return arr;
    }
}



function imgTagGenerate(imgName){
    return "chess_pieces/"+imgName;
}


