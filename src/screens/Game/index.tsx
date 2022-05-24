import React, { useEffect, useState, useCallback } from 'react';
import { ActivityIndicator, Alert, Keyboard, TouchableWithoutFeedback } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import Modal from "react-native-modal";

import { Entypo } from '@expo/vector-icons';

import { ModalButton } from '../../components/ModalButton';
import { cards } from '../../utils/cards';
import { rules } from '../../utils/rules';

import {
      Container,
      Header,
      KingBox,
      KingCard,
      Menu,
      Content,
      Footer,
      Button,
      Text,
      LastCard,
      Number,
      Naipe,
      CardImage,
      ModalBody,
      ModalTitle,
      ModalLabel,
      ModalRule,
} from './styles';

import { Card } from '../../components/Card';

interface Card {
      id: number,
      card: string;
      naipe: string;
      image: string;
      icon: string;
      title: string;
      rule: string;
}

export function Game() {

      const deck = '../../assets/deck.jpg';

      const [playingCards, setPlayingCards] = useState([]);
      const [cardSelected, setCardSelected] = useState<Card[]>([]);

      const [kings, setKings] = useState<Card[]>([]);

      // const [gameRules, setGameRules] = useState<Rules[]>([]);

      const [isLoading, setIsLoading] = useState(false);

      const [modalOpen, setModalOpen] = useState(false);

      useEffect(() => {
            setPlayingCards(cards);
      }, []);

      async function handlePickCard() {
            await shuffleArray();
            // await handleLoading();
            setIsLoading(true);

            if (playingCards.length > 0 && kings.length < 4) {
                  await handleSelectedCard();

                  const card = playingCards[0];

                  const filteredCards = playingCards.filter(item => item !== cardSelected[cardSelected.length-1]);
                  setPlayingCards(filteredCards);

                  console.log("Carta:", cardSelected[cardSelected.length - 1]);

                  if (card.card === 'K') {
                        await handleKings(card);
                  }
            } else {
                  Alert.alert("O jogo acabou!");
            }
      }

      async function shuffleArray() {
            playingCards.sort(() => Math.random() - 0.5);
            console.log("Cartas:", playingCards.length);
      }

      async function handleSelectedCard() {
            cardSelected.push(playingCards[0]);
            Alert.alert(playingCards[0].title, playingCards[0].rule);
      }

      async function handleKings(card: Card) {
            kings.push(card);
            console.log("REI:", kings[kings.length - 1].naipe);
      }

      async function handleLoading() {
            setIsLoading(!isLoading);
      }

      function handleOpenModal() {
            setModalOpen(true);
      }

      function handleCloseModal() {
            setModalOpen(false);
      }

      return (

            <Container>
                  <Header>
                        <KingBox>
                              {/* {kings.length > 0 &&
                                    kings.map(king => {
                                          <Card
                                                card={king.card}
                                                naipe={king.naipe}
                                                cardIcon={king.icon}
                                          />
                                    })
                              } */}
                              { kings.length > 0 && <Card card={kings[0].card} naipe={kings[0].naipe} cardIcon={kings[0].icon} /> }
                              { kings.length > 1 && <Card card={kings[1].card} naipe={kings[1].naipe} cardIcon={kings[1].icon} /> }
                              { kings.length > 2 && <Card card={kings[2].card} naipe={kings[2].naipe} cardIcon={kings[2].icon} /> }
                              { kings.length > 3 && <Card card={kings[3].card} naipe={kings[3].naipe} cardIcon={kings[3].icon} /> }
                        </KingBox>
                        <Menu onPress={handleOpenModal}>
                              <Entypo name="menu" size={15} color="black" />
                        </Menu>
                  </Header>
                  <Content>
                        <Button onPress={handlePickCard}>
                              {/* <Text>Play</Text> */}
                              <CardImage source={require(deck)} />
                              {/* <Naipe name="cards" color="white" size={100} /> */}
                        </Button>
                  </Content>
                  <Footer>
                        <LastCard>
                              {cardSelected.length > 0 &&
                                    <Card
                                          card={cardSelected[cardSelected.length - 1].card}
                                          naipe={cardSelected[cardSelected.length - 1].naipe}
                                          cardIcon={cardSelected[cardSelected.length - 1].icon}
                                    />
                              }
                        </LastCard>
                  </Footer>

                  <Modal
                        isVisible={modalOpen}
                        avoidKeyboard
                        onBackdropPress={handleCloseModal}
                  >
                        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                              <ModalBody>
                                    <ModalRule>
                                          <ModalTitle>Ás (A):</ModalTitle>
                                          <ModalLabel>Começam a beber ao mesmo tempo mas o da direita só pode parar de beber quando o da esquerda parar.</ModalLabel>
                                    </ModalRule>
                                    <ModalRule>
                                          <ModalTitle>2:</ModalTitle>
                                          <ModalLabel>Beba 2 goles.</ModalLabel>
                                    </ModalRule>
                                    <ModalRule>
                                          <ModalTitle>3:</ModalTitle>
                                          <ModalLabel>Distribua 3 goles da forma que quiser.</ModalLabel>
                                    </ModalRule>
                                    <ModalRule>
                                          <ModalTitle>4:</ModalTitle>
                                          <ModalLabel>O último a colocar a mão na mesa bebe.</ModalLabel>
                                    </ModalRule>
                                    <ModalRule>
                                          <ModalTitle>5:</ModalTitle>
                                          <ModalLabel>O último a colocar a mão para o alto bebe.</ModalLabel>
                                    </ModalRule>
                                    <ModalRule>
                                          <ModalTitle>6:</ModalTitle>
                                          <ModalLabel>Todos os homens bebem.</ModalLabel>
                                    </ModalRule>
                                    <ModalRule>
                                          <ModalTitle>7:</ModalTitle>
                                          <ModalLabel>Todos as mulheres bebem.</ModalLabel>
                                    </ModalRule>
                                    <ModalRule>
                                          <ModalTitle>8:</ModalTitle>
                                          <ModalLabel>Quem está na sua frente bebe um gole.</ModalLabel>
                                    </ModalRule>
                                    <ModalRule>
                                          <ModalTitle>9:</ModalTitle>
                                          <ModalLabel>Você cria uma regra e quem descumprir bebe.</ModalLabel>
                                    </ModalRule>
                                    <ModalRule>
                                          <ModalTitle>10:</ModalTitle>
                                          <ModalLabel>Ecolha uma categoria e o primeiro a errar ou não saber bebe.</ModalLabel>
                                    </ModalRule>
                                    <ModalRule>
                                          <ModalTitle>Valete (J):</ModalTitle>
                                          <ModalLabel>Cada jogador fala uma palavra e o primeiro a errar bebe.</ModalLabel>
                                    </ModalRule>
                                    <ModalRule>
                                          <ModalTitle>Dama (Q):</ModalTitle>
                                          <ModalLabel>Você fala uma palavra e o próximo tem que falar uma outra que rime com a sua.</ModalLabel>
                                    </ModalRule>
                                    <ModalRule>
                                          <ModalTitle>Rei (K):</ModalTitle>
                                          <ModalLabel>No quarto rei o jogo acaba.</ModalLabel>
                                    </ModalRule>
                                    <ModalButton title="Fechar" onPress={handleCloseModal} />
                              </ModalBody>
                        </TouchableWithoutFeedback>
                  </Modal>

            </Container>
      );
}
