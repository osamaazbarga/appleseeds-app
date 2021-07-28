import React from 'react'
import { View, Text } from 'react-native'
import { Button } from 'react-native'
import {global} from '../styles/global'
// import {useTheme} from '@react-navigation/native'

const Home = ({navigation}) => {
    const goToProfile=()=>{
        console.log("osama");
        navigation.navigate("SingleCourseForStudent")
    }
    return (
    //     <NavigationContainer>
    //         <MyDrawer/>
    //   </NavigationContainer>
    <View style={global.container}>
        <Text>Home</Text>
        <Button title="Go to SingleCourse" onPress={()=>goToProfile()}/>
    </View>
    )
}

export default Home
