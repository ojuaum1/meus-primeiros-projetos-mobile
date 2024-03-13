import React, { useEffect, useRef, useState } from 'react';
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import { requestForegroundPermissionsAsync, getCurrentPositionAsync, watchPositionAsync, LocationAccuracy } from 'expo-location';
import { mapskey } from '../../util/MapsApiKey';

export const ApiMap = () => {
  const mapReference = useRef(null);
  const [initialPosition, setInitialPosition] = useState(null);
  const [finalPosition] = useState({ latitude: -23.6666, longitude: -46.5322 });

  async function CapturarLocalizacao() {
    const { granted } = await requestForegroundPermissionsAsync();
    if (granted) {
      const captureLocation = await getCurrentPositionAsync();
      setInitialPosition(captureLocation);
    }
  }

  useEffect(() => {
    CapturarLocalizacao();
    watchPositionAsync({
      accuracy: LocationAccuracy.Highest,
      timeInterval: 1000,
      distanceInterval: 1,
    }, async (Response) => {
      await setInitialPosition(Response)
      mapReference.current?.animateCamera({
        pitch: 60,
        center: Response.coords
      })
      console.log(Response)
    })
  }, []);

  useEffect(() => {
    RecarregarVisualizacaoMapa();
  }, [initialPosition]);

  async function RecarregarVisualizacaoMapa() {
    if (mapReference.current && initialPosition) {
      const coordinates = [
        { latitude: initialPosition.coords.latitude, longitude: initialPosition.coords.longitude },
        { latitude: finalPosition.latitude, longitude: finalPosition.longitude }
      ];

      mapReference.current.fitToCoordinates(
        coordinates,
        {
          edgePadding: { top: 60, right: 60, bottom: 60, left: 60 },
          animated: true
        }
      );
    }
  }

  return (
    <View style={styles.container}>
      {initialPosition ? (
        <MapView
          ref={mapReference}
          initialRegion={{
            latitude: initialPosition.coords.latitude,
            longitude: initialPosition.coords.longitude,
            latitudeDelta: 0.0050,
            longitudeDelta: 0.0050,
          }}
          provider={PROVIDER_GOOGLE}
          customMapStyle={beautifulMapStyle}
          style={styles.map}
        >
          <Marker
            coordinate={{
              latitude: initialPosition.coords.latitude,
              longitude: initialPosition.coords.longitude,
            }}
            title='posicao inicial'
            pinColor={'green'}
            description='estou aqui'
          />
          <MapViewDirections
            origin={initialPosition.coords}
            destination={finalPosition}
            strokeWidth={5}
            strokeColor='#993399'
            apikey={mapskey}
          />
          <Marker
            coordinate={finalPosition}
            title='posicao final'
            pinColor={'purple'}
            description='estou aqui'
          />
        </MapView>
      ) : (
        <>
          <Text>Localização não encontrada</Text>
          <ActivityIndicator />
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    flex: 1,
    width: "100%"
  },
});

const beautifulMapStyle = [
  // Estilo do mapa omitido por brevidade
];
