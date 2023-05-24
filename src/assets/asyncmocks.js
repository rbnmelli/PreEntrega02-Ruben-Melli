
const games = [
    {
        id: '1',
        nombre: 'Halo Infinite',
        detalle: 'Disfruta de una nueva historia de HALO en el universo que apareció por primera vez en el juego de Xbox, dramatizando el conflicto épico entre la humanidad y una amenaza alienígena, el Covenant.',
        precio: 8999,
        plataforma: 'xbox',
        genero: 'accion',
        img: '../public/images/Halo-Infinite.webp'
    },
    {
        id: '2',
        nombre: 'Elden Ring',
        detalle: 'Elden Ring es uno de esos escasos juegos que lideran la industria ejemplificando con su diseño tanto de mundo abierto como de mazmorras trabajadas, un contenido incesante que podría llenar varios juegos y DLCs y una duración de aproximadamente 100 horas con mucha intensidad en cada una de ellas.',
        precio: 9500,
        plataforma: 'xbox',
        genero: 'rpg',
        img: '../public/images/Elden-Ring.png'
    },
    {
        id: '3',
        nombre: 'Horizon: Forbidden West',
        detalle: 'Creí que Horizon: Forbidden West sería una secuela digna que ampliaría el esquema de su primera parte, pero este juego hace algunas cosas muy especiales: se acabaron las animaciones genéricas para las abundantes conversaciones clásicas del RPG y los mundos abiertos.',
        precio: 12000,
        plataforma: 'ps',
        genero: 'accion',
        img: '../public/images/Horizon-Forbidden-West.webp'
    },
    {
        id: '4',
        nombre: 'Gran Turismo 7',
        detalle: 'No hay duda de que Gran Turismo 7 es el juego más completo de la serie. Tiene todo aquello que adolece Sport en cuanto a opciones para el juego individual, con un completo modo que te lleva a recorrer la historia de las marcas y desatar la pasión por sus coches. Hay carreras, mecánicas de RPG, misiones, licencias y homenajes a la franquicia propias de su 25º aniversario.',
        precio: 9900,
        plataforma: 'ps',
        genero: 'conduccion',
        img: '../public/images/gran_turismo_7.webp'
    },
    {
        id: '5',
        nombre: 'Super Mario Odyssey',
        detalle: 'Un gran salto plataformero que recorre más de 30 años de historia, mirando al pasado, pero también lanzando una gorra de innovación hacia el futuro. Super Mario Odyssey manifiesta la intención de Nintendo de evolucionar, poniendo los pies en el presente pero sin olvidar cuál es su estilo. El videojuego es un espectáculo de variedad, talento y diversión.',
        precio: 7900,
        plataforma: 'nintendo',
        genero: 'aventura',
        img: '../public/images/Super-Mario-Odyssey.webp'
    },
    {
        id: '6',
        nombre: 'The Legend of Zelda: Tears of the Kingdom',
        detalle: 'La secuela de Zelda: Breath of the Wild nos lleva de vuelta a Hyrule en un momento de máxima tensión por culpa del renacimiento del malvado Ganondorf, que ha desatado su furia sobre los habitantes de este mundo de fantasía.',
        precio: 12999,
        plataforma: 'nintendo',
        genero: 'aventura',
        img: '../public/images/the_legend_of_zelda.webp'
    },
    {
        id: '7',
        nombre: 'Red Dead Redemption 2',
        detalle: 'Red Dead Redemption 2 desembarca por fin en PC con todas las balas del cargador de su revólver preparadas para hacer fuego pero, además, con un apartado gráfico muy mejorado. Elementos como alguna misión extra y el ansiado modo foto ayudan a redondear su oferta jugable, pero lo realmente formidable es la posibilidad de obtener una experiencia visual mejor incluso que la de consola.',
        precio: 5990,
        plataforma: 'pc',
        genero: 'rpg',
        img: '../public/images/red_dead_2.webp'
    },
    {
        id: '8',
        nombre: 'The Witcher 3: Wild Hunt',
        detalle: 'The Witcher III no es perfecto, pero es uno de los RPGs más fastuosos y recomendables de los últimos tiempos. El ansiado salto al mundo abierto ha sentado muy bien a la franquicia y los problemas tienen que ver con un control impreciso, un combate algo plano o problemas técnicos ingentes.',
        precio: 4900,
        plataforma: 'pc',
        genero: 'rpg',
        img: '../public/./images/the_witcher_3.webp'
    },
];

export const getGames = () =>{
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(games)
        }, 2000);
    })
}


export const getUnGame = (id) =>{
    return new Promise((resolve) => {
        setTimeout(() => {
            const game = games.find(prod => prod.id === id);
            resolve(game);
        }, 2000);
    })
}

export const getPlataforma = (plataforma) =>{
    return new Promise((resolve) => {
        setTimeout(() => {
            const gamePlataforma =  games.filter(game => game.plataforma === plataforma);
            resolve(gamePlataforma);
        }, 2000);
    })
}