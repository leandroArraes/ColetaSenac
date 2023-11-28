
import React, { useState } from "react";
import { StyleSheet, Text, View, ImageBackground, TextInput, Button } from "react-native";
import MeuBotao from "../components/Meubotao";
import tw from 'twrnc';
import { Image, RadioGroup } from "react-native";
import { RadioButton } from 'react-native-paper';

export default function Page() {
  const [material, setMaterial] = useState("papel");
  const [condition, setCondition] = useState("boa");

  return (
    <View style={tw`flex justify-center items-center h-full`}>
      <ImageBackground source={require('../../assets/bg.png')} style={styles.backgroundImage}>
        <View style={tw`flex ustify-center items-center h-full`}>
          <Text style={tw`text-center font-bold text-2xl`}>
            Quero Descartar
          </Text>


          <View style={tw`mb-2 w-90 bg-gray-200 h-40 justify-center items-center rounded-lg`}>
            <Text style={tw`text-center font-bold text-1xl flex`}>
              Adicione uma foto do material
            </Text>
            <Image style={{ width: 80, height: 80 }} source={require("../../assets/camera.png")} />
          </View>


          <View style={tw`w-90 bg-gray-200 h-100 rounded-lg`}>
            <Text style={tw`text-center font-bold text-2xl flex`}> Tipo de Material  </Text>

            <View style={tw`text-center font-bold text-2xl flex`}>

            <View style={tw`flex justify-center items-center`}>
              <Image style={{ width: 40, height: 40 }} source={require("../../assets/papel.png")} />
              <Text style={tw`text-center font-bold flex`}> Papel</Text>
            </View>

            <View style={tw`flex justify-center items-center`}>
              <Image style={{ width: 40, height: 40 }} source={require("../../assets/plastico.png")} />
              <Text style={tw`text-center font-bold flex`}> Plastico </Text>
            </View>
            <View style={tw`flex justify-center items-center`}>
              <Image style={{ width: 40, height: 40 }} source={require("../../assets/metal.png")} />
              <Text style={tw`text-center font-bold flex`}> Plastico </Text>
            </View>

            <View style={tw`flex justify-center items-center`}>
              <Image style={{ width: 40, height: 40 }} source={require("../../assets/tetra.png")} />
              <Text style={tw`text-center font-bold flex`}> tetra pak </Text>
            </View>

            <View style={tw`flex justify-center items-center`}>
              <Image style={{ width: 40, height: 40 }} source={require("../../assets/vidro.png")} />
              <Text style={tw`text-center font-bold flex`}> vidro </Text>
            </View>

            <View style={tw`flex justify-center items-center`}>
              <Image style={{ width: 40, height: 40 }} source={require("../../assets/movel.png")} />
              <Text style={tw`text-center font-bold flex`}> movel </Text>
            </View>

            <View style={tw`flex justify-center items-center`}>
              <Image style={{ width: 40, height: 40 }} source={require("../../assets/bateria.png")} />
              <Text style={tw`text-center font-bold flex`}> pilha </Text>
            </View>

            <View style={tw`flex justify-center items-center`}>
              <Image style={{ width: 40, height: 40 }} source={require("../../assets/eletronico.png")} />
              <Text style={tw`text-center font-bold flex`}> eletrônico </Text>
            </View>

            <View style={tw`flex justify-center items-center`}>
              <Image style={{ width: 40, height: 40 }} source={require("../../assets/outro.png")} />
              <Text style={tw`text-center font-bold flex`}> outro </Text>   
            </View>
            </View>
            <View>
            <Text style={tw`text-center font-bold text-2xl`}>
                Condição do material
                <RadioButton value="Boa" />
                <RadioButton value="Ruim" />
              </Text>
            </View>

          </View>


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
    width: '100%',
    backgroundColor: '#F9EBD1'
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover', // ou 'contain' para ajustar a imagem de fundo
    width: '100%',
    height: '100%',
  }
});
