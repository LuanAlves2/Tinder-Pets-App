import * as React from 'react';
import { SafeAreaView, Text, View, StyleSheet, Image } from 'react-native';
import { Card } from 'react-native-paper';
import {css} from '../assets/css/Css';


export function Profile() {
    return (
      <SafeAreaView style={css.card_container}>
      <View style={css.card_container}>
        <Card>
          <Image
              source={require('../img/richard.jpg')}
              style={css.card_paragrafh}
            />
          </Card>
          <Card style={css.container_name_card}>
            <Text style={css.text_card_container}>Xinha, 22 Meses</Text>
          </Card>
      </View>
    </SafeAreaView>
    );
  }