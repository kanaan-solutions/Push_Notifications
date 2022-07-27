import React from 'react';
import { Dimensions } from 'react-native';

import { TouchableProps } from '../../utils/Interfaces';

import { Container, ButtonText } from './styles';
const { width, height } = Dimensions.get("window");

const TouchableButton: React.FC<TouchableProps> = ({ children, color, onPress, height, width }) => {
  return (
    <Container
      tvParallaxProperties={{
        pressDuration: 0.6,
        pressDelay: 0.5
      }}
      style={{
        width: width,
        height: height,
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