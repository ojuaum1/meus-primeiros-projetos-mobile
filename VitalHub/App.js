import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from "@react-navigation/native";
import { Navigation } from "./src/sceens/navigation/Navigation";

const Stack = createNativeStackNavigator()

import { useFonts, MontserratAlternates_600SemiBold, MontserratAlternates_500Medium,MontserratAlternates_700Bold } from "@expo-google-fonts/montserrat-alternates";
import { Login } from "./src/sceens/login/Login";
import { Password } from "./src/sceens/PwsRec/Password";

export default function app() {

  const [fontsLoaded, fontsError] = useFonts({
    MontserratAlternates_600SemiBold,
    MontserratAlternates_500Medium,
    MontserratAlternates_700Bold
  });

  if (!fontsLoaded && !fontsError) {
    return null;
  }


  return (
    //navegação 
    //container
    //stackNavigator
    //StackScreen

    //envolve a estrutura de navegação 

    <NavigationContainer>

      <Stack.Navigator>

        <Stack.Screen

          //nome da tela 
          name='Navigation'

          //componente que será chamado
          component={Navigation}

          //titulo da tela
          options={{ title: 'Navigation' }}

        />

        <Stack.Screen
          name="Login"
          component={Login}
          options={{ title: "Login" }}
        />

        <Stack.Screen
        name = "Recuperar senha"
        component={Password}
        options = {{title: "Recuperar senha"}}
        />



      </Stack.Navigator>

    </NavigationContainer>
  )
}