import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet,Image,TouchableHighlight  } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import tw from 'twrnc';
import { Link } from 'expo-router';


function LoginView ()  {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Implemente a lógica de autenticação aqui
  };

  return (
    <View style={styles.container}>
        <View style={styles.divLogo}>
            <Image
            source={require('./../../../../assets/logoFinal.png')} 
            style={styles.logo}/>
        </View>
         
       <View  style={styles.divInput}>
            <TextInput
                placeholder="catador@coleta.com.br"
                value={email}
                onChangeText={setEmail}
                style={styles.input}    
            />
            <TextInput
                placeholder="Digite sua senha"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
                style={styles.input}
            />

            
     
       
      <View>
        
      
      </View>
      
            <Button
              title="Entrar"
              onPress={handleLogin}
              color="#2B463C"
             
            />
        
            <Text style={styles.title}>Ainda não e Cadastrado?</Text>
            
       </View>      
      
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    marginTop:20,
    fontSize: 18,
    color: 'black'
  },
  input: {
    width: 280,
    height: 45,
    borderColor: '2B463C',
    borderWidth: 1,
    marginBottom: 10,
    padding: 10,
    borderRadius:8,
    color: 'white',
    backgroundColor:'white'
    
  },
  divLogo:{
    marginBottom:50,
    top:60,
    position:'absolute'
  },
  logo:{
    width: 300, // Largura da imagem
    height: 300, // Altura da imagem
    
  },
  divInput:{
    marginTop:350,
    // marginBottom:0,
    // top:350,
    // position:'absolute'
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width:'100%',
  },
  btn:{
  width:350,
  backgroundColor:'#2B463C'
}
});

export default LoginView;
