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

export const Inputquadrado = styled(Input).attrs({
    placeholderTextColor: "#34898f"
    
})
`
width:65px;
height:62px;
padding: 8px 20px;
flex-direction: column;
justify-content: center;
align-items: center;
gap: 8px;
font-size:25px;
text-align:center;
margin-bottom:15px;
`