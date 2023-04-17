import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native'
import React from 'react'

const QuestionContainer = ({ question, onAnswerChange, onAnswerSubmit }) => {
  const {
    questionContainer,
    questionText,
    answerInput,
    nextButton,
    buttonText,
  } = styles
  return (
    <View style={questionContainer}>
      <Text style={questionText}>{question}</Text>
      <TextInput style={answerInput} onChangeText={onAnswerChange} />
      <TouchableOpacity style={nextButton} onPress={onAnswerSubmit}>
        <Text style={buttonText}>Next</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  questionContainer: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#57E2E5',
  },
  questionText: {
    // add styles for question text
  },
  answerInput: {
    // add styles for answer input
  },
  nextButton: {
    // add styles for next button
  },
  buttonText: {
    // add styles for button text
  },
})

export default QuestionContainer
