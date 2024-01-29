import { FlatList, SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native';
import Person from './src/components/person/Person';
import { useFonts,Poppins_300Light_Italic } from '@expo-google-fonts/poppins';
import { SingleDay_400Regular } from '@expo-google-fonts/single-day';


export default function App() {
  let [fontsLoaded, fontError] = useFonts({
    SingleDay_400Regular , });

    if (!fontsLoaded && !fontError) {
      return null;
    }

    //simulando uma lista 
    const peopleList =[
      {id: '1', name: 'joao', age: 19},
      {id: '2', name: 'rick', age: 19},
      {id: '3', name: 'duds', age: 20},
      {id: '4', name: 'anna', age: 18},
      {id: '4', name: 'artur', age: 17},
      
    ]
  return (
    <SafeAreaView>
      <StatusBar/>
      {/* usando flatlist */}
      <FlatList
      data={peopleList}
      keyExtractor={(item) => item.id}

      renderItem={({item}) =>(//renderizar cada item da lista 
    <Person name={item.name} age={item.age}/>
      )}
      />
    </SafeAreaView>
  );
}

