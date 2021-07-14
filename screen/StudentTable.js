//21114f2cd264f67e94ee2acbce2fa59f409dd
import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, ActivityIndicator,ScrollView ,SafeAreaView} from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Api from '../components/Api/MainApi'
import _ from 'lodash'
import { StatusBar } from 'expo-status-bar';
// import axios from "axios";
const StudentTable = ()=>{
    const [courses , setCourses] = useState([]);
    useEffect(()=>{
        getCourses();
    },[])
    const getCourses = ()=>{
        Api.post('datagate.php?type=GetStudentsAttendance',{
                "token": "21114eb19cc0d8ec6a7d17533e8c5c9e37454",
                "lessonid" : "2204"
        }).then((req)=>{
            console.log(req.data.firstname)
            setCourses(req.data)
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
            {
                console.log(courses.firstname)
                // !courses?<Text>loading</Text>: courses.map((course,index)=>{
                //     console.log("c : ",course.firstname);
                //     return <Text key={index}>{course.firstname}</Text>
                // })
                
                // <FlatList
                //     data={courses}
                //     // style={{ width: "90%" }}
                //     // keyExtractor={(item, index) => index.toString()}
                //     // // ListHeaderComponent={tableHeader}
                //     // // stickyHeaderIndices={[0]}
                //     // onEndReached={handleReloadMore}
                //     // ListFooterComponent={footerList}
                //     renderItem={({ item, index }) => (
                        

                //             <View >
                //                 {/* <Text>UserName : {item.firstname}</Text>
                //             <Text>Score : {item.lastname}</Text> */}
                //                 {/* <Text>{toString("05e7")}</Text> */}
                //                 {/* <Text>{console.log(decodeURI(`${item.firstname}`))}</Text> */}
                //                 {/* </TouchableOpacity><View style={{ height: 30, width: "100%", backgroundColor: "red", borderWidth: 10, justifyContent: "center", alignItems: "center" }}> */}
                //                 <Text style={{ padding: 10 }}>{item.firstname}</Text>
                //                 {/* <Text style={{ padding: 10 }}>{decodeURI(item.firstname)}</Text>
                //                 <Text style={{ padding: 10 }}>Azbarga</Text>
                //                 <Text style={{ padding: 10 }}>{item.phone}</Text>
                //                 <Text style={{ padding: 10 }}>{item.birthday}</Text> */}




                //                 {/* <Text>{item.lastname}</Text>
                //                 <Text>{item.lastname}</Text> */}

                //                 {/* </View> */}

                //             </View>
                        
                //         // <View style={{ ...styles.tableRow, backgroundColor: index % 2 == 1 ? "#F0FBFC" : "white" }}>
                //         //     <Text style={{ ...styles.columnRowTxt, fontWeight: "bold" }}>{item.userid}</Text>
                //         //     <Text style={styles.columnRowTxt}>{item.firstname}</Text>
                //         //     <Text style={styles.columnRowTxt}>{item.lastname}</Text>
                //         //     <Text style={styles.columnRowTxt}>{item.birthday}</Text>
                //         //     <Text style={styles.columnRowTxt}>{item.Age}</Text>
                //         // </View>

                //     )}
                // />


            }
        </SafeAreaView>
    )
}
export default StudentTable;