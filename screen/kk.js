//21114f2cd264f67e94ee2acbce2fa59f409dd

import React, { useEffect, useState } from 'react'
import { View, Text, FlatList, StyleSheet, TouchableOpacity, ActivityIndicator,ScrollView ,SafeAreaView} from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Api from '../components/Api/MainApi'
import _ from 'lodash'
import { login } from '../components/Api/utilites';
import { StatusBar } from 'expo-status-bar';
import axios from "axios";

const StudentTable = ()=>{
    const [courses , setCourses] = React.useState([])
    const [admin , setAdmin] = React.useState([])



    React.useEffect(()=>{
        Api.post('datagate.php?type=login', {
            "email": "admin@email.com",
            "pass": 1234
        }).then((req) => {
            console.log(req.data)
            setAdmin(req.data)
            
        })
        setTimeout(() => {
            getCourses();  
        }, 3000);
        
    },[])

    const getCourses = ()=>{
        const uri='https://jsonplaceholder.typicode.com/photos'
        //const uri='http://54.93.207.96/server/datagate.php?type=GetStudentsAttendance'
    //     console.log('admintoken0',admin.token);
    //     fetch(uri,
    //         {method: "POST",
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify({
    //                  token: admin.token,
    //             lessonid : "2204"
    //     }) // <-- Post parameters        
    //   }
    //   ).then((res)=>res.json())
    //     .then((resjson)=>{
    //         console.log('json',resjson);
    //     })
        // console.log('555',admin);
        const params=JSON.stringify({
            "token": "211141057cdc1a77a744c9bca1c4567da1b2d",
                "lessonid" : "2204"
        })
        Api.post('datagate.php?type=GetStudentsAttendance',params,{
            "headers": {

                "content-type": "application/json",
                
                },
        })
        // .then((req)=>req.json())
        .then((reqjson)=>{
            console.log("resjson",reqjson.data)
            setCourses(reqjson.data)
        })
        //http://54.93.207.96/server/
        // axios.post('http://54.93.207.96/server/',{
        //     "token": "211141183232297eca883238cc8679433cfd3",
        //     "lessonid" : "2204"
        // }).then((req)=>{
        //     // console.log(req.data)
        //     setCourses(req.data)
        // })
    }

    return (
        <SafeAreaView>
            {/* {
                courses.map((course,index)=>{
                    console.log("c : ",course.firstname);
                    return <Text key={index}>{course.firstname}</Text>
                })
            } */}
            {
                console.log("1",courses)
            }
            <Text >{admin.token}</Text>
            <Text >osama</Text>

        </SafeAreaView>
    )
}

export default StudentTable;
