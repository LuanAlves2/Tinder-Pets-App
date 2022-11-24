import React, { useState, useMemo } from 'react';
import { ImageBackground, Text, View, Button } from 'react-native';
import TinderCard from 'react-tinder-card';
import {} from '../views/AreaRestrita';
import { Icon } from '@rneui/base';


const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  header: {
    color: '#000',
    fontSize: 30,
    marginBottom: 30,
  },
  cardContainer: {
    width: '90%',
    maxWidth: 260,
    height: 300,
  },
  card: {
    position: 'absolute',
    backgroundColor: '#fff',
    width: '100%',
    maxWidth: 260,
    height: 300,
    shadowColor: 'black',
    shadowOpacity: 0.2,
    shadowRadius: 20,
    borderRadius: 20,
    resizeMode: 'cover',
  },
  cardImage: {
    width: '100%',
    height: '100%',
    overflow: 'hidden',
    borderRadius: 20,
  },
  cardTitle: {
    position: 'absolute',
    bottom: 0,
    margin: 10,
    color: '#fff',
  },
  buttons: {
    margin: 20,
    zIndex: -100,
  },
  infoText: {
    height: 28,
    justifyContent: 'center',
    display: 'flex',
    zIndex: -100,
  }
}

const db = [
  {
    name: 'Richard, 6 Meses',
    img: require('../img/richard.jpg')
  },
  {
    name: 'Tom, 12 Meses',
    img: require('../img/erlich.jpg')
  },
  {
    name: 'Mario, 16 Meses',
    img: require('../img/monica.jpg')
  },
  {
    name: 'Jared, 7 Meses',
    img: require('../img/jared.jpg')
  },
  {
    name: 'Mia, 9 Meses',
    img: require('../img/dinesh.jpg')
  }
]

const alreadyRemoved = []
let charactersState = db // This fixes issues with updating characters state forcing it to use the current state and not the state that was active when the card was created.

const Feed = () => {
  const [characters, setCharacters] = useState(db)
  const [lastDirection, setLastDirection] = useState()

  const childRefs = useMemo(() => Array(db.length).fill(0).map(i => React.createRef()), [])

  const swiped = (direction, nameToDelete) => {
    console.log('removing: ' + nameToDelete + ' to the ' + direction)
    setLastDirection(direction)
    alreadyRemoved.push(nameToDelete)
  }

  const outOfFrame = (name) => {
    console.log(name + ' left the screen!')
    charactersState = charactersState.filter(character => character.name !== name)
    setCharacters(charactersState)
  }

  const swipe = (dir) => {
    const cardsLeft = characters.filter(person => !alreadyRemoved.includes(person.name))
    if (cardsLeft.length) {
      const toBeRemoved = cardsLeft[cardsLeft.length - 1].name // Find the card object to be removed
      const index = db.map(person => person.name).indexOf(toBeRemoved) // Find the index of which to make the reference to
      alreadyRemoved.push(toBeRemoved) // Make sure the next card gets removed next time if this card do not have time to exit the screen
      childRefs[index].current.swipe(dir) // Swipe the card!
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.header}></Text>
      <View style={styles.cardContainer}>
        {characters.map((character, index) =>
          <TinderCard ref={childRefs[index]} key={character.name} onSwipe={(dir) => swiped(dir, character.name)} onCardLeftScreen={() => outOfFrame(character.name)}>
            <View style={styles.card}>
              <ImageBackground style={styles.cardImage} source={character.img}>
                <Text style={styles.cardTitle}>{character.name}</Text>
              </ImageBackground>
            </View>
          </TinderCard>
        )}
      </View>
      <View >
        <Icon
        raised
        name='close'
        type='font-awesome'
        color='#000'
        onPress={() => swipe('left')} title='Deslize para a direita!' />
        <Icon
        raised
        name='heart'
        type='font-awesome'
        color='#f50'
        onPress={() => swipe('right')} title='Deslize para a direita!' />
      </View>
      {lastDirection ? <Text style={styles.infoText} key={lastDirection}>Você deslizou</Text> : <Text style={styles.infoText}>Passe um cartão ou pressione um botão para começar!</Text>}
    </View>
  )
}

export default Feed
