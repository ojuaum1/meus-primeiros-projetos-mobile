import { StyleSheet, Text, View } from "react-native";

//componente person 
//props: name, age npx expo install expo-font

const Person = ({name, age}) => {
    return(
        <View style = {styles.container}>
            <Text style = {styles.text}>Nome: {name}</Text>
            <Text style = {styles.text}>Idade: {age}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        alignItems: 'center',
        backgroundColor : '#005a5b',
        padding : 100,
        margin: 10,
        borderRadius: 5,   
    },

    text:{
        fontSize: 30,
        color : 'white',
        fontFamily: "SingleDay_400Regular"
    }
})

export default Person;