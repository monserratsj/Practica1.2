// Catalogos de acciones y probabilidades 
const movimientosPosibles = { 
    "1": "Ataque Rápido", 
    "2": "Espía", 
    "3": "Señalar prisionero", 
    "4": "Liberar prisionero" 
} 
 
const probabilidades = { 
    "prisioneroDespierto" : 0.5, 
    "caballeroDurmiendo" : 0.5, 
    "arqueroDurmiendo" : 0.5, 
    "perroPresente" : 0.5 
} 
 
// Función para determinar en cada intento, que movimientos tiene disponibles según los estados de los personajes 
function accionesDisponibles(prisioneroDespierto, caballeroDurmiendo, arqueroDurmiendo, perroPresente) { 
    const acciones = []; 
 
    if (caballeroDurmiendo) { 
        acciones.push(movimientosPosibles["1"]); 
    } 
 
    if ((caballeroDurmiendo || arqueroDurmiendo) && (caballeroDurmiendo != arqueroDurmiendo)) { 
        acciones.push(movimientosPosibles["2"]); 
    } 
 
    if (prisioneroDespierto && arqueroDurmiendo) { 
        acciones.push(movimientosPosibles["3"]); 
    } 
 
    if (perroPresente) { 
        if (arqueroDurmiendo) { 
            acciones.push(movimientosPosibles["4"]); 
        } 
    } else { 
        if (prisioneroDespierto && caballeroDurmiendo && arqueroDurmiendo) { 
            acciones.push(movimientosPosibles["4"]); 
        } 
    } 
 
    return acciones; 
} 
 
// Valores por default de los estatus de los personajes 
// Prisionero 
// Caballero 
// Arquero 
// Perro 
let prisioneroDespierto = false; 
let caballeroDurmiendo = false; 
let arqueroDurmiendo = false; 
let perroPresente = false; 
 
// Valores de para llevar a cabo la rutina de intentos 
let movimiento = ""; 
const movimientos = []; 
let accionesDisponiblesParaAnnalyn = []; 
let auxMovimientoObj = {}; 
 
// Constante de máximo número de intentos y el número actual de intentos 
const MAXIMO = 15; 
let intentos = 0; 
 
do{ 
    intentos++; 
 
    // Calcula el estatus de los personajes en este intento 
    prisioneroDespierto = Math.random() < probabilidades['prisioneroDespierto']; 
    caballeroDurmiendo = Math.random() < probabilidades['caballeroDurmiendo']; 
    arqueroDurmiendo = Math.random() < probabilidades['arqueroDurmiendo']; 
    perroPresente = Math.random() < probabilidades['perroPresente']; 
     
    console.log(`Evento => Prisionero Despierto; Resultado => ${prisioneroDespierto}`); 
    console.log(`Evento => Caballero Durmiendo; Resultado => ${caballeroDurmiendo}`); 
    console.log(`Evento => Arquero Durmiendo; Resultado => ${arqueroDurmiendo}`); 
    console.log(`Evento => Perro Presente; Resultado => ${perroPresente}`); 
 
    // Según estos estatus, encuentra los movimientos posibles para Annalyn 
    accionesDisponiblesParaAnnalyn = accionesDisponibles(prisioneroDespierto, caballeroDurmiendo, arqueroDurmiendo, perroPresente); 
 
    // Elige un movimiento aleatorio y lo compara con los movimientos posibles para determinar si falló o no 
    movimiento = Math.floor(Math.random() * 4) + 1; 
    auxMovimientoObj = { 
        "movimiento" : movimientosPosibles[movimiento.toString()], 
        "estatus" : accionesDisponiblesParaAnnalyn.includes(movimientosPosibles[movimiento.toString()]) 
    }; 
 
    movimientos.push(auxMovimientoObj); 
    console.log(""); 
}while (!(movimientos[intentos-1]["movimiento"] === "Liberar prisionero" && movimientos[intentos-1]["estatus"]) && intentos < MAXIMO); 
 
if (intentos > MAXIMO) { 
    console.log("Se intentó el máximo número de veces, fallaste D: Consiguete otra amiga 💀"); 
} 
 
console.log("Movimientos realizados:") 
console.log(movimientos);