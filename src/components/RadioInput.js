import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { RadioButton } from 'react-native-paper';
import tw from 'twrnc';

const RadioInput = () => {
  const [condition, setCondition] = useState(null);

  const handleRadioButtonChange = (value) => {
    setCondition(value);
  };

  return (
    <View style={tw`flex-1 justify-center items-center mt-8 `}>
    <View style={tw`flex-1 items-center`}>
      <Text style={tw`text-2xl font-bold mb-2`}>
        Condição do material
      </Text>
      <RadioButton.Group onValueChange={handleRadioButtonChange} value={condition}>
        <View style={tw`flex-row items-center`}>
          <RadioButton.Item label="Boa" value="Boa" />
          <RadioButton.Item label="Ruim" value="Ruim" />
        </View>
      </RadioButton.Group>
    </View>
    {/* <Text>{condition ? `Condição selecionada: ${condition}` : 'Nenhuma condição selecionada'}</Text> */}
  </View>
  );
};

export default RadioInput;
