import styled from "styled-components";
import { Text } from "../texts/Style";

export const Input = styled.TextInput.attrs({
    placeholderTextColor: "#34898f"
})`
width: 90%;
height: 53px;
padding: 16px;
margin-top : 15px;
border: 2px solid #49b3ba;
border-radius: 5px;
font-family: "MontserratAlternates_600SemiBold";
`
export const InputNumbers = styled(Input)`
width: 65px;
height: 62px;
margin-bottom: 30px;
font-size: 25px;
text-align: center;
`
export const InputProntBig = styled(Input)`
height: 120px;
margin-top: -15px;
`   
export const InputPront = styled(Input)`  
margin-top: 10px;
`  
export const InputProntDia = styled(Input)`  
margin-top: -15;
`  
export const InputProfile = styled(Input)`
background-color: #E6E6E6;
border-color: transparent;
margin-left: 10px;
font-family: "MontserratAlternates_500Medium";
` 
export const InputAddress = styled(InputProfile)`
width: 145px;
height: 50px;
`
export const TextInput = styled(Text)`
    font-size: 16px;
    font-family: 'Quicksand_600SemiBold';
    margin-top: 20px;
    color: #000000;
    //align-items: start;
    //align-self: flex-start;
    //justify-content: start;
    text-align: left;
`
