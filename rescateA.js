//Aqui va el codigo del primer problema
function accionesDisponibles(prisioneroDespierto, caballeroDurmiendo, arqueroDurmiendo, perroPresente) {
    const acciones = [];

    if (caballeroDurmiendo && perroPresente) {
        acciones.push('Ataque rápido');
    }

    if (!caballeroDurmiendo || !arqueroDurmiendo) {
        acciones.push('Espía');
    }

    if (prisioneroDespierto && arqueroDurmiendo) {
        acciones.push('Señalar al prisionero');
    }

    if (perroPresente) {
        if (prisioneroDespierto && caballeroDurmiendo && arqueroDurmiendo) {
            acciones.push('Prisionero libre');
        }
    } else {
        if (prisioneroDespierto && !caballeroDurmiendo && !arqueroDurmiendo) {
            acciones.push('Prisionero libre');
        }
    }

    return acciones;
}

// Ejemplo de uso
const accionesDisponiblesParaAnnalyn = accionesDisponibles(true, false, true, true);
console.log("Acciones disponibles para Annalyn:", accionesDisponiblesParaAnnalyn);
