//Objective is to fill in all empty tiles in a sudoku with the correct values

let board = 
[["5","3",".",".","7",".",".",".","."],
 ["6",".",".","1","9","5",".",".","."],
 [".","9","8",".",".",".",".","6","."],
 ["8",".",".",".","6",".",".",".","3"],
 ["4",".",".","8",".","3",".",".","1"],
 ["7",".",".",".","2",".",".",".","6"],
 [".","6",".",".",".",".","2","8","."],
 [".",".",".","4","1","9",".",".","5"],
 [".",".",".",".","8",".",".","7","9"]]


//O(9^(mn)) solution where m and n are sizes of the rows and columns respectively.

function solver(board) {
    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            //Find first empty tile
            if (board[i][j] == '.') {
                let char = '1'
                //Try all 9 numbers 
                while (char <= 9) {
                    //If one number is valid, then set the board to it
                    if (isValid(i, j, char)) {
                        board[i][j] = char
                        
                        //Recursively call the function again with the new character
                        //If it works with the board, return true, else reset it back to '.'
                        if (solver(board)) {
                            return true
                        } else {
                            board[i][j] = '.'
                        }
                    }
                    //imcrement the number
                    char = (parseInt(char) + 1).toString()
                }
                //Return false if all 9 numbers don't work
                return false
            }
        }
    }
    
    //Return true if you reach end of iteration (completed every tile)
    return true
}

function isValid(row, col, char) {
    for (let i = 0; i < 9; i++) {
        if (board[row][i] == char) {
            return false
        }
    }
    
    for (let i = 0; i < 9; i++) {
        if (board[i][col] == char) {
            return false
        }
    }
    
    let x = Math.floor(row / 3) * 3
    let y = Math.floor(col / 3) * 3
    
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            if (board[x + i][y + j] == char) {
                return false
            }
        }
    }
    
    return true
}
solver(board)