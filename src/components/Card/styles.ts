import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export const Container = styled.View`    
      width: 70px;
      height: 100px;

      align-items: center;

      margin-horizontal: 2px;

      background-color: white;
`;

export const Button = styled(RectButton)`
      width: 70px;
      height: 100px;

      border-radius: 5px;

      justify-content: center;
      align-items: center;

      background-color: white;
`;

export const Text = styled.Text`
      font-size: 16px;
      font-weight: bold;
`;

export const Number = styled.Text`
      font-size: 30px;
      font-weight: bold;
`;

export const Naipe = styled(MaterialCommunityIcons)``;