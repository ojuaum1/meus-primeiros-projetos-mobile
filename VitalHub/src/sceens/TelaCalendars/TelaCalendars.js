
import { Container } from "../../components/container/Style";
import CustomCalendar from "../../components/calendars/Calendars";
import { Title } from "../../components/title/Style";
import { InputSelect } from "../../components/input/Style";

export const TelaCalendars = ({ navigation }) => {

    return (
        <Container>
            <Title> Selecionar Data </Title>
            <CustomCalendar />
            <InputSelect/>
            
        </Container>
    )
}