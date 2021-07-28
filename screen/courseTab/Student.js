import React, { useState } from 'react'
import { View, Text, TouchableOpacity, FlatList } from 'react-native'
import { I18nManager } from 'react-native';
import { List } from 'react-native-paper';

import { useNavigation } from '@react-navigation/native';



const Student = ({ courses }) => {
    const navigation = useNavigation();
    const [expanded, setExpanded] = useState(true);
    I18nManager.forceRTL(true);
    const handlePress = () => setExpanded(!expanded);
    return (
        <View>
            <List.Section>
                <List.Accordion
                    title="קורסים פעילים"
                    titleStyle={{ position: 'relative', left: 242, color: 'black' }}
                    left={props => { }}>

                    {courses["1"] && <FlatList
                        // style={styles.container}
                        data={courses["1"].courses}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={({ item }) => {
                            if (item.status == 1) {
                                return <TouchableOpacity>
                                    <List.Item
                                        titleStyle={{color:"#4a90e2",fontSize:30,fontWeight:'bold'}}
                                        title={item.coursename}
                                        onPress={() => navigation.navigate("SingleCourseForStudent",item)} />
                                </TouchableOpacity>
                            }
                        }}
                    // initialNumToRender={1}
                    // maxToRenderPerBatch={1}
                    // onEndReachedThreshold={0.5}

                    />}


                    {/* <List.Item title="test title" onPress={() => navigation.navigate('SingleCourseForStudent', { title: 'test' })} />
                    <List.Item title="First item" />
                    <List.Item title="Second item" /> */}

                </List.Accordion>

                <List.Accordion
                    title="קורסים לא פעילים"
                    titleStyle={{ position: 'relative', left: 220, color: 'black' }}
                    left={props => { }}
                    expanded={expanded}
                    onPress={handlePress}>
                   
                        {courses["1"] && <FlatList
                            // style={styles.container}
                            data={courses["1"].courses}
                            keyExtractor={(item, index) => index.toString()}
                            renderItem={({ item }) => {
                                if (item.status == 0) {
                                    return <TouchableOpacity>
                                        <List.Item 
                                            titleStyle={{color:"#4a90e2",fontSize:30,fontWeight:'bold'}}
                                            title={item.coursename}
                                            onPress={() => navigation.navigate("SingleCourseForStudent",item)}
                                        />
                                    </TouchableOpacity>
                                }
                            }}
                        // initialNumToRender={1}
                        // maxToRenderPerBatch={1}
                        // onEndReachedThreshold={0.5}

                        />}
                
                </List.Accordion>
            </List.Section>
        </View>
    )
}

export default Student
