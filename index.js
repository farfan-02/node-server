const readlineSync = require('readline-sync');

let listaTareas = [];

const añadirTarea = ()=>{
    const id = readlineSync.question('Digite el id de la tarea: ');
    const descripcion = readlineSync.question('Digite la descripcion de la tarea: ');
    const tarea = {id:id, descripcion:descripcion, completado: false};
    listaTareas.push(tarea);
}

const eliminarTarea = ()=>{
    console.log(listaTareas);
    const id = readlineSync.question('Digite el id de la tarea que quiere eliminar: ');
    const auxiliarTareas = listaTareas.filter((tarea) => tarea.id !== id);
    listaTareas = auxiliarTareas;
}

const completarTarea = ()=>{
    console.log(listaTareas);
    const id = readlineSync.question('Digite el id de la tarea que quiere completar: ');
    const auxiliarTareas = listaTareas.map((tarea)=>{
        if(tarea.id == id){
            return{...tarea, completado: !tarea.completado };
        }else{
            return tarea;
        }
    });
    listaTareas = auxiliarTareas;
}


const menu = ()=>{
    let salir = false;
    while(salir == false){
    console.log("1. Añadir tarea");
    console.log("2. Eliminar tarea");
    console.log("3. Completar tarea");
    console.log("4. imprimir tareas");
    console.log("5. salir");
    const elegirOpcion = readlineSync.question('Digite el numero de la opcion que quiere ejecutar: ');

    switch(elegirOpcion){
        case "1":
            añadirTarea();
            break;
        case "2":
            eliminarTarea();
            break;
        case "3":
            completarTarea();
            break;
        case "4":
            console.log(listaTareas);
            break;
        case "5":
            salir = true;
            break;
        default:
            console.log("Opcion invalida");
            break;
    }}
}

menu();