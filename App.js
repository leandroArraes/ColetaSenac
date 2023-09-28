import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,ImageBackground } from 'react-native';
// import  LoginScreen from './src/login/view/LoginScreen';
import LoginView from './src/login/LoginView';
//import LoginScreen from './LoginScreen';

export default function App() {
  return (
    <View style={styles.container}>
      <ImageBackground
            // source={require('./assets/background.png')} // Substitua pelo caminho da sua imagem de fundo
            style={styles.container}>
      {/* <LoginScreen/> */}
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
});
