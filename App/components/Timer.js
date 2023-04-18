import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet } from 'react-native'

const Timer = ({ onTimerEnd }) => {
  const [time, setTime] = useState(60)

  useEffect(() => {
    const interval = setInterval(() => {
      setTime((prevTime) => (prevTime > 0 ? prevTime - 1 : prevTime))
    }, 1000)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    if (time === 0) {
      onTimerEnd()
    }
  }, [time, onTimerEnd])

  return (
    <View style={styles.timerContainer}>
      <Text style={styles.timerText}>{` ${time} s`} </Text>
    </View>
  )
}


export default Timer
const styles = StyleSheet.create({
  timerContainer: {},
  timerText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#E08DAC',
  },
})
