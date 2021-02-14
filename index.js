// ****************** VARIABLES *******************

let usuario = {
    nombre: 'Jose',
    cp: 07010,
    domicilio:'14 rue del percebe',
    telefono: 666666666
}
let pedido = []
let comanda

// MOSTRAR MENÚ POR PANTALLA
const mostrarMenu = () => {
    document.write(`COD - PLATO - PRECIO`)
    document.write(`--------------------`)
    CARTA.forEach( plato => {
        document.write(`${plato.cod} - ${plato.nombre} - ${plato.precio}€`)
    } )
}
mostrarMenu()
// EL USUARIO DEBE PODER HACER SU PEDIDO
//Creamos la funcion para pedir la comida a travez del codigo 
const pedirComida = cod => {
    // Cuando el cliente acabe su pedido 
    if (comanda === 'SALIR') return alert(`Gracias por su pedido,le sera entregado en 30 minutos en ${usuario.domicilio}`)
    // Creamos la funcion para vincular el código
    const productoEncontrado = CARTA.find(producto => producto.cod === cod)
    // Verificaremos que la informacion solicitada sea la correcta.
    if (!productoEncontrado) return alert('Producto no existe')
    // Usar metodo push ()para agregar nuevos elementos,
    pedido.push(productoEncontrado)
    return alert(`Has pedido: ${productoEncontrado.nombre}`)
}
/**  Usando el bucle Do & While , ejecutaremos el bloque de código al menos una vez, que verificara si la condición es verdadera y si ese es el caso se repetirá el bucle SIEMPRE que la condición sea VERDADERA.Introduciendo tantos productos como queramos*/
do {
    comanda = prompt(`Hola ${usuario.nombre}.\nHoy te veo especialmente atractivo. \nPor favor realiza tu pedido introduciendo el código de tus platos y bebidas favoritas que encontraras en el menu. (SALIR para terminar)`).toUpperCase()
    pedirComida(comanda)
}
//Añadimos condicion para finalizar el ciclo en este caso con el operador !==
while (comanda !== 'SALIR')

//MOSTRAR PRECIO DEL PEDIDO
const calcularPedido = () => {
    let total = 0 // variable local
    for (producto of pedido){
        total += producto.precio
    }
    return total
}
alert(`Su total es: ${calcularPedido()}€`)
