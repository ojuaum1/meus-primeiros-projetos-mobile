import styled from "styled-components"; // Importa a biblioteca styled-components para estilização
import { AntDesign } from '@expo/vector-icons'; // Importa o ícone AntDesign do pacote '@expo/vector-icons'
import { ContainerCardsList, ContentCard, DataProfileCard, ProfileName } from "./Style";

export const AppointmentCard = () => { // Define um componente de função chamado AppointmentCard
    return (
        <ContainerCardsList> {/* Container para os cartões de compromisso */}

            {/* imagem de CardPerfil */}
            <ProfileImage source={{uri: "https://github.com/ojuaum1.png"}} /> {/* Componente para a imagem do perfil */}

            {/* conteudo ao lado da imagem do perfil */}
            <ContentCard> {/* Conteúdo ao lado da imagem do perfil */}

                <DataProfileCard> {/* Dados do perfil */}

                    <ProfileName>joao</ProfileName> {/* Nome do perfil */}

                    <ProfileData> {/* Dados adicionais do perfil */}

                        <TextAge>45</TextAge> {/* Idade do perfil */}
                        <TextBold>Rotina</TextBold> {/* Texto em negrito (presumivelmente a rotina) */}

                    </ProfileData>

                </DataProfileCard>

                <ViewRow> {/* Linha para organizar elementos horizontalmente */}

                    <ClockCard> {/* Cartão para exibir o horário */}
                        <AntDesign name="clockcircle" size={24} color="black" /> {/* Ícone de relógio */}
                        <TextBold>14:00</TextBold> {/* Horário */}
                    </ClockCard>
                    
                    <ButtonCard> {/* Botão para cancelar o compromisso */}
                        <ButtonText>Cancelar</ButtonText> {/* Texto do botão */}
                    </ButtonCard>

                </ViewRow>

            </ContentCard>
        </ContainerCardsList>
    )
}
