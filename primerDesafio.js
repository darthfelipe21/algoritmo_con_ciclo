let iniciar = prompt ("Para iniciar ingrese cualquier dato menos ESC, dado el caso que quiera salir"),
cocatenar = "";

while(iniciar != "ESC"){
    for(let i = 0 ; i <= 3 ; i++){
        let texto = prompt("Ingresa una palabra");
        cocatenar += texto + " ";
    }
    alert (cocatenar);
    break;
}
