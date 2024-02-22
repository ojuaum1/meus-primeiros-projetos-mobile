import styled from "styled-components";

export const Button = styled.TouchableOpacity`
    width: 90% ;
    height: 44px ;

    background-color: #496bba ;
    border-radius: 5px ;
    border: 1px solid #496bba ;

    margin-top: 15px ;
    padding: 12px 8px 12px 8px ;

    align-items: center ;
    justify-content:center ;
`

export const ButtonGoogle = styled(Button)`
    background-color: #FAFAFA ;
    flex-direction: row ;
    gap: 10px;
`
export const ButtonSecondary = styled(Button)`
    background-color: transparent;
    border: none;
`


export const ButtonTitle = styled.Text`
  text-align: center;
  font-size: 14px;
  color: #ffffff;
  text-transform: uppercase;
  font-family: "MontserratAlternates_700Bold";
`;

export const ButtonSecondaryTitle = styled(ButtonTitle)`
text-transform: capitalize;
text-decoration: underline;
color: #344f8f;
`