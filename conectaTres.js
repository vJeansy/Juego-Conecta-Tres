let turno = 0; // Number will encrease for value validation of being even or odd.
const tablero = Array(9).fill(null);
let userWins = 1;
let botWins = 1;
// function created for changes on buttons.
const btnPulsado = (e, pos) => {
    const btn = e.target;
    if (tablero[pos] || ganador()) {
        return;
    }
    turno ++;
    const fichas = turno % 2 ? 'X' : 'O';
    btn.innerHTML = fichas;
    tablero[pos] = fichas;
    if(ganador()) { //following statement will be displayed when ganador.
        document.getElementById('texto').innerHTML = `El jugador ${fichas} ha ganado la partida!`
        document.getElementById('user-points').innerHTML = userWins++;
        return;
    }
    if (turno % 2 === 1 && turno !=9) { // Delay on bot turn.
        setTimeout(turnoBot, 500);
    }
    if (turno == 9 && !ganador()) {
        document.getElementById('texto').innerHTML = "No hubo ganadores!"
    }
}
// bot function for autoplay.
const turnoBot = () => {
    let pos;
    do {
        pos = Math.floor(Math.random() * 9);
    } while (tablero[pos]); // Making sure position is not taken.
    const btn = document.getElementById(`p${pos}`);
    btn.innerHTML = 'O';
    if(tablero[pos]) {
        return;
    }
    tablero[pos] = 'O';
    turno++;
    if (ganador()) {
        document.getElementById('texto').innerHTML = "El jugador O ha ganado la partida!";
        document.getElementById('bot-points').innerHTML = botWins++;
    }
}
// Re-start the game!
const refresh = () => {
    for (let i = 0; i < 9; i++) {
        tablero[i] = null;
        const btn = document.getElementById(`p${i}`);
        if(btn) {
            btn.innerHTML = '';
            //btn.disabled = false;
        }
    }
    turno = 0;
    document.getElementById('texto').innerHTML = 'CONECTA TRES! X / O';
}
// conditions to be a winner.
const ganador = (win) => {
//Verify horizontal lines.
if (tablero[0] == tablero[1] && tablero[0] == tablero[2] && tablero[0]) {
    return true;
    } else if (tablero[3] == tablero[4] && tablero[3] == tablero[5] && tablero[3]) {
    return true;
    } else if (tablero[6] == tablero[7] && tablero[6] == tablero[8] && tablero[6]) {
    return true;
 //Verify vertical lines.
    } else if (tablero[0] === tablero[3] && tablero[0] === tablero[6] && tablero[0]) {
    return true;
    } else if (tablero[1] === tablero[4] && tablero[1] === tablero[7] && tablero[1]) {
    return true;
    } else if (tablero[2] === tablero[5] && tablero[2] === tablero[8] && tablero[2]) {
    return true;
 //Verify diagonal lines.
    } else if (tablero[0] === tablero[4] && tablero[0] === tablero[8] && tablero[0]) {
    return true;
    } else if (tablero[6] === tablero[4] && tablero[6] === tablero[2] && tablero[6]) {
    return true;
    }
    return false;

    // const lines = [
    //     [0, 1, 2],
    //     [3, 4, 5],
    //     [6, 7, 8],
    //     [0, 3, 6],
    //     [1, 4, 7],
    //     [2, 5, 8],
    //     [0, 4, 8],
    //     [2, 4, 6],
    // ];
    // for(let i = 0; i < lines.length; i++) {
    //     const [a, b ,c] = lines[i];
    //     if(win[a] && win[a] === win[b] && win[a] === win[c]) {
    //         return true;
    //     }
    // }
    // return false;
}
// display on html by clicking.
for (let i = 0; i < 9; i++) {
    const btn = document.getElementById(`p${i}`);
    if (btn) {
        btn.addEventListener('click', (e) => btnPulsado(e, i));
    }
}

// eventListener for refresh buttons.
document.getElementById('reload').addEventListener('click', refresh);