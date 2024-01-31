import { HeaderContainer, HeaderContent, TextHeader } from "./style";

export function Header(){
    return(
 // hEADER CONTAINER (é uma view a caixinha que guarda todo mundo)
 //HEADER CONTERNT (SAFE AREA VIEW - area segura da caixa )
 // TEXT HEADER ( texto que vai no header)
 
 <HeaderContainer>
    <HeaderContent>
        <TextHeader>Consumo da api via cep</TextHeader>
    </HeaderContent>
 </HeaderContainer>
    )
}