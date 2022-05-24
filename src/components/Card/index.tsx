import React from 'react';

import {
      Container,
      Number,
      Naipe
} from './styles';

interface Card {
      card: string;
      naipe: string;
      cardIcon: string;
}

export function Card({ card, naipe, cardIcon }: Card) {

      return (
            <Container>
                  <Number style={{ alignSelf: 'flex-start' }}>{card}</Number>
                  <Naipe
                        name={cardIcon}
                        color={
                              naipe === 'copas' || naipe === 'ouros'
                                    ? 'red'
                                    : 'black'
                        }
                        size={30}
                  />
                  <Number style={{ alignSelf: 'flex-end' }}>{card}</Number>
            </Container>
      );
}