import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, Modal, Image, Alert } from 'react-native';
import * as MediaLibrary from 'expo-media-library';
import * as ImagePicker from 'expo-image-picker'; // Importe o ImagePicker

import { FontAwesome6 } from '@expo/vector-icons';
import { Camera, CameraType } from 'expo-camera';
import { useEffect, useState, useRef } from 'react';

import { FontAwesome } from '@expo/vector-icons';
import { Tile } from '@rneui/base';
import { SendImage } from '../viewPrescription/Style';
import { ViewDaCamera } from './Style';

export const Camerinha = ({ navigation }) => {
  const cameraRef = useRef(null);
  const [photo, setPhoto] = useState(null);
  const [openModal, setOpenModal] = useState(false);
  const [typeCamera, setTypeCamera] = useState(Camera.Constants.Type.front);

  async function openImagePicker() {
    const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permissionResult.granted === false) {
      Alert.alert('Permissão negada para acessar a galeria');
      return;
    }

    const pickerResult = await ImagePicker.launchImageLibraryAsync();

    if (!pickerResult.cancelled) {
      setPhoto(pickerResult.uri);
      setOpenModal(true);
    }
  }

  async function CapturePhoto() {
    if (cameraRef) {
      const photo = await cameraRef.current.takePictureAsync();
      setPhoto(photo.uri);
      setOpenModal(true);
      console.log(photo);

    }
  }

  function ClearPhoto() {
    setPhoto(null);
    setOpenModal(false);
  }

  async function SavePhoto() {
    if (photo) {
      await MediaLibrary.createAssetAsync(photo).then(() => {
        console.log(photo);
        Alert.alert('Sucesso', ('foto salva na galeria'));
        
        navigation.navigate("ViewPrescription", { photoUri: photo });
      }).catch(error => {
        alert("erro ao processar" + error);
      });
    }
  }



  useEffect(() => {
    (async () => {
      const { status: cameraStatus } = await Camera.requestCameraPermissionsAsync();
      const { status: mediaStatus } = await MediaLibrary.requestPermissionsAsync();
    })();
  }, []);

  return (
    <View style={styles.container}>
      <Camera
        ref={cameraRef}
        type={typeCamera}
        style={styles.camera}
        ratio={'16:9'}
      >
        <View style={styles.viewFlip}>
          <TouchableOpacity style={styles.btnFlip} onPress={() => setTypeCamera(typeCamera == CameraType.front ? CameraType.back : CameraType.front)} >
            <FontAwesome name='rotate-left' size={23} color={'#fff'} />
          </TouchableOpacity>
        </View>
      </Camera>

      <ViewDaCamera>
        <TouchableOpacity style={styles.btnCaptura} onPress={openImagePicker}>
          <FontAwesome6 name="image" size={23} color={"#fff"} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.btnCaptura} onPress={() => CapturePhoto()}>
          <FontAwesome name='camera' size={23} color={'#fff'} />
        </TouchableOpacity>
      </ViewDaCamera>

      <Modal animationType='slide' transparent={false} visible={openModal}>
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', padding: 30 }}>
          <Image
            style={{ width: '100%', height: 500, borderRadius: 10 }}
            source={{ uri: photo }} // Aqui definimos a fonte da imagem como a URI da foto
          />
          <View style={{ margin: 15, flexDirection: 'row' }}>
            <TouchableOpacity
              style={styles.btnCancel}
              onPress={() => ClearPhoto()}
            >
              <FontAwesome name='camera' size={35} color={'#ff0000'} />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.btnUpload}
              onPress={() => SavePhoto()}
            >
              <FontAwesome name='save' size={35} color={'##121212'} />
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
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
  camera: {
    flex: 1,
    width: '100%',
    height: '80%'
  },
  viewFlip: {
    flex: 1,
    backgroundColor: 'transparent',
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'center'
  },
  btnFlip: {
    position: 'absolute',
    bottom: 20,
    left: 20,
    padding: 15
  },
  textFlip: {
    fontSize: 20,
    color: '#fff',
    marginBottom: 20
  },
  btnCaptura: {
    margin: 20,
    padding: 20,
    borderRadius: 15,
    backgroundColor: '#49B3BA',
    alignItems: 'center',
    justifyContent: 'center'
  },
  btnCancel: {
    padding: 20,
    borderRadius: 15,
    backgroundColor: "transparent",
    alignItems: 'center',
    justifyContent: 'center'
  },
  btnUpload: {
    padding: 20,
    borderRadius: 15,
    backgroundColor: "transparent",
    alignItems: 'center',
    justifyContent: 'center'
  }
});
