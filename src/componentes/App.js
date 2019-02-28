import React, { Component } from 'react';
import Header from './header';
import Formulario from './formulario';
import {calcularMarca, obtenerDiferenciaAnio, obtenerPlan} from "../helper";
import Resumen from './resumen';
import Resultado from './resultado';

class App extends Component {

    state={
        resultado:'',
        datos:{}
    };

  cotizarSeguro = (datos) =>{
    const {marca, plan, year} = datos;

    //Datos que nos indica el seguro:
      //La base de seguro es de 2000

      let resultado = 2000;


      // Cada año que pasa el seguro es 3% más barato.

      const diferencia = obtenerDiferenciaAnio(year);
      resultado -= ((diferencia * 3) * resultado) /100;


      // Diferencias de precios: Americano 15%, Asiatico 5% y Europeo 30%.

      resultado = calcularMarca(marca) * resultado;


      //Plan básico + 20% -- Completo + 50%

      let incrementoPlan = obtenerPlan(plan);
      resultado = parseFloat(incrementoPlan * resultado).toFixed(2);

      // Resumen de la información.
      const datosAuto = {
          marca: marca,
          plan: plan,
          year: year
      }

      // Resumen del precio final
      this.setState({
          resultado : resultado,
          datos: datosAuto
      })

  };


  render() {
      return (
          <div className="contenedor">
              <Header
                  titulo='Cotizador de Seguro de coche'/>

              <div className="contenedor-formulario">
                  <Formulario
                      cotizarSeguro={this.cotizarSeguro}/>
                  <Resumen
                      datos={this.state.datos}/>
                  <Resultado
                      resultado = {this.state.resultado}/>
              </div>
          </div>

      );
  }
}

export default App;
