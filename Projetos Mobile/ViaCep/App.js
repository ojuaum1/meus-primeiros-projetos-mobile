import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

// import fonts 
import { useFonts,Roboto_500Medium, Roboto_700Bold} from '@expo-google-fonts/roboto';


//Import components
import { Header } from './src/components/header';
import { ContainerApp } from './styles';
import { Home } from './src/screens/Home';

//começo do app 
export default function App() {

  const [fontLoaded, fontError]= useFonts({
    Roboto_500Medium,
    Roboto_700Bold
  })
  if (!fontLoaded && !fontError) {
    return null;
  }
  return (
    <ContainerApp>
      <Header/>
      <Home>

      
      </Home>
      <Text>
        
      </Text>
    </ContainerApp>
  );
}


