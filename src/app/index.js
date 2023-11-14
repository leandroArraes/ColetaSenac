import { StyleSheet, Text, View,ImageBackground } from "react-native";
import MeuBotao from "../components/Meubotao";
import tw from 'twrnc';

export default function Page() {
  return (
    <View style={styles.container}>
      <ImageBackground    source={require('../../assets/bg.png')} style={styles.backgroundImage}>
        <View style={tw`grid gap-4 flex-row content-center h-full`}>

            <MeuBotao nome={'Tela de login'}/>  <MeuBotao  nome={'cadastro de Descarte'}/>
            
        </View>
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
