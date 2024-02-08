import { View } from "react-native"
import { Button } from "../../components/button/Style"
import { ButtonTittle } from "../../components/buttonTitle/Style"
import { Container } from "../../components/container/Style"
import { Inputquadrado } from "../../components/input/Style"
import { Logo } from "../../components/logo/Style"
import { Title } from "../../components/title/Style"
import { navigation } from "../navigation/Navigation"
import { LinkMedium, Linkviar } from "../../components/links/Style"
import { Text } from "../../components/h2/Text"

export const Verify = ({ navigation }) => {
    return (
        <Container>
            <Logo source={require("../../../assets/logo.png")} />

            <Title>Verifique seu e-maill</Title>

            <Text>
                Digite o código de 4 dígitos enviado para
                username@email.com
            </Text>


            <View style={{
                justifyContent: "center",
                flexDirection: "row",
                alignItems: "center",
                gap: 15

            }}>

                <Inputquadrado placeholder="0" />
                <Inputquadrado placeholder="0" />
                <Inputquadrado placeholder="0" />
                <Inputquadrado placeholder="0" />

            </View>



            <Button>
                <ButtonTittle onPress={() => navigation.navigate("RedefPwd")}>Continuar</ButtonTittle>
            </Button>

            <Linkviar style={{
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "row",

            }} >
                Reenviar codigo
            </Linkviar>
        </Container >


    )
}