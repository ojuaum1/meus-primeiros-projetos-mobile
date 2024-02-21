import { AntDesign } from '@expo/vector-icons'; // Importa o ícone AntDesign do pacote '@expo/vector-icons'
import { ButtonCard, ButtonText, ClockCard, ContainerCardsList, ContentCard, DataProfileCard, ProfileData, ProfileImage, ProfileName, TextAge, TextBold, ViewRow } from "./Style";

export const AppointmentCard = () => { // Define um componente de função chamado AppointmentCard
    return (
        <ContainerCardsList> 

           
            <ProfileImage source={{uri: "https://github.com/ojuaum1.png"}} /> 

            
            <ContentCard> 

                <DataProfileCard>

                    <ProfileName>joao</ProfileName> 

                    <ProfileData>
                        <TextAge>45</TextAge> 
                        <TextBold>Rotina</TextBold>
                    </ProfileData>

                </DataProfileCard>

                <ViewRow> 

                    <ClockCard> 
                        <AntDesign name="clockcircle" size={24} color="black" /> 
                        <TextBold>14:00</TextBold> 
                    </ClockCard>
                    
                    <ButtonCard> 
                        <ButtonText>Cancelar</ButtonText> 
                    </ButtonCard>

                </ViewRow> 

            </ContentCard>
        </ContainerCardsList>
    )
}
