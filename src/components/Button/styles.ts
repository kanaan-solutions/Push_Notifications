import styled from 'styled-components/native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import { TouchableProps } from '../../utils/Interfaces';

//@ts-ignore
export const Container = styled(TouchableOpacity) <TouchableProps>`
  background: ${(props): string => props.color || 'white'} 0% 0% no-repeat padding-box;
  border-radius: 8px;
  margin-top: 25px;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ButtonText = styled.Text`
  color: white;
  font-size: 18px;
  font-weight: bold;
`;