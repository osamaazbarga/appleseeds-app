import React, { useState, useEffect, useContext } from 'react'
import { Alert,ImageBackground, Platform, TextInput, TouchableOpacity, View, Text, Button, Dimensions, StyleSheet } from 'react-native'
import Fontisto from 'react-native-vector-icons/Fontisto';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { LinearGradient } from 'expo-linear-gradient';
import Api from '../components/Api/MainApi'
import { AuthContext } from '../components/context/Context';
const Login = ({ navigation }) => {
    const [data, setData] = useState({
        email: '',
        password: '',
        check_textInputChange: false,
        secureTextEntry: true,
        isValidUser:true,
        isValidPassword:true,

    })
    const { SignIn } = useContext(AuthContext)
    
    const loginHandle=(username,password)=>{
        // const founduser=User.filter(item=>{
        //     return username==item.username&&password==item.password;
        // })
        // if (founduser.length===0){
        //     Alert.alert('incorrent',[{text:'OKAY'}])
        // }
        console.log(username,password);
        SignIn(username,password)   
        // SignIn(founduser)
    }

    useEffect(() => {
        // loginUser()
    }, [])

    const textInputChange = (val) => {
        if (val.trim().length >= 4) {
            setData({
                ...data,
                email: val,
                check_textInputChange: true,
                isValidUser:true
            })
        }
        else {
            setData({
                ...data,
                email: val,
                check_textInputChange: false,
                isValidUser:false
            })
        }

    }
    const handlePasswordChange = (val) => {
        setData({
            ...data,
            password: val
        })

    }
    const updateSecureTextEntry = () => {
        setData({
            ...data,
            secureTextEntry: !data.secureTextEntry
        })
    }


    const handleValidUser=(val)=>{
        if(val.length>=4){
            setData({
                ...data,isValidUser:true
            })
        }
        else setData({
            ...data,
            isValidUser:false
        })
    }

    const loginUser = async () => {

        const req = await Api.post('datagate.php?type=login', {
            email: data.email,
            pass: data.password

        })

        // const token = mapStringFromApi(req.data)
        console.log(req.data);
        // return token





    }
    return (
        <View style={styles.container}>
            <ImageBackground source={require('../images/bg_psd5.jpg')} style={styles.image}>
                <View style={styles.header}>
                    <View style={styles.action}>
                        <Fontisto
                            name="email"
                            color="white"
                            size={20}
                        />
                        <TextInput
                            placeholder="מייל"
                            style={styles.textInput}
                            autoCapitalize="none"
                            onChangeText={(val) => textInputChange(val)}
                            onEndEditing={(e)=>{handleValidUser(e.nativeEvent.text)}}
                        />
                        {data.check_textInputChange ?

                            <Feather
                                name="check-circle"
                                color="#33ff33"
                                size={20}
                            />

                            : null}


                    </View>
                    {
                        data.isValidUser?null:
                        <Text style={styles.errorMsg}>User Name error</Text>
                    }
                    <View style={styles.action}>
                        <Feather
                            name="lock"
                            color="white"
                            size={20}
                        />
                        <TextInput
                            placeholder="סיסמה"
                            secureTextEntry={data.secureTextEntry ? true : false}
                            style={styles.textInput}
                            autoCapitalize="none"
                            onChangeText={(val) => handlePasswordChange(val)}

                        />
                        <TouchableOpacity onPress={updateSecureTextEntry}>
                            {data.secureTextEntry ?
                                <Feather
                                    name="eye-off"
                                    color="#E9E9E9"
                                    size={20}
                                />
                                :
                                <Feather
                                    name="eye"
                                    color="#E9E9E9"
                                    size={20}
                                />}
                        </TouchableOpacity>



                    </View>
                    <View style={styles.button}>
                        {data.password && data.email ?
                            <TouchableOpacity
                                // onPress={()=>navigation.navigate('Home')}
                                onPress={() => { loginHandle(data.email,data.password) }}
                                style={styles.signUp}
                            >
                                <View style={[styles.signIn, { borderColor: 'white' }]}>
                                    <Text style={[styles.textSign, { color: 'white' }]}>כניסה</Text>
                                </View>
                            </TouchableOpacity>
                            :

                            <View style={[styles.signIn, { borderColor: 'gray' }]}>
                                <Text style={[styles.textSign, { color: 'gray' }]}>כניסה</Text>
                            </View>

                        }
                    </View>
                    <TouchableOpacity
                        // onPress={()=>navigation.navigate('Home')}
                        onPress={() => { }}
                        style={styles.signUp}
                    >
                        <Text style={[styles.textSignUp, { marginBottom: 10 }]}>משתמש חדש</Text>
                        <View>
                            <AntDesign
                                name="down"
                                size={20}
                                color="white"
                            />
                        </View>
                    </TouchableOpacity>
                </View>
            </ImageBackground>

        </View>
    )
}

const { height } = Dimensions.get("screen")
const height_logo = height * 0.28
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column"
    },
    image: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center'
    },
    header: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white'

    },
    text: {
        color: "white",
        fontSize: 42,
        fontWeight: "bold",
        textAlign: "center",
        backgroundColor: "#000000a0"
    },
    text_header: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 30
    },
    text_footer: {
        color: '#05375a',
        fontSize: 18
    },
    action: {
        flexDirection: 'row',
        marginTop: 20,

        borderWidth: 1,
        borderColor: '#f2f2f2',
        borderRadius: 15,
        padding: 10,
        width: 350


    },
    actionError: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#FF0000',
        paddingBottom: 5
    },
    textInput: {
        flex: 1,
        marginTop: Platform.OS === 'ios' ? 0 : -5,
        paddingLeft: 10,
        color: '#05375a',
        textAlign: 'left',
    },
    errorMsg: {
        color: '#FF0000',
        fontSize: 14
    },
    button: {
        alignItems: 'center',
        marginTop: 50,

    },
    signIn: {
        width: 300,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 2,
        borderRadius: 100,
    },
    signUp: {
        width: 300,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        top: 100,


    },
    textSign: {
        fontSize: 20,
        fontWeight: 'bold'

    },
    textSignUp: {
        fontSize: 15,

        color: 'white'


    }
})
export default Login
