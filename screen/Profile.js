import React, { useContext, useEffect, useState } from 'react'
import { View, Text, TouchableOpacity, TextInput, StyleSheet, SafeAreaView, ScrollView } from 'react-native'
import { global } from '../styles/global'
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import { getMyProfileByToken,getCities,getGenderByGenderId, getNetaStudentDetails, getUserProfileById,getGenders } from '../components/Api/utilites'
import { AsyncStorage } from 'react-native';

import { AuthContext } from '../components/context/Context';



const Profile = () => {
    const { getUserInfo } = useContext(AuthContext)
    // const {loginState,dispatch}=useContext(AuthContext)
    const [token, setToken] = useState(null)
    const [userIdState, setUserId] = useState(null)

    const [userInfo, setUserInfo] = useState([])
    const [userGender, setUserGender] = useState(null)
    const [userCity, setUserCity] = useState([])

    useEffect(() => {
        setTimeout(() => {
            // console.log(getUserInfo);
            // getToken()
            getProfileData()
        }, 3000);

        // setUserInfo(getMyProfileByToken(token))      


    }, [])
    const getProfileData = async () => {
        getMyProfileByToken(await AsyncStorage.getItem('userToken'))
            .then((res) => {
                // setUserInfo({
                //     ...userInfo,
                //     email: res.data.email,
                //     firstname: res.data.firstname,
                //     lastname: res.data.lastname,
                //     image: res.data.image,
                //     userid: res.data.userid,

                // })
                // setUserId(res.data.userid)
                // console.log("res data", res.data)
                return res.data
            }).then(async (req) => {
                getUserProfileById(await AsyncStorage.getItem('userToken'), req.userid).then((res) => {
                    setUserInfo({
                        ...userInfo,
                        email: res.data.profile.email,
                        firstname: res.data.profile.firstname,
                        lastname: res.data.profile.lastname,
                        image: res.data.profile.image,
                        userid: res.data.profile.userid,

                        "firstnameinarabic": res.data.firstnameinarabic,
                        "lastnameinarabic": res.data.profile.lastnameinarabic,
                        "tznumber": res.data.profile.tznumber,
                        "phone": res.data.profile.phone,
                        "phone2": res.data.profile.phone2,
                        "phone2owner": res.data.profile.phone2owner,
                        "address": res.data.profile.address,
                        "cityid": res.data.profile.cityid,
                        "birthday": res.data.profile.birthday,
                        "genderid": res.data.profile.genderid,
                        "religionid": res.data.profile.religionid,

                        "FatherName": res.data.profile.FatherName,
                        "MotherName": res.data.profile.MotherName,


                    })
                    // console.log("get profile data", res.data)
                })
                return userInfo
                // console.log("req",req);
            })
            // .then(async(res2)=>{
            //     getGenders(await AsyncStorage.getItem('userToken')).then((res)=>{
            //         return res.data.map((gender)=>{
            //             if(gender.genderid==res2.genderid){
            //                 // setUserInfo({...res2,gendername:gender.name})
            //                 setUserGender(gender)
            //             }
            //         })
            //     })
            //     return userInfo
            // })
            // .then(async(res3)=>{
            //     getCities(await AsyncStorage.getItem('userToken')).then((res)=>{
            //         // console.log(res.data);
            //         return res.data.map((city)=>{
            //             if(city.cityid==userInfo.cityid){
            //                 console.log(city);
            //                 // setUserInfo({...res2,cityname:city.name})
            //                 setUserCity(city)
            //             }
            //         })
            //     })
            //     return userInfo
            // })
        // getNetaStudentDetails(await AsyncStorage.getItem('userToken')).then((res) => {
        //     setUserInfo({
        //         ...userInfo,
        //         FatherName: res.data[0].FatherName,
        //         MotherName: res.data[0].MotherName,
        //     })
        // })
        // if(userInfo.userid){
        // getUserProfileById(await AsyncStorage.getItem('userToken'),userInfo.userid).then((res) => {
        //     // setUserInfo({
        //     //     ...userInfo,


        //     // })
        //     console.log("get profile data",res.data)
        // })
        // }
    }
    // const getToken=async()=>{
    //     setUserInfo(getUserInfo)
    //     // const osama=await AsyncStorage.getItem('userToken')
    //     // console.log("token osama",osama);
    //     // setToken(osama)
    // }


    return (
        <SafeAreaView>
            <ScrollView>
                {userInfo &&

                    <View style={[global.container, { backgroundColor: 'rgba(21, 69, 125, 1) 62%)', height: '100%' }]}>
                        {
                            // console.log("get user info", userInfo,"gender",userGender,"city",userCity)


                        }
                        <TouchableOpacity style={{ justifyContent: 'center', alignItems: 'center' }} onPress={() => { props.navigation.navigate('Profile') }}>

                            <View>
                                <View>

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
                                value={userInfo.phone}
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
                                value={userInfo.phone2}
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
                                value={userInfo.cityid}
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
                                value={userInfo.address}
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
                                value={userInfo.birthday}
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
                                value={userInfo.tznumber}
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
                                value={userInfo.religionid}
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
                                value={userInfo.genderid}
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
                                value={userInfo.FatherName}
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
                                    borderWidth: 3,
                                    borderColor: 'white',
                                    borderRadius: 50,
                                    width: 70,
                                    padding: 10,
                                    justifyContent: 'center',
                                    alignItems: 'center',
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
                }
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
