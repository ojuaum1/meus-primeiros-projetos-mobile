
import { Informations, ProfileImagePront } from "../../components/appointmentModal/Style"
import { Container } from "../../components/container/Style"
import { Age, Email, Title } from "../../components/title/Style"
import { InputPront, InputProntBig, InputProntDia, TextInput } from "../../components/input/Style"
import { Button, ButtonSecondary, ButtonSecondaryTitle, ButtonTitle } from "../../components/button/Style"
import { ScrollView } from "react-native"
import { ContainerScroll } from "../../components/scrollView/ScrollView"


export const ProntInsert = () => {
    return (
        <Container>

            <ProfileImagePront source={{ uri: "https://github.com/ojuaum1.png" }} />

            <Title> João Oliveira </Title>

            <Informations>
                <Age>19 anos</Age>
                <Email>joao.oliveiira.pda@gmail.com</Email>
            </Informations>

            <ContainerScroll>
                <TextInput>
                    Descrição da consulta
                </TextInput>

                <InputProntBig
                    placeholder='Descrição'
                />

                <TextInput>
                    Diagnóstico do paciente
                </TextInput>

                <InputProntDia
                    placeholder="Diagnóstico"
                />


                <TextInput>
                    Prescrição médica
                </TextInput>
                <InputProntBig
                    placeholder="Prescrição médica"
                />

                <Button>
                    <ButtonTitle>Salvar</ButtonTitle>
                </Button>

                <Button>
                    <ButtonTitle>Editar</ButtonTitle>
                </Button>

                <ButtonSecondary onPress={() => setShowModalAppointment(false)}>
                    <ButtonSecondaryTitle>
                        Cancelar
                    </ButtonSecondaryTitle>
                </ButtonSecondary>
            </ContainerScroll>





        </Container>
    )
}