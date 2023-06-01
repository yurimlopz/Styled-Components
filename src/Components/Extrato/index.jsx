import React from "react";
import { Box, Botao } from "../UI";
import { extratoLista } from "../../info";
import Item from "../Item";



 export const Extrato = () =>{    
    return(
            <Box>
                {
                extratoLista.updates.map(({id, type, from, value, date})=>{
                    return(
                    <Item key={id} type={type} from={from} value={value} date={date}/>
                    )
                })
                }
                <Botao>Ver Mais</Botao>
            </Box>
    )
}

