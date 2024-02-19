
import { StatusBar } from "react-native"
import { Container } from "../../components/container/Style"

import { HomeCalendar } from "../../components/homeCalendar/HomeCalendar"
import { Header } from "../../components/header/Header"
import { useState } from "react"
import { FilterAppointament } from "./style"
import { AbsListAppointament } from "../../components/absListAppointment/absListAppointment"


const Consultas = [
    {id: 1, nome: "joao", situacao: "pendente"},
    {id: 2, nome: "joao", situacao: "realizado"},
    {id: 3, nome: "joao", situacao: "cancelado"},
    {id: 4, nome: "joao", situacao: "realizado"},
    {id: 5, nome: "joao", situacao: "cancelado"},
]
export const Home = () => {
    const[statusLista,setStatusLista] = useState("pendente")
    return (
        <Container>

            <StatusBar />

            {/* Header */}
            <Header />

            {/* Calendar */}
            <HomeCalendar />

            {/* Filtros (button) */}

           

        
            <FilterAppointament>
                
                <AbsListAppointament
                textButton={"Agendadas"}
                clickButton={statusLista === "pendente"}
                onPress={() => setStatusLista("pendente")}
                />
          
                <AbsListAppointament 
                 textButton={"realizado"}
                 clickButton={statusLista === "realizado"}
                 onPress={() => setStatusLista("realizado")}
                />
           
                <AbsListAppointament 
                 textButton={"cancelado"}
                 clickButton={statusLista === "cancelado"}
                 onPress={() => setStatusLista("cancelado")}
                />
                
            </FilterAppointament> 


        </Container>

    )
}