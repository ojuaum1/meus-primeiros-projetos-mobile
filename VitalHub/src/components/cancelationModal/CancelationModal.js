import { Modal } from "react-native"
import { ModalContent, ModalText, PatientModal } from "../cancelationModal/Style"
import { Title } from "../title/Style"
import { Button, ButtonSecondary, ButtonSecondaryTitle } from "../button/Style"
import { ButtonTittle } from "../buttonTitle/Style"

// import notification
import * as Notifications from "expo-notifications"

Notifications.requestPermissionsAsync();

// definir como as notificacoes devem ser tratadas quando recebidas 
Notifications.setNotificationHandler({
    handleNotification: async () => ({
        // mostra o alerta quando a notificacao for recebida
        shouldShowAlert: true,
        // reproduz som
        shouldPlaySound: true,
        shouldSetBadge: false,
    }),
});

export const CancellationModal = ({ visible, setShowModalCancel, ...rest }) => {

    const CancelationNotification = async () => {

        // obtem o status das permissoes
        const { status } = await Notifications.getPermissionsAsync();
        // verifica se o usuario concedeu permissao para a notificacao
        if (status !== "granted") {
            alert("Você não concedeu permissão para as notificações");
            return;
        }

        // agendar uma notificacao para ser exibida apos 5 segundos 
        await Notifications.scheduleNotificationAsync({
            content: {
                title: "Olá mundo",
                body: "Criando uma POC para implementar notificação",
                sound: "notification_message.wav", // utilizar o som carregado
            },
            trigger: {
                seconds: 5
            }
        });
    }
    return (
        
        <Modal {...rest} visible={visible} transparent={true} animationType="fade">

            <PatientModal>
                <ModalContent>

                    <Title>Cancelar consulta</Title>

                    <ModalText>Ao cancelar essa consulta, abrirá uma possível disponibilidade no seu horário, deseja mesmo cancelar essa consulta?</ModalText>

                    <Button>
                        <ButtonTittle>Confirmar</ButtonTittle>
                    </Button>

                    <ButtonSecondary onPress={() => setShowModalCancel(false)}>
                        <ButtonSecondaryTitle>
                            Cancelar
                        </ButtonSecondaryTitle>
                    </ButtonSecondary>

                </ModalContent>
            </PatientModal>

        </Modal>
    )
}