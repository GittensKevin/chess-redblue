// Creamos un componente que luego lo utilizaremos en App.jsx

import './box.css'; // importamos los estilos que usaremos para este componente

function Box({ value = '', bgc = '' }) { // pasamos las propiedades que nos interesan
    return (
        // pasamos la propiedad bgc para poder personalizar el estilo de cada celda
        <button style={ {backgroundColor: `${bgc}`} } className="box"> 
            <h4>{value}</h4>
        </button>
    );
}

export default Box; //  lo exportamos