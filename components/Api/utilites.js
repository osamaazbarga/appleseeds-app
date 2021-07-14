
import Api from '../Api/MainApi'

export const login = async(email, password) => {
    console.log("login",email,password);
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

export const getMyProfileByToken=async(token)=>{

        const req=await Api.post('datagate.php?type=GetMyProfile', {
            token: token,
            v:2.4
    
        }).then((res)=> res.data)

        // console.log(req.data);
        return req
    
}


// const mapStringFromApi = (str) => {
//     const partByIndex = str.split(",")[0]
//     // console.log(partByIndex);
//     const tokenString = partByIndex.split(":")[1]
//     const token = tokenString.split("\"")[1]
//     console.log("title", token);
//     return token

// }

