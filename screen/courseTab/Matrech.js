import React, { useState } from "react";
import { View, Text, TouchableOpacity, FlatList } from 'react-native'
import { useNavigation } from '@react-navigation/native';

import { List } from "react-native-paper";

const Matrech = ({ courses }) => {
  const navigation = useNavigation();

  const [expanded, setExpanded] = useState(true);

  const handlePress = () => setExpanded(!expanded);
  return (
    <View>
      <List.Section>
        <List.Accordion
          title="קורסים פעילים"
          titleStyle={{ position: "relative", left: 242, color: "black" }}
          left={(props) => { }}
        >
            {courses["2"] && <FlatList
              // style={styles.container}
              data={courses["2"].courses}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({ item }) => {
                if (item.status == 1) {
                  return <TouchableOpacity><List.Item 
                    title={item.coursename} 
                    onPress={() => navigation.navigate("SingleCourseForGuide",item)} />
                    </TouchableOpacity>
                }
              }}
              // initialNumToRender={1}
              // maxToRenderPerBatch={1}
              // onEndReachedThreshold={0.5}

            />}
          
        </List.Accordion>

        <List.Accordion
          title="קורסים לא פעילים"
          titleStyle={{ position: "relative", left: 220, color: "black" }}
          left={(props) => { }}
          expanded={expanded}
          onPress={handlePress}
        >
          <TouchableOpacity>
            {courses["2"] && <FlatList
              // style={styles.container}
              data={courses["2"].courses}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({ item }) => {
                if (item.status == 0) {
                  return <List.Item title={item.coursename} />
                }
              }}
              // initialNumToRender={1}
              // maxToRenderPerBatch={1}
              // onEndReachedThreshold={0.5}

            />}
          </TouchableOpacity>

        </List.Accordion>
      </List.Section>
    </View>
  );
};

export default Matrech;
