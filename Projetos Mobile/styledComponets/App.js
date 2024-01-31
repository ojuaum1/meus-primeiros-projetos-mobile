import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Image, Text, View } from 'react-native';
import { Container } from './src/components/Container/Container';
import { Title } from './src/components/Title/Title';
import { Button } from './src/components/Button/Button';

export default function App() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  // hook useEffect
  useEffect(() => {
    console.warn(`contador atualizado: ${count}`);
  }, [count]);

  return (
    <Container>
    

      <Title>Contador: {count}</Title>

      <Button onPress={increment}>
        <Text>Incrementar</Text>
      </Button>

      <Button onPress={decrement}>
        <Text>Decrementar</Text>
      </Button>

      <StatusBar style="auto" />
    </Container>
  );
}

const styles = StyleSheet.create({
  image: {
    width: '100%', // Make the image take the full width
    height: 100, // Adjust the height as needed
    resizeMode: 'cover', // Or use 'contain' based on your requirement
  },
});
