import React,{useEffect,useState} from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import Artik from '../../images/icons/happy_artik.svg';
import Sun from '../../images/icons/sun_surprised.svg';
//import {getCourses} from '../../components/Api/utilites'

const SingleCourse = ({route,navigation}) => {
    // const [courses, setCourses] = useState([])
    useEffect(() => {
        console.log(route)
    }, [])
    // const getCoursesFromApi=async()=>{
    //     getCourses(await AsyncStorage.getItem('userToken'))
    //     .then((res)=>{
    //         console.log(res);
    //     })
    // }

    return (
        <View style={styles.container}>
            <ScrollView indicatorStyle="#61B1FF">
                <View
                    style={{
                        JustifyContent: "center",
                        alignItems: "center",
                        paddingTop: 30,
                    }}
                >
                    <Text style={styles.title}>מידע כללי</Text>
                </View>

                <View style={styles.section}>
                    <Text style={styles.text}>היסטוריית מפגשים</Text>
                    <Icon name="folder-open" size={30} color={"#61B1FF"} />
                </View>
                <View style={styles.section}>
                    <Text style={styles.text}>סילבוס</Text>
                    <Icon name="format-list-bulleted" size={30} color={"#61B1FF"} />
                </View>

                <View
                    style={{
                        JustifyContent: "center",
                        alignItems: "center",
                        paddingTop: 30,
                    }}
                >
                    <Text style={styles.title}>הפעילות שלי</Text>
                    <View style={styles.myactivities}>
                        <Text style={[styles.title, { fontSize: 20 }]}>הנוכחות שלי במקצוע</Text>
                        <View style={{ flexDirection: 'row-reverse' }}>
                            <View style={styles.numbers}>
                                <Text style={styles.boldNumbers}>30</Text>
                                <Text style={styles.textUnderNumbers}>שיעורים</Text>
                            </View>
                            <Text style={styles.textBetween}>מתוך</Text>
                            <View style={styles.numbers}>
                                <Text style={styles.boldNumbers}>31</Text>
                                <Text style={styles.textUnderNumbers}>שיעורים עד כה</Text>
                            </View>



                        </View>


                        <Artik style={{marginTop:30,marginBottom:30}} height={150} width={300}/>

                        {/* <SvgUri
                            width="100%"
                            height="100%"
                            uri="http://thenewcode.com/assets/images/thumbnails/homer-simpson.svg"
                        /> */}

                        <Text style={styles.lastText}>כל הכבוד על ההתמדה! נתראה בשיעור הבא! (:</Text>




                    </View>
                </View>

                <View
                    style={{
                        JustifyContent: "center",
                        alignItems: "center",
                        paddingTop: 30,
                    }}
                >
                    <Text style={styles.title}>רמת המעורבות שלי</Text>
                    <View style={styles.myactivities}>
                        <Text style={[styles.title, { fontSize: 20 }]}>הנוכחות שלי במקצוע</Text>
                        <View style={{ flexDirection: "row-reverse" }}>
                            <View style={styles.numbers}>
                                <Text style={styles.boldNumbers}>30</Text>
                                <Text style={styles.textUnderNumbers}>מילים</Text>
                            </View>
                            <Text style={styles.textBetween}>מתוך</Text>
                            <View style={styles.numbers}>
                                <Text style={styles.boldNumbers}>31</Text>
                                <Text style={styles.textUnderNumbers}>מילים סך הכל</Text>
                            </View>



                        </View>


                        <Sun style={{marginTop:30,marginBottom:30}} height={150} width={300}/>

                        {/* <SvgUri
                            width="100%"
                            height="100%"
                            uri="http://thenewcode.com/assets/images/thumbnails/homer-simpson.svg"
                        /> */}

                        <Text style={styles.lastText}>לא שמענו ממך הרבה זמן! המשובים הם המקום להביע את דעתך ואת הרגשתך לגבי השיעור והמורים. נשמח לקרוא את התגובות שלך במשוב הבא (:</Text>




                    </View>
                </View>

            </ScrollView>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    title: {
        fontSize: 30,
        color: '#15457d',
    },
    section: {
        paddingRight: 40,

        paddingVertical: 30,
        flexDirection: "row",
        justifyContent: "flex-end",
        alignItems: "center",
        borderBottomColor: "#C7E9ED",
        borderBottomWidth: 1,
    },
    myactivities: {
        height: "100%",
        width: "90%",
        backgroundColor: "white",
        borderRadius: 10,
        elevation: 5,
        padding: 15,
        paddingTop: 40,

        shadowColor: '#000',
        shadowOffset: { width: 5, height: 5 },
        shadowOpacity: 0.05,
        shadowRadius: 2,

        flex: 1,
        // justifyContent: 'center',
        alignItems: 'center',

    },
    numbers: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        color: '#15457d',
    },
    boldNumbers: {
        fontSize: 80,
        color: '#15457d',
    },
    textBetween: {
        margin: 10,
        marginTop: 35,
        fontSize: 25,
        color: '#15457d',
        textAlign:'center'
    },
    textUnderNumbers: {
        fontSize: 17,
        fontWeight: "bold",
        textAlign: 'center',
        color: '#15457d',
    },
    lastText:{
        // marginTop: 35,
        fontSize: 25,
        color: '#15457d',
        textAlign:'center'
    },
    text: { fontSize: 20, marginRight: 15, color: "#61B1FF" },
});

export default SingleCourse
