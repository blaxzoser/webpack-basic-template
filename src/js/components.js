import '../css/components.css'

export const hello = (nombre) => {
    console.log('Creando etiqueta');

    const h1 = document.createElement('h1');
    h1.innerHTML = `Hola ,${nombre}, como estas`;

    document.body.append(h1);

};