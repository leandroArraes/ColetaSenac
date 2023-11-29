
import { StyleSheet, Text, View,ImageBackground,Button } from "react-native";
import MeuBotao from "../components/Meubotao";
import tw from 'twrnc';
import { Link } from 'expo-router';
import { StatusBar } from 'expo-status-bar';

export default function Page() {
  return (
    <View style={styles.container}>
      <ImageBackground    source={require('../../assets/bg.png')} style={styles.backgroundImage}>
        <View style={tw`flex gap-4 justify-center items-center w-90 h-full `}>

        

        
        
       
              <Link href="/Usuario/login/LoginView" asChild >
                <Button title="login" > </Button>
              </Link>

             <Link href="/Descarte" asChild> 
                <Button title="cadastro de Descarte"> </Button>
              </Link>

      
            
        
          
        
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
