
import { StatusBar } from "react-native"
import { Container } from "../../components/container/Style"

import { HomeCalendar } from "../../components/homeCalendar/HomeCalendar"
import { Header } from "../../components/header/Header"
import { useState } from "react"
import { FilterAppointament } from "./style"
import { AbsListAppointament } from "../../components/absListAppointment/absListAppointment"
import { CardPerfil } from "../../components/cardPerfil/CardPerfil"
import { ListComponent } from "../../components/list/List"
import { AppointmentCard } from "../../components/appointmentCard/AppointmentCard"


const Consultas = [
    { id: 1, nome: "joao", situacao: "pendente" },
    { id: 2, nome: "joao", situacao: "realizado" },
    { id: 3, nome: "joao", situacao: "cancelado" },
    { id: 4, nome: "joao", situacao: "realizado" },
    { id: 5, nome: "joao", situacao: "cancelado" },
]
export const Home = () => {
    const [statusLista, setStatusLista] = useState("pendente")
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
                    textButton={"realizadas"}
                    clickButton={statusLista === "realizado"}
                    onPress={() => setStatusLista("realizado")}
                />

                <AbsListAppointament
                    textButton={"canceladas"}
                    clickButton={statusLista === "cancelado"}
                    onPress={() => setStatusLista("cancelado")}
                />

            </FilterAppointament>
            {/* cards */}
            {/* lista (flatlist) */}

            <ListComponent

/>
<AppointmentCard/>




        </Container>

    )
}