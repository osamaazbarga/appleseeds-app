import React,{useEffect,useState} from 'react'
import { View, Text } from 'react-native'
import {global} from '../styles/global'
import CoursesTabs from './CoursesTabs'
import {getCourses} from '../components/Api/utilites'
import { AsyncStorage } from 'react-native';

const Courses = ({navigation}) => {
    const [courses, setCourses] = useState([])
    useEffect(() => {
        getCoursesFromApi()
        // console.log(navigation);
    }, [])
    const getCoursesFromApi=async()=>{
        getCourses(await AsyncStorage.getItem('userToken'))
        .then((res)=>{
            console.log(res)
            setCourses(res.data);
        })
    }
    return (
        <CoursesTabs courses={courses}/>
    )
}

export default Courses
