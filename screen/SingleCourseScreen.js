import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
i;
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

// ...

const SingleCourseScreen = ({ route, navigation }) => {
  const { title } = route.params;
  React.useLayoutEffect(() => {
    navigation.setOptions({
      title,
    });
  }, []);
  return (
    <View style={styles.container}>
      <ScrollView indicatorStyle="#61B1FF">
        <View style={styles.section}>
          <Text style={styles.text}>תכנון מפגש הקרוב</Text>
          <Icon name="book-plus" size={30} color={"#61B1FF"} />
        </View>
        <View style={styles.section}>
          <Text style={styles.text}>מפגשים אישיים</Text>
          <Icon name="account-multiple" size={30} color={"#61B1FF"} />
        </View>
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
          <Text style={styles.text}>סטטיסטיקות</Text>
          <Icon name="poll" size={30} color={"#61B1FF"} />
        </View>

        <View style={styles.section}>
          <Text style={styles.text}>הכיתה שלי</Text>
          <Icon name="book-plus" size={30} color={"#61B1FF"} />
        </View>
        <View style={styles.section}>
          <Text style={styles.text}>הסטוריית מפגשים</Text>
          <Icon name="folder-open" size={30} color={"#61B1FF"} />
        </View>
        <View style={styles.section}>
          <Text style={styles.text}>סילבוס</Text>
          <Icon name="format-list-bulleted" size={30} color={"#61B1FF"} />
        </View>
        <View style={styles.section}>
          <Text style={styles.text}>מפתח הרשמה</Text>
          <Icon name="key" size={30} color={"#61B1FF"} />
        </View>
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 30,
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
  text: { fontSize: 20, marginRight: 15, color: "#61B1FF" },
});
export default SingleCourseScreen;
