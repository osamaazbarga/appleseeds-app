import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Profile from "../screen/Profile";
import Home from "../screen/Home";
import Setting from "../screen/Setting";
import Icon from "react-native-vector-icons/Ionicons";
import Courses from "../screen/Courses";
import SingleCourse from "../screen/SingleCourseScreen";

// const Stack = createStackNavigator();
const screenOptionStyle = {
  headerStyle: {
    backgroundColor: "#4a90e2",
  },
  headerTintColor: "white",
  headerTitleStyle: {
    fontWeight: "bold",
    textAlign: "left",
  },
};

const Stack = createStackNavigator();

const ProfileStack = ({ navigation }) => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen
        name="Profile"
        component={Profile}
        options={{
          headerTitleStyle: { alignSelf: "flex-end" },
          title: "הפרופיל שלי",
          headerRight: () => (
            <Icon.Button
              name="ios-menu"
              size={25}
              backgroundColor="#4a90e2"
              onPress={() => {
                navigation.openDrawer();
              }}
            ></Icon.Button>
          ),
        }}
      />
    </Stack.Navigator>
  );
};
// const SingleCourseStack = ({ navigation }) => {
//   return (
//     <Stack.Navigator screenOptions={screenOptionStyle}>
//       <Stack.Screen
//         name="SingleCourse"
//         component={SingleCourseScreen}
//         options={{
//           headerTitleStyle: { alignSelf: "flex-end" },
//           title: "דף בית",
//           headerRight: () => (
//             <Icon.Button
//               name="ios-menu"
//               size={25}
//               backgroundColor="#4a90e2"
//               onPress={() => {
//                 navigation.openDrawer();
//               }}
//             ></Icon.Button>
//           ),
//         }}
//       />
//     </Stack.Navigator>
//   );
// };

const CoursesStack = ({ navigation }) => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen
        name="Courses"
        component={Courses}
        options={{
          headerTitleStyle: { alignSelf: "flex-end" },
          title: "קורסים",
          headerRight: () => (
            <Icon.Button
              name="ios-menu"
              size={25}
              backgroundColor="#4a90e2"
              onPress={() => {
                navigation.openDrawer();
              }}
            ></Icon.Button>
          ),
        }}
      />
      <Stack.Screen
        name="SingleCourse"
        component={SingleCourseScreen}
        options={{
          headerTitleStyle: { alignSelf: "flex-end" },
          title: "קורסים",
          headerRight: () => (
            <Icon.Button
              name="ios-menu"
              size={25}
              backgroundColor="#4a90e2"
              onPress={() => {
                navigation.openDrawer();
              }}
            ></Icon.Button>
          ),
        }}
      />
    </Stack.Navigator>
  );
};

const SettingsStack = ({ navigation }) => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen
        name="Settings"
        component={Setting}
        options={{
          headerTitleStyle: { alignSelf: "flex-end" },
          title: "הגדרות",
          headerRight: () => (
            <Icon.Button
              name="ios-menu"
              size={25}
              backgroundColor="#4a90e2"
              onPress={() => {
                navigation.openDrawer();
              }}
            ></Icon.Button>
          ),
        }}
      />
    </Stack.Navigator>
  );
};
const HomeStack = ({ navigation }) => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          headerTitleStyle: { alignSelf: "flex-end" },
          title: "דף בית",
          headerRight: () => (
            <Icon.Button
              name="ios-menu"
              size={25}
              backgroundColor="#4a90e2"
              onPress={() => {
                navigation.openDrawer();
              }}
            ></Icon.Button>
          ),
        }}
      />
    </Stack.Navigator>
  );
};

export {
  HomeStack,
  SettingsStack,
  ProfileStack,
  CoursesStack,
  SingleCourseStack,
};
