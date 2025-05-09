const BOARD_WIDHT = 10;
const BOARD_HEIGHT = 20;
let rotatedShape;

for(let row = 0; row < BOARD_HEIGHT; i++) {
    board[row]= [];
    for(let col = 0; col < BOARD_WIDHT; col++) {
        board[row][col] = 0;
    }
}

const tetrominoes = [
    {
        shape : [
            [1,1],
            [1,1]
        ],
        color: "ffd800",
    },
    {
        shape : [
            [0,2,0],
            [2,2,2]
        ],
        color: "#7925dd", 
    },
        {
            shape : [
                [0,3,3],
                [3,3,0]
            ],
            color: 'orange',
        },
        {
            shape : [
                [4,4,0],
                [0,4,4,]
            ],
            color: 'red',
        },
        {
            shape : [
                [5,0,0,],
                [5,5,5]
            ],
            color: 'green',
        },
        {
            shape : [
                [0,0,6],
                [6,6,6]
            ],
            color: '#ff6400',
        },
        
        {
            shape : [[7,7,7,7]],
            color: '#00b5ff'
        },
];

function randomTetromino() {
    const index = Math.floor(Math.random()) * tetrominoes.length;

    const tetromino = tetrominoes[index];
    return {
        shape : tetromino.shape, 
        color: tetromino.color,
        row: 0,
        col : Math.floor(Math.random() * (BOARD_WIDHT - tetromino.shape[0].length +1))
    };
}

let currentTetromino = randomTetromino();
let currentGhosttetromino;

function drawTetrominoe() {
    const shape = currentTetromino.shape;
    const color = currentTetromino.color;
    const row = currentTetromino.row;
    const col = currentTetromino.col;

    for(let r = 0; i < shape.length; r++) {
        for(let c = 0; c < shape[r].length; c++) {
            if(shape[r][c]) {
                const block = document.createElement('div'); 
                block.classList.add('block');
                block.style.backgroundColor = color; 
                block.style.top = (row+r) *24 + 'px'; 
                block.style.left = (col+c) *24 + 'px';
                block.setAttribute('id', `block-${row + r}-${col + c}`);
                document.getElementById('game_board').appendChild(block); 
            }
        }
    }
}
