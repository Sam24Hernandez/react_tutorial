// Convertir una función en una clase
import React from 'react';

function FormattedDate(props) {
    return <h2>It is {props.date.toLocaleTimeString()}.</h2>;    
}

// 1. Crear una clase ES6 con el mismo nombre que herede de React.Component.
class Clock extends React.Component {

    // 2. Agregar un constructor de clase que asigne el this.state inicial
    constructor(props) {
        super(props);
        this.state = { date: new Date() };
    }

    // # Métodos de ciclo de vida
    /**
    *   Este método se ejecuta después que la salida del componente ha sido 
    *   renderizada en el DOM. "Temporizador"
    */
    componentDidMount() {
        this.timerId = setInterval(
            () => this.tick(),
            1000
        );
    }

    // Eliminaremos el temporizador en el método de ciclo de vida
    componentWillUnmount() {
        clearInterval(this.timerId);
    }

    // Método tick() que el componente Clock ejecutará cada segundo.
    tick() {
        // this.setState() se utilizará para programar actualizaciones al estado local del componente
        this.setState({
            date: new Date()
        });
    }

    /**
        # Las actualizaciones del estado pueden ser asincronas
        // Incorrecto
        this.setState({
            counter: this.state.counter + this.props.increment,
        });
    
        // Correcto
        this.setState((state, props) => ({
            counter: state.counter + props.increment
        }));
    
        ó

        this.setState(function(state, props) {
            return {
                counter: state.counter + props.increment
            };
        });    
     */

    // 2. Agregar un único método vacío llamado render()
    /**
    *   El método render se invocará cada vez que ocurre una actualización; 
    *   pero, siempre y cuando rendericemos <Clock /> en el mismo nodo del DOM, se usará solo una única instancia 
    *   de la clase Clock. Esto nos permite utilizar características adicionales como el estado local y los 
    *   métodos de ciclo de vida.
    */
    render() {
        // Mover el cuerpo de la función al método render()
        return (
            <div>      
                <h1>Hello, world!</h1> 
                {/**Agregando estado local a una clase */}  
                {/** 1. Reemplazar this.props.date con this.state.date */}
                <FormattedDate date={this.state.date} />
            </div>
        );
    }
}

export default Clock;
