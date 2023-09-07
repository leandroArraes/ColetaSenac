import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet,Image } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Implemente a lógica de autenticação aqui
  };

  return (
    <View style={styles.container}>
         
        <Image
        source={require('../../../assets/logo.png')} // Substitua pelo caminho da sua imagem
        style={styles.logo}
      />

      
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
      <Button title="Entrar" onPress={handleLogin} />
      <Text style={styles.title}>Ainda não e Cadastrado?</Text>
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
    fontSize: 14,
    marginBottom: 20,
    color: 'white'
  },
  input: {
    width: 280,
    height: 45,
    borderColor: 'white',
    borderWidth: 1,
    marginBottom: 10,
    padding: 10,
    borderRadius:6,
    color: 'white'
    
  },
  logo:{
    marginBottom:50,
    top:80,
    position:'absolute'
  }
});

export default LoginScreen;
