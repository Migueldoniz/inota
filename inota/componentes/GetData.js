import AsyncStorage from '@react-native-async-storage/async-storage';

const getData = async (key) => {
  try {
    const value = await AsyncStorage.getItem(key);
    return value;
  } catch (e) {
    console.error('Erro ao tentar recuperar os dados');
    return null;
  }
}

export default getData;