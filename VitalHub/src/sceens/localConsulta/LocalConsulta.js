
import { Link } from "@react-navigation/native"
import { Container } from "../../components/container/Style"
import { InputProfile } from "../../components/input/Style"
import { TextMaps } from "../../components/texts/Style"
import { Title } from "../../components/title/Style"
import { Address, TextsProfile } from "../profile/Style"
import { ImageMap, ViewLoc, ViewLocz } from "./Style"
import { ButtonSecondaryTitle } from "../../components/button/Style"
import React from 'react';
import MapView from 'react-native-maps';
import { StyleSheet, View } from 'react-native';



const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    map: {
        width: '100%',
        height: '100%',
    },
});

export const LocalConsulta = ({ navigation }) => {
    return (
        <>
            <View style={styles.container}>
                <MapView style={styles.map} />
            </View>
           
            <Container>
                <Title>
                    Clínica Natureh
                </Title>
                <TextMaps>
                    São Paulo, SP
                </TextMaps>
                <TextsProfile>Endereço</TextsProfile>
                <InputProfile></InputProfile>

                <ViewLoc>
                    <ViewLocz>
                        <TextsProfile>Numero</TextsProfile>
                        <InputProfile></InputProfile>
                    </ViewLocz>

                    <ViewLocz>
                        <TextsProfile>Bairro</TextsProfile>
                        <InputProfile></InputProfile>
                    </ViewLocz>

                </ViewLoc>
                <ButtonSecondaryTitle >
                    Voltar
                </ButtonSecondaryTitle>
            </Container>

        </>
    )
}
export default LocalConsulta