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
        return moveBishop(this.current, this.color);
    }
}

function moveBishop(current, color){
    let matrix = tableStatus();
        let arr1 = new Array();
        let arr2 = new Array();
        let arr3 = new Array();
        let arr4 = new Array();
        
        
        let firstStop = false;
        let secondStop = false;
        let thirdStop = false;
        let fourthStop = false;
        



        for(let i = 1;i<8;i++){

            if(current.x-i>=0 && current.y+i<=7){
                if(!firstStop){
                    let something = moveBishopHelp(current.y+i,current.x-i,color, matrix);
                    
                    if(something!=null){
                        if(something[1]==undefined){
                            arr1.push(something[0]);
                        }
                        else{
                            arr1.push(something[0]);
                            firstStop=true;
                        }
                    }
                    else{
                        firstStop = true;
                    }
                }
            }

            if(current.y-i>=0 && current.x+i<=7){
                if(!secondStop){
                    let something = moveBishopHelp(current.y-i,current.x+i,color, matrix);
                    
                    if(something!=null){
                        if(something[1]==undefined){
                            arr1.push(something[0]);
                        }
                        else{
                            arr1.push(something[0]);
                            secondStop=true;
                        }
                    }
                    else{
                        secondStop = true;
                    }
                }
            }

            if(current.x+i<=7 && current.y+i<=7){
                if(!thirdStop){
                    let something = moveBishopHelp(current.y+i,current.x+i,color, matrix);
                    
                    if(something!=null){
                        if(something[1]==undefined){
                            arr1.push(something[0]);
                        }
                        else{
                            arr1.push(something[0]);
                            thirdStop=true;
                        }
                    }
                    else{
                        thirdStop = true;
                    }
                }
            }

            if(current.x-i>=0 && current.y-i>=0){
                if(!fourthStop){
                    let something = moveBishopHelp(current.y-i,current.x-i,color, matrix);
                    
                    if(something!=null){
                        if(something[1]==undefined){
                            arr1.push(something[0]);
                        }
                        else{
                            arr1.push(something[0]);
                            fourthStop=true;
                        }
                    }
                    else{
                        fourthStop = true;
                    }
                }
            }


            // if(current.x-i>=0 && current.y+i<=7){
            //     if(matrix[current.y+i][current.x-i].hasChildNodes()){
            //         if(matrix[current.y+i][current.x-i].children[0].alt[0]==color){
            //             firstStop = true;
            //         }
            //         else{
            //             if(!firstStop){
            //                 arr1.push({
            //                     x:current.x-i,
            //                     y:current.y+i
            //                 });
            //                 firstStop = true;
            //             }
            //         }
            //     }
        
            //     if(!firstStop){
            //         arr1.push({
            //             x:current.x-i,
            //             y:current.y+i
            //         });
            //     }
                
            // }

            // if(current.y-i>=0 && current.x+i<=7){
            //     if(matrix[current.y-i][current.x+i].hasChildNodes()){
            //         if(matrix[current.y-i][current.x+i].children[0].alt[0]==color){
            //             secondStop = true;
            //         }
            //         else{
            //             if(!secondStop){
            //                 arr2.push({
            //                     x:current.x+i,
            //                     y:current.y-i
            //                 });
            //                 secondStop = true;
            //             }
            //         }
            //     }

            //     if(!secondStop){
            //         arr2.push({
            //             x:current.x+i,
            //             y:current.y-i
            //         });
            //     }
            // }
            
            


            // if(current.x+i<=7 && current.y+i<=7){
            //     if(matrix[current.y+i][current.x+i].hasChildNodes()){
            //         if(matrix[current.y+i][current.x+i].children[0].alt[0]==color){
            //             thirdStop = true;
            //         }
            //         else{
            //             if(!thirdStop){
            //                 arr3.push({
            //                     x:current.x+i,
            //                     y:current.y+i
            //                 });
                            
            //                 thirdStop = true;
            //             }
            //         }
            //     }
    
            //     if(!thirdStop){
            //         arr3.push({
            //             x:current.x+i,
            //             y:current.y+i
            //         });
            //     }
            // }
            
            

            // if(current.x-i>=0 && current.y-i>=0){
            //     if(matrix[current.y-i][current.x-i].hasChildNodes()){
            //         if(matrix[current.y-i][current.x-i].children[0].alt[0]==color){
            //             fourthStop = true;
            //         }
            //         else{
            //             if(!fourthStop){        
            //                 arr3.push({
            //                     x:current.x-i,
            //                     y:current.y-i
            //                 });
                            
            //                 fourthStop = true;
            //             }
            //         }
            //     }

            //     if(!fourthStop){
            //         arr4.push({
            //             x:current.x-i,
            //             y:current.y-i
            //         });
            //     }
                
            // }

            
        
        }

        let arr = new Array();

        arr = arr.concat(arr1,arr2,arr3,arr4);
        return arr;
}   

function moveBishopHelp(y,x,color,matrix){
    if(matrix[y][x].hasChildNodes()){
        if(matrix[y][x].children[0].alt[0]==color){
            return null;
        }
        else{
            return [{
                x:x,
                y:y
            },
            {
                isnull: null
            }];
            }
    }

    return [{
        x:x,
        y:y
    }];
    
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
        let matrix = tableStatus();
        let arr = new Array();


        for(var i=this.current.x+1;i<8;i++){
            if(matrix[this.current.y][i].hasChildNodes()){
                if(matrix[this.current.y][i].children[0].alt[0]==this.color){
                    
                    break;        
                }
                else{
                    arr.push({
                        x:i,
                        y:this.current.y
                    });
                    break;
                }
            
            }

            arr.push({
                x:i,
                y:this.current.y
            });
        }

        for(i=this.current.x-1;i>-1;i--){
            if(matrix[this.current.y][i].hasChildNodes()){
                if(matrix[this.current.y][i].children[0].alt[0]==this.color){
                   
                    break;        
                }
                else{
                    arr.push({
                        x:i,
                        y:this.current.y
                    });
                    break;
                }
            
            }
            arr.push({
                x:i,
                y:this.current.y
            });
        }
        
        for(var i=this.current.y+1;i<8;i++){
            if(matrix[i][this.current.x].hasChildNodes()){
                if(matrix[i][this.current.x].children[0].alt[0]==this.color){
                    break;        
                }
                else{
                    arr.push({
                        x:this.current.x,
                        y:i
                    });
                    break;
                }
            
            }
            
            
            arr.push({
                x:this.current.x,
                y:i
            });
        }

        for(i=this.current.y-1;i>-1;i--){
            if(matrix[i][this.current.x].hasChildNodes()){
                if(matrix[i][this.current.x].children[0].alt[0]==this.color){
                    break;        
                }
                else{
                    arr.push({
                        x:this.current.x,
                        y:i
                    });
                    break;
                }
            
            }

            arr.push({
                x:this.current.x,
                y:i
            });
        } 

        

        return arr;
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
        let matrix = tableStatus();
        //basic pawn movement
        
        arr.push({
            x:this.current.x,
            y:this.current.y+korak + (korak<0 ? 1:-1)
        })
        
        
        
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