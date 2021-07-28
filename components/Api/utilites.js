
import { useState } from 'react';
import Api from '../Api/MainApi'

export const login = async (email, password) => {
    console.log("login", email, password);
    // Api.post('datagate.php?type=login', {
    //     "email": email,
    //     "pass": password
    // }).then((req) => {
    //     console.log(req.data)
    //     return req.data

    // })
    const req = await Api.post('datagate.php?type=login', {
        email: email,
        pass: password

    })

    // const token = mapStringFromApi(req.data)
    console.log(req.data);
    return req.data
    // const req = await Api.post('datagate.php?type=login', {
    //     "email": "admin@email.com",
    //     "pass": 1234

    // })
    // // console.log(req.data);
    // // const token = mapStringFromApi(req.data)
    // console.log("token", req.data);
    // return req.data
}

// export const getMyProfileByToken=async(token)=>{
//     console.log('in the userinfo1',token);
//         const req=await Api.post('datagate.php?type=GetMyProfile', {
//             token: token,
//             v:2.4

//         }).then((res)=>{console.log("res",res.data);return res.data})

//         // console.log(req.data);
//         // return req.data

// }


// const mapStringFromApi = (str) => {
//     const partByIndex = str.split(",")[0]
//     // console.log(partByIndex);
//     const tokenString = partByIndex.split(":")[1]
//     const token = tokenString.split("\"")[1]
//     console.log("title", token);
//     return token

// }

export async function getMyProfileByToken(token) {
    const req = await Api.post('datagate.php?type=GetMyProfile', {
        token: token,
        v: 2.4

    })
    return req
}

export async function getCourses(token) {
    const req = await Api.post('datagate.php?type=GetMyEnrollments', {
        token: token,
        v: 2.4

    })
    return req
}

export async function getNetaStudentDetails(token) {//father and mather name
    const req = await Api.post('datagate.php?type=GetNetaStudentDetails', {
        token: token,
        v: 2.4

    })
    return req
}

export async function getUserProfileById(token, userId) {//get profile by id
    const req = await Api.post('datagate.php?type=GetUserProfileById', {
        userId: userId,
        token: token,
        v: 2.4

    })
    return req
}

export async function getGenders(token) {//get profile by id
    const req = await Api.post('datagate.php?type=GetGenders', {

        token: token,
        v: 2.4

    })
    return req
}

export async function getGenderByGenderId(token, g) {//get profile by id
    const req = await Api.post('datagate.php?type=GetGenders', {

        token: token,
        v: 2.4

    }).then((res) => {
        res.data.map((gender) => {
            if (gender.genderid == g) {
                console.log("choice",gender);
                return gender
            }
        })
    })
    // return ""
}

export async function getCities(token) {//get profile by id
    const req = await Api.post('datagate.php?type=GetCities', {

        token: token,
        v: 2.4

    })
    return req
}

export async function getCityByCityId(token, c) {//get profile by id
    const req = await Api.post('datagate.php?type=GetGenders', {

        token: token,
        v: 2.4

    }).then((res) => {
        res.data.map((city) => {
            if (city.cityid == c) {
                console.log("choice",city);
                return city
            }
        })
    })
    // return ""
}
