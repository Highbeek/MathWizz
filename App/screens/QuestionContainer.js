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

const QuestionContainer = () => {
  const [inputValue, setInputValue] = useState('')
  const [operand1, setOperand1] = useState(Math.floor(Math.random() * 9) + 1)
  const [operand2, setOperand2] = useState(Math.floor(Math.random() * 9) + 1)
  const [operator, setOperator] = useState('+')
  const [message, setMessage] = useState('')
  const [attemptsRemaining, setAttemptsRemaining] = useState(3)
  const [answeredCorrectly, setAnsweredCorrectly] = useState(false)
  const [attemptCount, setAttemptCount] = useState(0)
  const [gameOver, setGameOver] = useState(false)

  // Generate a new question
  const generateQuestion = () => {
    let operand1 = Math.floor(Math.random() * 10) + 1
    let operand2 = Math.floor(Math.random() * 10) + 1

    const operators = ['+', '-', '/', '*']
    let operator = operators[Math.floor(Math.random() * operators.length)]

    let answer
    switch (operator) {
      case '+':
        answer = operand1 + operand2
        break
      case '-':
        if (operand1 < operand2) {
          let temp = operand1
          operand1 = operand2
          operand2 = temp
        }
        answer = operand1 - operand2
        break
      case '/':
        answer = operand1 / operand2
        if (answer % 1 !== 0 || answer < 0) {
          operand1 = Math.floor(Math.random() * 10) + 1
          operand2 = Math.floor(Math.random() * 10) + 1
          answer = operand1 + operand2
          operator = '+'
        }
        break
      case '*':
        answer = operand1 * operand2
        if (answer >= 100) {
          operand1 = Math.floor(Math.random() * 10) + 1
          operand2 = Math.floor(Math.random() * 10) + 1
          answer = operand1 + operand2
          operator = '+'
        }
        break
      default:
        break
    }

    setOperand1(operand1)
    setOperand2(operand2)
    setOperator(operator)
    setAnsweredCorrectly(false)

    console.log('Question:', `${operand1} ${operator} ${operand2}`) // Debugging line to check generated question
    console.log('Answer:', answer) // Debugging line to check generated answer

    return answer
  }

  const onPressButton = () => {
    // Check if the user has entered a number
    if (isNaN(inputValue)) {
      setMessage('Please enter a valid number.')
      return
    }

    // Check if the answer is correct
    const answer = getAnswer()
    if (parseInt(inputValue) === answer) {
      setMessage('Correct! Next question.')
      setInputValue('')
      setAttemptCount(attemptCount + 1)
      setAnsweredCorrectly(true)
      generateQuestion()
    } else {
      // Check if the user has exceeded the maximum number of attempts
      if (attemptsRemaining <= 1) {
        Alert.alert(
          'Game over',
          'You have exceeded the maximum number of attempts.',
          [{ text: 'OK' }],
          {
            cancelable: false,
          }
        )
        setAnsweredCorrectly(false)
        setAttemptsRemaining(3)
        generateQuestion()
      } else {
        setMessage('Incorrect. Please try again.')
        setAnsweredCorrectly(false)
        setInputValue('')
        setAttemptsRemaining(attemptsRemaining - 1)
      }
    }
  }


  const getAnswer = () => {
    let answer
    switch (operator) {
      case '+':
        answer = operand1 + operand2
        break
      case '-':
        answer = operand1 - operand2
        break
      case '*':
        answer = operand1 * operand2
        break
      case '/':
        answer = operand1 / operand2
        break
      default:
        break
    }
    return answer
  }

  return (
    <View style={styles.container}>
      <Timer  onTimerEnd={() => setGameOver(true)} style={styles.timer} />
      <View>
        <Text style={styles.welcomeText}>Welcome</Text>
      </View>
      <View style={styles.question}>
        <Text style={styles.operand}>{operand1}</Text>
        <Text style={styles.operator}>{operator}</Text>
        <Text style={styles.operand}>{operand2}</Text>
      </View>
      <View>
        <TextInput
          style={styles.answerInput}
          onChangeText={setInputValue}
          value={inputValue}
          keyboardType="numeric"
        />
        <TouchableOpacity style={styles.checkButton} onPress={onPressButton}>
          <Text style={styles.checkButtonText}>Next Question</Text>
        </TouchableOpacity>
      </View>
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
  timer: {
    position: 'absolute',
    top: 20,
    right: 20,
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  question: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  operand: {
    fontSize: 68,
    fontWeight: 'bold',
  },
  operator: {
    fontSize: 35,
    fontWeight: 'bold',
    marginHorizontal: 40,
  },
  answerInput: {
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 5,
    width: 100,
    height: 40,
    paddingHorizontal: 10,
    marginBottom: 10,
    alignItems:'center',
    justifyContent:'center'
  },
  checkButton: {
    backgroundColor: 'blue',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignItems:'center'
  },
  checkButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  message: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'red',
  },
})

export default QuestionContainer
