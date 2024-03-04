
import { Container } from "../../components/container/Style"
import { TextMaps } from "../../components/texts/Style"
import { Title } from "../../components/title/Style"
import { ImageMap } from "./Style"


export const LocalConsulta = ({ navigation }) => {
    return (
        <>
            <ImageMap source={require("../../../assets/image1.png")} />
            <Container>
                <Title>
                    Clínica Natureh
                </Title>
                <TextMaps>
                    São Paulo, SP
                </TextMaps>
            </Container>

        </>
    )
}
export default LocalConsulta