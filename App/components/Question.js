import React from 'react'
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native'

const Question = ({
  operand1,
  operand2,
  operator,
  attemptsRemaining,
  answeredCorrectly,
  gameOver,
  inputValue,
  message,
  onInputChange,
  onSubmit,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.question}>
        <Text style={styles.operand}>{operand1}</Text>
        <Text style={styles.operator}>{operator}</Text>
        <Text style={styles.operand}>{operand2}</Text>
      </View>
      <View>
        <TextInput
          style={styles.answerInput}
          onChangeText={onInputChange}
          value={inputValue}
          keyboardType="numeric"
          editable={!gameOver}
        />
        <TouchableOpacity
          style={styles.checkButton}
          onPress={onSubmit}
          disabled={gameOver}
        >
          <Text style={styles.checkButtonText}>
            {gameOver ? 'Game Over' : 'Submit'}
          </Text>
        </TouchableOpacity>
      </View>
      {message && <Text style={styles.message}>{message}</Text>}
      {answeredCorrectly && (
        <Text style={styles.message}>Correct! Next question.</Text>
      )}
      {attemptsRemaining === 0 && (
        <Text style={styles.message}>
          You have exceeded the maximum number of attempts.
        </Text>
      )}
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
  question: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  operand: {
    fontSize: 50,
    fontWeight: 'bold',
    color: '#fff',
    marginRight: 10,
  },
  operator: {
    fontSize: 50,
    fontWeight: 'bold',
    color: '#fff',
    marginRight: 10,
  },
  answerInput: {
    height: 50,
    width: '100%',
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  checkButton: {
    height: 50,
    width: '100%',
    backgroundColor: '#1E90FF',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  message: {
    color: '#fff',
    fontSize: 16,
    marginTop: 10,
  },
})

export default Question
