import React from 'react'
import { useNavigation } from '@react-navigation/native';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity
  } from 'react-native';

const ScreenB = () => {

    const history = useNavigation()

    const screenNavigate = () => {
        history.navigate('Home')
    }

    return (
        <View style={styles.body}>
            <Text style={styles.text}>Screen B</Text>
            <TouchableOpacity
                style={{ backgroundColor: 'grey', padding: 10 }}
                onPress={() => screenNavigate()}
            >
                <Text style={styles.text}>Go To Screen A</Text>
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

export default ScreenB