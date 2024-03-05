import { Informations, ProfileImagePront } from "../../components/appointmentModal/Style"
import { Button, ButtonCancell, ButtonEditMedRec, ButtonSecondaryTitle, ButtonTitle } from "../../components/button/Style"
import { ButtonTittle } from "../../components/buttonTitle/Style"
import { Container } from "../../components/container/Style"
import { InputPront, InputProntBig } from "../../components/input/Style"
import { ContainerScroll } from "../../components/scrollView/ScrollView"
import { Text } from "../../components/texts/Style"
import { Age, Email, TextInputDesc, TextInputDiag, TextInputMed, Title } from "../../components/title/Style"
import { ViewLocz } from "../localConsulta/Style"
import { ImagemIcon, NotInput, NotInputBig } from "./Style"

export const Presc = ({ navigation }) => {
    return (
        <Container>

            <ProfileImagePront source={{ uri: "https://github.com/Carlos-Augusto-Roque.png" }} />

            <Title> Carlito </Title>


            <Informations>
                <Age>Cliníco geral</Age>
                <Email>CRM-15286</Email>
            </Informations>

            <ContainerScroll>
                <TextInputDesc>
                    Descrição da consulta
                </TextInputDesc>

                <NotInputBig
                    placeholder='Descrição'
                />

                <TextInputDiag>
                    Diagnóstico do paciente
                </TextInputDiag>

                <NotInput
                    placeholder="Diagnóstico"
                />

                <TextInputMed>
                    Prescrição médica
                </TextInputMed>
                <NotInputBig
                    placeholder="Prescrição médica"
                />

                <TextInputMed>
                    Exames médicos
                </TextInputMed>
                <NotInputBig>
                    <ViewLocz>
                    <ImagemIcon  source={require('../../../assets/iconoir_file-not-found.png')}/>
                        <Text>
                            Nenhuma foto informada
                        </Text>

                    </ViewLocz>

                </NotInputBig>


                <Button onPress={() => navigation.navigate("MedicalRecordEdit")}>
                    <ButtonTittle>Salvar</ButtonTittle>
                </Button>

                <ButtonEditMedRec>
                    <ButtonTitle>Editar</ButtonTitle>
                </ButtonEditMedRec>

                <ButtonCancell onPress={() => navigation.navigate("Home")}>
                    <ButtonSecondaryTitle>
                        Cancelar
                    </ButtonSecondaryTitle>
                </ButtonCancell>
            </ContainerScroll>
        </Container>
    )
}
export default Presc