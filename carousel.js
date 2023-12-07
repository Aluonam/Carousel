
//Crear constante que contenga array de objetos

let posicionArray 
const personas = [
    {
        nombre: "Macarena",
        apellidos: "Fern\u00E1ndez Herrera",
        profesion: "Psiquiatra",
        avatar: "profilePhotoMFH.jpg",
        descripcion: "Los psiquiatras son médicos que atienden y tratan a personas con problemas de salud mental. Tratan a los pacientes de diferentes modos, por ejemplo, a través de las drogas, apoyo psicologico y diferentes “terapias de conversacion”"
    },

    {
        nombre: "Kwan",
        apellidos: "Homsai Su",
        profesion: "Administrativa",
        avatar: "profilePhotoKHS.jpg",
        descripcion: "Un administrativo es una persona empleada en la administracion de una empresa o de otra entidad. Su tarea consiste en ordenar, organizar y disponer distintos asuntos que se encuentran bajo su responsabilidad."
    },

    {
        nombre: "Manuel",
        apellidos: "Jim\u00E9nez Lopez",
        profesion: "Monitor de ocio",
        avatar: "profilePhotoMJL.jpg",
        descripcion: "Llevar a cabo las actividades. Fomentar el trabajo en equipo, la cooperacion y el consenso. Potenciar las habilidades humanas y creativas del equipo. Actuar en la resolución de conflictos."
    },

    {
        nombre: "Miriam",
        apellidos: "Soto Laverde",
        profesion: "Terapeuta Ocupacional",
        avatar: "profilePhotoMSL.jpg",
        descripcion: "La terapia ocupacional es el uso terapéutico de las actividades para incrementar la independencia funcional, aumentar el desarrollo y prevenir la incapacidad; incluye la adaptacion de tareas y entorno para alcanzar la máxima independencia y para aumentar la calidad de vida."
    },

    {
        nombre: "Ram\u00F3n",
        apellidos: "S\u00E1nchez Florin",
        profesion: "Psic\u00F3logo",
        avatar: "profilePhotoRSF.jpg",
        descripcion: "Los psicologos estudian la forma de pensar y de actuar de las personas. Se interesan por todos los aspectos de la conducta y los pensamientos y sentimientos que nos hacen actuar como lo hacemos."
    }
 ]

console.log(personas);
const longitudPersonas = personas.length - 1; //con el -1 tiene en cuenta desde la posicion 0 del array


const cargaInformacion = (posicion) => {
    document.getElementById("fotoPerfilID").src=`./imagen/${personas[posicion].avatar}`;
    document.getElementById("tituloId").innerHTML =  personas[posicion].nombre +" "+ personas[posicion].apellidos; 
    document.getElementById("subtituloId").innerHTML = personas[posicion].profesion;
    document.getElementById("texto").innerHTML = personas[posicion].descripcion;
}

const generarNumeroAleatorio = () => {
    const posicionAleatoria = Math.floor(Math.random() * longitudPersonas);

    if (posicionArray === posicionAleatoria) {
        generarNumeroAleatorio(); //función autoinvocada
    } else {
        posicionArray = posicionAleatoria;
    }
}

const cargaPerfil = () => {
    generarNumeroAleatorio();
    cargaInformacion(posicionArray);
    
    console.log(posicionArray)
}

const siguienteUsuario = () => {
    posicionArray = posicionArray + 1;
    // console.log(posicionArray);

    if (posicionArray > longitudPersonas) {
        posicionArray = 0;
    }
    cargaInformacion(posicionArray);
}

const usuarioAnterior = () => {
    posicionArray = posicionArray - 1;
    
    if (posicionArray < 0) {
        posicionArray = longitudPersonas;
    }
    cargaInformacion(posicionArray);
}

cargaPerfil();


