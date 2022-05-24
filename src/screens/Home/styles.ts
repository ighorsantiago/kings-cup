import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
    flex: 1;
    
    justify-content: center;
    align-items: center;

    background-color: black;
`;

export const Button = styled(RectButton)`
    width: 100px;
    height: 100px;

    justify-content: center;
    align-items: center;

    border-radius: 50px;

    background-color: green;
`;

export const Text = styled.Text`
    font-size: 16px;
    font-weight: bold;

    text-align: center;
`;
