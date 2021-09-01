const grid = document.querySelector('.grid')
const width = 28;
const scoreDisplay = document.querySelector('#score')

// store all the divs inside of an array
let squares = [];

// total poc-dots eaten
let totalPacDotsScore = 0;

// the grid will be created through numbers

// 0 -> pac-dots
// 1 -> wall
// 2 -> ghost-lair
// 3 -> power-pellet 
// 4 -> empty
const layout = [
    1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
    1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,
    1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1,
    1,3,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,3,1,
    1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1,
    1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
    1,0,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,0,1,
    1,0,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,0,1,
    1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,
    1,1,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,1,1,
    1,1,1,1,1,1,0,1,1,4,4,4,4,4,4,4,4,4,4,1,1,0,1,1,1,1,1,1,
    1,1,1,1,1,1,0,1,1,4,1,1,1,2,2,1,1,1,4,1,1,0,1,1,1,1,1,1,
    1,1,1,1,1,1,0,1,1,4,1,2,2,2,2,2,2,1,4,1,1,0,1,1,1,1,1,1,
    4,4,4,4,4,4,0,0,0,4,1,2,2,2,2,2,2,1,4,0,0,0,4,4,4,4,4,4,
    1,1,1,1,1,1,0,1,1,4,1,2,2,2,2,2,2,1,4,1,1,0,1,1,1,1,1,1,
    1,1,1,1,1,1,0,1,1,4,1,1,1,1,1,1,1,1,4,1,1,0,1,1,1,1,1,1,
    1,1,1,1,1,1,0,1,1,4,1,1,1,1,1,1,1,1,4,1,1,0,1,1,1,1,1,1,
    1,0,0,0,0,0,0,0,0,4,4,4,4,4,4,4,4,4,4,0,0,0,0,0,0,0,0,1,
    1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1,
    1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1,
    1,3,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,3,1,
    1,1,1,0,1,1,0,1,1,0,1,1,1,1,1,1,1,1,0,1,1,0,1,1,0,1,1,1,
    1,1,1,0,1,1,0,1,1,0,1,1,1,1,1,1,1,1,0,1,1,0,1,1,0,1,1,1,
    1,0,0,0,0,0,0,1,1,0,0,0,0,1,1,0,0,0,0,1,1,0,0,0,0,0,0,1,
    1,0,1,1,1,1,1,1,1,1,1,1,0,1,1,0,1,1,1,1,1,1,1,1,1,1,0,1,
    1,0,1,1,1,1,1,1,1,1,1,1,0,1,1,0,1,1,1,1,1,1,1,1,1,1,0,1,
    1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
    1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1
]

function createBoardGame() {
    for(let i = 0; i < layout.length; i++) {
        // create a total of 728 divs, which will be the squares
        const individualSquare = document.createElement('div');

        // append every new div into the grid
        grid.appendChild(individualSquare);

        // push each square(div) into the array
        squares.push(individualSquare);

        // style each number based on the given property
        if(layout[i] === 0) {
            squares[i].classList.add('pac-dot')
        } else if(layout[i] === 1) {
            squares[i].classList.add('wall')
        } else if(layout[i] === 2) {
            squares[i].classList.add('ghost-lair')
        } else if(layout[i] === 3) {
            squares[i].classList.add('power-pellet')
        }
    }
}

createBoardGame();

// give a starting number to pac-man 
let pacmanCurrentIndex = 490;

//place pacman inside the grid now
squares[pacmanCurrentIndex].classList.add('pacman')

// pacman will be controlled throught the up, down, left, right arrows
// create a function called Control(), then use a switch statement to control
// the movement of pacman 

function control(e) {
    squares[pacmanCurrentIndex].classList.remove('pacman')
    switch(e.keyCode) {
        case 40:
            // 40 = down key

            // if 490 + 28 < 784, then we move a line down
            // also make sure that pacman does not cross the wall going down
            // make sure that when going down pacman does not hit ghost-lair
            if( 
                (!squares[pacmanCurrentIndex + width].classList.contains('wall')) && 
                (!squares[pacmanCurrentIndex + width].classList.contains('ghost-lair')) &&
                (pacmanCurrentIndex + width < (width*width))
            ) {
                pacmanCurrentIndex += width;
            }

            break;

        case 38:
            // 38 = up key

            // if 490 - 28 > 0, then we move a line back
            // also make sure that pacman does not cross the wall going up
            // make sure that when going up pacman does not hit ghost-lair
            if(
                (!squares[pacmanCurrentIndex - width].classList.contains('wall')) &&
                (!squares[pacmanCurrentIndex - width].classList.contains('ghost-lair')) && 
                (pacmanCurrentIndex - width > 0)
            ) {
                pacmanCurrentIndex -= width;
            }
            break;

        case 37:
            // 37 = left key

            // if 490 % 28 is not equal to 0, then we move left
            // make sure that when going left pacman does not hit the wall
            // make sure that when going left pacman does not hit ghost-lair
            if(
                (!squares[pacmanCurrentIndex - 1].classList.contains('wall')) && 
                (!squares[pacmanCurrentIndex - 1].classList.contains('wall')) &&
                (pacmanCurrentIndex % width != 0)
            ) {
                pacmanCurrentIndex -= 1;

                // if pacman goes through index 364, then make sure he appears on the right side on index 391
                if(pacmanCurrentIndex === 364) {
                    pacmanCurrentIndex = 391;
                }
            }
            break;

        case 39:
            // 39 = right key

            // if 490 % 28 < 28-1, then we move right
            // make sure that when going right pacman does not hit the wall
            if(
                (!squares[pacmanCurrentIndex + 1].classList.contains('wall')) && 
                (!squares[pacmanCurrentIndex + 1].classList.contains('wall')) && 
                (pacmanCurrentIndex % width < width - 1)
            ) {
                pacmanCurrentIndex += 1;

                // if pacman goes through index 391, then make sure he appears on the right side on index 364
                if(pacmanCurrentIndex === 391) {
                    pacmanCurrentIndex = 364;
                }
            }
            break;
    }

    // add pacman back into the grid with its upadated location
    squares[pacmanCurrentIndex].classList.add('pacman')

    //call the pacDotsEaten funcion to update score and pacDots in the grid
    pacDotsEaten();
    powerPelletEaten();
    checkForWin();
    checkForGameOver();
}

// every time we click a key, the control() function will be called
// so based on the key pressed, then the control() will react
document.addEventListener('keyup', control);

function pacDotsEaten() {
    // if pacman it's in the same index as the pacman then execute the code
    if(squares[pacmanCurrentIndex].classList.contains('pac-dot')) {
        // remove pac-dot
        squares[pacmanCurrentIndex].classList.remove('pac-dot');

        // add number to total
        totalPacDotsScore += 1;
        scoreDisplay.innerHTML = totalPacDotsScore;
    }
}

function powerPelletEaten() {
    // check if pacman encounters a power pellet
    if(squares[pacmanCurrentIndex].classList.contains('power-pellet')) {
        // if pacman encounters a power-pellet, then delete it and add to score
        squares[pacmanCurrentIndex].classList.remove('power-pellet');

        // power-pellete gives you 10 points
        totalPacDotsScore += 10;

        // scare the ghosts every time we eat a power pellet
        ghostsArray.forEach(x => x.isScared = true);

        // use setTimeout to unscare ghosts after 10 seconds
        setTimeout(unScaredGhosts, 10000);
    }
}

function unScaredGhosts() {
    ghostsArray.forEach(x => x.isScared = false)
}

// class that will create difrerent ghosts based on the paraments given to the constructor
class Ghost {
    constructor(className, startIndex, speed) {
        this.className = className;
        this.startIndex = startIndex;
        this.speed = speed;

        // variables inside the constructor
        this.currentIndex = startIndex;
        this.isScared = false;
        this.timerId = NaN;
    }
};

// create an array with 4 instances from the class ghost
let ghostsArray = [
    new Ghost('Blinky', 348, 250),
    new Ghost('Pinky', 376, 400),
    new Ghost('Inky', 351, 300),
    new Ghost('Clyde', 379, 500),
]

// access the array that has stored 4 instances of Ghost class
// using a forEach loop, use a variable to access the className, and startIndex of each instance
// then access the squares array with the index of each ghost, then add their className into the class list for styling
ghostsArray.forEach(x => squares[x.startIndex].classList.add(x.className)) // x can be any variable you wish

// use a forEach loop to pass each ghost instance into the moveGhost function
ghostsArray.forEach(x => moveGhosts(x));

// create function that will move the ghost in random patterns
function moveGhosts(x) {
    // save into an array the 4 directions that any object inside of the grid can move into
    const directions = [+1, -1, -width, +width];

    // based on the length of the direction array, generate any number between 0 and the lenght
    // ghost will randomly move around the grid based on this directions
    let ghostDirection = directions[Math.floor(Math.random() * directions.length)];

    // create a setInterval timer for the ghost to move
    // use an arrow function for the if statements
    x.timerId = setInterval(() => {
        // if the next square does not contain a wall or a ghost
        if(
            !squares[x.currentIndex + ghostDirection].classList.contains('wall') && 
            !squares[x.currentIndex + ghostDirection].classList.contains('ghost')
        ) {
            // remove any ghosts
            squares[x.currentIndex].classList.remove(x.className);
            squares[x.currentIndex].classList.remove('ghost', 'scared-ghost');
    
            // add direction to the current index
            x.currentIndex += ghostDirection;
    
            // add each ghost class
            squares[x.currentIndex].classList.add(x.className)

            // add the ghost class back into the grid
            squares[x.currentIndex].classList.add('ghost')
        } else {
            ghostDirection = directions[Math.floor(Math.random() * directions.length)];
        }

        // if the ghost is currently scared 
        if(x.isScared) {
            squares[x.currentIndex].classList.add('scared-ghost');
        }

        // if the ghost is scared and pacman is on it
        if(x.isScared && squares[x.currentIndex].classList.contains('pacman')) {
            // remove each ghost, ghost class, and scared-ghost class from css
            squares[x.currentIndex].classList.remove(x.className, 'ghost', 'scared-ghost');

            // make each ghost current index the start index
            x.currentIndex = x.startIndex;

            // increase score
            totalPacDotsScore += 100;
            // update the score

            // add each ghost back and also the ghost class
            squares[x.currentIndex].classList.add(x.className, 'ghost')
        }

        checkForGameOver();

    }, x.speed);
}

function checkForGameOver() {
    // if pacman contains ghost and if ghost is not scared then game over
    if(
        squares[pacmanCurrentIndex].classList.contains('ghost') &&
        !squares[pacmanCurrentIndex].classList.contains('scared-ghost')
    ) {
        // clear the time interval of each ghost using a for Each loop
        ghostsArray.forEach(x => clearInterval(x.timerId));

        //remove the event listener
        document.removeEventListener('keyup', control);

        // display "you lost" into the screen
        scoreDisplay.innerHTML = 'You lost!';
    }
}

function checkForWin() {
    // if you score 274 or more, then you win the game
    if(totalPacDotsScore === 274) {
        // clear the time interval of each ghost using a for Each loop
        ghostsArray.forEach(x => clearInterval(x.timerId));

        //remove the event listener
        document.removeEventListener('keyup', control);

        // display "you lost" into the screen
        scoreDisplay.innerHTML = 'You Won!';
    }
}

