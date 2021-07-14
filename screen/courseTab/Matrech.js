import React, { useState } from "react";
import { View, Text } from "react-native";

import { List } from "react-native-paper";

const Matrech = ({ navigation}) => {
  const [expanded, setExpanded] = useState(true);

  const handlePress = () => setExpanded(!expanded);
  return (
    <View>
      <List.Section>
        <List.Accordion
          title="קורסים פעילים"
          titleStyle={{ position: "relative", left: 242, color: "black" }}
          left={(props) => {}}
        >
          <List.Item title="First item" />
          <List.Item title="Second item" />
          <List.Item title="Third item" onPress={()=>navigation.navigate('SingleCourse',{title:'Course test'})} />
        </List.Accordion>

        <List.Accordion
          title="קורסים לא פעילים"
          titleStyle={{ position: "relative", left: 220, color: "black" }}
          left={(props) => {}}
          expanded={expanded}
          onPress={handlePress}
        >
          <List.Item title="First item" />
          <List.Item title="Second item" />
        </List.Accordion>
      </List.Section>
    </View>
  );
};

export default Matrech;
