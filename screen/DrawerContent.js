import React, { useState, useEffect, useContext } from 'react';
import { View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Html5Entities } from 'html-entities';
import {
    useTheme,
    Avatar,
    Title,
    Caption,
    Paragraph,
    Drawer,
    Text,
    TouchableRipple,
    Switch,
} from 'react-native-paper';
import {
    DrawerContentScrollView,
    DrawerItem
} from '@react-navigation/drawer';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import Ant from 'react-native-vector-icons/AntDesign';

// import {useSelector,useDispatch} from 'react-redux'
import { darkMode, login } from '../components/store/userAction';

import { AuthContext } from '../components/context/Context';
const DrawerContent = (props) => {

    const paperTheme = useTheme();
    const { SignOut, toggleTheme } = useContext(AuthContext)

    // useEffect(() => {
    //     ff()
    // }, [dispatch])
    //const [isDarkTheme, setIsDarkTheme] = useState(false)
    // const toggleTheme = () => {
    //     setIsDarkTheme(!isDarkTheme)
    // }

    return (

        <View style={{ flex: 1 }}>

            <View style={{ width: '100%', height: '35%', backgroundColor: '#4A90E2', justifyContent: 'center', alignItems: 'center', padding: '5%', position: 'relative' }}>
                <Image
                    style={{ width: 266, height: 200 }}
                    source={require('../images/appleseedslogo.png')}

                />

                {/* <Button title="osamaaa" onPress={() => console.log(props)} /> */}
            </View>

            <DrawerContentScrollView {...props}>
                <View style={styles.drawerContent}>

                <TouchableOpacity onPress={() => { props.navigation.navigate('Profile') }}>
                    <View style={styles.userInfoSection}>
                        <View style={{ flexDirection: 'row', marginBottom: 15,position:'relative',left:70 }}>
                        <Text style={{ fontSize: 20, fontWeight: '100', marginLeft: 15, marginTop: 13,position:'relative',right:20 }}>USerNAME</Text>
                            <Avatar.Image
                                source={require('../images/profile.png')}
                                size={50}
                            />
                        </View>
                    </View>
                    </TouchableOpacity>


                    <Drawer.Section style={styles.drawerSection}>
                        <DrawerItem
                            {...props}
                            icon={({ color, size }) => (
                                <Icon name="home-outline"
                                    style={{
                                        alignSelf: "center",
                                        position: "absolute",
                                        right: 5,
                                    }}
                                    color={color}
                                    size={size}
                                />
                            )}
                            onPress={() => { props.navigation.navigate('Home') }}
                            label={"\u05D3\u05E3 \u05D1\u05D9\u05EA"}
                        />

                        <DrawerItem
                            icon={({ color, size }) => (
                                <Ant name="book"
                                    style={{
                                        alignSelf: "center",
                                        position: "absolute",
                                        right: 5,
                                    }}
                                    color={color}
                                    size={size}
                                />
                            )}
                            onPress={() => { props.navigation.navigate('Courses') }}
                            // label="Courses"
                            label={"\u05E7\u05D5\u05E8\u05E1\u05D9\u05DD"}
                        />

                        <DrawerItem
                            icon={({ color, size }) => (
                                <Ant name="setting"
                                    style={{
                                        alignSelf: "center",
                                        position: "absolute",
                                        right: 5,
                                    }}
                                    color={color}
                                    size={size}
                                    onPress={() => { }}
                                />
                            )}
                            label={"\u05D4\u05D2\u05D3\u05E8\u05D5\u05EA"}
                            onPress={() => { props.navigation.navigate('Settings') }}
                        />
                    </Drawer.Section>
                    <Drawer.Section title="preference">
                        <TouchableRipple onPress={() => { toggleTheme() }}>
                            <View style={styles.preference}>
                                <Text>
                                    Dark Theme
                                </Text>
                                <View pointerEvents="none">
                                    <Switch value={paperTheme.dark} />
                                </View>

                            </View>
                        </TouchableRipple>
                    </Drawer.Section>
                </View>
            </DrawerContentScrollView>
            <Drawer.Section style={styles.bottomDrawerSection}>
                <DrawerItem
                    icon={({ color, size }) => (
                        <Icon name="exit-to-app"
                            style={{
                                alignSelf: "center",
                                position: "absolute",
                                right: 5,
                            }}
                            color={color}
                            size={size}

                        />
                    )}
                    onPress={() => { SignOut() }}
                    label={"\u05D4\u05EA\u05E0\u05EA\u05E7\u05D5\u05EA"}
                />
            </Drawer.Section>


        </View>

    )

    // return (
    //     <View style={{flex:1}}>
    //         {/* <DrawerContentScrollView > */}
    //             <View style={styles.drawerContent}>
    //                 <View style={styles.userInfoSection}>
    //                     <View style={{flexDirection:'row',marginTop: 15}}>
    //                         <Avatar.Image 
    //                             source={{
    //                                 uri: 'https://api.adorable.io/avatars/50/abott@adorable.png'
    //                             }}
    //                             size={50}
    //                         />
    //                         <View style={{marginLeft:15, flexDirection:'column'}}>
    //                             <Title style={styles.title}>John Doe</Title>
    //                             <Caption style={styles.caption}>@j_doe</Caption>
    //                         </View>
    //                     </View>

    //                     <View style={styles.row}>
    //                         <View style={styles.section}>
    //                             <Paragraph style={[styles.paragraph, styles.caption]}>80</Paragraph>
    //                             <Caption style={styles.caption}>Following</Caption>
    //                         </View>
    //                         <View style={styles.section}>
    //                             <Paragraph style={[styles.paragraph, styles.caption]}>100</Paragraph>
    //                             <Caption style={styles.caption}>Followers</Caption>
    //                         </View>
    //                     </View>
    //                 </View>

    //                 {/* <Drawer.Section style={styles.drawerSection}>
    //                     <DrawerItem 
    //                         icon={({color, size}) => (
    //                             <Icon 
    //                             name="home-outline" 
    //                             color={color}
    //                             size={size}
    //                             />
    //                         )}
    //                         label="Home"
    //                         onPress={() => {props.navigation.navigate('Home')}}
    //                     />
    //                     <DrawerItem 
    //                         icon={({color, size}) => (
    //                             <Icon 
    //                             name="account-outline" 
    //                             color={color}
    //                             size={size}
    //                             />
    //                         )}
    //                         label="Profile"
    //                         onPress={() => {props.navigation.navigate('Profile')}}
    //                     />
    //                     <DrawerItem 
    //                         icon={({color, size}) => (
    //                             <Icon 
    //                             name="bookmark-outline" 
    //                             color={color}
    //                             size={size}
    //                             />
    //                         )}
    //                         label="Bookmarks"
    //                         onPress={() => {props.navigation.navigate('BookmarkScreen')}}
    //                     />
    //                     <DrawerItem 
    //                         icon={({color, size}) => (
    //                             <Icon 
    //                             name="settings-outline" 
    //                             color={color}
    //                             size={size}
    //                             />
    //                         )}
    //                         label="Settings"
    //                         onPress={() => {props.navigation.navigate('SettingsScreen')}}
    //                     />
    //                     <DrawerItem 
    //                         icon={({color, size}) => (
    //                             <Icon 
    //                             name="account-check-outline" 
    //                             color={color}
    //                             size={size}
    //                             />
    //                         )}
    //                         label="Support"
    //                         onPress={() => {props.navigation.navigate('SupportScreen')}}
    //                     />
    //                 </Drawer.Section> */}
    //                 {/* <Drawer.Section title="Preferences">
    //                     <TouchableRipple onPress={() => {toggleTheme()}}>
    //                         <View style={styles.preference}>
    //                             <Text>Dark Theme</Text>
    //                             <View pointerEvents="none">
    //                                 <Switch value={paperTheme.dark}/>
    //                             </View>
    //                         </View>
    //                     </TouchableRipple>
    //                 </Drawer.Section> */}
    //             </View>
    //         {/* </DrawerContentScrollView> */}
    //         {/* <Drawer.Section style={styles.bottomDrawerSection}>
    //             <DrawerItem 
    //                 icon={({color, size}) => (
    //                     <Icon 
    //                     name="exit-to-app" 
    //                     color={color}
    //                     size={size}
    //                     />
    //                 )}
    //                 label="Sign Out"
    //                 onPress={() => {signOut()}}
    //             />
    //         </Drawer.Section> */}
    //     </View>
    // )
}

const styles = StyleSheet.create({
    drawerContent: {
        flex: 1,
    },
    userInfoSection: {
        paddingLeft: 20,
        position: 'relative',
        top: -15,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        borderStyle: 'solid'

    },
    title: {
        fontSize: 16,
        marginTop: 3,
        fontWeight: 'bold',
    },
    caption: {
        fontSize: 14,
        lineHeight: 14,
    },
    row: {
        marginTop: 20,
        flexDirection: 'row',
        alignItems: 'center',
    },
    section: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 15,
    },
    paragraph: {
        fontWeight: 'bold',
        marginRight: 3,
    },
    drawerSection: {
        marginTop: 15,
        // justifyContent:'',
        // alignItems: 'flex-end',
    },
    bottomDrawerSection: {
        marginBottom: 15,
        borderTopColor: '#f4f4f4',
        borderTopWidth: 1
    },
    preference: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 12,
        paddingHorizontal: 16,
    },
});


export default DrawerContent
