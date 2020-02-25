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
        let arr = new Array();

        let offsets = new Array(-1,0,1);

        for(let i of offsets){
            for(let j of offsets){
                if(i==0 && j==0){
                    continue;
                }
                if(this.current.y+j<0 || this.current.y+j>7 || this.current.x+i<0 || this.current.x+i>7){
                    continue;
                }

                arr.push({
                    x:this.current.x+i,
                    y:this.current.y+j
                });

            }
                
        }

        return arr;

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
        
        let korak = -2;
        if(this.color==='b'){
            korak = -korak;
        }
        
        
        var arr = new Array();
        
        if((this.color =='b' &&  this.current.y==7) || (this.color =='w' && this.current.y==0)){
            return null;
        }
        
        //basic pawn movement

        arr.push({
            x:this.current.x,
            y:this.current.y+korak + (korak<0 ? 1:-1)
        })
        
        let matrix = tableStatus();
        
        //diagonal movement for eating

        if(matrix[arr[0].y][arr[0].x+1]!=undefined && matrix[arr[0].y][arr[0].x+1].hasChildNodes()){
            arr.push({
                x:arr[0].x+1,
                y:arr[0].y
            })
        }

        if(matrix[arr[0].y][arr[0].x-1]!=undefined && matrix[arr[0].y][arr[0].x-1].hasChildNodes()){
            arr.push({
                x:arr[0].x-1,
                y:arr[0].y
            })
        }
        
        if(arr.length==3){
            let pom = arr[0];
            arr[0] = arr[2];
            arr[2] = pom;
        }
        else if(arr.length==2){
            let pom = arr[0];
            arr[0] = arr[1];
            arr[1] = pom;
        }
        
        //pawn movment for starting position

        if( (this.current.y == 1 && this.color=='b')  || (this.current.y == 6 && this.color=='w')){
            
            arr.push({
                x:this.current.x,
                y:this.current.y+korak
            });
        }
        
        console.log(arr);
        return arr;
    }
}



function imgTagGenerate(imgName){
    return "chess_pieces/"+imgName;
}



function tableStatus(){
    let matrix = new Array();
    let board = document.getElementById('chessboard');
    let table = board.children[0].children
    for(let i=0;i<table.length;i++){
        matrix[i] = Array();
        for(let j = 0;j<table[i].children.length;j++){
            matrix[i][j] = table[i].children[j];
        }
    }   
    return matrix;
}

export {Piece, King, Queen, Pawn, Rook, Bishop, Knight};