import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export const Container = styled.View`
    flex: 1;
    
    align-items: center;

    background-color: black;
`;

export const Header = styled.View`
      width: 100%;
      height: 120px;

      flex-direction: row;

      justify-content: space-between;
      align-items: center;

      margin-top: 50px;

      padding: 10px;
`;

export const KingBox = styled.View`
    width: 80%;
    height: 100px;

    flex-direction: row;

    justify-content: center;
    align-items: center;

    margin-top: 50px;
`;

export const KingCard = styled.View`
      width: 70px;
      height: 100px;

    border-radius: 5px;

    background-color: white;
`;

export const Menu = styled(RectButton)`
    width: 50px;
    height: 50px;

    justify-content: center;
    align-items: center;
    align-self: center;

    border-radius: 5px;

    background-color: white;
`;

export const Content = styled.View`
    flex: 1;

    justify-content: center;
    align-items: center;
`;

export const Button = styled(RectButton)`
    width: 70px;
    height: 100px;

    border-radius: 5px;

    justify-content: center;
    align-items: center;

    background-color: black;
`;

export const Text = styled.Text`
    font-size: 16px;
    font-weight: bold;
`;

export const Footer = styled.View`
    flex: 1;

    justify-content: center;
    align-items: center;
`;

export const LastCard = styled.View`
    width: 70px;
    height: 100px;

    flex-direction: column;

    border-radius: 5px;

    justify-content: center;
    align-items: center;

    background-color: white;
`;

export const Number = styled.Text`
      font-size: 30px;
      font-weight: bold;
`;

export const Naipe = styled(MaterialCommunityIcons)``;

export const CardImage = styled.Image`
      width: 70px;
      height: 100px;
`;

export const ModalBody = styled.ScrollView`
    background-color: white;

    padding: 22px;
    border-radius: 4px;
`;

export const ModalRule = styled.View`
    background-color: white;

    flex-direction: column;

    justify-content: center;
    align-items: center;

    padding: 10px;
    border-radius: 4px;
`;

export const ModalTitle = styled.Text`
    padding: 5px 0;
    font-size: 12px;
    font-weight: bold;
`;

export const ModalLabel = styled.Text`
    padding: 10px;
    font-size: 10px;
    text-align: center;
`;
