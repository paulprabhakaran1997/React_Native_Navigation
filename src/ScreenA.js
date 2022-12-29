import { useNavigation } from '@react-navigation/native';
import React from 'react'
import {
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
  } from 'react-native';

const ScreenA = () => {

  const history = useNavigation()

  const screenNavigate = () =>{
    history.navigate('ScreenB')
  }

  return (
    <View style={styles.body}>
        <Text style={styles.text}>Screen A</Text>
        <TouchableOpacity 
          style={{backgroundColor : 'grey',padding:10}}
          onPress = {() => screenNavigate()}
        >
          <Text style={styles.text}>Go To Screen B</Text>
        </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  body : {
    flex : 1,
    justifyContent : 'center',
    alignItems : 'center'
  },
  text:{
    fontSize : 40,
    fontWeight : 'bold',
    margin : 10,
    color : 'black'
  }
})

export default ScreenA