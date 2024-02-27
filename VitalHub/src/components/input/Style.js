import styled from "styled-components";

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
export const InputScheduleModal = styled(Input)`
    width: 100%;
`
export const InputProntBig = styled(Input)`
height: 120px ;
margin-top: 10px;
`   
export const InputProntBigEdit = styled(InputProntBig)`
background-color: #E6E6E6;
border-color: transparent;
`
export const InputProntEdit = styled(Input)`
background-color: #E6E6E6;
border-color: transparent;
`

export const InputPront = styled(Input)`  
margin-top: 10px;
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
export const InputLabel = styled.Text`
    font-size: 16px;
    font-family: 'Quicksand_600SemiBold';
    margin-bottom: -5px;
    margin-top: 20px;
    color: #000000;
    align-items: start;
    align-self: flex-start;
    justify-content: start;
`


export const InputAppointmentLevel = styled(Input)`
    width: 30%;
    text-align: center;
`