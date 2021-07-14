import React,{useContext,useEffect,useState} from 'react'
import { View, Text, TouchableOpacity, TextInput, StyleSheet, SafeAreaView, ScrollView } from 'react-native'
import { global } from '../styles/global'
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import {getMyProfileByToken} from '../components/Api/utilites'
 import { AsyncStorage } from 'react-native';

import { AuthContext } from '../components/context/Context';



const Profile =() => {
    const { getUserInfo } = useContext(AuthContext)
    // const {loginState,dispatch}=useContext(AuthContext)
    const [token,setToken] = useState(null)
    const [userInfo,setUserInfo]=useState(getUserInfo)
    useEffect(() => {
        setTimeout(() => {
            getToken()
        }, 3000);

        // setUserInfo(getMyProfileByToken(token))      

        
    }, [])
    const getToken=async()=>{
        const osama=await AsyncStorage.getItem('userToken')
        setToken(osama)
    }
    

    return (
        <SafeAreaView>
            <ScrollView>
                {
                    console.log("userInfo",userInfo)
                }
            {userInfo?
                <View style={[global.container, { backgroundColor: 'rgba(21, 69, 125, 1) 62%)', height: '100%' }]}>

                    <TouchableOpacity style={{ justifyContent: 'center', alignItems: 'center' }} onPress={() => { props.navigation.navigate('Profile') }}>
                        
                        <View>
                            <View>{
                                 console.log(userInfo._W)

                                }

                                <SimpleLineIcons name="plus"
                                    style={{
                                        // alignSelf: "center",
                                        // position: "absolute",
                                        // right: 5,
                                        justifyContent: 'center',
                                        alignItems: 'center'

                                    }}
                                    color='#fff'
                                    size={100}
                                />
                            </View>
                        </View>
                    </TouchableOpacity>
                    <Text style={{ textAlign: 'center', marginTop: 15, fontSize: 15 }}>הוסיפו תמונה</Text>

                    <Text style={{ textAlign: 'center', marginTop: 5, fontSize: 20, borderBottomColor: 'white', borderBottomWidth: 1, paddingBottom: 5 }}>אוסמה אזברגה</Text>

                    <View style={styles.action}>

                        <TextInput
                            placeholder="מייל"
                            value={userInfo.email}
                            style={styles.textInput}
                        />
                        <Fontisto
                            name="email"
                            color="white"
                            size={20}
                        />
                    </View>

                    <View style={styles.action}>

                        <TextInput
                            placeholder="טלפון"
                            style={styles.textInput}
                            value={"osama"}
                        />
                        <Ionicons
                            name="phone-portrait-outline"
                            color="white"
                            size={20}
                        />
                    </View>

                    <View style={styles.action}>

                        <TextInput
                            placeholder="טלפון נוסף"
                            value={"osama"}
                            style={styles.textInput}
                        />
                        <Ionicons
                            name="phone-portrait-outline"
                            color="white"
                            size={20}
                        />
                    </View>

                    <View style={styles.action}>

                        <TextInput
                            placeholder="עיר"
                            value={userInfo.city}
                            style={styles.textInput}
                        />
                        <MaterialIcons
                            name="place"
                            color="white"
                            size={20}
                        />
                    </View>

                    <View style={styles.action}>

                        <TextInput
                            placeholder="כתובת"
                            value={"osama"}
                            style={styles.textInput}
                        />
                        <MaterialIcons
                            name="place"
                            color="white"
                            size={20}
                        />
                    </View>

                    <View style={styles.action}>

                        <TextInput
                            placeholder="תאריך לידה"
                            value={"osama"}
                            style={styles.textInput}
                        />
                        <Fontisto
                            name="date"
                            color="white"
                            size={20}
                        />
                    </View>

                    <View style={styles.action}>

                        <TextInput
                            placeholder="מספר תעודת זהות"
                            value={userInfo.userid}
                            style={styles.textInput}
                        />
                        <AntDesign
                            name="idcard"
                            color="white"
                            size={20}
                        />
                    </View>

                    <View style={styles.action}>

                        <TextInput
                            placeholder="דת"
                            value={"osama"}
                            style={styles.textInput}
                        />
                        <Ionicons
                            name="person-outline"
                            color="white"
                            size={20}
                        />
                    </View>

                    <View style={styles.action}>

                        <TextInput
                            placeholder="מין"
                            value={"osama"}
                            style={styles.textInput}
                        />
                        <Fontisto
                            name="transgender"
                            color="white"
                            size={20}
                        />
                    </View>

                    <View style={styles.action}>

                        <TextInput
                            placeholder="שם האב"
                            value={"osama"}
                            style={styles.textInput}
                        />
                        <Ionicons
                            name="person-outline"
                            color="white"
                            size={20}
                        />
                    </View>

                    <View style={styles.action}>

                        <TextInput
                            placeholder="שם משפחה"
                            value={userInfo.lastname}
                            style={styles.textInput}
                        />
                        <Ionicons
                            name="person-outline"
                            color="white"
                            size={20}
                        />
                    </View>
                    <TouchableOpacity style={{ justifyContent: 'center', alignItems: 'center' }} onPress={() => { props.navigation.navigate('Profile') }}>
                        <View>
                            <View style={{
                                borderWidth:3,
                                borderColor:'white',
                                borderRadius:50,
                                width:70,
                                padding:10,
                                justifyContent:'center',
                                alignItems:'center',
                            }}>

                                <Entypo name="edit"
                                    style={{
                                        // alignSelf: "center",
                                        // position: "absolute",
                                        // right: 5,
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        // marginTop:10,

                                    }}
                                    color='#fff'
                                    size={40}
                                />
                            </View>
                        </View>
                    </TouchableOpacity>
                </View>
            :<Text>loading</Text>} 
            </ScrollView>
        </SafeAreaView>
                                
    )
}

const styles = StyleSheet.create({
    textInput: {
        flex: 1,
        marginTop: Platform.OS === 'ios' ? 0 : -5,
        paddingRight: 3,
        color: 'white',
        textAlign: 'right',
        borderBottomWidth: 1,
        borderBottomColor: 'white',
        marginRight: 7
    },
    action: {
        flexDirection: 'row',
        marginTop: 3,
        padding: 10,
        width: 360


    },
})

export default Profile
