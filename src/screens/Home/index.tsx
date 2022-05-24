import React from 'react';

import {
    Container,
    Button,
    Text,
} from './styles';

export function Home({ navigation }) {

    return (

        <Container>
            <Button onPress={() => navigation.navigate('Game')}>
                <Text>Copo do Rei</Text>
            </Button>
        </Container>
    )
}