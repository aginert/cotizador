import React, {Component} from 'react';
import {TransitionGroup} from 'react-transition-group';

class Resultado extends Component {
    render() {
        const resultado = this.props.resultado;
        const mensaje = (!resultado) ? 'Elige Marca, Año y Tipo de Seguro' : 'El total es: €';

        return (
            <div className="gran-total">
                {mensaje}
                <TransitionGroup component="span" className="resultado">
                      <span>{resultado}</span>
                </TransitionGroup>
            </div>
        )
    }
}

export default Resultado;