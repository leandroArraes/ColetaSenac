
import React, { useState } from "react";
import { StyleSheet, Text, View, ImageBackground, TextInput, Button } from "react-native";
import MeuBotao from "../components/Meubotao";
import tw from 'twrnc';
import { Image, RadioGroup,FlatList  } from "react-native";
import { RadioButton } from 'react-native-paper';

export default function Page() {
  const [material, setMaterial] = useState("papel");
  const [condition, setCondition] = useState("boa");

  const data = [
    { key: "papel", image: require("../../assets/papel.png"), label: "Papel" },
    { key: "plastico", image: require("../../assets/plastico.png"), label: "Plástico" },
    { key: "metal", image: require("../../assets/metal.png"), label: "Metal" },
    { key: "tetra", image: require("../../assets/tetra.png"), label: "Tetra Pak" },
    { key: "vidro", image: require("../../assets/vidro.png"), label: "Vidro" },
    { key: "movel", image: require("../../assets/movel.png"), label: "Móvel" },
    { key: "bateria", image: require("../../assets/bateria.png"), label: "Bateria" },
    { key: "eletronico", image: require("../../assets/eletronico.png"), label: "Eletrônico" },
    { key: "outro", image: require("../../assets/outro.png"), label: "Outro" },
  ];

  const renderItem = ({ item }) => (
    <View style={tw`flex justify-center items-center w-1/3 p-2`}>
      <Image style={{ width: 40, height: 40 }} source={item.image} />
      <Text style={tw`text-center font-bold flex`}>{item.label}</Text>
    </View>
  );

  return (
    <View style={tw`flex grid grid-cols-3`}>
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={item => item.key}
    />
  </View>
);
};

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
