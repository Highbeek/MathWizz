import React, { useState, useEffect } from 'react'
import {
  SafeAreaView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
  Text,
  ImageBackground,
} from 'react-native'
import FeatherIcon from 'react-native-vector-icons/Feather'
// import FadeInView from '../components/FadeInView'
import FadeInText from '../components/FadeInText'
import { Font } from 'expo-font'
import { AppLoading } from 'expo-app-loading'

// const loadFonts = () => {
//   return Font.loadAsync({
//     'PressStart2P-Regular': require('../assets/fonts/Press_Start_2P/PressStart2P-Regular.ttf'),
//   })
// }

const LoginPage = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [fontsLoaded, setFontsLoaded] = useState(false)

  const handleUsernameChange = (text) => {
    setUsername(text)
  }

  const handleSignInPress = () => {
    // Handle sign in logic
  }

  const {
    container,
    appTitleContainer,
    appTitleText,
    formContainer,
    inputField,
    user,
    button,
    buttonMargin,
    buttonText,
    imageLayout,
    buttonContainer,
  } = styles

  // useEffect(() => {
  //   loadFonts()
  // }, [])

  return (
    // <AppLoading
    //   startAsync={loadFonts}
    //   onFinish={() => setFontsLoaded(true)}
    //   onError={console.warn}
    // >
      // {fontsLoaded && (
        <SafeAreaView style={container}>
          <ImageBackground
            source={require('../assets/background.jpg')}
            style={imageLayout}
          >
            <View style={appTitleContainer}>
              <FadeInText
                text="MathWizz"
                duration={2000}
                delay={1000}
                style={appTitleText}
              />
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <FeatherIcon
                name="user"
                size={20}
                color="#888"
                style={{ flex: 1 }}
              />
              <TextInput
                style={inputField}
                placeholder="Username (at least 6 characters)"
                value={username}
                onChangeText={handleUsernameChange}
              />
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <FeatherIcon
                name="lock"
                size={20}
                color="#888"
                style={{ flex: 1 }}
              />
              <TextInput
                style={inputField}
                placeholder="Password"
                secureTextEntry={true}
                value={password}
                onChangeText={(text) => setPassword(text)}
              />
            </View>
            <View style={buttonContainer}>
              <TouchableOpacity style={button} onPress={handleSignInPress}>
                <Text style={buttonText}>Log In</Text>
              </TouchableOpacity>
              <TouchableOpacity style={button} onPress={handleSignInPress}>
                <Text style={buttonText}>New User</Text>
              </TouchableOpacity>
            </View>
          </ImageBackground>
        </SafeAreaView>
      // )}
    // </AppLoading>
  )
}

export default LoginPage

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  formContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  //   text: {
  //     fontSize: 24,
  //     fontWeight: 'bold',
  //     color: 'black',
  //   },
  inputField: {
    flex: 9,
    height: 50,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 10,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    marginTop: 20,
  },
  button: {
    backgroundColor: '#6A7FDB',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
  },
  buttonMargin: {
    marginRight: 5,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  appTitleContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  appTitleText: {
    fontSize: 68,
    fontWeight: 'bold',
    fontStyle: 'italic',
    // fontFamily: 'PressStart2P-Regular',
  },

  user: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  imageLayout: {
    flex: 1,
    justifyContent: 'center',
  },
})
