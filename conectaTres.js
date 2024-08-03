
let turno = 0; // Number will encrease for value validation of being even or odd.
const tablero = [];


const btnPulsado = (e, pos) => { // function created for changes on buttons.
    turno ++;
    const btn = e.target;
    if (btn.disabled || ganador()) {
        return;
    }
    const color = turno % 2 ? 'salmon' : 'paleGreen';
    const fichas = turno % 2 ? 'X' : 'O';
    btn.style.backgroundColor = color;
    btn.innerHTML = fichas;
    btn.disabled = true;
    tablero[pos] = color;
    if(ganador()) { //following statement will be displayed when ganador.
        return document.querySelector("#texto").innerHTML = "El jugador " + fichas + " ha ganado la partida!"
    }
}



const ganador = () => { // conditions to be a winner.

    // Verify horizontal lines.
      if ( tablero[0] == tablero[1] &&
         tablero[0] == tablero[2] && tablero[0] ) {
        return true;
      } else if ( tablero[3] == tablero[4] &&
        tablero[3] == tablero[5] && tablero[3] ) {
            return true;
        } else if ( tablero[6] == tablero[7] &&
            tablero[6] == tablero[8] && tablero[6] ) {
                return true;
                // Verify vertical lines.
            } else if ( tablero[0] === tablero[3] &&
                tablero[0] === tablero[6] && tablero[0] ) {
                    return true;
                } else if ( tablero[1] === tablero[4] &&
                    tablero[1] === tablero[7] && tablero[1] ) {
                        return true;
                    } else if ( tablero[2] === tablero[5] &&
                        tablero[2] === tablero[8] && tablero[2] ) {
                            return true;
                            // Verify diagonal lines.
                        } else if ( tablero[0] === tablero[4] &&
                            tablero[0] === tablero[8] && tablero[0] ) {
                                return true;
                            } else if ( tablero[6] === tablero[4] &&
                                tablero[6] === tablero[2] && tablero[6] ) {
                                    return true;
                                }
                                return false;
}


        for (let i = 0; i < 9; i++) {
            const btn = document.getElementById(`p${i}`);
            if (btn) {
                btn.addEventListener('click', (e) => btnPulsado(e, i));
            }
        }
    
