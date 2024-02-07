
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
import { Password } from "../PwsRec/Password"
import { Navigation } from "../navigation/Navigation"




export const Login = ({}) => {
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
            onpress={() => Navigation.navigate ("Password")}
            // onPress={() => Navigation.navigate ("Password")}
            > Esqueceu sua senha?</LinkMedium>

            <Button
             >
                <ButtonTittle>Entrar</ButtonTittle>
            </Button>



            <ButtonGoogle>
            <AntDesign name="google" size={18} color="#496BBA" />
                <ButtonTittleGoogle>Entrar com Google</ButtonTittleGoogle>
            </ButtonGoogle>

            <ContentAccount>
                <TextAccount>Não tem conta?
                    <LinkBold> Crie uma conta agora!</LinkBold>
                </TextAccount>
            </ContentAccount>

        </Container >
    )
}

