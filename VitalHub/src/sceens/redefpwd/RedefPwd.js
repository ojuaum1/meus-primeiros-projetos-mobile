import { Button } from "../../components/button/Style"
import { ButtonTittle } from "../../components/buttonTitle/Style"
import { Container } from "../../components/container/Style"
import { Text } from "../../components/h2/Text"
import { Input } from "../../components/input/Style"
import { Logo } from "../../components/logo/Style"
import { Title } from "../../components/title/Style"

export const RedefPwd = ({ navigation }) => {
    return (
        <Container>
            <Logo source={require("../../../assets/logo.png")} />

            <Title>Redefinir senha</Title>

            <Text>
            Insira e confirme a sua nova senha
            </Text>

            <Input placeholder="Nova senha"
             secureTextEntry
            />
            
            <Input placeholder="Confirmar nova senha"
             secureTextEntry
            />
            
            <Button>
            <ButtonTittle>Entrar</ButtonTittle>
            </Button>
            
            
            
            


        </Container>
    )
}