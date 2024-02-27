import { Modal } from "react-native";

import { ButtonScheduleModal, ButtonSecondary, ButtonSecondaryTitle, TextButton } from "../button/Style";
import { InputAppointmentLevel, InputLabel, InputScheduleModal } from "../input/Style";
import { ModalContainer, ModalContent } from "./Style";

import { Title } from "../title/Style";
import { ScheduleModalView } from "../container/Style";


const ScheduleModal = ({navigation, visible, setShowScheduleModal, ...rest}) => {
    return(
        <Modal {...rest} visible={visible} transparent={true}>
            <ModalContainer>
                <ModalContent>
                    
                    <Title>Agendar Consulta</Title>

                    <InputLabel>Qual o nível da consulta:</InputLabel>

                    <ScheduleModalView>

                    <InputAppointmentLevel
                        placeholder="Rotina"
                        />
                    <InputAppointmentLevel
                        placeholder="Exame"
                    />
                    <InputAppointmentLevel
                        placeholder="Urgência"
                    />
                    </ScheduleModalView>

                    <InputScheduleModal
                        placeholder="Informe a localização"
                        />
                         <InputLabel>Informe a localização desejada</InputLabel>

                  <ButtonScheduleModal>
                       <TextButton>Continuar</TextButton>
                    </ButtonScheduleModal>

                    <ButtonSecondary onPress={() => setShowScheduleModal(false)}>
                        <ButtonSecondaryTitle>Cancelar</ButtonSecondaryTitle>
                    </ButtonSecondary>  

                </ModalContent>
            </ModalContainer>
        </Modal>
    );
};

export default ScheduleModal;