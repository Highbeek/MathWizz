import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React from 'react'

const GameLog = ({ score, tries, highScore }) => {
  return (
    <View style={styles.gameLogContainer}>
      <View style={styles.detailsContainer}>
        <Text style={styles.message}>🏁 Start Playing</Text>
        <Text style={styles.scoreText}>💯 Score: {score}</Text>
        <Text style={styles.triesText}>💊 Tries left: {tries}</Text>
        <Text style={styles.highScoreText}>👌 High Score: {highScore}</Text>
      </View>
      <TouchableOpacity style={styles.refreshButton} onPress={() => {}}>
        <Image />
      </TouchableOpacity>
    </View>
  )
}

export default GameLog

const styles = StyleSheet.create({
  gameLogContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#57E2E5',

  },
  message:{
    fontSize: 45,
    fontWeight: 'bold'
  }
})
