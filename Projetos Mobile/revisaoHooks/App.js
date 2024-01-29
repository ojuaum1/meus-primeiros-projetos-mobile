import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function App() {
  const [count, setCount] = useState(0)

  const increment = () => {
    setCount(count + 1)
  }

  const decrement = () => {
    setCount(count - 1)
  }

  //hook user efect
  useEffect(() => {
    console.warn(`contador atualizado: ${count}`)
  }, [count])

  return (
    <View style={styles.container}>

      <Text>Contador: {count} </Text>

      <TouchableOpacity style={styles.buttonIncrementar} onPress={increment}>
        <Text>Incrementar</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.decrementar} onPress={decrement}>
        <Text>Decrementar</Text>
      </TouchableOpacity>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'pink',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonIncrementar: {
    backgroundColor: 'rgb(59, 89, 145)',
    padding: 10,
    borderRadius: 5,
    width: '30%',
    alignItems: 'center',
  },
  decrementar: {
    backgroundColor: '#8ab3b4',
    padding: 10,
    borderRadius: 5,
    width: '30%',
    alignItems: 'center',
    marginTop: 20,
  },

});
