import React, { useEffect, useState } from 'react'
import { Animated, Text } from 'react-native'

const FadeInText = ({ text, duration, delay, style }) => {
  const [fadeAnim] = useState(new Animated.Value(0))
  const [textToShow, setTextToShow] = useState('')

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: duration,
      useNativeDriver: true,
    }).start()
    let index = 0
    const interval = setInterval(() => {
      setTextToShow((textToShow) => textToShow + text[index])
      index++
      if (index === text.length) clearInterval(interval)
    }, delay)
    return () => clearInterval(interval)
  }, [text, delay, duration, fadeAnim])

  return (
    <Animated.Text style={[style, { opacity: fadeAnim }]}>
      {textToShow}
    </Animated.Text>
  )
}

export default FadeInText
