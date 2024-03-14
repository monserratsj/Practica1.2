const caballero = Math.random(); //<=0.5 dormido
//>0.5 despierto
const arquero = Math.random();
const prisionero = Math.random();
const perrito = Math.random();
const libre = 0;
//<=0.5 no está
//>0.5 está

if (caballero <= 0.5){ //0=dormido, 1=despierto
console.log("Caballero dormido");
}
else {
    console.log("Caballero despierto");
}

if (arquero <= 0.5){
    console.log("Arquero dormido");
    }
    else {
        console.log("Arquero despierto");
    }

    if (prisionero <= 0.5){
        console.log("Prisionero dormido");
        }
        else {
            console.log("Prisionero despierto");
        }

        if (perrito <= 0.5){
            console.log("Sin perrito");
            }
            else {
                console.log("Con perrito");
            }


 if (caballero <=0.5)  {
    console.log("\n Atque rápido")
 }  

 if(caballero > 0.5 || arquero > 0.5) {
    console.log("\nEspía")
 }

 if (prisionero > 0.5 && arquero <= 0.5){
    console.log("\nSeñalar al prisionero")
 }



if (perrito > 0.5 && arquero <= 0.5){
    console.log("\n¡Prisionero libre!")
     libre = 1 //
}
else{
    console.log("El prisionero no es libre");
}

if(prisionero > 0.5 && libre !== 1){
  if (caballero <= 0.5 && arquero <= 0.5){
    console.log("\n¡Prisionero libre!");
  }
}

else{
    console.log("\nEl prisionero no puede ser rescatado")
}