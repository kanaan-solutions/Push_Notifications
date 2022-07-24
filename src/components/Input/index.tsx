import React from "react";
import { Dimensions } from "react-native";

import { ITextInput } from '../../utils/Interfaces';
import { Container } from './styles';
const { width, height } = Dimensions.get("window");

const Input: React.FC<ITextInput> = ({
  placeholder,
  secureTextEntry,
  onChangeText
}) => {
  return (
    <Container
      underlineColorAndroid="transparent"
      placeholderTextColor="#CDCDC1"
      secureTextEntry={secureTextEntry}
      {...{ placeholder }}
      onChangeText={onChangeText}
      style={{
        width: width * 0.7,
        height: height * 0.06,
      }}
    />
  );
};

export default Input;