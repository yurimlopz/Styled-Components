import React from "react"

import alimentacao from '../assets/images/alimentacao.svg'
import outros from '../assets/images/outros.svg'
import saude from '../assets/images/saude.svg'
import transporte from '../assets/images/transporte.svg'
import utilidades from '../assets/images/utilidades.svg'
import { Icone } from "./UI"



export default (type) =>{
   

    const Images ={
        Restaurante : <Icone src={alimentacao} alt="Restaurante"/>,
        default : <Icone src={outros} alt="Outros"/>,
        Saude : <Icone src={saude} alt="Saude"/>,
        Transporte : <Icone src={transporte} alt="Transporte"/>,
        Utilidades : <Icone src={utilidades} alt="Utilidades"/>

        
    }

    return Images[type]  || Images.default
}