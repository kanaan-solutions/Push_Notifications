import React from 'react';
import { Dimensions } from 'react-native';

import { TouchableProps } from '../../utils/Interfaces';

import { Container, ButtonText } from './styles';
const { width, height } = Dimensions.get("window");

const TouchableButton: React.FC<TouchableProps> = ({ children, color, onPress, tvParallaxProperties }) => {
  return (
    <Container
      tvParallaxProperties={{
        pressDuration: 0.6,
        pressDelay: 0.5
      }}
      style={{
        width: width * 0.7,
        height: height * 0.06,
      }}
      color={color}
      onPress={onPress}
    >
      <ButtonText>
        {children}
      </ButtonText>
    </Container>
  );
};

export default TouchableButton;