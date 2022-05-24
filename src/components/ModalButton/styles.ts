import styled from 'styled-components/native';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';
import { RFValue } from 'react-native-responsive-fontsize';

interface ButtonProps extends RectButtonProps {
    color?: string;
}

export const Container = styled.Button<ButtonProps>`
    width: 100%;

    align-items: center;
    justify-content: center;
    
    border-radius: 10px;
    
    padding: 30px;
    margin-bottom: 20px;

    background-color: ${({ color }) => color};
`;

export const Title = styled.Text`
    font-size: ${RFValue(15)}px;
    color: white;
`;
