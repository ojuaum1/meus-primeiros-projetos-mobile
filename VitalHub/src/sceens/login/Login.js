
import { Logo } from "../../components/logo/Style"
import { Title } from "../../components/title/Style"
import { Container } from "../../components/container/Style"
import { Input } from "../../components/input/Style"
import { LinkBold, LinkMedium } from "../../components/links/Style"
import { Button, ButtonGoogle } from "../../components/button/Style"
import { Image, Text, TouchableOpacity, View } from "react-native"
import { ButtonTittle, ButtonTittleGoogle } from "../../components/buttonTitle/Style"
import { AntDesign } from '@expo/vector-icons';
import { ContentAccount, TextAccount } from "./Style"

import { Navigation } from "../navigation/Navigation"
import { NavigationContainer } from "@react-navigation/native"




export const Login = ({navigation}) => {
    return (
        <Container>

            <Logo source={require("../../../assets/logo.png")} />

            <Title>Entrar ou criar conta</Title>



            <Input
                placeholder="Usuário ou email"
            />

            <Input
                placeholder="Senha"
                secureTextEntry
            />

            <LinkMedium
            onPress={() => navigation.navigate ("RecuperarSenha")}
            > Esqueceu sua senha?</LinkMedium>

            <Button
             >
                <ButtonTittle 
                onPress={() => navigation.navigate ("Home")}
                >Entrar</ButtonTittle>
            </Button>



            <ButtonGoogle>
            <AntDesign name="google" size={18} color="#496BBA" />
                <ButtonTittleGoogle>Entrar com Google</ButtonTittleGoogle>
            </ButtonGoogle>

            <ContentAccount>
                <TextAccount>Não tem conta?
                    <LinkBold
                     onPress={() => navigation.navigate ("NewAccount")}
                    > Crie uma conta agora!</LinkBold>
                </TextAccount>
            </ContentAccount>

        </Container >
    )
}
