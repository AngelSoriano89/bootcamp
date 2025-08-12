const materiasHTML = document.querySelector('.materias');

const materias = [
    { nombre: 'Fisica 1', nota: 3 },
    { nombre: 'Matematicas 1', nota: 4 },
    { nombre: 'Programacion 1', nota: 5 },
    { nombre: 'Quimica 1', nota: 2 },
    { nombre: 'Historia 1', nota: 4 },
    { nombre: 'Literatura 1', nota: 3 },
    { nombre: 'Biologia 1', nota: 5 },
];

const obtenerMateria = (id) => {
    return new Promise((resolve, reject) => {
        materia = materias[id];
        if (materia == undefined) reject('Materia no encontrada');
        else setTimeout(()=> {resolve(materia)},Math.random()*650);
    })
}

const devolverMaterias = async () => {
    let materia = []; 
    for (let i = 0; i < materias.length; i++) {
        materia[i] = await obtenerMateria(i);
        let newHTMLCode = `
        <div class="materia">
            <div class="nombre">${materia[i].nombre}</div>
            <div class="nota">${materia[i].nota}</div>
        </div>`;
        materiasHTML.innerHTML += newHTMLCode;
    }
}

devolverMaterias();

