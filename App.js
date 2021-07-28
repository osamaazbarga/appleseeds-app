import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect, useMemo,useReducer } from 'react';
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';

import { AuthContext } from './components/context/Context'
import {login,getMyProfileByToken} from './components/Api/utilites'
// import AsyncStorage from '@react-native-community/async-storage';
import { AsyncStorage } from 'react-native';
// import rootReducer from './components/reducers'
//store
import {
  NavigationContainer,
  DarkTheme as NavigationDarkTheme,
  DefaultTheme as NavigationDefaultTheme
} from '@react-navigation/native';

import {
  Provider as PaperProvider,
  DarkTheme as PaperDarkTheme,
  DefaultTheme as PaperDefaultTheme,
} from 'react-native-paper'

import { Table, TableWrapper, Row } from 'react-native-table-component';
import MyDrawer from './routes/MyDrawer';
import MyStack from './routes/MyStack';
import MyRootStack from './routes/MyRootStack';
import StudentTable from './screen/kk';

// import { Provider } from 'react-redux';
// import store from './components/store/store'
// import {useDispatch} from 'react-redux'



const App = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(false)
  // const [Loading, setLoading] = useState(true)
  // const [userToken, setUserToken] = useState(null)
  const [userInfo1, setUserInfo1] = useState([])

  const initialLoginState = {
    Loading: true,
    email: null,
    userToken: null,
    isAdmin:null,
    userInfo:[],

  }

  const loginReducer = (prevState, action) => {
    switch (action.type) {
      case 'RETRIEVE_TOKEN':
        return {
          ...prevState,
          userToken:action.token,
          isAdmin:action.isAdmin,
          email:action.email,
          userInfo:action.userInfo,
          Loading:false,
        };
      case 'LOGIN':
        return {
          ...prevState,
          email:action.email,
          userToken:action.token,
          isAdmin:action.isAdmin,
          userInfo:action.userInfo,
          Loading:false,
        };
      case 'LOGOUT':
        return {
          ...prevState,
          email:null,
          userToken:null,
          isAdmin:null,
          Loading:false,
          userInfo:[],

        };

      case 'REGISTER':
        return {
          ...prevState,
          email:action.email,
          userToken:action.token,
          isAdmin:action.isAdmin,
          Loading:false,
        };

      default:
        break;
    }
  }

  const [loginState,dispach]=useReducer(loginReducer,initialLoginState)

  const authContext = useMemo(() => ({
    SignIn: async(email,password) => {
      console.log(email,password);
      let userToken=null
      let emailInDispach=null
      let isAdmin=null
      let user=[]
      const getLoginInfo=await login(email,password)
      
      console.log("getinfo",getLoginInfo);


      if(getLoginInfo.token){
        try{
          userToken=getLoginInfo.token
          emailInDispach=email
          isAdmin=getLoginInfo.isAdmin
          console.log('up the userinfo1');
          await AsyncStorage.setItem('userToken',userToken)
          let getData=[]
          console.log('beforegetdata',getData);
          while(!getData){
            console.log('getdata',getData);
            getData=await getMyProfileByToken(getLoginInfo.token)
          }
          setUserInfo1(getData)
          console.log('down the userinfo1',userInfo1);

          
        }
        catch(error){
          console.log('error');
        }
        
        
      }
      dispach({type:'LOGIN',email:emailInDispach,token:userToken,isAdmin,userInfo:user})

    },
    // SignOut: () => {
    //   setUserToken(null)
    //   setLoading(false)
    // },
    SignOut: async() => {
      // setUserToken(null)
      // setLoading(false)
      try{
        userToken='gdfdg'
        await AsyncStorage.removeItem('userToken')
      }
      catch(error){
        console.log('error');
      }
      dispach({type:'LOGOUT'})
    },
    toggleTheme:()=>{
      setIsDarkTheme(isDarkTheme=>!isDarkTheme)
    },
    getUserInfo:()=>{
        console.log("userInfo1fromget",loginState.userToken);
      return userInfo1

      // console.log("userInfo1fromget",userInfo1);
      // return userInfo1
    }
  }), [])
  // if (Loading) {
  //   return (<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
  //     <ActivityIndicator size="large" color="#0000ff" />
  //   </View>)
  // }

  useEffect(() => {
    setTimeout(async() => {
      // setLoading(false)
      let userToken=null

      try{
        
        userToken=await AsyncStorage.getItem('userToken')
      }
      catch(error){
        console.log('error');
      }
    }, 1000);
  }, [])
  // const dispatch =useDispatch()
  // useEffect(() => {
  //   dispatch({
  //     type:'DARK_TOGGLE',
  //     payload:{
  //       name:'osama'
  //     }
  //   })

  // }, [dispatch])
  const toggleTheme = () => {
    // setIsDarkTheme(!isDarkTheme)
    return 'osama'
  }

  const CustomDefaultTheme = {
    ...NavigationDefaultTheme,
    ...PaperDefaultTheme,
    colors: {
      ...NavigationDefaultTheme.colors,
      ...PaperDefaultTheme.colors,
      background: '#ffffff',
      text: '#333333'
    }
  }

  const CustomDarkTheme = {
    ...NavigationDarkTheme,
    ...PaperDarkTheme,
    colors: {
      ...NavigationDarkTheme.colors,
      ...PaperDarkTheme.colors,
      background: '#333333',
      text: '#ffffff'
    }
  }

  const theme = isDarkTheme ? CustomDarkTheme : CustomDefaultTheme;





  return (




    <PaperProvider theme={theme}>
      <AuthContext.Provider value={authContext}>
        <NavigationContainer theme={theme}>
          {(loginState.userToken != null) ? (
            <MyDrawer />
          ) :
            <MyRootStack />
          }

          {/* <MyDrawer /> */}
          {/* <Login/> */}
          {/* <MyStack/> */}
          {/* <TableTest/> */}
        </NavigationContainer> 
        {/* <StudentTable/> */}
      </AuthContext.Provider>
    </PaperProvider>



  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 80
  },
});

export default App;