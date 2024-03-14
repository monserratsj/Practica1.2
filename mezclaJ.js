// Función para determinar cuánto tiempo lleva mezclar un jugo
function timeToMixJuice(juice) {
    switch (juice) {
        case 'Pure Strawberry Joy':
            return 0.5;
        case 'Energizer':
        case 'Green Garden':
            return 1.5;
        case 'Tropical Island':
            return 3;
        case 'All or Nothing':
            return 5;
        default:
            return 2.5; // Tiempo por defecto para otras bebidas
    }
}

// Función para reponer el suministro de rodajas de lima
function limesToCut(slicesNeeded, limesSupply) {
    let limesToCut = 0;
    let slicesCut = 0;
    
    for (let i = 0; i < limesSupply.length; i++) {
        const limeSize = limesSupply[i];
        let slicesFromLime = 0;
        
        switch (limeSize) {
            case 'pequeña':
                slicesFromLime = 6;
                break;
            case 'mediana':
                slicesFromLime = 8;
                break;
            case 'grande':
                slicesFromLime = 10;
                break;
        }
        
        limesToCut++;
        slicesCut += slicesFromLime;
        
        if (slicesCut >= slicesNeeded) {
            break;
        }
    }
    
    return limesToCut;
}

// Función para determinar los pedidos restantes al final del turno
function remainingOrders(minutesLeft, orders) {
    let remaining = [];
    let timeLeft = minutesLeft;
    
    for (let i = 0; i < orders.length; i++) {
        const juice = orders[i];
        const timeToMix = timeToMixJuice(juice);
        
        if (timeToMix <= timeLeft) {
            timeLeft -= timeToMix;
        } else {
            remaining = orders.slice(i);
            break;
        }
    }
    
    return remaining;
}

// Ejemplos de uso de las funciones
console.log(timeToMixJuice('Pure Strawberry Joy')); // Salida: 0.5
console.log(limesToCut(20, ['pequeña', 'mediana', 'grande', 'mediana', 'pequeña'])); // Salida: 3
console.log(remainingOrders(6, ['Pure Strawberry Joy', 'Energizer', 'Tropical Island', 'All or Nothing'])); 
// Salida: ["Tropical Island", "All or Nothing"]

console.log("Caso 3");
console.log(timeToMixJuice('Green Garden')); 
console.log(limesToCut(15, ['pequeña','mediana','grande','pequeña'] ));
console.log(remainingOrders(5,['Energizer','Tropical Island', 'Pure Strawberry Joy',]));
