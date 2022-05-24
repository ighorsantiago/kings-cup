import React from 'react';
import { ActivityIndicator } from 'react-native';

import {
   Container,
   Title
} from './styles';

interface Props {
    title: string;
    color?: string;
    onPress: () => void;
    enabled?: boolean;
    loading?: boolean;
}

export function ModalButton({
   title,
   color,
   onPress,
   enabled = true,
   loading = false,
}: Props) {

   return (

      <Container
         title={title}
         color={color ? color : '#DC1637'}
         onPress={onPress}
         enabled={enabled}
         style={{ 
            opacity: (enabled === false || loading === true) ? 0.5 : 1
         }}
      >
         {
            loading
            ? <ActivityIndicator color={'#E1E1E8'} />
            : <Title>{title}</Title>
         }
      </Container>
   );
}
