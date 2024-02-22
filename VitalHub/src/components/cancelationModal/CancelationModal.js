import { Modal } from "react-native";
import { Title } from "../title/Style";
import { Button, ButtonSecondary, ButtonSecondaryTitle, ButtonTitle } from "../button/Style";
import { ModalContent, ModalText, PatientModal } from "./Style";

const CancellationModal = ({visible, setShowModalCancel, ...rest}) => {
    return (
        <Modal {...rest} visible={visible} transparent={true} animationType="fade">
            
        <PatientModal>
            <ModalContent>

            <Title>Cancelar consulta</Title>

            <ModalText>Ao cancelar essa consulta, abrirá uma possível disponibilidade no seu horário, deseja mesmo cancelar essa consulta?</ModalText>

            <Button>
                <ButtonTitle>Confirmar</ButtonTitle>
            </Button>

            <ButtonSecondary onPress={() => setShowModalCancel(false)}>
                <ButtonSecondaryTitle>
                    Cancelar
                </ButtonSecondaryTitle>
            </ButtonSecondary>

            </ModalContent>
        </PatientModal>

        </Modal>
    );
};

export default CancellationModal;
