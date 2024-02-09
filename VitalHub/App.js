import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from "@react-navigation/native";
import { Navigation } from "./src/sceens/navigation/Navigation";

const Stack = createNativeStackNavigator()

import { useFonts, MontserratAlternates_600SemiBold, MontserratAlternates_500Medium, MontserratAlternates_700Bold, Quicksand_500Medium } from "@expo-google-fonts/montserrat-alternates";
import { Login } from "./src/sceens/login/Login";

import { EmailVerify, VerificarEmail, Verify } from "./src/sceens/emailVerify/EmailVerify";

import { NewPassword } from "./src/sceens/newPassword/NewPassword";
import { NewAccount } from "./src/sceens/newAccount/NewAccount"
import { Password } from "./src/sceens/password/Password"
import { Home } from "./src/sceens/home/Home"




export default function app() {

  const [fontsLoaded, fontsError] = useFonts({
    MontserratAlternates_600SemiBold,
    MontserratAlternates_500Medium,
    MontserratAlternates_700Bold,
    Quicksand_500Medium,
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

        {/* <Stack.Screen

          //nome da tela 
          name='Navigation'

          //componente que será chamado
          component={Navigation}

          //titulo da tela
          options={{ title: 'Navigation' }}

        /> */}


        <Stack.Screen
          name="Login"
          component={Login}
          options={{ title: "Login" }}
        />

        <Stack.Screen
          name="RecuperarSenha"
          component={Password}
          options={{ title: "Recuperar Senha" }}
        />

        <Stack.Screen
          name="Verify"
          component={Verify}
          options={{ title: "Verificar Email" }}
        />

        <Stack.Screen
          name="NewPassword"
          component={NewPassword}
          options={{ title: "Redefinir senha" }}
        />

        <Stack.Screen
          name="NewAccount"
          component={NewAccount}
          options={{ title: "Criar conta" }}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ title: "Home" }}
        />




      </Stack.Navigator>

    </NavigationContainer>
  )
}