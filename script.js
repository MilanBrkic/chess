const chessboard = document.getElementById('chessboard');
var matrix = new Array();
var pieces = new Array();


var king_white;
var king_black;

var queen_white;
var queen_black;

var bishop_white;
var bishop_black;

var knight_white;
var knight_black;

var rook_white;
var rook_black;

var pawn_black;
var pawn_white;

addTable();
setPieces();    



function addTable(){
    for(let j = 0;j<8;j++){
        matrix[j] = new Array();
        let row = chessboard.insertRow(j);
        for(var i =0;i<8;i++){
            
            matrix[j][i] = row.insertCell(i);
            
        }
        
    }
    
}

function initializePieces(){
    king_white = new King("w");
    king_black = new King("b");

    queen_white = new Queen("w");
    queen_black = new Queen("b");

    bishop_black = new Array(new Bishop("b",{x:2,y:0}), new Bishop("b",{x:5,y:0}));
    bishop_white = new Array(new Bishop("w",{x:2,y:7}), new Bishop("w",{x:5,y:7}));

    knight_black = new Array(new Knight("b",{x:1,y:0}), new Knight("b",{x:6,y:0}));
    knight_white = new Array(new Knight("w",{x:1,y:7}), new Knight("w",{x:6,y:7}));

    rook_black = new Array(new Rook("b",{x:0,y:0}), new Rook("b",{x:7,y:0}));
    rook_white = new Array(new Rook("w",{x:0,y:7}), new Rook("w",{x:7,y:7}));

    pawn_black = new Array();
    pawn_white = new Array();

    for(let i=0;i<8;i++){
        pawn_black.push(new Pawn("b", {x:i,y:1}));
        pawn_white.push(new Pawn("w", {x:i,y:6}));
    }

}

function setPieces(){
    initializePieces();

    arr = new Array(king_black,king_white,queen_black,queen_white);

    for(let i = 0;i<2;i++){
        arr.push(bishop_black[i],bishop_white[i], knight_black[i],knight_white[i], rook_black[i], rook_white[i]);
    }

    for(i =0;i<8;i++){
        arr.push(pawn_black[i],pawn_white[i]);
    }

    for(i = 0;i<arr.length;i++){
        let element = arr[i];
        matrix[element.current.y][element.current.x].innerHTML = element.img;
    }
}


