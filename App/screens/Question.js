import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native'
import React, { useState } from 'react'
import Timer from '../components/Timer'
import Game from '../components/Game'

const QuestionContainer = () => {
  const [message, setMessage] = useState('')
  const [gameOver, setGameOver] = useState(false)

  return (
    <View style={styles.container}>
      <Timer onTimerEnd={() => setGameOver(true)} style={styles.timer} />
      <View>
        <Text style={styles.welcomeText}>Welcome</Text>
      </View>
      <Game setMessage={setMessage} setGameOver={setGameOver} />
      <View>
        <Text style={styles.message}>{message}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#57E2E5',
  },
  welcomeText: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 50,
  },
  message: {
    fontSize: 20,
    marginTop: 20,
  },
  timer: {
    position: 'absolute',
    top: 50,
    right: 30,
  },
})
