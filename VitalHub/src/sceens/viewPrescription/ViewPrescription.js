import React from 'react';
import { ContainerViewPrescription } from '../../components/container/Style';
import { ProfileImagePront } from '../../components/appointmentModal/Style';
import { ButtonAdd, ButtonCancell, ButtonCancellExams, ButtonSecondaryTitle, TittleCancellExams } from '../../components/button/Style';
import { InputProfile, InputProntBig } from '../../components/input/Style';
import { ScrollViewPrescription } from '../../components/ScrollView/ScrollView';
import { Age, Email, TextInputDesc, TextInputDiag, TextInputMed, Title } from '../../components/title/Style';
import { ImageExams, ImportImages, SendImage, ViewButtons } from './Style';

export const ViewPrescription = ({ route, navigation }) => {
    const { photoUri } = route.params;

    return (
        <ContainerViewPrescription>
            <ProfileImagePront source={require("../../../assets/DoctorClaudio.png")} />
            <Title>Dr. Cláudio</Title>
            <Age>19 anos</Age>
            <Email>joao.oliveiira.pda@gmail.com</Email>
            
            <ScrollViewPrescription>
                <TextInputDesc>Descrição da consulta</TextInputDesc>
                <InputProfile placeholder='Descrição' />
                
                <TextInputDiag>Diagnóstico do paciente</TextInputDiag>
                <InputProfile placeholder="Diagnóstico" />
                
                <TextInputMed>Prescrição médica</TextInputMed>
                <InputProntBig placeholder="Prescrição médica" />
                
                <TextInputMed>Exames Médicos</TextInputMed>
                <ImportImages>
                    {photoUri ? <ImageExams source={{ uri: photoUri }} /> : <ImageExams source={require("../../../assets/InsertExams.png")} />}
                </ImportImages>
                
                <ViewButtons>
                    <ButtonAdd onPress={() => navigation.navigate("Camerinha")}>
                        <SendImage source={require("../../../assets/Send.png")} />
                    </ButtonAdd>
                    <ButtonCancellExams>
                        <TittleCancellExams>Cancelar</TittleCancellExams>
                    </ButtonCancellExams>
                </ViewButtons>
            </ScrollViewPrescription>
            
            <ButtonCancell>
                <ButtonSecondaryTitle>Voltar</ButtonSecondaryTitle>
            </ButtonCancell>
        </ContainerViewPrescription>
    );
};
