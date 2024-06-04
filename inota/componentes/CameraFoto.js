/* Package imports*/
import { useCallback, useEffect, useState, useRef } from "react";
import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
  TouchableOpacity,
  FlatList,
  PermissionsAndroid,
} from "react-native";
import {
  Camera,
  useCameraDevice,
  useCameraPermission,
  useMicrophonePermission,
  useFrameProcessor
} from "react-native-vision-camera";
import { useTextRecognition } from 'react-native-vision-camera-v3-text-recognition';
import { runOnJS } from 'react-native-reanimated';

const CameraScreen = () => {
  // Hooks
  const { hasPermission, requestPermission } = useCameraPermission();
  const [isActive, setIsActive] = useState(false);
  const options = { language : 'latin' }
  const {scanText} = useTextRecognition(options)
  const [canScan, setcanScan] = useState(false)
  const [isProcessing, setIsProcessing] = useState(false);
  const [startTime, setStartTime] = useState(0); // Alterado
  const cameraRef = useRef(null);
  // Dispositivos
  const device = useCameraDevice("back", {
    physicalDevices: [
      "ultra-wide-angle-camera",
      "wide-angle-camera",
      "telephoto-camera",
    ],
  });

  // Requisita permissão quando componente é renderizado
  // Array de dependências vazio, executa somente quando componente é 'mounted'
  // Utiliza useEffects pois é um efeito colateral
  useEffect(() => {
    (async () => {
      const status = await requestPermission();
      const filesP = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE
      );

      // Caso permissões sejam liberadas, é permitido
      if (status) {
        setIsActive(true);
      }
    })();
    // ()(); define e chama função definida imediatamente
  }, []);

  const startProcessing = () => {
    setIsProcessing(true);
    setStartTime(Date.now());
    setTimeout(() => {
      setIsProcessing(false);
      return (
        isProcessing &&
        (<View style={{ flex: 1 }}>
        <Camera
          style={StyleSheet.absoluteFill}
          device={device}
          isActive={true}
          frameProcessor={frameProcessor}
          />
        </View>)) // Inicia o tempo de execução
    }, 5000); // 5000 ms = 5 segundos
  };

  const frameProcessor = useFrameProcessor((frame) => {
    'worklet'
    const data = scanText(frame);
    console.log(data, 'data');
  },[])
  
  // Permissões não foram concedidas
  if (!isActive) {
    return <ActivityIndicator />;
  }

  // Dispositivo não foi encontrado
  if (!device) {
    return <Text>Camera device not found!</Text>;
  }

  return (
    <>
      {isProcessing ?
        (<View style={{ flex: 1 }}>
        <Camera
          style={StyleSheet.absoluteFill}
          device={device}
          isActive={true}
          frameProcessor={frameProcessor}
        />

        
      </View>) :
      (<View style={{ flex: 1 }}>
        <Camera
          style={StyleSheet.absoluteFill}
          device={device}
          isActive
          
        />
        <TouchableOpacity
          onPress={startProcessing} // Alterado
          style={{
            width: 55,
            height: 55,
            borderRadius: 99,
            borderWidth: 5,
            borderColor: "red",
            position: "absolute",
            bottom: 70,
            alignSelf: "center",
          }}
        />
      </View>
      )
      }
    </>
  );
};

const styles = StyleSheet.create({
  addButton: {
    position: "absolute",
    flexDirection: "row",
    right: 30,
    bottom: 30,
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default CameraScreen;
