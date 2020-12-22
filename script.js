for (var i = 0; i < 9; i++) {
    document.querySelector('#game').innerHTML+='<div class="block"></div>';
}

let turn = 0;

document.querySelector('#game').onclick = function(event) {
    //console.log(event);
    if (event.target.className == 'block') {
        if (turn % 2 == 0) {              //an even number 
            event.target.innerHTML = 'x';
        } else {
            event.target.innerHTML = '0';
        }
        turn++;
        checkWinner()
                
    }
}

function checkWinner() {
    let allBloks = document.querySelectorAll('.block');
    console.log(allBloks);

    // for X

    if (allBloks[0].innerHTML == 'x' && allBloks[1].innerHTML == 'x' && allBloks[2].innerHTML == 'x') {
        alert ('Congratulations! You won!');
        //location.reload();
    } else if (allBloks[3].innerHTML == 'x' && allBloks[4].innerHTML == 'x' && allBloks[5].innerHTML == 'x') {
        alert ('Congratulations! You won!');
       // location.reload();
    }else if (allBloks[6].innerHTML == 'x' && allBloks[7].innerHTML == 'x' && allBloks[8].innerHTML == 'x') {
        alert ('Congratulations! You won!');
        //location.reload();
    } else if (allBloks[0].innerHTML == 'x' && allBloks[3].innerHTML == 'x' && allBloks[6].innerHTML == 'x') {
        alert ('Congratulations! You won!');
       // location.reload();
    } else if (allBloks[1].innerHTML == 'x' && allBloks[4].innerHTML == 'x' && allBloks[7].innerHTML == 'x') {
        alert ('Congratulations! You won!');
       // location.reload();
    } else if (allBloks[2].innerHTML == 'x' && allBloks[5].innerHTML == 'x' && allBloks[8].innerHTML == 'x') {
        alert ('Congratulations! You won!');
        //location.reload();
    } else if (allBloks[0].innerHTML == 'x' && allBloks[4].innerHTML == 'x' && allBloks[8].innerHTML == 'x') {
        alert ('Congratulations! You won!');
       // location.reload();
    } else if (allBloks[2].innerHTML == 'x' && allBloks[4].innerHTML == 'x' && allBloks[6].innerHTML == 'x') {
        alert ('Congratulations! You won!');
       // location.reload();
    } 

    // for 0
    if (allBloks[0].innerHTML == '0' && allBloks[1].innerHTML == '0' && allBloks[2].innerHTML == '0') {
        alert ('Congratulations! You won!');
      //  location.reload();
    } else if (allBloks[3].innerHTML == '0' && allBloks[4].innerHTML == '0' && allBloks[5].innerHTML == '0') {
        alert ('Congratulations! You won!');
        //location.reload();
    }else if (allBloks[6].innerHTML == '0' && allBloks[7].innerHTML == '0' && allBloks[8].innerHTML == '0') {
        alert ('Congratulations! You won!');
       // location.reload();
    } else if (allBloks[0].innerHTML == '0' && allBloks[3].innerHTML == '0' && allBloks[6].innerHTML == '0') {
        alert ('Congratulations! You won!');
       // location.reload();
    } else if (allBloks[1].innerHTML == '0' && allBloks[4].innerHTML == '0' && allBloks[7].innerHTML == '0') {
        alert ('Congratulations! You won!');
       // location.reload();
    } else if (allBloks[2].innerHTML == '0' && allBloks[5].innerHTML == '0' && allBloks[8].innerHTML == '0') {
        alert ('Congratulations! You won!');
       // location.reload();
    } else if (allBloks[0].innerHTML == '0' && allBloks[4].innerHTML == '0' && allBloks[8].innerHTML == '0') {
        alert ('Congratulations! You won!');
      //  location.reload();
    } else if (allBloks[2].innerHTML == '0' && allBloks[4].innerHTML == '0' && allBloks[6].innerHTML == '0') {
        alert ('Congratulations! You won!');
      //  location.reload();
    } 
}

document.querySelector('button').onclick = function restart() {
    location.reload();
}