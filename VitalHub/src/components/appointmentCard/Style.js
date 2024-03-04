import styled from "styled-components/native";
import { Title } from "../../components/title/Style";

export const ContainerCardsList = styled.View`
    width: 90% ;
    margin-bottom:12px ;
    padding: 10px 10px;
    border-radius: 5px ;
    flex-direction: row ;
    background-color:#fff ;
    box-shadow: 4px 4px 15px rgba(0, 0, 0, 0.08);
    gap: 10px ;
    margin: 0 auto ;
`
export const ProfileImage = styled.Image`
    width: 77px ;
    height: 80px ;
    border-radius: 5px ;
`

export const ContentCard = styled.View`
    width: 70% ;
`
export const DataProfileCard = styled.View`
    gap:6px ;
`
export const ProfileName = styled(Title)`   
    font-size: 16px ;
    
`
export const ProfileData = styled.View`
    flex-direction: row ;
    gap: 15px ;
`
export const TextAge = styled.Text`
    font-size: 14px ;
    color: #8C8A97;
    font-family: "Quicksand_400Regular";
`
export const TextBold = styled(TextAge)`
    font-family: "Quicksand_600SemiBold";
`
export const ViewRow = styled.View`
    width: 100%;
    flex-direction: row ;
    align-items: center ;
    justify-content: space-between ;
    margin-top: 11px ;
`

export const ClockCard = styled.View`
    flex-direction: row;
    padding: 4px 23px;
    gap: 6px ;
    border-radius: 5px ;
    background-color: ${(props) => props.situacao == "pendente" ? "#E8FCFD" : "#F1F0F5"} ;
`
export const ButtonCard = styled.TouchableOpacity`

`
export const ButtonText = styled.Text`
    color: ${(props) => props.situacao == "pendente" ? "#c81d25" : "#344f8f"} ;
`
export const ButtonTextProfile = styled.Text`
color: #fff;
font-family:"MontserratAlternates_700Bold";
text-transform: uppercase;
text-align: center;
`
export const ClinicCard = styled(DataProfileCard)`
width: 85%;
height: 35%;
background-color: white;
elevation : 8;
/* box-shadow: 4px 4px 15px rgba(0, 0, 0, 0.08); */
margin-bottom: 5%;
border-radius: 5px;
`

export const ProfileNameClinic =styled(ProfileName)`
align-self: start;
margin-bottom: -20px;
`
