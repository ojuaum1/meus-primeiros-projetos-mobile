import { Button, View } from "react-native"

export  const Navigation = ({navigation}) => {
    return(
        <View style={{flex: 1, alignItems: "center" , justifyContent: "center" }}>
            <Button
            title="Login"
            onPress={() => navigation.navigate ("Login")}
            />
            <Button
            title="Verify"
            onPress={() => navigation.navigate ("Verify")}
            />
            <Button
            title="NewPassword"
            onPress={() => navigation.navigate ("NewPassword")}
            />
            <Button
            title="NewAccount"
            onPress={() => navigation.navigate ("NewAccount")}
            />
            <Button
            title="ProntInsert"
            onPress={() => navigation.navigate ("ProntInsert")}
            />
            <Button
            title="Home"
            onPress={() => navigation.navigate ("Home")}
            />
        
            <Button
            title="Profile"
            onPress={() => navigation.navigate ("Profile")}
            />
        
          
        </View>
        
    )
}

