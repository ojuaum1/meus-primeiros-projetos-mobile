import { Button, View } from "react-native"

export  const Navigation = ({navigation}) => {
    return(
        <View style={{flex: 1, alignItems: "center" , justifyContent: "center" }}>
            <Button
            title="LocalConsulta"
            onPress={() => navigation.navigate ("LocalConsulta")}
            />
            <Button
            title="Profile"
            onPress={() => navigation.navigate ("Profile")}
            />

        </View>
        
    )
}

