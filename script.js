const chessboard = document.getElementById('chessboard');
var matrix = new Array();
var pieces = new Array();


king_white = new King("w", "king_white.png");
king_black = new King("b", "king_black.png");

king_white.setCurrent({x:2,y:4});
console.log(king_black.current,king_white.current);


addTable();


matrix[king_white.startingPosition().y][king_white.startingPosition().x].innerHTML = king_white.img;

function addTable(){
    for(let j = 0;j<8;j++){
        matrix[j] = new Array();
        let row = chessboard.insertRow(j);
        for(var i =0;i<8;i++){
            
            matrix[j][i] = row.insertCell(i);
            
        }
        
    }
    
}



