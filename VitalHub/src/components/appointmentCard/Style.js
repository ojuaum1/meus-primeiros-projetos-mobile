import styled from "styled-components";
import { Title } from "../title/Style";

export const ContainerCardsList = styled.View`
flex-direction: row;
gap:10px;
height: 120px;
`

export const ProfileImage = styled.Image`
width: 77;
height: 80;
`
export const ContentCard = styled.View`
width: 70%;
gap: 10;
background-color: red;
`
export const DataProfileCard = styled.View`

`
export const TextAge = styled.Text`
font-size: 15px;
color: #8C8A97;
font-family: 'Quicksand_400Regular';
`

export const TextBold = styled(TextAge)`
font-family: 'Quicksand_600SemiBold';

`
export const ProfileData = styled.View`
flex-direction: row;
gap: 10px;
align-items: center;
`
export const ProfileName = styled(Title)`
font-size: 16px;
`
export const ClockCard = styled.View`
background-color: ${props => props.situacao == 'pendente' ? '#E8FCFD' : '#F1F0F5'};
height: 25px;
width: 100px;
flex-direction: row;
justify-content: center;
gap: 10px;
align-items: center;
border-radius: 5px;
`
export const ViewRow = styled.View`
height: 40%;
flex-direction: row;
padding-right: 25px;
align-items: flex-end;
justify-content: space-between;
`
export const ButtonCard = styled.TouchableOpacity`

`
export const ButtonText = styled.Text`
font-size: 16px;
color: ${(props) => props.situacao == "pendente" ? "#c81d25" : "#344f8f"}
`
