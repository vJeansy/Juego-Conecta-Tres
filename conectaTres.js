let turno = 0; // Number will encrease for value validation of being even or odd.
const tablero = Array(9).fill(null);
const user = 1;
const bot = 2;
// function created for changes on buttons.
const btnPulsado = (e, pos) => {
    const btn = e.target;
    if (btn.disabled || ganador()) {
        return;
    } 
    turno ++;
    const fichas = turno % 2 ? 'X' : 'O';
    btn.innerHTML = fichas;
    btn.disabled = true;
    tablero[pos] = fichas;
    if(ganador()) { //following statement will be displayed when ganador.
        document.getElementById('texto').innerHTML = `El jugador ${fichas} ha ganado la partida!`
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
    btn.disabled = true;
    tablero[pos] = 'O';
    turno++;
    if (ganador()) {
        document.getElementById('texto').innerHTML = "El jugador O ha ganado la partida!";
    }
}
// conditions to be a winner.
const ganador = () => {
// Verify horizontal lines.
if (tablero[0] == tablero[1] && tablero[0] == tablero[2] && tablero[0]) {
    return true;
    } else if (tablero[3] == tablero[4] && tablero[3] == tablero[5] && tablero[3]) {
    return true;
    } else if (tablero[6] == tablero[7] && tablero[6] == tablero[8] && tablero[6]) {
    return true;
// Verify vertical lines.
    } else if (tablero[0] === tablero[3] && tablero[0] === tablero[6] && tablero[0]) {
    return true;
    } else if (tablero[1] === tablero[4] && tablero[1] === tablero[7] && tablero[1]) {
    return true;
    } else if (tablero[2] === tablero[5] && tablero[2] === tablero[8] && tablero[2]) {
    return true;
// Verify diagonal lines.
    } else if (tablero[0] === tablero[4] && tablero[0] === tablero[8] && tablero[0]) {
    return true;
    } else if (tablero[6] === tablero[4] && tablero[6] === tablero[2] && tablero[6]) {
    return true;
    }
    return false;
}
// display on html by clicking.
for (let i = 0; i < 9; i++) {
    const btn = document.getElementById(`p${i}`);
    if (btn) {
        btn.addEventListener('click', (e) => btnPulsado(e, i));
    }
}