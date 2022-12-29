import { 
    View, 
    Text , 
    StyleSheet , 
    Image, 
    TextInput, 
    Keyboard , 
    TouchableWithoutFeedback, 
    TouchableOpacity, 
    ToastAndroid 
} from 'react-native'
import React, { useContext, useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import DataContext from './context/DataContext';
import GlobalStyle from './styles/GlobalStyle';

const DismissKeyboard = ({children}) => (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss() }>
        {children}
    </TouchableWithoutFeedback>
)

const Login = ({route}) => {
    const UserData = route.params.User;
    // console.log(UserData);

    const { name , setName } = useContext(DataContext)

    const userList = [
        {
            id : 1,
            name : "Paul Prabhakaran", 
            email : 'paul@lintcloud.com' , 
            phone : '8787878787' , 
            password : '12345'
        },
        {
            id : 2, 
            name : "Vinish Kevin",
            email : 'vinish@lintcloud.com' , 
            phone : '8585858585' , 
            password : '12345'
        },
        {
            id : 3, 
            name : "Antony Donald",
            email : 'antony@lintcloud.com' , 
            phone : '8686868686' , 
            password : '12345'
        },
    ]

    const [userName , setUserName] = useState('');
    const [password , setPassword] = useState('');

    const history = useNavigation()

    const setAlert = (msg) =>{
        ToastAndroid.show(
            msg,
            ToastAndroid.SHORT
        )
    }

    const validateUser = () => {
        console.log("Success");
        Keyboard.dismiss();

        if((userName.trim()).length !== 0){
            if((password.trim().length !== 0)){
                const isValidUser = userList.filter((data) => 
                    (userName === data.email || userName === data.phone) && (password === data.password)
                );

                if(isValidUser.length !== 0){
                    setName(isValidUser[0].name)
                    setUserName('');
                    setPassword('');
                    history.navigate('Home' , { WelcomedBy : 'Jarvis' , WelcomeAt : 'Today' } )
                }
                else {
                    setAlert('Invalid Username Or Password')
                }
            }
            else {
                setAlert('Please Enter Password')
            }
        }
        else{
            setAlert('Please Enter Email / Phone')
        }

        
    }


    return (
        <DismissKeyboard>
            <View style={GlobalStyle.body}>
                <Image
                    style={styles.logo}
                    source={require('./assets/img/developer.png')}
                />
                <Text style={styles.text}>Login</Text>
                <View style={styles.loginDetailsView}>
                    <Text style={styles.label}>Email / Phone</Text>
                    <TextInput
                        style={styles.input}
                        value={userName}
                        onChangeText={(e) => setUserName(e)}
                    />
                    <Text style={styles.label}>Password</Text>
                    <TextInput
                        style={styles.input}
                        // secureTextEntry
                        value={password}
                        onChangeText={(e) => setPassword(e)}
                    />
                    <TouchableOpacity
                        style={styles.loginBtn}
                        onPress={() => validateUser()}
                    >
                        <Text style={{ fontSize: 15, color: 'white' }}>Login</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </DismissKeyboard>
    )
}

const styles = StyleSheet.create({
    logo:{
        width:125,
        height : 125
    },
    text : {
        fontSize : 25,
        fontWeight : 'bold'
    },
    loginDetailsView:{
        marginTop : 15
    },
    label : {
        fontSize : 17,
        marginBottom : 5,
        textAlign : 'center'
    },
    input : {
        borderWidth : 0.5,
        borderColor : 'lightgrey',
        paddingHorizontal:5,
        paddingVertical : 2,
        width : 170,
        marginBottom : 15
    },
    loginBtn:{
        backgroundColor : 'green',
        justifyContent : 'center',
        alignItems : 'center',
        textAlign : 'center',
        margin:25,
        padding : 8
    }
})

export default Login