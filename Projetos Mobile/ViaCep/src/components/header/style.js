import styled from "styled-components";

// hEADER CONTAINER (é uma view a caixinha que guarda todo mundo)
 //HEADER CONTERNT (SAFE AREA VIEW - area segura da caixa )
 // TEXT HEADER ( texto que vai no header)
 
 export const HeaderContainer = styled.View`
 background-color: #FECC2B;
 border-radius: 0px 0px 15px 15px;
 box-shadow: 0px 0px 10px #00000030;
 height: 20%;
 `

 export const HeaderContent = styled.SafeAreaView`
 
 `
 export const TextHeader = styled.Text`
 font-size: 24px;
color: #333E33;
font-family:'Roboto_500Medium;';
line-height: 100px;
text-align: center;
 `