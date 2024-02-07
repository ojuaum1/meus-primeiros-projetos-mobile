import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    // Criando nossa navegação personalizada

    // Container
    // stacknavigator
    // stack screen
    
    <NavigationContainer>

 </Stack.Navigator>

      <Stack.screen
        //nome tela
        name='navegacao'
         //componente que sera chamado
        component={Navegacao}
        //titulo da tela
        options={{title: 'Navegacao'}}
      />
      <Stack.Navigator>

    </NavigationContainer>



  );
}
