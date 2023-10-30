import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,ImageBackground } from 'react-native';
import LoginView from './src/Usuario/login/LoginView';





export default function App() {
  return (
    <View style={styles.container}>
      
      <ImageBackground    source={require('./assets/bg.png')} style={styles.backgroundImage}>

       <LoginView/>
   
      
      </ImageBackground>

    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width:'100%',
    backgroundColor:'#F9EBD1'
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover', // ou 'contain' para ajustar a imagem de fundo
    width: '100%',
    height: '100%',
  }
});
