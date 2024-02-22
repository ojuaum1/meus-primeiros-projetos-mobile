import { Modal } from "react-native";
import { AppointmentModalpront, ModalContentpront, ProfileImagePront } from "./Style";
import { Title } from "../title/Style";
import { Button, ButtonSecondary, ButtonSecondaryTitle, ButtonTitle } from "../button/Style";
import { ProfileImage } from "../appointmentCard/Style";

const AppointmentModal = ({ visible, setShowAppointment, ...rest }) => {
    return (
        <Modal {...rest} visible={visible} transparent={true} animationType="fade">
            <AppointmentModalpront>
                <ModalContentpront>
                <ProfileImagePront source={{ uri: "https://github.com/ojuaum1.png" }} />
                <Title>Cancelar consulta</Title>
                <Button>
                    <ButtonTitle>Confirmar</ButtonTitle>
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
