import {ButtonTabsStyle, ButtonTextStyle} from './style'

export const AbsListAppointament = ({textButton,clickButton=false, onPress}) => {
    return (
        // botao
        <ButtonTabsStyle>
            <ButtonTextStyle clickButton={clickButton}>{textButton}</ButtonTextStyle>

        </ButtonTabsStyle>
    )
}