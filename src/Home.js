import { 
    View, 
    Text , 
    StyleSheet,
    TouchableOpacity 
} from 'react-native'
import React, { useContext } from 'react'
import { useNavigation } from '@react-navigation/native'
import DataContext from './context/DataContext';
import GlobalStyle from './styles/GlobalStyle';

const Home = ({route}) => {

    const { WelcomedBy , WelcomeAt } = route.params

    const { name } = useContext(DataContext)
    const history = useNavigation();

    return (
        <View style={GlobalStyle.body}>
            <Text style={styles.text}>Welcome { name }</Text>
            <Text style={styles.text}>Welcome By { WelcomedBy } At {WelcomeAt}</Text>
            <TouchableOpacity
                style={styles.loginBtn}
                onPress={() => history.navigate('Login') }
            >
                <Text style={{ fontSize: 15, color: 'white' }}>Logout</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    text : {
        fontSize : 25,
        fontWeight : 'bold'
    },
    loginBtn:{
        backgroundColor : 'red',
        justifyContent : 'center',
        alignItems : 'center',
        textAlign : 'center',
        margin:25,
        padding : 8
    }
})

export default Home