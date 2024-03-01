import { Button, View } from "react-native"

export  const Navigation = ({navigation}) => {
    return(
        <View style={{flex: 1, alignItems: "center" , justifyContent: "center" }}>
            <Button
            title="TelaCalendars"
            onPress={() => navigation.navigate ("TelaCalendars")}
            />
            <Button
            title="Profile"
            onPress={() => navigation.navigate ("Profile")}
            />

        </View>
        
    )
}

