import { Modal } from "react-native";
import { AppointmentModalpront, Informations, ModalContentpront, ProfileImagePront } from "./Style";
import { Age, Email, Title } from "../title/Style";
import { Button, ButtonSecondary, ButtonSecondaryTitle, ButtonTitle } from "../button/Style";
import { ProfileImage } from "../appointmentCard/Style";

const AppointmentModal = ({ navigation, visible, setShowAppointment, ...rest }) => {
    return (
        <Modal {...rest} visible={visible} transparent={true} animationType="fade">
            <AppointmentModalpront>
                <ModalContentpront>
                <ProfileImagePront source={{ uri: "https://github.com/ojuaum1.png" }} />
                <Title>Joao Oliveira</Title>
                <Informations>
                    <Age>19</Age>
                    <Email>joao@gmail.com</Email>
                </Informations>
                <Button onPress={() => navigation.navigate("ProntInsert")}>
                    <ButtonTitle>Inserir Prontuário</ButtonTitle>
                </Button>
                <ButtonSecondary onPress={() => setShowAppointment(false)}>
                    <ButtonSecondaryTitle>Cancelar</ButtonSecondaryTitle>
                </ButtonSecondary>
            </ModalContentpront>
            </AppointmentModalpront>
        </Modal>
    );
};

export default AppointmentModal;
