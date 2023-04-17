import { StyleSheet, SafeAreaView } from 'react-native'
import React from 'react'
import LoginPage from './screens/LoginPage'
import QuestionContainer from './screens/QuestionContainer'
import GameLog from './screens/GameLog'
import SafeView from './components/SafeView'

const index = () => {
  return (
    <SafeAreaView style={[SafeView.AndroidSafeArea, styles.container]}>
      <LoginPage/>
      {/* <QuestionContainer /> */}
      {/* <GameLog/> */}
    </SafeAreaView>
  )
}

export default index

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#57E2E5',
  },
})
