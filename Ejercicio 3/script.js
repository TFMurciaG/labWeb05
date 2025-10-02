const estanteria = {
    libros: [{
        nombre: 'El caballero oscuro',
        autor: 'Frank Miller',
        leido: false
    },
    {
        nombre: 'El mundo amarillo',
        autor: 'Albert Espinosa',
        leido: true
    },
    {
        nombre: 'El principito',
        autor: 'Antoine de Saint-Exupéry',
        leido: false
    },
    {
        nombre: 'El alquimista',
        autor: 'Paulo Coelho',
        leido: true
    },
    {
        nombre: 'Iliada',
        autor: 'Homero',
        leido: false
    },
    {
        nombre: 'La Odisea',
        autor: 'Homero',
        leido: true
    }],
    log() {
        const { libros } = this;
        let resultado = ''
        for (const libro of libros) {
            const prefijo = libro.leido ? 'Ya has' : 'No has';
            resultado = `${resultado} ${prefijo} leído ${libro.nombre} de ${libro.autor}.\n`;
        }
        console.log(resultado);
    },
    sugerencia() {
        const librosNoLeidos = this.libros.filter(libro => !libro.leido);
        const indiceRandom = Math.floor(Math.random() * librosNoLeidos.length);
        const elementoRandom = librosNoLeidos[indiceRandom];
        console.log(`Te sugerimos leer "${elementoRandom.nombre}" de ${elementoRandom.autor}.`);
    }
}