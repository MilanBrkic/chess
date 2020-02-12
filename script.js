
var matrix = new Array()
const chessboard = document.getElementById('chessboard');



addTable();


function addTable(){
    for(let j = 0;j<8;j++){
        matrix[j] = new Array();
        let row = chessboard.insertRow(j);
        for(var i =0;i<8;i++){
            
            matrix[j][i] = row.insertCell(i);
            
        }
        
    }
    
}


matrix[0][0].innerHTML = "<img src='chess_pieces/king_black.png'>";

